// AUTO-GENERATED FILE — DO NOT EDIT DIRECTLY.
// Edit src/projects-gallery-master.js and rebuild instead.

const galleryStyles = document.createElement("style");
galleryStyles.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');

#app3 {
font-family: Space Mono, sans-serif;
width: 100%;

/* ---------- Gallery Theme Variables ---------- */
--gallery-bg: #F3E9D7;
--gallery-text: #4F4F4F;
--gallery-accent: #EDB33B;
--gallery-modal-text: #4F4F4F;
--gallery-overlay: rgba(0,0,0,.33);

--gallery-border: 3px solid var(--gallery-text);
--gallery-border-thin: 2px solid var(--gallery-text);

--gallery-shadow-none: 0 0 0 var(--gallery-text);
--gallery-shadow-small: .20rem .20rem 0 var(--gallery-text);
--gallery-shadow-tag: .10rem .10rem 0 var(--gallery-text);
--gallery-shadow-card: .26rem .26rem 0 var(--gallery-text);
--gallery-shadow-hover: .30rem .30rem 0 var(--gallery-text);
--gallery-shadow-card-hover: 7px 7px 0 var(--gallery-text);
--gallery-shadow-modal: 8px 8px 0 var(--gallery-text);
  
--gallery-transition: all 0.18s ease-out;
--gallery-transition-card: all 0.18s ease-in-out;

/* ---------- Gallery / Modal Variables ---------- */
--modal-width: clamp(956px, 79vw, 1066px);
--modal-edge-gap: clamp(50px, 4.5vw, 60px);

--modal-padding-y: 20px;
--modal-padding-x: 28px;
--modal-vertical-edge-gap: 40px;

--modal-poster-column: clamp(300px, 25vw, 340px);
--modal-gap: clamp(26px, 2.2vw, 30px);

--modal-font-size: 16px;
--modal-h2-size: 18px;
--modal-title-size: 25px;
--modal-label-size: 12px;
--modal-tag-size: 9px;
--modal-reel-button-size: 12px;
--modal-shortcuts-size: 11px;

--modal-radius: 16px;
--modal-control-radius: 8px;

--mobile-modal-top: 70px;
--mobile-modal-edge-gap: clamp(36px, 8vw, 64px);
--mobile-modal-height-gap: 140px;
--mobile-modal-padding: 12px;
--mobile-modal-font-size: 13.5px;
--mobile-title-size: 15px;
--mobile-title-height: 44px;
--mobile-card-gutter: 10px;
--mobile-content-gap: 8px;
--mobile-poster-max-width: 440px;

--gallery-card-title-size: 14px;
--gallery-card-title-height: 58px;
--gallery-card-title-padding-x: 5px;
}

/* ---------- Fluid Desktop Modal ---------- */

@media (min-width: 769px) and (hover: hover) and (pointer: fine) {
  #app3 {
    --modal-width: clamp(760px, calc(45vw + 420px), 1066px);
    --modal-edge-gap: clamp(28px, 4vw, 60px);

    --modal-padding-y: clamp(14px, 1.5vw, 20px);
    --modal-padding-x: clamp(16px, 1.8vw, 28px);

    --modal-poster-column: clamp(220px, 25vw, 340px);
    --modal-gap: clamp(16px, 2vw, 30px);

    --modal-font-size: clamp(12px, 1.15vw, 16px);
    --modal-title-size: clamp(17px, 1.8vw, 25px);
    --modal-label-size: clamp(9px, 0.9vw, 12px);
    --modal-tag-size: clamp(8px, 0.7vw, 9px);
    --modal-reel-button-size: clamp(10px, 0.85vw, 12px);
    --modal-shortcuts-size: clamp(9px, 0.8vw, 11px);
  }
}

/* Hide scrollbars everywhere, but keep scrolling */
html,
body,
* {
scrollbar-width: none !important;
-ms-overflow-style: none !important;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar,
*::-webkit-scrollbar {
display: none !important;
width: 0 !important;
height: 0 !important;
background: transparent !important;
}

html,
body {
overflow-x: hidden !important;
}

.title-container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.title {
font-family: Space Mono, sans-serif;
font-size: 30pt;
font-weight: bold;
}

#app3 .project-title {
font-family: Unbounded, sans-serif;
font-size: var(--gallery-card-title-size);
font-weight: 550;
background: var(--gallery-bg);
letter-spacing: -0.05em;
text-transform: uppercase;
line-height: 1.1;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: var(--gallery-card-title-height);
padding: 0 var(--gallery-card-title-padding-x);
box-sizing: border-box;
margin-top: 0;
}

#app3 a:link {
color: var(--gallery-text);
text-decoration: none;
}

#app3 a:visited {
color: var(--gallery-text);
text-decoration: none;
}

#app3 a:hover {
color: var(--gallery-accent);
text-decoration: none;
}

#app3 a:active {
text-decoration: none;
}

#app3 .filter {
font-family: Unbounded, sans-serif;
padding: 6px 12px;
margin: 0px;
cursor: pointer;
background: var(--gallery-bg);
font-weight: 700;
color: var(--gallery-text);
-webkit-text-fill-color: var(--gallery-text);
-webkit-appearance: none;
appearance: none;

border: var(--gallery-border);
border-radius: 0.5rem;
box-shadow: var(--gallery-shadow-small);
transition:
background-color 0.18s ease-out,
color 0.18s ease-out,
transform 0.18s ease-out,
box-shadow 0.18s ease-out;
}

#app3 .filters {
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 8px;
}

#app3 .filter:active {
  outline: none;
  background: var(--gallery-accent);
  transform: translate(2px, 2px);
  box-shadow: var(--gallery-shadow-none);
}

#app3 .filter:focus-visible {
  outline: none;
  background: var(--gallery-accent);
  color: var(--gallery-text);
  -webkit-text-fill-color: var(--gallery-text);
  transform: translate(-2px, -2px);
  box-shadow: var(--gallery-shadow-hover);
}

@media (hover: hover) and (pointer: fine) {
#app3 .filter:hover {
background: var(--gallery-accent);
transform: translate(-2px, -2px);
box-shadow: var(--gallery-shadow-hover);
}
}

#app3 .filter.active,
#app3 .filter.active:focus-visible {
background: var(--gallery-accent);
color: var(--gallery-text);
-webkit-text-fill-color: var(--gallery-text);
transform: translate(2px, 2px);
box-shadow:
  1px 1px 0 var(--gallery-text),
  inset 0 1px 0 rgba(79, 79, 79, 0.14);
}

#app3 .projects {
margin-bottom: 50px;
margin-top: 18px;
display: flex;
flex-wrap: wrap;
justify-content: center;
}

/* ---------- Empty Gallery State ---------- */

#app3 .empty-results {
  width: min(520px, calc(100% - 32px));
  margin: 42px auto 70px;
  padding: 28px 24px 26px;
  box-sizing: border-box;
  text-align: center;

  background: var(--gallery-bg);
  border: var(--gallery-border);
  border-radius: 1rem;
  box-shadow: var(--gallery-shadow-card);
}

#app3 .empty-results-title {
  font-family: Unbounded, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: var(--gallery-text);
}

#app3 .empty-results-copy {
  margin-top: 10px;
  font-family: Space Mono, monospace;
  font-size: 13px;
  line-height: 1.45;
  color: var(--gallery-text);
  opacity: 0.72;
}

#app3 .empty-results-reset {
  margin-top: 18px;
  padding: 8px 14px;

  font-family: Unbounded, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: -0.05em;
  text-transform: uppercase;

  cursor: pointer;
  background: var(--gallery-bg);
  color: var(--gallery-text);
  -webkit-text-fill-color: var(--gallery-text);

  border: var(--gallery-border);
  border-radius: var(--modal-control-radius);
  box-shadow: var(--gallery-shadow-small);

  transition:
    background-color 0.18s ease-out,
    color 0.18s ease-out,
    transform 0.18s ease-out,
    box-shadow 0.18s ease-out;
}

@media (hover: hover) and (pointer: fine) {
  #app3 .empty-results-reset:hover,
  #app3 .empty-results-reset:focus-visible {
    outline: none;
    background: var(--gallery-accent);
    color: var(--gallery-text);
    -webkit-text-fill-color: var(--gallery-text);
    transform: translate(-2px, -2px);
    box-shadow: var(--gallery-shadow-hover);
  }
}

#app3 .empty-results-reset:active {
  transform: translate(2px, 2px);
  box-shadow:
    1px 1px 0 var(--gallery-text),
    inset 0 1px 0 rgba(79, 79, 79, 0.14);
}

#app3 .emptyfade-enter-active,
#app3 .emptyfade-leave-active {
  transition: opacity 0.18s ease-out;
}

#app3 .emptyfade-enter,
#app3 .emptyfade-leave-to {
  opacity: 0;
}

#app3 .project.projects-enter-active,
#app3 .project.projects-leave-active {
transition:
transform 0.35s ease,
opacity 0.35s ease;
}

#app3 .project.projects-enter {
transform:
translate3d(
  var(--project-enter-x, 0px),
  var(--project-enter-y, -80px),
  0
)
scale(var(--project-enter-scale, 0.5));
opacity: 0;
}

#app3 .project.projects-enter-to,
#app3 .project.projects-leave {
transform: translate3d(0, 0, 0) scale(1);
opacity: 1;
}

#app3 .project.projects-leave-to {
transform: translate3d(0, 30px, 0);
opacity: 0;
}

#app3 .project.projects-leave-active {
position: absolute;
z-index: -1;
pointer-events: none;
}

#app3 .project.projects-move {
transition: transform 0.35s ease !important;
will-change: transform;
}


/* ---------- Mobile Column Project Filter Leave Visibility ---------- */

@media (max-width: 560px) and (hover: none),
       (max-width: 560px) and (pointer: coarse) {
  #app3 .project.projects-leave-active {
    z-index: -1;
    pointer-events: none;
  }
}

@media (max-width: 480px) {
  #app3 .projects {
    position: relative;
  }

  #app3 .projects-leave-active {
    z-index: 0;
    pointer-events: none;
  }
}

#app3 .project {
transition:
  transform 0.18s ease-out,
  box-shadow 0.18s ease-out;
margin: 10px;
box-shadow: var(--gallery-shadow-card);
border: var(--gallery-border);
border-radius: 1.15em;
width: 190px;
height: 250px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center !important;
overflow: hidden;
background: var(--gallery-bg);
transform: translate3d(0, 0, 0);
will-change: transform;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
}


#app3 .project-card-inner {
display: block;
width: 100%;
height: 100%;
color: var(--gallery-text);
text-decoration: none;
}

#app3 .project:focus-visible {
outline: none;
transform: translate3d(-2px, -2px, 0);
box-shadow: var(--gallery-shadow-card-hover);
}


#app3 .project-modal,
#app3 .project-modal:focus,
#app3 .project-modal:focus-visible {
outline: none !important;
}

#app3 .project:hover {
transform: translate3d(-2px, -2px, 0);
box-shadow: var(--gallery-shadow-card-hover);
cursor: pointer;
}


#app3 .projects.is-grid-hover-locked .project {
pointer-events: none;
}

#app3 .projects.is-grid-hover-locked .project:hover {
transform: none;
box-shadow: var(--gallery-shadow-card);
cursor: default;
}

#app3 .project.active {
transform: translate(2px, 2px);
box-shadow: var(--gallery-shadow-none);
background: var(--gallery-accent);
}

#app3 .project.active .project-title {
background: transparent;
color: var(--gallery-bg);
-webkit-text-fill-color: var(--gallery-bg);
text-decoration: none;
}

#app3 .project:active {
transform: translate(2px, 2px);
box-shadow: var(--gallery-shadow-none);
}

#app3 .project.active:hover,
#app3 .project.active:focus-visible {
transform: translate(2px, 2px);
box-shadow: var(--gallery-shadow-none);
}

/* ---------- Project / Modal Focus Outline Cleanup ---------- */

#app3 .project,
#app3 .project *,
#app3 .project:focus,
#app3 .project:focus-visible,
#app3 .project:active,
#app3 .project-card-inner,
#app3 .project-card-inner:focus,
#app3 .project-card-inner:active,
#app3 .project-modal,
#app3 .project-modal *,
#app3 .project-modal:focus,
#app3 .project-modal:focus-visible {
outline: none !important;
-webkit-tap-highlight-color: transparent;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;
}

#app3 .project-image-wrapper {
position: relative;
width: 100%;
background:
linear-gradient(135deg, rgba(79, 79, 79, 0.08), rgba(79, 79, 79, 0.02));
}

.gradient-overlay {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 180px;
opacity: 0.01;
background: linear-gradient(to bottom, rgba(0, 210, 247, 0.65) 0%, rgba(0, 210, 247, 0.64) 1%, rgba(0, 0, 0, 0) 100%),
linear-gradient(to top, rgba(247, 0, 156, 0.65) 0%, rgba(247, 0, 156, 0.64) 1%, rgba(0, 0, 0, 0) 100%);
}

#app3 img {
-webkit-user-drag: none;
user-select: none;
}

#app3 .project-image {
display: block;
width: 100%;
height: 180px;
aspect-ratio: 19 / 18;
object-fit: cover;
padding-bottom: 0;
border-radius: 0;
opacity: 0;
transition: opacity 0.22s ease;
}

#app3 .project-image.is-loaded {
opacity: 1;
}

#app3 .project {
isolation: isolate;
}

#app3 .gallery-controls {
display: grid;
grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
align-items: center;
column-gap: 14px;
width: 100%;
margin-top: 20px;
}

#app3 .gallery-controls-search {
grid-column: 2;
justify-self: center;
}

#app3 .gallery-controls-tag {
grid-column: 3;
justify-self: start;
align-self: stretch;
min-width: 0;
display: flex;
align-items: center;
}

#app3 .gallery-controls .search-wrapper {
margin-top: 0;
}

#app3 .gallery-controls .active-tag-filter {
margin-top: 0;
padding: 0;
align-items: center;
}

#app3 .limited-card-note {
  width: 100%;
  max-width: 680px;
  box-sizing: border-box;
  margin: 12px auto 0;
  padding: 0 16px;

  font-family: "Space Mono", monospace;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.03em;
  text-align: center;

  color: #4F4F4F;
}

@media (max-width: 560px) {
  #app3 .limited-card-note {
    max-width: 360px;
    margin-top: 12px;
    padding: 0 14px;
    font-size: 12px;
    line-height: 1.55;
  }
}

.search-wrapper {
  position: relative;
  display: inline-block;
  transition: transform 0.18s ease-out;
}

#app3 .search-wrapper:focus-within,
#app3 .search-wrapper.is-search-active {
  transform: translate(2px, 2px);
}

/* Search magnifying-glass icon */
#app3 .search-wrapper::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 14px;
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid rgba(79, 79, 79, 0.55);
  border-radius: 50%;
  transform: translateY(-60%);
  pointer-events: none;
  z-index: 2;
}

#app3 .search-wrapper::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 24px;
  width: 7px;
  height: 2px;
  background: rgba(79, 79, 79, 0.55);
  border-radius: 1px;
  transform: translateY(3px) rotate(45deg);
  transform-origin: left center;
  pointer-events: none;
  z-index: 2;
}

#app3 .project-search {
outline: none;
font-family: Space Mono, sans-serif;
padding: 8px 42px 8px 38px;
width: 220px;
box-sizing: border-box;
background: var(--gallery-bg);
border: var(--gallery-border);
border-radius: 0.5rem;
box-shadow: var(--gallery-shadow-small);
transition: var(--gallery-transition);
}

#app3 .project-search:focus,
#app3 .search-wrapper.is-search-active .project-search {
outline: none;
box-shadow:
  1px 1px 0 var(--gallery-text),
  inset 0 2px 0 rgba(79, 79, 79, 0.14);
}

#app3 .project-search-clear {
position: absolute;
top: 50%;
right: 13px;
transform: translateY(-50%);
display: flex;
align-items: center;
justify-content: center;
width: 22px;
height: 22px;
font-family: Unbounded, sans-serif;
font-size: 14px;
line-height: 1;
font-weight: 700;
cursor: pointer;
background: var(--gallery-bg);
color: var(--gallery-text);
-webkit-text-fill-color: var(--gallery-text);
border: var(--gallery-border-thin);
border-radius: 7px;
box-shadow: var(--gallery-shadow-tag);
transition:
background-color 0.18s ease,
color 0.18s ease,
transform 0.18s ease,
box-shadow 0.18s ease;
-webkit-appearance: none;
appearance: none;
padding: 0;
}

#app3 .project-search-clear:hover,
#app3 .project-search-clear:focus-visible {
outline: none;
background: var(--gallery-accent);
color: var(--gallery-text);
-webkit-text-fill-color: var(--gallery-text);
transform: translateY(-50%);
box-shadow: .16rem .16rem 0 var(--gallery-text);
}

#app3 .project-search-clear:active {
transform: translateY(-50%) translate(1px, 1px);
box-shadow: var(--gallery-shadow-none);
}


#app3 .project-search::placeholder,
#app3 .project-search::-webkit-input-placeholder {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 100;
  font-family: Unbounded, sans-serif;
  opacity: 1;
}

#app3 .project-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin: 18px 0 0 0;
}

#app3 .project-tag,
#app3 .active-tag-filter button {
font-family: Unbounded, sans-serif;
font-size: var(--modal-tag-size);
padding: 3px 7px;
font-weight: 700;
letter-spacing: -0.05em;
text-transform: uppercase;
background: var(--gallery-bg);
color: var(--gallery-text);
-webkit-text-fill-color: var(--gallery-text);
border: var(--gallery-border-thin);
border-radius: var(--modal-control-radius);
box-shadow: var(--gallery-shadow-tag);
cursor: pointer;
transition:
background-color 0.18s ease-out,
color 0.18s ease-out,
transform 0.18s ease-out,
box-shadow 0.18s ease-out;
}

#app3 .project-tag:not(.active):hover,
#app3 .project-tag:not(.active):focus-visible,
#app3 .active-tag-filter button:hover,
#app3 .active-tag-filter button:focus-visible {
background: var(--gallery-accent);
color: var(--gallery-text);
-webkit-text-fill-color: var(--gallery-text);
transform: translate(-1px, -1px);
box-shadow: .16rem .16rem 0 var(--gallery-text);
}

/* Firefox: preserve tag lift without animating text with transform */
@supports (-moz-appearance: none) {
  @media (hover: hover) and (pointer: fine) {
    #app3 .project-tag:not(.active),
    #app3 .active-tag-filter button {
      position: relative;
      top: 0;
      left: 0;
      transform: none;

      transition:
        background-color 0.18s ease-out,
        color 0.18s ease-out,
        top 0.18s ease-out,
        left 0.18s ease-out,
        box-shadow 0.18s ease-out;
    }

    #app3 .project-tag:not(.active):hover,
    #app3 .project-tag:not(.active):focus-visible,
    #app3 .active-tag-filter button:hover,
    #app3 .active-tag-filter button:focus-visible {
      top: -1px;
      left: -1px;
      transform: none;
    }
  }
}

#app3 .project-tag.active,
#app3 .project-tag.active:focus-visible {
background: var(--gallery-accent);
color: var(--gallery-text);
-webkit-text-fill-color: var(--gallery-text);
transform: translate(1px, 1px);
box-shadow:
  inset 0 1px 0 rgba(79, 79, 79, 0.14);
}

#app3 .active-tag-filter {
font-family: Unbounded, sans-serif;
font-size: 0.65rem;
font-weight: 700;
letter-spacing: -0.05em;
text-transform: uppercase;
display: flex;
align-items: center;
gap: 8px;
margin-top: 14px;
color: var(--gallery-text);
}

#app3 .active-tag-filter {
max-height: none;
overflow: visible;
padding: 0 6px 6px 0;
}

#app3 .active-tag-space {
min-height: 0;
}

#app3 .tagfade-enter-active,
#app3 .tagfade-leave-active {
transition:
opacity 0.18s ease,
transform 0.18s ease;
}

#app3 .tagfade-enter {
opacity: 0;
transform: translateX(-8px);
}

#app3 .tagfade-leave-to {
opacity: 0;
transform: translateX(-4px);
}

#app3 .tagfade-enter-to,
#app3 .tagfade-leave {
opacity: 1;
transform: translateX(0);
}

/* ---------- Stable Modal Backdrop ---------- */

#app3 .project-modal-layer {
  position: fixed;
  inset: 0;
  z-index: 9998;
}

#app3 .project-modal-backdrop {
  position: fixed;
  inset: 0;

  background: var(--gallery-overlay);

  pointer-events: none;
}

#app3 .project-modal-overlay {
  position: fixed;
  inset: 0;

  background: transparent;
  z-index: 1;

  overscroll-behavior: none;
  touch-action: none;
}

