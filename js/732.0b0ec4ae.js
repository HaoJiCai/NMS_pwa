"use strict";(self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[]).push([[732],{4732:function(t,e,i){i.r(e),i.d(e,{default:function(){return Bt}});var o=i(3396),l=i(7139);const s={class:"container-page-recipe"},a={class:"recipeDetail-list"},n={class:"recipeDetail-title"},r={class:"recipeDetail-btn"},d=["onClick"],c=(0,o._)("i",{class:"bi bi-pencil-fill"},null,-1),u=[c],p=["onClick"],h=(0,o._)("i",{class:"bi bi-trash3-fill"},null,-1),m=[h],_={class:"addBtn"},f=(0,o._)("i",{class:"bi bi-plus-lg"},null,-1),g=[f];function b(t,e,i,c,h,f){const b=(0,o.up)("loading"),D=(0,o.up)("RecipeModal"),y=(0,o.up)("RecipeEditModal"),v=(0,o.up)("RecipeDelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[(0,o._)("ul",a,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.recipelist,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"recipeDetail-type",key:t.recipe_id},[(0,o._)("div",n,[(0,o._)("h3",null,(0,l.zw)(t.name),1)]),(0,o._)("div",r,[(0,o._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e=>f.openModal("editModal",t)},u,8,d),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>f.openModal("delModal",t)},m,8,p)])])))),128))]),(0,o._)("div",_,[(0,o._)("button",{type:"button",onClick:e[0]||(e[0]=t=>f.openModal(""))},g)])]),(0,o.Wm)(b,{active:t.isLoading},null,8,["active"]),(0,o.Wm)(D,{"category-data":h.localCategoryID,"info-detail":h.recipe_InfoDetails,onAddRecipe:e[1]||(e[1]=t=>f.closeModal(""))},null,8,["category-data","info-detail"]),(0,o.Wm)(y,{"info-detail":h.recipe_InfoDetails,onEditRecipe:e[2]||(e[2]=t=>f.closeModal("editModal"))},null,8,["info-detail"]),(0,o.Wm)(v,{"info-detail":h.recipe_InfoDetails,onDeleteRecipe:e[3]||(e[3]=t=>f.closeModal("delModal"))},null,8,["info-detail"])],64)}var D=i(2166),y=i(5513),v=i.n(y),N=i(65),M=i(9242);const w={id:"recipeModal",ref:"recipeModal",class:"modal fade",tabindex:"-1","aria-labelledby":"recipeModalLabel","aria-hidden":"true"},C={class:"modal-dialog modal-xl container-modal"},I={class:"modal-header bg-dark text-white"},k={id:"recipeModalLabel",class:"modal-title"},x={class:"modal-body"},$={class:"row"},E={class:"col-sm body-content"},R={class:"content-header"},L={class:"form-group col content-recipeName"},J={class:"nutrition-label"},V=(0,o._)("label",{for:"nutrition"},"食材選擇：",-1),W=(0,o._)("option",{value:"",selected:"",disabled:""},"請選擇食材",-1),z=["value"],A={class:"form-group col content-nutritions"},O={class:"nutrition-selected"},S=(0,o._)("label",{for:""},"已加入：",-1),T={class:"nutrition-list"},U=(0,o._)("i",{class:"bi bi-trash3-fill"},null,-1),H=(0,o._)("span",null," 清除",-1),Z=[U,H],q={class:"form-textarea mb-4"},P=(0,o._)("div",{class:"form-label"},[(0,o._)("label",{for:"step"},"步驟做法：")],-1),B={class:"modal-footer"};function Y(t,e,i,s,a,n){const r=(0,o.up)("v-field"),d=(0,o.up)("error-message"),c=(0,o.up)("v-form");return(0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("div",C,[(0,o.Wm)(c,{class:"modal-content border-0"},{default:(0,o.w5)((({errors:t})=>[(0,o._)("div",I,[(0,o._)("h5",k,[(0,o._)("span",null,"新增"+(0,l.zw)(i.infoDetail.category_name)+"食譜",1)]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[0]||(e[0]=(...t)=>n.closeClearData&&n.closeClearData(...t))})]),(0,o._)("div",x,[(0,o._)("div",$,[(0,o._)("div",E,[(0,o._)("div",R,[(0,o._)("div",L,[(0,o.Wm)(r,{id:"recipe_name",name:"食譜名稱",type:"text",modelValue:i.infoDetail.name,"onUpdate:modelValue":e[1]||(e[1]=t=>i.infoDetail.name=t),placeholder:"請輸入食譜名稱",rules:{required:!0,max:10},class:(0,l.C_)({"is-invalid":t["食譜名稱"]})},null,8,["modelValue","class"]),(0,o.Wm)(d,{name:"食譜名稱",class:"invalid-feedback"})]),(0,o._)("div",J,[V,(0,o.wy)((0,o._)("select",{id:"nutrition","onUpdate:modelValue":e[2]||(e[2]=t=>a.selectedNutritionID=t)},[W,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.nutritions,(t=>((0,o.wg)(),(0,o.iD)("option",{value:t.nutrition_id,key:t.nutrition_id},(0,l.zw)(t.name),9,z)))),128))],512),[[M.bM,a.selectedNutritionID]]),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e[3]||(e[3]=(...t)=>n.select_Nutrition&&n.select_Nutrition(...t))},"加入")])]),(0,o._)("div",A,[(0,o._)("div",O,[S,(0,o._)("ul",T,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.selectedNutritions,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"nutrition-item",key:t.nutrition_id},[(0,o._)("span",null,(0,l.zw)(t.name),1)])))),128))]),(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[4]||(e[4]=(...t)=>n.remove_Nutrition&&n.remove_Nutrition(...t))},Z)])]),(0,o._)("div",q,[P,(0,o.wy)((0,o._)("textarea",{id:"step",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"20","onUpdate:modelValue":e[5]||(e[5]=t=>i.infoDetail.step=t),required:""},null,512),[[M.nr,i.infoDetail.step]])])])])]),(0,o._)("div",B,[(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=(...t)=>n.confirmPost&&n.confirmPost(...t))},"發佈")])])),_:1})])],512)}i(7658);var j=i(5708),K=i(3990),F=i(579),Q=i(2389),G=i(8456);Object.keys(K.ZP).forEach((t=>{(0,j.aH)(t,K.ZP[t])})),(0,j.jQ)({generateMessage:(0,F.NC)({zh_TW:Q}),validateOnInput:!0}),(0,F.i_)("zh_TW");var X={data(){return{fixApi:"https://140.123.173.4",nutritions:[],selectedNutritions:[],selectedNutritionID:""}},methods:{getNutrition(){const t=`${this.fixApi}/nutrition`;this.$http.get(t).then((t=>{this.nutritions=t.data})).catch((t=>{console.log(t)}))},select_Nutrition(){if(""!==this.selectedNutritionID)if(this.selectedNutritions.length<4){const t=this.nutritions.find((t=>t.nutrition_id===this.selectedNutritionID));t&&this.selectedNutritions.push(t),this.selectedNutritionID=""}else(0,G.Jt)("食材最多只能選擇4項");else(0,G.Jt)("未選擇食材項目")},remove_Nutrition(){0!==this.selectedNutritions.length&&(this.selectedNutritions=[],this.selectedNutritionID="")},confirmPost(){this.$store.dispatch("startLoading");const t=`${this.fixApi}/recipe/${this.categoryData}`;""===this.infoDetailCopy.name||0===this.infoDetailCopy.nutrition.length||""===this.infoDetailCopy.step?((0,G.Jt)("尚有輸入欄位未填寫"),setTimeout((()=>{this.$store.dispatch("stopLoading")}),350)):this.$http.post(t,this.infoDetailCopy).then((t=>{this.$emit("addRecipe"),console.log(t.data),setTimeout((()=>{this.$store.dispatch("stopLoading")}),350),(0,G.qp)(t.data.msg)})).catch((t=>{console.log(t),(0,G.Jt)(t.response.data.msg)}))},closeClearData(){this.selectedNutritionID="",this.selectedNutritions=[]}},computed:{infoDetailCopy(){const t={...this.infoDetail};return t.nutrition=this.selectedNutritions,t}},props:{infoDetail:{default:{}},categoryData:{default:""}},emits:["addRecipe"],components:{VField:j.gN,VForm:j.l0,ErrorMessage:j.Bc},created(){this.getNutrition(),this.selectedNutritionID="",this.selectedNutritions=[]}},tt=i(89);const et=(0,tt.Z)(X,[["render",Y]]);var it=et;const ot={id:"recipeEditModal",ref:"recipeEditModal",class:"modal fade",tabindex:"-1","aria-labelledby":"recipeEditModalLabel","aria-hidden":"true"},lt={class:"modal-dialog modal-xl container-modal"},st={class:"modal-header bg-dark text-white"},at={id:"recipeEditModalLabel",class:"modal-title"},nt={class:"modal-body"},rt={class:"row"},dt={class:"col-sm body-content"},ct={class:"content-header"},ut={class:"form-group col content-recipeName"},pt={class:"nutrition-label"},ht=(0,o._)("label",{for:"nutrition"},"食材選擇：",-1),mt=(0,o._)("option",{value:"",selected:"",disabled:""},"請選擇食材",-1),_t=["value"],ft={class:"form-group col content-nutritions"},gt={class:"nutrition-selected"},bt=(0,o._)("label",{for:""},"已加入：",-1),Dt={class:"nutrition-list"},yt=(0,o._)("i",{class:"bi bi-trash3-fill"},null,-1),vt=(0,o._)("span",null," 清除",-1),Nt=[yt,vt],Mt={class:"form-textarea mb-4"},wt=(0,o._)("div",{class:"form-label"},[(0,o._)("label",{for:"step"},"步驟做法：")],-1),Ct={class:"modal-footer"};function It(t,e,i,s,a,n){const r=(0,o.up)("v-field"),d=(0,o.up)("error-message"),c=(0,o.up)("v-form");return(0,o.wg)(),(0,o.iD)("div",ot,[(0,o._)("div",lt,[(0,o.Wm)(c,{class:"modal-content border-0"},{default:(0,o.w5)((({errors:t})=>[(0,o._)("div",st,[(0,o._)("h5",at,[(0,o._)("span",null,"編輯"+(0,l.zw)(i.infoDetail.category_name)+"食譜",1)]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[0]||(e[0]=(...t)=>n.closeClearData&&n.closeClearData(...t))})]),(0,o._)("div",nt,[(0,o._)("div",rt,[(0,o._)("div",dt,[(0,o._)("div",ct,[(0,o._)("div",ut,[(0,o.Wm)(r,{id:"recipe_name",name:"食譜名稱",type:"text",modelValue:i.infoDetail.name,"onUpdate:modelValue":e[1]||(e[1]=t=>i.infoDetail.name=t),placeholder:"請輸入食譜名稱",rules:{required:!0,max:10},class:(0,l.C_)({"is-invalid":t["食譜名稱"]})},null,8,["modelValue","class"]),(0,o.Wm)(d,{name:"食譜名稱",class:"invalid-feedback"})]),(0,o._)("div",pt,[ht,(0,o.wy)((0,o._)("select",{id:"nutrition","onUpdate:modelValue":e[2]||(e[2]=t=>a.selectedNutritionID=t)},[mt,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.nutritions,(t=>((0,o.wg)(),(0,o.iD)("option",{value:t.nutrition_id,key:t.nutrition_id},(0,l.zw)(t.name),9,_t)))),128))],512),[[M.bM,a.selectedNutritionID]]),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e[3]||(e[3]=(...t)=>n.select_Nutrition&&n.select_Nutrition(...t))},"加入")])]),(0,o._)("div",ft,[(0,o._)("div",gt,[bt,(0,o._)("ul",Dt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.selectedNutritions,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"nutrition-item",key:t.nutrition_id},[(0,o._)("span",null,(0,l.zw)(t.name),1)])))),128))]),(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[4]||(e[4]=(...t)=>n.remove_Nutrition&&n.remove_Nutrition(...t))},Nt)])]),(0,o._)("div",Mt,[wt,(0,o.wy)((0,o._)("textarea",{id:"step",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"20","onUpdate:modelValue":e[5]||(e[5]=t=>i.infoDetail.step=t),required:""},null,512),[[M.nr,i.infoDetail.step]])])])])]),(0,o._)("div",Ct,[(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=(...t)=>n.confirmEdit&&n.confirmEdit(...t))},"更新")])])),_:1})])],512)}Object.keys(K.ZP).forEach((t=>{(0,j.aH)(t,K.ZP[t])})),(0,j.jQ)({generateMessage:(0,F.NC)({zh_TW:Q}),validateOnInput:!0}),(0,F.i_)("zh_TW");var kt={data(){return{fixApi:"https://140.123.173.4",nutritions:[],selectedNutritions:[],selectedNutritionID:""}},methods:{getNutrition(){const t=`${this.fixApi}/nutrition`;this.$http.get(t).then((t=>{this.nutritions=t.data})).catch((t=>{console.log(t)}))},getSelectedNutritions(){if(this.infoDetail&&this.infoDetail.nutrition)try{this.selectedNutritions=JSON.parse(this.infoDetail.nutrition)}catch(t){console.error("Error parsing infoDetail.nutrition:",t),this.selectedNutritions=[]}},select_Nutrition(){if(""!==this.selectedNutritionID)if(this.selectedNutritions.length<4){const t=this.nutritions.find((t=>t.nutrition_id===this.selectedNutritionID));t&&this.selectedNutritions.push(t),this.selectedNutritionID=""}else(0,G.Jt)("食材最多只能選擇4項");else(0,G.Jt)("未選擇食材項目")},remove_Nutrition(){0!==this.selectedNutritions.length&&(this.selectedNutritions=[],this.selectedNutritionID="")},confirmEdit(){this.$store.dispatch("startLoading");const t=`${this.fixApi}/recipe/${this.infoDetail.category_id}/${this.infoDetail.recipe_id}`;""===this.infoDetailCopy.name||0===this.infoDetailCopy.nutrition.length||""===this.infoDetailCopy.step?((0,G.Jt)("尚有輸入欄位未填寫"),setTimeout((()=>{this.$store.dispatch("stopLoading")}),350)):this.$http.put(t,this.infoDetailCopy).then((t=>{this.$emit("editRecipe"),console.log(t.data),setTimeout((()=>{this.$store.dispatch("stopLoading")}),350),(0,G.qp)(t.data.msg)})).catch((t=>{console.log(t),(0,G.Jt)(t.response.data.msg)}))},closeClearData(){this.selectedNutritionID="",this.selectedNutritions=[]}},watch:{infoDetail:{handler(){this.getSelectedNutritions()},deep:!0,immediate:!0}},computed:{infoDetailCopy(){const t={...this.infoDetail};return t.nutrition=this.selectedNutritions,t}},props:{infoDetail:{type:Object,default:()=>({})}},emits:["editRecipe"],components:{VField:j.gN,VForm:j.l0,ErrorMessage:j.Bc},created(){this.getNutrition(),this.selectedNutritionID=""}};const xt=(0,tt.Z)(kt,[["render",It]]);var $t=xt;const Et={id:"recipeDelModal",ref:"recipeDelModal",class:"modal fade",tabindex:"-1","aria-labelledby":"recipeDelModalLabel","aria-hidden":"true"},Rt={class:"modal-dialog"},Lt={class:"modal-content border-0"},Jt={class:"modal-header bg-danger text-white"},Vt={id:"recipeDelModalLabel",class:"modal-title"},Wt=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),zt={class:"modal-body"},At={class:"text-danger"},Ot={class:"modal-footer"},St=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function Tt(t,e,i,s,a,n){return(0,o.wg)(),(0,o.iD)("div",Et,[(0,o._)("div",Rt,[(0,o._)("div",Lt,[(0,o._)("div",Jt,[(0,o._)("h5",Vt,[(0,o._)("span",null,"刪除"+(0,l.zw)(i.infoDetail.category_name)+"食譜",1)]),Wt]),(0,o._)("div",zt,[(0,o.Uk)(" 是否刪除 "),(0,o._)("strong",At,(0,l.zw)(i.infoDetail.name),1),(0,o.Uk)(" 食譜(刪除後將無法恢復)。 ")]),(0,o._)("div",Ot,[St,(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...t)=>n.confirmDel&&n.confirmDel(...t))},"確認刪除")])])])],512)}var Ut={data(){return{fixApi:"https://140.123.173.4"}},methods:{confirmDel(){this.$store.dispatch("startLoading");const t=`${this.fixApi}/recipe/${this.infoDetail.category_id}/${this.infoDetail.recipe_id}`;this.$http.delete(t).then((t=>{this.$emit("deleteRecipe"),console.log(t.data),setTimeout((()=>{this.$store.dispatch("stopLoading")}),350),(0,G.qp)(t.data.msg)})).catch((t=>{console.log(t),(0,G.Jt)(t.response.data.msg)}))}},props:{infoDetail:{default:{}}},emits:["deleteRecipe"]};const Ht=(0,tt.Z)(Ut,[["render",Tt]]);var Zt=Ht,qt={data(){return{fixApi:"https://140.123.173.4",localCategoryID:this.category_id,recipelist:[],recipe_InfoDetails:{},recipeModal:{},recipeEditModal:{},recipeDelModal:{}}},methods:{getRecipeCategory(){const t=`${this.fixApi}/recipe/${this.localCategoryID}`;this.$http.get(t).then((t=>{this.recipelist=t.data}))},openModal(t,e){""===t?(this.recipe_InfoDetails={},this.recipeModal.show()):"editModal"===t?(this.recipe_InfoDetails=JSON.parse(JSON.stringify(e)),this.recipeEditModal.show()):"delModal"===t?(this.recipe_InfoDetails=JSON.parse(JSON.stringify(e)),this.recipeDelModal.show()):console.log("openModal Error！！")},closeModal(t){""===t?this.recipeModal.hide():"editModal"===t?this.recipeEditModal.hide():"delModal"===t?this.recipeDelModal.hide():console.log("closeModal Error！！"),this.getRecipeCategory()}},computed:{...(0,N.Se)(["isLoading"])},props:{category_id:String},components:{RecipeModal:it,RecipeEditModal:$t,RecipeDelModal:Zt,Loading:v()},created(){this.getRecipeCategory()},mounted(){this.recipeModal=new D.u_(document.getElementById("recipeModal")),this.recipeEditModal=new D.u_(document.getElementById("recipeEditModal")),this.recipeDelModal=new D.u_(document.getElementById("recipeDelModal"))},beforeRouteUpdate(t,e){const i=t.path,o=e.path;console.log(i),console.log(o),this.localCategoryID=t.params.category_id,this.getRecipeCategory()}};const Pt=(0,tt.Z)(qt,[["render",b]]);var Bt=Pt}}]);
//# sourceMappingURL=732.0b0ec4ae.js.map