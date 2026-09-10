# /criar — próxima leva de lições (uma por matéria)

**Sem argumento.** `/criar` sozinho avança a **próxima lição pendente** de cada matéria, segundo [`index.json`](../../index.json).

Não passe `fase-n/<materia>/dia-NN`. O agente resolve as pastas pelo índice.

## Papel

Agente de **produção**. O aluno consome só via GitHub Pages; não tutore no chat.

Matérias (nessa ordem, sempre as cinco):

`fisica` · `ingles` · `matematica` · `portugues` · `quimica`

## 1. Ler o índice e montar o plano (obrigatório, antes de escrever)

1. Leia `index.json` na raiz do repo.
2. Para **cada** matéria, a próxima lição é a primeira chave `dia-NN-*` com valor `"pendente"`, percorrendo as fases nesta ordem: `fase-1` → `fase-2` → `fase-3` (ordem das chaves no JSON já segue o dia).
3. Confirme pasta + título em `docs/curriculum-map.md` e `FASE_n.md`. A pasta deve existir e ser única.
4. **Crie um plano** com TODOs (`TodoWrite`; `CreatePlan` se a sessão estiver em Plan mode):
   - Uma TODO **por matéria** (as cinco, na ordem acima), cada uma apontando pasta completa, título e trio `teoria.md` / `exercicios.md` / `gabarito.md`.
   - Se uma matéria **não** tiver nenhum `"pendente"` em nenhuma fase: TODO cancelada ou nota no plano (“nada pendente”) — não invente dia.
   - **Última TODO** (depois das matérias): atualizar `index.json` (`pendente` → `"feito"` só nas lições desta leva), rodar `python3 scripts/sync-fase-checkboxes.py` (marca `[x]` em `FASE_*.md` conforme o índice) **e** commit + push para **produção**.
5. Em Plan mode: apresente o plano e **espere confirmação** antes de escrever os `.md`.
6. Em Agent mode: grave as TODOs e execute na mesma ordem (matérias, depois índice + git).

## 2. Pesquisar e escrever cada lição

Para cada TODO de matéria, o fluxo é o mesmo de um dia isolado:

- Leia `templates/teoria.md`, `templates/exercicios.md`, `templates/gabarito.md`.
- Leia rules: produção, day-files, phase-files, repo-safety.
- Se já existirem `.md`, melhore/substitua mantendo a estrutura; **não** apague pastas vizinhas.
- Pesquise com fontes reais (programa ITA, livros/apostilas de domínio público, páginas acadêmicas, YouTube de canais sérios). Prefira URL estável. Não invente `watch?v=`; se o vídeo não existir, deixe busca pendente de curadoria.
- **Vídeoaula no YouTube:** busque primeiro em **português (PT-BR)**; só recomende vídeo em **inglês** se nenhum em português for adequado (exceto dias de **inglês**, onde vídeo autêntico em inglês pode entrar depois da mesma busca em PT-BR).
- Escreva os três arquivos em **PT-BR**:
  - Math: só `$...$` e `$$...$$`.
  - `teoria.md`: Meta → Definição → Exemplos (≤2) → Nesta lição → Mídias.
  - `exercicios.md`: só título + exercícios com espaço em branco (sem intro, sem nav, sem label “Espaço para resolução”).
  - `gabarito.md`: resposta + desenvolvimento + dicas/pegadinhas/saltos; material próprio (não gabarito oficial ITA).
  - Imagens: `media/` **dentro** da pasta do dia, links relativos. Sem imagem agora: `<!-- TODO media: descrição -->` e Pendências.
- Marque a TODO da matéria como `completed` ao terminar o trio.

Não criar: `HOJE.md`, skills de tutor do aluno, gabaritos oficiais inventados do ITA.

## 3. Última TODO — índice e produção

Só depois das matérias desta leva:

1. Em `index.json`, troque `"pendente"` por `"feito"` **apenas** nas lições realmente geradas neste `/criar`.
2. Rode `python3 scripts/sync-fase-checkboxes.py` para alinhar as checkboxes de `FASE_1.md`, `FASE_2.md` e `FASE_3.md` ao índice (lições `"feito"` → `[x]`).
3. **Commit** com mensagem descritiva em inglês (ex.: o que cada matéria avançou).
4. **Push para produção:** `origin/main`. Se `origin/master` existir, envie o mesmo commit para lá também.
5. `/criar` **já é** o pedido explícito de commit/push (exceção à regra geral de não commitar sem pedir).

Não espere um segundo “commit e push” no chat.

## 4. Resposta no chat (obrigatória)

PT-BR. Um bloco por matéria gerada, depois git:

### Alvos desta leva
- matéria → pasta completa (`fase-n/<materia>/dia-NN-slug/`)

### Por matéria
Para cada uma: arquivos gerados; fontes numeradas (título, URL ou obra, tipo, o que foi aproveitado); 3–6 sugestões NotebookLM; pendências.

### Índice e git
- chaves de `index.json` alteradas e `FASE_*.md` sincronizados (`sync-fase-checkboxes.py`)
- SHA do commit e branches remotas atualizadas (`main` / `master`)

## Critério de qualidade

Conteúdo curto, correto e utilizável amanhã no papel; curadoria > volume; fontes revisáveis pelo produtor.
