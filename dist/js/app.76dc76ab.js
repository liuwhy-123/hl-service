(function(e){function n(n){for(var r,u,c=n[0],i=n[1],f=n[2],d=0,l=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&l.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(l.length)l.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},a={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-05ddcde2":"5f2abcfe","chunk-1a0e125f":"43f38d22","chunk-43e19348":"9ae110cb","chunk-4bed4979":"e2ae51f4","chunk-4d36146a":"9e67e5f6","chunk-7f392589":"a226947f","chunk-eff0c270":"b447a001"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-05ddcde2":1,"chunk-1a0e125f":1,"chunk-43e19348":1,"chunk-4bed4979":1,"chunk-4d36146a":1,"chunk-7f392589":1,"chunk-eff0c270":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-05ddcde2":"cfe3c575","chunk-1a0e125f":"8c9e216a","chunk-43e19348":"9766e55a","chunk-4bed4979":"528d300c","chunk-4d36146a":"b4024c67","chunk-7f392589":"7ad10233","chunk-eff0c270":"dd036deb"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var f=o[c],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===a))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){f=l[c],d=f.getAttribute("data-href");if(d===r||d===a)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete u[e],s.parentNode.removeChild(s),t(o)},s.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){u[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;f=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,t[1](l)}a[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var s=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[t("router-view")],1)},a=[],o={name:"App"},c=o,i=(t("5c0b"),t("2877")),f=Object(i["a"])(c,u,a,!1,null,null,null),d=f.exports,l=(t("d3b7"),t("8c4f"));r["default"].use(l["a"]);var s=[{path:"/test",name:"test",component:function(){return t.e("chunk-4bed4979").then(t.bind(null,"51b3"))},children:[{name:"主页",path:"/test/homePage",component:function(){return t.e("chunk-1a0e125f").then(t.bind(null,"9fdd"))}},{name:"主要产品",path:"/test/setMeal",component:function(){return t.e("chunk-4d36146a").then(t.bind(null,"ed7d"))}},{name:"修改账号/密码",path:"/test/modify",component:function(){return t.e("chunk-7f392589").then(t.bind(null,"363b"))}},{name:"已购商品信息",path:"/test/purchased",component:function(){return t.e("chunk-05ddcde2").then(t.bind(null,"6696"))}},{name:"购物车",path:"/test/shoppingCart",component:function(){return t.e("chunk-43e19348").then(t.bind(null,"a984"))}},{name:"浏览信息",path:"/test/browse",component:function(){return t.e("chunk-eff0c270").then(t.bind(null,"e362"))}}]},{path:"/",redirect:"/test/homePage"}],h=new l["a"]({base:"",routes:s}),p=h,m=t("2f62");r["default"].use(m["a"]);var b=new m["a"].Store({state:{verification:[{name:"",registeredAddress:"",companyAddress:"",bank:"",accountNumber:"",payTaxes:"",mobile:""}],data:[],home:[]},mutations:{pull:function(e,n){return e.data=n},all:function(e,n){return e.home=n},add:function(e,n){return e.verification=n}},actions:{},getters:{data:function(e){return e.data},home:function(e){return e.home},verification:function(e){return e.verification}},modules:{}}),v=t("5c96"),g=t.n(v);t("0fae");r["default"].config.productionTip=!1,r["default"].use(g.a),new r["default"]({router:p,store:b,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),u=t.n(r);u.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.76dc76ab.js.map