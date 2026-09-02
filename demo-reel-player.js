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
width: 400px;
max-width: calc(100% - 40px);
padding: 0.75rem;
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
padding: 12px;
text-align: left;
}

.modal-app2 .reel-auth2-title {
font-family: Unbounded, sans-serif;
font-size: 19px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: -0.05em;
color: #4F4F4F;
margin: 0 0 8px;
}

.modal-app2 .reel-auth2-copy,
.modal-app2 .reel-auth2-error {
font-family: Space Mono, sans-serif;
font-size: 14px;
line-height: 1.5;
color: #4F4F4F;
margin: 0;
}

.modal-app2 .reel-auth2-form {
display: grid;
grid-template-columns: minmax(0, 1fr) 44px;
align-items: center;
gap: 10px;
width: 100%;
max-width: 350px;
margin-top: 12px;
}

.modal-app2 .reel-auth2-input {
font-family: Space Mono, sans-serif;
font-size: 13px;
min-width: 0;
height: 44px;
box-sizing: border-box;
padding: 8px 12px;
background: #F3E9D7;
color: #4F4F4F;
border: 3px solid #4F4F4F;
border-radius: 0.5rem;
box-shadow: 0.20rem 0.20rem 0 #4F4F4F;
outline: none;
transition:
box-shadow 0.18s ease-out,
transform 0.18s ease-out;
}

.modal-app2 .reel-auth2-input::placeholder {
font-family: Unbounded, sans-serif;
font-size: 12px;
font-weight: 100;
color: rgba(0, 0, 0, 0.5);
opacity: 1;
}

.modal-app2 .reel-auth2-input:focus-visible {
transform: translate(2px, 2px);
box-shadow:
1px 1px 0 #4F4F4F,
inset 0 2px 0 rgba(79, 79, 79, 0.14);
}

/* Gallery play-button language, scaled for this compact auth modal. */
.modal-app2 .reel-auth2-submit {
font-family: Unbounded, sans-serif;
box-sizing: border-box;
width: 44px;
height: 44px;
min-height: 44px;
padding: 0;
border: 2px solid #4F4F4F;
border-radius: 9px;
box-shadow:
4px 4px 0 #4F4F4F,
inset 0 1px 0 rgba(255, 255, 255, 0.30);
display: flex;
align-items: center;
justify-content: center;
line-height: 1;
cursor: pointer;
background: #F3E9D7;
color: #4F4F4F;
-webkit-text-fill-color: #4F4F4F;
transform: translate(0, 0);
-webkit-appearance: none;
appearance: none;
touch-action: manipulation;
-webkit-tap-highlight-color: transparent;
transition:
background-color 0.16s ease-out,
color 0.16s ease-out,
transform 0.10s ease-out,
box-shadow 0.10s ease-out;
}

.modal-app2 .reel-auth2-submit-icon {
display: block;
width: 24px;
height: 24px;
fill: currentColor;
pointer-events: none;
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
margin-top: 8px;
color: #D66545;
}

