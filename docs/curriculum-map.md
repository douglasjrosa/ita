# Curriculum map (producer)

Pedagogical day-folder map for complementary ITA entrance prep.
Student-facing titles live in `FASE_*.md` (PT-BR). This file is the producer source of truth.

## Conventions

- Path: `fase-n/<subject>/dia-NN-slug/` with `.gitkeep` until lesson files are authored.
- Lesson files (later plannings): `teoria.md`, `exercicios.md`, `gabarito.md`.
- Numbering restarts per subject inside each phase.
- Phase 1 Physics `dia-01` and `dia-02` already contain lesson Markdown (kept).
- Checklist links point to `teoria.md` even before that file exists.

## Sources

- Official program / Anexo D (ITA Vestibular 2026), via official PDFs when available.
- Exam structure/weights: Edital 2026 (1st phase objective; 2nd phase discursive + Port/essay).
- Topic list cross-checked with reputable mirrors of Anexo D when `vestibular.ita.br` timed out.
- Frequency notes (secondary): TEC / Estratégia analyses of recent exams.

## Uncertainty

- Literature: no fixed reading list — days cover schools/periods, not specific works.
- Modern physics / biochemistry / polymers / environmental chemistry weighted toward Phase 3.

## Phase 1

### Física (18 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-introducao-unidades` (content kept) | Introdução e unidades | — | Medidas, SI, erros e coerência dimensional. | light |
| 02 | `dia-02-mru` (content kept) | MRU | dia-01 | Movimento retilíneo uniforme e equação horária. | light |
| 03 | `dia-03-mruv` | MRUV | dia-02 | Aceleração constante e equações do MRUV. | light |
| 04 | `dia-04-vetores-cinematica-vetorial` | Vetores e cinemática vetorial | dia-03 | Soma vetorial aplicada ao movimento. | light |
| 05 | `dia-05-queda-livre-projeteis` | Queda livre e projéteis | dia-04 | Lançamentos no plano vertical/horizontal. | light |
| 06 | `dia-06-mcu-cinematica-circular` | MCU — cinemática circular | dia-04 | Período, frequência e velocidade angular. | light |
| 07 | `dia-07-estatica-particulas` | Estática de partículas | dia-04 | Equilíbrio de uma partícula. | light |
| 08 | `dia-08-estatica-corpo-rigido` | Estática de corpo rígido | dia-07 | Momento de força e equilíbrio de corpo rígido. | medium |
| 09 | `dia-09-leis-newton-dinamica-retilinea` | Leis de Newton — dinâmica retilínea | dia-03 | Aplicar as três leis em movimento retilíneo. | light |
| 10 | `dia-10-dinamica-circular-centripeta` | Dinâmica circular e centrípeta | dia-06,dia-09 | Força centrípeta em trajetórias circulares. | medium |
| 11 | `dia-11-impulso-quantidade-movimento` | Impulso e quantidade de movimento | dia-09 | Impulso, momento linear e teorema do impulso. | medium |
| 12 | `dia-12-trabalho-energia-cinetica` | Trabalho e energia cinética | dia-09 | Trabalho de uma força e teorema trabalho-energia. | medium |
| 13 | `dia-13-energia-potencial-conservacao` | Energia potencial e conservação | dia-12 | Energia mecânica e forças conservativas. | medium |
| 14 | `dia-14-colisoes-centro-massa-intro` | Colisões e centro de massa (intro) | dia-11 | Colisões 1D e noção de centro de massa. | medium |
| 15 | `dia-15-gravitacao-kepler-basico` | Gravitação e Kepler (básico) | dia-09 | Lei da gravitação e leis de Kepler elementares. | medium |
| 16 | `dia-16-termologia-dilatacao` | Termologia e dilatação | dia-01 | Temperatura, escalas e dilatação térmica. | light |
| 17 | `dia-17-calorimetria-gases-ideais-intro` | Calorimetria e gases ideais (intro) | dia-16 | Calor sensível/latente e lei dos gases ideais. | light |
| 18 | `dia-18-ondas-som-basico` | Ondas e som (básico) | dia-06 | Ondas transversais/longitudinais e noções de som. | light |