#app3 .project-modal {
font-family: Space Mono, sans-serif;
color: var(--gallery-modal-text);
font-size: var(--modal-font-size);
letter-spacing: -0.05em;
text-align: left;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: min(var(--modal-width), calc(100vw - var(--modal-edge-gap)));
max-width: none;
box-sizing: border-box;
max-height: calc(100vh - 80px);
overflow-y: auto;
overflow-anchor: none;
padding: var(--modal-padding-y) var(--modal-padding-x);
background: var(--gallery-bg);
border: var(--gallery-border);
border-radius: var(--modal-radius);
box-shadow: var(--gallery-shadow-modal);
z-index: 9999;
overscroll-behavior: contain;
touch-action: pan-y;
}



@media (min-width: 769px) and (hover: hover) and (pointer: fine) {

  #app3 .project-modal-overlay.modal-overlay-scroll {
    overflow-y: auto;
    overflow-x: hidden;
    touch-action: pan-y;
    overscroll-behavior: contain;
    padding-top: var(--modal-anchor-top, 40px);
    padding-bottom: 40px;
    box-sizing: border-box;

    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  #app3 .project-modal-overlay.modal-overlay-scroll::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  #app3 .project-modal-overlay.modal-overlay-scroll .project-modal.modal-top-anchored {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin: 0 auto;
    max-height: none;
    overflow-y: visible;
  }
}

#app3 .project-modal-content {
display: grid;
grid-template-columns: var(--modal-poster-column) 1fr;
gap: var(--modal-gap);
align-items: start;
}

#app3 .project-carousel-viewport {
  width: 100%;
  overflow: hidden;
  position: relative;
  clip-path: none;
}

#app3 .project-carousel-track {
position: relative;
width: 100%;
will-change: transform;
}

#app3 .project-carousel-card {
width: 100%;
box-sizing: border-box;
display: flow-root;
opacity: 1;
transition: none;
}

#app3 .project-carousel-card:not(.current-carousel-card) {
position: absolute;
top: 0;
left: 0;
pointer-events: none;
opacity: 1;
}

#app3 .previous-carousel-card {
transform: translateX(-100%);
}

#app3 .next-carousel-card {
transform: translateX(100%);
}

#app3 .project-modal {
overflow-x: hidden;
}

#app3 .project-modal {
scrollbar-width: none;
-ms-overflow-style: none;
}

#app3 .project-modal::-webkit-scrollbar {
display: none;
width: 0;
height: 0;
}

#app3 .project-modal-left {
text-align: center;
}

#app3 .project-modal-right {
text-align: left;
padding-top: 18px;
}

#app3 .project-modal p {
margin-bottom: 3px;
}

#app3 .project-modal-right p {
text-align: left;
}

#app3 .project-modal h2 {
text-align: left;
font-family: Unbounded, sans-serif;
font-size: var(--modal-h2-size);
font-weight: 700;
text-transform: uppercase;
color: var(--gallery-text);
margin-bottom: 20px;
}

#app3 .project-modal h2.desktop-title {
font-size: var(--modal-title-size);
line-height: 1.05;
}

#app3 .modal-title-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 18px;
  margin-bottom: 20px;
}

#app3 .modal-title-row .desktop-title {
  min-width: 0;
  margin-bottom: 0;
}

#app3 .project-counter {
  padding-top: 3px;
  white-space: nowrap;

  font-family: Space Mono, monospace;
  font-size: 11px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.08em;

  color: var(--gallery-text);
  opacity: 0.46;
}

#app3 .project-modal strong {
font-family: Unbounded, sans-serif;
font-size: var(--modal-label-size);
font-weight: 700;
text-transform: uppercase;
letter-spacing: -0.05em;
color: var(--gallery-text);
}

#app3 .project-details-divider {
  height: 0;
  margin: 12px 0 10px;
  border-top: 1px solid rgba(79, 79, 79, 0.38);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.42);
}

@media (min-width: 769px) and (max-width: 900px) and (hover: hover) and (pointer: fine) {
  #app3 .project-details-divider {
    margin-bottom: 6px;
  }

  #app3 .project-modal-right.has-project-reel .modal-title-row {
    margin-bottom: 14px;
  }

  #app3 .project-modal-right.has-project-reel .project-details-divider {
    margin: 8px 0 4px;
  }

  #app3 .project-modal-right.has-project-reel p,
  #app3 .project-modal-right.has-project-reel .project-summary {
    line-height: 1.38;
  }

  #app3 .project-modal-right.has-project-reel .project-tags {
    margin-top: 14px;
  }
}

#app3 .project-summary {
margin-top: 2px;
white-space: pre-line;
}

#app3 .project-modal-right p,
#app3 .project-summary {
letter-spacing: -0.03em;
line-height: 1.45;
}

#app3 .project-thumbnail-disclaimer {
margin-top: 14px;
font-size: 11px;
line-height: 1.4;
letter-spacing: -0.03em;
font-style: italic;
color: var(--gallery-text);
opacity: .62;
}

#app3 .project-details-divider,
#app3 .project-summary,
#app3 .project-thumbnail-disclaimer,
#app3 .project-tags {
  width: min(100%, 60ch);
  box-sizing: border-box;
}

#app3 .modal-poster {
width: 100%;
height: auto;
display: block;
margin: 16px auto 10px auto;
border-radius: 0;
box-shadow: 3px 3px 0 rgba(79, 79, 79, 0.22);
background:
linear-gradient(135deg, rgba(79, 79, 79, 0.08), rgba(79, 79, 79, 0.02));
opacity: 0;
transition: opacity 0.22s ease;
}

#app3 .modal-poster.is-loaded {
opacity: 1;
}

/* Consistent modal-poster fade for keyboard navigation */
@keyframes modalPosterKeyboardFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#app3 .modal-poster.keyboard-fade-in {
  animation: modalPosterKeyboardFade 0.22s ease-out both;
}

@media (prefers-reduced-motion: reduce) {
  #app3 .modal-poster.keyboard-fade-in {
    animation: none;
  }
}

#app3 .modal-poster.has-poster-art {
aspect-ratio: 2 / 3;
object-fit: cover;
}

#app3 .project-reel-button {
font-family: Unbounded, sans-serif;
text-transform: uppercase;
letter-spacing: -0.05em;
padding: 0;
box-sizing: border-box;
width: clamp(55px, 6.2vw, 65.333px);
height: clamp(55px, 6.2vw, 65.333px);
min-height: clamp(55px, 6.2vw, 65.333px);
padding: 0;
border: 2px solid var(--gallery-text);
border-radius: clamp(12px, 1.3vw, 14px);
box-shadow:
4px 4px 0 var(--gallery-text),
inset 0 1px 0 rgba(255, 255, 255, 0.30);
display: flex;
align-items: center;
justify-content: center;
white-space: nowrap;
line-height: 1;
cursor: pointer;
background: var(--gallery-bg);
margin: 20px auto 0 auto;
transition:
background-color 0.16s ease-out,
color 0.16s ease-out,
transform 0.10s ease-out,
box-shadow 0.10s ease-out;
font-size: var(--modal-reel-button-size);
font-weight: 700;
color: var(--gallery-text);
-webkit-text-fill-color: var(--gallery-text);
-webkit-appearance: none;
appearance: none;
touch-action: manipulation;
-webkit-tap-highlight-color: transparent;
}

#app3 .project-reel-icon {
  display: block;
  width: clamp(32px, 3.5vw, 36.8px);
  height: clamp(32px, 3.5vw, 36.8px);
  fill: currentColor;
  pointer-events: none;
}

#app3 .project-reel-icon-play {
  transform: none;
}

#app3 .project-reel-icon-chevron {
  transform: none;
}

@media (hover: hover) and (pointer: fine) {
  #app3 .project-reel-button:not(.active):hover,
  #app3 .project-reel-button:not(.active):focus-visible {
    outline: none;
    background: var(--gallery-bg);
    color: var(--gallery-text);
    -webkit-text-fill-color: var(--gallery-text);
    transform: translate(-1px, -1px);
    box-shadow:
      5px 5px 0 var(--gallery-text),
      inset 0 1px 0 rgba(255, 255, 255, 0.30);
  }
}

/* Momentary mouse or touch press */
#app3 .project-reel-button:active {
  background: var(--gallery-bg);
  color: var(--gallery-text);
  -webkit-text-fill-color: var(--gallery-text);
  transform: translate(2px, 2px);
  box-shadow:
    inset 0 1px 0 rgba(79, 79, 79, 0.14);
}

/* Reel is open: illuminated and physically engaged */
#app3 .project-reel-button.active,
#app3 .project-reel-button.active:hover,
#app3 .project-reel-button.active:focus-visible,
#app3 .project-reel-button.active:active {
  background: var(--gallery-accent);
  color: var(--gallery-text);
  -webkit-text-fill-color: var(--gallery-text);
  transform: translate(2px, 2px);
  box-shadow:
  inset 0 1px 0 rgba(79, 79, 79, 0.14);
}

/* ---------- Touch Reel Button Press Handoff ---------- */

@media (hover: none), (pointer: coarse) {

  #app3 .project-reel-button.is-touch-pressing,
  #app3 .project-reel-button.is-touch-pressing:hover,
  #app3 .project-reel-button.is-touch-pressing:focus-visible,
  #app3 .project-reel-button.is-touch-pressing:active {
    transform: translate3d(2px, 2px, 0);

    box-shadow:
      inset 0 1px 0 rgba(79, 79, 79, 0.14);
  }

  #app3 .project-reel-button.is-touch-pressing:not(.active) {
    background: var(--gallery-bg);
    color: var(--gallery-text);
    -webkit-text-fill-color: var(--gallery-text);
  }

  #app3 .project-reel-button.is-touch-pressing.active {
    background: var(--gallery-accent);
    color: var(--gallery-text);
    -webkit-text-fill-color: var(--gallery-text);
  }
}

#app3 .project-reel-slot {
min-height: 64px;
display: flex;
justify-content: center;
align-items: flex-start;
}

#app3 .project-reel-slot .project-reel-button {
  margin: 12px auto 0 auto;
}

#app3 .video-container {
overflow: hidden;
margin-top: 18px;
}

#app3 .video-container iframe {
display: block;
}

/* Phone portrait video sizing only */
@media (orientation: portrait) and (max-width: 560px) {
  #app3 .video-container {
    aspect-ratio: 16 / 9;
  }

  #app3 .video-container iframe {
    width: 100%;
    height: 100%;
  }
}

#app3 .reelfade-enter-active,
#app3 .reelfade-leave-active {
transition:
opacity .24s ease,
max-height .28s ease,
transform .24s ease,
margin-top .28s ease;
overflow: hidden;
}

/* Tablet Landscape: synchronized reel timing */

@media (orientation: landscape)
       and (min-width: 900px)
       and (min-height: 600px)
       and (hover: none),
       (orientation: landscape)
       and (min-width: 900px)
       and (min-height: 600px)
       and (pointer: coarse) {

  #app3 .reelfade-enter-active,
  #app3 .reelfade-leave-active {
    transition:
      opacity .30s cubic-bezier(0.33, 1, 0.68, 1),
      max-height .30s cubic-bezier(0.33, 1, 0.68, 1),
      transform .30s cubic-bezier(0.33, 1, 0.68, 1),
      margin-top .30s cubic-bezier(0.33, 1, 0.68, 1);

    overflow: hidden;
  }
}

#app3 .reelfade-enter,
#app3 .reelfade-leave-to {
opacity: 0;
max-height: 0;
transform: translateY(-6px);
margin-top: 0;
}

#app3 .reelfade-enter-to,
#app3 .reelfade-leave {
opacity: 1;
max-height: 460px;
transform: translateY(0);
margin-top: 18px;
}

#app3 .project-shortcuts {
font-family: Space Mono, monospace;
font-size: var(--modal-shortcuts-size);
letter-spacing: 0.08em;
text-transform: uppercase;
text-align: center;
color: var(--gallery-text);
opacity: 0.46;
margin-top: 18px;
margin-bottom: 4px;
user-select: none;
}

@media (min-width: 769px) and (hover: hover) and (pointer: fine) {

  #app3 .project-modal-content {
  align-items: stretch;
}

#app3 .project-carousel-viewport {
  min-height: calc(clamp(345px, 37.5vw, 510px) + 16px);
}

  #app3 .project-modal-left {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

  #app3 .modal-poster {
  margin: 16px auto 0;
  }

  #app3 .project-modal-right {
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
}

#app3 .project-reel-slot {
  position: absolute;
  right: 4px;
  bottom: 0;

  min-height: 0;
  margin: 0;
  padding: 0;

  justify-content: flex-end;
  align-items: flex-end;
}

#app3 .project-reel-slot .project-reel-button {
  margin: 0;
}

#app3 .video-container {
  margin-top: calc(var(--modal-padding-x) - 8px);
}

#app3 .video-container.reelfade-enter,
#app3 .video-container.reelfade-leave-to {
  margin-top: 0;
}

#app3 .video-container.reelfade-enter-to,
#app3 .video-container.reelfade-leave {
  margin-top: calc(var(--modal-padding-x) - 8px);
}

#app3 .project-shortcuts {
  position: static;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20px;
  margin: 10px 0 -10px;
  transform: none;

  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
}

}

/* ---------- Touch Navigation Indicator ---------- */

#app3 .project-swipe-hint {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 7px;

  width: 100%;
  height: 14px;

  margin: 16px auto 4px;

  color: var(--gallery-text);

  box-sizing: border-box;
  user-select: none;
  pointer-events: none;
}

#app3 .swipe-bar {
  display: block;
  flex: 0 0 auto;

  height: 3px;

  background: currentColor;
  border-radius: 999px;

  transform: translateX(0) scaleX(1);

  transition:
    opacity 0.16s ease-out,
    transform 0.16s ease-out;
}
/* 15% length / opacity */

#app3 .swipe-bar-outer {
  width: 7px;
  opacity: 0.15;
}

/* 35% length / opacity */

#app3 .swipe-bar-middle {
  width: 16px;
  opacity: 0.35;
}

/* 60% length / opacity */

#app3 .swipe-bar-inner {
  width: 28px;
  opacity: 0.60;
}

/* 100% length / opacity */

#app3 .swipe-bar-center {
  width: 46px;
  opacity: 1;
}

/* ---------- One-Time Swipe Indicator Wave ---------- */

/*
Sequence:
centre pulse
→ wave outward to the left
→ centre pulse
→ wave outward to the right
*/

@keyframes projectSwipeHintIntroShell {
  0% {
    opacity: 0;
  }

  14%,
  100% {
    opacity: 0.34;
  }
}

@keyframes projectSwipeBarPulse {
  0%,
  100% {
    opacity: var(--bar-rest-opacity);
    transform:
      translateX(0)
      scaleX(1);
  }

  50% {
    opacity: var(--bar-pulse-opacity);
    transform:
      translateX(var(--bar-pulse-shift, 0))
      scaleX(1.08);
  }
}

@keyframes projectSwipeCenterPulse {
  0%,
  7%,
  21%,
  43%,
  57%,
  100% {
    opacity: var(--bar-rest-opacity);
    transform: scaleX(1);
  }

  13%,
  49% {
    opacity: var(--bar-pulse-opacity);
    transform: scaleX(1.08);
  }
}

@media (hover: none), (pointer: coarse) {

  #app3 .project-swipe-hint {
    opacity: 0.34;
  }

  #app3 .project-swipe-hint.is-intro {
    animation:
      projectSwipeHintIntroShell
      1.15s
      ease-out
      both;
  }

  #app3 .project-swipe-hint.is-intro .swipe-bar {
    will-change: opacity, transform;
  }

  /*
  LEFT SIDE
  Inner → middle → outer
  */

  #app3 .project-swipe-hint.is-intro
  .swipe-bar:nth-child(3) {
    --bar-rest-opacity: 0.60;
    --bar-pulse-opacity: 1;
    --bar-pulse-shift: -2px;

    transform-origin: right center;

    animation:
      projectSwipeBarPulse
      0.22s
      ease-out
      0.20s
      both;
  }

  #app3 .project-swipe-hint.is-intro
  .swipe-bar:nth-child(2) {
    --bar-rest-opacity: 0.35;
    --bar-pulse-opacity: 0.82;
    --bar-pulse-shift: -2px;

    transform-origin: right center;

    animation:
      projectSwipeBarPulse
      0.22s
      ease-out
      0.30s
      both;
  }

  #app3 .project-swipe-hint.is-intro
  .swipe-bar:nth-child(1) {
    --bar-rest-opacity: 0.15;
    --bar-pulse-opacity: 0.60;
    --bar-pulse-shift: -2px;

    transform-origin: right center;

    animation:
      projectSwipeBarPulse
      0.22s
      ease-out
      0.40s
      both;
  }

  /*
  CENTRE
  Pulses once before each directional wave
  */

  #app3 .project-swipe-hint.is-intro
  .swipe-bar:nth-child(4) {
    --bar-rest-opacity: 1;
    --bar-pulse-opacity: 1;

    transform-origin: center;

    animation:
      projectSwipeCenterPulse
      1.15s
      ease-out
      both;
  }

  /*
  RIGHT SIDE
  Inner → middle → outer
  */

  #app3 .project-swipe-hint.is-intro
  .swipe-bar:nth-child(5) {
    --bar-rest-opacity: 0.60;
    --bar-pulse-opacity: 1;
    --bar-pulse-shift: 2px;

    transform-origin: left center;

    animation:
      projectSwipeBarPulse
      0.22s
      ease-out
      0.63s
      both;
  }

  #app3 .project-swipe-hint.is-intro
  .swipe-bar:nth-child(6) {
    --bar-rest-opacity: 0.35;
    --bar-pulse-opacity: 0.82;
    --bar-pulse-shift: 2px;

    transform-origin: left center;

    animation:
      projectSwipeBarPulse
      0.22s
      ease-out
      0.73s
      both;
  }

  #app3 .project-swipe-hint.is-intro
  .swipe-bar:nth-child(7) {
    --bar-rest-opacity: 0.15;
    --bar-pulse-opacity: 0.60;
    --bar-pulse-shift: 2px;

    transform-origin: left center;

    animation:
      projectSwipeBarPulse
      0.22s
      ease-out
      0.83s
      both;
  }
}

/* ---------- Swipe-Triggered Directional Wave ---------- */

@media (hover: none), (pointer: coarse) {

  /*
  Centre begins both directional waves.
  */

  #app3
.project-swipe-hint.is-swipe-left
.swipe-bar:nth-child(4),

  #app3
  .project-swipe-hint.is-swipe-right
  .swipe-bar:nth-child(4) {
    --bar-rest-opacity: 1;
    --bar-pulse-opacity: 1;
    --bar-pulse-shift: 0px;
  
    transform-origin: center;
  
    animation:
      projectSwipeBarPulse
      0.26s
      ease-out
      0s
      both;
  }
    /*
    SWIPE LEFT
    Centre → inner → middle → outer
    */

  #app3
  .project-swipe-hint.is-swipe-left
  .swipe-bar:nth-child(3) {
    --bar-rest-opacity: 0.60;
    --bar-pulse-opacity: 1;
    --bar-pulse-shift: -2px;

    transform-origin: right center;

    animation:
      projectSwipeBarPulse
      0.26s
      ease-out
      0.08s
      both;
  }

  #app3
  .project-swipe-hint.is-swipe-left
  .swipe-bar:nth-child(2) {
    --bar-rest-opacity: 0.35;
    --bar-pulse-opacity: 0.82;
    --bar-pulse-shift: -2px;

    transform-origin: right center;

    animation:
      projectSwipeBarPulse
      0.26s
      ease-out
      0.16s
      both;
  }

  #app3
  .project-swipe-hint.is-swipe-left
  .swipe-bar:nth-child(1) {
    --bar-rest-opacity: 0.15;
    --bar-pulse-opacity: 0.60;
    --bar-pulse-shift: -2px;

    transform-origin: right center;

    animation:
      projectSwipeBarPulse
      0.26s
      ease-out
      0.24s
      both;
  }

  /*
  SWIPE RIGHT
  Centre → inner → middle → outer
  */

  #app3
  .project-swipe-hint.is-swipe-right
  .swipe-bar:nth-child(5) {
    --bar-rest-opacity: 0.60;
    --bar-pulse-opacity: 1;
    --bar-pulse-shift: 2px;

    transform-origin: left center;

    animation:
      projectSwipeBarPulse
      0.26s
      ease-out
      0.08s
      both;
  }

  #app3
  .project-swipe-hint.is-swipe-right
  .swipe-bar:nth-child(6) {
    --bar-rest-opacity: 0.35;
    --bar-pulse-opacity: 0.82;
    --bar-pulse-shift: 2px;

    transform-origin: left center;

    animation:
      projectSwipeBarPulse
      0.26s
      ease-out
      0.16s
      both;
  }

  #app3
  .project-swipe-hint.is-swipe-right
  .swipe-bar:nth-child(7) {
    --bar-rest-opacity: 0.15;
    --bar-pulse-opacity: 0.60;
    --bar-pulse-shift: 2px;

    transform-origin: left center;

    animation:
      projectSwipeBarPulse
      0.26s
      ease-out
      0.24s
      both;
  }
}

