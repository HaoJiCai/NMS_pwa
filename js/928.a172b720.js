"use strict";(self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[]).push([[928],{8143:function(e,s,a){a.r(s),a.d(s,{default:function(){return B}});var t=a(3396),n=a(7139);const l={class:"wrapper-info"},o={class:"container-info"},u=(0,t._)("div",{class:"title"},[(0,t._)("h2",null,"個人資料")],-1),r={class:"content"},i={class:"nameInputBlock"},c=(0,t._)("label",{for:"nameInput"},"姓名：",-1),d={class:"accountInputBlock"},p=(0,t._)("label",{for:"accountInput"},"帳號：",-1),m={class:"passwordInputBlock"},f=(0,t._)("label",{for:"passwordInput"},"密碼：",-1),h={class:"emailInputBlock"},I=(0,t._)("label",{for:"emailInput"},"電子信箱：",-1),v={class:"phoneInputBlock"},_=(0,t._)("label",{for:"phoneInput"},"手機號碼：",-1),g={class:"btnBlock"};function k(e,s,a,k,b,w){const V=(0,t.up)("v-field"),$=(0,t.up)("error-message"),W=(0,t.up)("v-form");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",o,[u,(0,t._)("div",r,[(0,t.Wm)(W,{class:"infoInputBlock"},{default:(0,t.w5)((({errors:e})=>[(0,t._)("div",i,[c,(0,t.Wm)(V,{type:"text",id:"nameInput",name:"姓名",modelValue:b.userInfo.name,"onUpdate:modelValue":s[0]||(s[0]=e=>b.userInfo.name=e),placeholder:"請輸入姓名",rules:{required:!0,max:10},class:(0,n.C_)({"is-invalid":e["姓名"]})},null,8,["modelValue","class"]),(0,t.Wm)($,{name:"姓名",class:"invalid-feedback"})]),(0,t._)("div",d,[p,(0,t.Wm)(V,{type:"text",id:"accountInput",name:"帳號",modelValue:b.userInfo.account,"onUpdate:modelValue":s[1]||(s[1]=e=>b.userInfo.account=e),placeholder:"請輸入帳號",rules:{required:!0,max:16,regex:/^[^\u4e00-\u9fa5]+$/},class:(0,n.C_)({"is-invalid":e["帳號"]})},null,8,["modelValue","class"]),(0,t.Wm)($,{name:"帳號",class:"invalid-feedback"})]),(0,t._)("div",m,[f,(0,t.Wm)(V,{type:"password",id:"passwordInput",name:"密碼",modelValue:b.userInfo.password,"onUpdate:modelValue":s[2]||(s[2]=e=>b.userInfo.password=e),placeholder:"請輸入密碼",rules:{required:!0,max:16,regex:/^[^\u4e00-\u9fa5]+$/},class:(0,n.C_)({"is-invalid":e["密碼"]})},null,8,["modelValue","class"]),(0,t.Wm)($,{name:"密碼",class:"invalid-feedback"})]),(0,t._)("div",h,[I,(0,t.Wm)(V,{type:"email",id:"emailInput",name:"電子信箱",modelValue:b.userInfo.email,"onUpdate:modelValue":s[3]||(s[3]=e=>b.userInfo.email=e),placeholder:"請輸入email",rules:{required:!0,email:!0,max:30},class:(0,n.C_)({"is-invalid":e["電子信箱"]})},null,8,["modelValue","class"]),(0,t.Wm)($,{name:"電子信箱",class:"invalid-feedback"})]),(0,t._)("div",v,[_,(0,t.Wm)(V,{type:"tel",id:"phoneInput",name:"手機號碼",modelValue:b.userInfo.phone,"onUpdate:modelValue":s[4]||(s[4]=e=>b.userInfo.phone=e),placeholder:"請輸入手機號碼",rules:{required:!0,min:10,max:10,regex:/^09\d{8}$/},class:(0,n.C_)({"is-invalid":e["手機號碼"]})},null,8,["modelValue","class"]),(0,t.Wm)($,{name:"手機號碼",class:"invalid-feedback"})]),(0,t._)("div",g,[(0,t._)("button",{type:"button",class:"updateInfo",onClick:s[5]||(s[5]=(...e)=>w.updateInfo&&w.updateInfo(...e))},"更新"),(0,t._)("button",{type:"button",class:"backStep",onClick:s[6]||(s[6]=(...e)=>w.backStep&&w.backStep(...e))},"返回")])])),_:1})])])])}a(7658);var b=a(5708),w=a(3990),V=a(579),$=a(2389),W=a(8456);Object.keys(w.ZP).forEach((e=>{(0,b.aH)(e,w.ZP[e])})),(0,b.jQ)({generateMessage:(0,V.NC)({zh_TW:$}),validateOnInput:!0}),(0,V.i_)("zh_TW");var x={data(){return{userInfo:{}}},methods:{getUserInfo(){const e="https://140.123.173.4",s="/nutritionist/info",a=localStorage.getItem("userid");this.$http.get(`${e}${s}/${a}`).then((e=>{this.userInfo={...e.data[0]}}))},updateInfo(){const e="https://140.123.173.4",s="/nutritionist/info",a=localStorage.getItem("userid"),t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,n=/^09\d{8}$/,l=/[\u4e00-\u9fa5]/;""===this.userInfo.name||""===this.userInfo.account||""===this.userInfo.password||""===this.userInfo.email||""===this.userInfo.phone?(0,W.Jt)("請填寫完整資訊"):t.test(this.userInfo.email)?n.test(this.userInfo.phone)?this.userInfo.name.length>10?(0,W.Jt)("姓名不能超過10個字元"):this.userInfo.account.length>16||this.userInfo.password.length>16?(console.log(this.userInfo.account,this.userInfo.password),(0,W.Jt)("帳號與密碼不能超過16個字元")):l.test(this.userInfo.account)||l.test(this.userInfo.password)?(0,W.Jt)("帳號與密碼不能包含中文"):this.$http.put(`${e}${s}/${a}`,this.userInfo).then((e=>{console.log(e.data),e.data.success?((0,W.qp)(e.data.msg),this.$router.push("/userLogin")):(0,W.Jt)(e.data.msg)})).catch((e=>{console.log(e),(0,W.Jt)("更新資料失敗")})):(0,W.Jt)("請確認手機號碼格式"):(0,W.Jt)("請確認電子信箱格式")},backStep(){this.$router.push("/frontEnd/homePage")}},components:{VField:b.gN,VForm:b.l0,ErrorMessage:b.Bc},created(){this.getUserInfo()}},C=a(89);const y=(0,C.Z)(x,[["render",k]]);var B=y}}]);
//# sourceMappingURL=928.a172b720.js.map