(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d222708":"7b25b0b6"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2d48":function(t,e,n){t.exports=n.p+"img/iconos.9e4ac07b.png"},"3d0c":function(t,e,n){"use strict";n("b6de")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{"background-image":"linear-gradient(120deg, rgb(108, 241, 255), rgb(143, 0, 164))"},attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{app:"",color:"indigo darken-3",dark:""}},[n("v-toolbar-title",[t._v("MPago Challenge")])],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},o=[],i={components:{},data:function(){return{drawer:null,group:null,cards:[{title:"Pringles Pizza",src:"https://i.pinimg.com/originals/ec/1f/7f/ec1f7ffa1357d6943c3967e420ebe7a9.png",flex:4}]}}},c=i,s=n("2877"),l=n("6544"),u=n.n(l),p=n("7496"),d=n("40dc"),f=n("a523"),v=n("553a"),h=n("f6c4"),b=n("2a7f"),m=Object(s["a"])(c,a,o,!1,null,null,null),g=m.exports;u()(m,{VApp:p["a"],VAppBar:d["a"],VContainer:f["a"],VFooter:v["a"],VMain:h["a"],VToolbarTitle:b["a"]});n("d3b7");var w=n("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,(function(e){return r("v-row",{key:e.title},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"80%"}},[r("v-carousel",t._l(t.pics,(function(t,e){return r("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1)],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-card",{staticClass:"mx-auto",attrs:{color:"transparent",flat:"false"}},[r("v-spacer",{staticStyle:{height:"40px"}}),r("v-card-title",{staticClass:"white--text"},[r("h1",[t._v(t._s(e.title))])]),r("v-spacer"),r("v-card-text",{staticClass:"white--text",attrs:{text:""}},[r("h2",[t._v("Precio: S/ "+t._s(e.price))])]),r("v-card-actions",[r("v-spacer"),r("div",{staticClass:"text-center ma-2"},[r("v-btn",{class:"rounded-xl",attrs:{elevation:"5",color:"primary"},on:{click:function(e){t.goToCheckOut(),t.snackbar=!0}}},[t._v(" ¡Lo quiero! ")]),r("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" No ")]),r("v-btn",t._b({attrs:{href:t.initPoint,color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Pagar la compra ")])]}}],null,!0),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)],1),r("v-spacer",{staticStyle:{height:"50px"}}),r("v-img",{attrs:{align:"center","max-height":"500","max-width":"600",src:n("2d48")}})],1)],1)],1)})),1)],1)},y=[],k=n("bc3a"),_=n.n(k),V=_.a.create({baseURL:"https://elvita.herokuapp.com/api",headers:{"Content-type":"application/json"}}),C={name:"Home",data:function(){return{snackbar:!1,text:"¿Estás seguro/a?",initPoint:null,drawer:null,group:null,cards:[{title:"Huawei P30 Lite",price:"499.00",src:"https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p30-lite-new-adition/images/kv-phones-mob.png"}],pics:[{src:"https://cdn.sonitron.net/sonitron/2020/01/Huawei-P30-Lite-256-GB.png"},{src:"https://videotron.com/vtrn/images/resi/mobilite/appareils/telephones/huawei/p30lite/huawei-p30-lite-peacock-blue-carousel-8.png"},{src:"https://cdn.shopify.com/s/files/1/0074/2290/2323/articles/huawei-p30-lite-foto_1170x.png?v=1563405660"},{src:"https://i.blogs.es/a2ad51/huawei-p30-lite/840_560.jpg"}]}},methods:{goToCheckOut:function(){var t=this;V.post("/gateways").then((function(e){console.log(e),t.initPoint=e.data,t.checkout=!0})).catch((function(t){console.log("Algo malo sucedió. "+t)}))}}},P=C,O=(n("3d0c"),n("8336")),j=n("b0af"),S=n("99d9"),T=n("5e66"),L=n("3e35"),E=n("0e8f"),M=n("adda"),A=n("a722"),H=n("0fd9"),B=n("2db4"),$=n("2fa4"),q=Object(s["a"])(P,x,y,!1,null,"11329a4b",null),z=q.exports;u()(q,{VBtn:O["a"],VCard:j["a"],VCardActions:S["a"],VCardText:S["c"],VCardTitle:S["d"],VCarousel:T["a"],VCarouselItem:L["a"],VContainer:f["a"],VFlex:E["a"],VImg:M["a"],VLayout:A["a"],VRow:H["a"],VSnackbar:B["a"],VSpacer:$["a"]}),r["a"].use(w["a"]);var F=[{path:"/",name:"Home",component:z},{path:"/order",name:"Order",component:function(){return n.e("chunk-2d222708").then(n.bind(null,"cf2a"))}}],I=new w["a"]({mode:"history",base:"/",routes:F}),J=I,R=n("f309");r["a"].use(R["a"]);var G=new R["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:J,vuetify:G,render:function(t){return t(g)}}).$mount("#app")},b6de:function(t,e,n){}});
//# sourceMappingURL=app.20f264f7.js.map