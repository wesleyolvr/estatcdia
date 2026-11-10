# Instruções de edição (v2)

Não há build. Edite os arquivos e envie de novo por FTP. Os campos que mudam com frequência — valores, parcelas, formas de pagamento, datas, links, chave PIX, e-mail e domínio — estão marcados no HTML com comentários `<!-- EDITAR: ... -->`. A linha indicada é a do valor em si, não a do comentário.

Arquivo principal: `index.html`. A chave PIX exibida na caixa `#pix-chave` é a mesma que o botão **Copiar** usa (`js/main.js` lê o texto da página).

Se o domínio previsto deixar de ser `https://estatcdia.icmc.usp.br/`, atualize todas as ocorrências da seção **Domínio**.

## Domínio

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Canonical | `index.html` | 11 | `https://estatcdia.icmc.usp.br/` |
| Open Graph (`og:url`) | `index.html` | 22 | `https://estatcdia.icmc.usp.br/` |
| Open Graph (`og:image`) | `index.html` | 24 | `https://estatcdia.icmc.usp.br/img/og-image.png` |
| Twitter (`twitter:image`) | `index.html` | 34 | `https://estatcdia.icmc.usp.br/img/og-image.png` |
| JSON-LD (`url`) | `index.html` | 47 | `https://estatcdia.icmc.usp.br/` |

## Título e descrições

| O que editar | Arquivo | Linha |
| --- | --- | ---: |
| Título da página (`<title>`) | `index.html` | 7 |
| Meta description | `index.html` | 9 |
| `og:title` | `index.html` | 18 |
| `og:description` | `index.html` | 20 |
| `twitter:title` | `index.html` | 30 |
| `twitter:description` | `index.html` | 32 |
| JSON-LD (`name` e `description`) | `index.html` | 45–46 |

O `<title>` usa a forma curta “IA” para ficar abaixo de 70 caracteres. O título oficial completo permanece no `h1` e nas tags de compartilhamento.

## Links

| O que editar | Arquivo | Linha |
| --- | --- | ---: |
| Inscrição no Sistema Apolo (menu) | `index.html` | 104 |
| Inscrição no Sistema Apolo (hero) | `index.html` | 122 |
| Formulário de bolsa (hero) | `index.html` | 124 |
| Formulário de bolsa (seção Bolsas) | `index.html` | 540 |
| Formulário de bolsa (FAQ) | `index.html` | 654 |
| Inscrição no Sistema Apolo (CTA final) | `index.html` | 689 |
| Formulário de bolsa (CTA final) | `index.html` | 691 |
| JSON-LD (`offers.url`, Apolo) | `index.html` | 66 |

URL atual do Apolo: `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqofeedi=1`

URL atual do formulário: `https://forms.gle/ajA7WCKkDiWJxV3k8`

## E-mail

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| JSON-LD (`provider.email`) | `index.html` | 55 | `estatcdia@icmc.usp.br` |
| FAQ | `index.html` | 666 | `estatcdia@icmc.usp.br` |
| Rodapé | `index.html` | 708 | `estatcdia@icmc.usp.br` |

## Valores, parcelas e formas de pagamento

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Taxa de inscrição | `index.html` | 453 | `R$ 100,00` |
| Forma de pagamento da taxa | `index.html` | 457 | `PIX` |
| Valor do curso | `index.html` | 463 | `R$ 1.299,00` |
| Formas de pagamento do curso | `index.html` | 467 | `PIX ou boleto, em até` |
| Número de parcelas | `index.html` | 469 | `3 parcelas` |
| Total para pagantes | `index.html` | 475 | `R$ 1.399,00` |
| Taxa no passo 2 da inscrição | `index.html` | 485 | `R$ 100,00` |
| Forma de pagamento no passo 2 | `index.html` | 488 | `PIX` |
| JSON-LD (`offers.price`) | `index.html` | 64 | `1399.00` |
| Taxa na FAQ (investimento) | `index.html` | 602 | `R$ 100,00, via` |
| Forma de pagamento da taxa na FAQ | `index.html` | 604 | `PIX` |
| Valor do curso na FAQ | `index.html` | 610 | `R$ 1.299,00, por` |
| Formas de pagamento do curso na FAQ | `index.html` | 612 | `PIX ou boleto, em até` |
| Parcelas na FAQ | `index.html` | 614 | `3 parcelas.` |
| Total na FAQ | `index.html` | 617 | `R$ 1.399,00.` |
| Taxa na FAQ (como se inscrever) | `index.html` | 627 | `R$ 100,00` |
| Forma de pagamento na FAQ (como se inscrever) | `index.html` | 630 | `PIX` |

## Chave PIX

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Caixa da chave (usada pelo botão Copiar) | `index.html` | 499 | `leticia.cursos@fafq.org.br` |
| Chave PIX na FAQ | `index.html` | 607 | `leticia.cursos@fafq.org.br.` |

