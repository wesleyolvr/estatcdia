# Instruções de edição (v6)

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

**Botões depois do prazo.** A partir de 01/03/2027 (horário de Brasília) saem da página todos os botões **Inscreva-se** (menu, hero, Programa, Investimento, CTA final) e **Solicitar bolsa** (hero, Bolsas, CTA final), ou seja, todo link com o atributo `data-botao-inscricao`. O link "formulário de bolsa" dentro do texto da FAQ continua. Sem JavaScript, os botões sempre aparecem.

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
| link de inscrição no Sistema Apolo | cabeçalho | `index.html` | 133 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link de inscrição no Sistema Apolo | hero | `index.html` | 158 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link do formulário de bolsa | hero | `index.html` | 160 | `https://forms.gle/ajA7WCKkDiWJxV3k8` |
| link de inscrição no Sistema Apolo | Programa | `index.html` | 415 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link de inscrição no Sistema Apolo | Investimento | `index.html` | 605 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link do formulário de bolsa | Bolsas | `index.html` | 675 | `https://forms.gle/ajA7WCKkDiWJxV3k8` |
| link do formulário de bolsa | FAQ | `index.html` | 789 | `https://forms.gle/ajA7WCKkDiWJxV3k8` |
| link de inscrição no Sistema Apolo | CTA final | `index.html` | 828 | `https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002&numseqo` |
| link do formulário de bolsa | CTA final | `index.html` | 830 | `https://forms.gle/ajA7WCKkDiWJxV3k8` |
| JSON-LD offers.url (Apolo) | head (JSON-LD) | `index.html` | 73 | `"url": "https://uspdigital.usp.br/apolo/apoObterCurso?cod_curso=550300021&cod_edicao=26002` |

## E-mail

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| e-mail de contato | FAQ | `index.html` | 801 | `estatcdia@icmc.usp.br` |
| e-mail de contato | rodapé | `index.html` | 847 | `estatcdia@icmc.usp.br` |
| JSON-LD provider.email | head (JSON-LD) | `index.html` | 62 | `"email": "estatcdia@icmc.usp.br"` |

## Chave PIX

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| chave PIX da taxa de inscrição | Investimento | `index.html` | 612 | `leticia.cursos@fafq.org.br` |
| chave PIX da taxa de inscrição | FAQ | `index.html` | 742 | `leticia.cursos@fafq.org.br.` |

## Valores, parcelas e formas de pagamento

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| taxa de inscrição | Investimento | `index.html` | 560 | `R$ 100,00` |
| forma de pagamento da taxa | Investimento | `index.html` | 564 | `PIX` |
| valor do curso | Investimento | `index.html` | 571 | `R$ 1.299,00` |
| formas de pagamento do curso | Investimento | `index.html` | 575 | `PIX ou boleto, em até` |
| número de parcelas do curso | Investimento | `index.html` | 577 | `3 parcelas` |
| total para pagantes | Investimento | `index.html` | 584 | `R$ 1.399,00` |
| taxa de inscrição | Investimento | `index.html` | 594 | `R$ 100,00` |
| forma de pagamento da taxa | Investimento | `index.html` | 597 | `PIX` |
| taxa de inscrição | FAQ | `index.html` | 737 | `R$ 100,00, via` |
| forma de pagamento da taxa | FAQ | `index.html` | 739 | `PIX` |
| valor do curso | FAQ | `index.html` | 745 | `R$ 1.299,00, por` |
| formas de pagamento do curso | FAQ | `index.html` | 747 | `PIX ou boleto, em até` |
| número de parcelas do curso | FAQ | `index.html` | 749 | `3 parcelas.` |
| total para pagantes | FAQ | `index.html` | 752 | `R$ 1.399,00.` |
| taxa de inscrição | FAQ | `index.html` | 762 | `R$ 100,00` |
| forma de pagamento da taxa | FAQ | `index.html` | 765 | `PIX` |
| JSON-LD offers.price | head (JSON-LD) | `index.html` | 71 | `"price": "1399.00"` |

## Datas exibidas na página