.modal-app2 .reel-auth2-error:empty {
display: none;
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

/* ---------- Subtle Reel Watermark ---------- */

.modal-app2 .reel-watermark2 {
position: absolute;
right: 14px;
bottom: 58px;
z-index: 2;
pointer-events: none;
user-select: none;
font-family: Space Mono, monospace;
font-size: 8.5px;
font-weight: 400;
line-height: 1;
letter-spacing: 0.035em;
color: rgba(243, 233, 215, 0.30);
text-shadow: 0 1px 2px rgba(0, 0, 0, 0.72);
opacity: 1;
transition: opacity 180ms ease-out;
}

.modal-app2 .video-wrap.is-playing .reel-watermark2 {
opacity: 0.72;
}

/* ---------- Restrained Buffering Indicator ---------- */

.modal-app2 .reel-buffering2 {
position: absolute;
left: 50%;
top: 50%;
z-index: 4;
width: 20px;
height: 20px;
margin: -10px 0 0 -10px;
border: 2px solid rgba(243, 233, 215, 0.30);
border-top-color: rgba(243, 233, 215, 0.88);
border-radius: 50%;
box-sizing: border-box;
pointer-events: none;
opacity: 0;
transform: scale(0.92);
transition:
opacity 120ms ease-out,
transform 120ms ease-out;
}

.modal-app2 .video-wrap.is-buffering .reel-buffering2 {
opacity: 0.82;
transform: scale(1);
animation: demoReelBufferSpin2 720ms linear infinite;
}

@keyframes demoReelBufferSpin2 {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
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
--buffered: 0%;
width: 100%;
height: 18px;
margin: 0;
padding: 0;
appearance: none;
-webkit-appearance: none;
background: transparent;
cursor: pointer;
touch-action: none;
}

.modal-app2 .reel-timeline2::-webkit-slider-runnable-track {
height: 4px;
border-radius: 999px;
background:
linear-gradient(
to right,
#D66545 0,
#D66545 var(--progress),
rgba(243, 233, 215, 0.62) var(--progress),
rgba(243, 233, 215, 0.62) var(--buffered),
rgba(243, 233, 215, 0.24) var(--buffered),
rgba(243, 233, 215, 0.24) 100%
);
}

.modal-app2 .reel-timeline2::-moz-range-track {
height: 4px;
border-radius: 999px;
background:
linear-gradient(
to right,
rgba(243, 233, 215, 0.62) 0,
rgba(243, 233, 215, 0.62) var(--buffered),
rgba(243, 233, 215, 0.24) var(--buffered),
rgba(243, 233, 215, 0.24) 100%
);
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
color: #4F4F4F;
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
grid-template-columns: minmax(0, 1fr) 44px;
max-width: none;
}

.modal-app2 .reel-auth2-submit {
width: 44px;
height: 44px;
min-height: 44px;
border-radius: 9px;
}

.modal-app2 .reel-auth2-submit-icon {
width: 24px;
height: 24px;
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

.modal-app2 .reel-watermark2 {
right: 10px;
bottom: 52px;
font-size: 7.5px;
}
}


/* ---------- Touch / Landscape Layouts ----------
   Desktop and tablet/phone portrait remain unchanged except for the
   portrait-phone volume control noted below. */

/* Phone portrait: reclaim timeline width by taking the volume range out
   of normal row flow. The pop-up control deliberately uses a generous
   finger-sized hit area instead of a tiny rotated desktop slider. */
@media (orientation: portrait) and (any-pointer: coarse) and (max-width: 600px) {
.modal-app2 .reel-controls2-row {
position: relative;
}

.modal-app2 #demoReelMute2 {
width: 36px;
height: 36px;
flex: 0 0 36px;
}

.modal-app2 #demoReelMute2 svg {
width: 19px;
height: 19px;
}

.modal-app2 .reel-volume2 {
position: absolute;
/* After rotation, this keeps the vertical control centred over mute. */
right: 39px;
bottom: 66px;
width: 96px;
height: 40px;
margin: 0;
padding: 0 11px;
box-sizing: border-box;
transform: rotate(-90deg);
transform-origin: center center;
z-index: 4;
opacity: 0;
visibility: hidden;
pointer-events: none;
touch-action: none;
background: rgba(18, 18, 18, 0.82);
border: 1px solid rgba(243, 233, 215, 0.18);
border-radius: 999px;
box-shadow: 0 2px 9px rgba(0, 0, 0, 0.28);
transition: opacity 0.12s ease;
}

.modal-app2 .reel-volume2::-webkit-slider-runnable-track {
height: 6px;
}

.modal-app2 .reel-volume2::-webkit-slider-thumb {
width: 16px;
height: 16px;
margin-top: -5px;
}

.modal-app2 .reel-volume2::-moz-range-track,
.modal-app2 .reel-volume2::-moz-range-progress {
height: 6px;
}

.modal-app2 .reel-volume2::-moz-range-thumb {
width: 14px;
height: 14px;
}

.modal-app2 .reel-controls2-row.is-volume-open2 .reel-volume2 {
opacity: 1;
visibility: visible;
pointer-events: auto;
}
}

@media (any-pointer: coarse) {
.modal-app2 .reel-timeline2 {
touch-action: none;
}

/* Prevent iOS/Safari from auto-zooming the password field when the
   on-screen keyboard opens. Keep page pinch-zoom/accessibility intact. */
.modal-app2 .reel-auth2-input {
font-size: 16px;
}
}

/* Tablet landscape: use the reel's compact/native picture ratio from the
   moment the unlocked player appears. Opening the breakdown therefore
   expands only the timestamp list; the video itself no longer pops between
   two sizes. */
@media (orientation: landscape) and (any-pointer: coarse) and (min-height: 561px) {
#app2:not(.is-auth-mode) .modal2 {
width: min(1000px, calc(100% - 24px));
max-width: calc(100% - 24px);
max-height: calc(100dvh - 24px);
padding: 12px;
box-sizing: border-box;
}

#app2:not(.is-auth-mode) .video-wrap {
aspect-ratio: var(--reel-native-aspect2, 12 / 5);
}

