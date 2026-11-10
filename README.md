# Site do curso Estatística para Ciência de Dados e IA em Python (v2)

Site estático do curso de extensão do Instituto de Ciências Matemáticas e de Computação – Universidade de São Paulo (ICMC-USP).

## Como publicar

Não há etapa de compilação. Envie o conteúdo desta pasta — ou o arquivo `estatcdia-site-v2.zip` — para a raiz do servidor FTP. O arquivo `index.html` deve ficar na raiz do domínio.

## Como editar

Valores, parcelas, formas de pagamento, datas, links, chave PIX, e-mail e domínio estão marcados com `<!-- EDITAR: ... -->`. A lista com arquivo e número da linha está em `INSTRUCOES-EDICAO.md`.

## Conteúdo

- `index.html` — página única
- `css/style.css` — estilos
- `js/main.js` — menu (incluindo foco no menu aberto) e botão de copiar a chave PIX
- `img/` — logos oficiais do ICMC, foto da coordenação, favicon e imagem de compartilhamento
- `favicon.ico` — ícone na raiz, para o pedido automático do navegador

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
