"use strict";(self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[]).push([[795],{7795:function(e,t,a){a.r(t),a.d(t,{default:function(){return Fe}});var s=a(3396),o=a(9242),l=a(7139);const i={class:"container-page row"},n={class:"table-menu"},d=(0,s._)("h3",{class:"tableName"},"營養評估診斷",-1),r={class:"btnList"},c={class:"input-group searchList"},m=(0,s._)("i",{class:"bi bi-search"},null,-1),u=[m],p={class:"addModal"},_=(0,s._)("i",{class:"bi bi-pencil-square"},null,-1),b=(0,s._)("span",null," 建立",-1),h=[_,b],f={class:"table-responsive"},g={class:"table table-striped table-bordered"},v=(0,s._)("thead",{class:"thead-dark"},[(0,s._)("tr",null,[(0,s._)("th",{scope:"col"},"病患ID"),(0,s._)("th",{scope:"col"},"姓名"),(0,s._)("th",{scope:"col"},"初始建立時間"),(0,s._)("th",{scope:"col"},"最近更新時間"),(0,s._)("th",{scope:"col"},"編輯")])],-1),D={class:"btn-group"},y=["onClick"],M=(0,s._)("i",{class:"bi bi-pencil-fill"},null,-1),x=[M],w=["onClick"],E=(0,s._)("i",{class:"bi bi-trash3-fill"},null,-1),S=[E];function $(e,t,a,m,_,b){const M=(0,s.up)("loading"),E=(0,s.up)("PesModal"),$=(0,s.up)("PesEditModal"),P=(0,s.up)("PesDelModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",i,[(0,s._)("div",n,[d,(0,s._)("div",r,[(0,s._)("div",c,[(0,s.wy)((0,s._)("input",{type:"text",id:"search",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>_.searchKeyWords=e),placeholder:"請輸入姓名"},null,512),[[o.nr,_.searchKeyWords]]),(0,s._)("button",{class:"btn btn-outline-success searchBtn",onClick:t[1]||(t[1]=(...e)=>b.getSearch&&b.getSearch(...e))},u)]),(0,s._)("div",p,[(0,s._)("button",{class:"btn btn-secondary",onClick:t[2]||(t[2]=e=>b.openModal(""))},h)])])]),(0,s._)("div",f,[(0,s._)("table",g,[v,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.PES_arr,(e=>((0,s.wg)(),(0,s.iD)("tbody",{key:e.diagnosis_no},[(0,s._)("tr",null,[(0,s._)("td",null,(0,l.zw)(e.patient_id),1),(0,s._)("td",null,(0,l.zw)(e.name),1),(0,s._)("td",null,(0,l.zw)(b.formatDate(e.create_time)),1),(0,s._)("td",null,(0,l.zw)(b.formatDate(e.update_time)),1),(0,s._)("td",null,[(0,s._)("div",D,[(0,s._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:t=>b.openModal("editModal",e)},x,8,y),(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>b.openModal("delModal",e)},S,8,w)])])])])))),128))])]),(0,s.Wm)(M,{active:e.isLoading},null,8,["active"])]),(0,s.Wm)(E,{"info-detail":_.PES_InfoDetails,onAddPes:t[3]||(t[3]=e=>b.closeModal(""))},null,8,["info-detail"]),(0,s.Wm)($,{"info-detail":_.PES_InfoDetails,onEditPes:t[4]||(t[4]=e=>b.closeModal("editModal"))},null,8,["info-detail"]),(0,s.Wm)(P,{"info-detail":_.PES_InfoDetails,onDeletePes:t[5]||(t[5]=e=>b.closeModal("delModal"))},null,8,["info-detail"])],64)}var P=a(2166),k=a(5513),V=a.n(k),W=a(65);const I={id:"pesModal",ref:"pesModal",class:"modal fade",tabindex:"-1","aria-labelledby":"pesModalLabel","aria-hidden":"true"},U={class:"modal-dialog modal-xl"},L=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{id:"pesModalLabel",class:"modal-title"},[(0,s._)("span",null,"建立紀錄")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),C={class:"modal-body"},A={class:"row"},q={class:"col-sm"},z={class:"row mb-3"},N={class:"form-group col-md-6"},O=(0,s._)("label",{for:"patient_id"},"病患編號：",-1),Z={class:"form-group col-md-6"},J=(0,s._)("label",{for:"patient_name"},"姓名：",-1),K={class:"form-textarea mb-4"},B=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"problem"},"Problem：")],-1),H={class:"form-textarea mb-4"},F=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"etiology"},"Etiology：")],-1),T={class:"form-textarea mb-4"},j=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"symptoms"},"Symptoms：")],-1),Y={class:"modal-footer"},Q=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function R(e,t,a,i,n,d){const r=(0,s.up)("v-field"),c=(0,s.up)("error-message"),m=(0,s.up)("v-form");return(0,s.wg)(),(0,s.iD)("div",I,[(0,s._)("div",U,[(0,s.Wm)(m,{class:"modal-content border-0"},{default:(0,s.w5)((({errors:e})=>[L,(0,s._)("div",C,[(0,s._)("div",A,[(0,s._)("div",q,[(0,s._)("div",z,[(0,s._)("div",N,[O,(0,s.Wm)(r,{id:"patient_id",name:"病患編號",type:"number",modelValue:a.infoDetail.patient_id,"onUpdate:modelValue":t[0]||(t[0]=e=>a.infoDetail.patient_id=e),rules:{required:!0,min:1,max:7,min_value:1},class:(0,l.C_)({"is-invalid":e["病患編號"]})},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"病患編號",class:"invalid-feedback"})]),(0,s._)("div",Z,[J,(0,s.Wm)(r,{id:"patient_name",name:"姓名",type:"text",modelValue:a.infoDetail.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.infoDetail.name=e),rules:{required:!0,max:10},class:(0,l.C_)({"is-invalid":e["姓名"]})},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"姓名",class:"invalid-feedback"})])]),(0,s._)("div",K,[B,(0,s.wy)((0,s._)("textarea",{id:"problem",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[2]||(t[2]=e=>a.infoDetail.problem=e),required:""},null,512),[[o.nr,a.infoDetail.problem]])]),(0,s._)("div",H,[F,(0,s.wy)((0,s._)("textarea",{id:"etiology",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[3]||(t[3]=e=>a.infoDetail.etiology=e),required:""},null,512),[[o.nr,a.infoDetail.etiology]])]),(0,s._)("div",T,[j,(0,s.wy)((0,s._)("textarea",{id:"etiology",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[4]||(t[4]=e=>a.infoDetail.symptoms=e),required:""},null,512),[[o.nr,a.infoDetail.symptoms]])])])])]),(0,s._)("div",Y,[Q,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>d.confirmPost&&d.confirmPost(...e))},"確認")])])),_:1})])],512)}var G=a(5708),X=a(3990),ee=a(579),te=a(2389),ae=a(8456);Object.keys(X.ZP).forEach((e=>{(0,G.aH)(e,X.ZP[e])})),(0,G.jQ)({generateMessage:(0,ee.NC)({zh_TW:te}),validateOnInput:!0}),(0,ee.i_)("zh_TW");var se={data(){return{fixApi:"https://140.123.173.4"}},methods:{confirmPost(){this.$store.dispatch("startLoading");const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}`;this.$http.post(e,this.infoDetail).then((e=>{this.$emit("addPes"),console.log(e.data),this.$store.dispatch("stopLoading"),(0,ae.qp)(e.data.msg)})).catch((e=>{console.log(e),(0,ae.Jt)(e.response.data.msg)}))}},computed:{...(0,W.Se)(["getUserID"]),nutritionist_id(){return this.getUserID}},props:{infoDetail:{default:{}}},emits:["addPes"],components:{VField:G.gN,VForm:G.l0,ErrorMessage:G.Bc}},oe=a(89);const le=(0,oe.Z)(se,[["render",R]]);var ie=le;const ne={id:"pesEditModal",ref:"pesEditModal",class:"modal fade",tabindex:"-1","aria-labelledby":"pesEditModalLabel","aria-hidden":"true"},de={class:"modal-dialog modal-xl"},re=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{id:"pesEditModalLabel",class:"modal-title"},[(0,s._)("span",null,"編輯紀錄")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ce={class:"modal-body"},me={class:"row"},ue={class:"col-sm"},pe={class:"row mb-3"},_e={class:"form-group col-md-4"},be=(0,s._)("label",{for:"diagnosis_no"},"病歷號碼：",-1),he={class:"form-group col-md-4"},fe=(0,s._)("label",{for:"patient_id"},"病患編號：",-1),ge={class:"form-group col-md-4"},ve=(0,s._)("label",{for:"patient_name"},"姓名：",-1),De={class:"form-textarea mb-4"},ye=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"problem"},"Problem：")],-1),Me={class:"form-textarea mb-4"},xe=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"etiology"},"Etiology：")],-1),we={class:"form-textarea mb-4"},Ee=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"symptoms"},"Symptoms：")],-1),Se={class:"modal-footer"},$e=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function Pe(e,t,a,i,n,d){const r=(0,s.up)("v-field"),c=(0,s.up)("error-message"),m=(0,s.up)("v-form");return(0,s.wg)(),(0,s.iD)("div",ne,[(0,s._)("div",de,[(0,s.Wm)(m,{class:"modal-content border-0"},{default:(0,s.w5)((({errors:e})=>[re,(0,s._)("div",ce,[(0,s._)("div",me,[(0,s._)("div",ue,[(0,s._)("div",pe,[(0,s._)("div",_e,[be,(0,s.Wm)(r,{id:"diagnosis_no",name:"病歷號碼",type:"number",modelValue:a.infoDetail.diagnosis_no,"onUpdate:modelValue":t[0]||(t[0]=e=>a.infoDetail.diagnosis_no=e),rules:{required:!0,min:1,min_value:1},class:(0,l.C_)({"is-invalid":e["病歷號碼"]}),disabled:""},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"病歷號碼",class:"invalid-feedback"})]),(0,s._)("div",he,[fe,(0,s.Wm)(r,{id:"patient_id",name:"病患編號",type:"number",modelValue:a.infoDetail.patient_id,"onUpdate:modelValue":t[1]||(t[1]=e=>a.infoDetail.patient_id=e),rules:{required:!0,min:1,max:7,min_value:1},class:(0,l.C_)({"is-invalid":e["病患編號"]}),disabled:""},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"病患編號",class:"invalid-feedback"})]),(0,s._)("div",ge,[ve,(0,s.Wm)(r,{id:"patient_name",name:"姓名",type:"text",modelValue:a.infoDetail.name,"onUpdate:modelValue":t[2]||(t[2]=e=>a.infoDetail.name=e),rules:{required:!0,max:10},class:(0,l.C_)({"is-invalid":e["姓名"]}),disabled:""},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"姓名",class:"invalid-feedback"})])]),(0,s._)("div",De,[ye,(0,s.wy)((0,s._)("textarea",{id:"problem",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[3]||(t[3]=e=>a.infoDetail.problem=e),required:""},null,512),[[o.nr,a.infoDetail.problem]])]),(0,s._)("div",Me,[xe,(0,s.wy)((0,s._)("textarea",{id:"etiology",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[4]||(t[4]=e=>a.infoDetail.etiology=e),required:""},null,512),[[o.nr,a.infoDetail.etiology]])]),(0,s._)("div",we,[Ee,(0,s.wy)((0,s._)("textarea",{id:"etiology",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[5]||(t[5]=e=>a.infoDetail.symptoms=e),required:""},null,512),[[o.nr,a.infoDetail.symptoms]])])])])]),(0,s._)("div",Se,[$e,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=(...e)=>d.confirmEdit&&d.confirmEdit(...e))},"確認")])])),_:1})])],512)}Object.keys(X.ZP).forEach((e=>{(0,G.aH)(e,X.ZP[e])})),(0,G.jQ)({generateMessage:(0,ee.NC)({zh_TW:te}),validateOnInput:!0}),(0,ee.i_)("zh_TW");var ke={data(){return{fixApi:"https://140.123.173.4"}},methods:{confirmEdit(){this.$store.dispatch("startLoading");const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}/${this.infoDetail.diagnosis_no}`;this.$http.put(e,this.infoDetail).then((e=>{this.$emit("editPes"),console.log(e.data),this.$store.dispatch("stopLoading"),(0,ae.qp)(e.data.msg)})).catch((e=>{console.log(e),(0,ae.Jt)(e.response.data.msg)}))}},computed:{...(0,W.Se)(["getUserID"]),nutritionist_id(){return this.getUserID}},props:{infoDetail:{default:{}}},emits:["editPes"],components:{VField:G.gN,VForm:G.l0,ErrorMessage:G.Bc}};const Ve=(0,oe.Z)(ke,[["render",Pe]]);var We=Ve;const Ie={id:"pesDelModal",ref:"pesDelModal",class:"modal fade",tabindex:"-1","aria-labelledby":"pesDelModalLabel","aria-hidden":"true"},Ue={class:"modal-dialog"},Le={class:"modal-content border-0"},Ce=(0,s._)("div",{class:"modal-header bg-danger text-white"},[(0,s._)("h5",{id:"pesDelModalLabel",class:"modal-title"},[(0,s._)("span",null,"刪除紀錄")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ae={class:"modal-body"},qe={class:"text-danger"},ze={class:"modal-footer"},Ne=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function Oe(e,t,a,o,i,n){return(0,s.wg)(),(0,s.iD)("div",Ie,[(0,s._)("div",Ue,[(0,s._)("div",Le,[Ce,(0,s._)("div",Ae,[(0,s.Uk)(" 是否刪除 "),(0,s._)("strong",qe,"病歷編號："+(0,l.zw)(a.infoDetail.diagnosis_no),1),(0,s.Uk)(" 紀錄(刪除後將無法恢復)。 ")]),(0,s._)("div",ze,[Ne,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>n.confirmDel&&n.confirmDel(...e))},"確認刪除")])])])],512)}var Ze={data(){return{fixApi:"https://140.123.173.4"}},methods:{confirmDel(){this.$store.dispatch("startLoading");const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}/${this.infoDetail.diagnosis_no}`;this.$http.delete(e).then((e=>{this.$emit("deletePes"),console.log(e.data),this.$store.dispatch("stopLoading"),(0,ae.qp)(e.data.msg)})).catch((e=>{console.log(e),(0,ae.Jt)(e.response.data.msg)}))}},computed:{...(0,W.Se)(["getUserID"]),nutritionist_id(){return this.getUserID}},props:{infoDetail:{default:{}}},emits:["deletePes"]};const Je=(0,oe.Z)(Ze,[["render",Oe]]);var Ke=Je,Be={data(){return{fixApi:"https://140.123.173.4",searchKeyWords:"",PES_arr:[],PES_InfoDetails:{},pesModal:{},pesEditModal:{},pesDelModal:{}}},methods:{getSearch(){this.$store.dispatch("startLoading");const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}`,t=this.searchKeyWords.trim();this.$http.get(e,{params:{keyword:t}}).then((e=>{this.PES_arr=e.data[0].result,""===t?(0,ae.tv)():(0,ae.e$)(e.data[0].total),this.searchKeyWords="",this.$store.dispatch("stopLoading")})).catch((e=>{console.log(e)}))},getAssessmentDiagnosis(){this.$store.dispatch("startLoading");const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}`;this.$http.get(e).then((e=>{this.PES_arr=e.data[0].result,this.searchKeyWords="",this.$store.dispatch("stopLoading")})).catch((e=>{console.log(e)}))},savedLocalUserID(){const e=localStorage.getItem("userid");e&&this.$store.commit("SET_USERID",e)},formatDate(e){const t=new Date(e),a=t.getFullYear(),s=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0");let l=t.getHours();const i=t.getMinutes().toString().padStart(2,"0"),n=t.getSeconds().toString().padStart(2,"0"),d=t.getHours()>=12?"PM":"AM";return l>12&&(l-=12),l=l.toString().padStart(2,"0"),`${a}/${s}/${o}, ${l}:${i}:${n} ${d}`},openModal(e,t){""===e?(this.PES_InfoDetails={},this.pesModal.show()):"editModal"===e?(this.PES_InfoDetails=JSON.parse(JSON.stringify(t)),this.pesEditModal.show()):"delModal"===e?(this.PES_InfoDetails=JSON.parse(JSON.stringify(t)),this.pesDelModal.show()):console.log("openModal Error！！")},closeModal(e){""===e?this.pesModal.hide():"editModal"===e?this.pesEditModal.hide():"delModal"===e?this.pesDelModal.hide():console.log("closeModal Error！！"),this.getAssessmentDiagnosis()}},computed:{...(0,W.Se)(["getUserID"]),...(0,W.Se)(["isLoading"]),nutritionist_id(){return this.getUserID}},components:{PesModal:ie,PesEditModal:We,PesDelModal:Ke,Loading:V()},created(){this.savedLocalUserID(),this.getAssessmentDiagnosis()},mounted(){this.pesModal=new P.u_(document.getElementById("pesModal")),this.pesEditModal=new P.u_(document.getElementById("pesEditModal")),this.pesDelModal=new P.u_(document.getElementById("pesDelModal"))}};const He=(0,oe.Z)(Be,[["render",$]]);var Fe=He}}]);
//# sourceMappingURL=795.96f24f64.js.map