/* ---------- Finger-Linked Swipe Indicator ---------- */

@media (hover: none), (pointer: coarse) {

  /*
  Stop the one-time intro while the user is
  physically controlling the indicator.
  */

  #app3 .project-swipe-hint.is-dragging-left,
  #app3 .project-swipe-hint.is-dragging-right {
    animation: none;
    opacity: 0.34;
  }

  #app3
  .project-swipe-hint.is-dragging-left
  .swipe-bar,

  #app3
  .project-swipe-hint.is-dragging-right
  .swipe-bar {
    animation: none !important;
    transition: none;

    will-change:
      opacity,
      transform;
  }

  /*
  Centre bar follows the finger slightly.
  */

  #app3
  .project-swipe-hint.is-dragging-left
  .swipe-bar:nth-child(4),

  #app3
  .project-swipe-hint.is-dragging-right
  .swipe-bar:nth-child(4) {
    opacity: 1;

    transform:
      translateX(
        var(--swipe-center-shift)
      )
      scaleX(
        var(--swipe-center-scale)
      );
  }

  /*
  DRAGGING LEFT

  Centre → inner → middle → outer
  */

  #app3
  .project-swipe-hint.is-dragging-left
  .swipe-bar:nth-child(3) {
    opacity:
      var(--swipe-inner-opacity);

    transform:
      translateX(
        var(--swipe-inner-shift)
      )
      scaleX(
        var(--swipe-inner-scale)
      );
  }

  #app3
  .project-swipe-hint.is-dragging-left
  .swipe-bar:nth-child(2) {
    opacity:
      var(--swipe-middle-opacity);

    transform:
      translateX(
        var(--swipe-middle-shift)
      )
      scaleX(
        var(--swipe-middle-scale)
      );
  }

  #app3
  .project-swipe-hint.is-dragging-left
  .swipe-bar:nth-child(1) {
    opacity:
      var(--swipe-outer-opacity);

    transform:
      translateX(
        var(--swipe-outer-shift)
      )
      scaleX(
        var(--swipe-outer-scale)
      );
  }

  /*
  Opposite side subtly recedes.
  */

  #app3
  .project-swipe-hint.is-dragging-left
  .swipe-bar:nth-child(5) {
    opacity:
      var(--swipe-opposite-inner-opacity);
  }

  #app3
  .project-swipe-hint.is-dragging-left
  .swipe-bar:nth-child(6) {
    opacity:
      var(--swipe-opposite-middle-opacity);
  }

  #app3
  .project-swipe-hint.is-dragging-left
  .swipe-bar:nth-child(7) {
    opacity:
      var(--swipe-opposite-outer-opacity);
  }

  /*
  DRAGGING RIGHT

  Centre → inner → middle → outer
  */

  #app3
  .project-swipe-hint.is-dragging-right
  .swipe-bar:nth-child(5) {
    opacity:
      var(--swipe-inner-opacity);

    transform:
      translateX(
        var(--swipe-inner-shift)
      )
      scaleX(
        var(--swipe-inner-scale)
      );
  }

  #app3
  .project-swipe-hint.is-dragging-right
  .swipe-bar:nth-child(6) {
    opacity:
      var(--swipe-middle-opacity);

    transform:
      translateX(
        var(--swipe-middle-shift)
      )
      scaleX(
        var(--swipe-middle-scale)
      );
  }

  #app3
  .project-swipe-hint.is-dragging-right
  .swipe-bar:nth-child(7) {
    opacity:
      var(--swipe-outer-opacity);

    transform:
      translateX(
        var(--swipe-outer-shift)
      )
      scaleX(
        var(--swipe-outer-scale)
      );
  }

  /*
  Opposite side subtly recedes.
  */

  #app3
  .project-swipe-hint.is-dragging-right
  .swipe-bar:nth-child(3) {
    opacity:
      var(--swipe-opposite-inner-opacity);
  }

  #app3
  .project-swipe-hint.is-dragging-right
  .swipe-bar:nth-child(2) {
    opacity:
      var(--swipe-opposite-middle-opacity);
  }

  #app3
  .project-swipe-hint.is-dragging-right
  .swipe-bar:nth-child(1) {
    opacity:
      var(--swipe-opposite-outer-opacity);
  }
}

@media (prefers-reduced-motion: reduce) {

  #app3 .project-swipe-hint.is-intro,
  #app3 .project-swipe-hint.is-intro .swipe-bar,
  #app3 .project-swipe-hint.is-swipe-left .swipe-bar,
  #app3 .project-swipe-hint.is-swipe-right .swipe-bar {
    animation: none;
  }
}

#app3 .mobile-title,
#app3 .mobile-title-block {
  display: none;
}

#app3 .project-modal h2.mobile-title {
text-align: center;
}


@media (max-width: 768px),
       (orientation: portrait) and (hover: none) and (pointer: coarse) and (max-width: 1024px) {

#app3 .filter {
margin: 0;
}

#app3 .filters {
column-gap: 8px;
row-gap: 10px;
}

#app3 .project-modal {
top: var(--mobile-modal-top);
left: 50%;
transform: translateX(-50%);
width: calc(100% - var(--mobile-modal-edge-gap));
max-width: calc(100% - var(--mobile-modal-edge-gap));
height: auto;
max-height: calc(100vh - var(--mobile-modal-height-gap));
max-height: calc(100dvh - var(--mobile-modal-height-gap));
box-sizing: border-box;
padding: var(--mobile-modal-padding);
font-size: var(--mobile-modal-font-size);
letter-spacing: -0.05em;
overflow-y: auto;
overflow-x: hidden;
-webkit-overflow-scrolling: touch;
}

#app3 .project-modal h2 {
font-size: var(--mobile-title-size);
letter-spacing: -0.05em;
margin-bottom: 12px;
}

#app3 .project-modal-right h2 {
text-align: center;
}

#app3 .desktop-title {
display: none;
}

#app3 .project-carousel-card {
padding: 8px var(--mobile-card-gutter) 0 var(--mobile-card-gutter);
box-sizing: border-box;
}

#app3 h2.mobile-title {
display: grid;
place-items: center;
width: 100%;
min-height: var(--mobile-title-height);
text-align: center !important;
font-family: Unbounded, sans-serif;
font-size: var(--mobile-title-size);
font-weight: 700;
line-height: 1.05;
letter-spacing: -0.05em;
text-transform: uppercase;
color: var(--gallery-text);
margin: 0 0 14px 0;
padding: 0 4px;
box-sizing: border-box;
}

#app3 .mobile-title-block {
  display: block;
}

#app3 .modal-title-row {
  display: none;
}

#app3 .mobile-project-counter {
  margin: 0 4px 3px 0;
  text-align: right;

  font-family: Space Mono, monospace;
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.08em;

  color: var(--gallery-text);
  opacity: 0.38;
}

#app3 .project-modal-content {
display: flex;
flex-direction: column;
gap: var(--mobile-content-gap);
will-change: transform;
}

#app3 .project-modal-left {
order: 1;
text-align: center;
width: 100%;
display: flex;
justify-content: center;
}

#app3 .project-modal-right {
order: 2;
width: 100%;
text-align: left;
}

#app3 .modal-poster {
width: min(100%, var(--mobile-poster-max-width));
max-width: 100%;
height: auto;
display: block;
margin: 0 auto 20px auto;
border-radius: 0;
}

#app3 .project-tags {
justify-content: center;
}

#app3 .project-shortcuts {
display: none;
}

#app3 .project-tag,
#app3 .active-tag-filter button {
font-size: var(--modal-tag-size);
border-radius: var(--modal-control-radius);
}

#app3 .project-reel-button {
  font-size: var(--modal-reel-button-size);
  width: 55px;
  height: 55px;
  min-height: 55px;
  border-radius: 12px;
}

#app3 .project-reel-icon {
  width: 32px;
  height: 32px;
}

}

/* ---------- Tablet Portrait: Compact Modal Shell ---------- */

@media (orientation: portrait)
       and (min-width: 769px)
       and (max-width: 1024px)
       and (hover: none),
       (orientation: portrait)
       and (min-width: 769px)
       and (max-width: 1024px)
       and (pointer: coarse) {

  /*
  Slightly wider shell, while keeping the actual
  reading column controlled and centered.
  */

  #app3 .project-modal {
    width: min(
      560px,
      calc(100vw - 128px)
    );

    max-width: min(
      560px,
      calc(100vw - 128px)
    );
  }

  /*
  The poster should be a strong introduction,
  but not dominate the entire modal.
  */

  #app3 .modal-poster {
    width: min(100%, 360px);
    max-width: 360px;
    margin-bottom: 2px;
  }

  /*
  Prevent the text from becoming overly wide
  just because the modal shell is wider.
  */

  #app3 .project-modal-right {
    width: min(100%, 460px);
    margin-left: auto;
    margin-right: auto;
  }

  /*
  Give the title more authority beneath the poster.
  */

  #app3 h2.mobile-title {
    font-size: clamp(17px, 2.3vw, 19px);
    line-height: 1.1;
    min-height: 40px;
    margin-bottom: 16px;
  }

  /*
  Add a little more breathing room between
  the tags and the physical play control.
  */

  #app3 .project-reel-slot .project-reel-button {
    margin-top: 18px;
  }
}

/* ---------- Phone Portrait: Framed Poster ---------- */

@media (orientation: portrait)
       and (max-width: 560px) {

  /*
  Keep the poster visually important, but small enough
  that the project title and details begin within the
  initial modal view.
  */

  #app3 {
    --mobile-modal-edge-gap: 48px;
  }
  
  #app3 .modal-poster {
    width: min(68vw, 240px, 38dvh);
    max-width: 240px;
    margin-bottom: 4px;
  }
}

@media (max-width: 560px) {
  #app3 .gallery-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

    #app3 .project-search {
    font-size: 16px;
  }

  #app3 .gallery-controls-search,
  #app3 .gallery-controls-tag {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #app3 .gallery-controls .active-tag-filter {
    margin-top: 14px;
  }

  #app3 .gallery-controls .tagfade-enter-active,
  #app3 .gallery-controls .tagfade-leave-active {
    transition:
      opacity .18s ease,
      transform .18s ease,
      max-height .30s ease,
      margin .30s ease,
      padding .30s ease;
    overflow: hidden;
  }

  #app3 .gallery-controls .tagfade-enter,
  #app3 .gallery-controls .tagfade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
    max-height: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  #app3 .gallery-controls .tagfade-enter-to,
  #app3 .gallery-controls .tagfade-leave {
    opacity: 1;
    transform: translateY(0);
    max-height: 40px;
  }
}


@media (hover: none) and (pointer: coarse) {
  #app3 .project-carousel-card {
    padding: 8px var(--mobile-card-gutter) 0 var(--mobile-card-gutter);
    box-sizing: border-box;
  }

  #app3 .project-shortcuts {
    display: none;
  }

  #app3 .project-swipe-hint {
    display: flex;
  }
}

/*
The upper indicator belongs only to portrait.
Landscape continues using the existing indicator
beneath the modal content.
*/

#app3 .project-swipe-hint-portrait {
  display: none;
}

@media (orientation: portrait)
       and (max-width: 1024px)
       and (hover: none),
       (orientation: portrait)
       and (max-width: 1024px)
       and (pointer: coarse) {

  #app3 .project-swipe-hint-bottom {
    display: none;
  }

  #app3 .project-swipe-hint-portrait {
    display: flex;
    height: 14px;
    margin: 6px auto 12px;
  }
}

@media (hover: none) and (pointer: coarse) {
  #app3 .project:focus-visible {
    transform: none;
    box-shadow: var(--gallery-shadow-card);
  }

  #app3 .project.active:focus-visible {
    transform: translate(2px, 2px);
    box-shadow: var(--gallery-shadow-none);
  }
}

/* ---------- Touch Landscape Shared Layout ---------- */

#app3 .project-actions-row {
  display: contents;
}

@media (orientation: landscape) and (hover: none),
       (orientation: landscape) and (pointer: coarse) {

  #app3 .project-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);

    width: min(940px, calc(100vw - 64px));
    max-width: calc(100vw - 64px);

    height: auto;
    max-height: calc(100svh - 44px);
    max-height: calc(100dvh - 44px);

    box-sizing: border-box;
    padding: clamp(10px, 2vw, 16px);

    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  #app3 .project-modal-overlay.modal-overlay-scroll {
    overflow-y: auto;
    overflow-x: hidden;
    touch-action: pan-y;
    overscroll-behavior: contain;
    padding-top: var(--modal-anchor-top, 24px);
    padding-bottom: 40px;
    box-sizing: border-box;
  }

  #app3 .project-modal-overlay.modal-overlay-scroll
  .project-modal.modal-top-anchored {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    transform: none;

    width: min(940px, calc(100vw - 64px));
    max-width: calc(100vw - 64px);

    margin: 0 auto;
    max-height: none;
    overflow-y: visible;
  }

  #app3 .project-modal-content {
    display: grid;
    grid-template-columns:
      clamp(150px, 28vw, 260px)
      minmax(0, 1fr);

    gap: clamp(12px, 2.4vw, 24px);
    align-items: start;
  }

  #app3 .project-modal-left {
    order: 0;
    width: auto;
    display: block;
    text-align: center;
  }

  #app3 .project-modal-right {
    order: 0;
    min-width: 0;
    text-align: left;
    padding-top: 4px;
    box-sizing: border-box;
  }

  #app3 .modal-poster {
    width: 100%;
    max-width: 260px;
    height: auto;
    margin: 0 auto 12px;
  }

  #app3 .mobile-title-block {
    display: none;
  }

  #app3 .modal-title-row {
    display: grid;
  }

  #app3 h2.mobile-title {
    display: none;
  }

  #app3 .desktop-title {
    display: block;
  }

  #app3 .project-modal h2.desktop-title {
    font-size: clamp(14px, 2.2vw, var(--modal-title-size));
    margin-bottom: 10px;
    line-height: 1.05;
  }

  #app3 .project-modal p {
    margin-bottom: 2px;
  }

  #app3 .project-summary {
    margin-top: 2px;
  }

  #app3 .project-tags {
    justify-content: flex-start;
    gap: 6px;
    margin: 18px 0 0;
  }

  #app3 .project-reel-slot {
    position: static;
    min-height: 48px;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  #app3 .project-reel-slot .project-reel-button {
    margin: 12px 0 0 auto;
  }
}


/* ---------- Tablet Landscape: Stable Two-Column Modal ---------- */

@media (orientation: landscape)
       and (min-width: 900px)
       and (min-height: 600px)
       and (hover: none),
       (orientation: landscape)
       and (min-width: 900px)
       and (min-height: 600px)
       and (pointer: coarse) {

  #app3 {
    --tablet-landscape-poster-width:
      clamp(260px, 27vw, 300px);

    --tablet-landscape-poster-height:
      clamp(390px, 40.5vw, 450px);

    --modal-font-size:
      clamp(13px, 1.25vw, 14px);

    --modal-title-size:
      clamp(18px, 1.9vw, 22px);

    --modal-label-size:
      clamp(9px, 0.95vw, 11px);

    --modal-tag-size: 8px;
    --modal-reel-button-size: 10px;
  }

  #app3 .project-modal {
    width: min(940px, calc(100vw - 64px));
    max-width: calc(100vw - 64px);

    max-height: calc(100svh - 40px);
    max-height: calc(100dvh - 40px);

    padding: 16px 20px;
  }

  #app3 .project-modal-overlay.modal-overlay-scroll
  .project-modal.modal-top-anchored {
    width: min(940px, calc(100vw - 64px));
    max-width: calc(100vw - 64px);
  }

  #app3 .project-carousel-viewport {
    height:
      calc(var(--tablet-landscape-poster-height) + 6px) !important;

    min-height: 0 !important;
  }

  #app3 .project-carousel-track,
  #app3 .project-carousel-card,
  #app3 .project-carousel-card > div {
    height: 100%;
  }

  #app3 .project-modal-content {
    height: var(--tablet-landscape-poster-height);

    grid-template-columns:
      var(--tablet-landscape-poster-width)
      minmax(0, 1fr);

    gap: clamp(22px, 2.5vw, 30px);
    align-items: stretch;
  }

  #app3 .project-modal-left {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  #app3 .modal-poster {
    width: var(--tablet-landscape-poster-width);
    max-width: none;
    height: var(--tablet-landscape-poster-height);

    margin: 0;
    object-fit: cover;
  }

  #app3 .project-modal-right {
    height: var(--tablet-landscape-poster-height);
    min-height: 0;
  
    display: flex;
    flex-direction: column;
  
    padding: 0 0 8px;
    box-sizing: border-box;
    margin: 0;
  }

  #app3 .project-modal h2.desktop-title {
    font-size: var(--modal-title-size);
    margin-bottom: 10px;
  }

  #app3 .project-details-divider {
    margin-top: 10px;
    margin-bottom: 8px;
  }

  #app3 .project-actions-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
  
    width: 100%;
    margin-top: auto;
    padding: 8px 0 4px;
    box-sizing: border-box;
  }

  #app3 .project-tags {
    flex: 1 1 auto;
    width: auto;
    max-width: none;
    min-width: 0;
    margin: 0;
  }

  #app3 .project-reel-slot {
    flex: 0 0 auto;
    min-height: 0;
    margin: 0;
    padding: 0;
  }

  #app3 .project-reel-slot .project-reel-button {
    margin: 0;
  }
}

/* ---------- Modal Open Fade ---------- */

#app3 .modalfade-enter-active {
transition: opacity 0.14s ease-out;
}

#app3 .modalfade-enter-active .project-modal {
transition:
opacity 0.14s ease-out,
transform 0.14s ease-out;
transform-origin: center center;
}

#app3 .modalfade-enter {
opacity: 0;
}

#app3 .modalfade-enter .project-modal {
opacity: 0;
transform: translate(-50%, calc(-50% + 6px)) scale(0.985);
}

#app3 .modalfade-enter-to {
opacity: 1;
}

#app3 .modalfade-enter-to .project-modal {
opacity: 1;
transform: translate(-50%, -50%) scale(1);
}

#app3 .modalfade-leave-active {
transition: none;
}

@media (max-width: 768px),
       (orientation: portrait) and (hover: none) and (pointer: coarse) and (max-width: 1024px) {
  #app3 .modalfade-enter .project-modal {
    transform: translateX(-50%) translateY(6px) scale(0.985);
  }

  #app3 .modalfade-enter-to .project-modal {
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@media (orientation: landscape) and (hover: none),
       (orientation: landscape) and (pointer: coarse) {
  #app3 .modalfade-enter .project-modal {
    transform: translate(-50%, calc(-50% + 6px)) scale(0.985);
  }

  #app3 .modalfade-enter-to .project-modal {
    transform: translate(-50%, -50%) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  #app3 .modalfade-enter-active,
  #app3 .modalfade-enter-active .project-modal {
    transition: none;
  }
}



/* ---------- Project Card Press Stabilizer ---------- */

#app3 .project:active,
#app3 .project.active,
#app3 .project.active:hover,
#app3 .project.active:focus-visible {
transition:
transform 0.10s ease-out,
box-shadow 0.10s ease-out !important;
transform: translate3d(2px, 2px, 0) !important;
box-shadow: var(--gallery-shadow-none) !important;
}

/* ---------- Touch Project Card Press Stabilizer ---------- */

@media (hover: none), (pointer: coarse) {
  #app3 .project.is-touch-pressing,
  #app3 .project.is-touch-pressing:hover,
  #app3 .project.is-touch-pressing:focus-visible {
    transition:
      transform 0.10s ease-out,
      box-shadow 0.10s ease-out !important;
    transform: translate3d(2px, 2px, 0) !important;
    box-shadow: var(--gallery-shadow-none) !important;
    background: var(--gallery-bg) !important;
  }

  #app3 .project.is-touch-pressing .project-title {
    background: var(--gallery-bg) !important;
    color: var(--gallery-text) !important;
    -webkit-text-fill-color: var(--gallery-text) !important;
  }
}

/* ---------- Touch Project Card Active Color Stabilizer ---------- */

