!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=117)}([function(t,e){t.exports={HEADER_COLOR:"#1A1B22",HEADER_NOCOLOE:"transparent",ICON_COLOR:"header__mobileico_white-closed",ICON_COLOR_BLACK:"header__mobileico_black-closed",ICON_MOBILE_WHITE_CLOSED:"header__mobileico_white-closed",CARD_BOOKMARK:"M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z",CARD_DELETE:"M12 0H6V2H0V4H18V2H12V0ZM2 6V17C2 18.1046 2.89543 19 4 19H14C15.1046 19 16 18.1046 16 17V6H14V17H4V6H2ZM6 6L6 15H8L8 6H6ZM10 6V15H12V6H10Z",NEWSAPI_URL:"https://api.myedudomen.ml",SEARCH_NEWS:"https://newsapi.org/v2/everything?pageSize=100&q=",GIT_API:"https://api.github.com/repos/smirnovs/newsexplorer-front/commits",MAIN_PAGE:"https://myedudomen.ml/",GH_PAGE:"https://github.com/smirnovs/newsexplorer-front",firstElement:0,secondElement:1,thirdElement:2,maxShowed:3,count:6,dateLength:10,pseudoIdLength:19,goodStatus:201,windowWidth:720,noArticles:"У вас нет ключевых слов",NO:"нет",NO_KEYWORD_ERR:"Ошибка! Необходимо ввести хотя бы одно ключевое слово!",NOTHING_FIND:"Ничего не найдено",NOTHING_FIND_SORRY:"К сожалению по вашему запросу ничего не найдено.",SOME_ERROR:"Произошла ошибка. Повторите попытку поиска."}},function(t,e,n){(function(e){var n="object",r=function(t){return t&&t.Math==Math&&t};t.exports=r(typeof globalThis==n&&globalThis)||r(typeof window==n&&window)||r(typeof self==n&&self)||r(typeof e==n&&e)||Function("return this")()}).call(this,n(66))},function(t,e,n){var r=n(1),o=n(14),i=n(34),c=n(57),a=r.Symbol,s=o("wks");t.exports=function(t){return s[t]||(s[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(7),o=n(36),i=n(5),c=n(21),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(7),o=n(6),i=n(22);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(1),o=n(23).f,i=n(10),c=n(19),a=n(26),s=n(59),u=n(40);t.exports=function(t,e){var n,l,f,d,h,v=t.target,p=t.global,m=t.stat;if(n=p?r:m?r[v]||a(v,{}):(r[v]||{}).prototype)for(l in e){if(d=e[l],f=t.noTargetGet?(h=o(n,l))&&h.value:n[l],!u(p?l:v+(m?".":"#")+l,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;s(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),c(n,l,d,t)}}},function(t,e,n){var r=n(19),o=n(68),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,e,n){var r=n(1),o=n(26),i=n(32),c=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){"use strict";var r,o,i,c=n(12),a=n(32),s=n(1),u=n(35),l=n(71),f=n(62),d=n(72),h=n(4),v=n(18),p=n(73),m=n(9),g=n(74),y=n(78),x=n(79),b=n(42).set,_=n(80),w=n(81),E=n(82),C=n(44),L=n(83),S=n(43),k=n(33),O=n(40),A=n(2)("species"),j="Promise",M=k.get,T=k.set,P=k.getterFor(j),I=s.Promise,R=s.TypeError,N=s.document,H=s.process,D=s.fetch,q=H&&H.versions,B=q&&q.v8||"",V=C.f,F=V,G="process"==m(H),W=!!(N&&N.createEvent&&s.dispatchEvent),U=O(j,(function(){var t=I.resolve(1),e=function(){},n=(t.constructor={})[A]=function(t){t(e,e)};return!((G||"function"==typeof PromiseRejectionEvent)&&(!a||t.finally)&&t.then(e)instanceof n&&0!==B.indexOf("6.6")&&-1===S.indexOf("Chrome/66"))})),K=U||!y((function(t){I.all(t).catch((function(){}))})),$=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},z=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;_((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,s,u,l=r[c++],f=i?l.ok:l.fail,d=l.resolve,h=l.reject,v=l.domain;try{f?(i||(2===e.rejection&&Q(t,e),e.rejection=1),!0===f?a=o:(v&&v.enter(),a=f(o),v&&(v.exit(),u=!0)),a===l.promise?h(R("Promise-chain cycle")):(s=$(a))?s.call(a,d,h):d(a)):h(o)}catch(t){v&&!u&&v.exit(),h(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&J(t,e)}))}},Z=function(t,e,n){var r,o;W?((r=N.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&E("Unhandled promise rejection",n)},J=function(t,e){b.call(s,(function(){var n,r=e.value;if(Y(e)&&(n=L((function(){G?H.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),e.rejection=G||Y(e)?2:1,n.error))throw n.value}))},Y=function(t){return 1!==t.rejection&&!t.parent},Q=function(t,e){b.call(s,(function(){G?H.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},X=function(t,e,n,r){return function(o){t(e,n,o,r)}},tt=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,z(t,e,!0))},et=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw R("Promise can't be resolved itself");var o=$(n);o?_((function(){var r={done:!1};try{o.call(n,X(et,t,r,e),X(tt,t,r,e))}catch(n){tt(t,r,n,e)}})):(e.value=n,e.state=1,z(t,e,!1))}catch(n){tt(t,{done:!1},n,e)}}};U&&(I=function(t){p(this,I,j),v(t),r.call(this);var e=M(this);try{t(X(et,this,e),X(tt,this,e))}catch(t){tt(this,e,t)}},(r=function(t){T(this,{type:j,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=l(I.prototype,{then:function(t,e){var n=P(this),r=V(x(this,I));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=G?H.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&z(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=M(t);this.promise=t,this.resolve=X(et,t,e),this.reject=X(tt,t,e)},C.f=V=function(t){return t===I||t===i?new o(t):F(t)},a||"function"!=typeof D||c({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return w(I,D.apply(s,arguments))}})),c({global:!0,wrap:!0,forced:U},{Promise:I}),f(I,j,!1,!0),d(j),i=u.Promise,c({target:j,stat:!0,forced:U},{reject:function(t){var e=V(this);return e.reject.call(void 0,t),e.promise}}),c({target:j,stat:!0,forced:a||U},{resolve:function(t){return w(a&&this===i?I:this,t)}}),c({target:j,stat:!0,forced:K},{all:function(t){var e=this,n=V(e),r=n.resolve,o=n.reject,i=L((function(){var n=v(e.resolve),i=[],c=0,a=1;g(t,(function(t){var s=c++,u=!1;i.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,i[s]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=V(e),r=n.reject,o=L((function(){var o=v(e.resolve);g(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(39),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(1),o=n(14),i=n(10),c=n(8),a=n(26),s=n(37),u=n(33),l=u.get,f=u.enforce,d=String(s).split("toString");o("inspectSource",(function(t){return s.call(t)})),(t.exports=function(t,e,n,o){var s=!!o&&!!o.unsafe,u=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),f(n).source=d.join("string"==typeof e?e:"")),t!==r?(s?!l&&t[e]&&(u=!0):delete t[e],u?t[e]=n:i(t,e,n)):u?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s.call(this)}))},function(t,e,n){var r=n(35),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(7),o=n(58),i=n(22),c=n(16),a=n(21),s=n(8),u=n(36),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=a(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(1),o=n(10);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(9);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(7),o=n(6).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;!r||"name"in i||o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,e){t.exports={}},function(t,e,n){var r=n(1),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){t.exports=!1},function(t,e,n){var r,o,i,c=n(67),a=n(1),s=n(4),u=n(10),l=n(8),f=n(49),d=n(30),h=a.WeakMap;if(c){var v=new h,p=v.get,m=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return p.call(v,t)||{}},i=function(t){return m.call(v,t)}}else{var y=f("state");d[y]=!0,r=function(t,e){return u(t,y,e),e},o=function(t){return l(t,y)?t[y]:{}},i=function(t){return l(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){t.exports=n(1)},function(t,e,n){var r=n(7),o=n(3),i=n(31);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(14);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r=n(9),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(3),o=n(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(3),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==u||n!=s&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,e){t.exports={}},function(t,e,n){var r,o,i,c=n(1),a=n(3),s=n(9),u=n(27),l=n(63),f=n(31),d=c.location,h=c.setImmediate,v=c.clearImmediate,p=c.process,m=c.MessageChannel,g=c.Dispatch,y=0,x={},b=function(t){if(x.hasOwnProperty(t)){var e=x[t];delete x[t],e()}},_=function(t){return function(){b(t)}},w=function(t){b(t.data)},E=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};h&&v||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return x[++y]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(y),y},v=function(t){delete x[t]},"process"==s(p)?r=function(t){p.nextTick(_(t))}:g&&g.now?r=function(t){g.now(_(t))}:m?(i=(o=new m).port2,o.port1.onmessage=w,r=u(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(E)?r="onreadystatechange"in f("script")?function(t){l.appendChild(f("script")).onreadystatechange=function(){l.removeChild(this),b(t)}}:function(t){setTimeout(_(t),0)}:(r=E,c.addEventListener("message",w,!1))),t.exports={set:h,clear:v}},function(t,e,n){var r=n(20);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(18),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){var r=n(3),o=n(2)("species");t.exports=function(t){return!r((function(){var e=[];return(e.constructor={})[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(4),o=n(28),i=n(2)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=document.querySelector(".header"),c=document.querySelector(".header__mobileico"),a=function(){function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._action=this._action.bind(this),this._header=this._header.bind(this),this._clickClothe=this._clickClothe.bind(this),this.mobileMenu=e,this.iconColor=n,this.headerColor=i,this.isOpenMenu=r,this.isHeader=o}var e,n,a;return e=t,(n=[{key:"_header",value:function(){window.innerWidth>r.windowWidth&&1==this.isOpenMenu&&this.isHeader?(this.isOpenMenu=!1,this.mobileMenu.classList.remove("menumobile__isopened"),c.classList.remove(this.iconColor),i.style.backgroundColor="transparent"):window.innerWidth>r.windowWidth&&1==this.isOpenMenu&&void 0===this.isHeader&&(this.isOpenMenu=!1,this.mobileMenu.classList.remove("menumobile__isopened"),c.classList.remove(this.iconColor))}},{key:"_action",value:function(){!this.isOpenMenu&&this.isHeader?(c.classList.toggle(this.iconColor),this.mobileMenu.classList.toggle("menumobile__isopened"),i.style.backgroundColor=this.headerColor,this.isOpenMenu=!0,document.body.style.overflow="hidden"):this.isOpenMenu||this.isHeader?(this.isOpenMenu=!1,i.style.backgroundColor="transparent",this.mobileMenu.classList.toggle("menumobile__isopened"),c.classList.toggle(this.iconColor),document.body.style.overflow="overlay"):(c.classList.toggle(this.iconColor),this.mobileMenu.classList.toggle("menumobile__isopened"),this.isOpenMenu=!0,document.body.style.overflow="hidden")}},{key:"_clickClothe",value:function(){(event.target.classList.contains("menumobile__isopened")||event.target.classList.contains("menumobile__login"))&&(this.isOpenMenu=!1,i.style.backgroundColor="transparent",this.mobileMenu.classList.toggle("menumobile__isopened"),c.classList.toggle(this.iconColor),document.body.style.overflow="overlay")}},{key:"addListeners",value:function(){c.addEventListener("click",this._action),window.addEventListener("resize",this._header),this.mobileMenu.addEventListener("click",this._clickClothe)}}])&&o(e.prototype,n),a&&o(e,a),t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(54),n(13),n(15);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=n,this.headers=r}var e,n,o;return e=t,(n=[{key:"deleteCard",value:function(t){return fetch("".concat(this.url,"/articles/").concat(t),{method:"DELETE",headers:this.headers,credentials:"include"}).then((function(t){if(t.ok)return Promise.resolve(t.json());console.log("Кажется что-то пошло не так")}))}},{key:"checkAuth",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:this.headers,credentials:"include"}).then((function(t){return t.ok?Promise.resolve(t.json()):Promise.reject(t)}))}},{key:"unAuth",value:function(){return fetch("".concat(this.url,"/unauth"),{headers:this.headers,credentials:"include"})}},{key:"getSavedCards",value:function(){return fetch("".concat(this.url,"/articles"),{headers:this.headers,credentials:"include"}).then((function(t){return t.ok?Promise.resolve(t.json()):Promise.reject(t.status)}))}},{key:"checkCard",value:function(t){return fetch("".concat(this.url,"/articles/").concat(t),{headers:this.headers,credentials:"include"})}},{key:"saveCard",value:function(t,e,n,r,o,i,c,a){return fetch("".concat(this.url,"/articles"),{method:"POST",headers:this.headers,credentials:"include",body:JSON.stringify({pseudoId:t,keyword:e,title:n,text:r,date:o,source:i,link:c,image:a})})}},{key:"createUser",value:function(t,e,n){return fetch("".concat(this.url,"/signup"),{method:"POST",headers:this.headers,body:JSON.stringify({email:t,password:e,name:n})}).then((function(t){return t.ok?Promise.resolve(t):Promise.resolve(t.json())}))}},{key:"loginUser",value:function(t,e){return fetch("".concat(this.url,"/signin"),{method:"POST",headers:this.headers,credentials:"include",body:JSON.stringify({email:t,password:e})})}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){var r=n(14),o=n(34),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(60),o=n(52).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";var r=n(21),o=n(6),i=n(22);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){"use strict";var r=n(12),o=n(3),i=n(28),c=n(4),a=n(25),s=n(11),u=n(53),l=n(46),f=n(45),d=n(2)("isConcatSpreadable"),h=!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),v=f("concat"),p=function(t){if(!c(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!v},{concat:function(t){var e,n,r,o,i,c=a(this),f=l(c,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],p(i)){if(d+(o=s(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,d++)n in i&&u(f,d,i[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(f,d++,i)}return f.length=d,f}})},function(t,e,n){var r=n(27),o=n(39),i=n(25),c=n(11),a=n(46),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(h,v,p,m){for(var g,y,x=i(h),b=o(x),_=r(v,p,3),w=c(b.length),E=0,C=m||a,L=e?C(h,w):n?C(h,0):void 0;w>E;E++)if((d||E in b)&&(y=_(g=b[E],E,x),t))if(e)L[E]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:s.call(L,g)}else if(l)return!1;return f?-1:u||l?l:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},,function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(8),o=n(69),i=n(23),c=n(6);t.exports=function(t,e){for(var n=o(e),a=c.f,s=i.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,s(e,l))}}},function(t,e,n){var r=n(8),o=n(16),i=n(70).indexOf,c=n(30);t.exports=function(t,e){var n,a=o(t),s=0,u=[];for(n in a)!r(c,n)&&r(a,n)&&u.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~i(u,n)||u.push(n));return u}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(6).f,o=n(8),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(20);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},,function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(1),o=n(37),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){"use strict";var r=n(38),o={};o[n(2)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,e,n){var r=n(20),o=n(50),i=n(61),c=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(16),o=n(11),i=n(51),c=function(t){return function(e,n,c){var a,s=r(e),u=o(s.length),l=i(c,u);if(t&&n!=n){for(;u>l;)if((a=s[l++])!=a)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(19);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(20),o=n(6),i=n(2),c=n(7),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(5),o=n(75),i=n(11),c=n(27),a=n(76),s=n(77),u=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,l,f){var d,h,v,p,m,g,y=c(e,n,l?2:1);if(f)d=t;else{if("function"!=typeof(h=a(t)))throw TypeError("Target is not iterable");if(o(h)){for(v=0,p=i(t.length);p>v;v++)if((m=l?y(r(g=t[v])[0],g[1]):y(t[v]))&&m instanceof u)return m;return new u(!1)}d=h.call(t)}for(;!(g=d.next()).done;)if((m=s(d,y,g.value,l))&&m instanceof u)return m;return new u(!1)}).stop=function(t){return new u(!0,t)}},function(t,e,n){var r=n(2),o=n(41),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(38),o=n(41),i=n(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(5),o=n(18),i=n(2)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c,a,s,u,l=n(1),f=n(23).f,d=n(9),h=n(42).set,v=n(43),p=l.MutationObserver||l.WebKitMutationObserver,m=l.process,g=l.Promise,y="process"==d(m),x=f(l,"queueMicrotask"),b=x&&x.value;b||(r=function(){var t,e;for(y&&(t=m.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},y?c=function(){m.nextTick(r)}:p&&!/(iphone|ipod|ipad).*applewebkit/i.test(v)?(a=!0,s=document.createTextNode(""),new p(r).observe(s,{characterData:!0}),c=function(){s.data=a=!a}):g&&g.resolve?(u=g.resolve(void 0),c=function(){u.then(r)}):c=function(){h.call(l,r)}),t.exports=b||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(5),o=n(4),i=n(44);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(1);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){"use strict";var r=n(12),o=n(4),i=n(28),c=n(51),a=n(11),s=n(16),u=n(53),l=n(45),f=n(2)("species"),d=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,e){var n,r,l,v=s(this),p=a(v.length),m=c(t,p),g=c(void 0===e?p:e,p);if(i(v)&&("function"!=typeof(n=v.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[f])&&(n=void 0):n=void 0,n===Array||void 0===n))return d.call(v,m,g);for(r=new(void 0===n?Array:n)(h(g-m,0)),l=0;m<g;m++,l++)m in v&&u(r,l,v[m]);return r.length=l,r}})},function(t,e,n){"use strict";var r,o,i=n(99),c=RegExp.prototype.exec,a=String.prototype.replace,s=c,u=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(s=function(t){var e,n,r,o,s=this;return l&&(n=new RegExp("^"+s.source+"$(?!\\s)",i.call(s))),u&&(e=s.lastIndex),r=c.call(s,t),u&&r&&(s.lastIndex=s.global?r.index+r[0].length:e),l&&r&&r.length>1&&a.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=s},function(t,e,n){"use strict";var r=n(96),o=n(5),i=n(25),c=n(11),a=n(24),s=n(17),u=n(101),l=n(97),f=Math.max,d=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n){return[function(n,r){var o=s(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,i){var s=n(e,t,this,i);if(s.done)return s.value;var h=o(t),v=String(this),p="function"==typeof i;p||(i=String(i));var m=h.global;if(m){var g=h.unicode;h.lastIndex=0}for(var y=[];;){var x=l(h,v);if(null===x)break;if(y.push(x),!m)break;""===String(x[0])&&(h.lastIndex=u(v,c(h.lastIndex),g))}for(var b,_="",w=0,E=0;E<y.length;E++){x=y[E];for(var C=String(x[0]),L=f(d(a(x.index),v.length),0),S=[],k=1;k<x.length;k++)S.push(void 0===(b=x[k])?b:String(b));var O=x.groups;if(p){var A=[C].concat(S,L,v);void 0!==O&&A.push(O);var j=String(i.apply(void 0,A))}else j=r(C,v,L,S,O,i);L>=w&&(_+=v.slice(w,L)+j,w=L+C.length)}return _+v.slice(w)}];function r(t,n,r,o,c,a){var s=r+t.length,u=o.length,l=p;return void 0!==c&&(c=i(c),l=v),e.call(a,l,(function(e,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":a=c[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>u){var f=h(l/10);return 0===f?e:f<=u?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):e}a=o[l-1]}return void 0===a?"":a}))}}))},function(t,e,n){var r=n(1),o=n(88),i=n(89),c=n(10);for(var a in o){var s=r[a],u=s&&s.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(t){u.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(55).forEach,o=n(64);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(84),n(13),n(15),n(86),n(98);var r=n(0);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n,r,o,i,c,a,s,u,l,f,d,h,v){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=h,this.isLoggedIn=n,this.isSaved=r,this.isExist=o,this.pseudoId=i,this.keyword=c,this.link=a,this.imgUrl=s,this.date=u,this.title=l,this.text=f,this.source=d,this.api=e,this.cardCounter=v,this.saveCard=this.saveCard.bind(this),this.deleteCard=this.deleteCard.bind(this)}var e,n,i;return e=t,(n=[{key:"addListeners",value:function(t){t.addEventListener("click",this.saveCard),t.addEventListener("click",this.deleteCard)}},{key:"_deleteCard",value:function(){var t=event.currentTarget;t.removeEventListener("click",this.saveCard,!1),t.removeEventListener("click",this.deleteCard,!1),t.remove(),this.cardCounter()}},{key:"saveCard",value:function(){var t=this;if(event.target.classList.contains("card__saver")||event.target.classList.contains("card__svg-bookmark")||event.target.classList.contains("card__bookmark"))if(this.isLoggedIn)if(this.isExist){var e=event.currentTarget.querySelector(".card__bookmark");this.api.deleteCard(this.id).then((function(){e.setAttribute("fill","none"),e.setAttribute("stroke","#B6BCBF"),e.classList.remove("card__bookmark_saved"),t.isExist=!t.isExist})).catch()}else{var n=event.currentTarget.querySelector(".card__bookmark");this.api.saveCard(this.pseudoId,this.keyword,this.title,this.text,this.date,this.source,this.link,this.imgUrl).then((function(e){return n.setAttribute("fill","#2f71e5"),n.setAttribute("stroke","#2f71e5"),n.classList.add("card__bookmark_saved"),t.isExist=!t.isExist,Promise.resolve(e.json())})).then((function(e){t.id=e.data._id}))}else console.log("Надо залогиниться")}},{key:"deleteCard",value:function(){(event.target.classList.contains("card__deleter")||event.target.classList.contains("card__svg-deleter")||event.target.classList.contains("card__delete"))&&this.api.deleteCard(this.id).then(this._deleteCard()).catch((function(){console.log("не удалено")}))}},{key:"_createIcon",value:function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.createElementNS("http://www.w3.org/2000/svg","path");this.isSaved?(t.classList.add("card__deleter"),e.classList.add("card__svg-deleter"),e.setAttribute("width","18"),e.setAttribute("height","19"),e.setAttribute("viewBox","0 0 18 19"),e.setAttribute("fill","none"),n.classList.add("card__delete"),n.setAttribute("fill-rule","evenodd"),n.setAttribute("clip-rule","evenodd"),n.setAttribute("fill","#B6BCBF"),n.setAttribute("d",r.CARD_DELETE)):(t.classList.add("card__saver"),e.classList.add("card__svg-bookmark"),e.setAttribute("width","24"),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),n.classList.add("card__bookmark"),this.isExist&&!this.isSaved?(n.setAttribute("fill","#2f71e5"),n.setAttribute("stroke","#2f71e5"),n.classList.add("card__bookmark_saved")):this.isExist||this.isSaved||(n.setAttribute("fill","none"),n.setAttribute("stroke","#B6BCBF")),n.setAttribute("d",r.CARD_BOOKMARK),n.setAttribute("stroke-width","2")),t.appendChild(e),e.appendChild(n)}},{key:"_dateFormat",value:function(t,e){t=(t=t.slice(r.firstElement,r.dateLength)).replace(/-/g,", ");var n=new Date(t);t=new Intl.DateTimeFormat("ru",{year:"numeric",month:"long",day:"numeric"}).format(n),e.textContent=t}},{key:"create",value:function(){var t=document.createElement("div");t.classList.add("card");var e=document.createElement("div");e.classList.add("card__img");var n=document.createElement("img");n.src=this.imgUrl,n.alt=this.title;var r=document.createElement("div");if(this._createIcon(r),e.appendChild(n),e.appendChild(r),!this.isLoggedIn){var o=document.createElement("div");o.classList.add("card__nologin"),o.textContent="Войдите, чтобы сохранять статьи",e.appendChild(o)}if(this.isSaved){var i=document.createElement("div");i.classList.add("card__keyword"),i.textContent=this.keyword,e.appendChild(i)}var c=document.createElement("div");c.classList.add("card__text-block");var a=document.createElement("div");a.classList.add("card__date"),this._dateFormat(this.date,a);var s=document.createElement("div");s.classList.add("card__news");var u=document.createElement("h3");u.classList.add("card__title"),u.textContent=this.title;var l=document.createElement("p");l.classList.add("card__text"),l.textContent=this.text;var f=document.createElement("p");return f.classList.add("card__source"),f.textContent=this.source,t.appendChild(e),t.appendChild(c),c.appendChild(a),c.appendChild(s),s.appendChild(u),s.appendChild(l),t.appendChild(f),t}}])&&o(e.prototype,n),i&&o(e,i),t}()},function(t,e,n){"use strict";var r=n(10),o=n(19),i=n(3),c=n(2),a=n(85),s=c("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var d=c(t),h=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=h&&!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[d](""),!e}));if(!h||!v||"replace"===t&&!u||"split"===t&&!l){var p=/./[d],m=n(d,""[t],(function(t,e,n,r,o){return e.exec===a?h&&!o?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=m[0],y=m[1];o(String.prototype,t,g),o(RegExp.prototype,d,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)}),f&&r(RegExp.prototype[d],"sham",!0)}}},function(t,e,n){var r=n(9),o=n(85);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){"use strict";var r=n(12),o=n(103);r({target:"String",proto:!0,forced:n(104)("link")},{link:function(t){return o(this,"a","href",t)}})},function(t,e,n){"use strict";var r=n(5);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},,function(t,e,n){"use strict";var r=n(102).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(24),o=n(17),i=function(t){return function(e,n){var i,c,a=String(o(e)),s=r(n),u=a.length;return s<0||s>=u?t?"":void 0:(i=a.charCodeAt(s))<55296||i>56319||s+1===u||(c=a.charCodeAt(s+1))<56320||c>57343?t?a.charAt(s):i:t?a.slice(s,s+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(17),o=/"/g;t.exports=function(t,e,n,i){var c=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),a+">"+c+"</"+e+">"}},function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(54),n(118),n(29),n(13),n(15),n(86),n(98),n(87),n(119);var r=n(47),o=n(48),i=n(95),c=n(0),a=document.querySelector(".header__login_name"),s=document.querySelector(".header__login_logged"),u=document.querySelector(".saved-news__cards"),l=document.querySelector(".saved-news__container"),f=document.querySelector(".user-greetings__keywords"),d=document.querySelector(".user-greetings__username"),h=document.querySelector(".user-greetings__newscount"),v=document.querySelector(".user-greetings__keywords-keys"),p=document.querySelector(".menumobile__login_logged"),m=document.querySelector(".menumobile"),g=new o.a({baseUrl:c.NEWSAPI_URL,headers:{Accept:"application/json","Content-Type":"application/json"}}),y=function(){var t=document.querySelectorAll(".card").length;t===c.firstElement?h.textContent=c.NO:h.textContent=t},x=function(){g.unAuth().then((function(t){if(!t.ok)return Promise.reject(t.status);headerCallback({isLoggedIn:!1,userLogin:""})})).catch((function(t){console.log(t)}))};new r.a(m,c.ICON_COLOR_BLACK,!1).addListeners(),s.addEventListener("click",x),p.addEventListener("click",x),g.checkAuth().then((function(t){a.textContent=t.name,d.textContent=t.name})).catch((function(t){console.log(t),window.location.replace(c.MAIN_PAGE)})),g.getSavedCards().then((function(t){h.textContent=t.data.length;var e=[];t.data.forEach((function(t){var n=new i.a(g,!0,!0,!0,t.pseudoId,t.keyword,t.link,t.image,t.date,t.title,t.text,t.source,t._id,y),r=n.create();n.addListeners(r),u.appendChild(r),e.push(t.keyword)}));var n={};e.forEach((function(t){n[t]=n[t]+c.secondElement||c.secondElement}));var r=[];for(var o in n)r.push([o,n[o]]);r.sort((function(t,e){return e[c.secondElement]-t[c.secondElement]}));var a=[];if(r.forEach((function(t){a.push(t[c.firstElement])})),r.length===c.secondElement){var s="".concat(a[c.firstElement]);v.textContent=s}else if(r.length===c.thirdElement){var l="".concat(a[c.firstElement],", ").concat(a[c.secondElement]);v.textContent=l}else if(r.length===c.maxShowed){var f="".concat(a[c.firstElement],", ").concat(a[c.secondElement],", ").concat(a[c.thirdElement]);v.textContent=f}else if(r.length>c.maxShowed){var d=r.length-c.thirdElement,p="".concat(a[c.firstElement],", ").concat(a[c.secondElement]," и ").concat(d," других");v.textContent=p}else if(r.length===c.firstElement||void 0===card.keyword){var m=c.noArticles;v.textContent=m}})).catch((function(t){l.style.display="none",f.style.display="none",h.textContent=c.NO}))},function(t,e,n){"use strict";var r=n(12),o=n(18),i=n(25),c=n(3),a=n(64),s=[].sort,u=[1,2,3],l=c((function(){u.sort(void 0)})),f=c((function(){u.sort(null)})),d=a("sort");r({target:"Array",proto:!0,forced:l||!f||d},{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),o(t))}})},function(t,e,n){}]);