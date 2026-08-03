/*
  Demo Reel R2 test player
  Secure R2 video + custom controls + reel breakdown.
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
inset: 0;
background-color: rgba(0, 0, 0, 0.33);
opacity: 0;
transition:
opacity var(--modal-speed) ease-out,
background-color 180ms ease-out;
}

#app2.is-auth-mode .overlay {
background-color: rgba(0, 0, 0, 0.46);
}

.modal-app2 .modal2 {
font-family: Space Mono, sans-serif;
position: fixed;
width: 1000px;
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
transform var(--modal-speed) var(--modal-ease),
width 180ms ease-out;
will-change: opacity, transform, width;
}

#app2.is-auth-mode .modal2 {
width: 430px;
max-width: calc(100% - 40px);
padding: 1rem;
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

/* ---------- Password Gate ---------- */

.modal-app2 .reel-auth2 {
display: none;
}

#app2.is-auth-mode .reel-auth2 {
display: block;
}

.modal-app2 .reel-auth2-card {
padding: 16px;
text-align: center;
}

.modal-app2 .reel-auth2-title {
font-family: Unbounded, sans-serif;
font-size: 15px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: -0.05em;
color: #4F4F4F;
margin: 0 0 8px;
}

.modal-app2 .reel-auth2-copy,
.modal-app2 .reel-auth2-error {
font-family: Space Mono, sans-serif;
font-size: 12px;
line-height: 1.5;
color: #4F4F4F;
margin: 0;
}

.modal-app2 .reel-auth2-form {
display: grid;
grid-template-columns: 1fr auto;
gap: 9px;
margin-top: 14px;
}

.modal-app2 .reel-auth2-input,
.modal-app2 .reel-auth2-submit {
border: 2px solid #4F4F4F;
border-radius: 0.55rem;
}

.modal-app2 .reel-auth2-input {
font-family: Space Mono, sans-serif;
font-size: 13px;
min-width: 0;
padding: 11px 12px;
background: #fff;
color: #4F4F4F;
outline: none;
}

.modal-app2 .reel-auth2-input:focus-visible {
box-shadow: 0 0 0 2px rgba(214, 101, 69, 0.35);
}

/* Match the gallery's physical play-button interaction:
   cream face, charcoal border/shadow, lift on hover, press on click. */
.modal-app2 .reel-auth2-submit {
font-family: Unbounded, sans-serif;
font-size: 11px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: -0.05em;
padding: 10px 14px;
background: #F3E9D7;
color: #4F4F4F;
-webkit-text-fill-color: #4F4F4F;
cursor: pointer;
box-shadow:
4px 4px 0 #4F4F4F,
inset 0 1px 0 rgba(255, 255, 255, 0.30);
transform: translate(0, 0);
-webkit-appearance: none;
appearance: none;
touch-action: manipulation;
-webkit-tap-highlight-color: transparent;
transition:
background-color 160ms ease-out,
color 160ms ease-out,
transform 100ms ease-out,
box-shadow 100ms ease-out;
}

@media (hover: hover) and (pointer: fine) {
.modal-app2 .reel-auth2-submit:hover,
.modal-app2 .reel-auth2-submit:focus-visible {
outline: none;
background: #F3E9D7;
color: #4F4F4F;
-webkit-text-fill-color: #4F4F4F;
transform: translate(-1px, -1px);
box-shadow:
5px 5px 0 #4F4F4F,
inset 0 1px 0 rgba(255, 255, 255, 0.30);
}
}

.modal-app2 .reel-auth2-submit:active {
background: #F3E9D7;
color: #4F4F4F;
-webkit-text-fill-color: #4F4F4F;
transform: translate(2px, 2px);
box-shadow: inset 0 1px 0 rgba(79, 79, 79, 0.14);
}

.modal-app2 .reel-auth2-submit:disabled {
opacity: 0.55;
cursor: wait;
transform: none;
box-shadow:
2px 2px 0 #4F4F4F,
inset 0 1px 0 rgba(255, 255, 255, 0.20);
}

.modal-app2 .reel-auth2-error {
min-height: 16px;
margin-top: 9px;
color: #D66545;
}

/* ---------- Reel Content ---------- */

.modal-app2 .reel-content2 {
display: block;
opacity: 1;
transition: opacity 160ms ease-out;
}

