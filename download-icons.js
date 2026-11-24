#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");
const { promisify } = require("util");
const execFileAsync = promisify(execFile);

const OUT_DIR = path.join(__dirname, "game-items");
const API = "https://stardewvalleywiki.com/mediawiki/api.php";
const UA = "ITA-painel-icon-bot/1.0 (educational print poster; local cache)";
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MIN_BYTES = 80;

const TITLE_OVERRIDES = {
  Lost_Books: "Lost Book",
  Secret_Notes: "Secret Note",
  Strange_Doll_green: "Strange Doll (green)",
  Strange_Doll_yellow: "Strange Doll (yellow)",
};

const GROUPS = [
  ["mat-fundacao", ["Topaz", "Amethyst", "Aquamarine", "Emerald"]],
  ["mat-aprofundamento", ["Rusty_Cog", "Rare_Disc", "Diamond", "Stardrop"]],
  ["mat-intensidade", ["Qi_Gem", "Return_Scepter", "Statue_Of_Perfection", "Gold_Clock"]],
  ["fis-fundacao", ["Coal", "Copper_Bar", "Iron_Bar", "Battery_Pack"]],
  ["fis-aprofundamento", ["Gold_Bar", "Refined_Quartz", "Galaxy_Soul", "Iridium_Bar"]],
  ["fis-intensidade", ["Cinder_Shard", "Magnifying_Glass", "Prismatic_Shard", "Pearl"]],
  ["qui-fundacao", ["Sap", "Geode", "Energy_Tonic", "Life_Elixir"]],
  ["qui-aprofundamento", ["Frozen_Geode", "Magma_Geode", "Solar_Essence", "Void_Essence"]],
  ["qui-intensidade", ["Omni_Geode", "Fairy_Dust", "Radioactive_Ore", "Radioactive_Bar"]],
  ["por-fundacao", ["Soggy_Newspaper", "Duck_Feather", "Dwarf_Scroll_I", "Lost_Books"]],
  ["por-aprofundamento", ["Dwarf_Scroll_II", "Dwarf_Scroll_III", "Dwarf_Scroll_IV", "Dwarvish_Translation_Guide"]],
  ["por-intensidade", ["Secret_Notes", "Magic_Ink", "Book_Of_Stars", "Key_To_The_Town"]],
  ["ing-fundacao", ["Driftwood", "Nautilus_Shell", "Anchor", "Treasure_Chest"]],
  ["ing-aprofundamento", ["Ancient_Doll", "Strange_Doll_(green)", "Strange_Doll_(yellow)", "Ancient_Seed"]],
  ["ing-intensidade", ["Golden_Walnut", "Golden_Coconut", "Prize_Ticket", "Golden_Pumpkin"]],
];

function wikiTitle(itemKey) {
  if (TITLE_OVERRIDES[itemKey]) return TITLE_OVERRIDES[itemKey];
  return itemKey.replace(/_/g, " ");
}

function fileTitle(itemKey) {
  return wikiTitle(itemKey);
}

async function curlBuffer(url) {
  // Cloudflare blocks Node's fetch; curl is allowed through.
  const { stdout } = await execFileAsync(
    "curl",
    ["-sS", "-L", "--fail", "-A", UA, url],
    { encoding: "buffer", maxBuffer: 2 * 1024 * 1024 }
  );
  return stdout;
}

async function apiJson(params) {
  const url = `${API}?${new URLSearchParams({ format: "json", ...params })}`;
  const buf = await curlBuffer(url);
  return JSON.parse(buf.toString("utf8"));
}

async function downloadBuffer(url) {
  return curlBuffer(url);
}

function isPng(buf) {
  return Buffer.isBuffer(buf) && buf.length >= MIN_BYTES && buf.subarray(0, 8).equals(PNG_MAGIC);
}

