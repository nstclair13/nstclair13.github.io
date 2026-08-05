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
    /* ==================== ARTISTS ==================== */

    /* Inspiring Creatives */
    "alviseavati":
      "Creature animation, short films and tutorials from Alvise Avati. A great place to study grounded VFX work that still has plenty of personality.",
    /* Legacy spelling alias retained for "Alvise Avanti". */
    "alviseavanti":
      "Creature animation, short films and tutorials from Alvise Avati. A great place to study grounded VFX work that still has plenty of personality.",
    "andreasdeja":
      "A treasure trove of drawings, animation history and lessons from one of Disney's great 2D animators. Easy to lose an afternoon here.",
    "aaronblaise":
      "Animal drawing and animation lessons from veteran Disney animator Aaron Blaise. Especially useful when you want anatomy without making it feel academic.",
    "cameronfielding":
      "Punchy character work with fantastic posing, timing and energy. Cameron's reels are the kind you want to watch frame by frame.",
    "chuckduke":
      "A collection of character animation and personal work from Chuck Duke. Lots of appealing posing and performance ideas to pull apart.",
    "halhickel":
      "Credits and career highlights from ILM animation supervisor Hal Hickel. A useful jumping-off point for studying some landmark VFX character work.",
    "jamaalbradley":
      "Feature and game animation from Jamaal Bradley, with great acting, polish and storytelling throughout. His work is always worth studying.",
    "jamesbaxter":
      "Work and demonstrations from one of the best 2D animators ever to do it. Watch the line quality, posing and effortless sense of weight.",
    "jasonryan":
      "Character animation lessons and work from Jason Ryan, with a strong focus on planning, posing and clear performance choices.",
    "jasonsnyman":
      "Animation reels and personal work from Jason Snyman. A useful reference for polished character and creature work.",
    "jeandenishaas":
      "Years of animation clips, critiques and practical advice from Jean-Denis Haas. Some of the best honest, production-minded animation notes around.",
    "justinrasch":
      "Fantastic stop-motion and character work with huge physicality and charm. Justin Rasch makes difficult movement feel loose and alive.",
    "kaihualan":
      "Outstanding VFX creature work from Kai-Hua Lan, with the kind of believable weight and animal behaviour worth studying frame by frame.",
    "keithroberts":
      "Credits from veteran VFX animator Keith Roberts. A solid starting point for tracking down his character and creature work across major films.",
    "kevinjackson":
      "Strong character animation reels from Kevin Jackson, full of appealing acting choices, clean mechanics and feature-quality polish.",
    "kielfiggins":
      "Kiel Figgins' animation, rigs, tools and tutorials all in one place. He has been quietly making animators' lives easier for years.",
    "markoftedal":
      "Personal work from longtime Pixar animator Mark Oftedal. Great reference for subtle acting, clear ideas and performances that never feel overworked.",
    "michaelholzl":
      "A collection of polished VFX and creature animation from Michael Holzl. Plenty of believable weight, scale and technical problem-solving to study.",
    "philtippett":
      "The home of Phil Tippett's legendary creature and stop-motion work. Essential viewing if you like monsters, practical craft and beautifully strange ideas.",
    "tedty":
      "Character animation work and teaching from veteran animator Ted Ty. Great for studying performance, appeal and the bridge between 2D and CG.",
    "shawnkelly":
      "Credits from ILM animator and Animation Mentor co-founder Shawn Kelly. A good trailhead into decades of memorable character and creature work.",
    "sidneykombokintombo":
      "Beautiful animation work from Sidney Kombo-Kintombo, with exceptional weight, restraint and polish. The sort of reel that makes you want to animate.",
    "stevenichols":
      "VFX character and creature animation from Steve Nichols. A useful collection for studying realistic mechanics, weight and shot-level problem solving.",

    /* ==================== LEARNING ==================== */

    /* Courses & Mentorships */
    "animationcollaborative":
      "Founded by Michal Makarewicz, AnimC offers focused classes taught by some of the industry's best feature animators. Serious training without the full-school sprawl.",
    "animationfocus":
      "Affordable, focused online classes taught by current and former Pixar animators. A nice option if you want direct feedback without a giant school commitment.",
    "animationmentor":
      "The industry-known online school for character animation, built around weekly mentorship and reel-focused assignments.",
    "animationsherpa":
      "A self-paced course built around space switching and cleaner Maya workflows. If counter-animation is ruining your day, start here.",
    "animschool":
      "An accredited online school for 3D animation, modeling and rigging, with production-style assignments and instructors working in the industry.",
    "cgspectrum":
      "Online training for animation, VFX, games and digital art, taught in small classes or one-on-one by working artists.",
    "creaturestation":
      "Creature animation training focused on anatomy, locomotion and believable performance. A useful stop if bipeds have become a little too comfortable.",
    "ianimatenet":
      "Online mentorship covering feature, games, creatures, rigging, modeling and Unreal. Lots of specialized tracks taught by working professionals.",
    "lupinhouse":
      "Flexible character animation mentorships and pre-recorded courses aimed at feature-quality work. A strong option for pushing a reel beyond the student stage.",
    "p2designacademyblender":
      "Pierrick Picaut's Blender-focused academy covering animation, rigging and production workflows. Polished courses with a very practical, animator-first approach.",
    "spungellaanimationworkshop":
      "Jean-Denis Haas' online animation workshop, built around assignments, critiques and direct feedback from a working professional animator.",
    "sophoriaacademy":
      "Creature animation and VFX courses taught through real production workflows. Especially useful if dragons, dinosaurs and quadrupeds are your thing.",
    "toanimateblender":
      "Blender animation courses, rigs and mentorship designed specifically for animators. Beginner friendly, but built with professional workflows in mind.",

    /* Tutorials & Exercises */
    "51animationexercisestomaster":
      "A great list of animation exercises that builds from simple fundamentals to much harder ideas. Useful no matter how long you have been animating.",
    "150animationexercisestoboostyourskills":
      "A huge list of character animation exercises for every skill level. Perfect when you want to practise but have no idea what to animate.",
    "animatotutorials":
      "Animation tutorials and learning material collected inside the Anima.to community. Lots to explore without bouncing between a dozen different sites.",
    "birdflightanimationmasterclasswithbrendanbody":
      "If you want to learn bird flight, this course is a must-have. Brendan Body breaks down a very difficult subject in a practical, animator-friendly way.",
    "keithlangotutorials":
      "An oldie but a goodie. Keith Lango's tutorials have been teaching animators for ages and probably taught your boss at some point.",
    "quadblogbeta":
      "A genuinely in-depth walkthrough of an efficient quadruped animation process, from planning and reference through blocking and polish.",

    /* Technical Learning */
    "anatomyofanexplosion":
      "An old-school web breakdown of how explosions develop over time. Simple, clear and surprisingly handy when you need to animate one.",
    "delanimationtutorials":
      "A collection of great Maya tutorials and scripts from Delano Athias. Practical ideas that are easy to bring into your own workflow.",
    "metahumananimatortutorialpdf":
      "A nice little introduction to MetaHuman Animator. Good for understanding the basic capture and processing workflow without getting buried in documentation.",
    "physicsbasedanimation":
      "Research, demos and highlights from the world of physics-based animation. Some remarkable stuff lives here. Get your nerd on.",
    "pythonformayaartistfriendlyprogramming":
      "Interested in Python for Maya but allergic to programmer-speak? This is a friendly primer built specifically for artists.",

    /* YouTube Channels */
    "arvidschneiderlookdev":
      "High-quality lighting, rendering and look-development tutorials, with plenty of Maya and Arnold knowledge. Technical, but always presented clearly.",
    "animatewitharrananim":
      "Animation tips, workflow demos and shot breakdowns from Arran. Practical material aimed at working character animators.",
    "animatorsjourneyanim":
      "Animation tutorials, Maya workflow tips and useful assets, including some very practical camera and performance tools.",
    "corridordigitalvfx":
      "VFX experiments, behind-the-scenes builds and the endlessly watchable VFX Artists React series. Educational even when they are setting something on fire.",
    "edwinschaapanim":
      "Character animation breakdowns, tutorials and honest looks at professional workflows from Edwin Schaap.",
    "ilsezamarripaanim":
      "Animation tutorials and demos with a strong focus on acting, mechanics and clean Maya workflows.",
    "jamesbaxteranim":
      "Drawing and animation demonstrations from James Baxter. Watching him work is equal parts inspiring and mildly unfair.",
    "jeandenishaasanim":
      "Animation clips, critiques and practical advice from Jean-Denis Haas. Great production-minded notes on acting, mechanics and workflow.",
    "markmastersanim":
      "Maya animation tutorials, workflow breakdowns and tool demonstrations from Mark Masters. Always practical and easy to apply to a real shot.",
    "physicsforanimators":
      "Alejandro Garcia explains the physics animators actually need: weight, balance, impacts, jumps and all the forces hiding inside a shot.",
    "pierrickpicautblender":
      "Excellent Blender animation and rigging tutorials from Pierrick Picaut. Polished, energetic and packed with useful workflow ideas.",
    "shotdrawncutfilm":
      "Film-language breakdowns covering staging, cinematography, editing and visual storytelling. Useful whenever an animation problem is really a shot problem.",
    "sirwadeneistadtanim":
      "Approachable animation tutorials, interviews and career advice from Sir Wade. A good channel for both fundamentals and the realities of working in animation.",

    /* ==================== READING ==================== */

    /* Blogs & Articles */
    "animationmentorblog":
      "Animation advice, career articles and interviews from Animation Mentor. A dependable mix of fundamentals and practical industry guidance.",
    "animschoolblog":
      "Tutorials, interviews and animation tips from AnimSchool instructors and guests. Lots of practical material from working artists.",
    "escapestudiosanimationblog":
      "Animation exercises, career advice and teaching notes from Escape Studios. A good mix of fundamentals and production-minded guidance.",
    "fxrantbytoddvaziri":
      "Todd Vaziri's wonderfully nerdy collection of VFX observations, filmmaking details and behind-the-scenes knowledge. Always interesting.",
    "ianimatenetarticles":
      "Interviews, tips and career articles from iAnimate instructors. Useful reading for character, creature and game animators.",

    /* Books */
    "actingforanimators":
      "Ed Hooks' practical guide to performance, objectives and believable behaviour. One of the clearest bridges between acting theory and animation.",
    "animallocomotionforanimators":
      "Stuart Sumida's illustrated guide to animal locomotion. A fantastic reference for understanding gait structure before you start guessing at it.",
    "drawntolife":
      "Walt Stanchfield's legendary gesture-drawing notes collected into one book. Less about pretty drawings, more about capturing a clear idea.",
    "muybridgeanimalsinmotion":
      "Classic sequential photography of animals in motion. Old, incredibly useful and still one of the best ways to study real gait patterns.",
    "muybridgehumansinmotion":
      "Muybridge's classic human motion studies, broken into clear image sequences. Great for mechanics, timing and finding the frames your eye misses.",
    "simplifieddrawingforplanninganimation":
      "Wayne Gilbert's practical guide to planning animation with simple, readable drawings. Excellent for getting the idea working before detail takes over.",
    "theanimatorssurvivalkit":
      "Richard Williams' essential animation reference. Timing, spacing, walks, weight and overlap explained in a way you will keep coming back to.",
    "theillusionoflife":
      "The classic Disney book on animation history and principles. Dense, beautiful and absolutely worth having in your brain somewhere.",

    /* ==================== COMMUNITY ==================== */

    /* COMMUNITIES & DISCUSSION */
    "11secondclub":
      "A monthly character animation challenge built around an 11-second audio clip. Great motivation, plenty of entries to study and useful peer feedback.",
    "agoracommunity":
      "A focused animation community for sharing work, getting feedback and learning from working artists. One of the friendlier corners of the internet.",
    "animato":
      "A searchable community of animation clips, exercises and artwork. Useful for discovering work and collecting ideas before starting a shot.",
    "ragdolldynamicsforums":
      "The official place for Ragdoll questions, examples, workflows and troubleshooting. Very useful once physics starts doing physics things.",
    "redditcomranimation":
      "A broad animation community covering 2D, 3D, stop-motion and everything in between. A mixed bag, but there is plenty of good work and discussion.",
    "redditcomranimationcareer":
      "Career questions and advice for people trying to enter or navigate animation. Helpful when you want honest answers beyond school marketing.",
    "redditcomrvfx":
      "Industry news, career talk and war stories from people working in VFX. Occasionally grumpy, often useful.",

    /* ==================== REFERENCE ==================== */

    /* 2D & Drawing */
    "characterdesignreferences":
      "A giant collection of character design, visual development and art references. Dangerous if you only meant to browse for five minutes.",
    "etheringtonbrothershowtothinkwhenyoudraw":
      "The Etherington Brothers' enormous library of drawing breakdowns. Clear, visual lessons on everything from hands and poses to smoke, water and explosions.",

    /* Anatomy */
    "artnatomyanatomicalbasisoffacialexpressions":
      "An interactive guide to the muscles and biomechanics behind facial expressions. Very useful when a face feels wrong but you cannot explain why.",
    "facethefacsfacialexpressionresources":
      "Melinda Ozel's excellent FACS, facial anatomy and lip-sync resources. Dense subjects translated into material that artists can actually use.",
    "humananatomybystuartsumida":
      "Stuart Sumida's anatomy lecture for animators, full of practical connections between structure and movement. Science without forgetting the shot.",
    /* Legacy spelling alias retained for "Stuart Sumidia". */
    "humananatomybystuartsumidia":
      "Stuart Sumida's anatomy lecture for animators, full of practical connections between structure and movement. Science without forgetting the shot.",
    "skeletonsforanimatorsriggersbystuartsumida":
      "A detailed look at skeletons and joint structure made specifically for animators and riggers. Great context for why bodies move the way they do.",

    /* Animals & Creatures */
    "animalgaitsforanimators":
      "A clear lecture on animal gait patterns and how to recognize them. Excellent groundwork before tackling a quadruped walk or run.",
    /* Animal Locomotion for Animators shares the tooltip defined in READING > Books. */
    "birdflightforanimators":
      "A focused lecture on the mechanics and timing of bird flight. Great reference before you start flapping wings and hoping for the best.",
    "buggaitsforanimators":
      "A practical breakdown of insect locomotion and multi-legged gait patterns. Very useful when four legs are apparently not enough.",
    "flightdeconstructed":
      "A beautifully simple animated breakdown of flapping flight. It makes lift, thrust and wing motion much easier to visualize.",
    "greenscreenanimals":
      "High-resolution footage of domestic and exotic animals filmed against green screen. Useful both as motion reference and production-ready stock.",
    "howtomakebirdsflygood":
      "Brendan Body's wonderfully named bird-flight tutorial. An old but excellent guide to wing mechanics, timing and believable flight.",
    "naturefootage":
      "A large wildlife and nature stock-footage library. Great when YouTube refuses to show the exact animal behaviour you need.",

    /* Cinematography & Camera */
    "eyecandy":
      "A visual-technique library organized by camera moves, framing, transitions and effects. Fantastic for finding the name and examples of an idea in your head.",
    "filmgrab":
      "A huge archive of carefully selected movie stills. Great for composition, lighting, colour and remembering that every frame is a design.",
    "shotcafe":
      "A searchable movie-stills database organized by tags, colour, director and cinematographer. Very handy for decks, moodboards and shot research.",
    "shotdeck":
      "A massive searchable library of cinematic images with detailed visual filters. One of the best reference tools around if you work with shots.",

    /* Human Motion */
    "animationreference":
      "A curated animation-reference library with searchable clips, frame stepping, loops and collections. Much faster than digging through random videos.",
    /* Legacy spelling alias retained for "Anmation Reference". */
    "anmationreference":
      "A curated animation-reference library with searchable clips, frame stepping, loops and collections. Much faster than digging through random videos.",
    "bodiesinmotion":
      "Scott Eaton's beautiful high-resolution studies of athletes and performers in motion. Fantastic anatomy, mechanics and gesture reference.",
    "endlessreferenceyoutube":
      "A large library of clean human motion reference covering walks, runs, actions and performance ideas. Exactly what the name promises.",
    "gingerninjatricksteryoutube":
      "Martial arts, stunt and movement reference from a performer who knows how to make actions readable. Great for fights and physical beats.",
    "kevinparry50waysseries":
      "Kevin Parry performs the same action dozens of different ways. Equal parts clever, funny and extremely useful animation reference.",
    "motionactoryoutube":
      "A growing collection of acted movement and motion-capture reference. Useful for mechanics, transitions and finding natural variations on an action.",
    "underwaterswimmingreference":
      "A focused underwater swimming reference clip. Handy when gravity, drag and body mechanics all decide to change the rules at once.",

    /* ==================== RIGS & ASSETS ==================== */

    /* Rigs & Props */
    "agoracommunityassets":
      "Character, creature, prop and environment rigs from Agora and its community. A solid mix of Maya, Blender and Unreal assets for practice.",
    "animationbuffet":
      "Jean-Denis Haas' long-running index of free and paid Maya rigs, often with quick tests and reviews. A great place to find something new to animate.",
    "animationmentorfreerigs":
      "Free Maya character rigs from Animation Mentor for exercises and demo-reel work. Reliable starting points for character animation practice.",
    "animprops":
      "A marketplace full of character, creature and prop rigs, plus useful animation tools. Quality varies, but there are some gems in here.",
    "getrigs":
      "A growing collection of free and paid Maya rigs, environments, props and tools. Worth checking when your usual practice rig feels tired.",
    "kielfigginsstore":
      "Kiel Figgins' production-friendly Maya rigs, props and effects. Consistent controls, no custom plug-ins and plenty of useful free options.",
    "mrinalsonirigs":
      "A collection of free and inexpensive Maya creature and character rigs from Mrinal Soni. Especially useful for building a creature reel.",
    "prorigs":
      "Feature-quality Maya character rigs designed by artists from top animation studios. Appealing, consistent and actually pleasant to animate.",
    "truongcgartist":
      "A large collection of Maya and Unreal creature rigs from Truong CG Artist. Lots of unusual animals and monsters for non-commercial practice.",
    "universalhumanblender":
      "A detailed, customizable human rig and base-mesh system for Blender, with modular body, face, anatomy and texture options.",

    /* Textures & Materials */
    "cgbookcase":
      "A clean library of free PBR textures with sensible categories and straightforward downloads. Great when you need something usable quickly.",
    "gametextures":
      "A large production-focused material library covering realistic, stylized and game-ready surfaces. More specialized than the name first suggests.",
    "poliigon":
      "High-quality textures, models and HDRIs with tools for bringing them into common 3D packages. Polished assets when placeholders are no longer cutting it.",
    "texturescom":
      "One of the giant texture libraries: photos, PBR materials, decals, scans and more. If a surface exists, it is probably somewhere in here.",

    /* Models */
    "cgtrader":
      "A huge marketplace for 3D models, including a useful free section. Great for background assets, but always check the model and licence carefully.",
    "fab":
      "Epic's marketplace for models, materials, environments, plug-ins and game assets. A very deep library with plenty of free monthly content.",
    "reallusion3dcharacterbase":
      "Free character bases for Reallusion Character Creator. Useful when you need a human starting point without building one from scratch.",
    "turbosquid":
      "One of the biggest 3D model marketplaces around. Excellent in an emergency, as long as you inspect the topology and licence before getting attached.",

    /* Stock Footage & VFX */
    "actionvfx":
      "High-quality production footage for fire, smoke, debris, weather, crowds and more. Expensive compared with free assets, but reliably good.",
    "footagecrate":
      "A huge mix of VFX elements, motion graphics, sound and 3D assets, with both free and paid downloads. Very useful for quick comps.",
    "vfxstore":
      "Production-ready VFX elements including fire, smoke, debris and atmospheric effects. Another useful library when shooting it yourself is not an option.",

    /* Stop Motion Supplies */
    "animationsupplies":
      "A proper stop-motion shop for armatures, joints, tie-downs, rigging, puppet parts, stages and clay. Basically the hardware aisle for animators.",
    "kineticarmatures":
      "Professional ball-and-socket armatures, rigging arms, joints and puppet hardware. Beautifully made tools for serious stop-motion work.",
    "stickybones":
      "Highly poseable magnetic figures built for drawing reference and stop-motion animation. Much more useful than the stiff wooden mannequin on your desk.",

    /* ==================== TOOLS ==================== */

    /* Maya Tools & Plug-Ins */
    "animbot":
      "A deep Maya animation toolkit for posing, timing, spacing, selection, mirroring and dozens of everyday jobs. Hard to give up once it is in your workflow.",
    "brianhorgantoolsbhtools":
      "Brian Horgan's Maya animation tools, built by an animator for real shot work. Useful utilities with very little nonsense.",
    "brotools":
      "A growing Maya toolkit for dynamics, overlap, IK/FK switching, tweening, rigging and everyday quality-of-life jobs. BroDynamics alone is worth a look.",
    "gizmifyreferencemediaplane":
      "A Maya plug-in that plays and scrubs video directly on a camera-attached plane. Much nicer than converting every reference clip to an image sequence.",
    "joshjanouskytools":
      "A collection of Maya animation and workflow tools from Josh Janousky. Practical scripts for common production problems.",
    "kielfigginsresources":
      "Kiel Figgins' huge library of free Maya scripts, rigs and workflow notes. One of those pages every animator should keep bookmarked.",
    "mgtools":
      "A production-tested Maya toolkit made specifically for character animators, covering poses, animation transfer, selection, curves and plenty more.",
    "mltools":
      "Morgan Loomis' excellent collection of free Maya scripts. Small, focused tools that solve real everyday animation and rigging annoyances.",
    "ragdolldynamics":
      "Physics-assisted animation tools that work directly with your Maya controls. Powerful for blocking, secondary motion, contacts and getting believable weight quickly.",
    "realcameramotionlibrary":
      "Forty motion-captured camera moves supplied as reusable animation. A fast way to add believable handheld character without faking every little bump.",

    /* Maya Scripts */
    "debrisemitter":
      "A Maya tool for quickly generating and animating scattered debris. Useful for impacts, destruction and all the little secondary pieces that sell a shot.",
    "makecvcurvesfrommotiontrails":
      "A handy Maya script that converts motion trails into editable CV curves. Great for visualizing and reshaping arcs without fighting the Graph Editor.",
    "smartlayers":
      "A Maya tool for making broad animation adjustments with layers while preserving the underlying motion. Very handy for changes that would otherwise wreck your curves.",
    "switchcams":
      "A simple Maya script for moving quickly between cameras. Small tool, but exactly the kind of repetitive click-saving that adds up all day.",

    /* Playback & Review */
    "keyframepro":
      "A fast playback and review tool built for animators, with frame stepping, scrubbing, comparisons, annotations and Maya integration. A proper workhorse.",
    "syncsketch":
      "Browser-based review with synchronized playback, drawing and frame-accurate notes. Excellent for remote dailies, mentoring and sharing feedback.",
    "rv":
      "Autodesk's professional image-sequence and media player for playback, comparison, colour and review. Built for production rather than casual viewing.",

    /* Animation Software */
    "autodeskmaya":
      "The animation and VFX package most of us have a complicated long-term relationship with. Still the centre of a huge number of production pipelines.",
    "blender":
      "A free, open-source 3D package covering modeling, rigging, animation, rendering, compositing and more. Ridiculously capable for the price of absolutely nothing.",
    "cascadeur":
      "Animation software built around physics-assisted posing, balance and motion. Especially interesting for action, body mechanics and cleaning up mocap.",
    "dragonframe":
      "The industry-standard stop-motion capture package, with live view, onion skinning, camera control and lighting tools. Used from bedrooms to major studios.",
    "unrealengine":
      "A real-time engine for games, previs, virtual production and increasingly final animation work. Huge, powerful and somehow always gaining another menu.",

    /* Other Tools */
    "applearkit":
      "Apple's augmented-reality framework, including accessible face tracking and blendshape data. A useful entry point for facial capture experiments.",
    "brekelpointcloud":
      "Affordable Windows tools for recording point clouds and volumetric video with depth sensors. Great for mocap experiments without a studio-sized setup.",
    "photopea":
      "A surprisingly capable Photoshop-like editor that runs in your browser. Fast, free and perfect when you just need to fix the image right now.",

    /* Web & Hosting */
    "carrdco":
      "A fast, inexpensive way to build clean one-page sites without becoming a web developer. This very site is proof it can be pushed pretty far.",
    "cloudflare":
      "Domains, DNS, security and performance tools in one place. Useful for putting a custom domain in front of a site without much fuss.",
    "githubpages":
      "Free static-site hosting directly from a GitHub repository. Perfect for scripts, data files and small sites that should update with a simple push.",

    /* ==================== INDUSTRY ==================== */

    /* News & Publications */
    "80level":
      "Daily articles, interviews and breakdowns covering games, VFX, animation and digital art. Great for seeing how other artists actually build things.",
    "animationmagazine":
      "Animation news, interviews and production coverage across film, television and streaming. Good for keeping an eye on the wider industry.",
    "animationworldnetwork":
      "One of the longest-running animation and VFX news sites. Useful for production announcements, business news, interviews and festival coverage.",
    "beforeafters":
      "Ian Failes' excellent VFX coverage, packed with interviews and behind-the-scenes breakdowns that actually explain how the work was done.",
    "theartofvfx":
      "Detailed interviews with VFX supervisors and studios about how major sequences were made. Basically shot-breakdown catnip.",

    /* Jobs & Pay */
    "animvfxgameindustryjobpostingspreadsheet":
      "A community-maintained spreadsheet of animation, VFX and game openings. Not glamorous, but often much faster than checking every studio site yourself.",
    "animatedjobs":
      "A focused job board for animation, VFX and games. Cleaner and less noisy than searching through a general-purpose job site.",
    "artstationjobpostings":
      "ArtStation's job board for games, animation and VFX roles. Especially useful for art, modeling, environment and concept positions.",
    "linkedinjobpostings":
      "The giant general-purpose job board. Filters and alerts are useful, even if digging through promoted listings occasionally tests your patience.",
    "saltyanimatorssalaryspreadsheet":
      "Anonymous salary data shared by people working across animation and VFX. Extremely useful context before a negotiation or relocation.",
    "saltyanimatorssuccessfulexitcollectionspreadsheet":
      "Anonymous data shared by people working across animation and VFX who have successfully exited the industry for something new. Highly useful context if you are looking to transition away from VFX or Animation."
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
