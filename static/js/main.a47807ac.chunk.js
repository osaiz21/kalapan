(this["webpackJsonpfronted-kalapan"]=this["webpackJsonpfronted-kalapan"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),s=(n(17),n(6)),i=n(9),j=n(5),p=n.n(j),u=n(10),l=n(4),h=(n(19),n(12)),b=n(2),d=n(1),x=function(){var e="https://kalapan.herokuapp.com/",t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),j=Object(l.a)(o,2),x=j[0],O=j[1],m=Object(a.useState)({}),v=Object(l.a)(m,2),f=v[0],g=v[1],y=function(){var t=Object(u.a)(p.a.mark((function t(n){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.preventDefault(),!x){t.next=11;break}return t.next=5,fetch("".concat(e,"productos?codigo=").concat(x));case 5:return a=t.sent,t.next=8,a.json();case 8:c=t.sent,r(c),O("");case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0.stack||t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(u.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("".concat(e,"productos"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(f)});case 4:return a=t.sent,t.next=7,a.json();case 7:t.sent,document.getElementById("form_productos").reset(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),alert(t.t0.message||t.t0.stack);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),_=function(e){g((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(s.a)({},e.target.name,e.target.value))}))};return Object(d.jsx)(h.a,{children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/",element:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:"Kalapan"}),Object(d.jsxs)("form",{onSubmit:y,children:[Object(d.jsxs)("label",{children:["Cod de barras \xa0",Object(d.jsx)("input",{type:"text",onChange:function(e){O(e.target.value)},name:"codigo",value:x,autoFocus:!0}),"\xa0"]}),Object(d.jsx)("input",{type:"submit",value:"Consultar"})]}),Object(d.jsx)("ol",{children:c.map((function(e,t){return Object(d.jsxs)("li",{children:[e.nombre," ",e.descripcion," - $ ",e.valor_venta,Object(d.jsx)("hr",{})]},t)}))})]})})}),Object(d.jsx)(b.a,{path:"/register",element:Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:C,id:"form_productos",children:[Object(d.jsx)("input",{type:"text",onChange:_,name:"nombre",placeholder:"nombre"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:_,name:"descripcion",placeholder:"descripcion"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:_,name:"valor_venta",placeholder:"valor_venta"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:_,name:"valor_sugerido",placeholder:"valor_sugerido"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:_,name:"valor_unitario",placeholder:"valor_unitario"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:_,name:"categoria",placeholder:"categoria"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:_,name:"tarifa_iva",placeholder:"tarifa_iva"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:_,name:"cantidad",placeholder:"cantidad"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:_,name:"proveedor",placeholder:"proveedor"}),Object(d.jsx)("hr",{})," ",Object(d.jsx)("input",{type:"number",onChange:_,name:"activo",placeholder:"activo",value:"1"}),Object(d.jsx)("hr",{})," ",Object(d.jsx)("input",{type:"text",onChange:_,name:"codigo_barras",placeholder:"codigo_barras"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"date",onChange:_,name:"fecha_vencimiento",placeholder:"fecha_vencimiento"}),Object(d.jsx)("input",{type:"submit",value:"Enviar"})]})})})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.a47807ac.chunk.js.map