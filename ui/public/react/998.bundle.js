/*! For license information please see 998.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfixdocs_react=self.webpackChunkfixdocs_react||[]).push([[998],{232:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},308:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]])},322:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},1839:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},1998:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(6540),a=r(7767),i=r(2535),s=r(9317),o=r(3043),c=r(3451),l=r(232),u=r(8309),d=r(9369),f=r(7775),m=r(322),h=r(308),p=r(1839),y=r(4848);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function v(){v=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new T(n||[]);return a(s,"_invoke",{value:A(e,r,o)}),s}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var f="suspendedStart",m="suspendedYield",h="executing",p="completed",y={};function g(){}function b(){}function j(){}var N={};l(N,s,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(D([])));O&&O!==r&&n.call(O,s)&&(N=O);var S=j.prototype=g.prototype=Object.create(N);function P(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,i,s,o){var c=d(e[a],e,i);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==x(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,s,o)}),(function(e){r("throw",e,s,o)})):t.resolve(u).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,o)}))}o(c.arg)}var i;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return i=i?i.then(a,a):a()}})}function A(t,r,n){var a=f;return function(i,s){if(a===h)throw Error("Generator is already running");if(a===p){if("throw"===i)throw s;return{value:e,done:!0}}for(n.method=i,n.arg=s;;){var o=n.delegate;if(o){var c=k(o,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=h;var l=d(t,r,n);if("normal"===l.type){if(a=n.done?p:m,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=p,n.method="throw",n.arg=l.arg)}}}function k(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=d(a,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var s=i.arg;return s?s.done?(r[t.resultName]=s.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(x(t)+" is not iterable")}return b.prototype=j,a(S,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:b,configurable:!0}),b.displayName=l(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,l(e,c,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},P(E.prototype),l(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var s=new E(u(e,r,n,a),i);return t.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},P(S),l(S,c,"Generator"),l(S,s,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=D,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return o.type="throw",o.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;I(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function g(e,t,r,n,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,s,o=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const N=function(){var e=(0,a.g)().id,t=(0,a.Zp)(),r=b((0,n.useState)(null),2),x=r[0],j=r[1],N=b((0,n.useState)(!0),2),w=N[0],O=N[1];return(0,n.useEffect)((function(){var t=function(){var t,r=(t=v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{setTimeout((function(){var t=e,r={id:t,client:"Client ".concat(Number.parseInt(t.replace("EST-",""))%10+1),clientAddress:"123 Client St, Suite 101, New York, NY 10001",clientEmail:"client".concat(Number.parseInt(t.replace("EST-",""))%10+1,"@example.com"),amount:(1e4*Math.random()).toFixed(2),status:Number.parseInt(t.replace("EST-",""))%3==0?"Approved":Number.parseInt(t.replace("EST-",""))%3==1?"Pending":"Rejected",expiryDate:new Date(Date.now()+864e5*Number.parseInt(t.replace("EST-",""))).toISOString(),createdAt:new Date(Date.now()-Math.floor(1e10*Math.random())).toISOString(),items:[{id:1,description:"Service 1",quantity:2,unitPrice:150,total:300},{id:2,description:"Service 2",quantity:1,unitPrice:250,total:250},{id:3,description:"Materials",quantity:5,unitPrice:45,total:225}],subtotal:775,tax:77.5,total:852.5,notes:"This estimate is valid for 30 days from the date of issue."};j(r),O(!1)}),1e3)}catch(e){console.error("Error fetching estimate:",e),O(!1)}case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(e){g(i,n,a,s,o,"next",e)}function o(e){g(i,n,a,s,o,"throw",e)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[e]),(0,y.jsx)(i.P,{children:(0,y.jsxs)("div",{className:"space-y-6",children:[(0,y.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)(o.$,{variant:"ghost",size:"sm",onClick:function(){return t("/estimates")},children:(0,y.jsx)(l.A,{className:"h-4 w-4"})}),(0,y.jsx)("h1",{className:"text-2xl font-bold",children:w?"Loading...":"Estimate ".concat(null==x?void 0:x.id)}),!w&&(null==x?void 0:x.status)&&(0,y.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat("Approved"===x.status?"bg-green-100 text-green-800":"Pending"===x.status?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"),children:x.status})]}),(0,y.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,y.jsxs)(o.$,{variant:"outline",size:"sm",className:"flex items-center gap-1",children:[(0,y.jsx)(u.A,{className:"h-4 w-4"}),"Download"]}),(0,y.jsxs)(o.$,{variant:"outline",size:"sm",className:"flex items-center gap-1",children:[(0,y.jsx)(d.A,{className:"h-4 w-4"}),"Print"]}),(0,y.jsxs)(o.$,{variant:"outline",size:"sm",className:"flex items-center gap-1",children:[(0,y.jsx)(f.A,{className:"h-4 w-4"}),"Send"]}),(0,y.jsxs)(o.$,{size:"sm",className:"flex items-center gap-1",children:[(0,y.jsx)(m.A,{className:"h-4 w-4"}),"Convert to Invoice"]}),(0,y.jsxs)(o.$,{variant:"outline",size:"sm",className:"flex items-center gap-1",children:[(0,y.jsx)(h.A,{className:"h-4 w-4"}),"Edit"]}),(0,y.jsxs)(o.$,{variant:"outline",size:"sm",className:"flex items-center gap-1 text-red-600 hover:text-red-700 border-red-200 hover:border-red-300",children:[(0,y.jsx)(p.A,{className:"h-4 w-4"}),"Delete"]})]})]}),w?(0,y.jsx)("div",{className:"flex justify-center py-8",children:(0,y.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0047AB]"})}):(0,y.jsxs)("div",{className:"space-y-6",children:[(0,y.jsx)(s.Zp,{className:"p-6",children:(0,y.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Estimate Details"}),(0,y.jsxs)("div",{className:"space-y-3",children:[(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Estimate Number:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.id})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Date Created:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:new Date(x.createdAt).toLocaleDateString()})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Expiry Date:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:new Date(x.expiryDate).toLocaleDateString()})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Status:"}),(0,y.jsx)("p",{className:"text-sm",children:(0,y.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat("Approved"===x.status?"bg-green-100 text-green-800":"Pending"===x.status?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"),children:x.status})})]})]})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Client Information"}),(0,y.jsxs)("div",{className:"space-y-3",children:[(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Client:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.client})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Address:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.clientAddress})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Email:"}),(0,y.jsx)("p",{className:"text-sm font-medium",children:x.clientEmail})]})]})]})]})}),(0,y.jsxs)(s.Zp,{className:"p-6",children:[(0,y.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Estimate Items"}),(0,y.jsx)("div",{className:"overflow-x-auto",children:(0,y.jsxs)(c.XI,{children:[(0,y.jsx)(c.XI.Header,{children:(0,y.jsxs)(c.XI.Row,{children:[(0,y.jsx)(c.XI.Head,{children:"Description"}),(0,y.jsx)(c.XI.Head,{className:"text-right",children:"Quantity"}),(0,y.jsx)(c.XI.Head,{className:"text-right",children:"Unit Price"}),(0,y.jsx)(c.XI.Head,{className:"text-right",children:"Total"})]})}),(0,y.jsx)(c.XI.Body,{children:x.items.map((function(e){return(0,y.jsxs)(c.XI.Row,{children:[(0,y.jsx)(c.XI.Cell,{children:e.description}),(0,y.jsx)(c.XI.Cell,{className:"text-right",children:e.quantity}),(0,y.jsxs)(c.XI.Cell,{className:"text-right",children:["$",e.unitPrice.toFixed(2)]}),(0,y.jsxs)(c.XI.Cell,{className:"text-right",children:["$",e.total.toFixed(2)]})]},e.id)}))})]})}),(0,y.jsxs)("div",{className:"mt-6 space-y-2 border-t pt-4",children:[(0,y.jsxs)("div",{className:"flex justify-between",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Subtotal:"}),(0,y.jsxs)("p",{className:"text-sm font-medium",children:["$",x.subtotal.toFixed(2)]})]}),(0,y.jsxs)("div",{className:"flex justify-between",children:[(0,y.jsx)("p",{className:"text-sm text-gray-500",children:"Tax (10%):"}),(0,y.jsxs)("p",{className:"text-sm font-medium",children:["$",x.tax.toFixed(2)]})]}),(0,y.jsxs)("div",{className:"flex justify-between border-t pt-2",children:[(0,y.jsx)("p",{className:"text-base font-medium",children:"Total:"}),(0,y.jsxs)("p",{className:"text-base font-bold",children:["$",x.total.toFixed(2)]})]})]})]}),(0,y.jsxs)(s.Zp,{className:"p-6",children:[(0,y.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Notes"}),(0,y.jsx)("p",{className:"text-sm text-gray-600",children:x.notes})]})]})]})})}},3451:(e,t,r)=>{r.d(t,{A0:()=>b,BF:()=>j,Hj:()=>N,XI:()=>g,nA:()=>O,nd:()=>w});var n=r(6540),a=r(1986),i=r(4848);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var o=["className"],c=["className"],l=["className"],u=["className"],d=["className"],f=["className"],m=["className"],h=["className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return(t=function(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=(0,n.forwardRef)((function(e,t){var r=e.className,n=v(e,o);return(0,i.jsx)("div",{className:"relative w-full overflow-auto",children:(0,i.jsx)("table",y({ref:t,className:(0,a.cn)("w-full caption-bottom text-sm",r)},n))})}));g.displayName="Table";var b=(0,n.forwardRef)((function(e,t){var r=e.className,n=v(e,c);return(0,i.jsx)("thead",y({ref:t,className:(0,a.cn)("[&_tr]:border-b",r)},n))}));b.displayName="TableHeader";var j=(0,n.forwardRef)((function(e,t){var r=e.className,n=v(e,l);return(0,i.jsx)("tbody",y({ref:t,className:(0,a.cn)("[&_tr:last-child]:border-0",r)},n))}));j.displayName="TableBody",(0,n.forwardRef)((function(e,t){var r=e.className,n=v(e,u);return(0,i.jsx)("tfoot",y({ref:t,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r)},n))})).displayName="TableFooter";var N=(0,n.forwardRef)((function(e,t){var r=e.className,n=v(e,d);return(0,i.jsx)("tr",y({ref:t,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r)},n))}));N.displayName="TableRow";var w=(0,n.forwardRef)((function(e,t){var r=e.className,n=v(e,f);return(0,i.jsx)("th",y({ref:t,className:(0,a.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r)},n))}));w.displayName="TableHead";var O=(0,n.forwardRef)((function(e,t){var r=e.className,n=v(e,m);return(0,i.jsx)("td",y({ref:t,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r)},n))}));O.displayName="TableCell",(0,n.forwardRef)((function(e,t){var r=e.className,n=v(e,h);return(0,i.jsx)("caption",y({ref:t,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",r)},n))})).displayName="TableCaption"},7775:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]])},8309:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},9317:(e,t,r)=>{r.d(t,{Wu:()=>v,Zp:()=>x});var n=r(6540),a=r(1986),i=r(4848);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var o=["className"],c=["className"],l=["className"],u=["className"],d=["className"],f=["className"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x=(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,o);return(0,i.jsx)("div",h({ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r)},n))}));x.displayName="Card",(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,c);return(0,i.jsx)("div",h({ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r)},n))})).displayName="CardHeader",(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,l);return(0,i.jsx)("h3",h({ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",r)},n))})).displayName="CardTitle",(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,u);return(0,i.jsx)("p",h({ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r)},n))})).displayName="CardDescription";var v=(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,d);return(0,i.jsx)("div",h({ref:t,className:(0,a.cn)("p-6 pt-0",r)},n))}));v.displayName="CardContent",(0,n.forwardRef)((function(e,t){var r=e.className,n=y(e,f);return(0,i.jsx)("div",h({ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",r)},n))})).displayName="CardFooter"},9369:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(4207).A)("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]])}}]);