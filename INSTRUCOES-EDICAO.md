# Instruções de edição (v1)

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
| Inscrição no Sistema Apolo (hero) | `index.html` | 117 |
| Formulário de bolsa (hero) | `index.html` | 119 |
| Formulário de bolsa (seção Bolsas) | `index.html` | 579 |
| Formulário de bolsa (FAQ) | `index.html` | 694 |
| Inscrição no Sistema Apolo (CTA final) | `index.html` | 729 |
| Formulário de bolsa (CTA final) | `index.html` | 731 |
| JSON-LD (`offers.url`, Apolo) | `index.html` | 66 |

URL atual do Apolo: `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqofeedi=1`

URL atual do formulário: `https://forms.gle/ajA7WCKkDiWJxV3k8`

## E-mail

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| JSON-LD (`provider.email`) | `index.html` | 55 | `estatcdia@icmc.usp.br` |
| FAQ | `index.html` | 706 | `estatcdia@icmc.usp.br` |
| Rodapé | `index.html` | 748 | `estatcdia@icmc.usp.br` |

## Valores, parcelas e formas de pagamento

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Taxa de inscrição | `index.html` | 492 | `R$ 100,00` |
| Forma de pagamento da taxa | `index.html` | 496 | `PIX` |
| Valor do curso | `index.html` | 502 | `R$ 1.299,00` |
| Formas de pagamento do curso | `index.html` | 506 | `PIX ou boleto, em até` |
| Número de parcelas | `index.html` | 508 | `3 parcelas` |
| Total para pagantes | `index.html` | 514 | `R$ 1.399,00` |
| Taxa no passo 2 da inscrição | `index.html` | 524 | `R$ 100,00` |
| Forma de pagamento no passo 2 | `index.html` | 527 | `PIX` |
| JSON-LD (`offers.price`) | `index.html` | 64 | `1399.00` |
| Taxa na FAQ (investimento) | `index.html` | 642 | `R$ 100,00, via` |
| Forma de pagamento da taxa na FAQ | `index.html` | 644 | `PIX` |
| Valor do curso na FAQ | `index.html` | 650 | `R$ 1.299,00, por` |
| Formas de pagamento do curso na FAQ | `index.html` | 652 | `PIX ou boleto, em até` |
| Parcelas na FAQ | `index.html` | 654 | `3 parcelas.` |
| Total na FAQ | `index.html` | 657 | `R$ 1.399,00.` |
| Taxa na FAQ (como se inscrever) | `index.html` | 667 | `R$ 100,00` |
| Forma de pagamento na FAQ (como se inscrever) | `index.html` | 670 | `PIX` |

## Chave PIX

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Caixa da chave (usada pelo botão Copiar) | `index.html` | 538 | `leticia.cursos@fafq.org.br` |
| Chave PIX na FAQ | `index.html` | 647 | `leticia.cursos@fafq.org.br.` |

