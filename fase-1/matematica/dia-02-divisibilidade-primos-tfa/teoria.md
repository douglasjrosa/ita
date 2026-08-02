# Dia 02 — Divisibilidade, primos e TFA

**Meta:** decidir se um inteiro divide outro, reconhecer primos e compostos, e aplicar o Teorema Fundamental da Aritmética (fatoração única em primos) em cálculos simples de divisores.

## Definição

**Divisibilidade.** Dizemos que o inteiro $a$ **divide** o inteiro $b$ (notação: $a \mid b$) quando existe um inteiro $k$ tal que

$$
b = a \cdot k.
$$

Nesse caso, $b$ é **múltiplo** de $a$, e $a$ é **divisor** (ou fator) de $b$.  
Se não existe tal $k$, escrevemos $a \nmid b$.

Exemplos rápidos: $3 \mid 12$ (pois $12 = 3 \cdot 4$); $5 \nmid 12$.

**Primo e composto.** Um inteiro $n > 1$ é **primo** se seus únicos divisores positivos são $1$ e $n$.  
Se $n > 1$ não é primo, é **composto** (tem um divisor $d$ com $1 < d < n$).  
O número $1$ **não** é primo nem composto.

**Teorema Fundamental da Aritmética (TFA).** Todo inteiro $n > 1$ se escreve como produto de primos, e essa escrita é **única** a menos da ordem dos fatores. Forma canônica:

$$
n = p_1^{e_1} p_2^{e_2} \cdots p_r^{e_r},
$$

com primos $p_1 < p_2 < \cdots < p_r$ e expoentes $e_i \geq 1$.

**Consequência útil (quantidade de divisores positivos):** se $n = p_1^{e_1} \cdots p_r^{e_r}$, então $n$ tem

$$
(e_1 + 1)(e_2 + 1)\cdots(e_r + 1)
$$

divisores positivos.

**Critérios de divisibilidade** (lembretes práticos, sem prova completa aqui):

| Divide por | Critério usual |
|------------|----------------|
| $2$ | último algarismo par |
| $3$ | soma dos algarismos divisível por $3$ |
| $5$ | último algarismo $0$ ou $5$ |
| $4$ | dois últimos algarismos formam número divisível por $4$ |

O programa oficial do ITA 2026 destaca conjuntos numéricos e indução/gavetas no bloco inicial; a fatoração em primos e a contagem de divisores aparecem de fato em provas recentes e sustentam boa parte da aritmética elementar usada no restante do curso.

## Exemplos

**Exemplo 1.** Fatorar $360$ e contar divisores positivos.

$$
360 = 2^3 \cdot 3^2 \cdot 5
$$

Número de divisores: $(3+1)(2+1)(1+1) = 4 \cdot 3 \cdot 2 = 24$.

**Exemplo 2.** Classificar $1$, $17$ e $91$.

- $1$: nem primo nem composto.  
- $17$: só divisores $1$ e $17$ → **primo**.  
- $91 = 7 \cdot 13$ → **composto**.

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (critérios de divisibilidade): [Matemática Básica — Aula 6 — Critérios de divisibilidade — Prof. Ferretto](https://www.youtube.com/watch?v=nBYcEu3P6EQ)
- Vídeoaula (números primos): [Matemática Básica — Aula 7 — Números primos — Prof. Ferretto](https://www.youtube.com/watch?v=qYww45PyTEs)
- Vídeoaula (fatoração prima): [Prime factorization — Khan Academy](https://www.youtube.com/watch?v=kSaUsBYCAms)
- Texto (módulo OBMEP): [Números naturais — representação, operações e divisibilidade](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=52) (seção de primos / TFA)
- Texto (definição do TFA): [Teorema fundamental da aritmética — Wikipédia (EN)](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Matemática, item 1 — conjuntos numéricos)
- Exemplo em prova: [ITA 2025 — 1ª fase (PDF)](https://www.vestibular.ita.br/provas/2025_fase1.pdf) (questão com contagem de divisores / fatores primos)
