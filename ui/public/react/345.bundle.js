/*! For license information please see 345.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfixdocs_react=self.webpackChunkfixdocs_react||[]).push([[345],{232:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},308:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]])},345:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(6540),a=r(7767),i=r(9317),s=r(3043),o=r(6867),c=r(2762),l=r(3893),u=r(1966),d=r(211),m=r(827),f=r(232),h=r(308),p=r(1839),y=r(4848);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function v(){v=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new I(n||[]);return a(s,"_invoke",{value:A(e,r,o)}),s}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var m="suspendedStart",f="suspendedYield",h="executing",p="completed",y={};function g(){}function b(){}function j(){}var N={};l(N,s,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(D([])));O&&O!==r&&n.call(O,s)&&(N=O);var S=j.prototype=g.prototype=Object.create(N);function P(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(a,i,s,o){var c=d(e[a],e,i);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==x(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,s,o)}),(function(e){r("throw",e,s,o)})):t.resolve(u).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,o)}))}o(c.arg)}var i;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return i=i?i.then(a,a):a()}})}function A(t,r,n){var a=m;return function(i,s){if(a===h)throw Error("Generator is already running");if(a===p){if("throw"===i)throw s;return{value:e,done:!0}}for(n.method=i,n.arg=s;;){var o=n.delegate;if(o){var c=E(o,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===m)throw a=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=h;var l=d(t,r,n);if("normal"===l.type){if(a=n.done?p:f,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=p,n.method="throw",n.arg=l.arg)}}}function E(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=d(a,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var s=i.arg;return s?s.done?(r[t.resultName]=s.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(x(t)+" is not iterable")}return b.prototype=j,a(S,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:b,configurable:!0}),b.displayName=l(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,l(e,c,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},P(k.prototype),l(k.prototype,o,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var s=new k(u(e,r,n,a),i);return t.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},P(S),l(S,c,"Generator"),l(S,s,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=D,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return o.type="throw",o.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function g(e,t,r,n,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,s,o=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const N=function(){var e=(0,a.g)().id,t=(0,a.Zp)(),r=b((0,n.useState)(null),2),x=r[0],j=r[1],N=b((0,n.useState)(!0),2),w=N[0],O=N[1],S=b((0,n.useState)("overview"),2),P=S[0],k=S[1];(0,n.useEffect)((function(){var t=function(){var t,r=(t=v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{setTimeout((function(){var t={id:e,name:"Company ".concat(e),type:Number.parseInt(e)%2==0?"Corporation":"LLC",status:Number.parseInt(e)%3==0?"Active":Number.parseInt(e)%3==1?"Pending":"Inactive",employees:Math.floor(100*Math.random())+1,address:"123 Business St, Suite 101",city:"New York",state:"NY",zip:"10001",phone:"(555) 123-4567",email:"info@company".concat(e,".com"),website:"www.company".concat(e,".com"),taxId:"12-345".concat(e),createdAt:new Date(Date.now()-Math.floor(1e10*Math.random())).toISOString()};j(t),O(!1)}),1e3)}catch(e){console.error("Error fetching company:",e),O(!1)}case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(e){g(i,n,a,s,o,"next",e)}function o(e){g(i,n,a,s,o,"throw",e)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[e]);var A=[{id:"overview",label:"Overview",icon:(0,y.jsx)(c.A,{className:"h-4 w-4"})},{id:"staff",label:"Staff",icon:(0,y.jsx)(l.A,{className:"h-4 w-4"})},{id:"vehicles",label:"Vehicles",icon:(0,y.jsx)(u.A,{className:"h-4 w-4"})},{id:"partners",label:"Partners",icon:(0,y.jsx)(l.A,{className:"h-4 w-4"})},{id:"bank-accounts",label:"Bank Accounts",icon:(0,y.jsx)(d.A,{className:"h-4 w-4"})},{id:"documents",label:"Documents",icon:(0,y.jsx)(m.A,{className:"h-4 w-4"})}];return(0,y.jsxs)("div",{className:"space-y-6",children:[(0,y.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)(s.$,{variant:"ghost",size:"sm",onClick:function(){return t("/companies")},children:(0,y.jsx)(f.A,{className:"h-4 w-4"})}),(0,y.jsx)("h1",{className:"text-2xl font-bold",children:w?"Loading...":null==x?void 0:x.name}),!w&&(null==x?void 0:x.status)&&(0,y.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat("Active"===x.status?"bg-green-100 text-green-800":"Pending"===x.status?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"),children:x.status})]}),(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsxs)(s.$,{variant:"outline",size:"sm",className:"flex items-center gap-1",children:[(0,y.jsx)(h.A,{className:"h-4 w-4"}),"Edit"]}),(0,y.jsxs)(s.$,{variant:"outline",size:"sm",className:"flex items-center gap-1 text-red-600 hover:text-red-700 border-red-200 hover:border-red-300",children:[(0,y.jsx)(p.A,{className:"h-4 w-4"}),"Delete"]})]})]}),(0,y.jsxs)(o.t,{value:P,onValueChange:k,children:[(0,y.jsx)(o.t.List,{className:"w-full border-b",children:A.map((function(e){return(0,y.jsxs)(o.t.Trigger,{value:e.id,className:"flex items-center gap-2 px-4 py-2 text-sm font-medium ".concat(P===e.id?"border-b-2 border-[#0047AB] text-[#0047AB]":"text-gray-500 hover:text-gray-700"),children:[e.icon,e.label]},e.id)}))}),(0,y.jsx)(o.t.Content,{value:P,className:"pt-6",children:function(){if(w||!x)return(0,y.jsx)("div",{className:"flex justify-center py-8",children:(0,y.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0047AB]"})});switch(P){case"overview":return(0,y.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,y.jsxs)(i.Zp,{className:"p-6",children:[(0,y.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Company Information"}),(0,y.jsxs)("div",{className:"space-y-3",children:[(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Name:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.name})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Type:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.type})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Status:"}),(0,y.jsx)("p",{className:"text-sm",children:(0,y.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat("Active"===x.status?"bg-green-100 text-green-800":"Pending"===x.status?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"),children:x.status})})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Employees:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.employees})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Tax ID:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.taxId})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Created:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:new Date(x.createdAt).toLocaleDateString()})]})]})]}),(0,y.jsxs)(i.Zp,{className:"p-6",children:[(0,y.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Contact Information"}),(0,y.jsxs)("div",{className:"space-y-3",children:[(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Address:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.address})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"City:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.city})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"State:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.state})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"ZIP:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.zip})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Phone:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.phone})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Email:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.email})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Website:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.website})]})]})]})]});case"staff":return(0,y.jsxs)("div",{className:"text-center py-8",children:[(0,y.jsx)("p",{children:"Staff information will be displayed here."}),(0,y.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"Navigate to the dedicated staff page for more details."}),(0,y.jsx)(s.$,{className:"mt-4",onClick:function(){return t("/companies/".concat(e,"/staff"))},children:"View Staff"})]});case"vehicles":return(0,y.jsxs)("div",{className:"text-center py-8",children:[(0,y.jsx)("p",{children:"Vehicles information will be displayed here."}),(0,y.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"Navigate to the dedicated vehicles page for more details."}),(0,y.jsx)(s.$,{className:"mt-4",onClick:function(){return t("/companies/".concat(e,"/vehicles"))},children:"View Vehicles"})]});case"partners":return(0,y.jsxs)("div",{className:"text-center py-8",children:[(0,y.jsx)("p",{children:"Partners information will be displayed here."}),(0,y.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"Navigate to the dedicated partners page for more details."}),(0,y.jsx)(s.$,{className:"mt-4",onClick:function(){return t("/companies/".concat(e,"/partners"))},children:"View Partners"})]});case"bank-accounts":return(0,y.jsxs)("div",{className:"text-center py-8",children:[(0,y.jsx)("p",{children:"Bank accounts information will be displayed here."}),(0,y.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"Navigate to the dedicated bank accounts page for more details."}),(0,y.jsx)(s.$,{className:"mt-4",onClick:function(){return t("/companies/".concat(e,"/bank-accounts"))},children:"View Bank Accounts"})]});case"documents":return(0,y.jsxs)("div",{className:"text-center py-8",children:[(0,y.jsx)("p",{children:"Documents will be displayed here."}),(0,y.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"Upload and manage company documents."}),(0,y.jsx)(s.$,{className:"mt-4",children:"Upload Document"})]});default:return null}}()})]})]})}},1839:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},1966:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]])},6867:(e,t,r)=>{r.d(t,{t:()=>y});var n=r(6540),a=r(1986),i=r(4848);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var o=["children","value","onValueChange","className"],c=["children","className"],l=["children","value","className"],u=["children","value","className"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({value:"",onValueChange:function(){}});function y(e){var t=e.children,r=e.value,n=e.onValueChange,s=e.className,c=h(e,o);return(0,i.jsx)(p.Provider,{value:{value:r,onValueChange:n},children:(0,i.jsx)("div",m(m({className:(0,a.cn)("w-full",s)},c),{},{children:t}))})}y.List=function(e){var t=e.children,r=e.className,n=h(e,c);return(0,i.jsx)("div",m(m({className:(0,a.cn)("flex flex-wrap",r)},n),{},{children:t}))},y.Trigger=function(e){var t=e.children,r=e.value,s=e.className,o=h(e,l),c=n.useContext(p),u=c.value,d=c.onValueChange,f=u===r;return(0,i.jsx)("button",m(m({className:(0,a.cn)("px-4 py-2 text-sm font-medium transition-colors",f?"border-b-2 border-[#0047AB] text-[#0047AB]":"text-gray-500 hover:text-gray-700",s),onClick:function(){return d(r)}},o),{},{children:t}))},y.Content=function(e){var t=e.children,r=e.value,s=e.className,o=h(e,u);return n.useContext(p).value===r?(0,i.jsx)("div",m(m({className:(0,a.cn)("mt-2",s)},o),{},{children:t})):null}},9317:(e,t,r)=>{r.d(t,{Wu:()=>v,Zp:()=>x});var n=r(6540),a=r(1986),i=r(4848);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var o=["className"],c=["className"],l=["className"],u=["className"],d=["className"],m=["className"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x=(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,o);return(0,i.jsx)("div",h({ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r)},n))}));x.displayName="Card",(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,c);return(0,i.jsx)("div",h({ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r)},n))})).displayName="CardHeader",(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,l);return(0,i.jsx)("h3",h({ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",r)},n))})).displayName="CardTitle",(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,u);return(0,i.jsx)("p",h({ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r)},n))})).displayName="CardDescription";var v=(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,d);return(0,i.jsx)("div",h({ref:t,className:(0,a.cn)("p-6 pt-0",r)},n))}));v.displayName="CardContent",(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,m);return(0,i.jsx)("div",h({ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",r)},n))})).displayName="CardFooter"}}]);