async function urlFromPageimages(title) {
  const data = await apiJson({
    action: "query",
    prop: "pageimages",
    piprop: "original",
    redirects: "1",
    titles: title,
  });
  const pages = data.query && data.query.pages ? Object.values(data.query.pages) : [];
  const page = pages[0];
  if (page && page.original && page.original.source) return page.original.source;
  return null;
}

async function urlFromFile(title) {
  const data = await apiJson({
    action: "query",
    prop: "imageinfo",
    iiprop: "url",
    redirects: "1",
    titles: `File:${title}.png`,
  });
  const pages = data.query && data.query.pages ? Object.values(data.query.pages) : [];
  const page = pages[0];
  if (page && page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url) {
    return page.imageinfo[0].url;
  }
  return null;
}

async function urlFromInfobox(title) {
  const data = await apiJson({
    action: "parse",
    page: title,
    prop: "text",
  });
  const html = data.parse && data.parse.text && data.parse.text["*"];
  if (!html) return null;
  const infobox = html.match(/class="[^"]*infoboximage[^"]*"[\s\S]{0,800}?src="([^"]+)"/i)
    || html.match(/class="[^"]*infobox[^"]*"[\s\S]{0,1200}?class="image"[^>]*>\s*<img[^>]+src="([^"]+)"/i)
    || html.match(/<img[^>]+class="[^"]*mw-file-element[^"]*"[^>]+src="([^"]+\.png)"/i);
  if (!infobox) return null;
  let src = infobox[1].replace(/&amp;/g, "&");
  if (src.startsWith("//")) src = `https:${src}`;
  if (src.startsWith("/")) src = `https://stardewvalleywiki.com${src}`;
  return src;
}

async function resolveImageUrl(itemKey) {
  const title = wikiTitle(itemKey);
  const file = fileTitle(itemKey);
  const attempts = [
    () => urlFromFile(file),
    () => urlFromPageimages(title),
    () => urlFromInfobox(title),
  ];
  for (const attempt of attempts) {
    try {
      const url = await attempt();
      if (url) return url;
    } catch (err) {
      process.stderr.write(`warn ${itemKey}: ${err.message}\n`);
    }
  }
  throw new Error(`no image URL for ${itemKey} (wiki title "${title}")`);
}

async function saveIcon(dest, itemKey) {
  const url = await resolveImageUrl(itemKey);
  const buf = await downloadBuffer(url);
  if (!isPng(buf)) {
    throw new Error(`not a valid PNG (${buf.length} bytes) from ${url}`);
  }
  fs.writeFileSync(dest, buf);
  return { dest, bytes: buf.length, url };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jobs = [];
  for (const [prefix, items] of GROUPS) {
    items.forEach((itemKey, i) => {
      jobs.push({
        file: `${prefix}-${i + 1}.png`,
        itemKey,
      });
    });
  }
  if (jobs.length !== 60) {
    throw new Error(`expected 60 jobs, got ${jobs.length}`);
  }

  const results = [];
  for (const job of jobs) {
    const dest = path.join(OUT_DIR, job.file);
    process.stdout.write(`↓ ${job.file}  ← ${job.itemKey}\n`);
    results.push(await saveIcon(dest, job.itemKey));
  }

  const files = fs.readdirSync(OUT_DIR).filter((name) => name.endsWith(".png")).sort();
  if (files.length !== 60) {
    throw new Error(`expected 60 png files in game-items/, found ${files.length}`);
  }
  const bad = [];
  for (const name of files) {
    const buf = fs.readFileSync(path.join(OUT_DIR, name));
    if (!isPng(buf)) bad.push(`${name} (${buf.length} bytes)`);
  }
  if (bad.length) {
    throw new Error(`corrupt or empty PNGs:\n  ${bad.join("\n  ")}`);
  }

  process.stdout.write(`\nOK ${results.length} icons in ${OUT_DIR}\n`);
}

main().catch((err) => {
  process.stderr.write(`${err.stack || err.message}\n`);
  process.exit(1);
});