Nas linhas com `<time datetime="AAAA-MM-DD">`, troque também o `datetime` (e o `data-fim` dos módulos no gráfico do Calendário): o marcador da próxima data no Calendário e as barras do gráfico leem esses atributos. O JavaScript recalcula a posição das barras a partir do início e do término em `.cronograma-aulas` e das datas de cada módulo; o texto visível e o JS das datas oficiais em `js/main.js` continuam independentes.

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| início das inscrições | hero | `index.html` | 167 | `01/12/2026` |
| fim das inscrições | hero | `index.html` | 170 | `28/02/2027` |
| prazo para pedido de bolsa | hero | `index.html` | 178 | `15/01/2027` |
| início das aulas | hero | `index.html` | 185 | `13/03/2027` |
| término das aulas | hero | `index.html` | 188 | `13/05/2027` |
| início das aulas | Sobre | `index.html` | 234 | `13/03/2027` |
| término das aulas | Sobre | `index.html` | 237 | `13/05/2027` |
| datas do módulo 1 (se alterar, atualize também o gráfico do Calendário) | Programa | `index.html` | 296 | `13 a 28/03/2027` |
| datas do módulo 2 (se alterar, atualize também o gráfico do Calendário) | Programa | `index.html` | 328 | `27/03 a 11/04/2027` |
| datas do módulo 3 (se alterar, atualize também o gráfico do Calendário) | Programa | `index.html` | 360 | `10 a 25/04/2027` |
| datas do módulo 4 (se alterar, atualize também o gráfico do Calendário) | Programa | `index.html` | 393 | `24/04 a 13/05/2027` |
| início das inscrições | Calendário | `index.html` | 430 | `01/12/2026` |
| prazo para pedido de bolsa | Calendário | `index.html` | 435 | `15/01/2027` |
| resultado das bolsas | Calendário | `index.html` | 440 | `31/01/2027` |
| fim das inscrições | Calendário | `index.html` | 445 | `28/02/2027` |
| início das aulas | Calendário | `index.html` | 456 | `13/03/2027` |
| término das aulas | Calendário | `index.html` | 461 | `13/05/2027` |
| datas do módulo 1 | Calendário (gráfico) | `index.html` | 481 | `13 a 28/03/2027` |
| datas do módulo 2 | Calendário (gráfico) | `index.html` | 499 | `27/03 a 11/04/2027` |
| datas do módulo 3 | Calendário (gráfico) | `index.html` | 517 | `10 a 25/04/2027` |
| datas do módulo 4 | Calendário (gráfico) | `index.html` | 535 | `24/04 a 13/05/2027` |
| prazo para pedido de bolsa | Bolsas | `index.html` | 660 | `15/01/2027` |
| resultado das bolsas | Bolsas | `index.html` | 669 | `31/01/2027` |
| início das aulas | FAQ | `index.html` | 708 | `13/03/2027` |
| término das aulas | FAQ | `index.html` | 711 | `13/05/2027.` |
| início das inscrições | FAQ | `index.html` | 714 | `01/12/2026` |
| fim das inscrições | FAQ | `index.html` | 717 | `28/02/2027.` |
| prazo para pedido de bolsa | FAQ | `index.html` | 783 | `15/01/2027` |
| resultado das bolsas | FAQ | `index.html` | 786 | `31/01/2027.` |
| início das inscrições | CTA final | `index.html` | 818 | `01/12/2026` |
| fim das inscrições | CTA final | `index.html` | 821 | `28/02/2027.` |
| prazo para pedido de bolsa | CTA final | `index.html` | 824 | `15/01/2027.` |
| JSON-LD startDate | head (JSON-LD) | `index.html` | 78 | `"startDate": "2027-03-13"` |
| JSON-LD endDate | head (JSON-LD) | `index.html` | 79 | `"endDate": "2027-05-13"` |

As datas 15/01/2027 e 28/02/2027 usam a classe `cronograma-marco` (marcador laranja maior e data em negrito). Não acrescente texto ou selo novo.

## Código, edição e vagas

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| código do curso | Sobre | `index.html` | 223 | `550300021` |
| edição do curso | Sobre | `index.html` | 227 | `26002` |
| número de vagas gratuitas | Bolsas | `index.html` | 628 | `45` |
| total de vagas | Bolsas | `index.html` | 636 | `450` |
| número de vagas gratuitas | FAQ | `index.html` | 777 | `45` |
| total de vagas | FAQ | `index.html` | 780 | `450` |
| JSON-LD courseCode | head (JSON-LD) | `index.html` | 55 | `"courseCode": "550300021"` |
| JSON-LD identifier (edição) | head (JSON-LD) | `index.html` | 80 | `"identifier": "26002"` |

