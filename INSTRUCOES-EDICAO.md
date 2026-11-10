# Instruções de edição (v3)

Não há build. Edite os arquivos e envie de novo por FTP. Os campos que mudam com frequência (valores, parcelas, formas de pagamento, datas, links, chave PIX, e-mail e domínio) estão marcados no HTML com comentários `<!-- EDITAR: ... -->` e, no JS, com `EDITAR`. A linha indicada é a do valor em si, não a do comentário.

Arquivo principal: `index.html`. A chave PIX exibida na caixa `#pix-chave` é a mesma que o botão **Copiar** usa (`js/main.js` lê o texto da página).

Se o domínio previsto deixar de ser `https://estatcdia.icmc.usp.br/`, atualize todas as ocorrências da seção **Domínio**.

## Datas que controlam os selos e os botões (`js/main.js`)

Os selos ao lado das datas (hero e Bolsas), o marcador da próxima data no Calendário, o pulso do botão **Inscreva-se** e a retirada dos botões depois do prazo são calculados por estas datas, no horário de Brasília (`America/Sao_Paulo`). Um prazo vale até o fim do dia indicado (23h59).

**Se mudar uma data, mude também no HTML** (tabela **Datas exibidas na página**, abaixo): o texto da página e o JS são independentes.

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Início das inscrições | `js/main.js` | 206 | `2026-12-01` |
| Fim das inscrições | `js/main.js` | 207 | `2027-02-28` |
| Fim do pedido de bolsa | `js/main.js` | 208 | `2027-01-15` |
| Resultado das bolsas | `js/main.js` | 209 | `2027-01-31` |
| Início das aulas | `js/main.js` | 210 | `2027-03-13` |
| Término das aulas | `js/main.js` | 211 | `2027-05-13` |
| Dias finais em que o selo muda para "últimos dias" | `js/main.js` | 214 | `7` |
| Manter os botões depois do prazo | `js/main.js` | 217 | `false` |

Estados dos selos (cada um com uma forma própria, não só cor):

| Estado | Quando | Forma |
| --- | --- | --- |
| antes | antes do início das inscrições | relógio com contorno tracejado |
| aberto | período aberto | círculo cheio com visto (✓) |
| últimos dias | os 7 últimos dias do prazo | círculo cheio com ampulheta e anel em volta |
| encerrado | depois do prazo | círculo vazado com barra diagonal |

O selo **Inscrições** usa de 01/12/2026 a 28/02/2027; o selo **Pedido de bolsa** usa de 01/12/2026 a 15/01/2027.

**Botões depois do prazo.** A partir de 01/03/2027 (horário de Brasília) saem da página todos os botões **Inscreva-se** (menu, hero, Investimento, CTA final) e **Solicitar bolsa** (hero, Bolsas, CTA final), ou seja, todo link com o atributo `data-botao-inscricao`. O link "formulário de bolsa" dentro do texto da FAQ continua. Sem JavaScript, os botões sempre aparecem.

**Como forçar os botões a aparecer:** troque `var MOSTRAR_BOTOES_SEMPRE = false;` por `true` (linha 217). Outra forma é estender o prazo em `fimInscricoes`.

**Como conferir um estado sem esperar a data:** abra a página com `?hoje=AAAA-MM-DD` no fim do endereço. Por exemplo, `index.html?hoje=2027-03-02` mostra a página como ficará depois do prazo. Isso só muda a sua visualização.

## Domínio

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| domínio previsto do site (canonical) | head | `index.html` | 11 | `https://estatcdia.icmc.usp.br/` |
| domínio previsto do site (og:url) | head | `index.html` | 22 | `https://estatcdia.icmc.usp.br/` |
| domínio previsto do site (og:image) | head | `index.html` | 24 | `https://estatcdia.icmc.usp.br/img/og-image.png` |
| domínio previsto do site (twitter:image) | head | `index.html` | 34 | `https://estatcdia.icmc.usp.br/img/og-image.png` |
| JSON-LD url (domínio) | head (JSON-LD) | `index.html` | 54 | `"url": "https://estatcdia.icmc.usp.br/"` |

## Título e descrições

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| título da página | head | `index.html` | 7 | `Estatística para Ciência de Dados e IA em Python \| ICMC-USP` |
| description (datas e identificação do curso) | head | `index.html` | 9 | `Estatística para Ciência de Dados e Inteligência Artificial em Python. ICMC-USP, 100% a di` |
| título para compartilhamento | head | `index.html` | 18 | `Estatística para Ciência de Dados e Inteligência Artificial em Python \| ICMC-USP` |
| description para compartilhamento (datas do curso) | head | `index.html` | 20 | `Estatística para Ciência de Dados e Inteligência Artificial em Python. ICMC-USP, 100% a di` |
| título para Twitter | head | `index.html` | 30 | `Estatística para Ciência de Dados e Inteligência Artificial em Python \| ICMC-USP` |
| description para Twitter (datas do curso) | head | `index.html` | 32 | `Estatística para Ciência de Dados e Inteligência Artificial em Python. ICMC-USP, 100% a di` |
| JSON-LD description (datas) | head (JSON-LD) | `index.html` | 53 | `"description": "Curso 100% a distância (EAD) do Instituto de Ciências Matemáticas e de Com` |