#app2.is-auth-mode .reel-content2 {
display: none;
opacity: 0;
}

.modal-app2 .video-wrap {
position: relative;
width: 100%;
aspect-ratio: 16 / 9;
overflow: hidden;
border-radius: 0.75rem;
background: #161616;
outline: none;
}

.modal-app2 .video {
position: absolute;
inset: 0;
width: 100%;
height: 100%;
border: 0;
object-fit: contain;
background: #161616;
opacity: 0;
transition: opacity 180ms ease-out;
}

.modal-app2 .video.is-loaded { opacity: 1; }

/* Reel-only casual download friction. Native controls are not used, but
   these hints also suppress browser-supplied download/PiP buttons where
   the browser exposes them through WebKit media-control pseudo-elements. */
.modal-app2 .video {
-webkit-user-drag: none;
-webkit-user-select: none;
user-select: none;
}

.modal-app2 .video::-webkit-media-controls-download-button,
.modal-app2 .video::-webkit-media-controls-picture-in-picture-button {
display: none !important;
-webkit-appearance: none !important;
}

/* ---------- Custom Player Controls ---------- */

.modal-app2 .reel-controls2 {
position: absolute;
left: 0;
right: 0;
bottom: 0;
z-index: 3;
padding: 26px 14px 11px;
background: linear-gradient(
to bottom,
rgba(22, 22, 22, 0),
rgba(22, 22, 22, 0.86)
);
opacity: 0;
transform: translateY(3px);
pointer-events: none;
transition:
opacity 150ms ease-out,
transform 150ms ease-out;
}

.modal-app2 .video-wrap.controls-visible .reel-controls2,
.modal-app2 .video-wrap:focus-within .reel-controls2,
.modal-app2 .video-wrap.is-paused .reel-controls2 {
opacity: 1;
transform: translateY(0);
pointer-events: auto;
}

.modal-app2 .reel-controls2-row {
display: flex;
align-items: center;
gap: 10px;
}

.modal-app2 .reel-control2-button {
display: inline-flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
padding: 0;
border: 0;
border-radius: 0.35rem;
background: transparent;
color: #F3E9D7;
cursor: pointer;
transition:
background-color 120ms ease-out,
color 120ms ease-out,
transform 120ms ease-out;
}

.modal-app2 .reel-control2-button:hover,
.modal-app2 .reel-control2-button:focus-visible {
outline: none;
background: rgba(243, 233, 215, 0.13);
color: #D66545;
}

.modal-app2 .reel-control2-button:active {
transform: translateY(1px);
}

.modal-app2 .reel-control2-button svg {
width: 18px;
height: 18px;
fill: currentColor;
}

.modal-app2 .reel-icon-pause2 {
display: none;
}

.modal-app2 .video-wrap.is-playing .reel-icon-play2 {
display: none;
}

.modal-app2 .video-wrap.is-playing .reel-icon-pause2 {
display: block;
}

.modal-app2 .reel-time2 {
font-family: Space Mono, sans-serif;
font-size: 10px;
color: #F3E9D7;
white-space: nowrap;
}

.modal-app2 .reel-icon-volume-muted2 {
display: none;
}

.modal-app2 .reel-control2-button.is-muted .reel-icon-volume-on2 {
display: none;
}

.modal-app2 .reel-control2-button.is-muted .reel-icon-volume-muted2 {
display: block;
}

.modal-app2 .reel-volume2 {
--volume: 100%;
width: 72px;
height: 18px;
margin: 0;
padding: 0;
appearance: none;
-webkit-appearance: none;
background: transparent;
cursor: pointer;
}

.modal-app2 .reel-volume2::-webkit-slider-runnable-track {
height: 4px;
border-radius: 999px;
background:
linear-gradient(
to right,
#D66545 0,
#D66545 var(--volume),
rgba(243, 233, 215, 0.38) var(--volume),
rgba(243, 233, 215, 0.38) 100%
);
}

.modal-app2 .reel-volume2::-moz-range-track {
height: 4px;
border-radius: 999px;
background: rgba(243, 233, 215, 0.38);
}

.modal-app2 .reel-volume2::-moz-range-progress {
height: 4px;
border-radius: 999px;
background: #D66545;
}

