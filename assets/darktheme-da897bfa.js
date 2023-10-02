(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}})();(()=>{const x=document.querySelector(".js-menu-container"),C=document.querySelector(".js-open-menu"),u=document.querySelector(".js-close-menu"),m=()=>{const e=C.getAttribute("aria-expanded")==="true"||!1;C.setAttribute("aria-expanded",!e),x.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};C.addEventListener("click",m),u.addEventListener("click",m),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(x.classList.remove("is-open"),C.setAttribute("aria-expanded",!1))})})();const $=document.querySelector(".dropbtn");$.addEventListener("click",K);function K(x){x.currentTarget.nodeName==="BUTTON"&&document.getElementById("myDropdown").classList.toggle("show")}window.onclick=function(x){if(!x.target.matches(".dropbtn")&!x.target.matches(".menu-icon-drop")&!x.target.matches(".dropbtn-text")){const C=document.getElementById("myDropdown");C.classList.contains("show")&&C.classList.remove("show")}};window.addEventListener("scroll",function(){let x=document.querySelector(".upbtn");window.scrollY>100?x.style.display="block":x.style.display="none"});document.querySelector(".upbtn").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Z(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var R={},J={get exports(){return R},set exports(x){R=x}};(function(x,C){(function(m,e){x.exports=e()})(window,function(){return function(u){var m={};function e(n){if(m[n])return m[n].exports;var i=m[n]={i:n,l:!1,exports:{}};return u[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=u,e.c=m,e.d=function(n,i,f){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:f})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(i&1&&(n=e(n)),i&8||i&4&&typeof n=="object"&&n&&n.__esModule)return n;var f=Object.create(null);if(e.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:n}),i&2&&typeof n!="string")for(var p in n)e.d(f,p,function(a){return n[a]}.bind(null,p));return f},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="dist",e(e.s=10)}([function(u,m,e){function n(i,f){var p=Object.prototype.hasOwnProperty,a,c,h,_;for(h=1,_=arguments.length;h<_;h+=1){a=arguments[h];for(c in a)p.call(a,c)&&(i[c]=a[c])}return i}u.exports=n},function(u,m,e){function n(i){return i===void 0}u.exports=n},function(u,m,e){function n(i){return i instanceof Array}u.exports=n},function(u,m,e){var n=e(2),i=e(17),f=e(6);function p(a,c,h){n(a)?i(a,c,h):f(a,c,h)}u.exports=p},function(u,m,e){function n(i){return typeof i=="string"||i instanceof String}u.exports=n},function(u,m,e){function n(i){return i instanceof Function}u.exports=n},function(u,m,e){function n(i,f,p){var a;p=p||null;for(a in i)if(i.hasOwnProperty(a)&&f.call(p,i[a],a,i)===!1)break}u.exports=n},function(u,m,e){var n=e(18),i=e(0);function f(p,a){var c;return a||(a=p,p=null),c=a.init||function(){},p&&n(c,p),a.hasOwnProperty("static")&&(i(c,a.static),delete a.static),i(c.prototype,a),c}u.exports=f},function(u,m,e){var n=e(2);function i(f,p,a){var c,h;if(a=a||0,!n(p))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(p,f,a);for(h=p.length,c=a;a>=0&&c<h;c+=1)if(p[c]===f)return c;return-1}u.exports=i},function(u,m,e){var n=e(29),i=e(30),f=e(5),p={capitalizeFirstLetter:function(a){return a.substring(0,1).toUpperCase()+a.substring(1,a.length)},isContained:function(a,c){return c?a===c?!0:c.contains(a):!1},createElementByTemplate:function(a,c){var h=document.createElement("div"),_=f(a)?a(c):n(a,c);return h.innerHTML=_,h.firstChild},bind:function(a,c){var h=Array.prototype.slice,_;return a.bind?a.bind.apply(a,h.call(arguments,1)):(_=h.call(arguments,2),function(){return a.apply(c,_.length?_.concat(h.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};u.exports=p},function(u,m,e){e(11),u.exports=e(12)},function(u,m,e){},function(u,m,e){var n=e(13),i=e(7),f=e(0),p=e(1),a=e(20),c=e(9),h={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},_=i({init:function(s,t){this._options=f({},h,t),this._currentPage=0,this._view=new a(s,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(s){this._currentPage=s||this._options.page},_getLastPage:function(){var s=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return s||1},_getPageIndex:function(s){var t,r;return this._options.centerAlign?(t=Math.floor(this._options.visiblePages/2),r=s-t,r=Math.max(r,1),r=Math.min(r,this._getLastPage()-this._options.visiblePages+1),r):Math.ceil(s/this._options.visiblePages)},_getRelativePage:function(s){var t=s==="prev",r=this.getCurrentPage();return t?r-1:r+1},_getMorePageIndex:function(s){var t=this._getPageIndex(this.getCurrentPage()),r=this._options.visiblePages,o=s==="prev",d;return this._options.centerAlign?d=o?t-1:t+r:d=o?(t-1)*r:t*r+1,d},_convertToValidPage:function(s){var t=this._getLastPage();return s=Math.max(s,1),s=Math.min(s,t),s},_paginate:function(s){var t=this._makeViewData(s||this._options.page);this._setCurrentPage(s),this._view.update(t)},_makeViewData:function(s){var t={},r=this._getLastPage(),o=this._getPageIndex(s),d=this._getPageIndex(r),b=this._getEdge(s);return t.leftPageNumber=b.left,t.rightPageNumber=b.right,t.prevMore=o>1,t.nextMore=o<d,t.page=s,t.currentPageIndex=s,t.lastPage=r,t.lastPageListIndex=r,t},_getEdge:function(s){var t,r,o,d=this._getLastPage(),b=this._options.visiblePages,T=this._getPageIndex(s);return this._options.centerAlign?(o=Math.floor(b/2),t=Math.max(s-o,1),r=t+b-1,r>d&&(t=Math.max(d-b+1,1),r=d)):(t=(T-1)*b+1,r=T*b,r=Math.min(r,d)),{left:t,right:r}},_onClickHandler:function(s,t){switch(s){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(s){p(s)&&(s=this._options.totalItems),this._options.totalItems=s,this._paginate(1)},movePageTo:function(s){s=this._convertToValidPage(s),this.invoke("beforeMove",{page:s})&&(this._paginate(s),this.fire("afterMove",{page:s}))},setTotalItems:function(s){this._options.totalItems=s},setItemsPerPage:function(s){this._options.itemsPerPage=s},getCurrentPage:function(){return this._currentPage||this._options.page}});n.mixin(_),u.exports=_},function(u,m,e){var n=e(0),i=e(14),f=e(4),p=e(16),a=e(2),c=e(5),h=e(3),_=/\s+/g;function s(){this.events=null,this.contexts=null}s.mixin=function(t){n(t.prototype,s.prototype)},s.prototype._getHandlerItem=function(t,r){var o={handler:t};return r&&(o.context=r),o},s.prototype._safeEvent=function(t){var r=this.events,o;return r||(r=this.events={}),t&&(o=r[t],o||(o=[],r[t]=o),r=o),r},s.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},s.prototype._indexOfContext=function(t){for(var r=this._safeContext(),o=0;r[o];){if(t===r[o][0])return o;o+=1}return-1},s.prototype._memorizeContext=function(t){var r,o;i(t)&&(r=this._safeContext(),o=this._indexOfContext(t),o>-1?r[o][1]+=1:r.push([t,1]))},s.prototype._forgetContext=function(t){var r,o;i(t)&&(r=this._safeContext(),o=this._indexOfContext(t),o>-1&&(r[o][1]-=1,r[o][1]<=0&&r.splice(o,1)))},s.prototype._bindEvent=function(t,r,o){var d=this._safeEvent(t);this._memorizeContext(o),d.push(this._getHandlerItem(r,o))},s.prototype.on=function(t,r,o){var d=this;f(t)?(t=t.split(_),h(t,function(b){d._bindEvent(b,r,o)})):p(t)&&(o=r,h(t,function(b,T){d.on(T,b,o)}))},s.prototype.once=function(t,r,o){var d=this;if(p(t)){o=r,h(t,function(T,l){d.once(l,T,o)});return}function b(){r.apply(o,arguments),d.off(t,b,o)}this.on(t,b,o)},s.prototype._spliceMatches=function(t,r){var o=0,d;if(a(t))for(d=t.length;o<d;o+=1)r(t[o])===!0&&(t.splice(o,1),d-=1,o-=1)},s.prototype._matchHandler=function(t){var r=this;return function(o){var d=t===o.handler;return d&&r._forgetContext(o.context),d}},s.prototype._matchContext=function(t){var r=this;return function(o){var d=t===o.context;return d&&r._forgetContext(o.context),d}},s.prototype._matchHandlerAndContext=function(t,r){var o=this;return function(d){var b=t===d.handler,T=r===d.context,l=b&&T;return l&&o._forgetContext(d.context),l}},s.prototype._offByEventName=function(t,r){var o=this,d=c(r),b=o._matchHandler(r);t=t.split(_),h(t,function(T){var l=o._safeEvent(T);d?o._spliceMatches(l,b):(h(l,function(v){o._forgetContext(v.context)}),o.events[T]=[])})},s.prototype._offByHandler=function(t){var r=this,o=this._matchHandler(t);h(this._safeEvent(),function(d){r._spliceMatches(d,o)})},s.prototype._offByObject=function(t,r){var o=this,d;this._indexOfContext(t)<0?h(t,function(b,T){o.off(T,b)}):f(r)?(d=this._matchContext(t),o._spliceMatches(this._safeEvent(r),d)):c(r)?(d=this._matchHandlerAndContext(r,t),h(this._safeEvent(),function(b){o._spliceMatches(b,d)})):(d=this._matchContext(t),h(this._safeEvent(),function(b){o._spliceMatches(b,d)}))},s.prototype.off=function(t,r){f(t)?this._offByEventName(t,r):arguments.length?c(t)?this._offByHandler(t):p(t)&&this._offByObject(t,r):(this.events={},this.contexts=[])},s.prototype.fire=function(t){this.invoke.apply(this,arguments)},s.prototype.invoke=function(t){var r,o,d,b;if(!this.hasListener(t))return!0;for(r=this._safeEvent(t),o=Array.prototype.slice.call(arguments,1),d=0;r[d];){if(b=r[d],b.handler.apply(b.context,o)===!1)return!1;d+=1}return!0},s.prototype.hasListener=function(t){return this.getListenerLength(t)>0},s.prototype.getListenerLength=function(t){var r=this._safeEvent(t);return r.length},u.exports=s},function(u,m,e){var n=e(1),i=e(15);function f(p){return!n(p)&&!i(p)}u.exports=f},function(u,m,e){function n(i){return i===null}u.exports=n},function(u,m,e){function n(i){return i===Object(i)}u.exports=n},function(u,m,e){function n(i,f,p){var a=0,c=i.length;for(p=p||null;a<c&&f.call(p,i[a],a,i)!==!1;a+=1);}u.exports=n},function(u,m,e){var n=e(19);function i(f,p){var a=n(p.prototype);a.constructor=f,f.prototype=a}u.exports=i},function(u,m,e){function n(i){function f(){}return f.prototype=i,new f}u.exports=n},function(u,m,e){var n=e(3),i=e(7),f=e(21),p=e(22),a=e(24),c=e(25),h=e(0),_=e(4),s=e(28),t=e(9),r={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},o=["first","prev","next","last"],d=["prev","next"],b="The container element is invalid.",T=i({init:function(l,v,L){this._containerElement=null,this._firstItemClassName=v.firstItemClassName,this._lastItemClassName=v.lastItemClassName,this._template=h({},r,v.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(l),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(L)},_setRootElement:function(l){if(_(l)?l=document.getElementById(l)||document.querySelector(l):l.jquery&&(l=l[0]),!s(l))throw new Error(b);this._containerElement=l},_setMoveButtons:function(){n(o,function(l){this._buttons[l]=t.createElementByTemplate(this._template.moveButton,{type:l})},this)},_setDisabledMoveButtons:function(){n(o,function(l){var v="disabled"+t.capitalizeFirstLetter(l);this._buttons[v]=t.createElementByTemplate(this._template.disabledMoveButton,{type:l})},this)},_setMoreButtons:function(){n(d,function(l){var v=l+"More";this._buttons[v]=t.createElementByTemplate(this._template.moreButton,{type:l})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(l){var v;l.page>1?v=this._buttons.first:v=this._buttons.disabledFirst,this._getContainerElement().appendChild(v)},_appendPrevButton:function(l){var v;l.currentPageIndex>1?v=this._buttons.prev:v=this._buttons.disabledPrev,this._getContainerElement().appendChild(v)},_appendNextButton:function(l){var v;l.currentPageIndex<l.lastPageListIndex?v=this._buttons.next:v=this._buttons.disabledNext,this._getContainerElement().appendChild(v)},_appendLastButton:function(l){var v;l.page<l.lastPage?v=this._buttons.last:v=this._buttons.disabledLast,this._getContainerElement().appendChild(v)},_appendPrevMoreButton:function(l){var v;l.prevMore&&(v=this._buttons.prevMore,c(v,this._firstItemClassName),this._getContainerElement().appendChild(v))},_appendNextMoreButton:function(l){var v;l.nextMore&&(v=this._buttons.nextMore,c(v,this._lastItemClassName),this._getContainerElement().appendChild(v))},_appendPages:function(l){var v=l.leftPageNumber,L=l.rightPageNumber,O,S;for(S=v;S<=L;S+=1)S===l.page?O=t.createElementByTemplate(this._template.currentPage,{page:S}):(O=t.createElementByTemplate(this._template.page,{page:S}),this._enabledPageElements.push(O)),S===v&&!l.prevMore&&c(O,this._firstItemClassName),S===L&&!l.nextMore&&c(O,this._lastItemClassName),this._getContainerElement().appendChild(O)},_attachClickEvent:function(l){var v=this._getContainerElement();p(v,"click",function(L){var O=f(L),S,k;a(L),k=this._getButtonType(O),k||(S=this._getPageNumber(O)),l(k,S)},this)},_getButtonType:function(l){var v,L=this._buttons;return n(L,function(O,S){return t.isContained(l,O)?(v=S,!1):!0},this),v},_getPageNumber:function(l){var v=this._findPageElement(l),L;return v&&(L=parseInt(v.innerText,10)),L},_findPageElement:function(l){for(var v=0,L=this._enabledPageElements.length,O;v<L;v+=1)if(O=this._enabledPageElements[v],t.isContained(l,O))return O;return null},_empty:function(){this._enabledPageElements=[],n(this._buttons,function(l,v){this._buttons[v]=l.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(l){this._empty(),this._appendFirstButton(l),this._appendPrevButton(l),this._appendPrevMoreButton(l),this._appendPages(l),this._appendNextMoreButton(l),this._appendNextButton(l),this._appendLastButton(l)}});u.exports=T},function(u,m,e){function n(i){return i.target||i.srcElement}u.exports=n},function(u,m,e){var n=e(4),i=e(3),f=e(23);function p(h,_,s,t){if(n(_)){i(_.split(/\s+/g),function(r){a(h,r,s,t)});return}i(_,function(r,o){a(h,o,r,s)})}function a(h,_,s,t){function r(o){s.call(t||h,o||window.event)}"addEventListener"in h?h.addEventListener(_,r):"attachEvent"in h&&h.attachEvent("on"+_,r),c(h,_,s,r)}function c(h,_,s,t){var r=f(h,_),o=!1;i(r,function(d){return d.handler===s?(o=!0,!1):!0}),o||r.push({handler:s,wrappedHandler:t})}u.exports=p},function(u,m,e){var n="_feEventKey";function i(f,p){var a=f[n],c;return a||(a=f[n]={}),c=a[p],c||(c=a[p]=[]),c}u.exports=i},function(u,m,e){function n(i){if(i.preventDefault){i.preventDefault();return}i.returnValue=!1}u.exports=n},function(u,m,e){var n=e(3),i=e(8),f=e(26),p=e(27);function a(c){var h=Array.prototype.slice.call(arguments,1),_=c.classList,s=[],t;if(_){n(h,function(r){c.classList.add(r)});return}t=f(c),t&&(h=[].concat(t.split(/\s+/),h)),n(h,function(r){i(r,s)<0&&s.push(r)}),p(c,s)}u.exports=a},function(u,m,e){var n=e(1);function i(f){return!f||!f.className?"":n(f.className.baseVal)?f.className:f.className.baseVal}u.exports=i},function(u,m,e){var n=e(2),i=e(1);function f(p,a){if(a=n(a)?a.join(" "):a,a=a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(p.className.baseVal)){p.className=a;return}p.className.baseVal=a}u.exports=f},function(u,m,e){function n(i){return typeof HTMLElement=="object"?i&&(i instanceof HTMLElement||!!i.nodeType):!!(i&&i.nodeType)}u.exports=n},function(u,m,e){var n=e(8),i=e(3),f=e(2),p=e(4),a=e(0),c=/{{\s?|\s?}}/g,h=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,_=/\[\s?|\s?\]/,s=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,t=/\./,r=/^["']\w+["']$/,o=/"|'/g,d=/^-?\d+\.?\d*$/,b=2,T={if:S,each:k,with:j},l="a".split(/a/).length===3,v=function(){return l?function(g,y){return g.split(y)}:function(g,y){var E=[],P=0,M,I;for(y.global||(y=new RegExp(y,"g")),M=y.exec(g);M!==null;)I=M.index,E.push(g.slice(P,I)),P=I+M[0].length,M=y.exec(g);return E.push(g.slice(P)),E}}();function L(g,y){var E,P=y[g];return g==="true"?P=!0:g==="false"?P=!1:r.test(g)?P=g.replace(o,""):h.test(g)?(E=g.split(_),P=L(E[0],y)[L(E[1],y)]):s.test(g)?(E=g.split(t),P=L(E[0],y)[E[1]]):d.test(g)&&(P=parseFloat(g)),P}function O(g,y){var E=[g],P=[],M=0,I=0;return i(y,function(B,N){B.indexOf("if")===0?M+=1:B==="/if"?M-=1:!M&&(B.indexOf("elseif")===0||B==="else")&&(E.push(B==="else"?["true"]:B.split(" ").slice(1)),P.push(y.slice(I,N)),I=N+1)}),P.push(y.slice(I)),{exps:E,sourcesInsideIf:P}}function S(g,y,E){var P=O(g,y),M=!1,I="";return i(P.exps,function(B,N){return M=H(B,E),M&&(I=F(P.sourcesInsideIf[N],E)),!M}),I}function k(g,y,E){var P=H(g,E),M=f(P)?"@index":"@key",I={},B="";return i(P,function(N,A){I[M]=A,I["@this"]=N,a(E,I),B+=F(y.slice(),E)}),B}function j(g,y,E){var P=n("as",g),M=g[P+1],I=H(g.slice(0,P),E),B={};return B[M]=I,F(y,a(E,B))||""}function U(g,y,E){var P=g.splice(y+1,E-y);return P.pop(),P}function G(g,y,E){for(var P=T[g],M=1,I=0,B,N=I+b,A=y[N];M&&p(A);)A.indexOf(g)===0?M+=1:A.indexOf("/"+g)===0&&(M-=1,B=N),N+=b,A=y[N];if(M)throw Error(g+" needs {{/"+g+"}} expression.");return y[I]=P(y[I].split(" ").slice(1),U(y,I,B),E),y}function H(g,y){var E=L(g[0],y);return E instanceof Function?z(E,g.slice(1),y):E}function z(g,y,E){var P=[];return i(y,function(M){P.push(L(M,E))}),g.apply(null,P)}function F(g,y){for(var E=1,P=g[E],M,I,B;p(P);)M=P.split(" "),I=M[0],T[I]?(B=G(I,g.splice(E,g.length-E),y),g=g.concat(B)):g[E]=H(M,y),E+=b,P=g[E];return g.join("")}function X(g,y){return F(v(g,c),y)}u.exports=X},function(u,m,e){var n=e(1),i=e(31),f=7*24*60*60*1e3;function p(c){var h=new Date().getTime();return h-c>f}function a(c,h){var _="https://www.google-analytics.com/collect",s=location.hostname,t="event",r="use",o="TOAST UI "+c+" for "+s+": Statistics",d=window.localStorage.getItem(o);!n(window.tui)&&window.tui.usageStatistics===!1||d&&!p(d)||(window.localStorage.setItem(o,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&i(_,{v:1,t,tid:h,cid:s,dp:s,dh:c,el:c,ec:r})},1e3))}u.exports=a},function(u,m,e){var n=e(6);function i(f,p){var a=document.createElement("img"),c="";return n(p,function(h,_){c+="&"+_+"="+h}),c=c.substring(1),a.src=f+"?"+c,a.style.display="none",document.body.appendChild(a),document.body.removeChild(a),a}u.exports=i}])})})(J);const Y=Z(R);function W(x,C,u){if(C>u){let m=[];for(let e=0;e<C;e+=u)m.push(x.slice(e,e+u));return m}else return[x]}class et{constructor(C,u){this.totalCards=0,this.options=u,this.options.template={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'},this.pagination=new Y(C,this.options),this.chunks=[]}createCardsPerPage(C){return this.totalCards=C.length,this.pagination.reset(this.totalCards),this.chunks=W(C,this.totalCards,this.options.itemsPerPage),this.chunks}changePageByClick(C,u,m){this.pagination.on("afterMove",e=>{const i=e.page-1;m(C[i],u)})}hidePagination(C,u){this.totalCards>C?u.classList.remove("visually-hidden"):u.classList.add("visually-hidden")}get lengthForPart(){return this.options.itemsPerPage}set lengthForPart(C){this.lengthPart=C}}const w=document.getElementById("darkModeToggle"),D=document.body;function Q(x){const C={isDarkMode:x,expirationTime:Date.now()+864e5};localStorage.setItem("darkMode",JSON.stringify(C))}function V(){const x=localStorage.getItem("darkMode");if(x){const C=JSON.parse(x);if(Date.now()<=C.expirationTime)return C.isDarkMode}return!1}w.addEventListener("change",()=>{const x=w.checked;x?D.classList.add("dark-mode"):D.classList.remove("dark-mode"),Q(x)});window.addEventListener("DOMContentLoaded",()=>{const x=V();x!==null&&(w.checked=x,w.checked&&D.classList.add("dark-mode")),w.checked});const q=V();if(q!==null){const x=localStorage.getItem("darkMode");if(x){const C=JSON.parse(x);Date.now()>C.expirationTime&&(w.checked=!1,localStorage.removeItem("darkMode"))}}export{et as P,tt as c};