### Matemática (20 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-conjuntos-numericos` | Conjuntos numéricos | — | Operações com conjuntos e números reais. | light |
| 02 | `dia-02-divisibilidade-primos-tfa` | Divisibilidade, primos e TFA | dia-01 | Primos, divisibilidade e teorema fundamental. | light |
| 03 | `dia-03-inducao-gavetas-intro` | Indução e princípio das gavetas (intro) | dia-02 | Ideia de indução e contagem por gavetas. | medium |
| 04 | `dia-04-sequencias-pa` | Sequências e PA | dia-01 | Lei de formação e progressão aritmética. | light |
| 05 | `dia-05-pg-soma-infinita` | PG e soma infinita | dia-04 | Progressão geométrica finita e infinita. | light |
| 06 | `dia-06-funcoes-conceito` | Funções — conceito | dia-01 | Domínio, imagem, injeção/sobrejeção. | light |
| 07 | `dia-07-funcao-afim-inequacoes` | Função afim e inequações | dia-06 | Gráfico e inequações do 1º grau. | light |
| 08 | `dia-08-funcao-quadratica` | Função quadrática | dia-07 | Parábola, vértice e inequações quadráticas. | light |
| 09 | `dia-09-funcao-modular` | Função modular | dia-07 | Módulo, gráficos e equações simples. | light |
| 10 | `dia-10-exponenciais-intro` | Exponenciais (intro) | dia-06 | Função exponencial e propriedades básicas. | light |
| 11 | `dia-11-logaritmos-intro` | Logaritmos (intro) | dia-10 | Definição e propriedades de logaritmos. | light |
| 12 | `dia-12-equacoes-inequacoes-exp-log` | Equações e inequações exp/log | dia-11 | Resolver equações e inequações exp/log. | medium |
| 13 | `dia-13-trigonometria-triangulo` | Trigonometria no triângulo | dia-08 | Razões trigonométricas no triângulo retângulo. | light |
| 14 | `dia-14-funcoes-trigonometricas-basicas` | Funções trigonométricas básicas | dia-13 | Seno, cosseno, tangente e relações fundamentais. | medium |
| 15 | `dia-15-geo-plana-triangulos` | Geometria plana — triângulos | — | Congruência e propriedades de triângulos. | light |
| 16 | `dia-16-semelhanca-relacoes-metricas` | Semelhança e relações métricas | dia-15 | Semelhança e relações métricas no triângulo. | light |
| 17 | `dia-17-poligonos-circunferencia-areas` | Polígonos, circunferência e áreas | dia-16 | Áreas de polígonos e círculo. | light |
| 18 | `dia-18-produtos-notaveis-fatoracao` | Produtos notáveis e fatoração | dia-01 | Fatorar e expandir expressões algébricas. | light |
| 19 | `dia-19-equacoes-sistemas-1-2-grau` | Equações e sistemas 1º/2º grau | dia-08,dia-18 | Sistemas lineares 2×2 e equações do 2º grau. | light |
| 20 | `dia-20-revisao-fundamentos-mat` | Revisão — fundamentos de matemática | dia-01–19 | Consolidar blocos da Fase 1 sem simulado ITA. | light |

### Química (18 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-introducao-metodo-materia` | Introdução, método e matéria | — | Ramos da química e estados da matéria. | light |
| 02 | `dia-02-misturas-separacao` | Misturas e separação | dia-01 | Misturas, coloides e métodos de separação. | light |
| 03 | `dia-03-tabela-periodica` | Tabela periódica | dia-01 | Elementos, símbolos e tendências periódicas. | light |
| 04 | `dia-04-modelos-atomicos` | Modelos atômicos | dia-03 | Partículas fundamentais e modelos atômicos. | light |
| 05 | `dia-05-mol-gases-avogadro` | Mol, gases e Avogadro | dia-04 | Mol, leis dos gases e princípio de Avogadro. | medium |
| 06 | `dia-06-ligacoes-quimicas` | Ligações químicas | dia-03 | Iônica, covalente, metálica e intermediários. | medium |
| 07 | `dia-07-geometria-polaridade-intermoleculares` | Geometria, polaridade e intermoleculares | dia-06 | Geometria molecular e forças intermoleculares. | medium |
| 08 | `dia-08-solucoes-concentracoes` | Soluções e concentrações | dia-05 | Expressar concentrações e tipos de soluções. | light |
| 09 | `dia-09-estequiometria-balanceamento` | Estequiometria — balanceamento | dia-05 | Equações químicas e balanceamento. | light |
| 10 | `dia-10-calculos-estequiometricos` | Cálculos estequiométricos | dia-09 | Rendimento, pureza e cálculos com mol. | medium |
| 11 | `dia-11-acidos-bases-sais-oxidos` | Ácidos, bases, sais e óxidos | dia-03 | Classificação, nomenclatura e propriedades. | light |
| 12 | `dia-12-solucoes-aquosas-propriedades` | Propriedades de soluções aquosas | dia-08,dia-11 | Condutividade e comportamento em água. | light |
| 13 | `dia-13-radioatividade-intro` | Radioatividade (intro) | dia-04 | Noções de radioatividade e partículas. | light |
| 14 | `dia-14-coligativas-intro` | Propriedades coligativas (intro) | dia-08 | Ideia de tonoscopia, ebulioscopia, crioscopia, osmose. | medium |
| 15 | `dia-15-tipos-de-reacoes` | Tipos de reações | dia-09 | Classificar reações comuns. | light |
| 16 | `dia-16-equilibrio-conceito-intro` | Equilíbrio químico (conceito intro) | dia-09 | Equilíbrio dinâmico e noção de constante. | medium |
| 17 | `dia-17-organica-cadeias-funcoes-intro` | Orgânica — cadeias e funções (intro) | dia-06 | Cadeias carbônicas e grupos funcionais básicos. | light |
| 18 | `dia-18-revisao-fundamentos-qui` | Revisão — fundamentos de química | dia-01–17 | Consolidar Fase 1 sem simulado ITA. | light |

