"use strict";(self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[]).push([[747],{3747:function(t,n,o){o.r(n),o.d(n,{default:function(){return _}});var i=o(3396),s=o(9242);const e={class:"wrapper"},r={class:"container_login"},a={class:"loginBlock"},u=(0,i._)("h1",null,"營養師登入",-1),l={class:"loginInputBlock"},c={for:"accountInput"},d={for:"passwordInput"};function p(t,n,o,p,h,w){return(0,i.wg)(),(0,i.iD)("div",e,[(0,i._)("div",r,[(0,i._)("div",a,[u,(0,i._)("form",l,[(0,i._)("label",c,[(0,i.wy)((0,i._)("input",{type:"text",id:"accountInput","onUpdate:modelValue":n[0]||(n[0]=t=>h.nutritionist.account=t),placeholder:"Email Address",requried:""},null,512),[[s.nr,h.nutritionist.account]])]),(0,i._)("label",d,[(0,i.wy)((0,i._)("input",{type:"password",id:"passwordInput","onUpdate:modelValue":n[1]||(n[1]=t=>h.nutritionist.password=t),placeholder:"Password",requried:"",autocomplete:"off"},null,512),[[s.nr,h.nutritionist.password]])]),(0,i._)("button",{type:"button",id:"signinBtn",class:"signinBtn",onClick:n[2]||(n[2]=(...t)=>w.login&&w.login(...t))},"登入")])])])])}o(7658);var h=o(8456),w={data(){return{nutritionist:{account:"",password:""}}},methods:{login(){const t="https://140.123.173.4",n="/nutritionist/login";this.$http.post(`${t}${n}`,this.nutritionist).then((t=>{if(console.log(t.data),t.data.success){const{token:n,expired:o,id:i,name:s}=t.data;return this.$store.commit("SET_USERID",i),this.$store.dispatch("login",s),document.cookie=`hasToken=${n}; expires=${new Date(o)};`,(0,h.oA)()}return(0,h.BL)()})).then((()=>{this.$router.push("/frontEnd")})).catch((t=>{console.log(t),(0,h.BL)()}))}}},f=o(89);const g=(0,f.Z)(w,[["render",p]]);var _=g}}]);
//# sourceMappingURL=747.f7c3979d.js.map