.modal-app2 .reel-volume2::-webkit-slider-thumb {
appearance: none;
-webkit-appearance: none;
width: 10px;
height: 10px;
margin-top: -3px;
border: 2px solid #F3E9D7;
border-radius: 50%;
background: #D66545;
box-shadow: 0 1px 2px rgba(0,0,0,0.35);
}

.modal-app2 .reel-volume2::-moz-range-thumb {
width: 8px;
height: 8px;
border: 2px solid #F3E9D7;
border-radius: 50%;
background: #D66545;
box-shadow: 0 1px 2px rgba(0,0,0,0.35);
}

.modal-app2 .reel-volume2:focus-visible {
outline: none;
}

.modal-app2 .reel-volume2:focus-visible::-webkit-slider-thumb {
box-shadow:
0 0 0 3px rgba(214, 101, 69, 0.35),
0 1px 2px rgba(0,0,0,0.35);
}

.modal-app2 .reel-spacer2 {
flex: 1;
}

.modal-app2 .reel-timeline2-wrap {
position: relative;
flex: 1;
min-width: 80px;
display: flex;
align-items: center;
}

.modal-app2 .reel-timeline2 {
--progress: 0%;
width: 100%;
height: 18px;
margin: 0;
padding: 0;
appearance: none;
-webkit-appearance: none;
background: transparent;
cursor: pointer;
}

.modal-app2 .reel-timeline2::-webkit-slider-runnable-track {
height: 4px;
border-radius: 999px;
background:
linear-gradient(
to right,
#D66545 0,
#D66545 var(--progress),
rgba(243, 233, 215, 0.38) var(--progress),
rgba(243, 233, 215, 0.38) 100%
);
}

.modal-app2 .reel-timeline2::-moz-range-track {
height: 4px;
border-radius: 999px;
background: rgba(243, 233, 215, 0.38);
}

.modal-app2 .reel-timeline2::-moz-range-progress {
height: 4px;
border-radius: 999px;
background: #D66545;
}

.modal-app2 .reel-timeline2::-webkit-slider-thumb {
appearance: none;
-webkit-appearance: none;
width: 12px;
height: 12px;
margin-top: -4px;
border: 2px solid #F3E9D7;
border-radius: 50%;
background: #D66545;
box-shadow: 0 1px 2px rgba(0,0,0,0.35);
}

.modal-app2 .reel-timeline2::-moz-range-thumb {
width: 10px;
height: 10px;
border: 2px solid #F3E9D7;
border-radius: 50%;
background: #D66545;
box-shadow: 0 1px 2px rgba(0,0,0,0.35);
}

.modal-app2 .reel-timeline2:focus-visible {
outline: none;
}

.modal-app2 .reel-timeline2:focus-visible::-webkit-slider-thumb {
box-shadow:
0 0 0 3px rgba(214, 101, 69, 0.35),
0 1px 2px rgba(0,0,0,0.35);
}

/* ---------- Hover Preview ---------- */

.modal-app2 .reel-preview2 {
position: absolute;
left: 0;
bottom: 27px;
z-index: 5;
width: 160px;
pointer-events: none;
opacity: 0;
transform: translateX(-50%) translateY(4px);
transition:
opacity 90ms ease-out,
transform 90ms ease-out;
}

.modal-app2 .reel-preview2.is-visible {
opacity: 1;
transform: translateX(-50%) translateY(0);
}

.modal-app2 .reel-preview2-image {
width: 160px;
height: 90px;
border: 2px solid #4F4F4F;
border-radius: 0.4rem;
background-color: #161616;
background-repeat: no-repeat;
box-shadow: 0.16rem 0.16rem 0 #4F4F4F;
overflow: hidden;
}

.modal-app2 .reel-preview2-time {
display: table;
margin: 5px auto 0;
padding: 2px 6px;
border-radius: 0.25rem;
background: #4F4F4F;
color: #F3E9D7;
font-family: Space Mono, sans-serif;
font-size: 9px;
}

/* ---------- Timestamps & Breakdown ---------- */

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
width: calc(100% + 12px);
margin: -6px;
padding: 6px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 12px;
background: transparent;
border: 0;
border-radius: 0.35rem;
cursor: pointer;
text-align: left;
transition: background-color 120ms ease-out;
}

.modal-app2 .reel-timestamps2-toggle::after {
content: "+";
font-size: 16px;
line-height: 1;
color: #4F4F4F;
transition: color 120ms ease-out;
}