### Português (10 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-morfologia-estrutura` | Morfologia — estrutura das palavras | — | Morfemas e formação de palavras. | light |
| 02 | `dia-02-classes-flexao` | Classes e flexão | dia-01 | Classes gramaticais e flexão na construção de sentido. | light |
| 03 | `dia-03-sintaxe-termos-oracao` | Sintaxe — termos da oração | dia-02 | Termos essenciais, integrantes e acessórios. | light |
| 04 | `dia-04-periodo-simples-composto-intro` | Período simples e composto (intro) | dia-03 | Coordenação e subordinação básicas. | light |
| 05 | `dia-05-pontuacao-pratica` | Pontuação prática | dia-04 | Pontuação e efeitos de sentido. | light |
| 06 | `dia-06-concordancia-intro` | Concordância (intro) | dia-03 | Concordância nominal e verbal básicas. | light |
| 07 | `dia-07-regencia-crase-intro` | Regência e crase (intro) | dia-03 | Regência e uso da crase em casos frequentes. | light |
| 08 | `dia-08-leitura-generos-inferencias` | Leitura — gêneros e inferências | — | Gêneros textuais e inferências iniciais. | light |
| 09 | `dia-09-semantica-basica` | Semântica básica | dia-08 | Sinonímia, antonímia, polissemia e ambiguidade. | light |
| 10 | `dia-10-habito-interpretacao` | Hábito de interpretação | dia-08 | Rotina leve de leitura e compreensão. | light |

### Inglês (10 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-leitura-global` | Leitura global (gist) | — | Compreender a ideia geral de textos autênticos. | light |
| 02 | `dia-02-vocabulario-em-contexto` | Vocabulário em contexto | dia-01 | Inferir significado pelo contexto. | light |
| 03 | `dia-03-estruturas-basicas-leitura` | Estruturas básicas para leitura | dia-01 | Gramática mínima necessária à compreensão. | light |
| 04 | `dia-04-skimming-scanning` | Skimming e scanning | dia-01 | Estratégias rápidas de leitura. | light |
| 05 | `dia-05-inferencia-intro` | Inferência (intro) | dia-02 | Ler nas entrelinhas de forma guiada. | light |
| 06 | `dia-06-textos-curtos-pratica` | Textos curtos — prática | dia-04 | Praticar compreensão em textos curtos. | light |
| 07 | `dia-07-idiomas-intro` | Expressões idiomáticas (intro) | dia-02 | Idioms frequentes em provas. | light |
| 08 | `dia-08-tirinhas-legendas-intro` | Tirinhas e legendas (intro) | dia-05 | Compreender textos visuais curtos. | light |
| 09 | `dia-09-sintese-ideias-principais` | Síntese de ideias principais | dia-01 | Resumir o essencial de um texto. | medium |
| 10 | `dia-10-habito-leitura-semanal` | Hábito de leitura semanal | dia-06 | Manter contato constante com inglês autêntico. | light |

## Phase 2

