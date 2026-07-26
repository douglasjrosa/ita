# Dia 01 — Introdução e unidades

**Meta:** reconhecer grandezas físicas, o Sistema Internacional (SI), prefixos e conversões simples usadas em mecânica, e checar coerência dimensional de uma expressão.

## Definição

Uma **grandeza física** é uma propriedade mensurável (comprimento, tempo, massa, …).  
Uma **unidade** é o padrão usado para expressar o valor dessa grandeza.

O **Sistema Internacional de Unidades (SI)** fixa unidades de base. No início da mecânica, as mais usadas são:

| Grandeza | Unidade SI | Símbolo |
|----------|------------|---------|
| Comprimento | metro | m |
| Tempo | segundo | s |
| Massa | quilograma | kg |

Outras unidades do SI (ampere, kelvin, mol, candela) aparecem em eletromagnetismo, térmica e química — você as encontra no programa completo do ITA.

**Prefixos** (potências de 10) evitam números enormes ou minúsculos. Exemplos frequentes:

| Prefixo | Fator | Exemplo |
|---------|-------|---------|
| quilo ($k$) | $10^{3}$ | $1\,\mathrm{km} = 10^{3}\,\mathrm{m}$ |
| centi ($c$) | $10^{-2}$ | $1\,\mathrm{cm} = 10^{-2}\,\mathrm{m}$ |
| mili ($m$) | $10^{-3}$ | $1\,\mathrm{ms} = 10^{-3}\,\mathrm{s}$ |
| micro ($\mu$) | $10^{-6}$ | $1\,\mu\mathrm{s} = 10^{-6}\,\mathrm{s}$ |

**Conversão:** multiplique (ou divida) pelo fator que troca a unidade, cancelando o que não interessa.

**Coerência dimensional:** os dois lados de uma igualdade física devem ter a **mesma dimensão**. Ex.: velocidade tem dimensão comprimento/tempo ($L/T$), não força.

## Exemplos

**Exemplo 1.** Converter $3\,\mathrm{km}$ para metros.

$$
3\,\mathrm{km} = 3 \times 10^{3}\,\mathrm{m} = 3000\,\mathrm{m}
$$

**Exemplo 2.** Velocidade média $v = \Delta s / \Delta t$. Se $\Delta s = 100\,\mathrm{m}$ e $\Delta t = 5\,\mathrm{s}$:

$$
v = \frac{100}{5} = 20\,\mathrm{m/s}
$$

Em $\mathrm{km/h}$: $20 \times 3{,}6 = 72\,\mathrm{km/h}$  
(o fator $3{,}6$ vem de $\dfrac{3600\,\mathrm{s/h}}{1000\,\mathrm{m/km}}$).

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (SI — bases): [Sistema Internacional de Unidades (SIU) — Prof. Marcos Rossetto](https://www.youtube.com/watch?v=VultrEX7cVA)
- Vídeoaula (conversões): [Conversão de unidades na Física — Prof. Luizildo Pittol](https://www.youtube.com/watch?v=AXMXQnGxk3w)
- Texto (livro aberto): [OpenStax College Physics 2e — 1.2 Physical Quantities and Units](https://openstax.org/books/college-physics-2e/pages/1-2-physical-quantities-and-units)
- Referência oficial (SI, PT-BR): [Inmetro — Sistema Internacional de Unidades (tradução)](https://www.gov.br/inmetro/pt-br/assuntos/metrologia-cientifica/documentos-tecnicos-em-metrologia/si_versao_final.pdf)
- Referência oficial (SI, EN): [NIST SP 330 — The International System of Units (2019)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.330-2019.pdf)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf)