## Programa (cards dos módulos)

O resumo visual “4 × 15 horas = 60 horas” está em `index.html`, linhas 278 a 283. O subtítulo da seção (linha 276) repete a carga horária e a modalidade.

As frases de objetivo dos módulos ainda não entram no site. Há um comentário aguardando aprovação em cada card; se a frase for autorizada, coloque-a logo abaixo, assim: `<p class="modulo-objetivo">…</p>`. O estilo já existe em `css/style.css` (classe `.modulo-objetivo`).

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| resumo visual da carga horária (4 módulos de 15 horas = 60 horas) | Programa | `index.html` | 278 | `4 × 15 horas = 60 horas` |
| frase de objetivo do módulo 1 (aguardando aprovação) | Programa | `index.html` | 303 | (comentário; sem texto visível) |
| frase de objetivo do módulo 2 (aguardando aprovação) | Programa | `index.html` | 335 | (comentário; sem texto visível) |
| frase de objetivo do módulo 3 (aguardando aprovação) | Programa | `index.html` | 367 | (comentário; sem texto visível) |
| frase de objetivo do módulo 4 (aguardando aprovação) | Programa | `index.html` | 400 | (comentário; sem texto visível) |

O endereço antigo `#aprender` continua no início da seção Programa (`span#aprender`, linha 273) para não quebrar links internos.

O botão **Inscreva-se** abaixo dos cards (`index.html`, linha 415) usa o mesmo link do Sistema Apolo e o atributo `data-botao-inscricao`: ele some depois de 28/02/2027, como os outros.

## Outros

| O que editar | Onde | Arquivo | Linha | Valor atual |
| --- | --- | --- | ---: | --- |
| espaço reservado para a logo do curso; substitua este bloco pela imagem quando ela existir | hero | `index.html` | 194 | (bloco vazio) |

## Logo do curso

Ainda não há arquivo da logo do curso. O espaço reservado está em `index.html`, linha 194 (`div.logo-curso-placeholder`; aparece a partir de 768 px de largura). Não há texto visível nesse espaço. A curva normal do hero fica atrás dele e continua quando a logo entrar.

## Gráfico de vagas (Bolsas)

São 450 pontos (30 colunas × 15 linhas); os 45 primeiros ficam em destaque: uma linha inteira (30) em `index.html`, linha 649, mais 15 pontos da linha seguinte (`width="150"`, 15 × 10) na linha 650. Se o número de vagas mudar, ajuste essas larguras (10 por ponto) e o `aria-label` do `<svg class="vagas-grafico">`.

## Gráfico das aulas (Calendário)

As barras e as linhas verticais do gráfico são calculadas pelo JavaScript a partir dos `datetime` e `data-fim` de cada módulo e das datas de início e término em `.cronograma-aulas`. O intervalo atual (13/03/2027 a 13/05/2027) tem 61 dias; o último dia de cada módulo entra na barra. Sem JavaScript, valem as porcentagens abaixo.

Se mudar as datas de um módulo, atualize o texto visível, o `datetime` e o `data-fim` no gráfico e no card do Programa. Se mudar o início ou o término das aulas, atualize o cronograma de Aulas; o JavaScript reposiciona as barras e sincroniza os rótulos de início e de término do eixo. Os rótulos 01/04 e 01/05 são marcas de calendário (`data-gantt-marca` no eixo, `index.html` linhas 469 e 470) e só precisam mudar se o período deixar de cobrir esses dias.

| O que editar | Arquivo | Linha | Valor atual |
| --- | --- | ---: | --- |
| Marcador 01/04 (sem JS) | `css/style.css` | 775 | `--gantt-abr: 31.15%` |
| Marcador 01/05 (sem JS) | `css/style.css` | 776 | `--gantt-mai: 80.33%` |
| Barra do módulo 1 (sem JS) | `css/style.css` | 782 | `--gantt-left: 0%; --gantt-width: 26.23%` |
| Barra do módulo 2 (sem JS) | `css/style.css` | 783 | `--gantt-left: 22.95%; --gantt-width: 26.23%` |
| Barra do módulo 3 (sem JS) | `css/style.css` | 784 | `--gantt-left: 45.90%; --gantt-width: 26.23%` |
| Barra do módulo 4 (sem JS) | `css/style.css` | 785 | `--gantt-left: 68.85%; --gantt-width: 31.15%` |
