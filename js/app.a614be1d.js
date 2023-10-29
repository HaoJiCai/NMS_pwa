(function(){"use strict";var e={38:function(e,n,t){var o=t(9242),r=t(6265),i=t.n(r),a=t(6423),s=t(5513),c=t.n(s),l=t(2698),u=t(9907);(0,u.z)("/NMS_pwa/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=t(3396);function f(e,n){const t=(0,d.up)("router-view");return(0,d.wg)(),(0,d.j4)(t)}var g=t(89);const p={},h=(0,g.Z)(p,[["render",f]]);var m=h,v=t(2483);function b(e,n,t,o,r,i){const a=(0,d.up)("navbarFrontEnd"),s=(0,d.up)("router-view");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(a),(0,d.Wm)(s)],64)}var A=t(7139),_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAANUlEQVRIx2NgGAWjgIHhv8P/ejKgA6ZB9f/JAfU0NIhaXht8YDTWRmNtNNZGY2001kbBwAEAEpIAvhcxy3gAAAAASUVORK5CYII=",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAG0lEQVQ4y2NgGLngPxGAMg2jfhj1w9Dxw2ACABW1HvAhyuU1AAAAAElFTkSuQmCC";const E={class:"navbar navbar-expand-lg navbar-dark bg-secondary"},k={class:"collapse navbar-collapse pageBar",id:"navbarNav"},y=(0,d._)("div",{class:"logo"},[(0,d._)("h1",null,[(0,d._)("a",{href:"/NMS_pwa/#/frontEnd"},"NMS")]),(0,d._)("h2",{class:"logo_name"},"營養管理系統")],-1),C={class:"logoType"},S=(0,d._)("img",{class:"buttonBar",src:_,alt:"outline_reorder_white_36dp.png"},null,-1),x=[S],B=(0,d._)("img",{class:"buttonBar",src:w,alt:"outline_reorder_white_24dp.png"},null,-1),T=[B],N=(0,d._)("div",{class:"logo_mobile"},[(0,d._)("h1",null,[(0,d._)("a",{href:"/NMS_pwa/#/frontEnd"},"NMS")]),(0,d._)("h2",{class:"logo_name"},"營養管理系統")],-1),M={class:"funcBtn"},L={class:"nav-item"},P={class:"nav-item"},O={class:"nav-item"},U={class:"nav-item"},I={class:"navbar-nav loginBar"},j={class:"dropdown"},D={key:0,type:"button",id:"userDropdown",class:"btn dropdown-toggle text-light","data-bs-toggle":"dropdown","aria-expanded":"false"},R=(0,d._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-person",viewBox:"0 0 16 16"},[(0,d._)("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})],-1),$=(0,d._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-person",viewBox:"0 0 16 16"},[(0,d._)("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})],-1),z={class:"dropdown-menu dropdown-menu-dark","aria-labelledby":"userDropdown",style:{"min-width":"30px"}};function G(e,n,t,r,i,a){const s=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("nav",E,[(0,d._)("div",{class:(0,A.C_)(["container-fluid bar",{barMargin:i.isbarMargin}])},[(0,d._)("div",k,[y,(0,d._)("div",C,[(0,d._)("a",{href:"#",class:"logoTypeIpad",onClick:n[0]||(n[0]=(0,o.iM)(((...e)=>a.toggleBar_mobile&&a.toggleBar_mobile(...e)),["prevent"])),"aria-label":"打開選單"},x),(0,d._)("a",{href:"#",class:"logoTypePhone",onClick:n[1]||(n[1]=(0,o.iM)(((...e)=>a.toggleBar_mobile&&a.toggleBar_mobile(...e)),["prevent"])),"aria-label":"打開選單"},T)]),N,(0,d._)("div",M,[(0,d._)("ul",{class:(0,A.C_)(["navbar-nav functionBar",{active:i.isActive}])},[(0,d._)("li",L,[(0,d.Wm)(s,{to:"/frontEnd/patientRecordSearchPage",class:"nav-link",onClick:(0,o.iM)(a.toggleBar_close,["prevent"])},{default:(0,d.w5)((()=>[(0,d.Uk)("病患紀錄篩查 ")])),_:1},8,["onClick"])]),(0,d._)("li",P,[(0,d.Wm)(s,{to:"/frontEnd/nutritionalCarePage",class:"nav-link",onClick:(0,o.iM)(a.toggleBar_close,["prevent"])},{default:(0,d.w5)((()=>[(0,d.Uk)("營養照護專區 ")])),_:1},8,["onClick"])]),(0,d._)("li",O,[(0,d.Wm)(s,{to:"/frontEnd/healthEducationPage/1",class:"nav-link",onClick:(0,o.iM)(a.toggleBar_close,["prevent"])},{default:(0,d.w5)((()=>[(0,d.Uk)("衛教專欄 ")])),_:1},8,["onClick"])]),(0,d._)("li",U,[(0,d.Wm)(s,{to:"/frontEnd/inpatientMealPage",class:"nav-link",onClick:(0,o.iM)(a.toggleBar_close,["prevent"])},{default:(0,d.w5)((()=>[(0,d.Uk)("食譜管理 ")])),_:1},8,["onClick"])])],2),(0,d._)("ul",I,[(0,d._)("div",j,[a.isLoggedIn?((0,d.wg)(),(0,d.iD)("button",D,[R,(0,d._)("span",null,(0,A.zw)(a.isLoggedIn?a.username:"登入"),1)])):((0,d.wg)(),(0,d.j4)(s,{key:1,to:"/",class:"nav-link text-light"},{default:(0,d.w5)((()=>[$,(0,d._)("span",null,(0,A.zw)(a.isLoggedIn?a.username:"登入"),1)])),_:1})),(0,d._)("ul",z,[(0,d._)("li",null,[(0,d._)("button",{onClick:n[2]||(n[2]=(...e)=>a.logout&&a.logout(...e)),class:"dropdown-item logoutBtn",type:"button"},"登出")])])])])])])],2)])}t(7658);var F=t(65),W={data(){return{isActive:!1,isbarMargin:!1}},methods:{logout(){this.$store.dispatch("logout"),this.$router.push("/userLogin")},toggleBar_mobile(){this.isActive=!this.isActive,this.isbarMargin=!this.isbarMargin},toggleBar_close(){this.isActive=!1,this.isbarMargin=!1}},computed:{...(0,F.Se)(["getUserID","getUsername"]),isLoggedIn(){return!!this.$store.state.username},username(){return this.getUsername}},mounted(){this.isbarMargin=!1}};const H=(0,g.Z)(W,[["render",G]]);var Q=H,V=t(8456),Z={data(){return{fixApi:"https://140.123.173.4",api:""}},methods:{checkedLoginStatus(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hasToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,console.log(e);const n=`${this.fixApi}/nutritionist/loginCheck`;this.$http.get(n,{withCredentials:!0}).then((e=>{e.data.success&&(0,V.hf)()})).catch((()=>{(0,V.GB)()}))}},components:{navbarFrontEnd:Q},mounted(){}};const K=(0,g.Z)(Z,[["render",b]]);var Y=K;const q=[{path:"/",redirect:"/userLogin"},{path:"/frontEnd",name:"FrontEnd",component:Y,children:[{path:"patientRecordSearchPage",name:"PatientRecordSearchPage",component:()=>Promise.all([t.e(70),t.e(131)]).then(t.bind(t,5131))},{path:"nutritionalCarePage",name:"NutritionalCarePage",component:()=>t.e(384).then(t.bind(t,5384)),children:[{path:"assessmentDiagnosis",name:"AssessmentDiagnosis",component:()=>Promise.all([t.e(70),t.e(349),t.e(827)]).then(t.bind(t,1827))},{path:"interventionAssistance",name:"InterventionAssistance",component:()=>t.e(658).then(t.bind(t,1658))},{path:"surveillanceEvaluation",name:"SurveillanceEvaluation",component:()=>t.e(814).then(t.bind(t,5814))}]},{path:"healthEducationPage/:eduType",name:"HealthEducationPage",component:()=>t.e(591).then(t.bind(t,5591)),props:!0,default:"1",children:[{path:":eduId",props:!0,component:()=>t.e(797).then(t.bind(t,2797))}]},{path:"inpatientMealPage",name:"InpatientMealPage",component:()=>t.e(113).then(t.bind(t,1113)),children:[{path:":category_id",props:!0,component:()=>Promise.all([t.e(70),t.e(349),t.e(150)]).then(t.bind(t,5150))}]}]},{path:"/userLogin",name:"login",component:()=>t.e(747).then(t.bind(t,3747))}],J=(0,v.p7)({history:(0,v.r5)(),routes:q});var X=J,ee=(0,F.MT)({state:{id:null,username:"",isLoading:!1},getters:{getUserID:e=>e.id,getUsername:e=>e.username,isLoading:e=>e.isLoading},mutations:{SET_USERID(e,n){e.id=n},SET_USERNAME(e,n){e.username=n},CLEAR_USERID(e){e.id=null},CLEAR_USERNAME(e){e.username=""},SET_LOADING(e,n){e.isLoading=n}},actions:{login({commit:e},n){e("SET_USERNAME",n)},logout({commit:e}){e("CLEAR_USERNAME")},startLoading({commit:e}){e("SET_LOADING",!0)},stopLoading({commit:e}){e("SET_LOADING",!1)}},modules:{}});const ne=(0,o.ri)(m);ne.use(a.Z,i()),ne.use(l.Z),ne.use(ee),ne.use(X),ne.use(c()),ne.mount("#app")},8456:function(e,n,t){t.d(n,{BL:function(){return c},GB:function(){return u},Jt:function(){return f},e$:function(){return h},hf:function(){return l},oA:function(){return s},qp:function(){return d},tv:function(){return p}});var o=t(2492),r=t.n(o);const i={loginText:"登入成功！！",loginErrorText:"登入失敗！！",checkSuccessText:"身分驗證成功",checkErrorText:"身分驗證失敗，無法讀取資料",addText:"新增成功！！",editText:"編輯成功！！",deleteText:"刪除成功！！"},a=r().mixin({toast:!0,position:"top",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",r().stopTimer),e.addEventListener("mouseleave",r().resumeTimer)}});function s(){a.fire({icon:"success",title:`${i.loginText}`})}function c(){a.fire({icon:"error",title:`${i.loginErrorText}`})}function l(){a.fire({icon:"success",title:`${i.checkSuccessText}`})}function u(){a.fire({icon:"error",title:`${i.checkErrorText}`})}function d(e){a.fire({icon:"success",title:e})}function f(e){a.fire({icon:"error",title:e})}const g=r().mixin({toast:!0,position:"center",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",r().stopTimer),e.addEventListener("mouseleave",r().resumeTimer)}});function p(){g.fire({icon:"warning",title:"搜尋輸入欄，請輸入關鍵字"})}function h(e){g.fire({icon:"success",title:`已搜尋到 ${e} 筆相關資料`})}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{70:"78dd1d14",113:"10011eb4",131:"d1555d3f",150:"0394f551",349:"aa3b6c83",384:"c6512167",591:"c02ea76e",658:"92139bca",747:"f7c3979d",797:"88212da6",814:"6edb3347",827:"ac1c37c7"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{70:"78b9dc1e",113:"ff6897d7",131:"a0956945",150:"4416cddf",384:"8af91905",591:"2db74a56",658:"b91d6548",747:"a5911aed",797:"aa4b0544",827:"e5e176e4"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue3_pwa:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=o),e[o]=[r];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(g);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(t)})),n)return n(t)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/NMS_pwa/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),s=t.p+a;if(n(a,s))return r();e(o,s,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={70:1,113:1,131:1,150:1,384:1,591:1,658:1,747:1,797:1,827:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),s=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var u=c(t)}for(n&&n(o);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(38)}));o=t.O(o)})();
//# sourceMappingURL=app.a614be1d.js.map