### Física (20 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-mhs-pendulo` | MHS e pêndulo | fase-1 fisica dia-13,dia-06 | Oscilações, MHS e pêndulo simples. | medium |
| 02 | `dia-02-fluidos-estatica` | Fluidos — estática | fase-1 fisica dia-07 | Pressão, Arquimedes e Pascal. | medium |
| 03 | `dia-03-fluidos-bernoulli` | Fluidos — Bernoulli | dia-02 | Continuidade, Bernoulli e Torricelli. | medium |
| 04 | `dia-04-termodinamica-leis` | Termodinâmica — 1ª e 2ª leis | fase-1 fisica dia-17 | Leis da termodinâmica e processos. | hard |
| 05 | `dia-05-ondas-cordas-tubos-doppler` | Ondas — cordas, tubos e Doppler | fase-1 fisica dia-18 | Cordas, tubos sonoros e efeito Doppler. | medium |
| 06 | `dia-06-optica-reflexao-refracao` | Óptica — reflexão e refração | — | Leis da reflexão/refração e reflexão total. | medium |
| 07 | `dia-07-espelhos-lentes-sistemas` | Espelhos, lentes e sistemas | dia-06 | Espelhos, lentes delgadas e sistemas ópticos. | medium |
| 08 | `dia-08-eletrostatica-coulomb-campo` | Eletrostática — Coulomb e campo | fase-1 fisica dia-04 | Carga, Coulomb e campo elétrico. | medium |
| 09 | `dia-09-potencial-capacitores` | Potencial e capacitores | dia-08 | Potencial eletrostático e capacitores. | medium |
| 10 | `dia-10-corrente-ohm-associacoes` | Corrente, Ohm e associações | dia-09 | Corrente, resistência e associações. | medium |
| 11 | `dia-11-kirchhoff-geradores` | Kirchhoff e geradores | dia-10 | Leis de Kirchhoff, geradores e Wheatstone. | hard |
| 12 | `dia-12-magnetismo-forcas` | Magnetismo e forças | dia-10 | Campo magnético e forças sobre cargas/correntes. | medium |
| 13 | `dia-13-inducao-faraday-lenz` | Indução — Faraday e Lenz | dia-12 | Fluxo, Faraday, Lenz e indutância. | hard |
| 14 | `dia-14-referenciais-acelerados` | Referenciais acelerados | fase-1 fisica dia-09 | Sistemas acelerados e força centrífuga. | hard |
| 15 | `dia-15-energia-mecanica-problemas-duros` | Energia mecânica — problemas duros | fase-1 fisica dia-13 | Problemas integrados de energia. | hard |
| 16 | `dia-16-colisoes-aprofundado` | Colisões (aprofundado) | fase-1 fisica dia-14 | Colisões 1D/2D e sistemas de partículas. | hard |
| 17 | `dia-17-gravitacao-campo-potencial` | Gravitação — campo e potencial | fase-1 fisica dia-15 | Campo e potencial gravitacionais. | hard |
| 18 | `dia-18-circuitos-integrados` | Circuitos integrados | dia-11 | Circuitos mistos nível ITA intermediário. | hard |
| 19 | `dia-19-optica-ondulatoria-young` | Óptica ondulatória — Young | dia-05,dia-06 | Interferência, Young, difração e polarização. | hard |
| 20 | `dia-20-dissertativa-mecanica-treino` | Dissertativa — treino de mecânica | dia-15,dia-16 | Escrever soluções completas de mecânica. | hard |

### Matemática (22 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-trig-adicao-arco-duplo` | Trig — adição e arco duplo | fase-1 mat dia-14 | Fórmulas de adição, duplo e metade. | medium |
| 02 | `dia-02-equacoes-inequacoes-trig` | Equações e inequações trigonométricas | dia-01 | Resolver equações/inequações trigonométricas. | medium |
| 03 | `dia-03-polinomios-operacoes` | Polinômios — operações | fase-1 mat dia-18 | Operações, grau e fatoração de polinômios. | medium |
| 04 | `dia-04-equacoes-algebricas-raizes` | Equações algébricas e raízes | dia-03 | Raízes, multiplicidade e TFA. | hard |
| 05 | `dia-05-relacoes-coeficientes-reciprocas` | Relações coeficientes e recíprocas | dia-04 | Relações coef.–raízes e equações recíprocas. | hard |
| 06 | `dia-06-geo-analitica-reta` | Geometria analítica — reta | fase-1 mat dia-15 | Equações da reta, ângulos e distâncias. | medium |
| 07 | `dia-07-circunferencia-analitica` | Circunferência analítica | dia-06 | Equação, tangentes e interseções. | medium |
| 08 | `dia-08-conicas-parabola-elipse` | Cônicas — parábola e elipse | dia-07 | Elementos e equações de parábola e elipse. | medium |
| 09 | `dia-09-hiperbola-lugares` | Hipérbole e lugares geométricos | dia-08 | Hipérbole e interpretação de equações. | hard |
| 10 | `dia-10-geo-espacial-retas-planos` | Geometria espacial — retas e planos | fase-1 mat dia-15 | Posições relativas no espaço. | medium |
| 11 | `dia-11-poliedros-prismas-piramides` | Poliedros, prismas e pirâmides | dia-10 | Áreas e volumes de poliedros. | medium |
| 12 | `dia-12-cilindros-cones-esferas` | Cilindros, cones e esferas | dia-11 | Áreas e volumes de sólidos de revolução. | medium |
| 13 | `dia-13-matrizes-operacoes` | Matrizes — operações | fase-1 mat dia-19 | Operações e inversa de matrizes. | medium |
| 14 | `dia-14-determinantes` | Determinantes | dia-13 | Propriedades e cálculo de determinantes. | medium |
| 15 | `dia-15-sistemas-lineares-discussao` | Sistemas lineares — discussão | dia-14 | Resolver e discutir sistemas lineares. | hard |
| 16 | `dia-16-complexos-algebrica` | Complexos — forma algébrica | fase-1 mat dia-08 | Operações na forma algébrica. | medium |
| 17 | `dia-17-complexos-moivre` | Complexos — Moivre | dia-16,dia-01 | Forma trigonométrica e fórmula de Moivre. | hard |
| 18 | `dia-18-combinatoria-contagem` | Combinatória — contagem | fase-1 mat dia-03 | Arranjos, permutações e combinações. | medium |
| 19 | `dia-19-binomio-newton` | Binômio de Newton | dia-18 | Desenvolvimento binomial. | medium |
| 20 | `dia-20-probabilidade-condicional` | Probabilidade condicional | dia-18 | Condicional e independência de eventos. | hard |
| 21 | `dia-21-funcoes-compostas-inversas` | Funções compostas e inversas | fase-1 mat dia-06 | Composição e inversão de funções. | medium |
| 22 | `dia-22-dissertativa-mat-treino` | Dissertativa — treino de matemática | dia-05,dia-15 | Escrever soluções completas multi-tópico. | hard |