.modal-app2 .reel-timestamps2.is-open .reel-timestamps2-toggle::after {
content: "–";
}

.modal-app2 .reel-timestamps2-toggle:hover,
.modal-app2 .reel-timestamps2-toggle:focus-visible {
outline: none;
color: #D66545;
background: rgba(79, 79, 79, 0.08);
}

.modal-app2 .reel-timestamps2-toggle:hover::after,
.modal-app2 .reel-timestamps2-toggle:focus-visible::after {
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
color: #4F4F4F;
}

.modal-app2 .reel-timestamps2-toggle:disabled {
pointer-events: none;
}

/* ---------- Fullscreen ---------- */

.modal-app2 .video-wrap:fullscreen {
background: #000;
width: 100vw;
height: 100vh;
aspect-ratio: auto;
border-radius: 0;
}

.modal-app2 .video-wrap:fullscreen .video {
object-fit: contain;
}

/* ---------- Mobile ---------- */

@media (max-width: 768px) {
.modal-app2 .modal2,
#app2.is-auth-mode .modal2 {
width: calc(100% - 40px);
max-width: calc(100% - 40px);
padding: 0.75rem;
}

.modal-app2 .reel-auth2-form {
grid-template-columns: 1fr;
}

.modal-app2 .reel-auth2-submit {
width: 100%;
}

.modal-app2 .reel-time2 {
display: none;
}

.modal-app2 .reel-controls2 {
padding-left: 9px;
padding-right: 9px;
}

.modal-app2 .reel-controls2-row {
gap: 6px;
}

.modal-app2 .reel-volume2 {
width: 56px;
}

.modal-app2 .reel-preview2 {
display: none;
}
}

