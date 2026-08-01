/*
  Resources link rows + desktop tooltips
  Public file loaded by Carrd.

  Edit tooltip text in the resourceTooltips object below.
*/

(function () {
  var styleId = "resources-links-styles";

  if (!document.getElementById(styleId)) {
    var style = document.createElement("style");
    style.id = styleId;
    style.textContent = String.raw`
/* ---------- Resources: Calm Interactive Rows ---------- */

#resource_panel [id^="links_"] {
width: 100% !important;
max-width: none !important;
}

#resource_panel [id^="links_"] ul,
#resource_panel [id^="links_"] ol {
margin: 0 !important;
padding: 0 !important;
list-style: none !important;
}

#resource_panel [id^="links_"] li {
margin: 0 !important;
padding: 0 !important;
list-style: none !important;
}

/* The entire row is now the link */
#resource_panel .resource-list-row {
display: grid;
grid-template-columns: minmax(0, 1fr) 2.45rem;
align-items: center;
gap: 0.45rem;
min-height: 2.55rem;
margin: 0 !important;
padding: 0.1rem 0.15rem 0.1rem 0.75rem;
position: relative;
background: transparent;
border: 0;
border-radius: 0.3rem;
color: #4F4F4F !important;
-webkit-text-fill-color: #4F4F4F !important;
text-decoration: none !important;
transform: translate3d(0, 0, 0);
transition:
background-color 0.18s ease-out,
transform 0.18s ease-out;
-webkit-tap-highlight-color: transparent;
}

/* Quiet divider that stops before the icon */
#resource_panel .resource-list-row::after {
content: "";
position: absolute;
left: 0.75rem;
right: 3.1rem;
bottom: 0;
height: 1px;
background: rgba(79, 79, 79, 0.12);
pointer-events: none;
}

#resource_panel .resource-list-row-last {
margin-bottom: 0.7rem !important;
}

#resource_panel .resource-list-row-last::after {
display: none;
}

#resource_panel .resource-list-label {
min-width: 0;
color: #4F4F4F;
font-family: "Space Mono", monospace;
line-height: 1.35;
}

/* Icon has a large invisible interaction area */
#resource_panel .resource-list-link-button {
display: inline-flex;
width: 2.35rem;
height: 2.35rem;
align-items: center;
justify-content: center;
justify-self: end;
padding: 0;
background: transparent;
border: 1.5px solid transparent;
border-radius: 0.35rem;
box-shadow: none;
color: rgba(79, 79, 79, 0.62);
pointer-events: none;
transform: translate3d(0, 0, 0);
transition:
transform 0.18s ease-out,
box-shadow 0.18s ease-out,
background-color 0.18s ease-out,
border-color 0.18s ease-out,
color 0.18s ease-out;
}

#resource_panel .resource-list-link-button svg {
display: block;
width: 1rem;
height: 1rem;
fill: currentColor;
stroke: none;
}

/* Keyboard focus */
#resource_panel .resource-list-row:focus-visible {
background: rgba(79, 79, 79, 0.055);
outline: 2px solid #718A93;
outline-offset: 2px;
}

#resource_panel .resource-list-row:focus-visible
.resource-list-link-button {
background: #F3E9D7;
border-color: #4F4F4F;
box-shadow: 3px 3px 0 #4F4F4F;
color: #4F4F4F;
transform: translate3d(-1px, -1px, 0);
}

/* Desktop hover */
@media (hover: hover) and (pointer: fine) {
#resource_panel .resource-list-row:hover {
background: rgba(79, 79, 79, 0.055);
}

#resource_panel .resource-list-row:hover
.resource-list-link-button {
background: #F3E9D7;
border-color: #4F4F4F;
box-shadow: 3px 3px 0 #4F4F4F;
color: #4F4F4F;
transform: translate3d(-1px, -1px, 0);
}
}

/* Physical pressed state */
#resource_panel .resource-list-row:active {
background: rgba(79, 79, 79, 0.085);
}

#resource_panel .resource-list-row:active
.resource-list-link-button {
background: #F3E9D7;
border-color: #4F4F4F;
color: #4F4F4F;
transform: translate3d(1px, 1px, 0);
box-shadow:
1px 1px 0 #4F4F4F,
inset 0 1px 0 rgba(79, 79, 79, 0.14);
}

/* Make the unboxed icon slightly clearer on touchscreens */
@media (hover: none), (pointer: coarse) {
#resource_panel .resource-list-link-button {
color: rgba(79, 79, 79, 0.78);
}
}

/* Blue category headings are labels, not links */
#resource_panel [id^="text_"],
#resource_panel [id^="text_"] u,
#resource_panel [id^="text_"] strong,
#resource_panel [id^="text_"] a {
color: #718A93 !important;
text-decoration: none !important;
text-decoration-line: none !important;
-webkit-text-decoration-line: none !important;
border-bottom: 0 !important;
box-shadow: none !important;
}

#resource_panel {
margin-top: -2rem !important;
}

/* ---------- Resources: Row Tooltips ---------- */

#resource_panel .resource-list-row-has-tooltip {
z-index: 1;
}

#resource_panel .resource-list-tooltip {
position: absolute;
left: 0.75rem;
bottom: calc(100% + 0.45rem);
z-index: 100;
box-sizing: border-box;
width: max-content;
max-width: 18rem;
padding: 0.6rem 0.7rem;
background: #4F4F4F;
border: 1.5px solid #4F4F4F;
border-radius: 0.45rem;
box-shadow: 3px 3px 0 rgba(79, 79, 79, 0.25);
color: #F3E9D7;
-webkit-text-fill-color: #F3E9D7;
font-family: "Space Mono", monospace;
font-size: 0.68rem;
font-weight: 400;
line-height: 1.45;
text-align: left;
white-space: normal;
opacity: 0;
visibility: hidden;
pointer-events: none;
transform: translateY(4px);
transition:
opacity 0.16s ease,
visibility 0s linear 0.16s,
transform 0.16s ease;
}

#resource_panel .resource-list-row-has-tooltip:hover,
#resource_panel .resource-list-row-has-tooltip:focus-visible {
z-index: 50;
}

/* Mouse hover: brief delay before appearing */
#resource_panel .resource-list-row-has-tooltip:hover
.resource-list-tooltip {
opacity: 1;
visibility: visible;
transform: translateY(0);
transition:
opacity 0.16s ease 0.45s,
visibility 0s linear 0.45s,
transform 0.16s ease 0.45s;
}

/* Keyboard focus: appear immediately */
#resource_panel .resource-list-row-has-tooltip:focus-visible
.resource-list-tooltip {
opacity: 1;
visibility: visible;
transform: translateY(0);
transition:
opacity 0.16s ease,
visibility 0s linear,
transform 0.16s ease;
}

/* Tooltips are desktop-only for now */
@media (hover: none), (pointer: coarse) {
#resource_panel .resource-list-tooltip {
display: none;
}
}

/* ---------- Resources: Recommendation button — landscape ---------- */

@media (max-width: 1050px) and (orientation: landscape) {
.resources-recommend-button a {
display: flex !important;
flex-direction: row-reverse !important;
align-items: center !important;
justify-content: center !important;
gap: 0.45rem !important;
width: 100% !important;
min-width: 0 !important;
box-sizing: border-box !important;
padding: 0.6rem 0.75rem !important;
overflow: visible !important;
white-space: nowrap !important;
}

.resources-recommend-button a .label {
display: block !important;
flex: 0 1 auto !important;
min-width: 0 !important;
margin: 0 !important;
padding: 0 !important;
font-size: 0.68rem !important;
line-height: 1 !important;
letter-spacing: -0.05em !important;
white-space: nowrap !important;
}

.resources-recommend-button a svg {
position: static !important;
flex: 0 0 0.72rem !important;
width: 0.72rem !important;
height: 0.72rem !important;
min-width: 0.72rem !important;
margin: 0 !important;
padding: 0 !important;
transform: none !important;
translate: none !important;
}
}
`;

    document.head.appendChild(style);
  }
})();

