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

.modal-app2 .video {
background: #111;
}

.modal-app2 .reel-auth2 {
position: absolute;
inset: 0;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
padding: 24px;
background: #F3E9D7;
}

.modal-app2 .reel-auth2.is-hidden {
display: none;
}

.modal-app2 .reel-auth2-card {
width: min(100%, 360px);
padding: 18px;
border: 2px solid #4F4F4F;
border-radius: 0.65rem;
background: #F3E9D7;
box-shadow: 0.20rem 0.20rem 0 #4F4F4F;
text-align: center;
}

.modal-app2 .reel-auth2-title {
font-family: Unbounded, sans-serif;
font-size: 13px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: -0.05em;
color: #4F4F4F;
margin: 0 0 10px;
}

.modal-app2 .reel-auth2-copy,
.modal-app2 .reel-auth2-error {
font-family: Space Mono, sans-serif;
font-size: 11px;
line-height: 1.45;
color: #4F4F4F;
margin: 0 0 12px;
}

.modal-app2 .reel-auth2-error {
min-height: 16px;
color: #D66545;
margin-top: 9px;
margin-bottom: 0;
}

.modal-app2 .reel-auth2-form {
display: grid;
grid-template-columns: 1fr auto;
gap: 8px;
}

.modal-app2 .reel-auth2-input,
.modal-app2 .reel-auth2-submit {
font-family: Space Mono, sans-serif;
font-size: 11px;
border: 2px solid #4F4F4F;
border-radius: 0.4rem;
}

.modal-app2 .reel-auth2-input {
min-width: 0;
padding: 9px 10px;
background: #fff;
color: #4F4F4F;
}

.modal-app2 .reel-auth2-submit {
padding: 9px 12px;
background: #D66545;
color: #F3E9D7;
cursor: pointer;
font-weight: 700;
}

