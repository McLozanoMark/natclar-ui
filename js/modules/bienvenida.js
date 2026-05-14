(function (window, document) {
  "use strict";

  function setWelcomeMode() {
    const screen = document.getElementById("screen-bienvenida");
    const isActive = !!screen && screen.classList.contains("active");
    document.body.classList.toggle("bienvenida-fullscreen-mode", isActive);
  }

  function observeWelcomeMode() {
    const screen = document.getElementById("screen-bienvenida");
    if (!screen || screen.dataset.bienvenidaModeObserver === "1") return;
    screen.dataset.bienvenidaModeObserver = "1";
    const observer = new MutationObserver(setWelcomeMode);
    observer.observe(screen, { attributes: true, attributeFilter: ["class"] });
    setWelcomeMode();
  }

  const BienvenidaModule = {
    start() {
      if (typeof window.go === "function") {
        window.go("pruebas");
        window.location.hash = "pruebas";
      }
      setWelcomeMode();
    },
    exit() {
      if (typeof window.go === "function") {
        window.go("dashboard");
        window.location.hash = "dashboard";
      }
      setWelcomeMode();
    },
    init() {
      observeWelcomeMode();
      const hasHash = !!(window.location.hash || "").replace(/^#/, "").trim();
      if (!hasHash && typeof window.go === "function") {
        window.go("bienvenida");
      }
      setWelcomeMode();
    },
  };

  window.BienvenidaModule = BienvenidaModule;
  document.addEventListener("DOMContentLoaded", function () {
    BienvenidaModule.init();
  });
})(window, document);