(function() {
  /* ---------- EDIT RESOURCE TOOLTIPS HERE ---------- */
  var resourceTooltips = {   
    "animationcollaborative":
      "Founded by Michal Makarewicz, AnimC offers a wide variety of classes taught by some of the industry's top talent.",
    "animationfocus":
      "Affordable and accessible animation training from current and past Pixar animators.",
    "animationmentor":
      "Industry-known online animation mentorship focused on character animation fundamentals.",
    
    "ragdolldynamics":
      "Physics-assisted animation tools for faster, more intuitive character motion.",
    "photopea":
      "A free browser-based image editor with a Photoshop-like workflow.",
    "agoracommunity":
      "An animation-focused community for sharing work, feedback, and learning."
  };

  function getResourceTooltipKey(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "");
  }

  function applyResourceTooltip(row, labelText) {
    if (!row) return;

    var tooltipKey = getResourceTooltipKey(labelText);
    var tooltipText = resourceTooltips[tooltipKey];

    if (!tooltipText) return;

    row.classList.add("resource-list-row-has-tooltip");

    row.setAttribute(
      "aria-label",
      "Open " + labelText + ". " + tooltipText
    );

    var existingTooltip = row.querySelector(
      ".resource-list-tooltip"
    );

    if (existingTooltip) {
      existingTooltip.textContent = tooltipText;
      return;
    }

    var tooltip = document.createElement("span");
    tooltip.className = "resource-list-tooltip";
    tooltip.setAttribute("aria-hidden", "true");
    tooltip.textContent = tooltipText;

    row.appendChild(tooltip);
  }

  function enhanceResourceLinks() {
    var panel = document.getElementById("resource_panel");

    if (!panel) return;

    var linkGroups = panel.querySelectorAll('[id^="links_"]');

    for (var i = 0; i < linkGroups.length; i++) {
      var links = linkGroups[i].querySelectorAll("a[href]");

      for (var j = 0; j < links.length; j++) {
        var link = links[j];

        if (link.dataset.resourceRowReady === "true") {
          var existingLabel = link.querySelector(
            ".resource-list-label"
          );

          applyResourceTooltip(
            link,
            existingLabel
              ? existingLabel.textContent.trim()
              : link.textContent.trim()
          );

          continue;
        }

        var labelText = link.textContent.trim();

        if (!labelText) {
          continue;
        }

        /* Preserve the original link and make it the complete row */
        var row = link.cloneNode(false);
        row.className = "resource-list-row";
        row.dataset.resourceRowReady = "true";
        row.setAttribute("aria-label", "Open " + labelText);

        var label = document.createElement("span");
        label.className = "resource-list-label";
        label.textContent = labelText;

        var button = document.createElement("span");
        button.className = "resource-list-link-button";
        button.setAttribute("aria-hidden", "true");

        button.innerHTML =
          '<svg aria-hidden="true" focusable="false">' +
          '<use href="#icon-49c7b76f0edfabe10e324ba1ac396f84" ' +
          'xlink:href="#icon-49c7b76f0edfabe10e324ba1ac396f84"></use>' +
          '</svg>';

        link.parentNode.replaceChild(row, link);

        row.appendChild(label);
        row.appendChild(button);

        applyResourceTooltip(row, labelText);
      }

      var rows = linkGroups[i].querySelectorAll(
        ".resource-list-row"
      );

      if (rows.length) {
        rows[rows.length - 1].classList.add(
          "resource-list-row-last"
        );
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      enhanceResourceLinks
    );
  } else {
    enhanceResourceLinks();
  }
})();