.modal-app2 .reel-auth2-submit:disabled {
opacity: 0.55;
cursor: wait;
}

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

  var demoReelVideo2 = null;
  var demoReelCurrentTime2 = 0;
  var demoReelActiveTimestampIndex2 = -1;
  var demoReelListenersAttached2 = false;

  var DEMO_REEL_LOGIN_URL2 =
    "https://reel.nick-st-clair.com/login";

  var DEMO_REEL_VIDEO_URL2 =
    "https://reel.nick-st-clair.com/video/demo-reel.mp4";

  var DEMO_REEL_TOKEN_KEY2 = "demoReelToken2";
  var DEMO_REEL_EXPIRY_KEY2 = "demoReelTokenExpires2";

  function getDemoReelVideo2() {
    if (!demoReelVideo2 || !document.body.contains(demoReelVideo2)) {
      demoReelVideo2 = document.getElementById("demoReelVideo2");
      demoReelListenersAttached2 = false;
    }

    return demoReelVideo2;
  }

  function getStoredDemoReelToken2() {
    try {
      var token = sessionStorage.getItem(DEMO_REEL_TOKEN_KEY2);
      var expires = Number(
        sessionStorage.getItem(DEMO_REEL_EXPIRY_KEY2)
      );

      if (
        token &&
        Number.isFinite(expires) &&
        expires > Math.floor(Date.now() / 1000) + 30
      ) {
        return token;
      }
    } catch (error) {}

    clearStoredDemoReelToken2();
    return "";
  }

  function storeDemoReelToken2(token, expires) {
    try {
      sessionStorage.setItem(DEMO_REEL_TOKEN_KEY2, token);
      sessionStorage.setItem(
        DEMO_REEL_EXPIRY_KEY2,
        String(expires)
      );
    } catch (error) {}
  }

  function clearStoredDemoReelToken2() {
    try {
      sessionStorage.removeItem(DEMO_REEL_TOKEN_KEY2);
      sessionStorage.removeItem(DEMO_REEL_EXPIRY_KEY2);
    } catch (error) {}
  }

  function buildDemoReelVideoUrl2(token) {
    return (
      DEMO_REEL_VIDEO_URL2 +
      "?token=" +
      encodeURIComponent(token)
    );
  }

  function showDemoReelAuth2(message) {
    var gate = document.getElementById("demoReelAuth2");
    var error = document.getElementById("demoReelAuthError2");
    var input = document.getElementById("demoReelPassword2");

    if (gate) gate.classList.remove("is-hidden");
    if (error) error.textContent = message || "";

    if (input) {
      setTimeout(function () {
        try {
          input.focus({ preventScroll: true });
        } catch (focusError) {
          input.focus();
        }
      }, 80);
    }
  }

  function hideDemoReelAuth2() {
    var gate = document.getElementById("demoReelAuth2");
    var error = document.getElementById("demoReelAuthError2");

    if (gate) gate.classList.add("is-hidden");
    if (error) error.textContent = "";
  }

  function setDemoReelVideoSource2(token, autoplay) {
    var video = getDemoReelVideo2();

    if (!video || !token) return;

    attachDemoReelVideoListeners2();

    var wantedSource = buildDemoReelVideoUrl2(token);

    if (video.src !== wantedSource) {
      video.classList.remove("is-loaded");
      video.src = wantedSource;
      video.load();
    }

    hideDemoReelAuth2();

    if (autoplay) {
      var playPromise = video.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {});
      }
    }
  }

  function attachDemoReelVideoListeners2() {
    var video = getDemoReelVideo2();

    if (!video || demoReelListenersAttached2) return;

    demoReelListenersAttached2 = true;

    video.addEventListener("loadeddata", function () {
      video.classList.add("is-loaded");
    });

    video.addEventListener("canplay", function () {
      video.classList.add("is-loaded");
    });

    video.addEventListener("play", function () {
      renderDemoReelTimestamps2(true);
      demoReelCurrentTime2 = video.currentTime || 0;
      updateDemoReelActiveTimestamp2(
        demoReelCurrentTime2,
        false
      );
    });

    video.addEventListener("timeupdate", function () {
      demoReelCurrentTime2 = video.currentTime || 0;
      updateDemoReelActiveTimestamp2(
        demoReelCurrentTime2,
        true
      );
    });

    video.addEventListener("seeked", function () {
      demoReelCurrentTime2 = video.currentTime || 0;
      updateDemoReelActiveTimestamp2(
        demoReelCurrentTime2,
        true
      );
    });

    video.addEventListener("error", function () {
      if (!video.currentSrc) return;

      clearStoredDemoReelToken2();
      video.removeAttribute("src");
      video.load();
      video.classList.remove("is-loaded");
      renderDemoReelTimestamps2(false);
      showDemoReelAuth2(
        "Your reel access expired. Enter the password again."
      );
    });
  }

  function prepareDemoReelTimestamps2() {
    var timestampContainer = document.getElementById(
      "reelTimestamps2"
    );

    demoReelCurrentTime2 = 0;
    demoReelActiveTimestampIndex2 = -1;

    if (timestampContainer) {
      timestampContainer.classList.add("is-locked");
      timestampContainer.classList.remove("is-open");
    }

    renderDemoReelTimestamps2(false);
    attachDemoReelVideoListeners2();
  }

  async function submitDemoReelPassword2(event) {
    if (event) event.preventDefault();

    var input = document.getElementById("demoReelPassword2");
    var submit = document.getElementById("demoReelSubmit2");
    var error = document.getElementById("demoReelAuthError2");

    if (!input || !input.value) {
      if (error) error.textContent = "Enter the reel password.";
      return false;
    }

    if (submit) submit.disabled = true;
    if (error) error.textContent = "";

    try {
      var response = await fetch(DEMO_REEL_LOGIN_URL2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          password: input.value
        })
      });

      var data = await response.json();

      if (!response.ok || !data.ok || !data.token) {
        if (error) {
          error.textContent =
            data && data.error
              ? data.error
              : "Incorrect password";
        }

        input.select();
        return false;
      }

      storeDemoReelToken2(data.token, data.expires);
      input.value = "";

      setDemoReelVideoSource2(data.token, true);
      return false;
    } catch (requestError) {
      if (error) {
        error.textContent =
          "Could not connect. Please try again.";
      }

      return false;
    } finally {
      if (submit) submit.disabled = false;
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
    var video = getDemoReelVideo2();

    if (!video || !video.src) return;

    demoReelCurrentTime2 = seconds;
    updateDemoReelActiveTimestamp2(seconds, true);

    try {
      video.currentTime = seconds;
    } catch (error) {}

    var playPromise = video.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  }

  function triggerModal2() {
    var p = document.getElementById("app2");
    var video = getDemoReelVideo2();

    if (!p) return;

    var isOpen = p.classList.contains("is-open");

    if (!isOpen) {
      clearTimeout(p._modalCloseTimer);

      p.style.display = "block";
      p.classList.remove("is-closing");

      prepareDemoReelTimestamps2();

      var token = getStoredDemoReelToken2();

      if (token) {
        setDemoReelVideoSource2(token, false);
      } else {
        showDemoReelAuth2("");
      }

      if (typeof window.setLiftButtonActive === "function") {
        window.setLiftButtonActive(
          ".demo-reel-modal-trigger",
          true
        );
      }

      void p.offsetWidth;

      requestAnimationFrame(function () {
        p.classList.add("is-open");
      });
    } else {
      p.classList.remove("is-open");
      p.classList.add("is-closing");

      if (typeof window.setLiftButtonActive === "function") {
        window.setLiftButtonActive(
          ".demo-reel-modal-trigger",
          false
        );
      }

      if (video) {
        video.pause();

        try {
          video.currentTime = 0;
        } catch (error) {}
      }

      clearTimeout(p._modalCloseTimer);

      p._modalCloseTimer = setTimeout(function () {
        p.classList.remove("is-closing");
        p.style.display = "none";

        demoReelCurrentTime2 = 0;
        demoReelActiveTimestampIndex2 = -1;

        renderDemoReelTimestamps2(
          !!getStoredDemoReelToken2()
        );
      }, 160);
    }
  }

  window.demoReelTimestamps2 = demoReelTimestamps2;
  window.prepareDemoReelTimestamps2 =
    prepareDemoReelTimestamps2;
  window.toggleDemoReelTimestamps2 =
    toggleDemoReelTimestamps2;
  window.renderDemoReelTimestamps2 =
    renderDemoReelTimestamps2;
  window.seekDemoReel2 = seekDemoReel2;
  window.submitDemoReelPassword2 =
    submitDemoReelPassword2;
  window.triggerModal2 = triggerModal2;
})();
