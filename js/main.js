(function () {
  "use strict";

  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("menu");

  function setMenu(open) {
    if (!menuBtn || !nav) {
      return;
    }
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenu(false);
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
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

  if (pixBtn && pixKey && pixStatus) {
    pixBtn.addEventListener("click", function () {
      var text = (pixKey.textContent || "").trim();

      copyText(text)
        .then(function () {
          pixStatus.textContent = "Chave PIX copiada.";
          pixBtn.textContent = "Copiada";
          window.setTimeout(function () {
            pixStatus.textContent = "";
            pixBtn.textContent = "Copiar";
          }, 4000);
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
})();
