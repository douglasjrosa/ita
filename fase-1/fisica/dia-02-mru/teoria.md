# Dia 02 — MRU

**Meta:** reconhecer o movimento retilíneo uniforme (MRU), usar a equação horária $s = s_0 + vt$ e ler velocidade como inclinação do gráfico $s \times t$ em problemas unidimensionais simples.

## Definição

No **MRU**, a trajetória é uma **reta** e a **velocidade escalar** $v$ é **constante** (módulo, direção e sentido não mudam). A aceleração é nula: $a = 0$.

Em intervalos iguais de tempo, o móvel percorre deslocamentos iguais. A velocidade média coincide com a velocidade instantânea:

$$
v = \frac{\Delta s}{\Delta t} = \frac{s - s_0}{t - t_0}
$$

Com origem de tempo em $t_0 = 0$, a **equação horária da posição** fica:

$$
s = s_0 + vt
$$

- $s$: posição no instante $t$
- $s_0$: posição em $t = 0$
- $v$: velocidade (constante); o **sinal** indica o sentido no eixo escolhido

**Gráficos típicos (eixo 1D):**

| Gráfico | Forma no MRU | Leitura |
|---------|--------------|---------|
| $s \times t$ | reta (inclinada se $v \neq 0$) | inclinação $= v$ |
| $v \times t$ | reta horizontal | altura $= v$ |

Movimento **progressivo** ($v > 0$): $s$ cresce com $t$.  
Movimento **retrógrado** ($v < 0$): $s$ diminui com $t$.  
Repouso: $v = 0$ → $s \times t$ horizontal.

O programa do ITA cobra cinemática escalar da partícula (equação horária, velocidade, estudo gráfico). O MRU é o caso $a = 0$ dessa cinemática; aceleração constante (MRUV) fica para o Dia 03.

## Exemplos

**Exemplo 1.** $s_0 = 12\,\mathrm{m}$, $v = 4\,\mathrm{m/s}$. Posição em $t = 5\,\mathrm{s}$:

$$
s = 12 + 4 \cdot 5 = 32\,\mathrm{m}
$$

**Exemplo 2.** Um móvel passa por $s = 80\,\mathrm{m}$ em $t = 0$ com $v = -10\,\mathrm{m/s}$ (sentido negativo). Em $t = 3\,\mathrm{s}$:

$$
s = 80 + (-10)\cdot 3 = 50\,\mathrm{m}
$$

No gráfico $s \times t$, a reta **desce** (inclinação negativa); $|v| = 10\,\mathrm{m/s}$.

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (MU / equação horária): [MOVIMENTO UNIFORME — Cinemática (Teoria + Exercícios) — Aula 2](https://www.youtube.com/watch?v=Gs1N0Tbltww)
- Vídeoaula (gráficos $s \times t$): [Position vs. time graphs — Khan Academy](https://www.youtube.com/watch?v=GtoamALPOP0)
- Texto (livro aberto): [OpenStax College Physics 2e — 2.3 Time, Velocity, and Speed](https://openstax.org/books/college-physics-2e/pages/2-3-time-velocity-and-speed)
- Texto (gráficos): [OpenStax College Physics 2e — 2.8 Graphical Analysis of One-Dimensional Motion](https://openstax.org/books/college-physics-2e/pages/2-8-graphical-analysis-of-one-dimensional-motion)
- Texto (IFUSP / e-Física): [Movimento retilíneo e uniforme — Gil da Costa Marques e Nobuko Ueta](https://efisica2.if.usp.br/mod/resource/view.php?id=3402)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Física, item 2 — cinemática escalar)