### Química (18 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-equilibrio-constantes-le-chatelier` | Equilíbrio — constantes e Le Chatelier | fase-1 qui dia-16 | Constantes de equilíbrio e deslocamento. | medium |
| 02 | `dia-02-equilibrio-ionico-ph` | Equilíbrio iônico e pH | dia-01,fase-1 qui dia-11 | Equilíbrios ácido-base e pH. | hard |
| 03 | `dia-03-termoquimica-hess` | Termoquímica e Hess | fase-1 qui dia-10 | Entalpia, Hess e energia de ligação. | medium |
| 04 | `dia-04-entropia-gibbs` | Entropia e Gibbs | dia-03 | Entropia e energia livre de Gibbs. | hard |
| 05 | `dia-05-cinetica-leis-velocidade` | Cinética — leis de velocidade | fase-1 qui dia-09 | Fatores, ordem e energia de ativação. | hard |
| 06 | `dia-06-eletroquimica-pilhas` | Eletroquímica — pilhas | fase-1 qui dia-11 | Pilhas, potenciais e polaridade. | hard |
| 07 | `dia-07-nernst-faraday-eletrolise` | Nernst, Faraday e eletrólise | dia-06 | Equação de Nernst, Faraday e eletrólise. | hard |
| 08 | `dia-08-corrosao-baterias` | Corrosão e baterias | dia-07 | Corrosão e baterias primárias/secundárias. | medium |
| 09 | `dia-09-organica-nomenclatura-isomeria` | Orgânica — nomenclatura e isomeria | fase-1 qui dia-17 | Funções, nomenclatura e isomeria de cadeia/funcional. | medium |
| 10 | `dia-10-isomeria-optica-geometrica` | Isomeria óptica e geométrica | dia-09 | Quiralidade e isomeria geométrica. | hard |
| 11 | `dia-11-organica-obtencao-propriedades` | Orgânica — obtenção e propriedades | dia-09 | Obtenção e propriedades de funções orgânicas. | hard |
| 12 | `dia-12-coligativas-aprofundado` | Coligativas (aprofundado) | fase-1 qui dia-14 | Problemas de propriedades coligativas. | hard |
| 13 | `dia-13-gases-problemas` | Gases — problemas | fase-1 qui dia-05 | Leis dos gases em problemas mistos. | medium |
| 14 | `dia-14-estequiometria-duros` | Estequiometria — problemas duros | fase-1 qui dia-10 | Estequiometria de alto nível. | hard |
| 15 | `dia-15-equilibrio-integrado` | Equilíbrio integrado | dia-01,dia-02 | Problemas que misturam equilíbrios. | hard |
| 16 | `dia-16-dissertativa-fisico-quimica` | Dissertativa — físico-química | dia-04,dia-07 | Treino discursivo de físico-química. | hard |
| 17 | `dia-17-atomistica-periodica-aprofundado` | Atomística e periódica (aprofundado) | fase-1 qui dia-03,dia-04 | Aprofundar modelos e periodicidade. | medium |
| 18 | `dia-18-dissertativa-organica-treino` | Dissertativa — orgânica (treino) | dia-11 | Treino discursivo de orgânica. | hard |

