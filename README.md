# Site do curso Estatística para Ciência de Dados e IA em Python (v5)

Site estático do curso de extensão do Instituto de Ciências Matemáticas e de Computação – Universidade de São Paulo (ICMC-USP).

## Como publicar

Não há etapa de compilação. Envie o conteúdo desta pasta — ou o arquivo `estatcdia-site-v5.zip` — para a raiz do servidor FTP. O arquivo `index.html` deve ficar na raiz do domínio.

## Como editar

Valores, parcelas, formas de pagamento, datas, links, chave PIX, e-mail e domínio estão marcados com `<!-- EDITAR: ... -->`. A lista com arquivo e número da linha está em `INSTRUCOES-EDICAO.md`.

## Conteúdo

- `index.html` — página única
- `css/style.css` — estilos
- `js/main.js` — menu (incluindo foco no menu aberto), botão de copiar a chave PIX, selos de estado das datas, retirada dos botões depois do prazo e animações
- `img/` — logos oficiais do ICMC, foto da coordenação, favicon e imagem de compartilhamento
- `favicon.ico` — ícone na raiz, para o pedido automático do navegador

## O que mudou da v4

- A lista de tópicos de cada módulo aparece em 2 colunas no tablet e no desktop, e em 1 coluna no celular.
- As datas e as 15 horas de cada módulo ficam numa faixa logo abaixo do título, separando o cabeçalho do card do conteúdo estudado.
- ANOVA saiu das etiquetas e entrou na lista de tópicos do módulo 2, na ordem do briefing. O módulo 4 continua sem etiquetas.
- Há um botão “Inscreva-se” centralizado abaixo dos cards; ele some depois de 28/02/2027, como os outros.
- “Sobre o curso” voltou a um painel: faixa laranja no topo, ícone por informação e 3 colunas no desktop (2 no tablet, 1 no celular).
- “Para quem é” passou a dois cards, com as áreas do público-alvo em etiquetas e o pré-requisito com “Graduação” em destaque.
- Os dois blocos entram na tela com a mesma animação dos cards de módulo (uma vez só; parados se o movimento estiver reduzido ou sem JavaScript).

## O que mudou da v3

- As seções “O que você vai aprender” e “Programa” passaram a ser uma só (`#programa`). Cada módulo aparece uma vez, num card com selo, ícone, datas, carga horária, ferramentas em etiquetas e conceitos em lista.
- O menu perdeu o item duplicado “Conteúdo”. O endereço `#aprender` continua existindo e leva à mesma seção.
- A seção ganhou o resumo visual “4 × 15 horas = 60 horas” e o subtítulo “4 módulos de 15 horas, 60 horas no total. 100% a distância, em Python.”
- A linha do tempo das aulas ficou abaixo dos cards, na mesma seção.

## O que mudou da v2

Consertos da auditoria (Hallmark e Impeccable):
- Títulos h1 e h2 um degrau maiores, com a mesma fonte e a mesma cor.
- Todas as cores e fontes vêm de variáveis em `:root` (nenhum valor solto no CSS).
- Hero do desktop ocupa quase a tela inteira, com datas e botões na primeira dobra. Espaço da logo do curso mais discreto e só a partir de 768 px.
- Títulos com quebra equilibrada (`text-wrap: balance`), parágrafos sem palavra sozinha na última linha (`text-wrap: pretty`), números com algarismos de largura fixa, estado de clique (`:active`) nos botões, grade do rodapé com `minmax(0, 1fr)`.
- `overflow-x: clip` em `html` e `body`; a trava de rolagem do menu aberto passou para `html.menu-open`.

Elementos visuais (SVG próprio, sem bibliotecas, sem fontes ou imagens novas):
- Hero: curva normal com a área de ±1 desvio-padrão, desenhada uma vez ao abrir; ícones de calendário e relógio; a data das aulas entrou na faixa de datas.
- Selos de estado ao lado de "Inscrições" e "Pedido de bolsa" (hero e Bolsas): antes, aberto, últimos dias e encerrado, cada um com uma forma própria. Não há texto novo.
- Depois de 28/02/2027 (horário de Brasília), os botões do Apolo e do formulário saem da página; o pulso do "Inscreva-se" só ocorre com as inscrições abertas. Datas num só lugar em `js/main.js` (ver `INSTRUCOES-EDICAO.md`).
- Programa: ícone por módulo (histograma, regressão com intervalo, série temporal, grafo causal); as barras da linha do tempo crescem uma vez ao aparecer.
- Calendário: datas passadas com marcador vazado e a próxima data com marcador laranja com anel.
- Investimento: valores em forma de soma (R$ 100,00 + R$ 1.299,00 = R$ 1.399,00) com o total em destaque; botão "Inscreva-se" depois dos passos; botão Copiar do PIX com ícone que vira visto.
- Bolsas: gráfico de 450 pontos com os 45 das vagas gratuitas em destaque; prazo e resultado em fichas com ícone.
- CTA final: histograma discreto ao fundo.
- Animações: no máximo 1,2 s, cada uma uma única vez; desligadas com "reduzir movimento" e sem JavaScript (a página aparece completa e estática).

## O que mudou da v1

- “O que você vai aprender” passou a listar só os títulos e os tópicos dos 4 módulos, sem cards nem etiquetas.
- “Programa” ficou com as datas dos módulos e a linha do tempo, sem repetir os tópicos.
- “Calendário e datas” separa visualmente “Inscrições e bolsas” e “Aulas”, mantendo todos os marcos.
- Cards ficaram só nos módulos e nos preços. “Sobre o curso” e “Para quem é” passaram a uma ficha editorial.
- Rótulos em sentence case. Títulos e valores grandes no azul escuro `#3D5168`.
- Títulos em fonte serifada do sistema (Palatino, Georgia ou equivalente). Corpo em `system-ui`. Chave PIX em `ui-monospace`.
- Hero: três dados separados (sem pontos do meio), datas numa faixa tipográfica e placeholder da logo do curso sem texto visível.
- Menu mobile com rolagem, ícone de fechar, fundo sobre o conteúdo e foco preso enquanto está aberto.
- Menu: “Aprender” virou “Conteúdo” e “FAQ” virou “Perguntas”.
- Links do Apolo e do formulário de bolsa avisam que abrem em uma nova aba.
- Logo do ICMC no cabeçalho menor (só o tamanho exibido). Coordenação com a mesma foto e o mesmo nome, em composição mais simples.
