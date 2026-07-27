# Dia 01 — Conjuntos numéricos

**Meta:** reconhecer os conjuntos $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{I}$ e $\mathbb{R}$, e operar com união, interseção, diferença e complementar.

## Definição

Um **conjunto** é uma coleção bem definida de objetos (seus **elementos**). Escrevemos $x \in A$ quando $x$ pertence a $A$, e $x \notin A$ quando não pertence.

**Neste material**, adotamos:

| Conjunto | Símbolo | Descrição |
|----------|---------|-----------|
| Naturais | $\mathbb{N}$ | $\{0, 1, 2, 3, \ldots\}$ |
| Inteiros | $\mathbb{Z}$ | $\{\ldots, -2, -1, 0, 1, 2, \ldots\}$ |
| Racionais | $\mathbb{Q}$ | frações $p/q$ com $p, q \in \mathbb{Z}$ e $q \neq 0$ |
| Irracionais | $\mathbb{I}$ | reais que **não** são racionais (ex.: $\sqrt{2}$, $\pi$) |
| Reais | $\mathbb{R}$ | $\mathbb{Q} \cup \mathbb{I}$ |

Encadeamento usual (inclusão):

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R},
\quad
\mathbb{I} \subset \mathbb{R},
\quad
\mathbb{Q} \cap \mathbb{I} = \emptyset
$$

Se um enunciado usar “naturais positivos” ou “não nulos”, use $\mathbb{N}^{*} = \{1, 2, 3, \ldots\}$.

**Operações** (universo $U$ quando houver complementar):

- **União:** $A \cup B = \{x \mid x \in A \text{ ou } x \in B\}$
- **Interseção:** $A \cap B = \{x \mid x \in A \text{ e } x \in B\}$
- **Diferença:** $A \setminus B = \{x \mid x \in A \text{ e } x \notin B\}$
- **Complementar:** $A^{c} = U \setminus A = \{x \in U \mid x \notin A\}$
- **Subconjunto:** $A \subset B$ se todo elemento de $A$ também está em $B$

## Exemplos

**Exemplo 1.** Classificar $-3$, $0$, $\dfrac{2}{5}$, $\sqrt{2}$ e $\pi$.

- $-3 \in \mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ (não é natural nesta convenção)
- $0 \in \mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$
- $\dfrac{2}{5} \in \mathbb{Q}$, $\mathbb{R}$
- $\sqrt{2}, \pi \in \mathbb{I}$, $\mathbb{R}$ (não são racionais)

**Exemplo 2.** Se $A = \{1, 2, 3\}$ e $B = \{2, 3, 4\}$, então:

$$
A \cup B = \{1, 2, 3, 4\},
\quad
A \cap B = \{2, 3\},
\quad
A \setminus B = \{1\}
$$

Com universo $U = \{1, 2, 3, 4, 5\}$:

$$
A^{c} = \{4, 5\}
$$

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (conjuntos numéricos): [CONJUNTOS NUMÉRICOS — Dicasdemat Sandro Curió](https://www.youtube.com/watch?v=GLYEff_w-dE)
- Vídeoaula (união e interseção): [Conjuntos: União e Intersecção — Professor Ferretto](https://www.youtube.com/watch?v=c5a99sX-Sq8)
- Texto (livro aberto): [OpenStax College Algebra 2e — 1.1 Real Numbers: Algebra Essentials](https://openstax.org/books/college-algebra-2e/pages/1-1-real-numbers-algebra-essentials)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf)