### Português (14 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-subordinadas-argumentacao` | Subordinadas e argumentação | fase-1 port dia-04 | Oração subordinada na construção argumentativa. | medium |
| 02 | `dia-02-concordancia-regencia-avancado` | Concordância e regência (avançado) | fase-1 port dia-06,dia-07 | Casos avançados de concordância e regência. | medium |
| 03 | `dia-03-colocacao-pronominal` | Colocação pronominal | fase-1 port dia-03 | Próclise, mesóclise e ênclise. | medium |
| 04 | `dia-04-semantica-intertextualidade` | Semântica e intertextualidade | fase-1 port dia-09 | Mecanismos semânticos e intertexto. | medium |
| 05 | `dia-05-estilistica-figuras` | Estilística — figuras | dia-04 | Figuras de linguagem na construção de sentido. | medium |
| 06 | `dia-06-lit-br-colonial` | Literatura BR — colonial | — | Barroco e Arcadismo no Brasil. | medium |
| 07 | `dia-07-romantismo-br` | Romantismo brasileiro | dia-06 | Gerações do Romantismo no Brasil. | medium |
| 08 | `dia-08-realismo-ao-simbolismo` | Realismo ao Simbolismo | dia-07 | Realismo, Naturalismo, Parnasianismo, Simbolismo. | medium |
| 09 | `dia-09-pre-modernismo-modernismo` | Pré-Modernismo e Modernismo | dia-08 | Pré-Modernismo e gerações modernistas. | medium |
| 10 | `dia-10-lit-pt-medieval-classica` | Literatura PT — medieval e clássica | — | Trovadorismo ao Neoclassicismo. | medium |
| 11 | `dia-11-lit-pt-romantica-moderna` | Literatura PT — romântica e moderna | dia-10 | Romantismo ao Modernismo português. | medium |
| 12 | `dia-12-tendencias-contemporaneas` | Tendências contemporâneas | dia-09,dia-11 | Linhas contemporâneas BR/PT. | medium |
| 13 | `dia-13-interpretacao-implicitos` | Interpretação — implícitos | fase-1 port dia-08 | Pressupostos, implícitos e estrutura profunda. | hard |
| 14 | `dia-14-redacao-estrutura-dissertativa` | Redação — estrutura dissertativa | dia-01 | Estrutura do texto dissertativo-argumentativo. | medium |

### Inglês (10 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-compreensao-detalhada` | Compreensão detalhada | fase-1 eng dia-02 | Detalhe de frases e expressões no contexto. | medium |
| 02 | `dia-02-intencao-autor-tom` | Intenção do autor e tom | dia-01 | Identificar objetivo e tom do autor. | medium |
| 03 | `dia-03-gramatica-para-leitura` | Gramática para leitura | fase-1 eng dia-03 | Estruturas avançadas a serviço da leitura. | medium |
| 04 | `dia-04-inferencia-pratica` | Inferência — prática | fase-1 eng dia-05 | Treinar inferência em textos médios. | medium |
| 05 | `dia-05-textos-ciencia-tecnologia` | Textos de ciência e tecnologia | dia-01 | Ler textos autênticos STEM. | medium |
| 06 | `dia-06-idiomas-frases-isoladas` | Idioms e frases isoladas | fase-1 eng dia-07 | Idioms e itens de frase isolada. | medium |
| 07 | `dia-07-cohesao-relacoes-texto` | Coesão e relações no texto | dia-02 | Relações de sentido entre partes do texto. | hard |
| 08 | `dia-08-tipos-mistos-questao` | Tipos mistos de questão | dia-04 | Misturar formatos típicos da 1ª fase. | medium |
| 09 | `dia-09-sets-cronometrados-medios` | Sets cronometrados (médios) | dia-08 | Blocos cronometrados de dificuldade média. | medium |
| 10 | `dia-10-padroes-de-erro` | Padrões de erro | dia-09 | Diagnosticar erros recorrentes em inglês. | medium |

## Phase 3

