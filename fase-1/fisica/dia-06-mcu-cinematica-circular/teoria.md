# Dia 06 — MCU — cinemática circular

**Meta:** descrever o **movimento circular uniforme (MCU)** com período, frequência e velocidade angular, e ligar $v$ e $\omega$ pelo raio — sem força centrípeta (Dia 10).

## Definição

O programa do ITA (Física, item 2) pede **cinemática circular** junto da cinemática escalar e vetorial. **MCU:** trajetória circular com **módulo** da velocidade linear constante. A **direção** de $\vec{v}$ muda o tempo todo (tangente à circunferência); por isso $\vec{v}$ **não** é constante — embora $|\vec{v}|$ seja.

<!-- TODO media: circunferência com $\vec{v}$ tangente em dois pontos e raio $r$; mesmo $\omega$, $v$ maior no raio maior -->

**Período** $T$: tempo de **uma** volta. **Frequência** $f$: voltas por unidade de tempo.

$$
f = \frac{1}{T}
$$

Unidade SI de $f$: hertz ($\mathrm{Hz} = \mathrm{s^{-1}}$).

**Ângulo** (OpenStax 6.1): em radianos, o arco $s$ e o raio $r$ se ligam por

$$
\theta = \frac{s}{r} \qquad (1\,\mathrm{rev} = 2\pi\,\mathrm{rad})
$$

**Velocidade angular** $\omega$ (módulo, MCU): ângulo varrido por unidade de tempo. Em uma volta, $\Delta\theta = 2\pi$ no tempo $T$:

$$
\omega = \frac{2\pi}{T} = 2\pi f
$$

Unidade SI: $\mathrm{rad/s}$. A velocidade **linear** (tangencial) e $\omega$ se ligam pelo raio:

$$
v = \omega r
$$

No **mesmo** corpo rígido (mesmo eixo), todos os pontos têm o **mesmo** $\omega$ e o **mesmo** $T$; quem está mais longe do eixo tem $v$ **maior**.

A mudança de direção de $\vec{v}$ implica aceleração (apontando para o centro). O módulo $v^{2}/r$ e a **força** centrípeta ficam no Dia 10.

## Exemplos

**Exemplo 1.** Um disco gira com $T = 0{,}20\,\mathrm{s}$:

$$
f = \frac{1}{0{,}20} = 5{,}0\,\mathrm{Hz}, \qquad \omega = 2\pi\cdot 5{,}0 = 10\pi\,\mathrm{rad/s}
$$

**Exemplo 2.** Ponto a $r = 0{,}40\,\mathrm{m}$ do eixo, com $\omega = 5{,}0\,\mathrm{rad/s}$:

$$
v = \omega r = 5{,}0\cdot 0{,}40 = 2{,}0\,\mathrm{m/s}
$$

Outro ponto no **mesmo** disco, a $r' = 0{,}80\,\mathrm{m}$, tem o mesmo $\omega$ e $v' = 4{,}0\,\mathrm{m/s}$.

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula ($T$, $f$, $\omega$): [Connecting period and frequency to angular velocity — Khan Academy](https://www.youtube.com/watch?v=xt9cwJ3bXjU)
- Texto (ângulo, $\omega$, $v = r\omega$): [OpenStax College Physics 2e — 6.1 Rotation Angle and Angular Velocity](https://openstax.org/books/college-physics-2e/pages/6-1-rotation-angle-and-angular-velocity)
- Texto (MCU e mudança de direção): [OpenStax College Physics 2e — 6 Introduction](https://openstax.org/books/college-physics-2e/pages/6-introduction-to-uniform-circular-motion-and-gravitation)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Física, item 2 — cinemática circular)