## Datas

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Início das inscrições (hero) | `index.html` | 126 | `01/12/2026` |
| Fim das inscrições (hero) | `index.html` | 129 | `28/02/2027` |
| Prazo para pedido de bolsa (hero) | `index.html` | 137 | `15/01/2027` |
| Início das aulas (Sobre) | `index.html` | 182 | `13/03/2027` |
| Término das aulas (Sobre) | `index.html` | 185 | `13/05/2027` |
| Datas do módulo 1 (card) | `index.html` | 286 | `13 a 28/03/2027` |
| Datas do módulo 2 (card) | `index.html` | 307 | `27/03 a 11/04/2027` |
| Datas do módulo 3 (card) | `index.html` | 328 | `10 a 25/04/2027` |
| Datas do módulo 4 (card) | `index.html` | 350 | `24/04 a 13/05/2027` |
| Início das aulas (linha do tempo) | `index.html` | 370 | `13/03/2027` |
| Término das aulas (linha do tempo) | `index.html` | 373 | `13/05/2027` |
| Datas do módulo 1 (linha do tempo) | `index.html` | 386 | `13 a 28/03/2027` |
| Datas do módulo 2 (linha do tempo) | `index.html` | 396 | `27/03 a 11/04/2027` |
| Datas do módulo 3 (linha do tempo) | `index.html` | 406 | `10 a 25/04/2027` |
| Datas do módulo 4 (linha do tempo) | `index.html` | 416 | `24/04 a 13/05/2027` |
| Início das inscrições (calendário) | `index.html` | 433 | `01/12/2026` |
| Prazo para pedido de bolsa (calendário) | `index.html` | 438 | `15/01/2027` |
| Resultado das bolsas (calendário) | `index.html` | 443 | `31/01/2027` |
| Fim das inscrições (calendário) | `index.html` | 448 | `28/02/2027` |
| Início das aulas (calendário) | `index.html` | 453 | `13/03/2027` |
| Datas do módulo 1 (calendário) | `index.html` | 458 | `13 a 28/03/2027` |
| Datas do módulo 2 (calendário) | `index.html` | 463 | `27/03 a 11/04/2027` |
| Datas do módulo 3 (calendário) | `index.html` | 468 | `10 a 25/04/2027` |
| Datas do módulo 4 (calendário) | `index.html` | 473 | `24/04 a 13/05/2027` |
| Término das aulas (calendário) | `index.html` | 478 | `13/05/2027` |
| Prazo para pedido de bolsa (Bolsas) | `index.html` | 571 | `15/01/2027` |
| Resultado das bolsas (Bolsas) | `index.html` | 575 | `31/01/2027` |
| Início das aulas (FAQ) | `index.html` | 613 | `13/03/2027` |
| Término das aulas (FAQ) | `index.html` | 616 | `13/05/2027` |
| Início das inscrições (FAQ) | `index.html` | 619 | `01/12/2026` |
| Fim das inscrições (FAQ) | `index.html` | 622 | `28/02/2027` |
| Prazo para pedido de bolsa (FAQ) | `index.html` | 688 | `15/01/2027` |
| Resultado das bolsas (FAQ) | `index.html` | 691 | `31/01/2027` |
| Início das inscrições (CTA final) | `index.html` | 719 | `01/12/2026` |
| Fim das inscrições (CTA final) | `index.html` | 722 | `28/02/2027` |
| Prazo para pedido de bolsa (CTA final) | `index.html` | 725 | `15/01/2027` |
| JSON-LD (`startDate` das aulas) | `index.html` | 71 | `2027-03-13` |
| JSON-LD (`endDate` das aulas) | `index.html` | 72 | `2027-05-13` |

## Código, edição e vagas

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Código do curso | `index.html` | 171 | `550300021` |
| Edição do curso | `index.html` | 175 | `26002` |
| JSON-LD (`courseCode`) | `index.html` | 48 | `550300021` |
| JSON-LD (`identifier` da edição) | `index.html` | 73 | `26002` |
| Vagas gratuitas | `index.html` | 554 | `45` |
| Total de vagas | `index.html` | 562 | `450` |
| Vagas gratuitas (FAQ) | `index.html` | 682 | `45` |
| Total de vagas (FAQ) | `index.html` | 685 | `450` |

## Linha do tempo (CSS)

As barras e os marcadores de mês são calculados a partir do intervalo das aulas (13/03/2027 a 13/05/2027). Se as datas dos módulos mudarem, recálcule `left` e `width`.

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Marcador 01/04 | `css/style.css` | 580 | `left: 31.15%` |
| Marcador 01/05 | `css/style.css` | 585 | `left: 80.33%` |
| Barra do módulo 1 | `css/style.css` | 633 | `left: 0%; width: 25.81%` |
| Barra do módulo 2 | `css/style.css` | 634 | `left: 22.58%; width: 25.81%` |
| Barra do módulo 3 | `css/style.css` | 635 | `left: 45.16%; width: 25.81%` |
| Barra do módulo 4 | `css/style.css` | 636 | `left: 67.74%; width: 32.26%` |
