# Dia 03 — Gabarito (Indução e gavetas)

> Material próprio deste repositório — **não** é gabarito oficial do ITA.  
> Use só depois de tentar os [exercícios](exercicios.md).

[Teoria](teoria.md) · [Exercícios](exercicios.md)

---

## Exercício 1

**Resposta:**

(a) Base: para $n=1$, o único termo é $1$ e $1^{2}=1$. OK.  
(b) HI: $1+3+\cdots+(2k-1)=k^{2}$.  
(c) Passo:

$$
1+3+\cdots+(2k-1)+(2(k+1)-1) = k^{2} + (2k+1) = (k+1)^{2}.
$$

**Desenvolvimento:** o próximo ímpar após $2k-1$ é $2k+1$; somar $2k+1$ a $k^{2}$ completa o quadrado.

**Dica:** escreva o último termo do lado esquerdo explicitamente — evita errar o índice.

---

## Exercício 2

**Resposta (esqueleto):**

- **Base ($n=1$):** $2^{1}=2 \geq 1+1=2$. OK.  
- **HI:** $2^{k} \geq k+1$.  
- **Passo:** $2^{k+1} = 2\cdot 2^{k} \geq 2(k+1) = 2k+2$.  
  Como $2k+2 \geq (k+1)+1 = k+2$ (pois $2k+2 - (k+2) = k \geq 1$), temos $2^{k+1} \geq k+2$.

**Desenvolvimento:** a HI multiplica por $2$; depois compare $2(k+1)$ com o alvo $k+2$.

**Cuidado:** “parece óbvio” não substitui a cadeia $2\cdot 2^{k} \geq \cdots \geq k+2$.

---

## Exercício 3

**Resposta:** $3$ meias.

**Desenvolvimento:**  
- Objetos: meias retiradas.  
- Gavetas: $2$ cores.  
No pior caso, tira $1$ preta e $1$ branca; a **terceira** força um par da mesma cor ($2$ numa gaveta).

**Salto de raciocínio:** garantia = pensar no **pior caso** + uma unidade a mais (versão básica: $n+1$ em $n$ gavetas).

---

## Exercício 4

**Resposta:** $25$ pessoas.

**Desenvolvimento:** $12$ meses (gavetas). Para **evitar** ter $3$ no mesmo mês, o máximo é $2$ por mês: $12\cdot 2 = 24$. A $25^{\text{a}}$ pessoa força algum mês a ter $3$.

Equivalente: precisa garantir $\left\lceil m/12 \right\rceil \geq 3$, logo $m/12 > 2$ $\Rightarrow$ $m \geq 25$.

**Pegadinha:** responder $13$ (isso só garante **duas** no mesmo mês).

---

## Exercício 5

**Resposta:**

(a) **Falso** — com $7$ em $7$, é possível uma por casa; o princípio exige **mais** objetos que gavetas (na versão básica).  
(b) **Falso** — sem base, o passo não “liga” a cadeia; a indução fica sem ponto de partida.

**Desenvolvimento:** (a) $m > n$ (ou $m \geq n+1$) é essencial na forma vista aqui. (b) base + passo formam o par inseparável do método.

**Cuidado:** confundir “pode acontecer” com “é garantido” — gavetas falam de **garantia**, não de probabilidade.
