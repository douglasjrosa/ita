# /criar — gerar conteúdo de um dia de estudo ITA

Argumento obrigatório (cole depois do comando):

`fase-n/<materia>/dia-NN`

Exemplo: `fase-1/fisica/dia-01`

**Não** passe o slug completo. O agente resolve sozinho a pasta
`fase-n/<materia>/dia-NN-*` (e o título no curriculum-map).

## Papel

Você é o **agente de produção** deste repositório. Gere (ou reescreva com cuidado) os três arquivos da pasta do dia:

- `teoria.md`
- `exercicios.md`
- `gabarito.md`

Siga templates, rules e skills do projeto. O aluno consome só via GitHub Pages; não tutore o aluno no chat.

## Passos obrigatórios

1. **Resolver o alvo a partir de `fase-n/<materia>/dia-NN`**
   - Liste pastas em `fase-n/<materia>/` que começam com `dia-NN-` (ex.: `dia-01-`).
   - Deve existir **exatamente uma** correspondência. Se zero ou mais de uma, pare e peça correção.
   - Confirme o dia em `docs/curriculum-map.md` e `FASE_n.md`.
   - Leia `templates/teoria.md`, `templates/exercicios.md`, `templates/gabarito.md`.
   - Leia rules: produção, day-files, phase-files, repo-safety.
   - Se já existirem `.md`, melhore/substitua mantendo a estrutura; não apague pastas vizinhas.

2. **Pesquisar com fontes reais**
   - Use busca/web quando disponível: programa ITA, livros/apostilas confiáveis de domínio público, páginas acadêmicas, vídeos YouTube de canais sérios (universidades, professores conhecidos, canais educativos estabelecidos).
   - Prefira fontes citáveis (URL estável). Evite blogs anônimos e “resumo vestibular” sem autoria.
   - Não invente links de vídeo: só inclua URL de watch se verificar que existe; senão deixe busca rotulada como pendente de curadoria.

3. **Escrever os três arquivos (PT-BR, aluno)**
   - Math: só `$...$` e `$$...$$`.
   - `teoria.md`: Meta → Definição → Exemplos (≤2) → Nesta lição → Mídias.
   - `exercicios.md`: só título + exercícios com espaço em branco (sem intro, sem nav, sem label “Espaço para resolução”).
   - `gabarito.md`: resposta + desenvolvimento + dicas/pegadinhas/saltos; marcar material próprio (não gabarito oficial ITA).
   - Imagens: se necessárias, coloque em `media/` **dentro da pasta do dia** e referencie com caminho relativo (`![desc](media/nome.png)`). Siga `docs/media-policy.md`. Se não puder criar a imagem agora, use `<!-- TODO media: descrição -->` e liste nas Pendências.

4. **Não criar**
   - `HOJE.md`, skills de tutor do aluno, commits/push (salvo pedido explícito).
   - Gabaritos oficiais inventados do ITA.

5. **Resposta no chat (obrigatória)**
   Ao terminar, devolva em PT-BR:

   ### Alvo resolvido
   - caminho curto recebido → pasta completa usada

   ### Arquivos gerados
   - caminhos dos três `.md` (+ arquivos em `media/` se houver)

   ### Fontes utilizadas
   Lista numerada com: título, URL (ou “obra impressa”), tipo (programa / vídeo / livro / artigo / outro), o que foi aproveitado.

   ### Sugestões para NotebookLM
   3–6 fontes prioritárias para o produtor subir no notebook (PDF/URLs).

   ### Pendências
   Vídeos não confirmados, imagens TODO, fatos a verificar.

## Critério de qualidade

Conteúdo curto, correto e utilizável amanhã no papel; curadoria > volume; fontes revisáveis pelo produtor.
