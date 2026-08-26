# Dia 04 — Sequências e PA

**Meta:** reconhecer a **lei de formação** de uma sequência, identificar uma **progressão aritmética (PA)** pela razão constante e usar o termo geral e a soma dos $n$ primeiros termos.

## Definição

Uma **sequência** (ou sucessão) numérica associa a cada posição $n = 1, 2, 3, \ldots$ um termo $a_n$. Pode ser dada por lista, por **lei de formação** (fórmula explícita) ou por **recorrência** ($a_n$ em função de termos anteriores).

O programa do ITA inclui sequências (lei de formação, recorrência) e **progressões aritméticas**: propriedades e soma dos termos.

**Progressão aritmética (PA):** a partir do segundo termo, cada um se obtém somando ao anterior uma constante $r$, a **razão**.

$$
a_n = a_{n-1} + r \quad (n \geq 2)
$$

Equivalentemente, a diferença $a_{n} - a_{n-1}$ é a mesma para todo $n$.

**Termo geral** (primeiro termo $a_1$, razão $r$; em textos em inglês a razão costuma ser $d$):

$$
a_n = a_1 + (n-1)r
$$

**Soma dos $n$ primeiros termos** $S_n = a_1 + a_2 + \cdots + a_n$:

$$
S_n = \frac{n}{2}\bigl(a_1 + a_n\bigr) = \frac{n}{2}\bigl[2a_1 + (n-1)r\bigr]
$$

Ideia da primeira forma: $n$ pares $(a_1+a_n)$ iguais, depois divide por $2$ (argumento clássico atribuído à soma $1+\cdots+n$).

**Observações úteis:**

- $r > 0$: PA crescente; $r < 0$: decrescente; $r = 0$: constante.  
- Três termos $a$, $b$, $c$ estão em PA $\Leftrightarrow$ $2b = a + c$ (o do meio é média aritmética).  
- Progressão **geométrica** (multiplicar por uma razão) fica no Dia 05.

## Exemplos

**Exemplo 1.** PA $5$, $8$, $11$, $14$, $\ldots$ tem $a_1 = 5$ e $r = 3$. O décimo termo:

$$
a_{10} = 5 + 9\cdot 3 = 32.
$$

**Exemplo 2.** Soma dos inteiros de $1$ a $100$ (PA com $a_1 = 1$, $a_{100} = 100$, $n = 100$):

$$
S_{100} = \frac{100}{2}(1+100) = 5050.
$$

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (PA, PT): [PROGRESSÃO ARITMÉTICA (P.A.) — Resumo de Matemática para o Enem](https://www.youtube.com/watch?v=sGsCCgnGzic)
- Vídeoaula (definição e fórmulas explícita/recursiva): [Introduction to arithmetic sequences — Khan Academy](https://www.youtube.com/watch?v=_cooC3yG_p0)
- Texto (livro aberto): [OpenStax Intermediate Algebra — 12.2 Arithmetic Sequences](https://openstax.org/books/intermediate-algebra/pages/12-2-arithmetic-sequences)
- Texto (soma / séries): [OpenStax College Algebra — 9.4 Series and Their Notations](https://openstax.org/books/college-algebra-corequisite-support-2e/pages/9-4-series-and-their-notations)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Matemática — sequências; PA: propriedades e soma)
