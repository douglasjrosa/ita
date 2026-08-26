# Dia 04 — Vetores e cinemática vetorial

**Meta:** distinguir grandezas **escalares** e **vetoriais**, somar vetores (gráfico e por componentes) e usar deslocamento, velocidade e aceleração como vetores — sem fechar projéteis (Dia 05) nem MCU (Dia 06).

## Definição

O programa do ITA pede grandezas escalares e vetoriais, soma/subtração de vetores e **cinemática vetorial** (além da escalar já vista em MRU/MRUV).

**Escalar:** fica determinado por um número + unidade (massa, tempo, temperatura, energia).  
**Vetor:** precisa de **módulo**, **direção** e **sentido**. Representação: seta (comprimento $\propto$ módulo).

Na cinemática: **deslocamento** $\vec{\Delta s}$ (do ponto inicial ao final), **velocidade** $\vec{v}$ e **aceleração** $\vec{a}$ são vetores. A **distância** percorrida (comprimento da trajetória) é escalar.

<!-- TODO media: diagrama ponta-a-cauda de dois vetores e o resultante; eixos x,y com componentes -->

**Soma gráfica:** método da **poligonal** (ponta com cauda) ou do **paralelogramo** (origens juntas; resultante = diagonal).  
**Subtração:** $\vec{A}-\vec{B} = \vec{A}+(-\vec{B})$ (inverte o sentido de $\vec{B}$).

**Componentes** (ângulo $\theta$ medido a partir do eixo $x$ positivo, no plano):

$$
A_x = A\cos\theta, \qquad A_y = A\sin\theta
$$

Soma analítica: some $x$ com $x$, $y$ com $y$. Módulo do resultante $\vec{R}$:

$$
R = \sqrt{R_x^{2} + R_y^{2}}
$$

(o quadrante de $\theta$ depende dos **sinais** de $R_x$ e $R_y$; não use $\arctan$ no piloto automático sem olhar o desenho.)

**Cinemática vetorial (ideia):** em 2D, as componentes perpendiculares evoluem **à parte**. Se $a_x = 0$ e $a_y = \mathrm{constante}$, cada eixo é um MRU ou MRUV. Lançamento oblíquo completo = Dia 05; aqui basta: $\vec{v}$ pode mudar de direção mesmo com $|\vec{v}|$ constante (curva), e $\vec{a}$ não precisa ser paralela a $\vec{v}$.

## Exemplos

**Exemplo 1.** Deslocamentos perpendiculares $3\,\mathrm{m}$ (eixo $x$) e $4\,\mathrm{m}$ (eixo $y$). O módulo do deslocamento resultante é $5\,\mathrm{m}$ (Pitágoras). A trajetória “em L” tem comprimento $7\,\mathrm{m}$ — distância $\neq$ $|\vec{\Delta s}|$.

**Exemplo 2.** $\vec{A} = 6\,\mathrm{m/s}$ no $+x$ e $\vec{B} = 8\,\mathrm{m/s}$ no $+y$ (velocidades a somar, mesma partícula em trechos sucessivos **não**; aqui é só soma de vetores). Resultante: $|\vec{R}| = 10\,\mathrm{m/s}$.

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (vetores, PT): [MEGA AULA COMPLETA de VETORES — Professor Boaro](https://www.youtube.com/watch?v=eAAKzZcbITI)
- Texto (soma analítica): [OpenStax College Physics 2e — 3.3 Vector Addition and Subtraction: Analytical Methods](https://openstax.org/books/college-physics-2e/pages/3-3-vector-addition-and-subtraction-analytical-methods)
- Texto (métodos gráficos — mesmo capítulo, seção anterior): [OpenStax College Physics 2e — 3.2 Graphical Methods](https://openstax.org/books/college-physics-2e/pages/3-2-vector-addition-and-subtraction-graphical-methods)
- Extra (universidade): [e-Aulas USP — Grandezas escalares e vetoriais (Gil da Costa Marques)](https://eaulas.usp.br/portal/video.action?idItem=5267)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Física, itens 1–2 — vetores; cinemática vetorial)
