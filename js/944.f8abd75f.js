"use strict";(self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[]).push([[944],{6944:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var n=s(3396),u=s(7139);const a={class:"home-page"},c={class:"page-block"},i=(0,n._)("p",null,"歡迎使用 NMS營養資訊系統",-1);function r(e,t,s,r,o,h){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",c,[(0,n._)("h2",null,[(0,n.Uk)(" 您好～ "),(0,n._)("span",null,(0,u.zw)(h.username),1),(0,n.Uk)(" 營養師 ")]),i])])}s(7658);var o=s(65),h=s(8456),p={data(){return{fixApi:"https://140.123.173.4"}},methods:{checkedLoginStatus(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hasToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e;const t=`${this.fixApi}/nutritionist/loginCheck`;this.$http.get(t).then((e=>{e.data.success&&(0,h.hf)()})).catch((()=>{(0,h.GB)(),this.$router.push("/userLogin")}))}},computed:{...(0,o.Se)(["getUserID","getUsername"]),username(){return this.getUsername}},mounted(){this.checkedLoginStatus()}},d=s(89);const l=(0,d.Z)(p,[["render",r]]);var k=l}}]);
//# sourceMappingURL=944.f8abd75f.js.map