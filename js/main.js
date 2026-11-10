(function () {
  "use strict";

  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("menu");
  var scrim = document.getElementById("menu-scrim");
  var inertTargets = document.querySelectorAll(
    ".skip-link, .site-logo, #conteudo, .site-footer"
  );

  function isMenuOpen() {
    return !!(menuBtn && menuBtn.getAttribute("aria-expanded") === "true");
  }

  function desktopNav() {
    return window.matchMedia("(min-width: 1100px)").matches;
  }

  function getMenuFocusable() {
    var items = [];
    if (menuBtn) {
      items.push(menuBtn);
    }
    if (nav) {
      nav.querySelectorAll("a").forEach(function (link) {
        items.push(link);
      });
    }
    return items;
  }

  function setMenu(open, options) {
    if (!menuBtn || !nav) {
      return;
    }

    if (open && desktopNav()) {
      open = false;
    }

    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    document.documentElement.classList.toggle("menu-open", open);

    if (scrim) {
      if (open) {
        scrim.removeAttribute("hidden");
      } else {
        scrim.setAttribute("hidden", "");
      }
    }

    inertTargets.forEach(function (el) {
      if (open) {
        el.setAttribute("inert", "");
      } else {
        el.removeAttribute("inert");
      }
    });

    if (!open && options && options.focusToggle) {
      menuBtn.focus();
    }
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      setMenu(!isMenuOpen());
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (!isMenuOpen()) {
        return;
      }

      if (event.key === "Escape") {
        setMenu(false, { focusToggle: true });
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      var items = getMenuFocusable();
      if (!items.length) {
        return;
      }

      var first = items[0];
      var last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!isMenuOpen()) {
        return;
      }
      if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
        setMenu(false);
      }
    });

    if (scrim) {
      scrim.addEventListener("click", function () {
        setMenu(false);
      });
    }

    window.addEventListener("resize", function () {
      if (desktopNav() && isMenuOpen()) {
        setMenu(false);
      }
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.setAttribute("aria-hidden", "true");
      textarea.style.position = "fixed";
      textarea.style.top = "0";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        var ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (ok) {
          resolve();
        } else {
          reject(new Error("Falha ao copiar"));
        }
      } catch (error) {
        document.body.removeChild(textarea);
        reject(error);
      }
    });
  }

  var pixBtn = document.getElementById("btn-copiar-pix");
  var pixKey = document.getElementById("pix-chave");
  var pixStatus = document.getElementById("pix-feedback");
  var pixLabel = document.getElementById("pix-rotulo");
  var pixTimer = null;

  if (pixBtn && pixKey && pixStatus) {
    pixBtn.addEventListener("click", function () {
      var text = (pixKey.textContent || "").trim();

      copyText(text)
        .then(function () {
          pixStatus.textContent = "Chave PIX copiada.";
          if (pixLabel) {
            pixLabel.textContent = "Copiada";
          }
          pixBtn.classList.add("is-copiado");
          window.clearTimeout(pixTimer);
          pixTimer = window.setTimeout(function () {
            pixStatus.textContent = "";
            if (pixLabel) {
              pixLabel.textContent = "Copiar";
            }
            pixBtn.classList.remove("is-copiado");
          }, 2500);
        })
        .catch(function () {
          pixStatus.textContent =
            "Não foi possível copiar. Selecione a chave e copie manualmente.";
          var range = document.createRange();
          range.selectNodeContents(pixKey);
          var selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        });
    });
  }

  /* ===== Datas do curso: selos de estado e botões =====
     EDITAR: datas oficiais (AAAA-MM-DD, horário de Brasília). Um prazo vale
     até o fim do dia indicado. Veja INSTRUCOES-EDICAO.md. */
  var DATAS = {
    inicioInscricoes: "2026-12-01",
    fimInscricoes: "2027-02-28",
    fimPedidoBolsa: "2027-01-15",
    resultadoBolsas: "2027-01-31",
    inicioAulas: "2027-03-13",
    fimAulas: "2027-05-13"
  };
  /* EDITAR: quantos dias antes do fim o selo muda para "últimos dias" */
  var DIAS_ULTIMOS = 7;
  /* EDITAR: true mantém os botões do Apolo e do formulário mesmo depois
     do fim das inscrições */
  var MOSTRAR_BOTOES_SEMPRE = false;

  function hojeEmBrasilia() {
    var forcada = /[?&]hoje=(\d{4}-\d{2}-\d{2})(?:&|$)/.exec(window.location.search);
    if (forcada) {
      return forcada[1];
    }
    try {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).format(new Date());
    } catch (erro) {
      var d = new Date(Date.now() - 3 * 3600 * 1000);
      return d.toISOString().slice(0, 10);
    }
  }

  function diasEntre(a, b) {
    var pa = a.split("-");
    var pb = b.split("-");
    return Math.round(
      (Date.UTC(+pb[0], pb[1] - 1, +pb[2]) - Date.UTC(+pa[0], pa[1] - 1, +pa[2])) / 86400000
    );
  }

  function estadoPeriodo(hoje, inicio, fim) {
    if (hoje < inicio) {
      return "antes";
    }
    if (hoje > fim) {
      return "encerrado";
    }
    return diasEntre(hoje, fim) < DIAS_ULTIMOS ? "ultimos" : "aberto";
  }

  var hoje = hojeEmBrasilia();
  var estados = {
    inscricoes: estadoPeriodo(hoje, DATAS.inicioInscricoes, DATAS.fimInscricoes),
    bolsa: estadoPeriodo(hoje, DATAS.inicioInscricoes, DATAS.fimPedidoBolsa)
  };
  document.documentElement.setAttribute("data-inscricoes", estados.inscricoes);

  var SVGNS = "http://www.w3.org/2000/svg";
  document.querySelectorAll(".selo[data-selo]").forEach(function (selo) {
    var estado = estados[selo.getAttribute("data-selo")];
    if (!estado) {
      return;
    }
    var svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var use = document.createElementNS(SVGNS, "use");
    use.setAttribute("href", "#e-" + estado);
    svg.appendChild(use);
    selo.textContent = "";
    selo.appendChild(svg);
    selo.setAttribute("data-estado", estado);
  });

  /* Calendário: datas que já passaram e a próxima (ou em curso) */
  var marcouProxima = false;
  document.querySelectorAll("[data-cronograma]").forEach(function (lista) {
    lista.querySelectorAll("li").forEach(function (item) {
      var t = item.querySelector("time[datetime]");
      if (!t) {
        return;
      }
      var inicio = t.getAttribute("datetime");
      var fim = t.getAttribute("data-fim") || inicio;
      if (hoje > fim) {
        item.setAttribute("data-estado", "passada");
      } else if (!marcouProxima) {
        item.setAttribute("data-estado", "proxima");
        marcouProxima = true;
      }
    });
  });

  /* Gráfico das aulas: left/width a partir dos datetime (intervalo inclusive no fim).
     Sem JS, valem as porcentagens definidas em css/style.css. */
  document.querySelectorAll("[data-gantt]").forEach(function (gantt) {
    var aulas = document.querySelector(".cronograma-aulas");
    var limites = aulas ? aulas.querySelectorAll("time[datetime]") : [];
    if (limites.length < 2) {
      return;
    }
    var inicio = limites[0].getAttribute("datetime");
    var fim = limites[1].getAttribute("datetime");
    var span = diasEntre(inicio, fim);
    if (span <= 0) {
      return;
    }

    function pct(iso, extra) {
      var valor = (diasEntre(inicio, iso) + (extra || 0)) / span * 100;
      if (valor < 0) {
        return 0;
      }
      if (valor > 100) {
        return 100;
      }
      return valor;
    }

    function posMarca(iso) {
      if (iso === inicio) {
        return 0;
      }
      if (iso === fim) {
        return 100;
      }
      return pct(iso);
    }

    function fmtDiaMes(iso) {
      var partes = (iso || "").split("-");
      if (partes.length < 3) {
        return "";
      }
      return partes[2] + "/" + partes[1];
    }

    var iniEl = gantt.querySelector(".gantt-marcador-ini");
    var abrEl = gantt.querySelector(".gantt-marcador-abr");
    var maiEl = gantt.querySelector(".gantt-marcador-mai");
    var fimEl = gantt.querySelector(".gantt-marcador-fim");
    if (iniEl) {
      iniEl.setAttribute("data-gantt-marca", inicio);
      iniEl.textContent = fmtDiaMes(inicio);
    }
    if (fimEl) {
      fimEl.setAttribute("data-gantt-marca", fim);
      fimEl.textContent = fmtDiaMes(fim);
    }
    var abrIso = abrEl && abrEl.getAttribute("data-gantt-marca");
    var maiIso = maiEl && maiEl.getAttribute("data-gantt-marca");
    gantt.style.setProperty("--gantt-ini", "0%");
    if (abrIso) {
      gantt.style.setProperty("--gantt-abr", posMarca(abrIso).toFixed(2) + "%");
    }
    if (maiIso) {
      gantt.style.setProperty("--gantt-mai", posMarca(maiIso).toFixed(2) + "%");
    }
    gantt.style.setProperty("--gantt-fim", "100%");

    gantt.querySelectorAll(".gantt-lista > li").forEach(function (item) {
      var t = item.querySelector("time[datetime]");
      if (!t) {
        return;
      }
      var comeco = t.getAttribute("datetime");
      var termo = t.getAttribute("data-fim") || comeco;
      var left = pct(comeco);
      var right = pct(termo, 1);
      item.style.setProperty("--gantt-left", left.toFixed(2) + "%");
      item.style.setProperty("--gantt-width", (right - left).toFixed(2) + "%");
    });
  });

  /* Depois do fim das inscrições, os botões do Apolo e do formulário saem */
  var aberto = estados.inscricoes === "aberto" || estados.inscricoes === "ultimos";
  if (estados.inscricoes === "encerrado" && !MOSTRAR_BOTOES_SEMPRE) {
    document.querySelectorAll("[data-botao-inscricao]").forEach(function (botao) {
      var pai = botao.parentNode;
      pai.removeChild(botao);
      if (pai && !pai.querySelector("a, button") && pai.matches(".hero-actions, .cta-acoes, .passos-acao, .programa-acao")) {
        pai.parentNode.removeChild(pai);
      }
    });
  }

  /* Pulso único no "Inscreva-se" do hero, só com as inscrições abertas */
  if (aberto) {
    document.querySelectorAll(".btn-pulso").forEach(function (botao) {
      botao.classList.add("is-pulsando");
    });
  }

  /* Animações ao entrar na tela: uma vez por elemento */
  if (document.documentElement.classList.contains("motion-ok")) {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("is-visto");
            observador.unobserve(entrada.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    document.querySelectorAll("[data-anima]").forEach(function (el) {
      observador.observe(el);
    });
  }
})();
