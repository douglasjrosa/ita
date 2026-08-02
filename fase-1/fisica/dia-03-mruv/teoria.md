# Dia 03 — MRUV

**Meta:** reconhecer o movimento retilíneo uniformemente variado (MRUV), usar as equações com aceleração constante e ler aceleração como inclinação do gráfico $v \times t$.

## Definição

No **MRUV**, a trajetória é uma **reta** e a **aceleração escalar** $a$ é **constante** e, em geral, $a \neq 0$. A velocidade **varia** linearmente com o tempo.

$$
a = \frac{\Delta v}{\Delta t} = \frac{v - v_0}{t - t_0}
$$

Com $t_0 = 0$, as equações usuais (eixo 1D) são:

$$
v = v_0 + at
$$

$$
s = s_0 + v_0 t + \frac{1}{2} a t^{2}
$$

$$
v^{2} = v_0^{2} + 2a\,\Delta s
\quad (\Delta s = s - s_0)
$$

A terceira (Torricelli) elimina o tempo — útil quando $t$ não é dado.

**Acelerado × retardado** (no eixo escolhido):

- **Acelerado:** $a$ e $v$ têm o **mesmo sinal** ($|v|$ aumenta).
- **Retardado:** $a$ e $v$ têm **sinais opostos** ($|v|$ diminui).

**Gráficos típicos:**

| Gráfico | Forma no MRUV | Leitura |
|---------|---------------|---------|
| $a \times t$ | reta horizontal | altura $= a$ |
| $v \times t$ | reta inclinada | inclinação $= a$; intercepto $= v_0$ |
| $s \times t$ | parábola | “abertura” ligada ao sinal de $a$ |

No MRU (Dia 02), $a = 0$; aqui $a$ constante ≠ 0. Queda livre e projéteis usam as mesmas ideias com $a = \pm g$ — entram com mais detalhe em dias seguintes.

## Exemplos

**Exemplo 1.** $v_0 = 10\,\mathrm{m/s}$, $a = 2\,\mathrm{m/s^{2}}$. Velocidade em $t = 4\,\mathrm{s}$:

$$
v = 10 + 2\cdot 4 = 18\,\mathrm{m/s}
$$

**Exemplo 2.** Um carro a $v_0 = 20\,\mathrm{m/s}$ freia com $a = -4\,\mathrm{m/s^{2}}$ até parar ($v = 0$). Deslocamento até parar (Torricelli):

$$
0 = 20^{2} + 2(-4)\,\Delta s \implies \Delta s = \frac{400}{8} = 50\,\mathrm{m}
$$

Enquanto $v > 0$ e $a < 0$, o movimento é **retardado**.

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (fórmulas e exemplos): [Movimento Uniformemente Variado (Fórmulas e Exemplos)](https://www.youtube.com/watch?v=-MjoaenhAFc)
- Vídeoaula (aplicação com $a$ constante): [Airbus A380 take-off time — Khan Academy](https://www.youtube.com/watch?v=p4DTormtEG0)
- Texto (livro aberto): [OpenStax College Physics 2e — 2.5 Motion Equations for Constant Acceleration](https://openstax.org/books/college-physics-2e/pages/2-5-motion-equations-for-constant-acceleration-in-one-dimension)
- Texto (gráficos): [OpenStax College Physics 2e — 2.8 Graphical Analysis of One-Dimensional Motion](https://openstax.org/books/college-physics-2e/pages/2-8-graphical-analysis-of-one-dimensional-motion)
- Texto (IFUSP / e-Física): [Movimento retilíneo uniformemente variado](https://efisica2.if.usp.br/mod/resource/view.php?id=2242)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Física, item 2 — cinemática escalar: velocidade, aceleração, equação horária, gráficos)