### Física (14 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-revisao-mecanica-integrada` | Revisão — mecânica integrada | fase-2 fisica | Revisar mecânica com problemas mistos. | hard |
| 02 | `dia-02-revisao-termica-fluidos-ondas` | Revisão — térmica, fluidos e ondas | fase-2 fisica | Integrar térmica, fluidos e ondulatória. | hard |
| 03 | `dia-03-eletromagnetismo-integrado` | Eletromagnetismo integrado | fase-2 fisica dia-13 | Misturar eletrostática, circuitos e indução. | hard |
| 04 | `dia-04-fisica-moderna-fotoeletrico-bohr` | Física moderna — fotoelétrico e Bohr | fase-2 fisica dia-19 | Fotoelétrico, corpo negro e átomo de Bohr. | hard |
| 05 | `dia-05-relatividade-restrita` | Relatividade restrita | dia-04 | Postulados, Lorentz e relação massa-energia. | hard |
| 06 | `dia-06-analise-dimensional-estrategia` | Análise dimensional — estratégia | fase-1 fisica dia-01 | Usar análise dimensional em problemas difíceis. | medium |
| 07 | `dia-07-simulacro-objetiva-fisica` | Simulacro — objetiva de Física | dia-01–06 | Simular seção objetiva de Física. | exam |
| 08 | `dia-08-simulacro-dissertativa-fisica-1` | Simulacro — dissertativa Física 1 | dia-07 | Primeiro bloco discursivo cronometrado. | exam |
| 09 | `dia-09-simulacro-dissertativa-fisica-2` | Simulacro — dissertativa Física 2 | dia-08 | Segundo bloco discursivo cronometrado. | exam |
| 10 | `dia-10-mistos-mecanica-em` | Mistos — mecânica + EM | dia-01,dia-03 | Problemas que cruzam mecânica e EM. | hard |
| 11 | `dia-11-mistos-ondas-optica-moderna` | Mistos — ondas, óptica e moderna | dia-02,dia-04 | Integração ondas/óptica/moderna. | hard |
| 12 | `dia-12-erros-tipicos-2a-fase` | Erros típicos da 2ª fase | dia-08 | Corrigir padrões de erro discursivo. | exam |
| 13 | `dia-13-velocidade-precisao-objetiva` | Velocidade e precisão (objetiva) | dia-07 | Treino de ritmo na objetiva. | exam |
| 14 | `dia-14-revisao-final-fisica` | Revisão final — Física | dia-01–13 | Fechamento estratégico da disciplina. | exam |

### Matemática (12 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-integracao-polinomios-complexos` | Integração — polinômios e complexos | fase-2 mat | Problemas mistos polinômios/complexos. | hard |
| 02 | `dia-02-integracao-geometrias` | Integração — geometrias | fase-2 mat | Plana + espacial + analítica juntas. | hard |
| 03 | `dia-03-integracao-trig-funcoes` | Integração — trig e funções | fase-2 mat | Trigonometria com funções avançadas. | hard |
| 04 | `dia-04-combinatoria-prob-duros` | Combinatória e probabilidade (duros) | fase-2 mat dia-20 | Contagem e probabilidade de alto nível. | hard |
| 05 | `dia-05-matrizes-sistemas-duros` | Matrizes e sistemas (duros) | fase-2 mat dia-15 | Álgebra linear discreta difícil. | hard |
| 06 | `dia-06-simulacro-objetiva-mat` | Simulacro — objetiva de Matemática | dia-01–05 | Simular seção objetiva de Matemática. | exam |
| 07 | `dia-07-simulacro-dissertativa-mat-1` | Simulacro — dissertativa Mat 1 | dia-06 | Primeiro bloco discursivo cronometrado. | exam |
| 08 | `dia-08-simulacro-dissertativa-mat-2` | Simulacro — dissertativa Mat 2 | dia-07 | Segundo bloco discursivo cronometrado. | exam |
| 09 | `dia-09-mistos-alta-incidencia` | Mistos de alta incidência | dia-01–05 | Temas frequentes em provas recentes. | hard |
| 10 | `dia-10-erros-tipicos-2a-fase` | Erros típicos da 2ª fase | dia-07 | Corrigir padrões de erro discursivo. | exam |
| 11 | `dia-11-velocidade-precisao-objetiva` | Velocidade e precisão (objetiva) | dia-06 | Treino de ritmo na objetiva. | exam |
| 12 | `dia-12-revisao-final-mat` | Revisão final — Matemática | dia-01–11 | Fechamento estratégico da disciplina. | exam |

