# Dia 02 — Gabarito (Divisibilidade, primos e TFA)

> Material próprio deste repositório — **não** é gabarito oficial do ITA.  
> Use só depois de tentar os [exercícios](exercicios.md).

[Teoria](teoria.md) · [Exercícios](exercicios.md)

---

## Exercício 1

**Resposta:**

(a) nem primo nem composto  
(b) primo  
(c) composto ($15 = 3 \cdot 5$)  
(d) primo  
(e) composto ($51 = 3 \cdot 17$)

**Desenvolvimento:** por definição, primo exige $n > 1$ com exatamente dois divisores positivos distintos ($1$ e $n$). O $1$ falha a condição $n > 1$ no sentido de “dois divisores distintos”; $15$ e $51$ têm fatoração própria.

**Pegadinha:** tratar $1$ como primo — isso quebraria a unicidade do TFA (poderíamos inserir fatores $1$ à vontade).

---

## Exercício 2

**Resposta:**

(a) V — $18 = 6 \cdot 3$  
(b) F — $20 / 8 = 2{,}5$ não é inteiro  
(c) V — $100 = 1 \cdot 100$  
(d) V — $0 = 7 \cdot 0$

**Desenvolvimento:** a definição só pede existência de inteiro $k$ com $b = a k$. Em (d), $k = 0$ funciona: todo inteiro não nulo divide $0$.

**Cuidado:** “dividir zero” costuma confundir com “dividir *por* zero” (proibido). Aqui o divisor é $7$, o dividendo é $0$.

---

## Exercício 3

**Resposta:**

(a) $84 = 2^2 \cdot 3 \cdot 7$  
(b) $100 = 2^2 \cdot 5^2$  
(c) $315 = 3^2 \cdot 5 \cdot 7$

**Desenvolvimento (esboço):**  
$84 = 2 \cdot 42 = 2 \cdot 2 \cdot 21 = 2^2 \cdot 3 \cdot 7$;  
$100 = 10^2 = (2 \cdot 5)^2 = 2^2 \cdot 5^2$;  
$315 = 5 \cdot 63 = 5 \cdot 3^2 \cdot 7$.

**Dica:** organize os primos em ordem crescente; isso é a forma canônica pedida pelo TFA.

---

## Exercício 4

**Resposta:**

(a) $12$ divisores  
(b) $16$ divisores

**Desenvolvimento:**

$$
72 = 2^3 \cdot 3^2 \implies (3+1)(2+1) = 4 \cdot 3 = 12
$$

$$
1000 = 10^3 = (2 \cdot 5)^3 = 2^3 \cdot 5^3 \implies (3+1)(3+1) = 16
$$

**Salto de raciocínio:** cada expoente $e_i$ na fatoração pode aparecer de $0$ até $e_i$ no divisor — daí o fator $(e_i + 1)$.

**Pegadinha:** esquecer que $1000 = 2^3 \cdot 5^3$ e contar “três zeros” como se bastasse.

---

## Exercício 5

**Resposta:**

| Número | Divisível por $3$? | Divisível por $4$? |
|--------|--------------------|--------------------|
| $124$ | não (soma $1+2+4=7$) | sim ($24$ divisível por $4$) |
| $231$ | sim (soma $2+3+1=6$) | não ($31$ não) |
| $312$ | sim (soma $3+1+2=6$) | sim ($12$ divisível por $4$) |
| $405$ | sim (soma $4+0+5=9$) | não ($05 = 5$ não) |

**Desenvolvimento:** use os critérios da teoria; confira um caso com divisão se quiser validar o método.

**Dica:** para $4$, olhe **só** os dois últimos algarismos — não some todos os dígitos (isso é critério de $3$).
