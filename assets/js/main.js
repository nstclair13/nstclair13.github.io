/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$sidebar = $('#sidebar');

		// Hack: Enable IE flexbox workarounds.
			if (skel.vars.IEVersion < 12)
				$body.addClass('is-ie');

		// Disable animations/transitions until the page has loaded.
			if (skel.canUse('transition'))
				$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Forms.

			// Fix: Placeholder polyfill.
				$('form').placeholder();

			// Hack: Activate non-input submits.
				$('form').on('click', '.submit', function(event) {

					// Stop propagation, default.
						event.stopPropagation();
						event.preventDefault();

					// Submit form.
						$(this).parents('form').submit();

				});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Sidebar.
			if ($sidebar.length > 0) {

				var $sidebar_a = $sidebar.find('a');

				$sidebar_a
					.addClass('scrolly')
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$sidebar_a.removeClass('active');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								top: '-20vh',
								bottom: '-20vh',
								initialize: function() {

									// Deactivate section.
										if (skel.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($sidebar_a.filter('.active-locked').length == 0) {

											$sidebar_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

			}

		// Scrolly.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: function() {

					// If <=large, >small, and sidebar is present, use its height as the offset.
						if (skel.breakpoint('large').active
						&&	!skel.breakpoint('small').active
						&&	$sidebar.length > 0)
							return $sidebar.height();

					return 0;

				}
			});

		// Spotlights.
			$('.spotlights > section')
				.scrollex({
					mode: 'middle',
					top: '-10vh',
					bottom: '-10vh',
					initialize: function() {

						// Deactivate section.
							if (skel.canUse('transition'))
								$(this).addClass('inactive');

					},
					enter: function() {

						// Activate section.
							$(this).removeClass('inactive');

					}
				})
				.each(function() {

					var	$this = $(this),
						$image = $this.find('.image'),
						$img = $image.find('img'),
						x;

					// Assign image.
						$image.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set background position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide <img>.
						$img.hide();

				});

		// Features.
			if (skel.canUse('transition'))
				$('.features')
					.scrollex({
						mode: 'middle',
						top: '-20vh',
						bottom: '-20vh',
						initialize: function() {

							// Deactivate section.
								$(this).addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$(this).removeClass('inactive');

						}
					});

	});

})(jQuery);