### Química (12 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-bioquimica-biomoleculas` | Bioquímica — biomoléculas | fase-2 qui dia-09 | Aminoácidos, proteínas, carboidratos, lipídeos, NA. | medium |
| 02 | `dia-02-polimeros` | Polímeros | fase-2 qui dia-11 | Monômeros, estrutura, obtenção e aplicações. | medium |
| 03 | `dia-03-quimica-ambiental-ciclos` | Química ambiental e ciclos | fase-1 qui | Ciclos biogeoquímicos e poluição. | medium |
| 04 | `dia-04-integracao-eletro-equilibrio` | Integração — eletro + equilíbrio | fase-2 qui dia-07,dia-15 | Problemas mistos eletroquímica/equilíbrio. | hard |
| 05 | `dia-05-integracao-termo-cinetica` | Integração — termo + cinética | fase-2 qui dia-04,dia-05 | Problemas mistos termoquímica/cinética. | hard |
| 06 | `dia-06-organica-leitura-ita` | Orgânica — leitura estilo ITA | fase-2 qui dia-18 | Leitura de mecanismos e problemas discursivos. | hard |
| 07 | `dia-07-simulacro-objetiva-qui` | Simulacro — objetiva de Química | dia-01–06 | Simular seção objetiva de Química. | exam |
| 08 | `dia-08-simulacro-dissertativa-qui-1` | Simulacro — dissertativa Qui 1 | dia-07 | Primeiro bloco discursivo cronometrado. | exam |
| 09 | `dia-09-simulacro-dissertativa-qui-2` | Simulacro — dissertativa Qui 2 | dia-08 | Segundo bloco discursivo cronometrado. | exam |
| 10 | `dia-10-mistos-alta-incidencia` | Mistos de alta incidência | dia-04–06 | Temas frequentes em provas recentes. | hard |
| 11 | `dia-11-erros-tipicos-2a-fase` | Erros típicos da 2ª fase | dia-08 | Corrigir padrões de erro discursivo. | exam |
| 12 | `dia-12-revisao-final-qui` | Revisão final — Química | dia-01–11 | Fechamento estratégico da disciplina. | exam |

### Português (10 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-redacao-criterios-banca` | Redação — critérios da banca | fase-2 port dia-14 | Tema, tipo, coerência, coesão, modalidade. | exam |
| 02 | `dia-02-redacao-coerencia-coesao` | Redação — coerência e coesão | dia-01 | Treinar coerência e coesão na prática. | exam |
| 03 | `dia-03-redacao-atualidades-sem-formula` | Redação — atualidades sem fórmula | dia-02 | Argumentar com leitura de mundo, sem template. | exam |
| 04 | `dia-04-simulacro-objetiva-port` | Simulacro — objetiva de Português | fase-2 port | Simular 15 questões objetivas. | exam |
| 05 | `dia-05-simulacro-redacao-1` | Simulacro — redação 1 | dia-03 | Redação cronometrada (1). | exam |
| 06 | `dia-06-simulacro-redacao-2` | Simulacro — redação 2 | dia-05 | Redação cronometrada (2). | exam |
| 07 | `dia-07-literatura-revisao-escolas` | Literatura — revisão de escolas | fase-2 port dia-06–12 | Revisar escolas literárias do programa. | medium |
| 08 | `dia-08-leitura-velocidade` | Leitura — velocidade | fase-2 port dia-13 | Velocidade com precisão em interpretação. | exam |
| 09 | `dia-09-erros-tipicos-port-redacao` | Erros típicos — Port/redação | dia-04,dia-06 | Diagnosticar erros de Port e redação. | exam |
| 10 | `dia-10-revisao-final-port` | Revisão final — Português | dia-01–09 | Fechamento estratégico da disciplina. | exam |

### Inglês (8 days)

| Day | Folder | Title (PT-BR) | Prerequisite | Objective | Difficulty |
|-----|--------|---------------|--------------|-----------|------------|
| 01 | `dia-01-leitura-velocidade-prova` | Leitura — velocidade de prova | fase-2 eng | Ritmo de leitura da 1ª fase. | exam |
| 02 | `dia-02-simulacro-objetiva-ingles-1` | Simulacro — objetiva Inglês 1 | dia-01 | Simulado completo de inglês (1). | exam |
| 03 | `dia-03-simulacro-objetiva-ingles-2` | Simulacro — objetiva Inglês 2 | dia-02 | Simulado completo de inglês (2). | exam |
| 04 | `dia-04-vocabulario-alta-frequencia` | Vocabulário de alta frequência | fase-2 eng dia-01 | Revisar léxico recorrente em provas. | medium |
| 05 | `dia-05-inferencia-dificil` | Inferência difícil | fase-2 eng dia-04 | Itens de inferência de alto nível. | hard |
| 06 | `dia-06-secao-completa-timing` | Seção completa com timing | dia-02,dia-03 | Rodar seção inteira no tempo de prova. | exam |
| 07 | `dia-07-pontos-fracos` | Pontos fracos | dia-06 | Atacar lacunas individuais. | exam |
| 08 | `dia-08-revisao-final-ingles` | Revisão final — Inglês | dia-01–07 | Fechamento estratégico da disciplina. | exam |

## Totals

- Day folders: **216**
- Empty folders use `.gitkeep` only (no new lesson Markdown).
