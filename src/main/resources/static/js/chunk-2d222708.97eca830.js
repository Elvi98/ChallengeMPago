(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222708"],{cf2a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["approved"===t.status?a("v-card",{attrs:{color:"transparent",flat:"false"}},[a("v-card-title",{staticClass:"white--text"},[t._v("Su pago fue aprovado")]),a("v-card-subtitle",{staticClass:"white--text"},[t._v("En breve recibirá un correo de confirmación.")]),a("v-card-text",{staticClass:"white--text"},[t._v("Método de pago: "+t._s(t.payment_type))]),a("v-card-text",{staticClass:"white--text"},[t._v("External references: "+t._s(t.external_reference))]),a("v-card-text",{staticClass:"white--text"},[t._v("ID de Pago: "+t._s(t.payment_id))])],1):t._e(),"denied"===t.status?a("v-card",{attrs:{color:"transparent",flat:"false"}},[a("v-card-title",{staticClass:"white--text"},[t._v("Su pago fue rechazado")]),a("v-card-subtitle",{staticClass:"white--text"},[t._v("Por favor inténtelo nuevamente.")])],1):t._e(),"in_process"===t.status?a("v-card",{attrs:{color:"transparent",flat:"false"}},[a("v-card-title",{staticClass:"white--text"},[t._v("Su pago está en proceso")]),a("v-card-subtitle",{staticClass:"white--text"},[t._v("Se le notificará cuando el pago se haya realizado de manera exitosa.")])],1):t._e()],1)},s=[],i={name:"Order",data:function(){return{status:this.$route.query.status,payment_type:this.$route.query.payment_type,external_reference:this.$route.query.external_reference,payment_id:this.$route.query.payment_id}}},n=i,c=a("2877"),o=a("6544"),l=a.n(o),d=a("b0af"),u=a("99d9"),v=Object(c["a"])(n,r,s,!1,null,"22852abe",null);e["default"]=v.exports;l()(v,{VCard:d["a"],VCardSubtitle:u["b"],VCardText:u["c"],VCardTitle:u["d"]})}}]);
//# sourceMappingURL=chunk-2d222708.97eca830.js.map