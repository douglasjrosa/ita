# Dia 03 — Indução e princípio das gavetas (intro)

**Meta:** aplicar o esquema básico de **prova por indução** em identidades simples sobre $\mathbb{N}$ e usar o **princípio das gavetas** (casa dos pombos) para garantir que alguma “gaveta” concentra objetos.

## Definição

O programa do ITA inclui explicitamente os **Princípios de Indução e das Gavetas** no bloco inicial de Matemática.

### Princípio de indução (forma usual)

Seja $P(n)$ uma afirmação que depende do natural $n$, com $n \geq n_0$ (nesta lição, em geral $n_0 = 1$).

Para provar que $P(n)$ vale para todo $n \geq n_0$:

1. **Base:** verificar $P(n_0)$.
2. **Passo indutivo:** assumir $P(k)$ (**hipótese de indução**, HI) para algum $k \geq n_0$ e demonstrar $P(k+1)$.

Ideia: a base “acende o primeiro dominó”; o passo garante que cada um empurra o próximo.

**Atenção:** a HI **não** é o que se quer provar no fim — é a ferramenta do passo. Esquecer a base ou usar a HI de forma circular invalida a prova.

### Princípio das gavetas (Dirichlet / casa dos pombos)

**Versão básica:** se $n+1$ objetos são colocados em $n$ gavetas, então **pelo menos uma** gaveta contém **pelo menos dois** objetos.

**Versão um pouco mais forte (útil):** se $m$ objetos vão para $n$ gavetas, então alguma gaveta tem pelo menos

$$
\left\lceil \frac{m}{n} \right\rceil
$$

objetos (teto: menor inteiro $\geq m/n$).

**Como usar:** nomear claramente o que são os **objetos** (pombos) e o que são as **gavetas** (casas); depois comparar as quantidades.

## Exemplos

**Exemplo 1 (indução).** Provar que, para todo inteiro $n \geq 1$,

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2}.
$$

- **Base ($n=1$):** $1 = \dfrac{1\cdot 2}{2}$. OK.  
- **HI:** $1+\cdots+k = \dfrac{k(k+1)}{2}$.  
- **Passo:**  

$$
1+\cdots+k+(k+1) = \frac{k(k+1)}{2} + (k+1) = (k+1)\left(\frac{k}{2}+1\right) = \frac{(k+1)(k+2)}{2}.
$$

Logo $P(k+1)$ vale. Por indução, vale para todo $n \geq 1$.

**Exemplo 2 (gavetas).** Em um grupo de $13$ pessoas, pelo menos duas fazem aniversário no **mesmo mês**.  
Objetos: $13$ pessoas; gavetas: $12$ meses. Como $13 > 12$, alguma gaveta tem $\geq 2$ pessoas.

## Nesta lição

- [Teoria](teoria.md) (você está aqui)
- [Exercícios](exercicios.md) — imprimir
- [Gabarito](gabarito.md) — só depois de tentar

## Mídias

- Vídeoaula (indução, PT): [Indução Matemática — Aula 1 — Princípio de Indução Matemática](https://www.youtube.com/watch?v=bhfhmre-QxU)
- Vídeoaula (indução, soma $1+\cdots+n$): [Proof by induction — Khan Academy](https://www.youtube.com/watch?v=wblW_M_HVQ8)
- Vídeoaula (gavetas): [Princípio das Gavetas — parte 1 (Profmat)](https://www.youtube.com/watch?v=-qjTmQWTRu4)
- Vídeoaula (gavetas, continuação): [Princípio das Gavetas — parte 2 (Profmat)](https://www.youtube.com/watch?v=AMzsoVyYml4)
- Texto (apostila OBMEP/PIC): [Indução Matemática — Apostila 4 (PDF)](https://www.obmep.org.br/docs/apostila4.pdf)
- Texto: [Princípio da casa dos pombos — Wikipédia](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_da_casa_dos_pombos)
- Notas (UFRPE): [Princípio da Casa dos Pombos](https://prof-ricardomachado.github.io/notas-combinatoria/section-casa-pombos.html)
- Programa do exame: [ITA — programa 2026 (PDF)](https://vestibular.ita.br/programa_2026.pdf) (Matemática, item 1 — indução e gavetas)