@media (hover: none), (pointer: coarse) {
  #app3 .project.active,
  #app3 .project.active:hover,
  #app3 .project.active:focus-visible {
    background: var(--gallery-bg) !important;
  }

  #app3 .project.active .project-title {
    background: var(--gallery-bg) !important;
    color: var(--gallery-text) !important;
    -webkit-text-fill-color: var(--gallery-text) !important;
  }
}

@keyframes galleryOrientationReveal {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#app3 .project-modal.is-orientation-adjusting {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

#app3 .project-modal.is-orientation-revealing {
  visibility: visible !important;
  animation:
    galleryOrientationReveal 0.10s ease-out both;
}

/* ---------- Phone Landscape Modal Safety ---------- */

@media (orientation: landscape)
       and (max-height: 560px)
       and (max-width: 1024px)
       and (hover: none),
       (orientation: landscape)
       and (max-height: 560px)
       and (max-width: 1024px)
       and (pointer: coarse) {
  #app3 .project-modal {
    padding: 8px 12px !important;

    font-size: clamp(11.5px, 1.35vw, 13px) !important;
    font-size: clamp(11.5px, 3dvh, 13px) !important;
  }

  #app3 .project-modal:not(.modal-top-anchored) {
    width: min(860px, calc(100% - 32px)) !important;
    max-width: calc(100% - 32px) !important;

    max-height:
      calc(var(--gallery-visual-vh, 100vh) - 36px) !important;

    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;

    overflow-y: auto !important;
  }

  #app3 .project-modal-overlay.modal-overlay-scroll
  .project-modal.modal-top-anchored {
    width: min(860px, calc(100% - 32px)) !important;
    max-width: calc(100% - 32px) !important;
    margin: 0 auto !important;
  }

  #app3 .project-modal-content {
    grid-template-columns:
      clamp(150px, 28vw, 225px)
      minmax(0, 1fr) !important;

    grid-template-columns:
      clamp(150px, 49dvh, 225px)
      minmax(0, 1fr) !important;

    gap: clamp(10px, 1.7vw, 16px) !important;
    align-items: stretch !important;
  }

  #app3 .project-modal-right {
    display: flex !important;
    flex-direction: column !important;
    min-width: 0 !important;
    padding-top: 2px !important;
  }

  #app3 .modal-poster {
    max-width: 225px !important;
    margin: 0 auto 4px !important;
  }

  #app3 .modal-title-row {
    gap: 10px !important;
    margin-bottom: 6px !important;
  }

  #app3 .project-modal h2.desktop-title {
    font-size: clamp(13px, 1.7vw, 16px) !important;
    font-size: clamp(13px, 3.6dvh, 16px) !important;
    margin-bottom: 0 !important;
  }

  #app3 .project-modal strong {
    font-size: clamp(10px, 2.7dvh, 11.5px) !important;
  }

  #app3 .project-modal p {
    margin-bottom: 0 !important;
  }

  #app3 .project-modal-right p,
  #app3 .project-summary {
    line-height: 1.28 !important;
  }

  #app3 .project-details-divider {
    width: 100% !important;
    max-width: none !important;
    margin: 4px 0 3px !important;
  }

  #app3 .project-summary,
  #app3 .project-thumbnail-disclaimer {
    width: 100% !important;
    max-width: none !important;
  }

  #app3 .project-summary {
    margin-top: 0 !important;
  }

  #app3 .project-thumbnail-disclaimer {
    margin-top: 6px !important;
    font-size: clamp(9.5px, 2.5dvh, 10.5px) !important;
    line-height: 1.25 !important;
  }

  #app3 .project-actions-row {
    display: flex !important;
    align-items: flex-end !important;
    justify-content: space-between !important;
    gap: 12px !important;
    width: 100% !important;
    margin-top: auto !important;
    padding: 8px 6px 6px 0 !important;
    box-sizing: border-box !important;
  }

  #app3 .project-tags {
    flex: 1 1 auto !important;
    width: auto !important;
    max-width: none !important;
    min-width: 0 !important;
    margin: 0 !important;
    gap: 5px !important;
  }

  #app3 .project-reel-slot {
    flex: 0 0 auto !important;
    min-height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  #app3 .project-reel-slot .project-reel-button {
    margin: 0 !important;
  }

  #app3 .project-modal:not(.modal-top-anchored)
  .project-carousel-viewport {
    height: auto !important;
    max-height:
      calc(var(--gallery-visual-vh, 100vh) - 74px) !important;

    min-height: 0 !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }

  #app3 .video-container {
    width: min(100%, 135dvh) !important;
    height: auto !important;
    aspect-ratio: 16 / 9 !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  #app3 .video-container iframe {
    width: 100% !important;
    height: 100% !important;
  }

  #app3 .project-swipe-hint-bottom {
    margin: 8px auto 2px !important;
  }

  /*
  The overlay has already returned to the top
  before the phone-landscape reel begins closing.
  Finish that collapse quickly so the modal bottom
  does not visibly lag behind the scroll.
  */
  #app3 .reelfade-leave-active {
    transition:
      opacity .14s ease,
      max-height .16s ease,
      transform .14s ease,
      margin-top .16s ease;
  }
}

/* ---------- Selected Project: Recessed Illuminated State ---------- */

#app3 .project.active,
#app3 .project.active:hover,
#app3 .project.active:focus-visible,
#app3 .project.active:active {
  position: relative;

  /* Preserve the normal card and title colours */
  background: var(--gallery-bg) !important;

  /* Concept-style selected outline */
  border-color: var(--gallery-accent) !important;

  /* Press slightly into the surface */
  transform: translate3d(2px, 2px, 0) !important;

  /* Compress the hard shadow instead of removing it */
  box-shadow: 2px 2px 0 var(--gallery-text) !important;
}

/* Subtle illumination contained inside the selected card */
#app3 .project.active::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 8px rgba(237, 179, 59, 0.20);
  pointer-events: none;
  z-index: 2;
}

/* Keep the title strip cream with charcoal text */
#app3 .project.active .project-title {
  background: var(--gallery-bg) !important;
  color: var(--gallery-text) !important;
  -webkit-text-fill-color: var(--gallery-text) !important;
}


#play-reference,
#chevron-reference {
  display: none !important;
}

`;


document.head.appendChild(galleryStyles);
document.getElementById("app3").innerHTML = `


<div class="title-container">

<div class="filters">
<button type="button" tabindex="0" class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:touchstart.passive="setFilterTouchPress('ALL')" v-on:click="setFilter('ALL')">ALL</button>
<button type="button" tabindex="0" class="filter" v-bind:class="{ active: currentFilter === 'CINEMATICS' }" v-on:touchstart.passive="setFilterTouchPress('CINEMATICS')" v-on:click="setFilter('CINEMATICS')">CINEMATICS</button>
<button type="button" tabindex="0" class="filter" v-bind:class="{ active: currentFilter === 'COMMERCIAL' }" v-on:touchstart.passive="setFilterTouchPress('COMMERCIAL')" v-on:click="setFilter('COMMERCIAL')">COMMERCIAL</button>
<button type="button" tabindex="0" class="filter" v-bind:class="{ active: currentFilter === 'EPISODIC' }" v-on:touchstart.passive="setFilterTouchPress('EPISODIC')" v-on:click="setFilter('EPISODIC')">EPISODIC</button>
<button type="button" tabindex="0" class="filter" v-bind:class="{ active: currentFilter === 'FILM' }" v-on:touchstart.passive="setFilterTouchPress('FILM')" v-on:click="setFilter('FILM')">FILM</button>
<button type="button" tabindex="0" class="filter" v-bind:class="{ active: currentFilter === 'GAMES' }" v-on:touchstart.passive="setFilterTouchPress('GAMES')" v-on:click="setFilter('GAMES')">GAMES</button>
<button type="button" tabindex="0" class="filter" v-bind:class="{ active: currentFilter === 'PERSONAL' }" v-on:touchstart.passive="setFilterTouchPress('PERSONAL')" v-on:click="setFilter('PERSONAL')">PERSONAL</button>
<button type="button" tabindex="0" class="filter" v-bind:class="{ active: currentFilter === 'STUDENT' }" v-on:touchstart.passive="setFilterTouchPress('STUDENT')" v-on:click="setFilter('STUDENT')">STUDENT</button>
</div>

<div class="gallery-controls">

  <div class="gallery-controls-search">
    <div v-bind:class="['search-wrapper', { 'is-search-active': search }]">
      <input
        ref="projectSearch"
        class="project-search"
        type="text"
        v-model="search"
        placeholder="Search projects"
        v-on:keydown.esc="search = ''" />

      <button
        v-if="search"
        type="button"
        class="project-search-clear"
        v-on:click="search = ''"
        aria-label="Clear search">
        ×
      </button>
    </div>
  </div>

  <div
    v-bind:class="['active-tag-space', 'gallery-controls-tag']">

    <transition name="tagfade" mode="out-in">
      <div
        v-if="activeTag"
        class="active-tag-filter"
        :key="activeTag">

        <button
          ref="activeTagClearButton"
          v-on:click="clearTagFilter($event)"
          v-bind:aria-label="'Clear tag filter: ' + activeTag">
          {{ activeTag }} ×
        </button>
      </div>
    </transition>

  </div>

</div>

<p class="limited-card-note">
  Grey logo cards indicate released projects with limited details.
</p>

<transition-group
  tag="div"
  v-bind:class="['projects', { 'is-grid-hover-locked': isGridHoverLocked }]"
  name="projects">

<div class="project"
v-for="(project, projectIndex) in filteredAndSearched"
v-bind:key="project.title"
v-bind:data-project-title="project.title"
v-bind:style="projectTransitionStyle(project)"
v-bind:class="{ active: (selectedProject && selectedProject.title === project.title) || openingProjectTitle === project.title }"
role="button"
tabindex="0"
v-bind:aria-label="'Open project: ' + project.title"
v-on:touchstart.passive="startProjectPress($event, project)"
v-on:touchmove.passive="clearProjectPress"
v-on:touchcancel="clearProjectPress"
v-on:mousedown="startProjectMousePress($event, project)"
v-on:click="openProject(project)"
v-on:keydown="handleProjectCardKeydown($event, project)">

<div class="project-card-inner">
<div class="project-image-wrapper">
<img
  v-bind:key="project.image"
  v-bind:class="['project-image', { 'is-loaded': imageIsLoaded(project.image) }]"
  v-bind:data-image-src="project.image"
  v-bind:src="project.image"
  v-bind:alt="project.title + ' poster'"
  v-bind:loading="shouldEagerLoadGridImage(projectIndex) ? 'eager' : 'lazy'"
  decoding="async"
  draggable="false"
  v-bind:fetchpriority="shouldEagerLoadGridImage(projectIndex) ? 'high' : 'auto'"
  v-on:contextmenu.prevent
  v-on:dragstart.prevent
  v-on:load="markImageLoaded"
  v-on:error="retryImageLoad($event, project.image)">
<div class="gradient-overlay"></div>
<span class="project-title">{{project.title}}</span>
</div>
</div>
</div>

</transition-group>

<transition name="emptyfade">
  <div
    v-if="filteredAndSearched.length === 0"
    class="empty-results"
    role="status"
    aria-live="polite">

    <div class="empty-results-title">
      No Matching Projects
    </div>

    <div class="empty-results-copy">
      Try a different search or reset the gallery.
    </div>

    <button
      type="button"
      class="empty-results-reset"
      v-on:click="resetGalleryView">
      Reset gallery
    </button>

  </div>
</transition>

<transition name="modalfade" v-on:after-leave="cleanupModalAfterClose">
<div
  v-if="selectedProject"
  class="project-modal-layer">

  <div
    class="project-modal-backdrop"
    aria-hidden="true">
  </div>

  <div
    class="project-modal-overlay"
    v-bind:class="{ 'modal-overlay-scroll': modalTopAnchored }"
    ref="projectModalOverlay"
    v-on:click="closeProject">
<div
  class="project-modal"
  v-bind:class="{ 'modal-top-anchored': modalTopAnchored }"
  ref="projectModal"
  role="dialog"
  aria-modal="true"
  tabindex="-1"
  v-bind:aria-label="selectedProject ? selectedProject.title + ' project details' : 'Project details'"
  v-on:click.stop
  v-on:keydown.tab="trapModalFocus"
  v-on:touchstart="handleTouchStart"
  v-on:touchmove="handleTouchMove"
  v-on:touchend="handleTouchEnd"
  v-on:touchcancel="handleTouchCancel">

    <div class="mobile-title-block">

  <div class="mobile-project-counter">
    {{ projectCounter(selectedProject) }}
  </div>

  <div
    v-if="shouldShowSwipeHint"
    class="project-swipe-hint project-swipe-hint-portrait"
    v-bind:class="{
      'is-intro': !hasSeenSwipeHint,
      'is-swipe-left': swipeHintDirection === 'left',
      'is-swipe-right': swipeHintDirection === 'right',
      'is-dragging-left': isDragging && swipeOffset < 0,
      'is-dragging-right': isDragging && swipeOffset > 0
    }"
    v-bind:style="swipeHintDragStyle"
    v-on:animationend.self="dismissSwipeHint"
    aria-hidden="true">

    <span class="swipe-bar swipe-bar-outer"></span>
    <span class="swipe-bar swipe-bar-middle"></span>
    <span class="swipe-bar swipe-bar-inner"></span>

    <span class="swipe-bar swipe-bar-center"></span>

    <span class="swipe-bar swipe-bar-inner"></span>
    <span class="swipe-bar swipe-bar-middle"></span>
    <span class="swipe-bar swipe-bar-outer"></span>

  </div>

 </div>

    <div class="project-carousel-viewport" ref="carouselViewport">

   <div
      class="project-carousel-track"
      v-bind:class="{ 'is-dragging-carousel': isDragging }"
      v-bind:style="carouselTrackStyle">
    
  <div
    class="project-carousel-card"
    v-bind:class="{
      'previous-carousel-card': index === 0,
      'current-carousel-card': index === 1,
      'next-carousel-card': index === 2
    }"
    v-bind:style="carouselCardStyle(index)"
    v-bind:aria-hidden="index !== 1 ? 'true' : 'false'"
    v-bind:inert="index !== 1 ? '' : null"
    v-for="(project, index) in carouselProjects"
    v-bind:key="project ? project.title : 'empty-' + index">

      <div v-if="project">

        <div class="project-modal-content">
          <div class="project-modal-left">
           <img
              v-bind:key="project.poster || project.image"
              v-bind:src="project.poster || project.image"
              v-bind:alt="project.title + ' poster'"
              v-bind:class="['modal-poster', {
                'has-poster-art': project.poster,
                'is-loaded': imageIsLoaded(project.poster || project.image)
              }]"
              v-bind:data-image-src="project.poster || project.image"
              loading="eager"
              decoding="async"
              draggable="false"
              fetchpriority="high"
              v-on:contextmenu.prevent
              v-on:dragstart.prevent
              v-on:load="markImageLoaded"
              v-on:error="retryImageLoad($event, project.poster || project.image)">
          </div>

          <div
            v-bind:class="[
              'project-modal-right',
              { 'has-project-reel': hasValidVimeo(project) }
            ]">
            <h2 class="mobile-title">{{ project.title }}</h2>
          
            <div class="modal-title-row">
              <h2 class="desktop-title">{{ project.title }}</h2>
            
              <span
                class="project-counter"
                aria-label="Project position in gallery">
                {{ projectCounter(project) }}
              </span>
            </div>

            <p v-if="project.studio"><strong>Studio:</strong> {{ project.studio }}</p>
            <p v-if="project.year"><strong>Year:</strong> {{ project.year }}</p>
            <p v-if="project.role"><strong>Role:</strong> {{ project.role }}</p>

                <div
                  class="project-details-divider"
                  aria-hidden="true">
                </div>
                
                <p v-if="project.summary" class="project-summary">
              {{ project.summary }}
            </p>
            
            <p
              v-if="project.thumbnailDisclaimer"
              class="project-thumbnail-disclaimer">
              {{ project.thumbnailDisclaimer }}
            </p>
            
            <div class="project-actions-row">

                <div v-if="project.tags && project.tags.length" class="project-tags">
                  <button
                    v-for="tag in sortedTagsForProject(project)"
                    v-bind:key="tag"
                    v-bind:class="['project-tag', { active: activeTag === tag }]"
                    v-bind:tabindex="index === 1 ? 0 : -1"
                    v-bind:aria-label="'Filter projects by tag: ' + tag"
                    v-on:click="index === 1 && filterByTag(tag, $event)">
                    {{ tag }}
                  </button>
                </div>
              
                <div
                  v-if="hasValidVimeo(project)"
                  class="project-reel-slot">
              
                  <button
                    class="project-reel-button"
                    v-bind:class="{ active: showVideo && index === 1 }"
                    v-bind:tabindex="index === 1 ? 0 : -1"
                    v-bind:aria-pressed="showVideo && index === 1 ? 'true' : 'false'"
                    v-bind:aria-label="showVideo && index === 1
                      ? 'Collapse video for ' + project.title
                      : 'Play video for ' + project.title"
                    v-on:touchstart.stop="holdReelButtonPress($event)"
                    v-on:touchmove.stop
                    v-on:touchend.stop.prevent="handleReelButtonTouchEnd($event, index)"
                    v-on:touchcancel.stop="cancelReelButtonPress($event)"
                    v-on:click.stop="index === 1 && handleReelButtonClick($event)">            
                    <svg
                      v-if="showVideo"
                      class="project-reel-icon project-reel-icon-chevron"
                      aria-hidden="true"
                      focusable="false">
                      <use xlink:href="#icon-ae5f214dfe6f30ef735be44de045bf4d"></use>
                    </svg>
              
                    <svg
                      v-else
                      class="project-reel-icon project-reel-icon-play"
                      aria-hidden="true"
                      focusable="false">
                      <use xlink:href="#icon-52655f31fd82f82d1c86cb188764da1e"></use>
                    </svg>
              
                  </button>
                </div>
              
              </div>
            
            </div>
         </div>
      </div>
    </div>
  </div>
</div>


  

<transition
  name="reelfade"
  v-on:enter="scrollReelIntoView"
  v-on:after-enter="scrollReelIntoView"
  v-on:after-leave="cleanupReelAfterClose">
  <div
    v-if="hasValidVimeo(selectedProject) && showVideo"
    class="video-container">
    <iframe
      v-bind:src="embedVimeo(selectedProject.vimeo)"
      v-bind:title="selectedProject.title + ' reel'"
      width="100%"
      height="400"
      frameborder="0"
      loading="lazy"
      allowfullscreen>
    </iframe>
  </div>
</transition>

  <div
  v-if="shouldShowSwipeHint"
  class="project-swipe-hint project-swipe-hint-bottom"
  v-bind:class="{
  'is-intro': !hasSeenSwipeHint,
  'is-swipe-left': swipeHintDirection === 'left',
  'is-swipe-right': swipeHintDirection === 'right',
  'is-dragging-left': isDragging && swipeOffset < 0,
  'is-dragging-right': isDragging && swipeOffset > 0
}"
v-bind:style="swipeHintDragStyle"
v-on:animationend.self="dismissSwipeHint"
  aria-hidden="true">

  <span class="swipe-bar swipe-bar-outer"></span>
  <span class="swipe-bar swipe-bar-middle"></span>
  <span class="swipe-bar swipe-bar-inner"></span>

  <span class="swipe-bar swipe-bar-center"></span>

  <span class="swipe-bar swipe-bar-inner"></span>
  <span class="swipe-bar swipe-bar-middle"></span>
  <span class="swipe-bar swipe-bar-outer"></span>

</div>

<div class="project-shortcuts">
  ← → ↑ ↓ Navigate &nbsp; • &nbsp; Esc Close
</div>

</div>
</div>
</div>
</transition>
</div>

