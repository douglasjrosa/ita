# Dia 06 — Funções — conceito

**Meta:** reconhecer uma **função** $f:A\to B$, ler domínio e imagem, e classificar **injeção** e **sobrejeção** — sem fechar a função afim (Dia 07).

## Definição

O programa do ITA pede **funções**: definição, domínio, contradomínio e imagem, e as noções de função **injetora**, **sobrejetora** e **bijetora**.

Uma **relação** de $A$ em $B$ é um conjunto de pares $(a,b)$ com $a\in A$ e $b\in B$. Essa relação é **função** $f:A\to B$ quando **cada** $a\in A$ tem **exatamente um** $b\in B$ associado. Escrevemos $b = f(a)$.

| Nome | Conjunto | Leitura |
|------|----------|---------|
| **Domínio** | $A$ (ou $D(f)$) | entradas **permitidas** |
| **Contradomínio** | $B$ | conjunto de chegada **declarado** |
| **Imagem** | $f(A) = \{f(a): a\in A\}$ | saídas **que de fato ocorrem** |

A imagem está **contida** no contradomínio; pode ser menor. Em textos em inglês, *range* às vezes mistura imagem e contradomínio — aqui separe os dois (OpenStax College Algebra 3.1).

**Injetora** (um-a-um): $f(a_1) = f(a_2) \Rightarrow a_1 = a_2$. Entradas distintas $\Rightarrow$ saídas distintas.  
**Sobrejetora**: $f(A) = B$ (a imagem **enche** o contradomínio).  
**Bijetora:** injetora **e** sobrejetora.

Não é função: um mesmo $a$ com dois $b$ diferentes. Dois $a$ distintos com o **mesmo** $b$ ainda pode ser função (só falha a injeção).

Gráfico (ideia, sem estudar retas): se uma reta **vertical** corta a curva mais de uma vez, **não** é função (teste da vertical). O teste da horizontal fala de injeção — útil depois, no Dia 07.

## Exemplos

**Exemplo 1.** $f:\{1,2,3\}\to\mathbb{R}$ dada por $f(n) = n+1$.  
Domínio $\{1,2,3\}$; imagem $\{2,3,4\}$. É **injetora**. Não é sobrejetora sobre $\mathbb{R}$ (faltam quase todos os reais).

**Exemplo 2.** $g:\mathbb{R}\to\mathbb{R}$, $g(x) = x^{2}$.  
$g(2) = g(-2) = 4$: **não** injetora. Imagem $[0,+\infty)$, logo **não** sobrejetora sobre $\mathbb{R}$. Se o contradomínio fosse $[0,+\infty)$, a mesma fórmula passaria a ser sobrejetora.

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (o que é função): [What is a function? — Khan Academy](https://www.youtube.com/watch?v=kvGsIo1TmsM)
- Vídeoaula (domínio e imagem): [Domain and range of a function — Khan Academy](https://www.youtube.com/watch?v=O0uUVH8dRiU)
- Texto: [OpenStax College Algebra 2e — 3.1 Functions and Function Notation](https://openstax.org/books/college-algebra-2e/pages/3-1-functions-and-function-notation)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Matemática — funções: domínio, imagem, injeção e sobrejeção)
