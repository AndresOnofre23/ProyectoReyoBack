(function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"39c9bb55"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"6f01adaf"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],d.parentNode.removeChild(d),r(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",[e.estaActivo?r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Reto")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[e.estaActivo?e._e():r("b-nav-item",{attrs:{to:"/login"}},[e._v("Login")]),e.estaActivo?r("b-nav-item",{attrs:{to:"/usuarios"}},[e._v("Usuarios")]):e._e()],1),r("b-navbar-nav",[e.estaActivo?r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("User")])]},proxy:!0}],null,!1,4258386881)},[r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Profile")]),r("b-dropdown-item",{on:{click:function(t){return e.cerrarSesion()}}},[e._v("Sign Out")])],1):e._e()],1)],1)],1):e._e()],1),r("router-view")],1)},a=[],u=r("5530"),i=r("2f62"),c={methods:Object(u["a"])({},Object(i["b"])(["cerrarSesion","leerToken"])),computed:Object(u["a"])({},Object(i["c"])(["estaActivo"])),created:function(){this.leerToken()}},s=c,l=(r("034f"),r("2877")),f=Object(l["a"])(s,o,a,!1,null,null,null),d=f.exports,p=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),b=r("1232");n["default"].use(i["a"]);var v=new i["a"].Store({state:{token:"",usuarioDB:""},mutations:{obtenerUsuario:function(e,t){e.token=t,""===t?e.usuarioDB="":(e.usuarioDB=Object(b["a"])(t),h.push({name:"usuarios"}))}},actions:{guardarUsuario:function(e,t){var r=e.commit;localStorage.setItem("token",t),r("obtenerUsuario",t)},cerrarSesion:function(e){var t=e.commit;t("obtenerUsuario",""),localStorage.removeItem("token"),h.push({name:"login"})},leerToken:function(e){var t=e.commit,r=localStorage.getItem("token");t("obtenerUsuario",r||"")}},getters:{estaActivo:function(e){return!!e.token}}});n["default"].use(p["a"]);var m=new p["a"]({mode:"history",base:"/",routes:[{path:"/usuarios",name:"usuarios",component:function(){return r.e("about").then(r.bind(null,"9c1c"))},meta:{requireAuth:!0}},{path:"/login",name:"login",component:function(){return r.e("about").then(r.bind(null,"a55b"))}}]});m.beforeEach((function(e,t,r){var n=e.matched.some((function(e){return e.meta.requireAuth}));n&&""===v.state.token?r({name:"login"}):r()}));var h=m,g=r("5f5b"),y=(r("f9e3"),r("2dd8"),r("bc3a")),k=r.n(y),w=r("2106"),_=r.n(w);n["default"].use(g["a"]),n["default"].use(_.a,k.a),k.a.defaults.baseURL="https://app-backendreto.herokuapp.com/api",n["default"].config.productionTip=!1,new n["default"]({router:h,store:v,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.da25fc21.js.map