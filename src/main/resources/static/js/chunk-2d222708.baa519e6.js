(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222708"],{cf2a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["approved"===e.status?a("v-card",[a("v-card-title",[e._v("Su pago fue aprovado")]),a("v-card-subtitle",[e._v("En breve recibirá un correo de confirmación.")]),a("v-card-text",[e._v("Método de pago: "+e._s(e.payment_type))]),a("v-card-text",[e._v("External references: "+e._s(e.external_reference))]),a("v-card-text",[e._v("ID de Pago: "+e._s(e.payment_id))])],1):e._e(),"denied"===e.status?a("v-card",[a("v-card-title",[e._v("Su pago fue rechazado")]),a("v-card-subtitle",[e._v("Por favor inténtelo nuevamente.")])],1):e._e(),"in_process"===e.status?a("v-card",[a("v-card-title",[e._v("Su pago está en proceso")]),a("v-card-subtitle",[e._v("Se le notificará cuando el pago se haya realizado de manera exitosa.")])],1):e._e()],1)},n=[],d={name:"Order",data:function(){return{status:this.$route.query.status,payment_type:this.$route.query.payment_type,external_reference:this.$route.query.external_reference,payment_id:this.$route.query.payment_id}}},c=d,o=a("2877"),u=a("6544"),s=a.n(u),i=a("b0af"),v=a("99d9"),_=Object(o["a"])(c,r,n,!1,null,"b629769a",null);t["default"]=_.exports;s()(_,{VCard:i["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"]})}}]);
//# sourceMappingURL=chunk-2d222708.baa519e6.js.map