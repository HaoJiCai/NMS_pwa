"use strict";(self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[]).push([[591],{5591:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var a=i(3396),l=i(7139),s=i(9242);const o={class:"container"},n={class:"educationType"},c=(0,a._)("div",{class:"type-title"},[(0,a._)("h3",null,"資料館")],-1),u={class:"type-bar"},h={key:0,class:"educationContent"},d={class:"content-bar"},p=(0,a._)("i",{class:"bi bi-plus-circle-fill"},null,-1),r={key:1,class:"educationDetail"};function y(t,e,i,y,w,g){const D=(0,a.up)("router-link"),k=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",n,[c,(0,a._)("ul",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.types,(t=>((0,a.wg)(),(0,a.iD)("li",{class:"type-item",key:t.eduType_id},[(0,a.Wm)(D,{to:`/frontEnd/healthEducationPage/${t.eduType_id}`,class:"type-link"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.typeName),1)])),_:2},1032,["to"])])))),128))])]),w.showDetail?((0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(k)])):((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("ul",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.items,(t=>((0,a.wg)(),(0,a.iD)("li",{class:"content-item",key:t.edu_id},[(0,a.Wm)(D,{onClick:(0,s.iM)(g.clickShowDetail,["prevent"]),to:`/frontEnd/healthEducationPage/${t.eduType_id}/${t.edu_id}`,class:"content-link"},{default:(0,a.w5)((()=>[p,(0,a._)("span",null,(0,l.zw)(t.title),1)])),_:2},1032,["onClick","to"])])))),128))])]))])}var w={data(){return{fixApi:"https://140.123.173.4",types:[],items:[],localEduType:this.eduType,showDetail:!1}},methods:{getHealthEducationType(){const t=`${this.fixApi}/healthEducation/type`;this.$http.get(t).then((t=>{this.types=t.data,this.getHealthEducationData()})).catch((t=>{console.log(t)}))},getHealthEducationData(){const t=`${this.fixApi}/healthEducation/${this.localEduType}`;this.$http.get(t).then((t=>{this.items=t.data})).catch((t=>{console.log(t)}))},clickShowDetail(){this.showDetail=!0}},props:{eduType:String},created(){this.getHealthEducationType(),this.showDetail=!1},beforeRouteUpdate(t,e){const i=t.path,a=e.path;console.log(i),console.log(a),this.localEduType=t.params.eduType,this.showDetail=!1,this.getHealthEducationData()}},g=i(89);const D=(0,g.Z)(w,[["render",y]]);var k=D}}]);
//# sourceMappingURL=591.c02ea76e.js.map