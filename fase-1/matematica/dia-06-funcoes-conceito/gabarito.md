# Dia 06 — Gabarito (Funções — conceito)

> Material próprio deste repositório — **não** é gabarito oficial do ITA.  
> Use só depois de tentar os [exercícios](exercicios.md).

[Teoria](teoria.md) · [Exercícios](exercicios.md)

---

## Exercício 1

**Resposta:** (a) sim (b) não (c) não

**Desenvolvimento:**  
(a) cada um de $0$, $1$, $2$ aparece **uma** vez.  
(b) $0$ tem duas imagens ($2$ e $3$).  
(c) falta a imagem de $2$: o domínio declarado é $\{0,1,2\}$.

**Pegadinha:** dois pares com a **mesma** saída (como $0$ e $1$ indo a $1$ em (a)) **não** quebram a definição de função.

---

## Exercício 2

**Resposta:** $f(4) = 3$, $f(-1) = -7$

**Desenvolvimento:**

$$
f(4) = 2\cdot 4-5 = 3, \qquad f(-1) = 2\cdot(-1)-5 = -7
$$

**Dica:** substitua o $x$; o $2x$ não é $2+x$.

---

## Exercício 3

**Resposta:** (a) não (b) sim

**Desenvolvimento:** $h(a)=h(b)=1$ com $a\neq b$ $\Rightarrow$ não injetora. Imagem $\{1,2\}$ = contradomínio $\Rightarrow$ sobrejetora.

**Salto de raciocínio:** sobrejeção depende do **contradomínio** escrito depois da seta, não de $\mathbb{Z}$ ou $\mathbb{R}$ “no fundo da cabeça”.

---

## Exercício 4

**Resposta:** domínio $[3,+\infty)$; por exemplo qualquer negativo (ou $0$, se quiser um só número).

**Desenvolvimento:** $x-3\geq 0 \Rightarrow x\geq 3$. A raiz quadrada (real) devolve $\geq 0$, logo $-1$ não está na imagem.

**Cuidado:** o domínio é restrição da **entrada**; a imagem é restrição da **saída**.

---

## Exercício 5

**Resposta:** Sim, é função. Não é necessariamente injetora (dois alunos, mesmo armário, se a regra permitir). Não é necessariamente sobrejetora sobre **todos** os armários do prédio (muitos ficam vazios).

**Desenvolvimento:** “cada aluno $\mapsto$ um número” satisfaz a definição. Injeção = armários **sem** compartilhar. Sobrejeção sobre o prédio inteiro exigiria que **todo** armário fosse de alguém da turma.

**Dica:** mude o contradomínio (“armários da turma” vs “armários do prédio”) e a sobrejeção muda — como no Exemplo 2 da teoria.
