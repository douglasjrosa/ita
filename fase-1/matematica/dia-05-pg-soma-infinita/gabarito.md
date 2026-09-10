# Dia 05 — Gabarito (PG e soma infinita)

> Material próprio deste repositório — **não** é gabarito oficial do ITA.  
> Use só depois de tentar os [exercícios](exercicios.md).

[Teoria](teoria.md) · [Exercícios](exercicios.md)

---

## Exercício 1

**Resposta:**

(a) sim; $q = 2$  
(b) sim; $q = 1/3$  
(c) não (razões $2$, $1{,}5$, $4/3$ — é PA de razão $2$)  
(d) sim; $q = -2$

**Desenvolvimento:** teste $a_{k+1}/a_k$ constante. Em (d) o sinal alterna porque $q < 0$.

**Pegadinha:** (c) “cresce” mas **soma** constante, não produto — PA do Dia 04.

---

## Exercício 2

**Resposta:** $a_6 = 972$.

**Desenvolvimento:**

$$
a_6 = a_1 q^{5} = 4\cdot 3^{5} = 4\cdot 243 = 972
$$

**Dica:** o expoente é $n-1$, não $n$. $3^{5} = 243$, não $3^{6}$.

---

## Exercício 3

**Resposta:** $S_5 = 242$.

**Desenvolvimento:**

$$
S_5 = 2\cdot\frac{3^{5}-1}{3-1} = 2\cdot\frac{243-1}{2} = 242
$$

Conferência: $2+6+18+54+162 = 242$.

---

## Exercício 4

**Resposta:** sim; $S = 16$.

**Desenvolvimento:** $a_1 = 8$, $q = 1/2$, $|q|<1$.

$$
S = \frac{8}{1-1/2} = 16
$$

**Salto de raciocínio:** $|q|<1$ é o interruptor da fórmula infinita; aqui $q = 1/2$, não $2$.

---

## Exercício 5

**Resposta:**

(a) $8000$ bactérias  
(b) não — $q = 2$, $|q|\geq 1$, a série diverge

**Desenvolvimento:** PG com $a_1 = 500$ (às $8\,\mathrm{h}$) e $q = 2$. Quatro horas depois é o termo $a_5$ (instantes $8$, $9$, $10$, $11$, $12$):

$$
a_5 = 500\cdot 2^{4} = 8000
$$

A soma hora a hora **ilimitada** teria $q = 2$; $S = a_1/(1-q)$ **não** se aplica.

**Cuidado:** contar intervalos ($4$ horas $\Rightarrow$ multiplicar por $2^{4}$, partindo do valor das $8\,\mathrm{h}$ como $a_1$).
