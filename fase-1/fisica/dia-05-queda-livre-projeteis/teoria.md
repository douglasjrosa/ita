# Dia 05 — Queda livre e projéteis

**Meta:** tratar queda livre e lançamentos (vertical, horizontal e oblíquo) como MRUV com $a = \pm g$ no eixo vertical e, no plano, eixos **independentes** — sem MCU (Dia 06).

## Definição

O programa do ITA (Física, item 2) inclui **movimento de projéteis** junto da cinemática escalar e vetorial. **Queda livre** (ar desprezado) é o caso 1D: só a gravidade atua; a aceleração tem módulo $g$ (cerca de $9{,}8\,\mathrm{m/s^{2}}$; nos exercícios desta lição use $g = 10\,\mathrm{m/s^{2}}$) e aponta para baixo.

O sinal de $a$ depende do eixo: se **para cima** é positivo, $a_y = -g$; se **para baixo** é positivo, $a_y = +g$. No ponto mais alto de um lançamento vertical, $v_y = 0$, mas o **módulo** da aceleração continua $g$ (com eixo $y$ para cima: $a_y = -g$) — a gravidade não “desliga” no ápice (OpenStax 2.7).

Na queda livre, a **massa** do corpo não entra: todos caem com a mesma $g$ (ar desprezado).

**Projétil:** objeto lançado e, em seguida, sujeito **só** à gravidade (resistência do ar nula nesta lição). A trajetória no plano é uma **parábola**.

<!-- TODO media: parábola de um oblíquo com eixos x (MRU) e y (MRUV); mesmo t nos dois eixos -->

**Independência dos eixos** (ideia de Galileu, OpenStax 3.4):

| Eixo | Aceleração | Movimento |
|------|------------|-----------|
| Horizontal $x$ | $a_x = 0$ | MRU: $v_x$ constante |
| Vertical $y$ | $a_y = \pm g$ | MRUV (queda livre) |

O **tempo** $t$ é o único elo entre os eixos. Componentes iniciais (ângulo $\theta$ com a horizontal):

$$
v_{0x} = v_0\cos\theta, \qquad v_{0y} = v_0\sin\theta
$$

**Lançamento horizontal:** $\theta = 0^\circ$, $v_{0y} = 0$; o tempo de queda sai só do $y$.

**Equações horárias** (origem no lançamento, $t = 0$; eixo $y$ **para cima** positivo, $a_y = -g$):

$$
x = v_{0x}\,t, \qquad y = v_{0y}\,t - \frac{1}{2}gt^{2}
$$

$$
v_x = v_{0x}, \qquad v_y = v_{0y} - gt
$$

São as do MRU/MRUV (Dia 03) em cada eixo. Altura máxima (oblíquo): com $v_y = 0$, $H = v_{0y}^{2}/(2g)$. No **mesmo nível** de saída e chegada, $t_{\mathrm{voo}} = 2v_{0y}/g$ e $R = v_{0x}\,t_{\mathrm{voo}}$ — origem das fórmulas compactas abaixo.

**Alcance** $R$ (mesmo nível de lançamento e queda, ar nulo):

$$
R = \frac{v_0^{2}\sin 2\theta}{g}
$$

Máximo de $R$ em $\theta = 45^\circ$ (nessa hipótese). Ângulos $\theta$ e $90^\circ-\theta$ dão o **mesmo** $R$. Altura máxima:

$$
H = \frac{(v_0\sin\theta)^{2}}{2g}
$$

MCU e força centrípeta ficam no Dia 06.

## Exemplos

**Exemplo 1.** Pedra abandonada ($v_0 = 0$) de $45\,\mathrm{m}$, eixo para baixo positivo, $g = 10\,\mathrm{m/s^{2}}$:

$$
45 = \frac{1}{2}\cdot 10\, t^{2} \implies t = 3\,\mathrm{s}, \qquad v = gt = 30\,\mathrm{m/s}
$$

**Exemplo 2.** Projétil com $v_0 = 20\,\mathrm{m/s}$ a $45^\circ$, mesmo nível, $g = 10\,\mathrm{m/s^{2}}$:

$$
R = \frac{20^{2}\cdot\sin 90^\circ}{10} = 40\,\mathrm{m}
$$

O tempo de voo é $t = 2v_{0y}/g = 2\sqrt{2}\,\mathrm{s}$ ($v_{0y} = 10\sqrt{2}\,\mathrm{m/s}$).

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (horizontal, PT): [LANÇAMENTO HORIZONTAL — CINEMÁTICA — Prof. Marcelo Boaro](https://www.youtube.com/watch?v=xVsVK2seM-Y)
- Vídeoaula (oblíquo, PT): [LANÇAMENTO OBLÍQUO I — CINEMÁTICA — Prof. Marcelo Boaro](https://www.youtube.com/watch?v=V6HvRDDtAKY)
- Vídeoaula (independência dos eixos): [Projectile motion — Khan Academy](https://www.youtube.com/watch?v=txJP95lBv98)
- Texto (queda livre 1D): [OpenStax College Physics 2e — 2.7 Falling Objects](https://openstax.org/books/college-physics-2e/pages/2-7-falling-objects)
- Texto (projéteis 2D, alcance): [OpenStax College Physics 2e — 3.4 Projectile Motion](https://openstax.org/books/college-physics-2e/pages/3-4-projectile-motion)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Física, item 2 — movimento de projéteis; cinemática vetorial)
