(this.webpackJsonpaavat01=this.webpackJsonpaavat01||[]).push([[0],{105:function(e,t,n){e.exports=n(119)},110:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),l=n.n(c),u=(n(110),n(55)),i=n(8),o=n(54),s=n(23),f=n(74),d=n.n(f),m=n(89),p=function(e){return{type:"FETCH_PACKAGES",packages:e}};function E(e,t){var n=t.indexOf(e),a=null;if(n>-1){n+=e.length;var r=t.indexOf("\n",n);a=r>-1?t.substring(n,r):t.substring(n)}return a}function g(e){var t=e.indexOf("\n"),n=e.substring(0,t),a=E("Description: ",e=e.substring(t+1));return null===a&&(a=""),{id:n,description:a,dependencies:function(e){var t=[];return e&&e.split(",").forEach((function(e){var n=(e=e.trimStart()).indexOf(" "),a=n>-1?e.substring(0,n):e;t.includes(a)||t.push(a)})),t}(E("Depends: ",e))}}var b=function(){return function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,r,c,l,u,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./status.real.txt");case 2:if(n=e.sent,a=[],n.ok){e.next=6;break}return e.abrupt("return",t(p(a)));case 6:return e.t0=String,e.next=9,n.text();case 9:for(e.t1=e.sent,r=(0,e.t0)(e.t1),"Package: ",c=r.indexOf("Package: ");c>-1;)c+="Package: ".length,l=r.indexOf("Package: ",c),u=l>0?r.substring(c,l):r.substring(c),i=g(u),a.push(i),c=l;return e.abrupt("return",t(p(a)));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=n(132),h=n(133),k=function(){var e=Object(i.f)(),t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(s.c)(),f=Object(s.d)((function(e){return e.packages}));Object(a.useEffect)((function(){u(b())}),[]);var d=function(e,t){return e.id>t.id?1:e.id<t.id?-1:0};Object(a.useEffect)((function(){l(f.sort(d))}),[f]);var m=function(){return r.a.createElement(v.a.Header,null,r.a.createElement(v.a.Row,null,r.a.createElement(v.a.HeaderCell,null,"Package"),r.a.createElement(v.a.HeaderCell,null,"Description")))},p=c.map((function(t){return r.a.createElement(v.a.Row,{key:t.id,onClick:function(){return function(t){e.push("/details/"+t.id)}(t)}},r.a.createElement(v.a.Cell,null,t.id),r.a.createElement(v.a.Cell,null,t.description))}));return r.a.createElement("div",{className:"content"},r.a.createElement(h.a,{as:"h1",className:"page-title"},"Packages"),r.a.createElement(v.a,{celled:!0,selectable:!0},m,r.a.createElement(v.a.Body,null,p)))},O=n(94),j=n(79),C=function(){var e=Object(i.f)(),t=Object(i.g)().id,n=Object(s.d)((function(e){return e.packages})),c=Object(a.useState)(),l=Object(o.a)(c,2),u=l[0],f=l[1],d=Object(a.useState)([]),m=Object(o.a)(d,2),p=m[0],E=m[1];Object(a.useEffect)((function(){var e=n.filter((function(e){return function(e,t){return e.id===t}(e,t)})),a=n.filter((function(e){return function(e,t){return e.dependencies.find((function(e){return function(e,t){return e===t}(e,t)}))}(e,t)}));f(e[0]),E(a)}),[n,t]);var g=function(t){e.push("/details/"+t)},b=r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Cell,null,"Description"),r.a.createElement(v.a.Cell,null,null===u||void 0===u?void 0:u.description)),k=null===u||void 0===u?void 0:u.dependencies.map((function(e,t){return r.a.createElement(v.a.Row,{onClick:function(){return g(e)}},r.a.createElement(v.a.Cell,null,0===t&&"Dependencies"),r.a.createElement(v.a.Cell,null,e))})),C="Depend on "+t,w=null===p||void 0===p?void 0:p.map((function(e,t){return r.a.createElement(v.a.Row,{onClick:function(){return g(e.id)}},r.a.createElement(v.a.Cell,null,0===t&&C),r.a.createElement(v.a.Cell,null,e.id))}));return r.a.createElement("div",{className:"content"},r.a.createElement(h.a,{as:"h1"},r.a.createElement(O.a,{as:"a",size:"large",onClick:function(){return e.push("/")}},r.a.createElement(j.a,{name:"home",size:"large"})," Home"),r.a.createElement(O.a,{as:"a",size:"large",onClick:function(){return e.goBack()}},r.a.createElement(j.a,{name:"arrow up",size:"large"})," Back"),"Package: ",t),r.a.createElement(v.a,{celled:!0,selectable:!0},r.a.createElement(v.a.Body,null,b,k,w)))},w=function(){return r.a.createElement(u.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:k}),r.a.createElement(i.a,{path:"/details/:id"},r.a.createElement(C,null))))},x=(n(118),{fetchPackageRows:b}),P=Object(s.b)(null,x)((function(e){return r.a.createElement(w,null)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(46),S=n(91),B=n(93),D=[],H=Object(y.c)({packages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PACKAGES":return Object(B.a)(t.packages);default:return e}}}),R=Object(y.d)(H,Object(y.a)(S.a));l.a.render(r.a.createElement(s.a,{store:R},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.a3391009.chunk.js.map