## Links

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| link de inscrição no Sistema Apolo | cabeçalho | `index.html` | 128 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link de inscrição no Sistema Apolo | hero | `index.html` | 153 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link do formulário de bolsa | hero | `index.html` | 155 | `https://forms.gle/ajA7WCKkDiWJxV3k8` |
| link de inscrição no Sistema Apolo | Investimento | `index.html` | 543 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link do formulário de bolsa | Bolsas | `index.html` | 613 | `https://forms.gle/ajA7WCKkDiWJxV3k8` |
| link do formulário de bolsa | FAQ | `index.html` | 727 | `https://forms.gle/ajA7WCKkDiWJxV3k8` |
| link de inscrição no Sistema Apolo | CTA final | `index.html` | 766 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link do formulário de bolsa | CTA final | `index.html` | 768 | `https://forms.gle/ajA7WCKkDiWJxV3k8` |
| JSON-LD offers.url (Apolo) | head (JSON-LD) | `index.html` | 73 | `"url": "https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002` |

## E-mail

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| e-mail de contato | FAQ | `index.html` | 739 | `estatcdia@icmc.usp.br` |
| e-mail de contato | rodapé | `index.html` | 785 | `estatcdia@icmc.usp.br` |
| JSON-LD provider.email | head (JSON-LD) | `index.html` | 62 | `"email": "estatcdia@icmc.usp.br"` |

## Chave PIX

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| chave PIX da taxa de inscrição | Investimento | `index.html` | 550 | `leticia.cursos@fafq.org.br` |
| chave PIX da taxa de inscrição | FAQ | `index.html` | 680 | `leticia.cursos@fafq.org.br.` |

## Valores, parcelas e formas de pagamento

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| taxa de inscrição | Investimento | `index.html` | 498 | `R$ 100,00` |
| forma de pagamento da taxa | Investimento | `index.html` | 502 | `PIX` |
| valor do curso | Investimento | `index.html` | 509 | `R$ 1.299,00` |
| formas de pagamento do curso | Investimento | `index.html` | 513 | `PIX ou boleto, em até` |
| número de parcelas do curso | Investimento | `index.html` | 515 | `3 parcelas` |
| total para pagantes | Investimento | `index.html` | 522 | `R$ 1.399,00` |
| taxa de inscrição | Investimento | `index.html` | 532 | `R$ 100,00` |
| forma de pagamento da taxa | Investimento | `index.html` | 535 | `PIX` |
| taxa de inscrição | FAQ | `index.html` | 675 | `R$ 100,00, via` |
| forma de pagamento da taxa | FAQ | `index.html` | 677 | `PIX` |
| valor do curso | FAQ | `index.html` | 683 | `R$ 1.299,00, por` |
| formas de pagamento do curso | FAQ | `index.html` | 685 | `PIX ou boleto, em até` |
| número de parcelas do curso | FAQ | `index.html` | 687 | `3 parcelas.` |
| total para pagantes | FAQ | `index.html` | 690 | `R$ 1.399,00.` |
| taxa de inscrição | FAQ | `index.html` | 700 | `R$ 100,00` |
| forma de pagamento da taxa | FAQ | `index.html` | 703 | `PIX` |
| JSON-LD offers.price | head (JSON-LD) | `index.html` | 71 | `"price": "1399.00"` |

## Datas exibidas na página