@media (prefers-reduced-motion: reduce) {
.modal-app2 .overlay,
.modal-app2 .modal2,
.modal-app2 .reel-timestamp2-button,
.modal-app2 .reel-controls2,
.modal-app2 .reel-auth2-submit,
.modal-app2 .reel-preview2 {
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
  var demoReelGlobalKeysAttached2 = false;
  var demoReelControlsHideTimer2 = null;
  var demoReelPreviewSpriteReady2 = false;
  var demoReelLastVolume2 = 1;

  var DEMO_REEL_FRAME_RATE2 = 24;

  var DEMO_REEL_LOGIN_URL2 =
    "https://reel.nick-st-clair.com/login";

  var DEMO_REEL_VIDEO_URL2 =
    "https://reel.nick-st-clair.com/video/demo-reel.mp4";

  var DEMO_REEL_PREVIEW_SPRITE2 =
    "https://reel.nick-st-clair.com/video/previews/demo-reel-sprite.webp";

  var DEMO_REEL_TOKEN_KEY2 = "demoReelToken2";
  var DEMO_REEL_EXPIRY_KEY2 = "demoReelTokenExpires2";

  var DEMO_REEL_PREVIEW_INTERVAL2 = 2;
  var DEMO_REEL_PREVIEW_WIDTH2 = 160;
  var DEMO_REEL_PREVIEW_HEIGHT2 = 90;
  var DEMO_REEL_PREVIEW_COLUMNS2 = 9;

  function getDemoReelVideo2() {
    if (!demoReelVideo2 || !document.body.contains(demoReelVideo2)) {
      demoReelVideo2 = document.getElementById("demoReelVideo2");
      demoReelListenersAttached2 = false;
    }

    return demoReelVideo2;
  }

  function getDemoReelWrap2() {
    return document.getElementById("demoReelPlayerShell2");
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

  function buildProtectedDemoReelUrl2(baseUrl, token) {
    return baseUrl + "?token=" + encodeURIComponent(token);
  }

  function buildDemoReelVideoUrl2(token) {
    return buildProtectedDemoReelUrl2(
      DEMO_REEL_VIDEO_URL2,
      token
    );
  }

  function buildDemoReelPreviewUrl2(token) {
    return buildProtectedDemoReelUrl2(
      DEMO_REEL_PREVIEW_SPRITE2,
      token
    );
  }

  function showDemoReelAuth2(message) {
    var app = document.getElementById("app2");
    var error = document.getElementById("demoReelAuthError2");
    var input = document.getElementById("demoReelPassword2");

    if (app) app.classList.add("is-auth-mode");
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
    var app = document.getElementById("app2");
    var error = document.getElementById("demoReelAuthError2");

    if (app) app.classList.remove("is-auth-mode");
    if (error) error.textContent = "";
  }

  function setDemoReelPreviewSprite2(token) {
    var previewImage = document.getElementById(
      "demoReelPreviewImage2"
    );

    if (!previewImage || !token) return;

    var spriteUrl = buildDemoReelPreviewUrl2(token);
    var loader = new Image();

    demoReelPreviewSpriteReady2 = false;

    loader.onload = function () {
      previewImage.style.backgroundImage =
        'url("' + spriteUrl.replace(/"/g, '\\"') + '")';
      demoReelPreviewSpriteReady2 = true;
    };

    loader.onerror = function () {
      demoReelPreviewSpriteReady2 = false;
    };

    loader.src = spriteUrl;
  }

  function setDemoReelVideoSource2(token) {
    var video = getDemoReelVideo2();

    if (!video || !token) return;

    attachDemoReelVideoListeners2();
    attachDemoReelControlListeners2();

    var wantedSource = buildDemoReelVideoUrl2(token);

    if (video.src !== wantedSource) {
      video.classList.remove("is-loaded");
      video.src = wantedSource;
      video.load();
    }

    setDemoReelPreviewSprite2(token);
    hideDemoReelAuth2();

    // With R2 access already authorized, the breakdown is available
    // immediately. The reel itself intentionally does not autoplay.
    renderDemoReelTimestamps2(true);
    showDemoReelControls2(true);
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

    video.addEventListener("loadedmetadata", function () {
      updateDemoReelControlState2();
      updateDemoReelVolumeState2();
    });

    video.addEventListener("volumechange", function () {
      updateDemoReelVolumeState2();
    });

    video.addEventListener("play", function () {
      updateDemoReelPlaybackState2();
      demoReelCurrentTime2 = video.currentTime || 0;
      updateDemoReelActiveTimestamp2(
        demoReelCurrentTime2,
        false
      );
      scheduleDemoReelControlsHide2();
    });

    video.addEventListener("pause", function () {
      updateDemoReelPlaybackState2();
      showDemoReelControls2(true);
    });

    video.addEventListener("ended", function () {
      updateDemoReelPlaybackState2();
      showDemoReelControls2(true);
    });

    video.addEventListener("timeupdate", function () {
      demoReelCurrentTime2 = video.currentTime || 0;
      updateDemoReelControlState2();
      updateDemoReelActiveTimestamp2(
        demoReelCurrentTime2,
        true
      );
    });

    video.addEventListener("seeked", function () {
      demoReelCurrentTime2 = video.currentTime || 0;
      updateDemoReelControlState2();
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
      demoReelPreviewSpriteReady2 = false;
      renderDemoReelTimestamps2(false);
      showDemoReelAuth2(
        "Your reel access expired. Enter the password again."
      );
    });
  }

  function attachDemoReelControlListeners2() {
    var wrap = getDemoReelWrap2();
    var video = getDemoReelVideo2();
    var play = document.getElementById("demoReelPlay2");
    var timeline = document.getElementById("demoReelTimeline2");
    var mute = document.getElementById("demoReelMute2");
    var volume = document.getElementById("demoReelVolume2");
    var pip = document.getElementById("demoReelPip2");
    var fullscreen = document.getElementById(
      "demoReelFullscreen2"
    );

    if (!wrap || !video || wrap.dataset.controlsReady === "1") {
      return;
    }

    wrap.dataset.controlsReady = "1";

    if (play) {
      play.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleDemoReelPlayback2();
      });
    }

    video.addEventListener("click", function () {
      toggleDemoReelPlayback2();
    });

    wrap.addEventListener("mousemove", function () {
      showDemoReelControls2(true);
      scheduleDemoReelControlsHide2();
    });

    wrap.addEventListener("mouseenter", function () {
      showDemoReelControls2(true);
    });

    wrap.addEventListener("mouseleave", function () {
      if (!video.paused) scheduleDemoReelControlsHide2(350);
    });

    wrap.addEventListener("focusin", function () {
      showDemoReelControls2(true);
    });

    wrap.addEventListener("keydown", function (event) {
      var target = event.target;

      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "BUTTON")
      ) {
        return;
      }

      if (event.code === "Space" || event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggleDemoReelPlayback2();
      }
    });

    // Keep the usual page context menu everywhere else on the site.
    // Suppress it only inside the authorized reel player.
    wrap.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });

    video.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });

    attachDemoReelGlobalKeyListener2();

    if (timeline) {
      timeline.addEventListener("input", function () {
        if (!Number.isFinite(video.duration) || !video.duration) {
          return;
        }

        var seconds =
          (Number(timeline.value) / 1000) * video.duration;

        video.currentTime = seconds;
        demoReelCurrentTime2 = seconds;
        updateDemoReelControlState2();
        updateDemoReelActiveTimestamp2(seconds, true);
      });

      timeline.addEventListener("pointermove", function (event) {
        if (event.pointerType === "touch") return;
        updateDemoReelPreview2(event);
      });

      timeline.addEventListener("pointerenter", function (event) {
        if (event.pointerType === "touch") return;
        updateDemoReelPreview2(event);
      });

      timeline.addEventListener("pointerleave", function () {
        hideDemoReelPreview2();
      });
    }

    if (mute) {
      mute.addEventListener("click", function (event) {
        event.stopPropagation();

        if (video.muted || video.volume === 0) {
          video.muted = false;

          if (video.volume === 0) {
            video.volume = Math.max(
              0.05,
              Math.min(1, demoReelLastVolume2 || 1)
            );
          }
        } else {
          demoReelLastVolume2 = video.volume || demoReelLastVolume2;
          video.muted = true;
        }

        updateDemoReelVolumeState2();
      });
    }

    if (volume) {
      volume.addEventListener("input", function () {
        var nextVolume = Math.max(
          0,
          Math.min(1, Number(volume.value))
        );

        video.volume = nextVolume;
        video.muted = nextVolume === 0;

        if (nextVolume > 0) {
          demoReelLastVolume2 = nextVolume;
        }

        updateDemoReelVolumeState2();
      });
    }

    if (pip) {
      if (
        !document.pictureInPictureEnabled ||
        typeof video.requestPictureInPicture !== "function"
      ) {
        pip.style.display = "none";
      } else {
        pip.addEventListener("click", async function (event) {
          event.stopPropagation();

          try {
            if (document.pictureInPictureElement) {
              await document.exitPictureInPicture();
            } else {
              await video.requestPictureInPicture();
            }
          } catch (error) {}
        });

        video.addEventListener("enterpictureinpicture", function () {
          pip.setAttribute("aria-pressed", "true");
        });

        video.addEventListener("leavepictureinpicture", function () {
          pip.setAttribute("aria-pressed", "false");
        });
      }
    }

    if (fullscreen) {
      fullscreen.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleDemoReelFullscreen2();
      });
    }

    document.addEventListener("fullscreenchange", function () {
      updateDemoReelFullscreenButton2();
    });

    updateDemoReelControlState2();
    updateDemoReelPlaybackState2();
    updateDemoReelVolumeState2();
  }

  function attachDemoReelGlobalKeyListener2() {
    if (demoReelGlobalKeysAttached2) return;

    demoReelGlobalKeysAttached2 = true;

    document.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        return;
      }

      var app = document.getElementById("app2");
      var video = getDemoReelVideo2();
      var target = event.target;

      if (
        !app ||
        !app.classList.contains("is-open") ||
        app.classList.contains("is-auth-mode") ||
        !video ||
        !video.src
      ) {
        return;
      }

      // Password typing is the one arrow-key exception.
      if (
        target &&
        (target.id === "demoReelPassword2" ||
          (target.tagName === "INPUT" && target.type === "password") ||
          target.isContentEditable)
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      stepDemoReelFrame2(event.key === "ArrowRight" ? 1 : -1);
    }, true);
  }

  function stepDemoReelFrame2(direction) {
    var video = getDemoReelVideo2();

    if (!video || !video.src || !direction) return;

    // Frame stepping always pauses first.
    if (!video.paused) video.pause();

    var current = Number.isFinite(video.currentTime)
      ? video.currentTime
      : 0;

    var duration = Number.isFinite(video.duration)
      ? video.duration
      : Infinity;

    var frameDuration = 1 / DEMO_REEL_FRAME_RATE2;
    var target = current + (direction > 0 ? frameDuration : -frameDuration);

    target = Math.max(0, Math.min(duration, target));

    demoReelCurrentTime2 = target;

    try {
      video.currentTime = target;
    } catch (error) {}

    updateDemoReelControlState2();
    updateDemoReelActiveTimestamp2(target, true);
    updateDemoReelPlaybackState2();
    showDemoReelControls2(true);
  }

  function toggleDemoReelPlayback2() {
    var video = getDemoReelVideo2();

    if (!video || !video.src) return;

    if (video.paused || video.ended) {
      var playPromise = video.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {});
      }
    } else {
      video.pause();
    }
  }

  function showDemoReelControls2(force) {
    var wrap = getDemoReelWrap2();

    if (!wrap) return;

    wrap.classList.add("controls-visible");

    if (force) {
      clearTimeout(demoReelControlsHideTimer2);
    }
  }

  function scheduleDemoReelControlsHide2(delay) {
    var video = getDemoReelVideo2();
    var wrap = getDemoReelWrap2();

    if (!video || !wrap || video.paused) return;

    clearTimeout(demoReelControlsHideTimer2);

    demoReelControlsHideTimer2 = setTimeout(function () {
      if (document.activeElement &&
          wrap.contains(document.activeElement)) {
        return;
      }

      wrap.classList.remove("controls-visible");
    }, typeof delay === "number" ? delay : 1800);
  }

  function updateDemoReelPlaybackState2() {
    var video = getDemoReelVideo2();
    var wrap = getDemoReelWrap2();
    var play = document.getElementById("demoReelPlay2");

    if (!video || !wrap) return;

    var playing = !video.paused && !video.ended;

    wrap.classList.toggle("is-playing", playing);
    wrap.classList.toggle("is-paused", !playing);

    if (play) {
      play.setAttribute(
        "aria-label",
        playing ? "Pause demo reel" : "Play demo reel"
      );
      play.setAttribute(
        "title",
        playing ? "Pause" : "Play"
      );
    }
  }

  function updateDemoReelControlState2() {
    var video = getDemoReelVideo2();
    var timeline = document.getElementById("demoReelTimeline2");
    var time = document.getElementById("demoReelTime2");

    if (!video) return;

    var current = Number.isFinite(video.currentTime)
      ? video.currentTime
      : 0;

    var duration = Number.isFinite(video.duration)
      ? video.duration
      : 0;

    var progress =
      duration > 0 ? Math.max(0, Math.min(1, current / duration)) : 0;

    if (timeline) {
      timeline.value = String(Math.round(progress * 1000));
      timeline.style.setProperty(
        "--progress",
        (progress * 100).toFixed(3) + "%"
      );
      timeline.setAttribute(
        "aria-valuetext",
        formatDemoReelTime2(current) +
          " of " +
          formatDemoReelTime2(duration)
      );
    }

    if (time) {
      time.textContent =
        formatDemoReelTime2(current) +
        " / " +
        formatDemoReelTime2(duration);
    }
  }

  function updateDemoReelVolumeState2() {
    var video = getDemoReelVideo2();
    var mute = document.getElementById("demoReelMute2");
    var volume = document.getElementById("demoReelVolume2");

    if (!video) return;

    var rawVolume = Number.isFinite(video.volume)
      ? Math.max(0, Math.min(1, video.volume))
      : 1;

    var muted = video.muted || rawVolume === 0;
    var shownVolume = muted ? 0 : rawVolume;

    if (!muted && rawVolume > 0) {
      demoReelLastVolume2 = rawVolume;
    }

    if (mute) {
      mute.classList.toggle("is-muted", muted);
      mute.setAttribute(
        "aria-label",
        muted ? "Unmute demo reel" : "Mute demo reel"
      );
      mute.setAttribute(
        "title",
        muted ? "Unmute" : "Mute"
      );
      mute.setAttribute("aria-pressed", muted ? "true" : "false");
    }

    if (volume) {
      volume.value = String(shownVolume);
      volume.style.setProperty(
        "--volume",
        (shownVolume * 100).toFixed(1) + "%"
      );
      volume.setAttribute(
        "aria-valuetext",
        Math.round(shownVolume * 100) + "%"
      );
    }
  }

  function formatDemoReelTime2(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;

    var whole = Math.floor(seconds);
    var minutes = Math.floor(whole / 60);
    var secs = whole % 60;

    return minutes + ":" + String(secs).padStart(2, "0");
  }

  function updateDemoReelPreview2(event) {
    var video = getDemoReelVideo2();
    var timeline = document.getElementById("demoReelTimeline2");
    var preview = document.getElementById("demoReelPreview2");
    var image = document.getElementById("demoReelPreviewImage2");
    var label = document.getElementById("demoReelPreviewTime2");

    if (
      !video ||
      !timeline ||
      !preview ||
      !image ||
      !label ||
      !demoReelPreviewSpriteReady2 ||
      !Number.isFinite(video.duration) ||
      video.duration <= 0
    ) {
      hideDemoReelPreview2();
      return;
    }

    var rect = timeline.getBoundingClientRect();
    var localX = Math.max(
      0,
      Math.min(rect.width, event.clientX - rect.left)
    );

    var ratio = rect.width ? localX / rect.width : 0;
    var seconds = ratio * video.duration;

    var maxIndex = Math.max(
      0,
      Math.ceil(
        video.duration / DEMO_REEL_PREVIEW_INTERVAL2
      ) - 1
    );

    var index = Math.min(
      maxIndex,
      Math.max(
        0,
        Math.round(seconds / DEMO_REEL_PREVIEW_INTERVAL2)
      )
    );

    var column = index % DEMO_REEL_PREVIEW_COLUMNS2;
    var row = Math.floor(index / DEMO_REEL_PREVIEW_COLUMNS2);

    image.style.backgroundSize =
      (DEMO_REEL_PREVIEW_COLUMNS2 *
        DEMO_REEL_PREVIEW_WIDTH2) +
      "px auto";

    image.style.backgroundPosition =
      (-column * DEMO_REEL_PREVIEW_WIDTH2) +
      "px " +
      (-row * DEMO_REEL_PREVIEW_HEIGHT2) +
      "px";

    label.textContent = formatDemoReelTime2(seconds);

    var previewHalf = 80;
    var clampedX = Math.max(
      previewHalf,
      Math.min(rect.width - previewHalf, localX)
    );

    preview.style.left = clampedX + "px";
    preview.classList.add("is-visible");
  }

  function hideDemoReelPreview2() {
    var preview = document.getElementById("demoReelPreview2");

    if (preview) preview.classList.remove("is-visible");
  }

  async function toggleDemoReelFullscreen2() {
    var wrap = getDemoReelWrap2();
    var video = getDemoReelVideo2();

    if (!wrap || !video) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (wrap.requestFullscreen) {
        await wrap.requestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    } catch (error) {}
  }

  function updateDemoReelFullscreenButton2() {
    var button = document.getElementById("demoReelFullscreen2");

    if (!button) return;

    var active = !!document.fullscreenElement;

    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.setAttribute(
      "title",
      active ? "Exit fullscreen" : "Fullscreen"
    );
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
    attachDemoReelControlListeners2();
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

      setDemoReelVideoSource2(data.token);
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

    var wasOpen =
      timestampContainer.classList.contains("is-open");

    timestampContainer.innerHTML = "";

    if (!demoReelTimestamps2.length) {
      timestampContainer.style.display = "none";
      return;
    }

    timestampContainer.style.display = "";

    if (isUnlocked) {
      timestampContainer.classList.remove("is-locked");
    } else {
      timestampContainer.classList.add("is-locked");
      wasOpen = false;
    }

    timestampContainer.classList.toggle("is-open", wasOpen);

    var toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "reel-timestamps2-toggle";
    toggleButton.textContent = "Timestamps & Reel Breakdown";
    toggleButton.disabled = !isUnlocked;
    toggleButton.setAttribute(
      "aria-expanded",
      wasOpen ? "true" : "false"
    );

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

    // Seeking from the breakdown intentionally begins playback,
    // matching the previous reel behavior.
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
        setDemoReelVideoSource2(token);
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

      hideDemoReelPreview2();
      clearTimeout(demoReelControlsHideTimer2);
      clearTimeout(p._modalCloseTimer);

      p._modalCloseTimer = setTimeout(function () {
        p.classList.remove("is-closing");
        p.style.display = "none";

        demoReelCurrentTime2 = 0;
        demoReelActiveTimestampIndex2 = -1;

        updateDemoReelControlState2();

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