#app2:not(.is-auth-mode) .reel-timestamps2.is-open .reel-timestamps2-list {
max-height: min(260px, calc(100dvh - 470px));
overflow-y: auto;
}
}

/* Phone landscape: deliberately video-first. There is not enough vertical
   room for a useful breakdown without compromising the reel, so timestamps
   are hidden in this orientation and return automatically in portrait. */
@media (orientation: landscape) and (any-pointer: coarse) and (max-height: 560px) {
#app2:not(.is-auth-mode) .modal2 {
width: calc(100% - 16px);
max-width: calc(100% - 16px);
height: calc(100dvh - 16px);
max-height: calc(100dvh - 16px);
padding: 8px;
box-sizing: border-box;
overflow: hidden;
}

#app2:not(.is-auth-mode) .reel-content2 {
height: 100%;
min-height: 0;
}

#app2:not(.is-auth-mode) .video-wrap {
width: 100%;
height: 100%;
aspect-ratio: auto;
}

#app2:not(.is-auth-mode) .reel-timestamps2 {
display: none !important;
}
}

@media (prefers-reduced-motion: reduce) {
.modal-app2 .overlay,
.modal-app2 .modal2,
.modal-app2 .reel-timestamp2-button,
.modal-app2 .reel-controls2,
.modal-app2 .reel-auth2-submit,
.modal-app2 .reel-preview2,
.modal-app2 .reel-watermark2,
.modal-app2 .reel-buffering2 {
transition: none !important;
}

.modal-app2 .video-wrap.is-buffering .reel-buffering2 {
animation-duration: 1.2s;
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
  var demoReelBufferingTimer2 = null;
  var demoReelPreviewSpriteReady2 = false;
  var demoReelLastVolume2 = 1;
  var demoReelVolumeRestored2 = false;
  var demoReelTimelinePointerActive2 = false;
  var demoReelTimelinePointerId2 = null;
  var demoReelTimelinePointerType2 = "";
  var demoReelTimelineTouchSeeking2 = false;
  var demoReelTimelineScrubbing2 = false;
  var demoReelTimelineWasPlaying2 = false;

  var DEMO_REEL_FRAME_RATE2 = 24;

  var DEMO_REEL_LOGIN_URL2 =
    "https://reel.nick-st-clair.com/login";

  var DEMO_REEL_VIDEO_URL2 =
    "https://reel.nick-st-clair.com/video/demo-reel.mp4";

  var DEMO_REEL_PREVIEW_SPRITE2 =
    "https://reel.nick-st-clair.com/video/previews/demo-reel-sprite.webp";

  var DEMO_REEL_TOKEN_KEY2 = "demoReelToken2";
  var DEMO_REEL_EXPIRY_KEY2 = "demoReelTokenExpires2";
  var DEMO_REEL_VOLUME_KEY2 = "demoReelVolumePreference2";
  var DEMO_REEL_MUTED_KEY2 = "demoReelMutedPreference2";

  // One-second preview spacing matches the finished family-site player and
  // makes hover/scrub look-ahead noticeably more precise around shot cuts.
  var DEMO_REEL_PREVIEW_INTERVAL2 = 1;
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

  // Keep the watermark inside the actual displayed picture, not merely
  // inside the 16:9 player shell. This accounts for object-fit: contain
  // letterboxing/pillarboxing and updates as the player changes size.
  function updateDemoReelWatermarkPosition2() {
    var wrap = getDemoReelWrap2();
    var video = getDemoReelVideo2();
    var watermark = wrap && wrap.querySelector(".reel-watermark2");
    var controls = wrap && wrap.querySelector(".reel-controls2");

    if (
      !wrap ||
      !video ||
      !watermark ||
      !video.videoWidth ||
      !video.videoHeight
    ) {
      return;
    }

    var wrapWidth = wrap.clientWidth;
    var wrapHeight = wrap.clientHeight;

    if (!wrapWidth || !wrapHeight) return;

    var videoAspect = video.videoWidth / video.videoHeight;
    wrap.style.setProperty(
      "--reel-native-aspect2",
      String(videoAspect)
    );

    var wrapAspect = wrapWidth / wrapHeight;
    var offsetX = 0;
    var offsetY = 0;

    if (videoAspect > wrapAspect) {
      var displayedHeight = wrapWidth / videoAspect;
      offsetY = Math.max(0, (wrapHeight - displayedHeight) / 2);
    } else if (videoAspect < wrapAspect) {
      var displayedWidth = wrapHeight * videoAspect;
      offsetX = Math.max(0, (wrapWidth - displayedWidth) / 2);
    }

    var inset = wrapWidth <= 640 ? 8 : 10;
    var controlsHeight = controls ? controls.offsetHeight : 0;

    // The lower edge follows the displayed picture boundary. If there is
    // little/no letterbox, keep it just above the custom control bar.
    var bottomInset = Math.max(
      offsetY + inset,
      controlsHeight + inset
    );

    watermark.style.right = Math.round(offsetX + inset) + "px";
    watermark.style.bottom = Math.round(bottomInset) + "px";
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

  function restoreDemoReelVolumePreference2() {
    var video = getDemoReelVideo2();

    if (!video || demoReelVolumeRestored2) return;

    demoReelVolumeRestored2 = true;

    try {
      var storedVolume = Number(
        localStorage.getItem(DEMO_REEL_VOLUME_KEY2)
      );
      var storedMuted = localStorage.getItem(
        DEMO_REEL_MUTED_KEY2
      );

      if (Number.isFinite(storedVolume)) {
        storedVolume = Math.max(0, Math.min(1, storedVolume));
        video.volume = storedVolume;

        if (storedVolume > 0) {
          demoReelLastVolume2 = storedVolume;
        }
      }

      if (storedMuted === "1" || storedMuted === "0") {
        video.muted = storedMuted === "1";
      }
    } catch (error) {}

    updateDemoReelVolumeState2();
  }

  function storeDemoReelVolumePreference2() {
    var video = getDemoReelVideo2();

    if (!video || !demoReelVolumeRestored2) return;

    try {
      localStorage.setItem(
        DEMO_REEL_VOLUME_KEY2,
        String(Math.max(0, Math.min(1, video.volume)))
      );
      localStorage.setItem(
        DEMO_REEL_MUTED_KEY2,
        video.muted ? "1" : "0"
      );
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

  function isDemoReelTouchDevice2() {
    return !!(
      (window.matchMedia &&
        window.matchMedia("(any-pointer: coarse)").matches) ||
      (navigator && navigator.maxTouchPoints > 0) ||
      ("ontouchstart" in window)
    );
  }

  function showDemoReelAuth2(message) {
    var app = document.getElementById("app2");
    var error = document.getElementById("demoReelAuthError2");
    var input = document.getElementById("demoReelPassword2");

    if (app) app.classList.add("is-auth-mode");
    if (error) error.textContent = message || "";

    // Desktop can safely autofocus for keyboard convenience.
    // On touch devices, programmatic focus makes iOS/WebKit briefly pan/flicker
    // the visual viewport before the on-screen keyboard settles. Let the user
    // explicitly tap the password field instead.
    if (input && !isDemoReelTouchDevice2()) {
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

    restoreDemoReelVolumePreference2();
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
      updateDemoReelWatermarkPosition2();
    });

    video.addEventListener("canplay", function () {
      video.classList.add("is-loaded");
      hideDemoReelBuffering2();
      updateDemoReelBufferedState2();
      updateDemoReelWatermarkPosition2();
    });

    video.addEventListener("playing", function () {
      hideDemoReelBuffering2();
    });

    video.addEventListener("waiting", function () {
      scheduleDemoReelBuffering2(180);
    });

    video.addEventListener("stalled", function () {
      scheduleDemoReelBuffering2(260);
    });

    video.addEventListener("progress", function () {
      updateDemoReelBufferedState2();

      // A stalled network request does not necessarily mean playback is
      // starved. If the browser has playable future data again, make sure a
      // spinner raised by an earlier waiting/stalled event cannot linger.
      if (video.readyState >= 3) {
        hideDemoReelBuffering2();
      }
    });

    video.addEventListener("loadedmetadata", function () {
      updateDemoReelControlState2();
      updateDemoReelBufferedState2();
      updateDemoReelVolumeState2();
      updateDemoReelWatermarkPosition2();
    });

    video.addEventListener("volumechange", function () {
      updateDemoReelVolumeState2();
      storeDemoReelVolumePreference2();
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
      hideDemoReelBuffering2();
      updateDemoReelPlaybackState2();
      showDemoReelControls2(true);
    });

    video.addEventListener("ended", function () {
      updateDemoReelPlaybackState2();
      showDemoReelControls2(true);
    });

    video.addEventListener("timeupdate", function () {
      // If currentTime is advancing, playback is not visibly buffering. This
      // also clears a stale spinner if a browser fired `stalled` while it
      // still had enough media buffered to continue playing.
      hideDemoReelBuffering2();
      demoReelCurrentTime2 = video.currentTime || 0;
      updateDemoReelControlState2();
      updateDemoReelActiveTimestamp2(
        demoReelCurrentTime2,
        true
      );
    });

    video.addEventListener("seeked", function () {
      hideDemoReelBuffering2();
      demoReelCurrentTime2 = video.currentTime || 0;
      updateDemoReelControlState2();
      updateDemoReelBufferedState2();
      updateDemoReelActiveTimestamp2(
        demoReelCurrentTime2,
        true
      );
    });

    video.addEventListener("error", function () {
      hideDemoReelBuffering2();
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

  function isDemoReelPhonePortrait2() {
    return !!(
      window.matchMedia &&
      window.matchMedia(
        "(orientation: portrait) and (any-pointer: coarse) and (max-width: 600px)"
      ).matches
    );
  }

  function setDemoReelPhoneVolumeOpen2(open) {
    var mute = document.getElementById("demoReelMute2");
    var volume = document.getElementById("demoReelVolume2");
    var row = mute && mute.closest(".reel-controls2-row");
    var phonePortrait = isDemoReelPhonePortrait2();
    var shouldOpen = !!open && phonePortrait;

    if (row) {
      row.classList.toggle("is-volume-open2", shouldOpen);
    }

    if (mute) {
      if (phonePortrait) {
        mute.setAttribute("aria-label", "Volume");
        mute.setAttribute("title", "Volume");
        mute.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
      } else {
        mute.setAttribute("aria-label", "Mute demo reel");
        mute.setAttribute("title", "Mute");
        mute.removeAttribute("aria-expanded");
      }
    }

    if (volume) {
      volume.setAttribute("aria-hidden", shouldOpen || !phonePortrait ? "false" : "true");
      if (phonePortrait) {
        volume.tabIndex = shouldOpen ? 0 : -1;
      } else {
        volume.removeAttribute("tabindex");
      }
    }
  }

  function seekDemoReelTimelineFromClientX2(clientX, showPreview) {
    var video = getDemoReelVideo2();
    var timeline = document.getElementById("demoReelTimeline2");

    if (
      !video ||
      !timeline ||
      !Number.isFinite(video.duration) ||
      video.duration <= 0
    ) {
      return;
    }

    var rect = timeline.getBoundingClientRect();
    if (!rect.width) return;

    var localX = Math.max(0, Math.min(rect.width, clientX - rect.left));
    var ratio = localX / rect.width;
    var seconds = ratio * video.duration;

    timeline.value = String(Math.round(ratio * 1000));

    try {
      video.currentTime = seconds;
    } catch (error) {}

    demoReelCurrentTime2 = seconds;
    updateDemoReelControlState2();
    updateDemoReelActiveTimestamp2(seconds, true);
    showDemoReelControls2(true);

    if (showPreview) {
      updateDemoReelPreview2({ clientX: rect.left + localX });
    }
  }

  function beginDemoReelTimelineScrub2() {
    var video = getDemoReelVideo2();
    var wrap = getDemoReelWrap2();

    if (!video || !video.src || demoReelTimelineScrubbing2) return;

    demoReelTimelineScrubbing2 = true;
    demoReelTimelineWasPlaying2 = !video.paused && !video.ended;

    // Holding the frame still while dragging makes the thumbnail preview and
    // the eventual seek target much easier to read. Resume automatically only
    // when playback was running before the scrub began.
    if (demoReelTimelineWasPlaying2) {
      video.pause();
    }

    if (wrap) wrap.classList.add("is-scrubbing");
    showDemoReelControls2(true);
  }

  function finishDemoReelTimelineScrub2(hidePreview) {
    var video = getDemoReelVideo2();
    var wrap = getDemoReelWrap2();

    if (!demoReelTimelineScrubbing2) {
      if (hidePreview) hideDemoReelPreview2();
      return;
    }

    demoReelTimelineScrubbing2 = false;
    if (wrap) wrap.classList.remove("is-scrubbing");

    if (hidePreview) hideDemoReelPreview2();

    var shouldResume = !!(
      video &&
      video.src &&
      demoReelTimelineWasPlaying2
    );

    demoReelTimelineWasPlaying2 = false;

    if (shouldResume) {
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {});
      }
    } else {
      showDemoReelControls2(true);
    }
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

    window.addEventListener(
      "resize",
      updateDemoReelWatermarkPosition2,
      { passive: true }
    );
    window.addEventListener(
      "resize",
      function () {
        setDemoReelPhoneVolumeOpen2(false);
      },
      { passive: true }
    );
    setDemoReelPhoneVolumeOpen2(false);
    document.addEventListener(
      "fullscreenchange",
      updateDemoReelWatermarkPosition2
    );
    document.addEventListener(
      "webkitfullscreenchange",
      updateDemoReelWatermarkPosition2
    );

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

    wrap.addEventListener("pointerdown", function () {
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

        // Pointer seeking is owned by the clientX calculation below. Ignoring
        // native range input during an active pointer keeps hover preview,
        // click, and drag on the exact same timeline geometry.
        if (demoReelTimelinePointerActive2) return;

        if (!demoReelTimelineScrubbing2) {
          beginDemoReelTimelineScrub2();
        }

        var seconds =
          (Number(timeline.value) / 1000) * video.duration;

        video.currentTime = seconds;
        demoReelCurrentTime2 = seconds;
        updateDemoReelControlState2();
        updateDemoReelActiveTimestamp2(seconds, true);
      });

      timeline.addEventListener("pointerdown", function (event) {
        demoReelTimelinePointerActive2 = true;
        demoReelTimelinePointerId2 = event.pointerId;
        demoReelTimelinePointerType2 = event.pointerType || "mouse";
        demoReelTimelineTouchSeeking2 =
          demoReelTimelinePointerType2 !== "mouse";

        beginDemoReelTimelineScrub2();
        showDemoReelControls2(true);

        // Prevent the browser range control from independently choosing a
        // slightly different point on its inset track. One clientX mapping now
        // drives preview, click, and drag for mouse, pen, and touch.
        if (event.cancelable) event.preventDefault();

        try {
          timeline.focus({ preventScroll: true });
        } catch (focusError) {
          timeline.focus();
        }

        seekDemoReelTimelineFromClientX2(event.clientX, true);

        if (timeline.setPointerCapture) {
          try {
            timeline.setPointerCapture(event.pointerId);
          } catch (captureError) {}
        }
      });

      timeline.addEventListener("pointermove", function (event) {
        if (demoReelTimelinePointerActive2) {
          if (event.cancelable) event.preventDefault();
          seekDemoReelTimelineFromClientX2(event.clientX, true);
          return;
        }

        // Desktop look-ahead remains hover-only: moving across the timeline
        // previews without pausing or seeking until the pointer goes down.
        if (!event.pointerType || event.pointerType === "mouse") {
          updateDemoReelPreview2(event);
        }
      });

      timeline.addEventListener("pointerenter", function (event) {
        if (event.pointerType && event.pointerType !== "mouse") {
          return;
        }

        updateDemoReelPreview2(event);
      });

      timeline.addEventListener("pointerleave", function () {
        if (demoReelTimelinePointerActive2) return;
        hideDemoReelPreview2();
      });

      var finishTimelinePointer2 = function (event) {
        if (
          demoReelTimelinePointerId2 !== null &&
          event.pointerId !== demoReelTimelinePointerId2
        ) {
          return;
        }

        var touchLike =
          event.pointerType && event.pointerType !== "mouse";

        demoReelTimelinePointerActive2 = false;
        demoReelTimelinePointerId2 = null;
        demoReelTimelinePointerType2 = "";
        demoReelTimelineTouchSeeking2 = false;

        // Keep a desktop hover preview visible while the mouse remains over
        // the timeline. Touch/pen previews disappear when the drag is released.
        finishDemoReelTimelineScrub2(!!touchLike);
        scheduleDemoReelControlsHide2();
      };

      timeline.addEventListener("change", function () {
        // Covers non-pointer range changes from accessibility/browser input.
        if (!demoReelTimelinePointerActive2) {
          finishDemoReelTimelineScrub2(true);
        }
      });

      timeline.addEventListener("pointerup", finishTimelinePointer2);
      timeline.addEventListener("pointercancel", finishTimelinePointer2);
      timeline.addEventListener("lostpointercapture", function () {
        if (!demoReelTimelinePointerActive2) return;

        var hidePreview = demoReelTimelinePointerType2 !== "mouse";

        demoReelTimelinePointerActive2 = false;
        demoReelTimelinePointerId2 = null;
        demoReelTimelinePointerType2 = "";
        demoReelTimelineTouchSeeking2 = false;

        finishDemoReelTimelineScrub2(hidePreview);
        scheduleDemoReelControlsHide2();
      });
    }

    if (mute) {
      mute.addEventListener("click", function (event) {
        event.stopPropagation();

        if (isDemoReelPhonePortrait2()) {
          var row = mute.closest(".reel-controls2-row");
          var isOpen = !!(
            row && row.classList.contains("is-volume-open2")
          );

          setDemoReelPhoneVolumeOpen2(!isOpen);
          showDemoReelControls2(true);
          return;
        }

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
        showDemoReelControls2(true);
      });

      volume.addEventListener("change", function () {
        if (isDemoReelPhonePortrait2()) {
          /* Keep the pop-up open after a finger adjustment. Closing a
             vertical slider on pointer release makes repeated tweaks far
             too fiddly on a phone. It closes on an outside tap instead. */
          showDemoReelControls2(true);
        }
      });
    }

    document.addEventListener("pointerdown", function (event) {
      if (!isDemoReelPhonePortrait2()) return;

      var row = mute && mute.closest(".reel-controls2-row");
      if (!row || !row.classList.contains("is-volume-open2")) {
        return;
      }

      if (event.target === mute || event.target === volume ||
          (mute && mute.contains(event.target))) {
        return;
      }

      setDemoReelPhoneVolumeOpen2(false);
      scheduleDemoReelControlsHide2(1200);
    }, true);

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
              // Keep native/browser-supplied PiP affordances disabled during
              // ordinary viewing. Temporarily enable the API only when the
              // user deliberately presses our custom PiP control.
              video.disablePictureInPicture = false;
              video.removeAttribute("disablepictureinpicture");
              await video.requestPictureInPicture();
            }
          } catch (error) {
            video.disablePictureInPicture = true;
            video.setAttribute("disablepictureinpicture", "");
          }
        });

        video.addEventListener("enterpictureinpicture", function () {
          pip.setAttribute("aria-pressed", "true");
        });

        video.addEventListener("leavepictureinpicture", function () {
          pip.setAttribute("aria-pressed", "false");
          video.disablePictureInPicture = true;
          video.setAttribute("disablepictureinpicture", "");
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
    document.addEventListener("webkitfullscreenchange", function () {
      updateDemoReelFullscreenButton2();
    });

    // Native iPhone video fullscreen does not reliably fire the document-level
    // fullscreen events, so track the WebKit video events as well.
    video.addEventListener("webkitbeginfullscreen", function () {
      updateDemoReelFullscreenButton2();
      updateDemoReelWatermarkPosition2();
    });
    video.addEventListener("webkitendfullscreen", function () {
      updateDemoReelFullscreenButton2();
      updateDemoReelWatermarkPosition2();
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
    var mute = document.getElementById("demoReelMute2");
    var row = mute && mute.closest(".reel-controls2-row");
    var phoneVolumeOpen = !!(
      isDemoReelPhonePortrait2() &&
      row &&
      row.classList.contains("is-volume-open2")
    );

    if (
      !video ||
      !wrap ||
      video.paused ||
      demoReelTimelinePointerActive2 ||
      phoneVolumeOpen
    ) {
      return;
    }

    clearTimeout(demoReelControlsHideTimer2);

    demoReelControlsHideTimer2 = setTimeout(function () {
      if (document.activeElement &&
          wrap.contains(document.activeElement)) {
        return;
      }

      wrap.classList.remove("controls-visible");
    }, typeof delay === "number" ? delay : 2300);
  }

  function scheduleDemoReelBuffering2(delay) {
    var video = getDemoReelVideo2();
    var wrap = getDemoReelWrap2();

    if (!video || !wrap || video.paused || video.ended) return;

    clearTimeout(demoReelBufferingTimer2);

    demoReelBufferingTimer2 = setTimeout(function () {
      // `stalled` only means the browser stopped receiving media data; it can
      // fire while plenty of already-buffered video remains playable. Only
      // show the spinner when playback is still active AND the media element
      // no longer has future decoded data available (readyState < 3).
      if (
        !video.paused &&
        !video.ended &&
        (video.seeking || video.readyState < 3)
      ) {
        wrap.classList.add("is-buffering");
        showDemoReelControls2(true);
      } else {
        wrap.classList.remove("is-buffering");
      }
    }, typeof delay === "number" ? delay : 180);
  }

  function hideDemoReelBuffering2() {
    var wrap = getDemoReelWrap2();

    clearTimeout(demoReelBufferingTimer2);
    demoReelBufferingTimer2 = null;

    if (wrap) wrap.classList.remove("is-buffering");
  }

  function updateDemoReelBufferedState2() {
    var video = getDemoReelVideo2();
    var timeline = document.getElementById("demoReelTimeline2");

    if (!video || !timeline) return;

    var duration = Number.isFinite(video.duration)
      ? video.duration
      : 0;

    var bufferedEnd = 0;

    if (duration > 0 && video.buffered && video.buffered.length) {
      try {
        bufferedEnd = video.buffered.end(video.buffered.length - 1);
      } catch (error) {
        bufferedEnd = 0;
      }
    }

    var bufferedRatio = duration > 0
      ? Math.max(0, Math.min(1, bufferedEnd / duration))
      : 0;

    var currentRatio = duration > 0
      ? Math.max(0, Math.min(1, video.currentTime / duration))
      : 0;

    bufferedRatio = Math.max(bufferedRatio, currentRatio);

    timeline.style.setProperty(
      "--buffered",
      (bufferedRatio * 100).toFixed(3) + "%"
    );
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
      updateDemoReelBufferedState2();
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

  function updateDemoReelPreviewFromTimeline2() {
    var timeline = document.getElementById("demoReelTimeline2");

    if (!timeline) return;

    var rect = timeline.getBoundingClientRect();
    var min = Number(timeline.min || 0);
    var max = Number(timeline.max || 1000);
    var value = Number(timeline.value || min);
    var span = max - min;
    var ratio = span > 0
      ? Math.max(0, Math.min(1, (value - min) / span))
      : 0;

    updateDemoReelPreview2({
      clientX: rect.left + rect.width * ratio
    });
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
      var fullscreenElement =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        null;

      if (fullscreenElement) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
        return;
      }

      if (wrap.requestFullscreen) {
        await wrap.requestFullscreen();
      } else if (wrap.webkitRequestFullscreen) {
        wrap.webkitRequestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        // iPhone Safari/WebKit enters native video fullscreen through the
        // HTMLVideoElement API. Keep this directly inside the button gesture.
        video.webkitEnterFullscreen();
      } else if (video.requestFullscreen) {
        await video.requestFullscreen();
      }
    } catch (error) {}
  }

  function updateDemoReelFullscreenButton2() {
    var button = document.getElementById("demoReelFullscreen2");
    var wrap = getDemoReelWrap2();
    var video = getDemoReelVideo2();

    if (!button) return;

    var active = !!(
      (wrap && document.fullscreenElement === wrap) ||
      (wrap && document.webkitFullscreenElement === wrap) ||
      (video && video.webkitDisplayingFullscreen === true)
    );

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

  function isDemoReelTouchLandscape2() {
    return !!(
      window.matchMedia &&
      window.matchMedia(
        "(orientation: landscape) and (any-pointer: coarse)"
      ).matches
    );
  }

  function keepDemoReelTimestampPageVisible2(list, button) {
    if (!list || !button || !list.clientHeight) return;

    var listRect = list.getBoundingClientRect();
    var buttonRect = button.getBoundingClientRect();
    var buttonTop =
      list.scrollTop + (buttonRect.top - listRect.top);
    var buttonBottom = buttonTop + buttonRect.height;
    var viewTop = list.scrollTop;
    var viewBottom = viewTop + list.clientHeight;
    var tolerance = 1;

    // Stay put while the active row is completely visible.
    if (
      buttonTop >= viewTop - tolerance &&
      buttonBottom <= viewBottom + tolerance
    ) {
      return;
    }

    // Forward playback: the first row beyond the current visible group
    // becomes the first row of the next group immediately.
    if (buttonTop >= viewBottom - tolerance) {
      list.scrollTop = Math.max(0, buttonTop);
      return;
    }

    // Backward playback/scrubbing: reveal the previous group with the
    // newly active row aligned to the bottom of the visible page.
    if (buttonBottom <= viewTop + tolerance) {
      list.scrollTop = Math.max(
        0,
        buttonBottom - list.clientHeight
      );
      return;
    }

    // Handles partially clipped rows caused by variable-height labels.
    if (buttonBottom > viewBottom) {
      list.scrollTop = Math.max(0, buttonTop);
    } else if (buttonTop < viewTop) {
      list.scrollTop = Math.max(
        0,
        buttonBottom - list.clientHeight
      );
    }
  }

  function keepDemoReelTimestampVisible2(button) {
    var timestampContainer = document.getElementById("reelTimestamps2");

    if (!timestampContainer || !button) return;

    var list = timestampContainer.querySelector(
      ".reel-timestamps2-list"
    );

    if (!list) return;

    if (isDemoReelTouchLandscape2()) {
      keepDemoReelTimestampPageVisible2(list, button);
      return;
    }

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
    var app = document.getElementById("app2");
    var toggleButton = timestampContainer.querySelector(
      ".reel-timestamps2-toggle"
    );

    if (app) {
      app.classList.toggle("is-breakdown-open", isOpen);
    }

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

    var app = document.getElementById("app2");
    if (app) {
      app.classList.toggle("is-breakdown-open", wasOpen);
    }

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
      p.classList.remove("is-breakdown-open");
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

      demoReelTimelinePointerActive2 = false;
      demoReelTimelinePointerId2 = null;
      demoReelTimelinePointerType2 = "";
      demoReelTimelineTouchSeeking2 = false;
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

