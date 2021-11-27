(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/**\r\n * Body CSS\r\n */\r\n\r\n html,\r\n body {\r\n   height: 100%;\r\n }\r\n \r\n html,\r\n body,\r\n input,\r\n textarea,\r\n button {\r\n   -webkit-font-smoothing: antialiased;\r\n   -moz-osx-font-smoothing: grayscale;\r\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n }\r\n \r\n \r\n /**\r\n  * Sidebar CSS\r\n  */\r\n \r\n #sidebar {\r\n   background-color: #2196F3;\r\n   padding: 15px;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n   #sidebar {\r\n     position: fixed;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 180px;\r\n     height: 100%;\r\n     padding-top: 30px;\r\n   }\r\n }\r\n \r\n \r\n /**\r\n  * Content CSS\r\n  */\r\n @media (min-width: 768px) {\r\n   #content {\r\n     margin-left: 180px;\r\n   }\r\n }\r\n\r\n .floating-btn{\r\n   position: fixed;\r\n   bottom: 50px;\r\n   right: 50px;\r\n }\r\n\r\n .auth-modal{\r\n   max-width: 700px;\r\n   max-height: 500px;\r\n   margin: 100px auto;\r\n   background-color: #fff;\r\n   overflow-y: hidden;\r\n   padding: 1rem;\r\n }\r\n\r\n .auth-modal h1{\r\n   text-align: center;\r\n }",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],u=a[c]||0,l="".concat(c," ").concat(u);a[c]=u+1;var p=n(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var u=n(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),d=n.n(s),c=n(216),u=n.n(c),l=n(589),p=n.n(l),f=n(28),m={};function h(e){return e.length>=10}function v(e,t){let n=document.createElement("div");n.classList.add("auth-modal");let r=`<div>${e}</div>\n       <div>${t}</div>\n    `;n.innerHTML=r,mui.overlay("on",n)}m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class b{static create(e){return fetch("https://question-project-app-default-rtdb.europe-west1.firebasedatabase.app/questions.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>e)).then(y).then(b.renderList)}static htmlToList(e){return e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:"<p>У вас еще нету вопросов!</p>"}static fetch(e){return e?fetch(`https://question-project-app-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p> Ошибка ${e.error} </p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve("<p>У вас нету токена доступа!</p>")}static renderList(){let e=g();const t=document.querySelector(".list"),n=e.length?e.map(x).join(""):'<div class="mui--text-headline">Вы не задали никаких вопрос!</div>';t.innerHTML=n}}function y(e){const t=g();t.push(e),localStorage.setItem("questions",JSON.stringify(t))}function g(){return JSON.parse(localStorage.getItem("questions")||"[]")}function x(e){return`\n            <div class="mui--text-black-54">\n                ${new Date(e.date).toLocaleDateString()}\n                ${new Date(e.date).toLocaleTimeString()}\n            </div>\n            <div>\n                ${e.text}\n            </div>\n            <br>\n    `}const S=document.getElementById("form"),w=S.querySelector("#question-input"),T=S.querySelector(".submit-btn"),L=document.getElementById("modal-btn");function E(e){e.preventDefault();const t=e.target.querySelector("#email").value,n=e.target.querySelector("#password").value,r=e.target.querySelector("#enter-btn");r.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFLKmb3nxaYXfXBIu9l6EOZ3Tww4sYCF8",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(t,n).then(b.fetch).then(j).then((()=>r.disabled=!1))}function j(e){"string"==typeof e?v("Ошибка",e):v("Список вопросов",b.htmlToList(e))}S.addEventListener("submit",(function(e){if(e.preventDefault(),h(w.value)){const e={text:w.value.trim(),date:(new Date).toJSON()};T.disabled=!0,b.create(e).then((()=>{w.value="",T.disabled=!1,w.className=""}))}})),L.addEventListener("click",(function(){v("Авторизация",'\n    <form class="mui-form" id="auth-form">\n    <div class="mui-textfield mui-textfield--float-label">\n      <input type="text" id="email" required>\n      <label for="email">Email</label>\n    </div>\n    <div class="mui-textfield mui-textfield--float-label">\n      <input type="password" id="password" required>\n      <label for="password">Password</label>\n    </div>\n    <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary" id="enter-btn">Войти</button>\n  </form>\n    \n    '),document.getElementById("auth-form").addEventListener("submit",E)})),w.addEventListener("input",(()=>{T.disabled=!h(w.value)})),window.addEventListener("load",b.renderList)})()})();