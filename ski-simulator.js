(function () {
  "use strict";

  function injectSharedStyles() {
    if (document.getElementById("ski-sim-styles")) return;
    var style = document.createElement("style");
    style.id = "ski-sim-styles";
    style.textContent = [
      /* Shared Simulator + Hero Toolbar Card Styles */
      ".ski-sim-card{height:100%;width:100%;min-height:380px;box-sizing:border-box;border:1px solid var(--ski-border,rgba(255,255,255,0.08));border-radius:24px;padding:24px 28px;background:linear-gradient(180deg,var(--ski-surface,#121215) 0%,var(--ski-bg,#09090b) 100%);color:var(--ski-text,#f4f4f5);font-family:'Instrument Sans',sans-serif;display:flex;flex-direction:column;justify-content:space-between;gap:20px;overflow:hidden;position:relative;box-shadow:var(--ski-card-shadow,0 20px 50px rgba(0,0,0,0.65));}",
      ".ski-hero-card{height:100%;width:100%;box-sizing:border-box;border:1px solid rgba(62,166,255,0.35);border-radius:24px;padding:28px;background:linear-gradient(180deg,var(--ski-surface,#121215) 0%,var(--ski-bg,#09090b) 100%);color:var(--ski-text,#f4f4f5);font-family:'Instrument Sans',sans-serif;display:flex;flex-direction:column;justify-content:space-between;gap:22px;overflow:hidden;position:relative;box-shadow:0 0 28px rgba(62,166,255,0.12);transition:border-color 0.25s ease,box-shadow 0.25s ease;}",
      ".ski-hero-card.paused{border-color:var(--ski-border,rgba(255,255,255,0.08));box-shadow:var(--ski-card-shadow,0 20px 40px rgba(0,0,0,0.5));}",
      ".ski-sim-top{display:flex;justify-content:space-between;align-items:center;gap:12px;font-size:12px;font-family:'Martian Mono',monospace;z-index:2;}",
      ".ski-sim-status{display:flex;align-items:center;gap:8px;color:var(--ski-text,#f4f4f5);font-weight:500;}",
      ".ski-sim-dot{width:9px;height:9px;border-radius:99px;background:#ef4444;box-shadow:0 0 8px rgba(239,68,68,0.7);animation:skiPulse 1.4s infinite;}",
      ".ski-sim-dot.playing,.ski-sim-dot.active{background:var(--ski-green-dot,#30d158);box-shadow:0 0 8px rgba(48,209,88,0.6);animation:none;}",
      ".ski-sim-dot.blue{background:#3ea6ff;box-shadow:0 0 10px rgba(62,166,255,0.7);animation:skiPulse 2s infinite;}",
      ".ski-sim-dot.paused{background:var(--ski-subtle,#71717a);box-shadow:none;animation:none;}",
      ".ski-sim-toggle-wrap{display:flex;align-items:center;gap:8px;background:var(--ski-toggle-bg,rgba(255,255,255,0.04));border:1px solid var(--ski-border,rgba(255,255,255,0.08));padding:5px 10px;border-radius:99px;cursor:pointer;user-select:none;font-size:11px;color:var(--ski-muted,#a1a1aa);transition:border-color 0.2s;}",
      ".ski-sim-toggle-wrap:hover{border-color:rgba(62,166,255,0.5);color:var(--ski-text,#f4f4f5);}",
      ".ski-sim-switch{width:36px;height:20px;border-radius:99px;background:#3f3f46;padding:2px;display:flex;align-items:center;transition:background 0.2s;box-sizing:border-box;border:0;cursor:pointer;}",
      "html[data-theme='light'] .ski-sim-switch{background:#d4d4d8;}",
      ".ski-sim-switch.on{background:#3ea6ff;}",
      "html[data-theme='light'] .ski-sim-switch.on{background:#3ea6ff;}",
      ".ski-sim-knob{width:16px;height:16px;border-radius:99px;background:#ffffff;transition:transform 0.2s;box-shadow:0 1px 2px rgba(0,0,0,0.2);}",
      ".ski-sim-switch.on .ski-sim-knob{transform:translateX(16px);}",
      ".ski-sim-center{padding:18px 0;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;z-index:2;margin:auto 0;}",
      ".ski-sim-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:8px;font-size:11px;font-weight:600;letter-spacing:0.02em;}",
      ".ski-sim-badge.ad{background:rgba(245,158,11,0.14);color:#fbbf24;border:1px solid rgba(245,158,11,0.3);}",
      "html[data-theme='light'] .ski-sim-badge.ad{background:rgba(217,119,6,0.10);color:#b45309;border-color:rgba(217,119,6,0.28);}",
      ".ski-sim-badge.ok{background:rgba(48,209,88,0.14);color:#30d158;border:1px solid rgba(48,209,88,0.3);}",
      "html[data-theme='light'] .ski-sim-badge.ok{background:rgba(21,128,61,0.10);color:#15803d;border-color:rgba(21,128,61,0.28);}",
      ".ski-sim-timer{font-family:'Martian Mono',monospace;font-size:56px;line-height:1;letter-spacing:-0.06em;color:var(--ski-accent-text,#3ea6ff);font-variant-numeric:tabular-nums;}",
      ".ski-sim-prompt{font-size:18px;font-weight:700;color:var(--ski-text,#ffffff);display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center;}",
      ".ski-sim-kbd{padding:4px 10px;border-radius:8px;background:var(--ski-kbd-bg,#18181b);border:1px solid var(--ski-kbd-border,rgba(255,255,255,0.16));border-bottom-width:3px;color:var(--ski-accent-text,#3ea6ff);font-family:'Martian Mono',monospace;font-size:13px;font-weight:700;}",
      ".ski-sim-sub{color:var(--ski-muted,#a1a1aa);font-size:13px;margin:0;}",
      ".ski-sim-bottom{display:flex;align-items:center;justify-content:space-between;gap:14px;border-top:1px solid var(--ski-border,rgba(255,255,255,0.08));padding-top:16px;z-index:2;flex-wrap:wrap;}",
      ".ski-sim-count{font-family:'Martian Mono',monospace;font-size:11px;color:var(--ski-subtle,#71717a);}",
      ".ski-sim-count strong{color:var(--ski-text,#f4f4f5);font-variant-numeric:tabular-nums;}",
      ".ski-sim-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:10px;background:var(--ski-elevated,#09090b);border:1px solid var(--ski-border-strong,rgba(255,255,255,0.18));color:var(--ski-text,#ffffff);font-family:'Instrument Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:border-color 0.2s,transform 0.1s,opacity 0.2s;}",
      ".ski-sim-btn:hover:not(:disabled){border-color:#3ea6ff;}",
      ".ski-sim-btn:active:not(:disabled){transform:scale(0.96);}",
      ".ski-sim-btn:disabled{opacity:0.4;cursor:not-allowed;}",
      ".ski-sim-btn-primary{padding:11px 18px;border-radius:999px;background:#3ea6ff;color:#09090b;border:0;font-family:'Instrument Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:opacity 0.2s,transform 0.1s;}",
      ".ski-sim-btn-primary:hover:not(:disabled){opacity:0.92;}",
      ".ski-sim-btn-primary:active:not(:disabled){transform:scale(0.96);}",
      ".ski-sim-btn-primary:disabled{opacity:0.35;cursor:not-allowed;}",
      ".ski-sim-btn-mobile{display:none;padding:10px 18px;border-radius:999px;background:#3ea6ff;color:#09090b;border:0;font-weight:700;font-size:12px;cursor:pointer;}",
      ".ski-hero-row{display:flex;align-items:center;justify-content:space-between;gap:16px;border-top:1px solid var(--ski-border,rgba(255,255,255,0.08));padding-top:16px;font-size:14px;}",
      ".ski-hero-stats{display:flex;align-items:center;gap:24px;font-family:'Martian Mono',monospace;font-size:12px;font-variant-numeric:tabular-nums;}",
      "@media(max-width:640px){.ski-sim-btn-mobile{display:inline-flex;}.ski-sim-timer{font-size:44px;}}",
      ".ski-sim-toast{position:absolute;bottom:20px;right:20px;z-index:20;display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:12px;background:rgba(22,22,24,0.95);border:1px solid rgba(255,255,255,0.1);border-left:3px solid #3ea6ff;color:#f5f5f7;font-size:13px;font-weight:600;box-shadow:0 12px 30px rgba(0,0,0,0.6);backdrop-filter:blur(12px);opacity:0;transform:translateY(10px);pointer-events:none;transition:opacity 0.22s ease,transform 0.22s ease;}",
      "html[data-theme='light'] .ski-sim-toast{background:rgba(255,255,255,0.96);border-color:rgba(9,9,11,0.12);border-left:3px solid #0070d6;color:#09090b;box-shadow:0 12px 30px rgba(9,9,11,0.12);}",
      ".ski-sim-toast.visible{opacity:1;transform:translateY(0);}",
      "@keyframes skiPulse{0%,100%{opacity:1;}50%{opacity:0.4;}}"
    ].join("");
    document.head.appendChild(style);
  }

  function formatSaved(skips) {
    var sec = skips * 15;
    var mins = Math.floor(sec / 60);
    var rem = sec % 60;
    if (mins === 0) return rem + "s";
    return rem > 0 ? mins + "m " + rem + "s" : mins + "m";
  }

  function initHeroCard() {
    var container = document.querySelector('[data-framer-name="Ski Toolbar Preview"]');
    if (!container || container.getAttribute("data-ski-mounted") === "true") return;
    container.setAttribute("data-ski-mounted", "true");

    var state = {
      enabled: true,
      autoSkip: false,
      skips: 42,
      toastTimer: null
    };

    var card = document.createElement("div");
    card.className = "ski-hero-card";
    card.innerHTML = [
      '<div class="ski-sim-top">',
      '  <div class="ski-sim-status"><span class="ski-sim-dot blue" id="hero-dot"></span><span id="hero-power-label" style="color:var(--ski-accent-text,#3ea6ff)">Ski is Active</span></div>',
      '  <div style="display:flex;align-items:center;gap:10px;">',
      '    <span style="color:var(--ski-subtle,#71717a)">v1.0.1</span>',
      '    <button type="button" class="ski-sim-switch on" id="hero-power-switch" role="switch" aria-checked="true" aria-label="Toggle Ski Active"><span class="ski-sim-knob"></span></button>',
      '  </div>',
      '</div>',
      '<div class="ski-sim-center" style="padding:14px 0;">',
      '  <div id="hero-key-display" style="font-family:\'Martian Mono\',monospace;font-size:52px;letter-spacing:-0.06em;line-height:1;color:var(--ski-accent-text,#3ea6ff);transition:opacity 0.2s;">Tab</div>',
      '  <p id="hero-hint" style="color:var(--ski-muted,#a1a1aa);font-size:14px;margin:4px 0 0;">Press Tab during ads</p>',
      '</div>',
      '<div class="ski-hero-row">',
      '  <span style="color:var(--ski-text,#e4e4e7);font-weight:500;">Auto-Skip Ads</span>',
      '  <button type="button" class="ski-sim-switch" id="hero-autoskip-switch" role="switch" aria-checked="false" aria-label="Auto-Skip Ads"><span class="ski-sim-knob"></span></button>',
      '</div>',
      '<div class="ski-sim-bottom" style="padding-top:14px;">',
      '  <div class="ski-hero-stats">',
      '    <span><strong id="hero-skips" style="color:var(--ski-text,#ffffff)">42</strong> <span style="color:var(--ski-muted,#a1a1aa)">Skipped</span></span>',
      '    <span><strong id="hero-saved" style="color:var(--ski-green-text,#30d158)">10m 30s</strong> <span style="color:var(--ski-muted,#a1a1aa)">Saved</span></span>',
      '  </div>',
      '  <button type="button" class="ski-sim-btn-primary" id="hero-sim-btn">Simulate Skip ⏭</button>',
      '</div>',
      '<div class="ski-sim-toast" id="hero-toast" role="status" aria-live="polite"></div>'
    ].join("");

    container.replaceChildren(card);

    var dot = card.querySelector("#hero-dot");
    var powerLabel = card.querySelector("#hero-power-label");
    var powerSwitch = card.querySelector("#hero-power-switch");
    var keyDisplay = card.querySelector("#hero-key-display");
    var hintEl = card.querySelector("#hero-hint");
    var autoSwitch = card.querySelector("#hero-autoskip-switch");
    var skipsEl = card.querySelector("#hero-skips");
    var savedEl = card.querySelector("#hero-saved");
    var simBtn = card.querySelector("#hero-sim-btn");
    var toastEl = card.querySelector("#hero-toast");

    function render() {
      card.classList.toggle("paused", !state.enabled);
      dot.className = "ski-sim-dot " + (state.enabled ? "blue" : "paused");
      powerLabel.textContent = state.enabled ? "Ski is Active" : "Ski is Paused";
      powerLabel.style.color = state.enabled ? "var(--ski-accent-text,#3ea6ff)" : "var(--ski-subtle,#71717a)";
      powerSwitch.classList.toggle("on", state.enabled);
      powerSwitch.setAttribute("aria-checked", String(state.enabled));

      autoSwitch.classList.toggle("on", state.autoSkip);
      autoSwitch.setAttribute("aria-checked", String(state.autoSkip));

      keyDisplay.style.opacity = state.enabled ? "1" : "0.35";
      keyDisplay.textContent = !state.enabled ? "Paused" : state.autoSkip ? "Auto ⚡" : "Tab";
      hintEl.textContent = !state.enabled
        ? "Extension paused — ads will not be skipped"
        : state.autoSkip
        ? "Auto-skipping enabled — hands-free mode"
        : "Press Tab during ads";

      skipsEl.textContent = String(state.skips);
      savedEl.textContent = formatSaved(state.skips);
      simBtn.disabled = !state.enabled;
    }

    function showHeroToast(msg) {
      toastEl.textContent = msg;
      toastEl.classList.add("visible");
      if (state.toastTimer) clearTimeout(state.toastTimer);
      state.toastTimer = setTimeout(function () {
        toastEl.classList.remove("visible");
      }, 1800);
    }

    powerSwitch.addEventListener("click", function () {
      state.enabled = !state.enabled;
      render();
    });

    autoSwitch.addEventListener("click", function () {
      state.autoSkip = !state.autoSkip;
      render();
    });

    simBtn.addEventListener("click", function () {
      if (!state.enabled) return;
      state.skips += 1;
      render();
      showHeroToast(state.autoSkip ? "Ad auto-skipped ⚡" : "Ad skipped ⏭");
    });

    render();
  }

  function initSimulator() {
    var container = document.querySelector('[data-framer-name="Interactive Skip Simulator"]');
    if (!container || container.getAttribute("data-ski-mounted") === "true") return;
    container.setAttribute("data-ski-mounted", "true");

    var state = {
      adActive: true,
      autoSkip: false,
      skipsCount: 1,
      secondsLeft: 15,
      toastTimer: null,
      resetTimer: null,
      autoTimer: null
    };

    var card = document.createElement("div");
    card.className = "ski-sim-card";
    card.innerHTML = [
      '<div class="ski-sim-top">',
      '  <div class="ski-sim-status"><span class="ski-sim-dot" id="ski-dot"></span><span id="ski-status-text">Ad (1 of 2) · 0:15</span></div>',
      '  <button type="button" class="ski-sim-toggle-wrap" id="ski-autoskip-btn" role="switch" aria-checked="false">',
      '    <span>Auto-Skip</span>',
      '    <span class="ski-sim-switch" id="ski-switch"><span class="ski-sim-knob"></span></span>',
      '  </button>',
      '</div>',
      '<div class="ski-sim-center" id="ski-center"></div>',
      '<div class="ski-sim-bottom">',
      '  <div class="ski-sim-count">Total Skipped: <strong id="ski-total">1</strong></div>',
      '  <button type="button" class="ski-sim-btn" id="ski-skip-btn"><span>Skip Ad</span><span class="ski-sim-kbd">Tab</span><span style="color:#3ea6ff">⏭</span></button>',
      '</div>',
      '<div class="ski-sim-toast" id="ski-toast" role="status" aria-live="polite"></div>'
    ].join("");

    container.replaceChildren(card);

    var dotEl = card.querySelector("#ski-dot");
    var statusTextEl = card.querySelector("#ski-status-text");
    var autoBtn = card.querySelector("#ski-autoskip-btn");
    var switchEl = card.querySelector("#ski-switch");
    var centerEl = card.querySelector("#ski-center");
    var totalEl = card.querySelector("#ski-total");
    var skipBtn = card.querySelector("#ski-skip-btn");
    var toastEl = card.querySelector("#ski-toast");

    function showToast(msg, autoHide) {
      toastEl.textContent = msg;
      toastEl.classList.add("visible");
      if (state.toastTimer) clearTimeout(state.toastTimer);
      if (autoHide) {
        state.toastTimer = setTimeout(function () {
          toastEl.classList.remove("visible");
        }, 2200);
      }
    }

    function renderCenter() {
      var padSec = state.secondsLeft < 10 ? "0" + state.secondsLeft : String(state.secondsLeft);
      if (state.adActive) {
        dotEl.classList.remove("playing");
        statusTextEl.textContent = "Ad (1 of 2) · 0:" + padSec;
        skipBtn.style.display = "inline-flex";
        centerEl.innerHTML = [
          '<span class="ski-sim-badge ad">Unwanted Ad Interrupting</span>',
          '<div class="ski-sim-timer">00:' + padSec + '</div>',
          '<div class="ski-sim-prompt">Hit <kbd class="ski-sim-kbd">Tab</kbd> to skip</div>',
          '<button type="button" class="ski-sim-btn-mobile" id="ski-mobile-tap">Tap to Skip</button>'
        ].join("");
        var mobBtn = centerEl.querySelector("#ski-mobile-tap");
        if (mobBtn) {
          mobBtn.addEventListener("click", function () {
            triggerSkip("manual");
          });
        }
      } else {
        dotEl.classList.add("playing");
        statusTextEl.textContent = "Official Video · Playing smoothly";
        skipBtn.style.display = "none";
        centerEl.innerHTML = [
          '<span class="ski-sim-badge ok">✓ Playing Video Content</span>',
          '<p class="ski-sim-sub">Next ad simulation resets in a few seconds...</p>'
        ].join("");
      }
      totalEl.textContent = String(state.skipsCount);
    }

    function triggerSkip(method) {
      if (!state.adActive) return;
      state.adActive = false;
      state.skipsCount += 1;
      renderCenter();

      showToast(method === "auto" ? "Skipping ⚡" : "Skipping ⏭", false);
      setTimeout(function () {
        showToast(method === "auto" ? "Ad auto-skipped ⚡" : "Ad skipped ⏭", true);
      }, 320);

      if (state.resetTimer) clearTimeout(state.resetTimer);
      state.resetTimer = setTimeout(function () {
        state.adActive = true;
        state.secondsLeft = 15;
        renderCenter();
        scheduleAutoSkip();
      }, 4500);
    }

    function scheduleAutoSkip() {
      if (state.autoTimer) clearTimeout(state.autoTimer);
      if (state.autoSkip && state.adActive) {
        state.autoTimer = setTimeout(function () {
          triggerSkip("auto");
        }, 700);
      }
    }

    setInterval(function () {
      if (state.adActive) {
        state.secondsLeft = state.secondsLeft > 1 ? state.secondsLeft - 1 : 15;
        var padSec = state.secondsLeft < 10 ? "0" + state.secondsLeft : String(state.secondsLeft);
        statusTextEl.textContent = "Ad (1 of 2) · 0:" + padSec;
        var timerEl = centerEl.querySelector(".ski-sim-timer");
        if (timerEl) timerEl.textContent = "00:" + padSec;
      }
    }, 1000);

    autoBtn.addEventListener("click", function () {
      state.autoSkip = !state.autoSkip;
      autoBtn.setAttribute("aria-checked", state.autoSkip ? "true" : "false");
      switchEl.classList.toggle("on", state.autoSkip);
      scheduleAutoSkip();
    });

    skipBtn.addEventListener("click", function () {
      triggerSkip("manual");
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Tab" && state.adActive) {
        var rect = card.getBoundingClientRect();
        var inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          e.preventDefault();
          triggerSkip("manual");
        }
      }
    });

    renderCenter();
  }

  function removeFramerBadge() {
    if (!document.getElementById("ski-hide-framer-badge")) {
      var st = document.createElement("style");
      st.id = "ski-hide-framer-badge";
      st.textContent =
        "#__framer-badge-container,.framer-badge{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;}";
      (document.head || document.documentElement).appendChild(st);
    }
    var badges = document.querySelectorAll("#__framer-badge-container, .framer-badge");
    for (var i = 0; i < badges.length; i++) {
      badges[i].remove();
    }
  }

  function normalizeHeaderLinks(root) {
    if (!root) return;
    var routeMap = {
      features: "/#features",
      demo: "/#simulator",
      architecture: "/#architecture",
      blog: "/blog",
      faq: "/#faq",
      "get ski": "/#download",
    };
    var externalMap = {
      github: "https://github.com/WinterJackson/ski",
      support: "https://paystack.shop/pay/ski-extension",
    };
    var links = root.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var label = (a.getAttribute("aria-label") || a.textContent || "").trim().toLowerCase();
      if (a.getAttribute("aria-label") === "Ski home" || label === "ski home" || label === "home") {
        if (a.getAttribute("href") !== "/") a.setAttribute("href", "/");
        continue;
      }
      if (routeMap[label]) {
        if (a.getAttribute("href") !== routeMap[label]) {
          a.setAttribute("href", routeMap[label]);
        }
      } else if (externalMap[label]) {
        if (a.getAttribute("href") !== externalMap[label]) {
          a.setAttribute("href", externalMap[label]);
        }
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      }
    }
  }

  var SUN_SVG =
    '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  var MOON_SVG =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function getTheme() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    try {
      return localStorage.getItem("ski-theme") === "light" ? "light" : "dark";
    } catch (e) {
      return "dark";
    }
  }

  function updateThemeButtons() {
    var theme = getTheme();
    var nextLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    var btns = document.querySelectorAll("[data-ski-theme-toggle='true']");
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      if (b.getAttribute("data-ski-rendered-theme") === theme) continue;
      b.setAttribute("data-ski-rendered-theme", theme);
      b.setAttribute("aria-label", nextLabel);
      b.setAttribute("title", nextLabel);
      var isDrawer = b.classList.contains("ski-theme-btn--drawer");
      var icon = theme === "dark" ? SUN_SVG : MOON_SVG;
      b.innerHTML = isDrawer
        ? icon + "<span>" + (theme === "dark" ? "Light Mode" : "Dark Mode") + "</span>"
        : icon;
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("ski-theme", theme);
    } catch (e) {}
    if (typeof window.__skiInvalidateGl === "function") {
      window.__skiInvalidateGl();
    }
    updateThemeButtons();
  }

  if (!window.__skiThemeDelegateBound) {
    window.__skiThemeDelegateBound = true;
    document.addEventListener("click", function (e) {
      var btn = e.target && e.target.closest ? e.target.closest("[data-ski-theme-toggle='true']") : null;
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      setTheme(getTheme() === "dark" ? "light" : "dark");
    });
  }

  function createThemeButton(isDrawer) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = isDrawer ? "ski-theme-btn ski-theme-btn--drawer" : "ski-theme-btn";
    btn.setAttribute("data-ski-theme-toggle", "true");
    return btn;
  }

  function enhanceHeader() {
    var headers = document.querySelectorAll("header.pn-bar");
    for (var i = 0; i < headers.length; i++) {
      var hdr = headers[i];
      var homeLink = hdr.querySelector('a[aria-label="Ski home"]') || hdr.querySelector("a");
      if (homeLink && !homeLink.querySelector('img[data-ski-logo="true"]')) {
        var oldSvg = homeLink.querySelector('svg[viewBox="0 0 30 20"]');
        var img = document.createElement("img");
        img.src = "/icon/128.png";
        img.alt = "Ski logo";
        img.width = 24;
        img.height = 24;
        img.setAttribute("data-ski-logo", "true");
        img.style.cssText =
          "width:24px;height:24px;border-radius:6px;object-fit:contain;display:block;flex-shrink:0;";
        if (oldSvg) {
          oldSvg.replaceWith(img);
        } else {
          homeLink.insertBefore(img, homeLink.firstChild);
        }
      }
      normalizeHeaderLinks(hdr);
      if (!hdr.querySelector("[data-ski-theme-toggle='true']")) {
        var cta = hdr.querySelector(".pn-cta");
        var toggle = createThemeButton(false);
        if (cta && cta.parentNode === hdr) {
          hdr.insertBefore(toggle, cta);
        } else {
          hdr.appendChild(toggle);
        }
      }
    }
    var drawers = document.querySelectorAll(".pn-drawer");
    for (var j = 0; j < drawers.length; j++) {
      var drw = drawers[j];
      normalizeHeaderLinks(drw);
      var oldDrwToggle = drw.querySelector("[data-ski-theme-toggle='true']");
      if (oldDrwToggle) oldDrwToggle.remove();
    }
    updateThemeButtons();
  }

  function enhanceFooter() {
    var footers = document.querySelectorAll("footer");
    for (var i = 0; i < footers.length; i++) {
      var ftr = footers[i];
      var links = ftr.querySelectorAll("a");
      var privLink = null;
      for (var j = 0; j < links.length; j++) {
        var a = links[j];
        var h = a.getAttribute("href") || "";
        var txt = (a.textContent || "").trim().toLowerCase();
        if (h.indexOf("index.html#") !== -1) {
          a.setAttribute("href", "/" + h.slice(h.indexOf("#")));
        } else if (h === "blog.html" || h === "../blog.html" || txt === "blog & insights") {
          a.setAttribute("href", "/blog");
        } else if (
          h === "privacy.html" ||
          h === "../privacy.html" ||
          h === "./privacy" ||
          h === "/privacy" ||
          txt === "privacy policy"
        ) {
          a.setAttribute("href", "/privacy");
          privLink = a;
        }
      }
      if (privLink && !ftr.querySelector('a[href="/cookies"]')) {
        var row = privLink.closest("div[data-framer-name]");
        if (row && row.parentNode) {
          var cookiesRow = row.cloneNode(true);
          cookiesRow.setAttribute("data-framer-name", "ski-footer-link-cookies");
          var ca = cookiesRow.querySelector("a");
          if (ca) {
            ca.setAttribute("href", "/cookies");
            var cs = ca.querySelector("span");
            if (cs) cs.textContent = "Cookies Policy";
            else ca.textContent = "Cookies Policy";
          }
          var termsRow = row.cloneNode(true);
          termsRow.setAttribute("data-framer-name", "ski-footer-link-terms");
          var ta = termsRow.querySelector("a");
          if (ta) {
            ta.setAttribute("href", "/terms");
            var ts = ta.querySelector("span");
            if (ts) ts.textContent = "Terms of Service";
            else ta.textContent = "Terms of Service";
          }
          row.parentNode.insertBefore(cookiesRow, row.nextSibling);
          row.parentNode.insertBefore(termsRow, cookiesRow.nextSibling);
        }
      }
    }
  }

  function startDomGuard() {
    if (window.__skiDomGuardStarted) return;
    window.__skiDomGuardStarted = true;
    var scheduled = false;
    function applyFixes() {
      scheduled = false;
      removeFramerBadge();
      enhanceHeader();
      enhanceFooter();
    }
    applyFixes();
    if (typeof MutationObserver !== "undefined" && document.body) {
      var observer = new MutationObserver(function () {
        if (!scheduled) {
          scheduled = true;
          requestAnimationFrame(applyFixes);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  function boot() {
    removeFramerBadge();
    enhanceHeader();
    enhanceFooter();
    startDomGuard();
    injectSharedStyles();
    initHeroCard();
    initSimulator();
  }

  removeFramerBadge();
  enhanceHeader();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      startDomGuard();
      setTimeout(boot, 350);
    });
  } else {
    startDomGuard();
    setTimeout(boot, 350);
  }
})();
