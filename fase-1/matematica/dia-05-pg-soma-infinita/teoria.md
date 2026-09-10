# Dia 05 — PG e soma infinita

**Meta:** reconhecer uma **progressão geométrica (PG)**, usar termo geral e soma finita, e aplicar a soma infinita só quando $|q| < 1$.

## Definição

O programa do ITA pede progressões aritméticas e **geométricas**: propriedades e **soma dos termos de uma PG infinita**.

**PG:** a partir do segundo termo, cada um se obtém **multiplicando** o anterior por uma constante $q$, a **razão** (em textos em inglês, *common ratio* $r$).

$$
a_n = a_{n-1}\cdot q \quad (n \geq 2),\qquad q = \frac{a_n}{a_{n-1}}
$$

(os termos não nulos; $q$ pode ser negativa — a sequência alterna sinal.)

**Termo geral** (primeiro termo $a_1$):

$$
a_n = a_1\cdot q^{n-1}
$$

Três números $a$, $b$, $c$ nesta ordem formam PG $\Leftrightarrow$ $b^{2} = ac$ (o do meio é média **geométrica**), com o cuidado dos sinais.

**Soma dos $n$ primeiros termos** $S_n$ ($q \neq 1$):

$$
S_n = a_1\frac{q^{n}-1}{q-1} = a_1\frac{1-q^{n}}{1-q}
$$

Se $q = 1$, a PG é constante e $S_n = n\, a_1$.

Ideia da fórmula: $S_n - q S_n$ cancela os termos do meio e sobra $a_1 - a_1 q^{n}$ (OpenStax Intermediate Algebra 12.3).

**PG infinita:** a série $a_1 + a_1 q + a_1 q^{2} + \cdots$ tem soma **finita** se e somente se $|q| < 1$ (os termos vão a zero). Nesse caso:

$$
S = \frac{a_1}{1-q}
$$

Se $|q| \geq 1$, a série **diverge** (não use $S = a_1/(1-q)$). O ITA cobra exatamente essa soma quando ela existe.

## Exemplos

**Exemplo 1.** PG $3$, $6$, $12$, $24$, $\ldots$ tem $a_1 = 3$ e $q = 2$. O quinto termo:

$$
a_5 = 3\cdot 2^{4} = 48.
$$

**Exemplo 2.** Soma $1 + \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \cdots$ ($a_1 = 1$, $q = 1/2$, $|q|<1$):

$$
S = \frac{1}{1-1/2} = 2.
$$

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (PG, PT): [PROGRESSÃO GEOMÉTRICA (PG) — Resumo de Matemática para o Enem](https://www.youtube.com/watch?v=jPzP4humgUM)
- Vídeoaula (definição): [Geometric sequences — Khan Academy](https://www.youtube.com/watch?v=dIGLhLMsy2U)
- Vídeoaula (convergência da série): [Geometric series convergence and divergence examples — Khan Academy](https://www.youtube.com/watch?v=HP8ZTo2iDtw)
- Texto (termo geral, $S_n$, soma infinita): [OpenStax Intermediate Algebra 2e — 12.3 Geometric Sequences and Series](https://openstax.org/books/intermediate-algebra-2e/pages/12-3-geometric-sequences-and-series)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Matemática, item 3 — PG; soma de PG infinita)
