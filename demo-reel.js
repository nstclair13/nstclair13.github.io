/*
  Demo Reel modal + timestamp navigation
  Public file loaded by Carrd.

  Edit demoReelTimestamps2 below to update shot timing/labels.
*/

(function () {
  "use strict";

  var styleId = "demo-reel-modal-styles";

  if (!document.getElementById(styleId)) {
    var style = document.createElement("style");
    style.id = styleId;
    style.textContent = String.raw`
#app2 { display: none; }

.modal-app2 {
--modal-speed: 140ms;
--modal-ease: ease-out;
}

.modal-app2 .overlay {
position: fixed;
z-index: 9998;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.33);
opacity: 0;
transition: opacity var(--modal-speed) ease-out;
}

.modal-app2 .modal2 {
font-family: Space Mono, sans-serif;
position: fixed;
width: 840px;
max-width: calc(100% - 60px);
z-index: 9999;
margin: 0;
top: 50%;
left: 50%;
max-height: calc(100vh - 60px);
overflow-y: auto;
transform: translate(-50%, calc(-50% + 6px)) scale(0.985);
opacity: 0;
padding: 1.25rem;
background-color: #F3E9D7;
border: 3px solid #4F4F4F;
box-shadow: 0.375rem 0.375rem 0 #4F4F4F;
border-radius: 1rem;
transition:
opacity var(--modal-speed) ease-out,
transform var(--modal-speed) var(--modal-ease);
will-change: opacity, transform;
}

#app2.is-open .overlay { opacity: 1; }

#app2.is-open .modal2 {
opacity: 1;
transform: translate(-50%, -50%) scale(1);
}

#app2.is-closing .overlay { opacity: 0; }

#app2.is-closing .modal2 {
opacity: 0;
transform: translate(-50%, calc(-50% + 6px)) scale(0.985);
}

.modal-app2 .video-wrap {
position: relative;
width: 100%;
aspect-ratio: 16 / 9;
overflow: hidden;
border-radius: 0.75rem;
background:
linear-gradient(135deg, rgba(79, 79, 79, 0.08), rgba(79, 79, 79, 0.02));
}

.modal-app2 .video {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;
opacity: 0;
transition: opacity 180ms ease-out;
}

.modal-app2 .video.is-loaded { opacity: 1; }

.modal-app2 .reel-timestamps2 {
margin-top: 14px;
padding: 12px 14px;
border: 2px solid #4F4F4F;
border-radius: 0.5rem;
background: #F3E9D7;
box-shadow: 0.20rem 0.20rem 0 #4F4F4F;
overflow: hidden;
}

.modal-app2 .reel-timestamps2-toggle {
font-family: Unbounded, sans-serif;
font-size: 12px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: -0.05em;
color: #4F4F4F;
width: 100%;
padding: 0;
display: flex;
align-items: center;
justify-content: space-between;
gap: 12px;
background: transparent;
border: 0;
cursor: pointer;
text-align: left;
}

.modal-app2 .reel-timestamps2-toggle::after {
content: "+";
font-size: 16px;
line-height: 1;
}

.modal-app2 .reel-timestamps2.is-open .reel-timestamps2-toggle::after {
content: "–";
}

.modal-app2 .reel-timestamps2-toggle:hover,
.modal-app2 .reel-timestamps2-toggle:focus-visible {
outline: none;
color: #D66545;
}

.modal-app2 .reel-timestamps2-list {
display: grid;
gap: 6px;
max-height: 0;
opacity: 0;
overflow: hidden;
margin-top: 0;
transition:
max-height 240ms ease,
opacity 180ms ease,
margin-top 240ms ease;
}

.modal-app2 .reel-timestamps2.is-open .reel-timestamps2-list {
max-height: 260px;
opacity: 1;
margin-top: 10px;
overflow-y: auto;
padding-right: 4px;
}

.modal-app2 .reel-timestamp2-button {
font-family: Space Mono, sans-serif;
display: grid;
grid-template-columns: 48px 1fr;
gap: 10px;
width: 100%;
padding: 5px 7px;
text-align: left;
background: transparent;
border: 0;
border-radius: 0.35rem;
cursor: pointer;
color: #4F4F4F;
font-size: 12px;
line-height: 1.35;
letter-spacing: -0.03em;
transition:
background-color 140ms ease-out,
color 140ms ease-out;
}

.modal-app2 .reel-timestamp2-button:hover,
.modal-app2 .reel-timestamp2-button:focus-visible {
outline: none;
background: rgba(79, 79, 79, 0.08);
}

.modal-app2 .reel-timestamp2-button.is-current {
background: #D66545;
}

.modal-app2 .reel-timestamp2-button.is-current .reel-timestamp2-time,
.modal-app2 .reel-timestamp2-button.is-current .reel-timestamp2-label {
color: #F3E9D7;
}

.modal-app2 .reel-timestamp2-time {
font-family: Unbounded, sans-serif;
font-size: 10px;
font-weight: 700;
color: #4F4F4F;
}

.modal-app2 .reel-timestamp2-label { color: #4F4F4F; }

.modal-app2 .reel-timestamps2.is-locked { opacity: 0.45; }

.modal-app2 .reel-timestamps2.is-locked .reel-timestamps2-toggle {
cursor: not-allowed;
}

.modal-app2 .reel-timestamps2.is-locked .reel-timestamps2-toggle::after {
content: "LOCKED";
font-size: 9px;
letter-spacing: 0;
}

.modal-app2 .reel-timestamps2-toggle:disabled {
pointer-events: none;
}

@media (max-width: 768px) {
.modal-app2 .modal2 {
width: calc(100% - 40px);
max-width: calc(100% - 40px);
padding: 0.75rem;
}
}

@media (prefers-reduced-motion: reduce) {
.modal-app2 .overlay,
.modal-app2 .modal2,
.modal-app2 .reel-timestamp2-button {
transition: none !important;
}
}
`;
    document.head.appendChild(style);
  }

  var demoReelTimestamps2 = [
    { time: "0:00", seconds: 0, label: "Opening / Intro" },

    { time: "0:04", seconds: 4.208, label: "Spider-Man: No Way Home — All characters, webs, and camera" },
    { time: "0:09", seconds: 9.125, label: "Suicide Squad — Character and tentacles" },
    { time: "0:12", seconds: 11.583, label: "Suicide Squad — Both characters" },
    { time: "0:13", seconds: 13.375, label: "Suicide Squad — Both characters" },

    { time: "0:17", seconds: 16.625, label: "Spider-Man: No Way Home — Both characters, falling debris, and camera" },

    { time: "0:20", seconds: 19.583, label: "Spider-Man: Into the Spider-Verse — Miles" },
    { time: "0:22", seconds: 21.542, label: "Spider-Man: Into the Spider-Verse — Both characters and webs" },
    { time: "0:23", seconds: 22.750, label: "Spider-Man: Into the Spider-Verse — Miles and webs" },
    { time: "0:27", seconds: 26.750, label: "Spider-Man: Into the Spider-Verse — Both characters and webs" },

    { time: "0:29", seconds: 29.458, label: "Snow White & the Huntsman — Both characters and tree branch interaction" },
    { time: "0:32", seconds: 32.333, label: "Percy Jackson: Sea of Monsters — Foreground Manticore creature" },
    { time: "0:36", seconds: 35.875, label: "Falcon and the Winter Soldier — Character, water interaction timing, and camera" },
    { time: "0:40", seconds: 39.875, label: "Spider-Man: Into the Spider-Verse — Both characters and web" },
    { time: "0:43", seconds: 43.000, label: "Alice Through the Looking Glass — All characters; body animation on Tweedle Dee and Tweedle Dum" },

    { time: "0:45", seconds: 44.958, label: "Kingsman: The Golden Circle — Robodog" },
    { time: "0:48", seconds: 47.875, label: "Kingsman: The Golden Circle — Robodog through glass and door interaction" },
    { time: "0:49", seconds: 49.167, label: "Kingsman: The Golden Circle — Robodog" },
    { time: "0:51", seconds: 50.875, label: "Kingsman: The Golden Circle — Robodog" },
    { time: "0:54", seconds: 53.875, label: "Kingsman: The Golden Circle — Robodog" },

    { time: "0:56", seconds: 55.875, label: "Spider-Man: Into the Spider-Verse — Both characters, web, and exploding storage container" },
    { time: "0:57", seconds: 56.750, label: "Spider-Man: Into the Spider-Verse — Both characters, tentacles, webs, and prop interactions" },

    { time: "0:59", seconds: 59.042, label: "Jumanji: The Next Level — Ostriches and bag interaction" },
    { time: "1:01", seconds: 61.417, label: "Jumanji: The Next Level — Ostriches" },
    { time: "1:02", seconds: 62.375, label: "Jumanji: The Next Level — Ostriches" },
    { time: "1:04", seconds: 63.500, label: "Jumanji: The Next Level — Punched ostrich and background ostriches" },

    { time: "1:09", seconds: 68.583, label: "Spider-Man: Into the Spider-Verse — Spider-Gwen" },
    { time: "1:12", seconds: 72.458, label: "Spider-Man: Into the Spider-Verse — Both characters and backpack" },
    { time: "1:20", seconds: 79.958, label: "Falcon and the Winter Soldier — Falcon, Shield, and camera" },

    { time: "1:22", seconds: 82.292, label: "Jumanji: The Next Level — All characters, vehicle, and camera" },
    { time: "1:23", seconds: 83.000, label: "Jumanji: The Next Level — All characters, vehicle, hero debris, and camera" },
    { time: "1:25", seconds: 84.500, label: "Jumanji: The Next Level — Vehicle, hero debris, and camera" },
    { time: "1:27", seconds: 86.708, label: "Jumanji: The Next Level — Vehicle, hero debris, and camera" },

    { time: "1:31", seconds: 90.750, label: "Suicide Squad — Both characters" },
    { time: "1:35", seconds: 95.250, label: "Suicide Squad — Both characters" },
    { time: "1:37", seconds: 97.333, label: "Suicide Squad — Both characters" },
    { time: "1:41", seconds: 101.042, label: "Suicide Squad — Both characters" },

    { time: "1:44", seconds: 103.500, label: "Falcon and the Winter Soldier — Both characters, blending into plate performance" },
    { time: "1:58", seconds: 118.042, label: "Closing / Contact" }
  ];

  var demoReelPlayer2 = null;
  var demoReelPlayerPromise2 = null;
  var demoReelApiPromise2 = null;
  var demoReelCurrentTime2 = 0;
  var demoReelActiveTimestampIndex2 = -1;
  var demoReelTimestampsUnlocked2 = false;
  var demoReelEventsBound2 = false;
  var demoReelPreloadScheduled2 = false;

  var demoReelVimeoSrc2 =
    "https://player.vimeo.com/video/884221460?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479";

  function prepareDemoReelTimestamps2() {
    var timestampContainer = document.getElementById("reelTimestamps2");

    demoReelCurrentTime2 = 0;
    demoReelActiveTimestampIndex2 = -1;
    demoReelTimestampsUnlocked2 = false;

    if (timestampContainer) {
      timestampContainer.classList.add("is-locked");
      timestampContainer.classList.remove("is-open");
    }

    renderDemoReelTimestamps2(false);
    ensureDemoReelPlayer2();
  }

  /* ---------- Deferred Vimeo Loading ---------- */

  function ensureDemoReelIframe2() {
    var iframe = document.getElementById("demoReelIframe2");

    if (iframe) return iframe;

    var mount = document.getElementById("demoReelPlayerMount2");

    if (!mount) return null;

    iframe = document.createElement("iframe");
    iframe.id = "demoReelIframe2";
    iframe.className = "video";
    iframe.loading = "eager";
    iframe.src = demoReelVimeoSrc2;
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.title = "Nicholas St. Clair Animation Reel - 2023";

    iframe.addEventListener("load", function () {
      iframe.classList.add("is-loaded");
    }, { once: true });

    mount.appendChild(iframe);

    return iframe;
  }

  function ensureDemoReelApi2() {
    if (window.Vimeo && window.Vimeo.Player) {
      return Promise.resolve(window.Vimeo);
    }

    if (demoReelApiPromise2) {
      return demoReelApiPromise2;
    }

    demoReelApiPromise2 = new Promise(function (resolve, reject) {
      var existing = document.querySelector(
        'script[src="https://player.vimeo.com/api/player.js"]'
      );

      function finish() {
        if (window.Vimeo && window.Vimeo.Player) {
          resolve(window.Vimeo);
        } else {
          reject(new Error("Vimeo Player API did not initialize."));
        }
      }

      if (existing) {
        if (window.Vimeo && window.Vimeo.Player) {
          resolve(window.Vimeo);
          return;
        }

        existing.addEventListener("load", finish, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }

      var script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      script.addEventListener("load", finish, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });

    return demoReelApiPromise2;
  }

  function ensureDemoReelPlayer2() {
    if (demoReelPlayer2) {
      return Promise.resolve(demoReelPlayer2);
    }

    if (demoReelPlayerPromise2) {
      return demoReelPlayerPromise2;
    }

    var iframe = ensureDemoReelIframe2();

    if (!iframe) {
      return Promise.reject(
        new Error("Demo Reel player mount was not found.")
      );
    }

    demoReelPlayerPromise2 = ensureDemoReelApi2()
      .then(function () {
        if (!demoReelPlayer2) {
          demoReelPlayer2 = new window.Vimeo.Player(iframe);
          bindDemoReelPlayerEvents2();
        }

        return demoReelPlayer2.ready().then(function () {
          return demoReelPlayer2;
        });
      })
      .catch(function (error) {
        demoReelPlayerPromise2 = null;
        throw error;
      });

    return demoReelPlayerPromise2;
  }

  function bindDemoReelPlayerEvents2() {
    if (!demoReelPlayer2 || demoReelEventsBound2) return;

    demoReelEventsBound2 = true;

    function unlockTimestamps() {
      if (demoReelTimestampsUnlocked2) return;

      demoReelTimestampsUnlocked2 = true;
      renderDemoReelTimestamps2(true);
    }

    demoReelPlayer2.on("play", function () {
      unlockTimestamps();

      demoReelPlayer2.getCurrentTime().then(function (seconds) {
        demoReelCurrentTime2 = seconds;
        updateDemoReelActiveTimestamp2(seconds, false);
      }).catch(function () {});
    });

    demoReelPlayer2.on("timeupdate", function (data) {
      unlockTimestamps();

      if (!data || typeof data.seconds !== "number") return;

      demoReelCurrentTime2 = data.seconds;
      updateDemoReelActiveTimestamp2(data.seconds, true);
    });

    demoReelPlayer2.on("seeked", function (data) {
      if (!data || typeof data.seconds !== "number") return;

      demoReelCurrentTime2 = data.seconds;
      updateDemoReelActiveTimestamp2(data.seconds, true);
    });
  }

  function preloadDemoReel2() {
    ensureDemoReelPlayer2().catch(function () {});
  }

  function scheduleDemoReelPreload2() {
    if (demoReelPreloadScheduled2) return;

    demoReelPreloadScheduled2 = true;

    function preloadAfterPageLoad() {
      /*
        Important: Vimeo is inserted only AFTER the page load event.
        This keeps it out of Carrd's critical first-load path while
        still warming the player shortly after the homepage appears.
      */
      window.setTimeout(preloadDemoReel2, 500);
    }

    if (document.readyState === "complete") {
      preloadAfterPageLoad();
    } else {
      window.addEventListener("load", preloadAfterPageLoad, { once: true });
    }

    function attachIntentPreload() {
      var triggers = document.querySelectorAll(
        ".demo-reel-modal-trigger"
      );

      for (var i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener("pointerenter", preloadDemoReel2, {
          once: true,
          passive: true
        });

        triggers[i].addEventListener("focus", preloadDemoReel2, {
          once: true
        });

        triggers[i].addEventListener("touchstart", preloadDemoReel2, {
          once: true,
          passive: true
        });
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", attachIntentPreload, {
        once: true
      });
    } else {
      attachIntentPreload();
    }
  }

  function getDemoReelActiveTimestampIndex2(seconds) {
    if (!demoReelTimestamps2.length) return -1;

    var activeIndex = 0;

    for (var i = 0; i < demoReelTimestamps2.length; i++) {
      if (seconds >= demoReelTimestamps2[i].seconds) {
        activeIndex = i;
      } else {
        break;
      }
    }

    return activeIndex;
  }

  function updateDemoReelActiveTimestamp2(seconds, allowScroll) {
    var timestampContainer = document.getElementById("reelTimestamps2");

    if (!timestampContainer) return;

    var newIndex = getDemoReelActiveTimestampIndex2(seconds);
    if (newIndex < 0) return;

    var buttons = timestampContainer.querySelectorAll(
      ".reel-timestamp2-button"
    );

    if (!buttons.length) return;

    var indexChanged = newIndex !== demoReelActiveTimestampIndex2;

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("is-current", i === newIndex);

      if (i === newIndex) {
        buttons[i].setAttribute("aria-current", "true");
      } else {
        buttons[i].removeAttribute("aria-current");
      }
    }

    demoReelActiveTimestampIndex2 = newIndex;

    if (
      allowScroll &&
      indexChanged &&
      timestampContainer.classList.contains("is-open") &&
      buttons[newIndex]
    ) {
      keepDemoReelTimestampVisible2(buttons[newIndex]);
    }
  }

  function keepDemoReelTimestampVisible2(button) {
  var timestampContainer = document.getElementById("reelTimestamps2");

  if (!timestampContainer || !button) return;

  var list = timestampContainer.querySelector(
    ".reel-timestamps2-list"
  );

  if (!list) return;

  var listRect = list.getBoundingClientRect();
  var buttonRect = button.getBoundingClientRect();

  var padding = 8;

  /*
    Forward playback:
    As soon as the active timestamp reaches the bottom visible row,
    move it near the top so the upcoming timestamps are revealed early.
  */
  var bottomTrigger =
    listRect.bottom - buttonRect.height - padding;

  if (buttonRect.top >= bottomTrigger) {
    var forwardTarget =
      list.scrollTop +
      (buttonRect.top - listRect.top) -
      padding;

    scrollDemoReelTimestampList2(list, forwardTarget);
    return;
  }

  /*
    Backward seeking:
    If the active timestamp has moved above the visible area,
    reveal the previous group and keep the active row near the bottom.
  */
  if (buttonRect.top < listRect.top + padding) {
    var backwardTarget =
      list.scrollTop +
      (buttonRect.bottom - listRect.bottom) +
      padding;

    scrollDemoReelTimestampList2(list, backwardTarget);
  }
}

function scrollDemoReelTimestampList2(list, target) {
  var reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  list.scrollTo({
    top: Math.max(0, target),
    behavior: reducedMotion ? "auto" : "smooth"
  });
}

  function toggleDemoReelTimestamps2() {
    var timestampContainer = document.getElementById("reelTimestamps2");

    if (!timestampContainer) return;

    timestampContainer.classList.toggle("is-open");

    var isOpen = timestampContainer.classList.contains("is-open");
    var toggleButton = timestampContainer.querySelector(
      ".reel-timestamps2-toggle"
    );

    if (toggleButton) {
      toggleButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );
    }

    if (isOpen) {
      requestAnimationFrame(function () {
        var currentButton = timestampContainer.querySelector(
          ".reel-timestamp2-button.is-current"
        );

        if (currentButton) {
          keepDemoReelTimestampVisible2(currentButton);
        }
      });
    }
  }

  function renderDemoReelTimestamps2(isUnlocked) {
    var timestampContainer = document.getElementById("reelTimestamps2");

    if (!timestampContainer) return;

    timestampContainer.innerHTML = "";
    timestampContainer.classList.remove("is-open");

    if (!demoReelTimestamps2.length) {
      timestampContainer.style.display = "none";
      return;
    }

    timestampContainer.style.display = "";

    if (isUnlocked) {
      timestampContainer.classList.remove("is-locked");
    } else {
      timestampContainer.classList.add("is-locked");
    }

    var toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "reel-timestamps2-toggle";
    toggleButton.textContent = "Demo Reel Timestamps";
    toggleButton.disabled = !isUnlocked;
    toggleButton.setAttribute("aria-expanded", "false");

    toggleButton.onclick = function (event) {
      event.stopPropagation();
      if (!isUnlocked) return;
      toggleDemoReelTimestamps2();
    };

    var list = document.createElement("div");
    list.className = "reel-timestamps2-list";

    demoReelTimestamps2.forEach(function (timestamp, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "reel-timestamp2-button";
      button.dataset.timestampIndex = String(index);
      button.setAttribute(
        "aria-label",
        "Jump to " + timestamp.time + ": " + timestamp.label
      );

      button.onclick = function (event) {
        event.stopPropagation();
        seekDemoReel2(timestamp.seconds);
      };

      var time = document.createElement("span");
      time.className = "reel-timestamp2-time";
      time.textContent = timestamp.time;

      var label = document.createElement("span");
      label.className = "reel-timestamp2-label";
      label.textContent = timestamp.label;

      button.appendChild(time);
      button.appendChild(label);
      list.appendChild(button);
    });

    timestampContainer.appendChild(toggleButton);
    timestampContainer.appendChild(list);

    if (isUnlocked) {
      updateDemoReelActiveTimestamp2(
        demoReelCurrentTime2,
        false
      );
    }
  }

  function seekDemoReel2(seconds) {
    demoReelCurrentTime2 = seconds;
    updateDemoReelActiveTimestamp2(seconds, true);

    ensureDemoReelPlayer2()
      .then(function (player) {
        return player.setCurrentTime(seconds).then(function () {
          return player.play();
        });
      })
      .catch(function () {});
  }

  function triggerModal2() {
    var p = document.getElementById("app2");
    var container = document.getElementById("vid2");

    if (!p || !container) return;

    var isOpen = p.classList.contains("is-open");

    if (!isOpen) {
      clearTimeout(p._modalCloseTimer);

      /*
        In normal use this player has already been warmed after page load.
        Calling this again is harmless and covers an immediate first click.
      */
      preloadDemoReel2();

      p.style.display = "block";
      p.classList.remove("is-closing");

      prepareDemoReelTimestamps2();

      if (typeof window.setLiftButtonActive === "function") {
        window.setLiftButtonActive(".demo-reel-modal-trigger", true);
      }

      void p.offsetWidth;

      requestAnimationFrame(function () {
        p.classList.add("is-open");
      });
    } else {
      p.classList.remove("is-open");
      p.classList.add("is-closing");

      if (typeof window.setLiftButtonActive === "function") {
        window.setLiftButtonActive(".demo-reel-modal-trigger", false);
      }

      if (demoReelPlayer2) {
        demoReelPlayer2.pause().catch(function () {});
      }

      clearTimeout(p._modalCloseTimer);

      p._modalCloseTimer = setTimeout(function () {
        p.classList.remove("is-closing");
        p.style.display = "none";

        demoReelCurrentTime2 = 0;
        demoReelActiveTimestampIndex2 = -1;
        demoReelTimestampsUnlocked2 = false;

        /*
          Keep the Vimeo iframe/player alive and preloaded so reopening
          the reel remains instant. Reset playback without rebuilding it.
        */
        if (demoReelPlayer2) {
          demoReelPlayer2.setCurrentTime(0).catch(function () {});
        }
      }, 160);
    }
  }

  scheduleDemoReelPreload2();

  window.demoReelTimestamps2 = demoReelTimestamps2;
  window.prepareDemoReelTimestamps2 = prepareDemoReelTimestamps2;
  window.toggleDemoReelTimestamps2 = toggleDemoReelTimestamps2;
  window.renderDemoReelTimestamps2 = renderDemoReelTimestamps2;
  window.seekDemoReel2 = seekDemoReel2;
  window.triggerModal2 = triggerModal2;
})();