Nas linhas com `<time datetime="AAAA-MM-DD">`, troque também o `datetime` (e o `data-fim` dos módulos no Calendário): o marcador da próxima data no Calendário lê esses atributos.

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| início das inscrições | hero | `index.html` | 162 | `01/12/2026` |
| fim das inscrições | hero | `index.html` | 165 | `28/02/2027` |
| prazo para pedido de bolsa | hero | `index.html` | 173 | `15/01/2027` |
| início das aulas | hero | `index.html` | 180 | `13/03/2027` |
| término das aulas | hero | `index.html` | 183 | `13/05/2027` |
| início das aulas | Sobre | `index.html` | 229 | `13/03/2027` |
| término das aulas | Sobre | `index.html` | 232 | `13/05/2027` |
| datas do módulo 1 (se alterar, ajuste também a barra correspondente na linha do tempo) | Programa | `index.html` | 330 | `13 a 28/03/2027` |
| datas do módulo 2 (se alterar, ajuste também a barra correspondente na linha do tempo) | Programa | `index.html` | 339 | `27/03 a 11/04/2027` |
| datas do módulo 3 (se alterar, ajuste também a barra correspondente na linha do tempo) | Programa | `index.html` | 348 | `10 a 25/04/2027` |
| datas do módulo 4 (se alterar, ajuste também a barra correspondente na linha do tempo) | Programa | `index.html` | 357 | `24/04 a 13/05/2027` |
| início das aulas | Programa | `index.html` | 366 | `13/03/2027` |
| término das aulas | Programa | `index.html` | 369 | `13/05/2027` |
| datas do módulo 1 (se alterar, ajuste .trilha-barra-m1 em css/style.css) | Programa | `index.html` | 382 | `13 a 28/03/2027` |
| datas do módulo 2 (se alterar, ajuste .trilha-barra-m2 em css/style.css) | Programa | `index.html` | 392 | `27/03 a 11/04/2027` |
| datas do módulo 3 (se alterar, ajuste .trilha-barra-m3 em css/style.css) | Programa | `index.html` | 402 | `10 a 25/04/2027` |
| datas do módulo 4 (se alterar, ajuste .trilha-barra-m4 em css/style.css) | Programa | `index.html` | 412 | `24/04 a 13/05/2027` |
| início das inscrições | Calendário | `index.html` | 432 | `01/12/2026` |
| prazo para pedido de bolsa | Calendário | `index.html` | 437 | `15/01/2027` |
| resultado das bolsas | Calendário | `index.html` | 442 | `31/01/2027` |
| fim das inscrições | Calendário | `index.html` | 447 | `28/02/2027` |
| início das aulas | Calendário | `index.html` | 457 | `13/03/2027` |
| datas do módulo 1 | Calendário | `index.html` | 462 | `13 a 28/03/2027` |
| datas do módulo 2 | Calendário | `index.html` | 467 | `27/03 a 11/04/2027` |
| datas do módulo 3 | Calendário | `index.html` | 472 | `10 a 25/04/2027` |
| datas do módulo 4 | Calendário | `index.html` | 477 | `24/04 a 13/05/2027` |
| término das aulas | Calendário | `index.html` | 482 | `13/05/2027` |
| prazo para pedido de bolsa | Bolsas | `index.html` | 598 | `15/01/2027` |
| resultado das bolsas | Bolsas | `index.html` | 607 | `31/01/2027` |
| início das aulas | FAQ | `index.html` | 646 | `13/03/2027` |
| término das aulas | FAQ | `index.html` | 649 | `13/05/2027.` |
| início das inscrições | FAQ | `index.html` | 652 | `01/12/2026` |
| fim das inscrições | FAQ | `index.html` | 655 | `28/02/2027.` |
| prazo para pedido de bolsa | FAQ | `index.html` | 721 | `15/01/2027` |
| resultado das bolsas | FAQ | `index.html` | 724 | `31/01/2027.` |
| início das inscrições | CTA final | `index.html` | 756 | `01/12/2026` |
| fim das inscrições | CTA final | `index.html` | 759 | `28/02/2027.` |
| prazo para pedido de bolsa | CTA final | `index.html` | 762 | `15/01/2027.` |
| JSON-LD startDate | head (JSON-LD) | `index.html` | 78 | `"startDate": "2027-03-13"` |
| JSON-LD endDate | head (JSON-LD) | `index.html` | 79 | `"endDate": "2027-05-13"` |

## Código, edição e vagas

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| código do curso | Sobre | `index.html` | 218 | `550300021` |
| edição do curso | Sobre | `index.html` | 222 | `26002` |
| número de vagas gratuitas | Bolsas | `index.html` | 566 | `45` |
| total de vagas | Bolsas | `index.html` | 574 | `450` |
| número de vagas gratuitas | FAQ | `index.html` | 715 | `45` |
| total de vagas | FAQ | `index.html` | 718 | `450` |
| JSON-LD courseCode | head (JSON-LD) | `index.html` | 55 | `"courseCode": "550300021"` |
| JSON-LD identifier (edição) | head (JSON-LD) | `index.html` | 80 | `"identifier": "26002"` |

## Outros

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| espaço reservado para a logo do curso; substitua este bloco pela imagem quando ela existir | hero | `index.html` | 189 | (bloco vazio) |

## Logo do curso

Ainda não há arquivo da logo do curso. O espaço reservado está em `index.html`, linha 189 (`div.logo-curso-placeholder`; aparece a partir de 768 px de largura). Não há texto visível nesse espaço. A curva normal do hero fica atrás dele e continua quando a logo entrar.

## Gráfico de vagas (Bolsas)

São 450 pontos (30 colunas × 15 linhas); os 45 primeiros ficam em destaque: uma linha inteira (30) em `index.html`, linha 587, mais 15 pontos da linha seguinte (`width="150"`, 15 × 10) na linha 588. Se o número de vagas mudar, ajuste essas larguras (10 por ponto) e o `aria-label` do `<svg class="vagas-grafico">`.

## Linha do tempo (CSS)

As barras e os marcadores de mês são calculados a partir do intervalo das aulas (13/03/2027 a 13/05/2027). Se as datas dos módulos mudarem, recálcule `left` e `width`.

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Marcador 01/04 | `css/style.css` | 716 | `left: 31.15%` |
| Marcador 01/05 | `css/style.css` | 721 | `left: 80.33%` |
| Barra do módulo 1 | `css/style.css` | 799 | `left: 0%; width: 25.81%` |
| Barra do módulo 2 | `css/style.css` | 800 | `left: 22.58%; width: 25.81%` |
| Barra do módulo 3 | `css/style.css` | 801 | `left: 45.16%; width: 25.81%` |
| Barra do módulo 4 | `css/style.css` | 802 | `left: 67.74%; width: 32.26%` |