/*!
 * jQuery Tools dev - The missing UI library for the Web
 * 
 * overlay/overlay.js
 * overlay/overlay.apple.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * version 1.2.8-dev_c7a9f26148
 * fixed by videolightbox.com: no migrate use
 * fixed by videolightbox.com 13/08/2013: added autoFit/resposive 
*
*
*
* 08/05/2014 - Fixed bug with non-removable video after closing overlay
* changes in overlay.apple.js
	if (!o && /url\(/.test(n)) {
		...
		n = n.slice(n.indexOf("(") + 1, n.indexOf(")")).replace(/\"/g, "");
		m.css("backgroundImage", "none");
		o = e('<img src="' + n + '"/>');
		...
	}

	changed to
	if (!o) {
		...
		if(/url\(/.test(n)) {
		    n = n.slice(n.indexOf("(") + 1, n.indexOf(")")).replace(/\"/g, "");
		    m.css("backgroundImage", "none");
			o = e('<img src="' + n + '"/>')
		} else {
			o = e('<div>')
		}
		...
	}
*/
(function(c){c.tools=c.tools||{version:"@VERSION"};c.tools.overlay={addEffect:function(e,f,g){b[e]=[f,g]},conf:{close:null,closeOnClick:true,closeOnEsc:true,closeSpeed:"fast",effect:"default",fixed:!document.all||window.XMLHttpRequest,left:"center",autoFit:true,load:false,mask:null,oneInstance:true,speed:"normal",target:null,top:"10%"}};var d=[],b={};c.tools.overlay.addEffect("default",function(h,g){var f=this.getConf(),e=c(window);this.getOverlay().css(h).fadeIn(f.speed,g)},function(e){this.getOverlay().fadeOut(this.getConf().closeSpeed,e)});function a(h,m){var p=this,f=h.add(p),o=c(window),k,j,i,e=c.tools.expose&&(m.mask||m.expose),l=Math.random().toString().slice(10);if(e){if(typeof e=="string"){e={color:e}}e.closeOnClick=e.closeOnEsc=false}var g=m.target||h.attr("rel");j=g?c(g):null||h;if(!j.length){throw"Could not find Overlay: "+g}if(h&&h.index(j)==-1){h.click(function(q){p.load(q);return q.preventDefault()})}function n(s,r,q){s=s.split(" ");s[0]=parseFloat(s[0])/r;s[1]=parseFloat(s[1])/q;s[2]=parseFloat(s[2])/r;s[3]=parseFloat(s[3])/q;return s.join("px ")+"px"}c.extend(p,{load:function(r){if(p.isOpened()){return p}var q=b[m.effect];if(!q){throw'Overlay: cannot find effect : "'+m.effect+'"'}if(m.oneInstance){c.each(d,function(){this.close(r)})}r=r||c.Event();r.type="onBeforeLoad";f.trigger(r);if(r.isDefaultPrevented()){return p}i=true;if(e){c(j).expose(e)}q[0].call(p,this.getPos(),function(){if(i){r.type="onLoad";f.trigger(r)}});if(e&&m.closeOnClick){c.mask.getMask().one("click",p.close)}if(m.closeOnClick){c(document).on("click."+l,function(s){if(!c(s.target).parents(j).length){p.close(s)}})}if(m.closeOnEsc){c(document).on("keydown."+l,function(s){if(s.keyCode==27){p.close(s)}})}if(m.autoFit){c(window).on("resize scroll",p.putOverlay)}return p},close:function(q){if(!p.isOpened()){return p}q=q||c.Event();q.type="onBeforeClose";f.trigger(q);if(q.isDefaultPrevented()){return}i=false;b[m.effect][1].call(p,function(){q.type="onClose";f.trigger(q)});c(document).off("click."+l+" keydown."+l);c(window).off("resize scroll",p.putOverlay);if(e){c.mask.close()}return p},getPos:function(){var t={top:m.top,left:m.left},q=j.outerWidth(true),r=j.outerHeight(true);var s=j.data("oSize");if(!s){j.data("oSize",s={width:q,height:r,kx:q/j.width(),ky:r/j.height(),padding:[j.css("padding-top"),j.css("padding-right"),j.css("padding-bottom"),j.css("padding-left")].join(" ")})}if(m.autoFit){if(s.width>o.width()){q=o.width();r=s.height*o.width()/s.width}else{q=s.width;r=s.height}}if(typeof t.top=="string"){t.top=t.top=="center"?Math.max((o.height()-r)/2,0):parseInt(t.top,10)/100*o.height()}if(t.left=="center"){t.left=Math.max((o.width()-q)/2,0)}if(!m.fixed){t.top+=o.scrollTop();t.left+=o.scrollLeft()}if(m.autoFit){if(r<o.height()){t.top=Math.min(t.top,o.height()-r+o.scrollTop())}else{t.top=parseInt(c(j).css("top"))||0;t.top=Math.max(t.top,o.height()-r+o.scrollTop());t.top=Math.min(t.top,o.scrollTop())}t.width=q/s.kx;t.height=r/s.ky;t.oWidth=q;t.oHeight=r;t.padding=n(s.padding,s.width/q,s.height/r)}t.position=m.fixed?"fixed":"absolute";return t},putOverlay:function(){c(j).css(p.getPos())},getOverlay:function(){return j},getTrigger:function(){return h},getClosers:function(){return k},isOpened:function(){return i},getConf:function(){return m}});c.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(r,q){if(c.isFunction(m[q])){c(p).on(q,m[q])}p[q]=function(s){if(s){c(p).on(q,s)}return p}});k=j.find(m.close||".close");if(!k.length&&!m.close){k=c('<a class="close"></a>');j.prepend(k)}k.click(function(q){p.close(q)});if(m.load){p.load()}}c.fn.overlay=function(e){var f=this.data("overlay");if(f){return f}if(c.isFunction(e)){e={onBeforeLoad:e}}e=c.extend(true,{},c.tools.overlay.conf,e);this.each(function(){f=new a(c(this),e);d.push(f);c(this).data("overlay",f)});return e.api?f:this}})(jQuery); 
(function(e){var c=e.tools.overlay,a=e(window);e.extend(c.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});function d(g){var h=g.offset();return{top:h.top+g.height()/2,left:h.left+g.width()/2}}var f=function(s,r){var m=this.getOverlay(),q=this.getConf(),j=this.getTrigger(),t=this,u=s.oWidth,o=m.data("img");var n=m.css("backgroundImage");if(!o){if(!n){throw"background-image CSS property not set for overlay"}if(/url\(/.test(n)){n=n.slice(n.indexOf("(")+1,n.indexOf(")")).replace(/\"/g,"");m.css("backgroundImage","none");o=e('<img src="'+n+'"/>')}else{o=e("<div>")}o.css({border:0,display:"none"}).width(u);e("body").append(o);m.data("img",o)}var l=q.start.top||Math.round(a.height()/2),i=q.start.left||Math.round(a.width()/2);if(j){var h=d(j);l=h.top;i=h.left}if(q.fixed){l-=a.scrollTop();i-=a.scrollLeft()}if(o){o.css({position:"absolute",top:l,left:i,width:0,zIndex:q.zIndex}).show()}m.css(s);function k(){m.css("zIndex",q.zIndex+1).fadeIn(q.fadeInSpeed,function(){if(t.isOpened()&&!e(this).index(m)){r.call()}else{m.hide()}})}if(o){o.animate({top:s.top,left:s.left,width:u},q.speed,k).css("position",s.position)}else{k()}if(o){var g=this.putOverlay;this.putOverlay=function(){g();var p=t.getPos();o.css({top:p.top,left:p.left,width:p.oWidth})}}};var b=function(g){var k=this.getOverlay().hide(),j=this.getConf(),i=this.getTrigger(),h=k.data("img"),l={top:j.start.top,left:j.start.left,width:0};if(i){e.extend(l,d(i))}if(j.fixed&&h){h.css({position:"absolute"}).animate({top:"+="+a.scrollTop(),left:"+="+a.scrollLeft()},0)}if(h){h.animate(l,j.closeSpeed,g)}};c.addEffect("apple",f,b)})(jQuery); 
(function(b){b.tools=b.tools||{version:"@VERSION"};var e;e=b.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};function f(){if(document.all){var k=b(document).height(),j=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,k-j<20?j:k]}return[b(document).width(),b(document).height()]}function h(j){if(j){return j.call(b.mask)}}var i,d,c,a,g;b.mask={load:function(j,l){if(c){return this}if(typeof j=="string"){j={color:j}}j=j||a;a=j=b.extend(b.extend({},e.conf),j);i=b("#"+j.maskId);if(!i.length){i=b("<div/>").attr("id",j.maskId);b("body").append(i)}var k=f();i.css({position:"absolute",top:0,left:0,width:k[0],height:k[1],display:"none",opacity:j.startOpacity,zIndex:j.zIndex});if(j.color){i.css("backgroundColor",j.color)}if(h(j.onBeforeLoad)===false){return this}if(j.closeOnEsc){b(document).on("keydown.mask",function(m){if(m.keyCode==27){b.mask.close(m)}})}if(j.closeOnClick){i.on("click.mask",function(m){b.mask.close(m)})}b(window).on("resize.mask",function(){b.mask.fit()});if(l&&l.length){g=l.eq(0).css("zIndex");b.each(l,function(){var m=b(this);if(!/relative|absolute|fixed/i.test(m.css("position"))){m.css("position","relative")}});d=l.css({zIndex:Math.max(j.zIndex+1,g=="auto"?0:g)})}i.css({display:"block"}).fadeTo(j.loadSpeed,j.opacity,function(){b.mask.fit();h(j.onLoad);c="full"});c=true;return this},close:function(){if(c){if(h(a.onBeforeClose)===false){return this}i.fadeOut(a.closeSpeed,function(){h(a.onClose);if(d){d.css({zIndex:g})}c=false});b(document).off("keydown.mask");i.off("click.mask");b(window).off("resize.mask")}return this},fit:function(){if(c){var j=f();i.css({width:j[0],height:j[1]})}},getMask:function(){return i},isLoaded:function(j){return j?c=="full":c},getConf:function(){return a},getExposed:function(){return d}};b.fn.mask=function(j){b.mask.load(j);return this};b.fn.expose=function(j){b.mask.load(j,this);return this}})(jQuery);

// -----------------------------------------------------------------------------------
//
// VideoLightBox for jQuery
// http://videolightbox.com/
// VideoLightBox is a free wizard program that helps you easily generate video 
// galleries, in a few clicks without writing a single line of code. For Windows and Mac!
// Last updated: 2013-12-17
//
(function(b){var a=(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));if(!b('script[src="//www.youtube.com/iframe_api"]').length){b("head").append(b('<script type="text/javascript" src="//www.youtube.com/iframe_api">'))}if(!b('script[src="http://a.vimeocdn.com/js/froogaloop2.min.js"]').length){b("head").append(b('<script type="text/javascript" src="http://a.vimeocdn.com/js/froogaloop2.min.js">'))}window.videoLightBox=function(d,e){if(!b(d).length){return}var g=b(d).get(0).className.split(/\s+/)[0]||"voverlay";var c=g+"_overlay";var f="#"+g;e=b.extend({onClose:0,opacity:0,color:"#000",closeOnComplete:true,volume:100},e);if(!b(f).length){b("body").prepend("<div id='"+g+"'><div class='vcontainer'></div></div>")}b(d).overlay({api:true,fixed:false,expose:(e.opacity?{color:e.color,loadSpeed:400,opacity:e.opacity}:null),effect:"apple",target:f,onClose:function(){swfobject.removeSWF(c);b("#"+c).html("");if(e.onClose){e.onClose()}},onBeforeLoad:function(){var v=e.closeOnComplete;var r=document.getElementById(c);if(!r){var p=b("<div></div>");p.attr({id:c});b(f+" .vcontainer").append(p)}var x="0056006900640065006f004c00690067006800740042006f0078002e0063006f006d";var t="0068007400740070003a002f002f0076006900640065006f006c00690067006800740062006f0078002e0063006f006d";r=x?b("<div></div>"):0;if(r){r.css({position:"absolute",right:(parseInt("38")||38)+"px",top:(parseInt("38")||38)+"px",padding:"0 0 0 0",height:"auto"});b(f+" .vcontainer").append(r)}function q(A){var z="";for(var y=0;y<A.length;y+=4){z+=String.fromCharCode(parseInt(A.substr(y,4),16))}return z}if(r&&document.all){var n=b('<iframe src="javascript:false"></iframe>');n.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});n.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});r.append(n)}var p=r?b(document.createElement("A")):r;if(p){p.css({position:"relative",display:"block","background-color":"#E4EFEB",color:"#837F80","font-family":"Lucida Grande,Arial,Verdana,sans-serif","font-size":"11px","font-weight":"normal","font-style":"normal",padding:"1px 5px",opacity:0.7,filter:"alpha(opacity=70)",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});p.attr({href:q(t)});p.html(q(x));p.bind("contextmenu",function(y){return false});r.append(p)}var h=this.getTrigger().attr("href");if(typeof(p)!="number"&&(!r||!r.html||!r.html())){return}var u=this;var s=g+"complite_event";if(v){window[s]=function(){u.close()}}var l;if(l=/youtube\.com\/v\/([^?]+)\?/.exec(h)){if(location.protocol=="file:"){var w=b('<iframe width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').attr("src","https://www.youtube.com/embed/"+l[1]+(/autoplay=1/.test(h)?"?autoplay=1":"")).appendTo(b("#"+c))}else{b('<div id="'+c+'-yt">').appendTo(b("#"+c));var m=setInterval(function(){if(!YT){clearInterval(m)}if(YT&&YT.Player){clearInterval(m);var y=new YT.Player(c+"-yt",{width:"100%",height:"100%",videoId:l[1],events:{onReady:function(z){z.target.setVolume(e.volume);if(!a&&/autoplay=1/.test(h)){z.target.playVideo()}},onStateChange:function(z){if(v&&!z.data){u.close()}}}})}},100)}}else{if(l=/vimeo\.com\/moogaloop\.swf\?clip_id\=([^&]+)\&/.exec(h)){if(location.protocol=="file:"){var w=b('<iframe width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').attr("src","https://player.vimeo.com/video/"+l[1]+(/autoplay=1/.test(h)?"?autoplay=1":"")).appendTo(b("#"+c))}else{var k=setInterval(function(){if(typeof $f!=="undefined"){clearInterval(k);var y=b('<iframe width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').attr("src","//player.vimeo.com/video/"+l[1]+(/autoplay=1/.test(h)?"?autoplay=1":"")).appendTo(b("#"+c));y=$f(y[0]);y.addEvent("ready",function(){y.api("setVolume",e.volume/100);if(v){y.addEvent("finish",function(){u.close()})}})}},100)}}}var j=/^(.*\/)?[^\/]+\.swf\?.*url=([^&]+\.(mp4|m4v|mov))/.exec(h);var o=document.createElement("video");if(!l&&o.canPlayType&&o.canPlayType("video/mp4")&&j){j=(j[1]||"")+j[2];var i=b('<video src="'+j+'" type="video/mp4" controls="controls" style="width:100%;height:100%;"></video>');i.appendTo(b("#"+c));if(v){i.bind("ended",function(){u.close()});i.bind("pause",function(){if(!i.get(0).webkitDisplayingFullscreen){u.close()}})}if(/Android/.test(navigator.userAgent)){setTimeout(function(){i.get(0).play()},1000)}else{i.get(0).play()}}else{if(!l){swfobject.createSWF({data:h,width:"100%",height:"100%",wmode:"opaque"},{allowScriptAccess:"always",allowFullScreen:true,FlashVars:(v?"complete_event="+s+"()&enablejsapi=1":"")},c)}}}})}})(jQuery);$(function(){videoLightBox(".voverlay",{opacity:0,color:"#f0f0f0",closeOnComplete:false,volume:100})});