## Datas

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Início das inscrições (hero) | `index.html` | 131 | `01/12/2026` |
| Fim das inscrições (hero) | `index.html` | 134 | `28/02/2027` |
| Prazo para pedido de bolsa (hero) | `index.html` | 142 | `15/01/2027` |
| Início das aulas (Sobre) | `index.html` | 188 | `13/03/2027` |
| Término das aulas (Sobre) | `index.html` | 191 | `13/05/2027` |
| Datas do módulo 1 (card) | `index.html` | 288 | `13 a 28/03/2027` |
| Datas do módulo 2 (card) | `index.html` | 296 | `27/03 a 11/04/2027` |
| Datas do módulo 3 (card) | `index.html` | 304 | `10 a 25/04/2027` |
| Datas do módulo 4 (card) | `index.html` | 312 | `24/04 a 13/05/2027` |
| Início das aulas (linha do tempo) | `index.html` | 321 | `13/03/2027` |
| Término das aulas (linha do tempo) | `index.html` | 324 | `13/05/2027` |
| Datas do módulo 1 (linha do tempo) | `index.html` | 337 | `13 a 28/03/2027` |
| Datas do módulo 2 (linha do tempo) | `index.html` | 347 | `27/03 a 11/04/2027` |
| Datas do módulo 3 (linha do tempo) | `index.html` | 357 | `10 a 25/04/2027` |
| Datas do módulo 4 (linha do tempo) | `index.html` | 367 | `24/04 a 13/05/2027` |
| Início das inscrições (calendário) | `index.html` | 387 | `01/12/2026` |
| Prazo para pedido de bolsa (calendário) | `index.html` | 392 | `15/01/2027` |
| Resultado das bolsas (calendário) | `index.html` | 397 | `31/01/2027` |
| Fim das inscrições (calendário) | `index.html` | 402 | `28/02/2027` |
| Início das aulas (calendário) | `index.html` | 412 | `13/03/2027` |
| Datas do módulo 1 (calendário) | `index.html` | 417 | `13 a 28/03/2027` |
| Datas do módulo 2 (calendário) | `index.html` | 422 | `27/03 a 11/04/2027` |
| Datas do módulo 3 (calendário) | `index.html` | 427 | `10 a 25/04/2027` |
| Datas do módulo 4 (calendário) | `index.html` | 432 | `24/04 a 13/05/2027` |
| Término das aulas (calendário) | `index.html` | 437 | `13/05/2027` |
| Prazo para pedido de bolsa (Bolsas) | `index.html` | 532 | `15/01/2027` |
| Resultado das bolsas (Bolsas) | `index.html` | 536 | `31/01/2027` |
| Início das aulas (FAQ) | `index.html` | 573 | `13/03/2027` |
| Término das aulas (FAQ) | `index.html` | 576 | `13/05/2027` |
| Início das inscrições (FAQ) | `index.html` | 579 | `01/12/2026` |
| Fim das inscrições (FAQ) | `index.html` | 582 | `28/02/2027` |
| Prazo para pedido de bolsa (FAQ) | `index.html` | 648 | `15/01/2027` |
| Resultado das bolsas (FAQ) | `index.html` | 651 | `31/01/2027` |
| Início das inscrições (CTA final) | `index.html` | 679 | `01/12/2026` |
| Fim das inscrições (CTA final) | `index.html` | 682 | `28/02/2027` |
| Prazo para pedido de bolsa (CTA final) | `index.html` | 685 | `15/01/2027` |
| JSON-LD (`startDate` das aulas) | `index.html` | 71 | `2027-03-13` |
| JSON-LD (`endDate` das aulas) | `index.html` | 72 | `2027-05-13` |

## Código, edição e vagas

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Código do curso | `index.html` | 177 | `550300021` |
| Edição do curso | `index.html` | 181 | `26002` |
| JSON-LD (`courseCode`) | `index.html` | 48 | `550300021` |
| JSON-LD (`identifier` da edição) | `index.html` | 73 | `26002` |
| Vagas gratuitas | `index.html` | 515 | `45` |
| Total de vagas | `index.html` | 523 | `450` |
| Vagas gratuitas (FAQ) | `index.html` | 642 | `45` |
| Total de vagas (FAQ) | `index.html` | 645 | `450` |

## Logo do curso

Ainda não há arquivo da logo do curso. O espaço reservado está em `index.html`, linha 148 (`div.logo-curso-placeholder`). Não há texto visível nesse espaço.

## Linha do tempo (CSS)

As barras e os marcadores de mês são calculados a partir do intervalo das aulas (13/03/2027 a 13/05/2027). Se as datas dos módulos mudarem, recálcule `left` e `width`.

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Marcador 01/04 | `css/style.css` | 641 | `left: 31.15%` |
| Marcador 01/05 | `css/style.css` | 646 | `left: 80.33%` |
| Barra do módulo 1 | `css/style.css` | 724 | `left: 0%; width: 25.81%` |
| Barra do módulo 2 | `css/style.css` | 725 | `left: 22.58%; width: 25.81%` |
| Barra do módulo 3 | `css/style.css` | 726 | `left: 45.16%; width: 25.81%` |
| Barra do módulo 4 | `css/style.css` | 727 | `left: 67.74%; width: 32.26%` |
