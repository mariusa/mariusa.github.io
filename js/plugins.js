(function(a,b,c){if(!("ontouchstart"in document)){var e=a();a.fn.dropdownHover=function(c){e=e.add(this.parent());return this.each(function(){var h=a(this),f=h.parent(),k={delay:a(this).data("delay"),instantlyCloseOthers:a(this).data("close-others")},l=a.extend(!0,{},{delay:500,instantlyCloseOthers:!0},c,k),n;f.hover(function(c){if(!f.hasClass("open")&&!h.is(c.target))return!0;!0===l.instantlyCloseOthers&&e.removeClass("open");b.clearTimeout(n);f.addClass("open");f.trigger(a.Event("show.bs.dropdown"))},
function(){n=b.setTimeout(function(){f.removeClass("open");f.trigger("hide.bs.dropdown")},l.delay)});h.hover(function(){!0===l.instantlyCloseOthers&&e.removeClass("open");b.clearTimeout(n);f.addClass("open");f.trigger(a.Event("show.bs.dropdown"))});f.find(".dropdown-submenu").each(function(){var c=a(this),e;c.hover(function(){b.clearTimeout(e);c.children(".dropdown-menu").show();c.siblings().children(".dropdown-menu").hide()},function(){var a=c.children(".dropdown-menu");e=b.setTimeout(function(){a.hide()},
l.delay)})})})};a(document).ready(function(){a('[data-hover="dropdown"]').dropdownHover()})}})(jQuery,this);!function(a,b){"function"==typeof define?define(b):"undefined"!=typeof module&&module.exports?module.exports.browser=b():this[a]=b()}("bowser",function(){var a=navigator.userAgent,b=/(msie|trident)/i.test(a),c=/chrome|crios/i.test(a),e=/phantom/i.test(a),m=/safari/i.test(a)&&!c&&!e,h=/iphone/i.test(a),f=/ipad/i.test(a),k=/touchpad/i.test(a),l=/android/i.test(a),n=/opera/i.test(a)||/opr/i.test(a),F=/firefox/i.test(a),x=/gecko\//i.test(a),B=/seamonkey\//i.test(a),C=/version\/(\d+(\.\d+)?)/i,Q=/firefox\/(\d+(\.\d+)?)/i,
D,a=b?{name:"Internet Explorer",msie:!0,version:a.match(/(msie |rv:)(\d+(\.\d+)?)/i)[2]}:n?{name:"Opera",opera:!0,version:a.match(C)?a.match(C)[1]:a.match(/opr\/(\d+(\.\d+)?)/i)[1]}:c?{name:"Chrome",webkit:!0,chrome:!0,version:a.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i)[1]}:e?{name:"PhantomJS",webkit:!0,phantom:!0,version:a.match(/phantomjs\/(\d+(\.\d+)+)/i)[1]}:k?{name:"TouchPad",webkit:!0,touchpad:!0,version:a.match(/touchpad\/(\d+(\.\d+)?)/i)[1]}:h||f?(D={name:h?"iPhone":"iPad",webkit:!0,mobile:!0,
ios:!0,iphone:h,ipad:f},C.test(a)&&(D.version=a.match(C)[1]),D):l?{name:"Android",webkit:!0,android:!0,mobile:!0,version:(a.match(C)||a.match(Q))[1]}:m?{name:"Safari",webkit:!0,safari:!0,version:a.match(C)[1]}:x?(D={name:"Gecko",gecko:!0,mozilla:!0,version:a.match(Q)[1]},F&&(D.name="Firefox",D.firefox=!0),D):B?{name:"SeaMonkey",seamonkey:!0,version:a.match(/seamonkey\/(\d+(\.\d+)?)/i)[1]}:{};return a.msie&&8<=a.version||a.chrome&&10<=a.version||a.firefox&&4<=a.version||a.safari&&5<=a.version||a.opera&&
10<=a.version?a.a=!0:a.msie&&8>a.version||a.chrome&&10>a.version||a.firefox&&4>a.version||a.safari&&5>a.version||a.opera&&10>a.version?a.c=!0:a.x=!0,a});(function(){var a,b,c,e,m,h,f,k,l;a=window.device;window.device={};c=window.document.documentElement;l=window.navigator.userAgent.toLowerCase();device.ios=function(){return device.iphone()||device.ipod()||device.ipad()};device.iphone=function(){return e("iphone")};device.ipod=function(){return e("ipod")};device.ipad=function(){return e("ipad")};device.android=function(){return e("android")};device.androidPhone=function(){return device.android()&&e("mobile")};device.androidTablet=function(){return device.android()&&
!e("mobile")};device.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")};device.blackberryPhone=function(){return device.blackberry()&&!e("tablet")};device.blackberryTablet=function(){return device.blackberry()&&e("tablet")};device.windows=function(){return e("windows")};device.windowsPhone=function(){return device.windows()&&e("phone")};device.windowsTablet=function(){return device.windows()&&e("touch")};device.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")};device.fxosPhone=
function(){return device.fxos()&&e("mobile")};device.fxosTablet=function(){return device.fxos()&&e("tablet")};device.meego=function(){return e("meego")};device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego()};device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()};device.portrait=function(){return 90!==
Math.abs(window.orientation)};device.landscape=function(){return 90===Math.abs(window.orientation)};device.noConflict=function(){return window.device=a,this};e=function(a){return-1!==l.indexOf(a)};h=function(a){var b;return b=RegExp(a,"i"),c.className.match(b)};b=function(a){return h(a)?void 0:c.className+=" "+a};k=function(a){return h(a)?c.className=c.className.replace(a,""):void 0};device.ios()?device.ipad()?b("ios ipad tablet"):device.iphone()?b("ios iphone mobile"):device.ipod()&&b("ios ipod mobile"):
device.android()?device.androidTablet()?b("android tablet"):b("android mobile"):device.blackberry()?device.blackberryTablet()?b("blackberry tablet"):b("blackberry mobile"):device.windows()?device.windowsTablet()?b("windows tablet"):device.windowsPhone()?b("windows mobile"):b("desktop"):device.fxos()?device.fxosTablet()?b("fxos tablet"):b("fxos mobile"):device.meego()?b("meego mobile"):b("desktop");m=function(){return device.landscape()?(k("portrait"),b("landscape")):(k("landscape"),b("portrait"))};
f="onorientationchange"in window?"orientationchange":"resize";window.addEventListener?window.addEventListener(f,m,!1):window.attachEvent?window.attachEvent(f,m):window[f]=m;m()}).call(this);(function(a){var b=a(window),c=b.height();b.resize(function(){c=b.height()});a.fn.parallax=function(e,m,h){function f(){var f=b.scrollTop();k.each(function(){var b=a(this),B=b.offset().top,b=l(b);B+b<f||B>f+c||k.css("backgroundPosition",e+" "+Math.round((n-f)*m)+"px")})}var k=a(this),l,n;k.each(function(){n=k.offset().top});l=h?function(a){return a.outerHeight(!0)}:function(a){return a.height()};if(1>arguments.length||null===e)e="50%";if(2>arguments.length||null===m)m=0.1;if(3>arguments.length||null===
h)h=!0;b.bind("scroll",f).resize(f);f()}})(jQuery);(function(a,b,c){function e(a){var b={},e=/^jQuery\d+$/;c.each(a.attributes,function(a,c){c.specified&&!e.test(c.name)&&(b[c.name]=c.value)});return b}function m(a,b){var e=c(this);if(this.value==e.attr("placeholder")&&e.hasClass("placeholder"))if(e.data("placeholder-password")){e=e.hide().next().show().attr("id",e.removeAttr("id").data("placeholder-id"));if(!0===a)return e[0].value=b;e.focus()}else this.value="",e.removeClass("placeholder"),this==f()&&this.select()}function h(){var a,b=c(this),f=
this.id;if(""==this.value){if("password"==this.type){if(!b.data("placeholder-textinput")){try{a=b.clone().attr({type:"text"})}catch(k){a=c("<input>").attr(c.extend(e(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":b,"placeholder-id":f}).bind("focus.placeholder",m);b.data({"placeholder-textinput":a,"placeholder-id":f}).before(a)}b=b.removeAttr("id").hide().prev().attr("id",f).show()}b.addClass("placeholder");b[0].value=b.attr("placeholder")}else b.removeClass("placeholder")}
function f(){try{return b.activeElement}catch(a){}}var k="placeholder"in b.createElement("input"),l="placeholder"in b.createElement("textarea"),n=c.fn,F=c.valHooks,x=c.propHooks;k&&l?(n=n.placeholder=function(){return this},n.input=n.textarea=!0):(n=n.placeholder=function(){this.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":m,"blur.placeholder":h}).data("placeholder-enabled",!0).trigger("blur.placeholder");return this},n.input=k,n.textarea=l,n={get:function(a){var b=
c(a),e=b.data("placeholder-password");return e?e[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var e=c(a),k=e.data("placeholder-password");if(k)return k[0].value=b;if(!e.data("placeholder-enabled"))return a.value=b;""==b?(a.value=b,a!=f()&&h.call(a)):e.hasClass("placeholder")?m.call(a,!0,b)||(a.value=b):a.value=b;return e}},k||(F.input=n,x.value=n),l||(F.textarea=n,x.value=n),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=
c(".placeholder",this).each(m);setTimeout(function(){a.each(h)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);(function(a){"function"===typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a(jQuery)})(function(a){function b(b){!b||void 0!==b.allowPageScroll||void 0===b.swipe&&void 0===b.swipeStatus||(b.allowPageScroll=n);void 0!==b.click&&void 0===b.tap&&(b.tap=b.click);b||(b={});b=a.extend({},a.fn.swipe.defaults,b);return this.each(function(){var d=a(this),e=d.data(t);e||(e=new c(this,b),d.data(t,e))})}function c(b,d){function c(E){if(!0!==g.data(t+"_intouch")&&!(0<a(E.target).closest(d.excludedElements,
g).length)){var b=E.originalEvent?E.originalEvent:E,da,y=G?b.touches[0]:b;p=W;G?q=b.touches.length:E.preventDefault();w=0;K=z=null;S=T=u=0;I=1;L=0;E=[];for(var k=0;5>=k;k++)E.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0});A=E;E={};E[e]=ea(e);E[m]=ea(m);E[h]=ea(h);E[f]=ea(f);fa=E;ga=$=0;if(!G||q===d.fingers||d.fingers===M||aa()){if(na(0,y),ha=U(),2==q&&(na(1,b.touches[1]),T=S=oa(A[0].start,A[1].start)),d.swipeStatus||d.pinchStatus)da=J(b,p)}else da=!1;if(!1===da)return p=r,J(b,p),da;ia(!0);return null}}
function P(b){var s,c,g,y=b.originalEvent?b.originalEvent:b;if(p!==v&&p!==r&&!va()){var t,H=wa(G?y.touches[0]:y);ba=U();G&&(q=y.touches.length);p=N;2==q&&(0==T?(na(1,y.touches[1]),T=S=oa(A[0].start,A[1].start)):(wa(y.touches[1]),S=oa(A[0].end,A[1].end),K=1>I?l:k),I=(S/T*1).toFixed(2),L=Math.abs(T-S));if(q===d.fingers||d.fingers===M||!G||aa()){s=H.start;c=H.end;s=Math.atan2(c.y-s.y,s.x-c.x);s=Math.round(180*s/Math.PI);0>s&&(s=360-Math.abs(s));s=z=45>=s&&0<=s?e:360>=s&&315<=s?e:135<=s&&225>=s?m:45<
s&&135>s?f:h;if(d.allowPageScroll===n||aa())b.preventDefault();else switch(c=d.allowPageScroll===F,s){case e:(d.swipeLeft&&c||!c&&d.allowPageScroll!=R)&&b.preventDefault();break;case m:(d.swipeRight&&c||!c&&d.allowPageScroll!=R)&&b.preventDefault();break;case h:(d.swipeUp&&c||!c&&d.allowPageScroll!=X)&&b.preventDefault();break;case f:(d.swipeDown&&c||!c&&d.allowPageScroll!=X)&&b.preventDefault()}b=H.start;s=H.end;w=Math.round(Math.sqrt(Math.pow(s.x-b.x,2)+Math.pow(s.y-b.y,2)));u=ba-ha;b=z;s=w;s=Math.max(s,
xa(b));fa[b].distance=s;if(d.swipeStatus||d.pinchStatus)t=J(y,p);if(!d.triggerOnTouchEnd||d.triggerOnTouchLeave){b=!0;if(d.triggerOnTouchLeave){g=a(this);var P=g.offset();b=P.left;s=P.left+g.outerWidth();c=P.top;g=P.top+g.outerHeight();H=H.end;b=H.x>b&&H.x<s&&H.y>c&&H.y<g}!d.triggerOnTouchEnd&&b?p=pa(N):d.triggerOnTouchLeave&&!b&&(p=pa(v));p!=r&&p!=v||J(y,p)}}else p=r,J(y,p);!1===t&&(p=r,J(y,p))}}function qa(a){var b=a.originalEvent;if(G&&0<b.touches.length)return $=U(),ga=event.touches.length+1,
!0;va()&&(q=ga);a.preventDefault();ba=U();u=ba-ha;ra()?(p=r,J(b,p)):d.triggerOnTouchEnd||!1==d.triggerOnTouchEnd&&p===N?(p=v,J(b,p)):!d.triggerOnTouchEnd&&d.tap?(p=v,Y(b,p,C)):p===N&&(p=r,J(b,p));ia(!1);return null}function O(){S=T=ha=ba=q=0;I=1;ga=$=0;ia(!1)}function sa(a){a=a.originalEvent;d.triggerOnTouchLeave&&(p=pa(v),J(a,p))}function ya(){g.unbind(ja,c);g.unbind(ka,O);g.unbind(ta,P);g.unbind(ua,qa);Z&&g.unbind(Z,sa);ia(!1)}function pa(a){var b=a,c=d.maxTimeThreshold?u>=d.maxTimeThreshold?!1:
!0:!0,e=za(),y=ra();!c||y?b=r:!e||a!=N||d.triggerOnTouchEnd&&!d.triggerOnTouchLeave?!e&&a==v&&d.triggerOnTouchLeave&&(b=r):b=v;return b}function J(a,b){var c=void 0;Aa()&&Ba()||Ba()?c=Y(a,b,x):(Ca()&&aa()||aa())&&!1!==c&&(c=Y(a,b,B));Da()&&d.doubleTap&&!1!==c?c=Y(a,b,Q):u>d.longTapThreshold&&w<ca&&d.longTap&&!1!==c?c=Y(a,b,D):!(1!==q&&G||!isNaN(w)&&0!==w)&&d.tap&&!1!==c&&(c=Y(a,b,C));b===r&&O(a);b===v&&(G?0==a.touches.length&&O(a):O(a));return c}function Y(b,c,y){var t=void 0;if(y==x){g.trigger("swipeStatus",
[c,z||null,w||0,u||0,q]);if(d.swipeStatus&&(t=d.swipeStatus.call(g,b,c,z||null,w||0,u||0,q),!1===t))return!1;if(c==v&&Aa()){g.trigger("swipe",[z,w,u,q]);if(d.swipe&&(t=d.swipe.call(g,b,z,w,u,q),!1===t))return!1;switch(z){case e:g.trigger("swipeLeft",[z,w,u,q]);d.swipeLeft&&(t=d.swipeLeft.call(g,b,z,w,u,q));break;case m:g.trigger("swipeRight",[z,w,u,q]);d.swipeRight&&(t=d.swipeRight.call(g,b,z,w,u,q));break;case h:g.trigger("swipeUp",[z,w,u,q]);d.swipeUp&&(t=d.swipeUp.call(g,b,z,w,u,q));break;case f:g.trigger("swipeDown",
[z,w,u,q]),d.swipeDown&&(t=d.swipeDown.call(g,b,z,w,u,q))}}}if(y==B){g.trigger("pinchStatus",[c,K||null,L||0,u||0,q,I]);if(d.pinchStatus&&(t=d.pinchStatus.call(g,b,c,K||null,L||0,u||0,q,I),!1===t))return!1;if(c==v&&Ca())switch(K){case k:g.trigger("pinchIn",[K||null,L||0,u||0,q,I]);d.pinchIn&&(t=d.pinchIn.call(g,b,K||null,L||0,u||0,q,I));break;case l:g.trigger("pinchOut",[K||null,L||0,u||0,q,I]),d.pinchOut&&(t=d.pinchOut.call(g,b,K||null,L||0,u||0,q,I))}}if(y==C){if(c===r||c===v)clearTimeout(la),d.doubleTap&&
!Da()?(V=U(),la=setTimeout(a.proxy(function(){V=null;g.trigger("tap",[b.target]);d.tap&&(t=d.tap.call(g,b,b.target))},this),d.doubleTapThreshold)):(V=null,g.trigger("tap",[b.target]),d.tap&&(t=d.tap.call(g,b,b.target)))}else if(y==Q){if(c===r||c===v)clearTimeout(la),V=null,g.trigger("doubletap",[b.target]),d.doubleTap&&(t=d.doubleTap.call(g,b,b.target))}else y!=D||c!==r&&c!==v||(clearTimeout(la),V=null,g.trigger("longtap",[b.target]),d.longTap&&(t=d.longTap.call(g,b,b.target)));return t}function za(){var a=
!0;null!==d.threshold&&(a=w>=d.threshold);return a}function ra(){var a=!1;null!==d.cancelThreshold&&null!==z&&(a=xa(z)-w>=d.cancelThreshold);return a}function Ca(){var a=q===d.fingers||d.fingers===M||!G,b=0!==A[0].end.x,c;c=null!==d.pinchThreshold?L>=d.pinchThreshold:!0;return a&&b&&c}function aa(){return!!(d.pinchStatus||d.pinchIn||d.pinchOut)}function Aa(){var a=d.maxTimeThreshold?u>=d.maxTimeThreshold?!1:!0:!0,b=za(),c=q===d.fingers||d.fingers===M||!G,e=0!==A[0].end.x;return!ra()&&e&&c&&b&&a}function Ba(){return!!(d.swipe||
d.swipeStatus||d.swipeLeft||d.swipeRight||d.swipeUp||d.swipeDown)}function Da(){if(null==V)return!1;var a=U();return!!d.doubleTap&&a-V<=d.doubleTapThreshold}function va(){var a=!1;$&&U()-$<=d.fingerReleaseThreshold&&(a=!0);return a}function ia(a){!0===a?(g.bind(ta,P),g.bind(ua,qa),Z&&g.bind(Z,sa)):(g.unbind(ta,P,!1),g.unbind(ua,qa,!1),Z&&g.unbind(Z,sa,!1));g.data(t+"_intouch",!0===a)}function na(a,b){A[a].identifier=void 0!==b.identifier?b.identifier:0;A[a].start.x=A[a].end.x=b.pageX||b.clientX;A[a].start.y=
A[a].end.y=b.pageY||b.clientY;return A[a]}function wa(a){var b=void 0!==a.identifier?a.identifier:0;a:{for(var c=0;c<A.length;c++)if(A[c].identifier==b){b=A[c];break a}b=void 0}b.end.x=a.pageX||a.clientX;b.end.y=a.pageY||a.clientY;return b}function xa(a){if(fa[a])return fa[a].distance}function ea(a){return{direction:a,distance:0}}function oa(a,b){var c=Math.abs(a.x-b.x),d=Math.abs(a.y-b.y);return Math.round(Math.sqrt(c*c+d*d))}function U(){return(new Date).getTime()}var ma=G||!d.fallbackToMouseEvents,
ja=ma?"touchstart":"mousedown",ta=ma?"touchmove":"mousemove",ua=ma?"touchend":"mouseup",Z=ma?null:"mouseleave",ka="touchcancel",w=0,z=null,u=0,T=0,S=0,I=1,L=0,K=0,fa=null,g=a(b),p="start",q=0,A=null,ha=0,ba=0,$=0,ga=0,V=0,la=null;try{g.bind(ja,c),g.bind(ka,O)}catch(Ea){a.error("events not supported "+ja+","+ka+" on jQuery.swipe")}this.enable=function(){g.bind(ja,c);g.bind(ka,O);return g};this.disable=function(){ya();return g};this.destroy=function(){ya();g.data(t,null);return g};this.option=function(b,
c){if(void 0!==d[b]){if(void 0===c)return d[b];d[b]=c}else a.error("Option "+b+" does not exist on jQuery.swipe.options");return null}}var e="left",m="right",h="up",f="down",k="in",l="out",n="none",F="auto",x="swipe",B="pinch",C="tap",Q="doubletap",D="longtap",R="horizontal",X="vertical",M="all",ca=10,W="start",N="move",v="end",r="cancel",G="ontouchstart"in window,t="TouchSwipe";a.fn.swipe=function(c){var d=a(this),e=d.data(t);if(e&&"string"===typeof c){if(e[c])return e[c].apply(this,Array.prototype.slice.call(arguments,
1));a.error("Method "+c+" does not exist on jQuery.swipe")}else if(!(e||"object"!==typeof c&&c))return b.apply(this,arguments);return d};a.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:!0,
triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};a.fn.swipe.phases={PHASE_START:W,PHASE_MOVE:N,PHASE_END:v,PHASE_CANCEL:r};a.fn.swipe.directions={LEFT:e,RIGHT:m,UP:h,DOWN:f,IN:k,OUT:l};a.fn.swipe.pageScroll={NONE:n,HORIZONTAL:R,VERTICAL:X,AUTO:F};a.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:M}});(function(a){function b(){W(!0)}var c={};a.respond=c;c.update=function(){};var e=[],m=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),h=function(a,b){var c=m();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},f=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};c.ajax=h;c.queue=e;c.unsupportedmq=
f;c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
other:/\([^\)]*\)/g};c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches;if(!c.mediaQueriesSupported){var k=a.document,l=k.documentElement,n=[],F=[],x=[],B={},C=k.getElementsByTagName("head")[0]||l,Q=k.getElementsByTagName("base")[0],D=C.getElementsByTagName("link"),R,X,M,ca=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;b.style.cssText="position:absolute;font-size:1em;width:1em";c||(c=f=k.createElement("body"),
c.style.background="none");l.style.fontSize="100%";c.style.fontSize="100%";c.appendChild(b);f&&l.insertBefore(c,l.firstChild);a=b.offsetWidth;f?l.removeChild(c):c.removeChild(b);l.style.fontSize=d;e&&(c.style.fontSize=e);return a=M=parseFloat(a)},W=function(b){var c=l.clientWidth,e="CSS1Compat"===k.compatMode&&c||k.body.clientWidth||c,c={},d=D[D.length-1],f=(new Date).getTime();if(b&&R&&30>f-R)a.clearTimeout(X),X=a.setTimeout(W,30);else{R=f;for(var h in n)if(n.hasOwnProperty(h)){b=n[h];var f=b.minw,
m=b.maxw,O=null===f,v=null===m;f&&(f=parseFloat(f)*(-1<f.indexOf("em")?M||ca():1));m&&(m=parseFloat(m)*(-1<m.indexOf("em")?M||ca():1));b.hasquery&&(O&&v||!(O||e>=f)||!(v||e<=m))||(c[b.media]||(c[b.media]=[]),c[b.media].push(F[b.rules]))}for(var r in x)x.hasOwnProperty(r)&&x[r]&&x[r].parentNode===C&&C.removeChild(x[r]);x.length=0;for(var B in c)c.hasOwnProperty(B)&&(h=k.createElement("style"),r=c[B].join("\n"),h.type="text/css",h.media=B,C.insertBefore(h,d.nextSibling),h.styleSheet?h.styleSheet.cssText=
r:h.appendChild(k.createTextNode(r)),x.push(h))}},N=function(a,b,e){var d=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),h=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var k=!h&&e;b.length&&(b+="/");k&&(h=1);for(var m=0;m<h;m++){var l,r,v;k?(l=e,F.push(a.replace(c.regex.urls,"$1"+b+"$2$3"))):(l=d[m].match(c.regex.findStyles)&&RegExp.$1,F.push(RegExp.$2&&RegExp.$2.replace(c.regex.urls,"$1"+b+"$2$3")));r=l.split(",");v=r.length;for(var x=0;x<v;x++)l=r[x],f(l)||
n.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:F.length-1,hasquery:-1<l.indexOf("("),minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}W()},v=function(){if(e.length){var b=e.shift();h(b.href,function(c){N(c,b.href,b.media);B[b.href]=!0;a.setTimeout(function(){v()},0)})}},r=function(){for(var b=0;b<D.length;b++){var c=D[b],f=c.href,d=c.media,h=c.rel&&"stylesheet"===c.rel.toLowerCase();if(f&&
h&&!B[f])if(c.styleSheet&&c.styleSheet.rawCssText)N(c.styleSheet.rawCssText,f,d),B[f]=!0;else if(!/^([a-zA-Z:]*\/\/)/.test(f)&&!Q||f.replace(RegExp.$1,"").split("/")[0]===a.location.host)"//"===f.substring(0,2)&&(f=a.location.protocol+f),e.push({href:f,media:d})}v()};r();c.update=r;c.getEmValue=ca;a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}})(this);var aux_visible=!1,scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1E3,fadeduration:[500,100]},controlHTML:'<i class="fa fa-angle-up"></i>',controlattrs:{offsetx:15,offsety:15},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var a=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto),a="string"==typeof a&&1==jQuery("#"+a).length?jQuery("#"+a).offset().top:0;this.$body.animate({scrollTop:a},
this.setting.scrollduration)},keepfixed:function(){var a=jQuery(window),b=a.scrollLeft()+a.width()-this.$control.width()-this.controlattrs.offsetx,a=a.scrollTop()+a.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:b+"px",top:a+"px"})},togglecontrol:function(){var a=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed();this.state.shouldvisible=a>=this.setting.startline?!0:!1;this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:0.5},
this.setting.fadeduration[0]),aux_visible=this.state.isvisible=!0):!1==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),aux_visible=this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(a){var b=scrolltotop,c=document.all;b.cssfixedsupport=!c||c&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest;b.$body=window.opera?"CSS1Compat"==document.compatMode?a("html"):a("body"):a("html,body");b.$control=a('<div id="topcontrol">'+
b.controlHTML+"</div>").css({position:b.cssfixedsupport?"fixed":"absolute",bottom:b.controlattrs.offsety,right:b.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"go top"}).click(function(){b.scrollup();return!1}).appendTo("body");document.all&&!window.XMLHttpRequest&&""!=b.$control.text()&&b.$control.css({width:b.$control.width()});b.togglecontrol();a('a[href="'+b.anchorkeyword+'"]').click(function(){b.scrollup();return!1});a(window).bind("scroll resize",function(a){b.togglecontrol()});
a("#topcontrol").hover(function(){aux_visible&&a(this).animate({opacity:1},500)},function(){aux_visible&&a(this).animate({opacity:0.5},500)})})}};scrolltotop.init();

