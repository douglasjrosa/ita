# Dia 01 — Gabarito (Conjuntos numéricos)

> Material próprio deste repositório — **não** é gabarito oficial do ITA.  
> Use só depois de tentar os [exercícios](exercicios.md).

[Teoria](teoria.md) · [Exercícios](exercicios.md)

---

## Exercício 1

**Resposta:**

| Número | Pertence a |
|--------|------------|
| (a) $-7$ | $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ |
| (b) $\dfrac{3}{4}$ | $\mathbb{Q}$, $\mathbb{R}$ |
| (c) $\sqrt{9}$ | $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ |
| (d) $\sqrt{7}$ | $\mathbb{I}$, $\mathbb{R}$ |
| (e) $0{,}121212\ldots$ | $\mathbb{Q}$, $\mathbb{R}$ |

**Desenvolvimento:**

- (a) Inteiro negativo: está em $\mathbb{Z}$ e, como $-7 = (-7)/1$, também em $\mathbb{Q}$ e em $\mathbb{R}$. Não é natural.
- (b) Fração de inteiros com denominador $\neq 0$: racional (logo real).
- (c) $\sqrt{9} = 3$, que é natural (e portanto inteiro, racional e real).
- (d) $\sqrt{7}$ não é razão de inteiros: irracional (e real).
- (e) Dízima periódica equivale a uma fração (ex.: $0{,}\overline{12} = 12/99 = 4/33$): racional.

**Pegadinha:** $\sqrt{9}$ “parece” irracional por causa do radical, mas o resultado é inteiro.  
**Cuidado:** a convenção $0 \in \mathbb{N}$ deste material; se outro texto excluir o zero, a classificação de $0$ muda.

---

## Exercício 2

**Resposta:**

(a) $A \cup B = \{-1, 0, 1, 2, 3\}$  
(b) $A \cap B = \{0, 1\}$  
(c) $A \setminus B = \{2, 3\}$  
(d) $B \setminus A = \{-1\}$

**Desenvolvimento:** liste os elementos sem repetir na união; na interseção, só o que aparece nos dois; na diferença, o que está no primeiro e não no segundo.

**Dica:** $A \setminus B \neq B \setminus A$ em geral — a ordem importa.

---

## Exercício 3

**Resposta:** $A^{c} = \{1, 3, 5\}$. Sim: $A \cup A^{c} = U$ e $A \cap A^{c} = \emptyset$.

**Desenvolvimento:** o complementar em $U$ são os elementos de $U$ que não estão em $A$:

$$
A^{c} = U \setminus A = \{1, 3, 5\}
$$

$$
A \cup A^{c} = \{1, 2, 3, 4, 5, 6\} = U,
\quad
A \cap A^{c} = \emptyset
$$

**Salto de raciocínio:** complementar só faz sentido com um **universo** fixado; sem $U$, “$A^{c}$” fica ambíguo.

---

## Exercício 4

**Resposta:**

(a) **V** — todo inteiro é $n/1$, logo racional.  
(b) **F** — irracionais e racionais são disjuntos.  
(c) **F** — $\sqrt{2}$ é irracional clássico.  
(d) **V** — $n = n/1 \in \mathbb{Q}$.

**Desenvolvimento:** use as inclusões $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$ e $\mathbb{Q} \cap \mathbb{I} = \emptyset$.

**Cuidado:** “todo racional é inteiro” seria falso; a inclusão vai no sentido contrário.

---

## Exercício 5

**Resposta:** $40$ alunos.

**Desenvolvimento:** princípio da inclusão-exclusão (diagrama de Venn em contagem):

$$
|M \cup F| = |M| + |F| - |M \cap F| = 28 + 22 - 10 = 40
$$

**Pegadinha:** somar $28 + 22 = 50$ **conta duas vezes** quem faz as duas; por isso se subtrai a interseção.  
**Salto de raciocínio:** “pelo menos uma” = união, não a soma cega dos dois conjuntos.
