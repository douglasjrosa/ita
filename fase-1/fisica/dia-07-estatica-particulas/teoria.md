# Dia 07 — Estática de partículas

**Meta:** reconhecer o **equilíbrio de uma partícula** pela condição $\sum\vec{F}=\vec{0}$ (componentes) e montar o diagrama de corpo livre — sem momento de força (Dia 08).

## Definição

O programa do ITA (Física, item 3) pede o **conceito de força** e o **equilíbrio de uma partícula**. Nesta lição a partícula é um ponto: todas as forças atuam no **mesmo** ponto, então não há giro a analisar.

**Partícula em equilíbrio** (OpenStax College Physics 2e, 9.1): a força resultante **externa** é nula.

$$
\sum\vec{F} = \vec{0} \quad\Leftrightarrow\quad \sum F_x = 0 \quad\text{e}\quad \sum F_y = 0
$$

Isso vale no **repouso** (equilíbrio estático) e também no MRU (velocidade constante — equilíbrio dinâmico). Se a resultante não é zero, há aceleração (Dia 09).

<!-- TODO media: DCL de um ponto com peso $P$ para baixo e duas trações simétricas; eixos $x$ horizontal e $y$ vertical -->

**Diagrama de corpo livre (DCL):** desenhe **só** as forças que atuam **na** partícula (peso, tração, normal, atrito…). Não desenhe a resultante no lugar de uma força real.

No plano, decomponha cada força inclinada:

$$
F_x = F\cos\theta, \qquad F_y = F\sin\theta
$$

($\theta$ medido a partir do eixo $x$ positivo, salvo aviso). Depois some $x$ com $x$ e $y$ com $y$.

Duas forças equilibram uma partícula só se forem **iguais em módulo**, mesma direção e **sentidos opostos**. Com três ou mais, o polígono das forças deve **fechar**.

Momento de uma força e equilíbrio de **corpo rígido** = Dia 08. Leis de Newton em movimento = Dia 09.

## Exemplos

**Exemplo 1.** Na horizontal, $\vec{F}_1 = 12\,\mathrm{N}$ para a direita e $\vec{F}_2 = 12\,\mathrm{N}$ para a esquerda. $\sum F_x = 12-12 = 0$. A partícula está em equilíbrio (nessa reta). Se $|\vec{F}_2|$ fosse $10\,\mathrm{N}$, faltaria $2\,\mathrm{N}$ para a esquerda.

**Exemplo 2.** Um anel de peso $P = 10\sqrt{3}\,\mathrm{N}$ pende de duas cordas **simétricas**, cada uma a $30^{\circ}$ da **vertical**. No eixo $y$:

$$
2T\cos 30^{\circ} = P \Rightarrow 2T\cdot\frac{\sqrt{3}}{2} = 10\sqrt{3} \Rightarrow T = 10\,\mathrm{N}
$$

No eixo $x$ as componentes horizontais se cancelam. Se o ângulo com a vertical **aumenta**, $\cos\theta$ diminui e $T$ **cresce** para o mesmo $P$.

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (ponto material): [EQUILÍBRIO DE UM PONTO MATERIAL — ESTÁTICA — Aula 1 — Prof. Boaro](https://www.youtube.com/watch?v=46CYw-ZYI40)
- Texto (1ª condição): [OpenStax College Physics 2e — 9.1 The First Condition for Equilibrium](https://openstax.org/books/college-physics-2e/pages/9-1-the-first-condition-for-equilibrium)
- Texto (DCL): [OpenStax University Physics Vol. 1 — 5.7 Drawing Free-Body Diagrams](https://openstax.org/books/university-physics-volume-1/pages/5-7-drawing-free-body-diagrams)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Física, item 3 — equilíbrio de uma partícula)