`;

new Vue({
el: "#app3",
data: {
search: "",
currentFilter: "ALL",
activeTag: "",
selectedProject: null,
openingProjectTitle: "",
openProjectTimer: null,
showVideo: false,
modalTopAnchored: false,
modalScrollTop: 0,
lastClosedProjectTitle: "",
projectToFocusAfterClose: "",
bodyScrollY: 0,
touchStartX: 0,
touchStartY: 0,
touchCurrentX: 0,
touchCurrentY: 0,
touchStartTime: 0,
touchEndTime: 0,
touchMode: "",
isDragging: false,
isSwipeAnimating: false,
isCarouselResetting: false,
swipeOffset: 0,
carouselScrollStart: 0,
carouselTransitionMs: 260,
currentCarouselTransitionMs: 260,
gridScrollAnimationFrame: null,
gridHoverLockTimer: null,
isGridHoverLocked: false,
hasSeenSwipeHint: false,
swipeHintDirection: "",
swipeHintPulseTimer: null,
carouselResizeObserver: null,
tabletReelScrollFrame: null,
tabletReelOpenChaseStarted: false,
orientationMaskTimer: null,
orientationMaskRun: 0,
lastKnownGalleryOrientation: "",
isPhoneReelClosing: false,
loadedImages: {},
  
// Recommended project tag vocabulary.
// Keep tags short, professional, and consistent.
// These are skill / contribution tags, not project category filters.
// Use ALL CAPS in the tags area.
//
// LEAD
// SUPERVISION
// KEYFRAME
// MOCAP
// PREVIS
// POSTVIS
// CREATURE
// RAGDOLL
// STYLIZED

// DISCLOSURE OPTIONS:
//
// "full"
// Publish the complete project entry using the full thumbnail.
//
// "limited"
// Publish only the title, studio, year, limited summary,
// explicitly approved limited thumbnail, and poster.
//
// LIMITED THUMBNAIL RULES:
// - Store approved limited thumbnails in assets/thumbs/limited/.
// - Set limitedImage to the filename only, not a URL or folder path.
// - The filename must end in _thumb_limited.webp.
// - Leave limitedImage blank to publish a blank thumbnail.
// - A file in the limited folder is never published unless a project
//   explicitly references it with limitedImage.
//
// "hidden"
// Do not include the project in the public gallery.
//
// The build process will fail rather than publish a project
// that does not have an explicit disclosure setting.
  
projects: [
  {
    "title": "Spider-Man: Brand New Day",
    "image": "https://nstclair13.github.io/images/thumbs/limited/TBO_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/TBO_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2026",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "thumbnailDisclaimer": "",
    "vimeo": ""
  },
  {
    "title": "Project Hail Mary",
    "image": "https://nstclair13.github.io/images/thumbs/limited/PHM_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/PHM_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2026",
    "role": "Lead Animator / Acting Animation Supervisor",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "thumbnailDisclaimer": "",
    "vimeo": ""
  },
  {
    "title": "The Fantastic Four: First Steps",
    "image": "https://nstclair13.github.io/images/thumbs/limited/FFFS_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/BMNa_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2025",
    "role": "Senior Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "A Minecraft Movie",
    "image": "https://nstclair13.github.io/images/thumbs/limited/MCT_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/MCTa_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2025",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Ghostbusters: Frozen Empire",
    "image": "https://nstclair13.github.io/images/thumbs/limited/FHS_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/FHSa_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2024",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "The Marvels",
    "image": "https://nstclair13.github.io/images/thumbs/limited/GRO_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/GROb_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2023",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Ant-Man and The Wasp: Quantumania",
    "image": "https://nstclair13.github.io/images/thumbs/limited/DBY_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/DBYb_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2023",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Spider-Man: No Way Home",
    "image": "https://nstclair13.github.io/images/thumbs/limited/NWH_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/SNWa_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2021",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "The Falcon and the Winter Soldier",
    "image": "https://nstclair13.github.io/images/thumbs/limited/TAG_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/TAG_poster.webp",
    "category": [
      "ALL",
      "EPISODIC"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2021",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Mulan",
    "image": "https://nstclair13.github.io/images/thumbs/limited/MUL_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/MUL_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2020",
    "role": "Senior Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Jumanji: The Next Level",
    "image": "https://nstclair13.github.io/images/thumbs/limited/J19_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/J19_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2019",
    "role": "Senior Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Spider-Man: Far From Home",
    "image": "https://nstclair13.github.io/images/thumbs/limited/BOS_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/BOS_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2019",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "image": "https://nstclair13.github.io/images/thumbs/limited/CBF_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/CBFa_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2018",
    "role": "Senior Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Love, Death & Robots: Lucky 13",
    "image": "https://nstclair13.github.io/images/thumbs/limited/LKY_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/LKY_poster.webp",
    "category": [
      "ALL",
      "EPISODIC"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2019",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "The Meg",
    "image": "https://nstclair13.github.io/images/thumbs/limited/MEG_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/MEG_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2018",
    "role": "Senior Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Spider-Man: Homecoming",
    "image": "https://nstclair13.github.io/images/thumbs/limited/SOG_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/SOG_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2017",
    "role": "Lead Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Kingsman: The Golden Circle",
    "image": "https://nstclair13.github.io/images/thumbs/limited/KM2_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/KM2_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2017",
    "role": "Senior Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Suicide Squad",
    "image": "https://nstclair13.github.io/images/thumbs/limited/BRO_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/BRO_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2016",
    "role": "Senior Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Alice Through the Looking Glass",
    "image": "https://nstclair13.github.io/images/thumbs/limited/AL2_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/AL2_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2016",
    "role": "Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Pixels",
    "image": "https://nstclair13.github.io/images/thumbs/limited/PXL_thumb_limited.webp",
    "poster": "https://nstclair13.github.io/images/posters/PXL_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Sony Pictures Imageworks",
    "year": "2015",
    "role": "Animator",
    "tags": [],
    "summary": "I worked on this film at Sony Pictures Imageworks. Additional details will be added when they can be shared publicly.",
    "vimeo": "",
    "thumbnailDisclaimer": ""
  },
  {
    "title": "Hercules",
    "image": "https://nstclair13.github.io/images/thumbs/full/HERC_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/HERC_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Method Studios",
    "year": "2014",
    "role": "Animator",
    "tags": [
      "KEYFRAME",
      "PREVIS"
    ],
    "summary": "Beginning with destruction previs for the statue collapse, I later took several shots from initial blocking through final animation, including the statue head, Cotys’ fall, and the closing Hercules shot. The production gave me valuable experience with large-scale destruction and collaborative shot development.",
    "vimeo": "https://vimeo.com/111811908"
  },
  {
    "title": "Jupiter Ascending",
    "image": "https://nstclair13.github.io/images/thumbs/full/JUP_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/JUP_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Method Studios",
    "year": "2015",
    "role": "Animator",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "A short sequence involving a CG spacecraft, digital doubles, and camera animation allowed me to work across several parts of a single sequence. Although my contribution was relatively small, the assignment offered useful variety within the production.",
    "vimeo": "https://vimeo.com/131510471"
  },
  {
    "title": "Divergent",
    "image": "https://nstclair13.github.io/images/thumbs/full/DIV_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/DIV_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Method Studios",
    "year": "2014",
    "role": "Animator",
    "tags": [
      "CREATURE",
      "KEYFRAME"
    ],
    "summary": "CG camera takeovers, digital doubles, creature animation for dogs and ravens, a fully CG train, motion capture, and animated props made this one of my most varied assignments at Method Studios. The range of work required moving between several animation disciplines within the same production.",
    "vimeo": "https://vimeo.com/105912630"
  },
  {
    "title": "Thor: The Dark World",
    "image": "https://nstclair13.github.io/images/thumbs/full/THOR_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/THOR_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Method Studios",
    "year": "2014",
    "role": "Animator",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "My first Marvel production included animating Mjolnir across several shots, contributing to a partially CG Thor performance, and handling hero shards during a battle sequence before they moved to FX. The work introduced me to the scale and pace of a large Marvel production.",
    "vimeo": "https://vimeo.com/86583124"
  },
  {
    "title": "Game of War: Fire Age",
    "image": "https://nstclair13.github.io/images/thumbs/full/GOW_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/GOWF_poster.webp",
    "category": [
      "ALL",
      "COMMERCIAL"
    ],
    "studio": "Method Studios",
    "year": "2013",
    "role": "Animator",
    "tags": [
      "CREATURE",
      "KEYFRAME"
    ],
    "summary": "Animating CG dragon serpents for this commercial introduced me to the faster pace of advertising work, where short schedules, quick turnarounds, and constant iteration were as important as the animation itself.",
    "vimeo": ""
  },
  {
    "title": "Fox Sports: You Would Need",
    "image": "https://nstclair13.github.io/images/thumbs/full/FOX_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/FOX_poster.webp",
    "category": [
      "ALL",
      "COMMERCIAL"
    ],
    "studio": "Method Studios",
    "year": "2014",
    "role": "Animator",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "Animating a bundle of televisions balancing on top of one another formed the focus of my work for this Fox Sports campaign. The shorter commercial schedule offered a change of pace from feature films and required quick iteration, adaptability, and efficient problem solving.",
    "vimeo": ""
  },
  {
    "title": "AT&T Sing",
    "image": "https://nstclair13.github.io/images/thumbs/full/ATT_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/ATT_poster.webp",
    "category": [
      "ALL",
      "COMMERCIAL"
    ],
    "studio": "Method Studios",
    "year": "2014",
    "role": "Animator",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "A group of synchronized Roombas performing choreographed movements formed the center of my animation work for this commercial.",
    "vimeo": ""
  },
  {
    "title": "Microsoft Phones - Penn Station",
    "image": "https://nstclair13.github.io/images/thumbs/full/WINPH_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/WINPH_poster.webp",
    "category": [
      "ALL",
      "COMMERCIAL"
    ],
    "studio": "Method Studios",
    "year": "2013",
    "role": "Animator",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "The assignment focused on animating Microsoft phones for a commercial displayed across digital signage in New York’s Penn Station.",
    "vimeo": ""
  },
  {
    "title": "The Nut Job",
    "image": "https://nstclair13.github.io/images/thumbs/full/NUTJ_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/NUTJ_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Duncan Studio",
    "year": "2014",
    "role": "Animator",
    "tags": [
      "CREATURE",
      "KEYFRAME",
      "STYLIZED"
    ],
    "summary": "My first fully CG animated feature gave me considerable creative freedom and helped develop my stylized character-animation skills. Completed remotely for Duncan Studio, it remains a meaningful milestone from early in my career.",
    "vimeo": "https://vimeo.com/90906642"
  },
  {
    "title": "Percy Jackson: Sea of Monsters",
    "image": "https://nstclair13.github.io/images/thumbs/full/PJSEA_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/PJSEA_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Rhythm & Hues Studios",
    "year": "2013",
    "role": "Animator",
    "tags": [
      "CREATURE",
      "KEYFRAME"
    ],
    "summary": "The Charybdis sequence was the main focus of my work, including creatures moving inside the sea monster and several additional creature shots throughout the film. As my final production at Rhythm & Hues before its restructuring, the project also marked the end of an important early chapter in my career.",
    "vimeo": "https://vimeo.com/82074711"
  },
  {
    "title": "R.I.P.D.",
    "image": "https://nstclair13.github.io/images/thumbs/full/RIPD_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/RIPD_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Rhythm & Hues Studios",
    "year": "2013",
    "role": "Animator",
    "tags": [
      "CREATURE",
      "KEYFRAME",
      "MOCAP"
    ],
    "summary": "Production rotoanimation and motion capture were central to the work. I studied live-action plates, combined multiple capture takes into new performances, and matched a CG Kevin Bacon to his live-action counterpart. The project taught me the precision required for seamless visual effects and deepened my appreciation for the detail behind feature-film animation.",
    "vimeo": "https://vimeo.com/78889666?"
  },
  {
    "title": "Oz the Great and Powerful",
    "image": "https://nstclair13.github.io/images/thumbs/full/OZ_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/OZ_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Luma Pictures",
    "year": "2013",
    "role": "Animator",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "A short contract focused on portions of the opening tornado sequence. Although my time on the production was brief, working with a different studio and team broadened my perspective on how feature-film pipelines and collaborative approaches can vary.",
    "thumbnailDisclaimer": "Project thumbnail only. Featured image is not my work.",
    "vimeo": ""
  },
  {
    "title": "Snow White and the Huntsman",
    "image": "https://nstclair13.github.io/images/thumbs/full/HUNT_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/HUNT_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Rhythm & Hues Studios",
    "year": "2012",
    "role": "Animator",
    "tags": [
      "CREATURE",
      "KEYFRAME",
      "MOCAP"
    ],
    "summary": "Creature-heavy sequences included the Bridge Troll encounter and Snow White’s meeting with the Great Stag. The work broadened my creature-animation experience and provided one of my earliest opportunities to use motion capture on a feature film.",
    "vimeo": "https://vimeo.com/78890369"
  },
  {
    "title": "Alvin and the Chipmunks: Chip Wrecked",
    "image": "https://nstclair13.github.io/images/thumbs/full/CHIP_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/CHIP_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Rhythm & Hues Studios",
    "year": "2011",
    "role": "Animator",
    "tags": [
      "KEYFRAME",
      "CREATURE"
    ],
    "summary": "Dialogue, acting, and character-driven animation for the Chipmunks introduced me to performance-focused character work within live-action visual effects. As my second professional production, it helped establish the skills I would continue developing throughout my career.",
    "vimeo": "https://vimeo.com/78915467"
  },
  {
    "title": "Mr. Popper's Penguins",
    "image": "https://nstclair13.github.io/images/thumbs/full/POP_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/POP_poster.webp",
    "category": [
      "ALL",
      "FILM"
    ],
    "studio": "Rhythm & Hues Studios",
    "year": "2011",
    "role": "Animator",
    "tags": [
      "CREATURE",
      "KEYFRAME"
    ],
    "summary": "This was my first professional production and the project that launched my career. Hired on the day I graduated from Animation Mentor, I joined a team responsible for animating every penguin in the film. I remain grateful for the opportunity and for the trust placed in me at the start of my career.",
    "vimeo": "https://vimeo.com/78047646"
  },
  {
    "title": "DmC: Devil May Cry",
    "image": "https://nstclair13.github.io/images/thumbs/full/DMC_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/DMC_poster.webp",
    "category": [
      "ALL",
      "CINEMATICS"
    ],
    "studio": "Rhythm & Hues Studios",
    "year": "2012",
    "role": "Animator",
    "tags": [
      "KEYFRAME",
      "MOCAP"
    ],
    "summary": "Created between feature-film assignments, this CG promotional cinematic offered a change of pace and the chance to work with a small team on a shorter game-focused production. The animation combined keyframe work with motion capture.",
    "vimeo": "https://vimeo.com/82169026"
  },
  {
    "title": "Kinect Star Wars",
    "image": "https://nstclair13.github.io/images/thumbs/full/KINECT_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/KINECT_poster.webp",
    "category": [
      "ALL",
      "CINEMATICS",
      "GAMES"
    ],
    "studio": "Rhythm & Hues Studios",
    "year": "2012",
    "role": "Animator",
    "tags": [
      "CREATURE",
      "KEYFRAME"
    ],
    "summary": "A small six-person team created this in-game cinematic, with my work centered on Rancors and Stormtroopers. The assignment offered a fun mix of creature animation and deliberately exaggerated Star Wars action.",
    "vimeo": ""
  },
  {
    "title": "Doing This To Me",
    "image": "https://nstclair13.github.io/images/thumbs/full/doing_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/doing_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2014",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "This dialogue-driven acting exercise was completed during an AnimSquad workshop using an audio clip from the film Ghost.",
    "vimeo": "https://vimeo.com/133730905"
  },
  {
    "title": "Under the Gun",
    "image": "https://nstclair13.github.io/images/thumbs/full/under_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/under_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2014",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "Built around an audio clip from the television series Castle, this AnimSquad workshop exercise focused on dialogue, acting choices, and character performance.",
    "vimeo": "https://vimeo.com/133820179"
  },
  {
    "title": "Say Cheese",
    "image": "https://nstclair13.github.io/images/thumbs/full/cheese_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/cheese_poster.webp",
    "category": [
      "ALL",
      "PERSONAL"
    ],
    "studio": "",
    "year": "2014",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "A short personal animation created between iAnimate workshops.",
    "vimeo": "https://vimeo.com/99312235"
  },
  {
    "title": "I Killed a Man",
    "image": "https://nstclair13.github.io/images/thumbs/full/killed_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/killed_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2014",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "Reference performed specifically for the exercise became the foundation for this iAnimate acting piece, with the work focused on clear performance choices and believable character behavior.",
    "vimeo": "https://vimeo.com/96880763"
  },
  {
    "title": "Into Oblivion",
    "image": "https://nstclair13.github.io/images/thumbs/full/oblivion_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/oblivion_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2014",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "An audio clip from The Rocky Horror Picture Show provided the basis for this iAnimate performance exercise.",
    "vimeo": "https://vimeo.com/94880595"
  },
  {
    "title": "Aquaman?",
    "image": "https://nstclair13.github.io/images/thumbs/full/aquaman_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/aquaman_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2012",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "Produced for iAnimate’s collaborative Team Ultimate Webisode #1, this was the shot I volunteered to animate within the larger student production.",
    "vimeo": "https://vimeo.com/95541035"
  },
  {
    "title": "KJP Anim Test",
    "image": "https://nstclair13.github.io/images/thumbs/full/KJP_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/KJP_poster.webp",
    "category": [
      "ALL",
      "PERSONAL"
    ],
    "studio": "",
    "year": "2013",
    "role": "Animator",
    "tags": [
      "KEYFRAME",
      "STUDIO TEST"
    ],
    "summary": "Created while applying to studios, this animation test led to an interview with the former Los Angeles branch of Kojima Productions. Although the timing did not lead to a position, the piece remains a memorable milestone from early in my career.",
    "vimeo": "https://vimeo.com/590818952"
  },
  {
    "title": "Plastic and Numb",
    "image": "https://nstclair13.github.io/images/thumbs/full/plastic_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/plastic_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2014",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "Dialogue from the television series Enlightened formed the basis of this iAnimate acting exercise.",
    "vimeo": "https://vimeo.com/89237477"
  },
  {
    "title": "Lint or Bug?",
    "image": "https://nstclair13.github.io/images/thumbs/full/lint_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/lint_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2014",
    "role": "Student",
    "tags": [
      "KEYFRAME",
      "CREATURE"
    ],
    "summary": "I handled all animation, lighting, and rendering for this iAnimate workshop piece in Autodesk Maya using Mental Ray. The character rig was supplied by iAnimate.",
    "vimeo": "https://vimeo.com/88559498"
  },
  {
    "title": "Spot!",
    "image": "https://nstclair13.github.io/images/thumbs/full/spot_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/spot_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2013",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "An audio clip from the television series New Girl provided the performance foundation for this iAnimate acting exercise.",
    "vimeo": "https://vimeo.com/94876634"
  },
  {
    "title": "iAnimate WS4 Progress Reel",
    "image": "https://nstclair13.github.io/images/thumbs/full/ws4_reel_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/ws4_reel_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2013",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "Two full-body acting exercises—one completed and one still in progress—documented my development during iAnimate Workshop 4, with a focus on performance, physicality, and acting.",
    "vimeo": "https://vimeo.com/54580123"
  },
  {
    "title": "Secure Package",
    "image": "https://nstclair13.github.io/images/thumbs/full/package_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/package_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2013",
    "role": "Student",
    "tags": [
      "KEYFRAME"
    ],
    "summary": "A connected sequence of shots created during a final iAnimate workshop explored continuity, staging, and narrative-driven animation in a production-style exercise. Although I did not have time to bring every shot to final polish, the piece reflects my approach to visual storytelling across a sequence.",
    "vimeo": "https://vimeo.com/88972964"
  },
  {
    "title": "Ogre Fight",
    "image": "https://nstclair13.github.io/images/thumbs/full/ogre_thumb.webp",
    "poster": "https://nstclair13.github.io/images/posters/ogre_poster.webp",
    "category": [
      "ALL",
      "STUDENT"
    ],
    "studio": "",
    "year": "2013",
    "role": "Student",
    "tags": [
      "CREATURE",
      "KEYFRAME"
    ],
    "summary": "Selected for Animation Mentor’s inaugural Advanced Creature workshop, I created this shot in exchange for attending the course at no cost. The finished work was intended for use in future VFX coursework.",
    "vimeo": "https://vimeo.com/96280671"
  }
]
},

computed: {
filteredAndSearched: function() {
  const searchTerm = this.search.toLowerCase().trim();
  const activeTag = this.activeTag.toLowerCase().trim();

  return this.projects.filter((project) => {
    const searchableText = [
      project.title,
      project.studio,
      project.year,
      project.role,
      project.summary,
      project.category ? project.category.join(" ") : "",
      project.tags ? project.tags.join(" ") : ""
    ].join(" ").toLowerCase();

    const matchesSearch =
      !searchTerm || searchableText.includes(searchTerm);

    const matchesCategory =
      this.currentFilter === "ALL" ||
      project.category.indexOf(this.currentFilter) !== -1;

    const matchesTag =
      !activeTag || searchableText.includes(activeTag);

    return matchesSearch && matchesCategory && matchesTag;
  });
},
    

carouselTrackStyle: function() {
  return {
    transform: "translateX(" + this.swipeOffset + "px)",
    transition: (this.isDragging || this.isCarouselResetting)
      ? "none"
      : "transform " + this.currentCarouselTransitionMs + "ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  };
},
  
previousProject: function() {
  return this.getAdjacentProject(-1);
},

nextProject: function() {
  return this.getAdjacentProject(1);
},

carouselProjects: function() {
  return [
    this.previousProject,
    this.selectedProject,
    this.nextProject
  ];
},

swipeHintDragStyle: function() {
  const viewportWidth = this.$refs.carouselViewport
    ? this.$refs.carouselViewport.clientWidth
    : window.innerWidth;

  /*
  Reach full indicator response at roughly the same
  distance used to commit the project swipe.
  */
  const responseDistance = Math.max(
    1,
    Math.min(viewportWidth * 0.32, 180)
  );

  const progress = Math.min(
    Math.abs(this.swipeOffset) / responseDistance,
    1
  );

  const direction =
    this.swipeOffset < 0 ? -1 : 1;

  /*
  Each surrounding bar activates slightly later,
  creating a centre-to-edge progression.
  */
  const stage = function(start, end) {
    if (progress <= start) return 0;
    if (progress >= end) return 1;

    return (
      (progress - start) /
      (end - start)
    );
  };

  const innerProgress = stage(0.04, 0.38);
  const middleProgress = stage(0.25, 0.68);
  const outerProgress = stage(0.52, 1);

  const oppositeFade =
    1 - progress * 0.28;

  return {
    "--swipe-center-shift":
      (
        direction *
        progress *
        4
      ).toFixed(2) + "px",

    "--swipe-center-scale":
      (
        1 +
        progress *
        0.06
      ).toFixed(3),

    "--swipe-inner-shift":
      (
        direction *
        innerProgress *
        1.5
      ).toFixed(2) + "px",

    "--swipe-middle-shift":
      (
        direction *
        middleProgress *
        3
      ).toFixed(2) + "px",

    "--swipe-outer-shift":
      (
        direction *
        outerProgress *
        4
      ).toFixed(2) + "px",

    "--swipe-inner-scale":
      (
        1 +
        innerProgress *
        0.07
      ).toFixed(3),

    "--swipe-middle-scale":
      (
        1 +
        middleProgress *
        0.12
      ).toFixed(3),

    "--swipe-outer-scale":
      (
        1 +
        outerProgress *
        0.14
      ).toFixed(3),

    "--swipe-inner-opacity":
      (
        0.60 +
        innerProgress *
        0.40
      ).toFixed(3),

    "--swipe-middle-opacity":
      (
        0.35 +
        middleProgress *
        0.47
      ).toFixed(3),

    "--swipe-outer-opacity":
      (
        0.15 +
        outerProgress *
        0.45
      ).toFixed(3),

    "--swipe-opposite-inner-opacity":
      (
        0.60 *
        oppositeFade
      ).toFixed(3),

    "--swipe-opposite-middle-opacity":
      (
        0.35 *
        oppositeFade
      ).toFixed(3),

    "--swipe-opposite-outer-opacity":
      (
        0.15 *
        oppositeFade
      ).toFixed(3)
  };
},
  
shouldShowSwipeHint: function() {
  return (
    this.selectedProject &&
    this.isTouchModalLayout &&
    this.isTouchModalLayout()
  );
}

},

methods: {

shouldEagerLoadGridImage: function(projectIndex) {
  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    1024;

  var eagerCount =
    width <= 600 ? 2 :
    width <= 1024 ? 4 :
    6;

  return projectIndex < eagerCount;
},
  
resetGalleryView: function() {
  this.search = "";
  this.currentFilter = "ALL";
  this.activeTag = "";
},
  
projectTransitionStyle: function(project) {
  const sourceIndex = this.projects.findIndex((item) => {
    return item && project && item.title === project.title;
  });

  const safeIndex = sourceIndex === -1 ? 0 : sourceIndex;

  const fauxColumnCount = 4;
  const fauxColumn = safeIndex % fauxColumnCount;
  const fauxRow = Math.floor(safeIndex / fauxColumnCount);
  const fauxTotalRows = Math.max(
    1,
    Math.ceil(this.projects.length / fauxColumnCount) - 1
  );

  const rowProgress = fauxTotalRows
    ? fauxRow / fauxTotalRows
    : 0;

  const columnX = [-135, -45, 45, 135][fauxColumn];

  const yFromListPosition = -125 + rowProgress * 250;

  const smallVariationX = ((safeIndex * 17) % 31) - 15;
  const smallVariationY = ((safeIndex * 23) % 35) - 17;

  const directionX = Math.round(columnX + smallVariationX);
  const directionY = Math.round(yFromListPosition + smallVariationY);

  const scaleOptions = ["0.56", "0.58", "0.60", "0.62", "0.64", "0.66"];
  const scale = scaleOptions[safeIndex % scaleOptions.length];

  return {
    "--project-enter-x": directionX + "px",
    "--project-enter-y": directionY + "px",
    "--project-enter-scale": scale,

    "--project-exit-x": directionX + "px",
    "--project-exit-y": directionY + "px",
    "--project-exit-scale": scale
  };
},

       
warmFilteredProjectImages: function() {
  this.$nextTick(() => {
    requestAnimationFrame(() => {
      const visibleProjects = this.filteredAndSearched || [];

      visibleProjects.forEach((project) => {
        if (!project || !project.image) return;
        if (this.loadedImages[project.image]) return;

        const img = new Image();

        img.onload = () => {
          this.$set(this.loadedImages, project.image, true);
        };

        img.onerror = () => {
          this.$set(this.loadedImages, project.image, true);
        };

        img.decoding = "async";
        img.src = project.image;

        if (img.complete) {
          this.$set(this.loadedImages, project.image, true);
        }
      });
    });
  });
},
  
    setFilterTouchPress: function(filter) {
  const isTouchDevice =
    this.isTouchModalLayout &&
    this.isTouchModalLayout();

  if (!isTouchDevice) return;
  if (this.currentFilter === filter) return;

  this.lockGridHoverDuringSort();
  this.currentFilter = filter;
  this.warmFilteredProjectImages();
},

  setFilter: function(filter) {
  if (this.currentFilter === filter) return;

  this.lockGridHoverDuringSort();
  this.currentFilter = filter;
  this.warmFilteredProjectImages();
},

  handleProjectCardKeydown: function(event, project) {
  const key = event.key;

  if (
    key === "Enter" ||
    key === " " ||
    key === "Space" ||
    key === "Spacebar"
  ) {
    event.preventDefault();
    event.stopPropagation();
    this.openProject(project);
  }
},

getModalFocusableElements: function() {
  const modal = this.$refs.projectModal;
  if (!modal) return [];

  return Array.from(
    modal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => {
    const carouselCard = element.closest(".project-carousel-card");

    const isInCurrentCarouselCard =
      !carouselCard ||
      carouselCard.classList.contains("current-carousel-card");

    const isHidden =
      element.closest('[aria-hidden="true"]') ||
      element.closest("[inert]");

    const isVisible =
      element.getClientRects().length > 0;

    return (
      isInCurrentCarouselCard &&
      !isHidden &&
      isVisible
    );
  });
},

startProjectMousePress: function(event, project) {
  if (project && !this.selectedProject) {
    this.openingProjectTitle = project.title;
  }

  this.focusClickedProjectCard(event);
},
  
focusClickedProjectCard: function(event) {
  const card = event.currentTarget;
  if (!card) return;

  try {
    card.focus({ preventScroll: true });
  } catch (error) {
    card.focus();
  }
},

  
startProjectPress: function(event, project) {
  const isTouchDevice =
    this.isTouchModalLayout &&
    this.isTouchModalLayout();

  if (!isTouchDevice || !project || this.selectedProject) return;

  const card = event && event.currentTarget;

  if (card) {
    card.classList.add("is-touch-pressing");
  }
},

clearProjectPress: function() {
  if (this.$el) {
    const touchPressedCards = this.$el.querySelectorAll(".project.is-touch-pressing");

    for (let i = 0; i < touchPressedCards.length; i++) {
      touchPressedCards[i].classList.remove("is-touch-pressing");
    }
  }

  if (!this.selectedProject) {
    this.openingProjectTitle = "";
  }
},

  
focusModal: function() {
  this.$nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const modal = this.$refs.projectModal;
        if (!modal) return;

        try {
          modal.focus({ preventScroll: true });
        } catch (error) {
          modal.focus();
        }
      });
    });
  });
},

focusProjectCard: function(projectTitle) {
  this.$nextTick(() => {
    const cards = this.$el.querySelectorAll(".project[data-project-title]");

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].getAttribute("data-project-title") === projectTitle) {
        try {
          cards[i].focus({ preventScroll: true });
        } catch (error) {
          cards[i].focus();
        }

        return;
      }
    }
  });
},

scrollGridToProject: function(projectTitle, duration) {
  if (!projectTitle) return;

  const cards = this.$el.querySelectorAll(".project[data-project-title]");
  let targetCard = null;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].getAttribute("data-project-title") === projectTitle) {
      targetCard = cards[i];
      break;
    }
  }

  if (!targetCard) return;

  const isTouchDevice =
    this.isTouchModalLayout &&
    this.isTouchModalLayout();

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const viewportHeight =
    window.innerHeight ||
    document.documentElement.clientHeight;

  const cardRect = targetCard.getBoundingClientRect();

  const desktopComfortBuffer = 120;

  const isComfortablyVisibleOnDesktop =
    !isTouchDevice &&
    cardRect.top >= desktopComfortBuffer &&
    cardRect.bottom <= viewportHeight - desktopComfortBuffer;

  if (isComfortablyVisibleOnDesktop) return;

  const isBodyFixed = document.body.style.position === "fixed";

  const fixedTop = parseInt(document.body.style.top, 10);

  const currentScrollY = isBodyFixed
    ? Math.abs(fixedTop) || this.bodyScrollY || 0
    : window.scrollY || window.pageYOffset || 0;

  const cardPageTop = currentScrollY + cardRect.top;

  const pageHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  this.$el.scrollHeight + this.$el.getBoundingClientRect().top + currentScrollY
);

const maxScrollY = Math.max(
  0,
  pageHeight - viewportHeight
);

  const targetScrollY = Math.max(
    0,
    Math.min(
      cardPageTop - viewportHeight / 2 + cardRect.height / 2,
      maxScrollY
    )
  );

  const applyScroll = (scrollY) => {
    this.bodyScrollY = scrollY;

    if (isBodyFixed) {
      document.body.style.top = "-" + scrollY + "px";
    } else {
      window.scrollTo(0, scrollY);
    }
  };

  if (this.gridScrollAnimationFrame) {
    cancelAnimationFrame(this.gridScrollAnimationFrame);
    this.gridScrollAnimationFrame = null;
  }

  if (
    prefersReducedMotion ||
    !duration ||
    Math.abs(targetScrollY - currentScrollY) < 4
  ) {
    applyScroll(targetScrollY);
    return;
  }

  const startScrollY = currentScrollY;
  const distance = targetScrollY - startScrollY;
  const startTime = performance.now();
  const scrollDuration = Math.max(140, Math.min(duration, 360));

  const easeOut = function(t) {
    return 1 - Math.pow(1 - t, 3);
  };

  const animate = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1);
    const eased = easeOut(progress);
    const nextScrollY = startScrollY + distance * eased;

    applyScroll(nextScrollY);

    if (progress < 1) {
      this.gridScrollAnimationFrame = requestAnimationFrame(animate);
    } else {
      applyScroll(targetScrollY);
      this.gridScrollAnimationFrame = null;
    }
  };

  this.gridScrollAnimationFrame = requestAnimationFrame(animate);
},

  
trapModalFocus: function(event) {
  const modal = this.$refs.projectModal;
  if (!modal) return;

  event.stopPropagation();

  const focusableElements = this.getModalFocusableElements();

  if (!focusableElements.length) {
    event.preventDefault();
    modal.focus();
    return;
  }

  event.preventDefault();

  const activeElement = document.activeElement;
  const currentIndex = focusableElements.indexOf(activeElement);

  let nextIndex;

  if (event.shiftKey) {
    nextIndex =
      currentIndex <= 0
        ? focusableElements.length - 1
        : currentIndex - 1;
  } else {
    nextIndex =
      currentIndex === -1 || currentIndex >= focusableElements.length - 1
        ? 0
        : currentIndex + 1;
  }

  const nextElement = focusableElements[nextIndex];

  if (nextElement) {
    nextElement.focus();
  }
},

 updateGalleryVisualViewportHeight: function() {
  const viewportHeight =
    window.visualViewport && window.visualViewport.height
      ? window.visualViewport.height
      : window.innerHeight;

  if (this.$el && viewportHeight) {
    this.$el.style.setProperty(
      "--gallery-visual-vh",
      viewportHeight + "px"
    );
  }
},

placeReelWithoutAnimation: function() {
  const reel = this.$el.querySelector(".video-container");
  const modal = this.$refs.projectModal;
  const overlay = this.$refs.projectModalOverlay;

  if (!reel || !modal) return;

  const useOverlay =
    this.modalTopAnchored &&
    this.canUseOverlayScrollModal() &&
    overlay;

  const scrollContainer = useOverlay
    ? overlay
    : modal;

  if (useOverlay) {
    scrollContainer.scrollTop = Math.max(
      0,
      scrollContainer.scrollHeight -
        scrollContainer.clientHeight
    );

    return;
  }

  const containerRect =
    scrollContainer.getBoundingClientRect();

  const reelRect =
    reel.getBoundingClientRect();

  const targetScroll =
    scrollContainer.scrollTop +
    reelRect.top -
    containerRect.top -
    (
      scrollContainer.clientHeight -
      reel.offsetHeight
    ) / 2;

  scrollContainer.scrollTop = Math.max(
    0,
    targetScroll
  );
},

handleGalleryViewportChange: function() {
  this.updateGalleryVisualViewportHeight();

  const currentOrientation =
    window.matchMedia(
      "(orientation: portrait)"
    ).matches
      ? "portrait"
      : "landscape";

  if (
    currentOrientation ===
    this.lastKnownGalleryOrientation
  ) {
    return;
  }

  this.lastKnownGalleryOrientation =
    currentOrientation;

  this.handleGalleryOrientationChange();
},

handleGalleryOrientationChange: function() {
  const orientationRun =
    ++this.orientationMaskRun;

  const modalBeforeResize =
    this.$refs.projectModal;

  const isCompactPhoneViewport =
    window.matchMedia("(max-width: 560px)").matches ||
    window.matchMedia(
      "(max-height: 560px) and (max-width: 1024px)"
    ).matches;

  const isCompactTouchModal =
    !!this.selectedProject &&
    this.isTouchModalLayout() &&
    isCompactPhoneViewport;

  const shouldMaskReposition =
    isCompactTouchModal &&
    this.showVideo;

  if (this.orientationMaskTimer) {
    clearTimeout(this.orientationMaskTimer);
    this.orientationMaskTimer = null;
  }

  if (modalBeforeResize) {
    modalBeforeResize.classList.remove(
      "is-orientation-revealing"
    );

    modalBeforeResize.classList.toggle(
      "is-orientation-adjusting",
      shouldMaskReposition
    );
  }

  this.updateGalleryVisualViewportHeight();

  /*
  When the reel is closed, remove any small
  landscape-only carousel offset before portrait.
  */
  if (
    isCompactTouchModal &&
    !this.showVideo
  ) {
    this.modalTopAnchored = false;
    this.$el.style.removeProperty(
      "--modal-anchor-top"
    );

    /*
    Landscape controls this height in CSS and clears
    the portrait inline height. Rebuild it immediately
    when returning to portrait with the reel closed.
    */
    this.syncCarouselViewportHeight();

    this.$nextTick(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const modal =
            this.$refs.projectModal;

          const overlay =
            this.$refs.projectModalOverlay;

          const carouselViewport =
            this.$refs.carouselViewport;

          if (modal) {
            modal.scrollTop = 0;
          }

          if (overlay) {
            overlay.scrollTop = 0;
          }

          if (carouselViewport) {
            carouselViewport.scrollTop = 0;
          }
        });
      });
    });

    return;
  }

  if (!shouldMaskReposition) return;

  const positionOpenReel = () => {
    if (
      orientationRun !==
        this.orientationMaskRun ||
      !this.selectedProject ||
      !this.showVideo
    ) {
      return;
    }

    this.updateGalleryVisualViewportHeight();
    this.syncCarouselViewportHeight();

    const modal = this.$refs.projectModal;
    const overlay = this.$refs.projectModalOverlay;

    if (!modal) return;

    const shouldAnchor =
      window.matchMedia("(orientation: landscape)").matches &&
      this.canUseOverlayScrollModal();

    modal.scrollTop = 0;

    if (overlay) {
      overlay.scrollTop = 0;
    }

    if (shouldAnchor) {
      const modalTop = Math.max(
        20,
        Math.round(
          modal.getBoundingClientRect().top
        )
      );

      this.$el.style.setProperty(
        "--modal-anchor-top",
        modalTop + "px"
      );

      this.modalTopAnchored = true;
    } else {
      this.modalTopAnchored = false;
      this.$el.style.removeProperty(
        "--modal-anchor-top"
      );
    }

    this.$nextTick(() => {
      if (
        orientationRun ===
          this.orientationMaskRun &&
        this.showVideo
      ) {
        this.placeReelWithoutAnimation();
      }

      requestAnimationFrame(() => {
        if (
          orientationRun ===
            this.orientationMaskRun &&
          this.showVideo
        ) {
          this.placeReelWithoutAnimation();
        }
      });
    });
  };

  positionOpenReel();

  window.setTimeout(positionOpenReel, 80);
  window.setTimeout(positionOpenReel, 180);

  this.orientationMaskTimer =
    window.setTimeout(() => {
      positionOpenReel();

      this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (
              orientationRun !==
              this.orientationMaskRun
            ) {
              return;
            }

            const settledModal =
              this.$refs.projectModal;

            if (this.showVideo) {
              this.placeReelWithoutAnimation();
            }

            if (
              settledModal &&
              settledModal.classList.contains(
                "is-orientation-adjusting"
              )
            ) {
              settledModal.classList.add(
                "is-orientation-revealing"
              );

              settledModal.classList.remove(
                "is-orientation-adjusting"
              );

              window.setTimeout(() => {
                if (settledModal.isConnected) {
                  settledModal.classList.remove(
                    "is-orientation-revealing"
                  );
                }
              }, 110);
            }

            this.orientationMaskTimer = null;
          });
        });
      });
    }, 260);
},

syncCarouselViewportHeight: function() {
  this.$nextTick(() => {
    const viewport = this.$refs.carouselViewport;

    if (this.carouselResizeObserver) {
      this.carouselResizeObserver.disconnect();
      this.carouselResizeObserver = null;
    }

    if (!viewport) return;

    const usesCssControlledHeight =
      this.isTabletLandscapeModalLayout() ||
      this.isPhoneLandscapeModalLayout();

    /*
    Landscape touch layouts control their carousel height in CSS.
    Do not replace that with a project-specific inline height.
    */
    if (usesCssControlledHeight) {
      viewport.style.height = "";
      return;
    }

    const currentCard = viewport.querySelector(
      ".current-carousel-card"
    );

    if (!currentCard) {
      viewport.style.height = "";
      return;
    }

    const applyHeight = () => {
      requestAnimationFrame(() => {
        if (
          !viewport.isConnected ||
          !currentCard.isConnected
        ) {
          return;
        }

        /*
        This observer may have been created before the phone rotated.
        Clear its old inline height as soon as landscape takes over.
        */
        if (
          this.isTabletLandscapeModalLayout() ||
          this.isPhoneLandscapeModalLayout()
        ) {
          viewport.style.height = "";
          return;
        }

        const contentHeight =
          Math.ceil(
            Math.max(
              currentCard.scrollHeight,
              currentCard.getBoundingClientRect().height
            )
          ) + 8;

        if (
          contentHeight > 0 &&
          Math.abs(
            viewport.getBoundingClientRect().height -
            contentHeight
          ) > 1
        ) {
          viewport.style.height = contentHeight + "px";
        }
      });
    };

    applyHeight();

    if ("ResizeObserver" in window) {
      this.carouselResizeObserver =
        new ResizeObserver(applyHeight);

      this.carouselResizeObserver.observe(currentCard);
    }
  });
},

  
  isMobileModalLayout: function() {
  return window.matchMedia("(max-width: 768px)").matches;
},

  isTouchModalLayout: function() {
  return (
    window.matchMedia("(hover: none)").matches ||
    window.matchMedia("(pointer: coarse)").matches ||
    navigator.maxTouchPoints > 0
  );
},

  isTouchLandscapeModalLayout: function() {
  return (
    this.isTouchModalLayout() &&
    window.matchMedia("(orientation: landscape)").matches
  );
},

isPhoneLandscapeModalLayout: function() {
  return (
    this.isTouchLandscapeModalLayout() &&
    window.matchMedia(
      "(max-height: 560px) and (max-width: 1024px)"
    ).matches &&
    (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    )
  );
},

isTabletLandscapeModalLayout: function() {
  return (
    this.isTouchLandscapeModalLayout() &&
    window.matchMedia(
      "(min-width: 900px) and (min-height: 600px)"
    ).matches
  );
},

canUseOverlayScrollModal: function() {
  const isTouchPortrait =
    this.isTouchModalLayout() &&
    window.matchMedia("(orientation: portrait)").matches;

  return (
    !isTouchPortrait &&
    (
      !this.isMobileModalLayout() ||
      this.isTouchLandscapeModalLayout()
    )
  );
},

scrollElementIntoViewInModal: function(element, blockPosition) {
  if (!element) return;

  const modal = this.$refs.projectModal;
  const overlay = this.$refs.projectModalOverlay;

  const scrollContainer =
    this.modalTopAnchored &&
    this.canUseOverlayScrollModal() &&
    overlay
      ? overlay
      : modal;

  if (!scrollContainer) return;

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const isTouchPortrait =
    this.isTouchModalLayout() &&
    window.matchMedia("(orientation: portrait)").matches;

  const runScroll = () => {
    const containerRect =
      scrollContainer.getBoundingClientRect();

    const elementRect =
      element.getBoundingClientRect();

    const buffer = 18;

    const isFullyVisible =
      elementRect.top >= containerRect.top + buffer &&
      elementRect.bottom <= containerRect.bottom - buffer;

    if (isFullyVisible) return;

    let targetScroll =
      scrollContainer.scrollTop +
      elementRect.top -
      containerRect.top;

    if (blockPosition === "center") {
      targetScroll =
        scrollContainer.scrollTop +
        elementRect.top -
        containerRect.top -
        (
          (
            scrollContainer.clientHeight -
            element.offsetHeight
          ) / 2
        );
    }

    if (blockPosition === "nearest") {
      const isAbove =
        elementRect.top < containerRect.top + buffer;

      const isBelow =
        elementRect.bottom > containerRect.bottom - buffer;

      if (isAbove) {
        targetScroll =
          scrollContainer.scrollTop +
          elementRect.top -
          containerRect.top -
          buffer;
      } else if (isBelow) {
        targetScroll =
          scrollContainer.scrollTop +
          elementRect.bottom -
          containerRect.bottom +
          buffer;
      } else {
        return;
      }
    }

    scrollContainer.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: prefersReducedMotion
        ? "auto"
        : "smooth"
    });
  };

  requestAnimationFrame(() => {
    if (isTouchPortrait) {
      runScroll();
    } else {
      requestAnimationFrame(runScroll);
    }
  });
},

holdReelButtonPress: function(event) {
  const button = event && event.currentTarget;
  const touch =
    event &&
    event.touches &&
    event.touches[0];

  if (!button) return;

  button.classList.add("is-touch-pressing");

  if (touch) {
    button.dataset.reelTouchStartX =
      String(touch.clientX);

    button.dataset.reelTouchStartY =
      String(touch.clientY);
  }
},

cancelReelButtonPress: function(event) {
  const button = event && event.currentTarget;

  if (!button) return;

  button.classList.remove("is-touch-pressing");

  delete button.dataset.reelTouchStartX;
  delete button.dataset.reelTouchStartY;
},

handleReelButtonTouchEnd: function(
  event,
  index
) {
  const button = event && event.currentTarget;
  const touch =
    event &&
    event.changedTouches &&
    event.changedTouches[0];

  if (!button) return;

  const startX =
    parseFloat(
      button.dataset.reelTouchStartX || "0"
    );

  const startY =
    parseFloat(
      button.dataset.reelTouchStartY || "0"
    );

  delete button.dataset.reelTouchStartX;
  delete button.dataset.reelTouchStartY;

  const movedTooFar =
    touch &&
    Math.hypot(
      touch.clientX - startX,
      touch.clientY - startY
    ) > 14;

  if (movedTooFar || index !== 1) {
    button.classList.remove(
      "is-touch-pressing"
    );

    return;
  }

  /*
  Complete the tap on touchend instead of relying
  on iOS to generate a later synthetic click.
  */
  button.dataset.reelIgnoreClickUntil =
    String(Date.now() + 700);

  this.handleReelButtonClick(event);
},

handleReelButtonClick: function(event) {
  const button = event && event.currentTarget;

  if (!button) return;

  const ignoreClickUntil =
    parseInt(
      button.dataset.reelIgnoreClickUntil || "0",
      10
    );

  /*
  Ignore the synthetic click that normally follows
  the touchend we already handled.
  */
  if (
    event.type === "click" &&
    Date.now() < ignoreClickUntil
  ) {
    delete button.dataset.reelIgnoreClickUntil;
    return;
  }

  /*
  Record the state that the button should have after toggleReel
  finishes updating Vue and the DOM.
  */
  const shouldBeActive = !this.showVideo;

  this.toggleReel();

  this.releaseReelButtonPressWhenReady(
    button,
    shouldBeActive
  );
},

releaseReelButtonPressWhenReady: function(
  button,
  shouldBeActive
) {
  if (!button) return;

  const waitForVueState = () => {
    if (!button.isConnected) return;

    const buttonIsActive =
      button.classList.contains("active");

    /*
    Keep the physical pressed state until Vue's .active class
    has reached the state requested by the tap.
    */
    if (buttonIsActive !== shouldBeActive) {
      requestAnimationFrame(waitForVueState);
      return;
    }

    /*
    Release one frame after the Vue state is visually present.
    */
    requestAnimationFrame(() => {
      if (button.isConnected) {
        button.classList.remove(
          "is-touch-pressing"
        );
      }
    });
  };

  requestAnimationFrame(waitForVueState);
},
  
toggleReel: function() {
  const modal = this.$refs.projectModal;
  const overlay = this.$refs.projectModalOverlay;

    if (this.showVideo) {

    /*
Compact phone landscape:

Collapse the reel and return the overlay to the
original closed-modal anchor. Do not move the anchor
itself; it already stores the correct closed position.
*/
if (
  this.isPhoneLandscapeModalLayout() &&
  this.modalTopAnchored &&
  overlay
) {
  if (this.isPhoneReelClosing) return;

  this.isPhoneReelClosing = true;

  const startScroll =
    overlay.scrollTop || 0;

  this.showVideo = false;

  this.$nextTick(() => {
    this.animateOverlayReelCloseScroll(
      startScroll,
      280
    );
  });

  return;
}

/*
All other constrained-height layouts:

Collapse the reel and return the overlay while
preserving the original closed-modal anchor.
*/
if (
  this.modalTopAnchored &&
  this.canUseOverlayScrollModal() &&
  overlay
) {
  const startScroll =
    overlay.scrollTop || 0;

  this.showVideo = false;

  this.$nextTick(() => {
    this.animateOverlayReelCloseScroll(
      startScroll,
      280
    );
  });

    return;
}

    /*
    Normal close when the reel did not require
    the scrollable overlay layout.
    */
    this.showVideo = false;
    return;
  }

  /*
  Opening the reel:
  Switch to the top-anchored overlay layout only
  when the expanded modal will not fit onscreen.
  */
  const shouldAnchor =
    this.canUseOverlayScrollModal() &&
    this.shouldTopAnchorModalForReel();

  if (!shouldAnchor || !modal) {
    this.showVideo = true;
    return;
  }

  const modalTop = Math.max(
    20,
    Math.round(
      modal.getBoundingClientRect().top
    )
  );

  const previousModalScrollTop =
    modal.scrollTop || 0;

  if (
    this.isTabletLandscapeModalLayout()
  ) {
    this.cancelTabletReelScrollAnimation();
    this.tabletReelOpenChaseStarted = false;
  }

  this.$el.style.setProperty(
    "--modal-anchor-top",
    modalTop + "px"
  );

  this.modalTopAnchored = true;

  this.$nextTick(() => {
    requestAnimationFrame(() => {
      if (overlay) {
        overlay.scrollTop =
          previousModalScrollTop;
      }

      this.showVideo = true;
    });
  });
},

cancelTabletReelScrollAnimation: function() {
  if (this.tabletReelScrollFrame) {
    cancelAnimationFrame(this.tabletReelScrollFrame);
    this.tabletReelScrollFrame = null;
  }
},

animateOverlayReelCloseScroll: function(
  startScroll,
  duration
) {
  const overlay =
    this.$refs.projectModalOverlay;

  if (!overlay) return;

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (
    prefersReducedMotion ||
    startScroll <= 0
  ) {
    overlay.scrollTop = 0;
    return;
  }

  const animationDuration =
    duration || 280;

  const startTime =
    performance.now();

  const animate = (now) => {
    if (
      !overlay.isConnected ||
      !this.selectedProject ||
      this.showVideo
    ) {
      return;
    }

    const progress =
      Math.min(
        (
          now -
          startTime
        ) /
        animationDuration,
        1
      );

    const eased =
      1 - Math.pow(
        1 - progress,
        3
      );

    overlay.scrollTop =
      startScroll *
      (1 - eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      overlay.scrollTop = 0;
    }
  };

  requestAnimationFrame(animate);
},
  
animateTabletReelCloseScroll: function(startScroll) {
  const overlay = this.$refs.projectModalOverlay;
  if (!overlay) return;

  this.cancelTabletReelScrollAnimation();

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || startScroll <= 0) {
    overlay.scrollTop = 0;
    return;
  }

  const duration = 300;
  const startTime = performance.now();

  const animate = (now) => {
    const progress = Math.min(
      (now - startTime) / duration,
      1
    );

    const eased =
      1 - Math.pow(1 - progress, 3);

    overlay.scrollTop =
      startScroll * (1 - eased);

    if (progress < 1 && !this.showVideo) {
      this.tabletReelScrollFrame =
        requestAnimationFrame(animate);
    } else {
      overlay.scrollTop = 0;
      this.tabletReelScrollFrame = null;
    }
  };

  this.tabletReelScrollFrame =
    requestAnimationFrame(animate);
},

cleanupReelAfterClose: function() {
  const overlay =
    this.$refs.projectModalOverlay;

  if (this.showVideo) return;

  /*
  A constrained-height modal is already positioned correctly
  through its temporary top anchor.

  Keep that positioning mode after the reel closes rather than
  switching back to fixed centring on the final frame. The anchor
  will still be cleared when the project modal itself closes,
  changes project, or changes into a layout that does not use it.
  */
  if (
    this.modalTopAnchored &&
    this.canUseOverlayScrollModal()
  ) {
    this.cancelTabletReelScrollAnimation();

    this.tabletReelOpenChaseStarted = false;
    this.isPhoneReelClosing = false;

    if (overlay) {
      overlay.scrollTop = 0;
    }

    return;
  }

  this.modalTopAnchored = false;

  this.$el.style.removeProperty(
    "--modal-anchor-top"
  );

  if (overlay) {
    overlay.scrollTop = 0;
  }
},

  shouldTopAnchorModalForReel: function() {
  if (!this.canUseOverlayScrollModal()) return false;

  const modal = this.$refs.projectModal;
  if (!modal) return false;

  const availableHeight = window.innerHeight - 80;
  const reelEstimatedHeight = 460;
  const projectedHeight = modal.getBoundingClientRect().height + reelEstimatedHeight;

  return projectedHeight > availableHeight;
},

  
 scrollReelIntoView: function() {
  const reel = this.$el.querySelector(".video-container");

  if (
    this.modalTopAnchored &&
    this.canUseOverlayScrollModal()
  ) {
    const overlay = this.$refs.projectModalOverlay;
    const isTabletLandscape =
      this.isTabletLandscapeModalLayout();

    if (!overlay) return;

    /*
    Tablet landscape receives one chase only.
    The after-enter hook must not start a second movement.
    */
    if (
      isTabletLandscape &&
      this.tabletReelOpenChaseStarted
    ) {
      return;
    }

    if (isTabletLandscape) {
      this.cancelTabletReelScrollAnimation();
      this.tabletReelOpenChaseStarted = true;
    }

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getTargetScroll = () => {
      const fullTarget = Math.max(
        0,
        overlay.scrollHeight - overlay.clientHeight
      );

      /*
      Prevent an abnormal layout measurement from sending the tablet
      through multiple screens of empty modal space.
      */
      return isTabletLandscape
        ? Math.min(fullTarget, 340)
        : fullTarget;
    };

    if (prefersReducedMotion) {
      overlay.scrollTop = getTargetScroll();
      return;
    }

    const startTime = performance.now();
    const chaseDuration =
      isTabletLandscape ? 300 : 320;

   const chaseScroll = (now) => {
  const targetScroll = getTargetScroll();

  /*
  Follow the expanding reel smoothly rather than
  hard-snapping to its changing position every frame.
  */
  overlay.scrollTop +=
    (targetScroll - overlay.scrollTop) * 0.35;

  if (
    this.showVideo &&
    now - startTime < chaseDuration
  ) {
        if (isTabletLandscape) {
          this.tabletReelScrollFrame =
            requestAnimationFrame(chaseScroll);
        } else {
          requestAnimationFrame(chaseScroll);
        }
      } else if (isTabletLandscape) {
        this.tabletReelScrollFrame = null;
      }
    };

    if (isTabletLandscape) {
      this.tabletReelScrollFrame =
        requestAnimationFrame(chaseScroll);
    } else {
      requestAnimationFrame(chaseScroll);
    }

    return;
  }

  const shouldCenterReel =
  this.isMobileModalLayout() ||
  (
    this.isTouchModalLayout() &&
    window.matchMedia("(orientation: portrait)").matches
  );

this.scrollElementIntoViewInModal(
  reel,
  shouldCenterReel ? "center" : "nearest"
);
},

  openProject: function(project) {
  if (this.openProjectTimer) {
    clearTimeout(this.openProjectTimer);
    this.openProjectTimer = null;
  }

  const wasAlreadyOpen = !!this.selectedProject;
  const posterReady = this.waitForPosterOrTimeout(project, 160);

  this.showVideo = false;
  this.modalTopAnchored = false;
  this.$el.style.removeProperty("--modal-anchor-top");

  const finishOpenProject = () => {
    this.selectedProject = project;
    this.openingProjectTitle = "";
    this.clearProjectPress();

    this.setBodyScrollLock(true);
      this.$nextTick(() => {
        this.preloadAdjacentImages();
        this.syncCarouselViewportHeight();
      
        if (this.$refs.projectModal) {
        if (this.lastClosedProjectTitle === project.title) {
          this.$refs.projectModal.scrollTop = this.modalScrollTop;
        } else {
          this.$refs.projectModal.scrollTop = 0;
        }
      }

      if (this.$refs.carouselViewport) {
        this.$refs.carouselViewport.scrollTop = 0;
      }

      this.focusModal();
    });
  };

  if (wasAlreadyOpen) {
    finishOpenProject();
    return;
  }

  const shouldUseOpeningProjectTitle =
    !(this.isTouchModalLayout && this.isTouchModalLayout());

  if (shouldUseOpeningProjectTitle) {
    this.openingProjectTitle = project.title;
  }

  this.openProjectTimer = setTimeout(() => {
    this.openProjectTimer = null;

    posterReady.then(() => {
      if (
        shouldUseOpeningProjectTitle &&
        this.openingProjectTitle !== project.title
      ) {
        return;
      }

      finishOpenProject();
    });
  }, 85);
},

  setBodyScrollLock: function(locked) {
  const isTouchDevice =
    this.isTouchModalLayout &&
    this.isTouchModalLayout();

  if (locked) {
    if (document.body.getAttribute("data-gallery-scroll-locked") === "true") return;

    this.bodyScrollY = window.scrollY || window.pageYOffset || 0;

    document.body.setAttribute("data-gallery-scroll-locked", "true");

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.width = "100%";

    if (isTouchDevice) {
      return;
    }

    document.body.style.position = "fixed";
    document.body.style.top = "-" + this.bodyScrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
  } else {
    const shouldRestoreScroll = document.body.style.position === "fixed";
    const scrollY = this.bodyScrollY || 0;

    document.body.removeAttribute("data-gallery-scroll-locked");

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    if (shouldRestoreScroll) {
      window.scrollTo(0, scrollY);
    }
  }
},

  closeProject: function() {
  if (this.openProjectTimer) {
    clearTimeout(this.openProjectTimer);
    this.openProjectTimer = null;
  }

  this.openingProjectTitle = "";

  const projectToFocus = this.selectedProject
    ? this.selectedProject.title
    : "";

  const overlay = this.$refs.projectModalOverlay;

  if (this.$refs.projectModal && this.selectedProject) {
    this.modalScrollTop =
      this.modalTopAnchored && overlay
        ? overlay.scrollTop
        : this.$refs.projectModal.scrollTop;

    this.lastClosedProjectTitle = this.selectedProject.title;
  }

  this.projectToFocusAfterClose = projectToFocus;

  this.selectedProject = null;
  this.showVideo = false;
},

  cleanupModalAfterClose: function() {
  this.modalTopAnchored = false;
  this.$el.style.removeProperty("--modal-anchor-top");
  this.setBodyScrollLock(false);

  if (this.carouselResizeObserver) {
    this.carouselResizeObserver.disconnect();
    this.carouselResizeObserver = null;
  }

  if (this.projectToFocusAfterClose) {
    this.focusProjectCard(this.projectToFocusAfterClose);
    this.projectToFocusAfterClose = "";
  }
},

  
  filterByTag: function(tag, event) {
  this.lockGridHoverDuringSort();

  this.activeTag = tag;
  this.warmFilteredProjectImages();

  if (this.openProjectTimer) {
    clearTimeout(this.openProjectTimer);
    this.openProjectTimer = null;
  }

  this.openingProjectTitle = "";
  this.projectToFocusAfterClose = "";

  this.selectedProject = null;
  this.showVideo = false;
  this.modalTopAnchored = false;
  this.$el.style.removeProperty("--modal-anchor-top");

  this.isDragging = false;
  this.isSwipeAnimating = false;
  this.isCarouselResetting = false;
  this.swipeOffset = 0;

  this.setBodyScrollLock(false);

  this.scrollGalleryTopIntoView(true);
},

  
  clearTagFilter: function(event) {
  this.lockGridHoverDuringSort();

  const wasKeyboard =
    event &&
    event.detail === 0;

  this.activeTag = "";
  this.warmFilteredProjectImages();

  if (wasKeyboard) {
    this.$nextTick(() => {
      const searchInput = this.$refs.projectSearch;

      if (searchInput && searchInput.focus) {
        searchInput.focus({ preventScroll: true });
      }
    });
  } else if (
    event &&
    event.currentTarget &&
    event.currentTarget.blur
  ) {
    event.currentTarget.blur();
  }
},

  
  projectCounter: function(project) {
  const total = this.projects.length;

  const index = this.projects.findIndex(
    item => item.title === project.title
  );

  if (index === -1) {
    return "";
  }

  return (index + 1) + " / " + total;
},
  

sortedTagsForProject: function(project) {
  if (!project || !project.tags) return [];

  return [...new Set(project.tags)]
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
},

  isTouchOverInteractiveElement: function(event) {
  const touch = event.touches && event.touches[0];
  if (!touch) return false;

  const element = document.elementFromPoint(touch.clientX, touch.clientY);
  if (!element) return false;

  return !!element.closest("button, a, iframe, input, textarea, select, .project-tags, .project-tag, .project-reel-slot");
},

       
  carouselCardStyle: function(index) {
  const viewportWidth = this.$refs.carouselViewport
    ? this.$refs.carouselViewport.clientWidth
    : window.innerWidth;

  const safeViewportWidth = Math.max(1, viewportWidth || 1);

  const swipeProgress = Math.min(
    Math.abs(this.swipeOffset) / safeViewportWidth,
    1
  );

  const easedSwipeProgress = Math.pow(swipeProgress, 1.35);

  const isSwipingLeft = this.swipeOffset < 0;
  const isSwipingRight = this.swipeOffset > 0;

  let opacity = 1;

  if (index === 0) {
    opacity = isSwipingRight ? easedSwipeProgress : 0;
  } else if (index === 2) {
    opacity = isSwipingLeft ? easedSwipeProgress : 0;
  } else if (index === 1) {
    opacity =
      this.isDragging || this.isSwipeAnimating
        ? 1 - swipeProgress * 0.28
        : 1;
  }

  return {
    opacity: opacity,
    transition:
      this.isDragging || this.isCarouselResetting
        ? "none"
        : "opacity " + this.currentCarouselTransitionMs + "ms ease"
  };
},
  
animateModalScrollToTop: function(duration) {
  const modal = this.$refs.projectModal;
  if (!modal) return;

  const carouselViewport =
    this.$refs.carouselViewport;

  const scrollContainer =
    this.isPhoneLandscapeModalLayout() &&
    carouselViewport
      ? carouselViewport
      : modal;

  const startScroll = scrollContainer.scrollTop;
  if (startScroll <= 0) return;

  const startTime = performance.now();

  const easeOut = function(t) {
    return 1 - Math.pow(1 - t, 3);
  };

  const animate = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOut(progress);

    scrollContainer.scrollTop =
      startScroll * (1 - eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      scrollContainer.scrollTop = 0;
    }
  };

  requestAnimationFrame(animate);
},

animateSwipeHint: function(direction) {
  if (this.swipeHintPulseTimer) {
    clearTimeout(this.swipeHintPulseTimer);
    this.swipeHintPulseTimer = null;
  }

  /*
  Remove the previous class first so the same
  direction can animate repeatedly.
  */
  this.swipeHintDirection = "";

  this.$nextTick(() => {
    requestAnimationFrame(() => {
      this.swipeHintDirection =
        direction > 0 ? "left" : "right";

      this.swipeHintPulseTimer =
        window.setTimeout(() => {
          this.swipeHintDirection = "";
          this.swipeHintPulseTimer = null;
        }, 620);
    });
  });
},
  
  dismissSwipeHint: function() {
  this.hasSeenSwipeHint = true;

  try {
    localStorage.setItem("nstclair_anim_gallery_swipe_hint_seen", "true");
  } catch (error) {
    // localStorage may be blocked; the hint will still disappear for this session.
  }
},
  
  triggerHaptic: function() {
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }
},

  scrollGalleryTopIntoView: function(shouldFocusActiveTag) {
  this.$nextTick(() => {
    window.requestAnimationFrame(() => {
      const target =
        this.$el.querySelector(".filters") ||
        this.$el.querySelector(".gallery-controls");

      if (!target) return;

      const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const targetTop =
        target.getBoundingClientRect().top +
        (window.pageYOffset || document.documentElement.scrollTop || 0) -
        16;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });

      if (shouldFocusActiveTag) {
        window.setTimeout(() => {
          const button = this.$refs.activeTagClearButton;

          if (button && button.focus) {
            button.focus({ preventScroll: true });
          }
        }, prefersReducedMotion ? 0 : 300);
      }
    });
  });
},

  
  lockGridHoverDuringSort: function(duration) {
  var lockDuration = duration || 430;

  this.isGridHoverLocked = true;

  if (this.gridHoverLockTimer) {
    clearTimeout(this.gridHoverLockTimer);
  }

  var self = this;
  this.gridHoverLockTimer = setTimeout(function() {
    self.isGridHoverLocked = false;
    self.gridHoverLockTimer = null;
  }, lockDuration);
},

  
  
  handleKeydown: function(event) {
    if (!this.selectedProject) return;

    if (event.key === "Tab") {
      this.trapModalFocus(event);
      return;
    }

    switch (event.key) {
      case "Escape":
        this.closeProject();
        break;

      case "ArrowRight":
        event.preventDefault();
        this.openAdjacentProject(1, true);
        break;

      case "ArrowLeft":
        event.preventDefault();
        this.openAdjacentProject(-1, true);
        break;

      case "ArrowDown":
        event.preventDefault();
        this.openSpatialProject(1, true);
        break;

      case "ArrowUp":
        event.preventDefault();
        this.openSpatialProject(-1, true);
        break;
    }
  },

  
  preloadProjectPoster: function(project) {
  return new Promise((resolve) => {
    if (!project) {
      resolve();
      return;
    }

    const imageUrl = project.poster || project.image;

    if (!imageUrl) {
      resolve();
      return;
    }

    if (this.loadedImages[imageUrl]) {
      resolve();
      return;
    }

    const img = new Image();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;

      this.$set(this.loadedImages, imageUrl, true);

      resolve();
    };

    img.onload = () => {
      if (img.decode) {
        img.decode().then(finish).catch(finish);
      } else {
        finish();
      }
    };

    img.onerror = finish;
    img.decoding = "async";
    img.src = imageUrl;

    if (img.complete) {
      finish();
    }
  });
},

waitForPosterOrTimeout: function(project, timeoutMs) {
  return Promise.race([
    this.preloadProjectPoster(project),
    new Promise((resolve) => setTimeout(resolve, timeoutMs))
  ]);
},

  
  preloadAdjacentImages: function() {
  if (!this.selectedProject) return;

  const projects = this.filteredAndSearched;
  const currentIndex = projects.findIndex(
    project => project.title === this.selectedProject.title
  );

  if (currentIndex === -1) return;

  const projectsToPreload = [
    projects[currentIndex - 1],
    projects[currentIndex + 1]
  ];

  projectsToPreload.forEach((project) => {
    this.preloadProjectPoster(project);
  });
},
  

  handleTouchStart: function(event) {
  if (!this.selectedProject || this.isSwipeAnimating || this.showVideo) return;

  const interactiveElement = event.target.closest("button, a, iframe, input, textarea, select, .project-tags, .project-tag, .project-reel-slot");

  if (interactiveElement) {
    this.touchMode = "";
    this.isDragging = false;
    this.swipeOffset = 0;
    return;
  }

  this.touchStartX = event.touches[0].clientX;
  this.touchStartY = event.touches[0].clientY;
  this.touchCurrentX = this.touchStartX;
  this.touchCurrentY = this.touchStartY;
  this.touchMode = "";
  this.isDragging = false;
  this.swipeOffset = 0;
  this.touchStartTime = Date.now();
  this.carouselScrollStart = this.$refs.projectModal
  ? this.$refs.projectModal.scrollTop
  : 0;
},

handleTouchMove: function(event) {
  if (!this.selectedProject || this.isSwipeAnimating || this.showVideo) return;

  this.touchCurrentX = event.touches[0].clientX;
  this.touchCurrentY = event.touches[0].clientY;

  const diffX = this.touchCurrentX - this.touchStartX;
  const diffY = this.touchCurrentY - this.touchStartY;

  if (this.isTouchOverInteractiveElement(event)) {
    this.touchMode = "";
    this.isDragging = false;
    this.swipeOffset = 0;
    return;
  }

  if (!this.touchMode) {
  const absX = Math.abs(diffX);
  const absY = Math.abs(diffY);

  if (absX < 10 && absY < 10) {
    return;
  }

  if (absX > absY * 1.22 && absX > 12) {
  this.touchMode = "horizontal";
  this.isDragging = true;
} else if (absY > absX * 1.22 && absY > 12) {
  this.touchMode = "vertical";
  this.isDragging = false;
  this.swipeOffset = 0;
  return;
} else {
  return;
}

}

if (this.touchMode === "vertical") {
  this.swipeOffset = 0;
  return;
}

  event.preventDefault();

if (this.$refs.projectModal) {
  this.$refs.projectModal.scrollTop = this.carouselScrollStart;
}

const direction = diffX < 0 ? 1 : -1;
const hasAdjacentProject = this.getAdjacentProject(direction);

this.swipeOffset = hasAdjacentProject ? diffX : diffX * 0.18;
},

handleTouchEnd: function() {
  if (!this.selectedProject || this.isSwipeAnimating || this.showVideo) {
    this.touchMode = "";
    this.isDragging = false;
    this.swipeOffset = 0;
    return;
  }

  if (this.touchMode !== "horizontal") {
    this.touchMode = "";
    this.isDragging = false;
    this.swipeOffset = 0;
    return;
  }

  const diffX = this.touchCurrentX - this.touchStartX;

  const carouselWidth = this.$refs.carouselViewport
    ? this.$refs.carouselViewport.clientWidth
    : window.innerWidth;

  const commitDistance = Math.max(105, Math.min(carouselWidth * 0.32, 180));

  this.touchEndTime = Date.now();

  const swipeTime = this.touchEndTime - this.touchStartTime;
  const velocity = Math.abs(diffX) / swipeTime;
  const isFastSwipe = velocity > 0.85 && Math.abs(diffX) > 70;

  const remainingDistance = Math.max(0, carouselWidth - Math.abs(diffX));
  const velocityDuration = velocity > 0
    ? remainingDistance / velocity
    : this.carouselTransitionMs;

  this.currentCarouselTransitionMs = Math.max(
    280,
    Math.min(420, velocityDuration)
  );

  if (!this.isDragging) {
    this.touchMode = "";
    this.swipeOffset = 0;
    return;
  }

  if (Math.abs(diffX) < commitDistance && !isFastSwipe) {
    this.touchMode = "";
    this.currentCarouselTransitionMs = 260;
    this.isDragging = false;
    this.swipeOffset = 0;
    return;
  }

  this.isDragging = false;

  const direction = diffX < 0 ? 1 : -1;

  if (!this.getAdjacentProject(direction)) {
    this.touchMode = "";
    this.swipeOffset = 0;
    this.isSwipeAnimating = false;
    return;
  }

  this.isSwipeAnimating = true;
  this.showVideo = false;
  this.dismissSwipeHint();
  this.animateModalScrollToTop(this.currentCarouselTransitionMs);
  this.triggerHaptic();

  const exitDistance = direction > 0 ? -carouselWidth : carouselWidth;

  this.swipeOffset = exitDistance;

  /*
  Begin the finishing ripple during the final
  portion of the carousel movement so it feels
  like a continuation of the finger gesture.
  */
  const swipeHintRippleDelay = Math.round(
    this.currentCarouselTransitionMs * 0.62
  );
  
  window.setTimeout(() => {
    if (
      this.isSwipeAnimating &&
      this.selectedProject
    ) {
      this.animateSwipeHint(direction);
    }
  }, swipeHintRippleDelay);

setTimeout(() => {
  const nextProject = this.getAdjacentProject(direction);

  this.waitForPosterOrTimeout(nextProject, 300).then(() => {
    this.isCarouselResetting = true;

    this.openAdjacentProject(direction);
    this.swipeOffset = 0;

    this.$nextTick(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.touchMode = "";
          this.isCarouselResetting = false;
          this.isSwipeAnimating = false;
        });
      });
    });
  });
}, this.currentCarouselTransitionMs);
},

handleTouchCancel: function() {
  this.touchMode = "";
  this.isDragging = false;
  this.isSwipeAnimating = false;
  this.swipeOffset = 0;
},

  
  fadeCurrentPosterFromKeyboard: function() {
  this.$nextTick(() => {
    const modal = this.$refs.projectModal;
    if (!modal) return;

    const poster = modal.querySelector(
      ".current-carousel-card .modal-poster"
    );

    if (!poster) return;

    const runFade = () => {
      // Do not animate an old poster after rapid navigation.
      if (
        !poster.isConnected ||
        !poster.closest(".current-carousel-card") ||
        poster.naturalWidth <= 0
      ) {
        return;
      }

      // Restart the animation even during rapid keyboard navigation.
      poster.classList.remove("keyboard-fade-in");
      void poster.offsetWidth;
      poster.classList.add("keyboard-fade-in");

      poster.addEventListener(
        "animationend",
        function() {
          poster.classList.remove("keyboard-fade-in");
        },
        { once: true }
      );
    };

    if (poster.complete && poster.naturalWidth > 0) {
      runFade();
    } else {
      poster.addEventListener("load", runFade, { once: true });
    }
  });
},

openSpatialProject: function(direction, fadePoster) {
  if (!this.selectedProject || (direction !== -1 && direction !== 1)) {
    return;
  }

  const projects = this.filteredAndSearched;
  const projectByTitle = {};

  for (let index = 0; index < projects.length; index++) {
    projectByTitle[projects[index].title] = projects[index];
  }

  if (!projectByTitle[this.selectedProject.title]) {
    return;
  }

  /*
  Measure the visible gallery cards at the moment the key is pressed.
  Using their live layout positions makes Up / Down automatically adapt
  to filters, searches, browser resizing, and any current column count.
  offsetTop / offsetLeft intentionally ignore temporary hover transforms.
  */
  const projectCards = this.$el.querySelectorAll(
    ".project[data-project-title]"
  );

  const cardLayout = [];
  let currentCardLayout = null;

  for (let index = 0; index < projectCards.length; index++) {
    const card = projectCards[index];
    const projectTitle = card.getAttribute("data-project-title");

    /*
    Vue transition-group may briefly leave old cards in the DOM while a
    filter is animating. Only measure projects in the current result set.
    */
    if (!projectByTitle[projectTitle]) continue;

    const width = card.offsetWidth;
    const height = card.offsetHeight;

    if (width <= 0 || height <= 0) continue;

    const layout = {
      title: projectTitle,
      top: Math.round(card.offsetTop),
      centerX: card.offsetLeft + width / 2,
      domIndex: index
    };

    cardLayout.push(layout);

    if (projectTitle === this.selectedProject.title) {
      currentCardLayout = layout;
    }
  }

  if (!currentCardLayout) return;

  const rowTolerance = 8;
  const directionalCards = cardLayout.filter((layout) => {
    if (direction > 0) {
      return layout.top > currentCardLayout.top + rowTolerance;
    }

    return layout.top < currentCardLayout.top - rowTolerance;
  });

  /* First / last visible row: Up or Down intentionally does nothing. */
  if (directionalCards.length === 0) return;

  const targetRowTop = directionalCards.reduce((closestTop, layout) => {
    if (direction > 0) {
      return layout.top < closestTop ? layout.top : closestTop;
    }

    return layout.top > closestTop ? layout.top : closestTop;
  }, direction > 0 ? Infinity : -Infinity);

  const targetRowCards = directionalCards.filter(
    layout => Math.abs(layout.top - targetRowTop) <= rowTolerance
  );

  if (targetRowCards.length === 0) return;

  /*
  In the neighbouring row, choose the card whose horizontal centre is
  closest to the current card. This also handles centred, incomplete rows.
  */
  targetRowCards.sort((first, second) => {
    const firstDistance = Math.abs(
      first.centerX - currentCardLayout.centerX
    );

    const secondDistance = Math.abs(
      second.centerX - currentCardLayout.centerX
    );

    if (Math.abs(firstDistance - secondDistance) > 0.5) {
      return firstDistance - secondDistance;
    }

    return first.domIndex - second.domIndex;
  });

  const nextProject = projectByTitle[targetRowCards[0].title];

  if (!nextProject) return;

  this.lastClosedProjectTitle = "";
  this.modalScrollTop = 0;

  this.openProject(nextProject);

  if (fadePoster) {
    this.fadeCurrentPosterFromKeyboard();
  }

  /* Spatial navigation always moves to another gallery row. */
  this.$nextTick(() => {
    this.scrollGridToProject(
      nextProject.title,
      this.currentCarouselTransitionMs
    );
  });
},

openAdjacentProject: function(direction, fadePoster) {
  const projects = this.filteredAndSearched;

  const currentIndex = projects.findIndex(
    project =>
      project.title ===
      this.selectedProject.title
  );

  if (currentIndex === -1) return;

  const nextIndex =
    currentIndex + direction;

  if (
    nextIndex < 0 ||
    nextIndex >= projects.length
  ) {
    return;
  }

  const currentProject =
    projects[currentIndex];

  const nextProject =
    projects[nextIndex];

  /*
  Find the two corresponding cards in the
  gallery behind the modal.
  */
  const projectCards =
    this.$el.querySelectorAll(
      ".project[data-project-title]"
    );

  let currentCard = null;
  let nextCard = null;

  for (
    let index = 0;
    index < projectCards.length;
    index++
  ) {
    const projectTitle =
      projectCards[index].getAttribute(
        "data-project-title"
      );

    if (
      projectTitle ===
      currentProject.title
    ) {
      currentCard = projectCards[index];
    }

    if (
      projectTitle ===
      nextProject.title
    ) {
      nextCard = projectCards[index];
    }
  }

  /*
  Cards on the same gallery row have the same
  offsetTop. Allow a small tolerance for layout
  rounding, but only move the background when
  the navigation crosses into a different row.
  */
  const currentRowTop =
    currentCard
      ? Math.round(currentCard.offsetTop)
      : null;

  const nextRowTop =
    nextCard
      ? Math.round(nextCard.offsetTop)
      : null;

  const movedToDifferentRow =
    currentRowTop === null ||
    nextRowTop === null ||
    Math.abs(
      nextRowTop - currentRowTop
    ) > 8;

  this.lastClosedProjectTitle = "";
  this.modalScrollTop = 0;

  this.openProject(nextProject);

  if (fadePoster) {
    this.fadeCurrentPosterFromKeyboard();
  }

  if (movedToDifferentRow) {
    this.$nextTick(() => {
      this.scrollGridToProject(
        nextProject.title,
        this.currentCarouselTransitionMs
      );
    });
  }
},

getAdjacentProject: function(direction) {
  const projects = this.filteredAndSearched;
  const currentIndex = projects.findIndex(
    project => project.title === this.selectedProject.title
  );

  if (currentIndex === -1) return null;

  const nextIndex = currentIndex + direction;

  if (nextIndex < 0 || nextIndex >= projects.length) return null;

  return projects[nextIndex];
},

  embedVimeo: function(url) {
  if (!url) return "";

  const match = url.match(/vimeo\.com\/(\d+)/);
  return match
    ? "https://player.vimeo.com/video/" + match[1]
    : url;
},

hasValidVimeo: function(project) {
  if (!project || !project.vimeo) return false;

  const vimeoUrl = String(project.vimeo).trim();

  return (
    vimeoUrl !== "" &&
    !vimeoUrl.includes("YOUR_VIDEO_ID") &&
    (
      vimeoUrl.includes("vimeo.com/") ||
      vimeoUrl.includes("player.vimeo.com/video/")
    )
  );
},

retryImageLoad: function(event, originalSrc) {
  const img = event && event.target;

  if (!img || !originalSrc) return;

  const retryCount = parseInt(img.getAttribute("data-retry-count") || "0", 10);

  if (retryCount >= 2) return;

  img.classList.remove("is-loaded");
  img.setAttribute("data-retry-count", String(retryCount + 1));

  const separator = originalSrc.indexOf("?") === -1 ? "?" : "&";
  const retrySrc = originalSrc + separator + "retry=" + Date.now();

  window.setTimeout(function() {
    img.src = retrySrc;
  }, retryCount === 0 ? 250 : 750);
},

imageIsLoaded: function(imageSrc) {
  return !!(imageSrc && this.loadedImages[imageSrc]);
},
  
markImageLoaded: function(event) {
  const img = event && event.target;

  if (!img) return;

  const imageSrc =
    img.getAttribute("data-image-src") ||
    img.currentSrc ||
    img.getAttribute("src") ||
    img.src ||
    "";

  if (imageSrc) {
    this.$set(this.loadedImages, imageSrc, true);
  }

  img.classList.add("is-loaded");

if (img.closest(".project-modal")) {
  this.syncCarouselViewportHeight();
}
}
},

mounted: function() {
  try {
    this.hasSeenSwipeHint =
      localStorage.getItem("nstclair_anim_gallery_swipe_hint_seen") === "true";
  } catch (error) {
    this.hasSeenSwipeHint = false;
  }

  this.updateGalleryVisualViewportHeight();

  this.lastKnownGalleryOrientation =
    window.matchMedia(
      "(orientation: portrait)"
    ).matches
      ? "portrait"
      : "landscape";

  window.addEventListener("keydown", this.handleKeydown);
  window.addEventListener("resize", this.handleGalleryViewportChange);
  window.addEventListener("orientationchange", this.handleGalleryViewportChange);

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", this.handleGalleryViewportChange);
    window.visualViewport.addEventListener("scroll", this.updateGalleryVisualViewportHeight);
  }
},

beforeDestroy: function() {
  this.cancelTabletReelScrollAnimation();
  this.orientationMaskRun += 1;

  if (this.orientationMaskTimer) {
    clearTimeout(this.orientationMaskTimer);
    this.orientationMaskTimer = null;
  }

  window.removeEventListener("keydown", this.handleKeydown);
  window.removeEventListener("resize", this.handleGalleryViewportChange);
  window.removeEventListener("orientationchange", this.handleGalleryViewportChange);

  if (window.visualViewport) {
    window.visualViewport.removeEventListener("resize", this.handleGalleryViewportChange);
    window.visualViewport.removeEventListener("scroll", this.updateGalleryVisualViewportHeight);
  }
  
  if (this.carouselResizeObserver) {
    this.carouselResizeObserver.disconnect();
    this.carouselResizeObserver = null;
  }
  
  this.setBodyScrollLock(false);
}
});

function forceUnlockPageScroll() {
  var lockedTop = document.body.style.top;
  var savedScrollY = 0;

  if (lockedTop && lockedTop.indexOf("-") === 0) {
    savedScrollY = Math.abs(parseInt(lockedTop, 10)) || 0;
  }

  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";

  if (savedScrollY > 0) {
    window.scrollTo(0, savedScrollY);
  }
}

window.addEventListener("pagehide", forceUnlockPageScroll);
window.addEventListener("pageshow", forceUnlockPageScroll);
window.addEventListener("popstate", forceUnlockPageScroll);
