"use strict";(self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[]).push([[827],{1827:function(e,t,a){a.r(t),a.d(t,{default:function(){return Te}});var s=a(3396),l=a(9242),o=a(7139);const i={class:"container-page row"},n={class:"table-menu"},d=(0,s._)("h3",{class:"tableName"},"營養評估診斷",-1),r={class:"btnList"},c={class:"input-group searchList"},m=(0,s._)("i",{class:"bi bi-search"},null,-1),u=[m],p={class:"addModal"},_=(0,s._)("i",{class:"bi bi-pencil-square"},null,-1),b={class:"table-responsive"},f={class:"table table-striped table-bordered"},h=(0,s._)("thead",{class:"thead-dark"},[(0,s._)("tr",null,[(0,s._)("th",{scope:"col"},"病患ID"),(0,s._)("th",{scope:"col"},"姓名"),(0,s._)("th",{scope:"col"},"初始建立時間"),(0,s._)("th",{scope:"col"},"最近更新時間"),(0,s._)("th",{scope:"col"},"編輯")])],-1),g={class:"btn-group"},v=["onClick"],D=(0,s._)("i",{class:"bi bi-pencil-fill"},null,-1),y=[D],M=["onClick"],x=(0,s._)("i",{class:"bi bi-trash3-fill"},null,-1),w=[x];function E(e,t,a,m,D,x){const E=(0,s.up)("loading"),P=(0,s.up)("PesModal"),S=(0,s.up)("PesEditModal"),$=(0,s.up)("PesDelModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",i,[(0,s._)("div",n,[d,(0,s._)("div",r,[(0,s._)("div",c,[(0,s.wy)((0,s._)("input",{type:"text",id:"search",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>D.searchKeyWords=e),placeholder:"請輸入姓名"},null,512),[[l.nr,D.searchKeyWords]]),(0,s._)("button",{class:"btn btn-outline-success searchBtn",onClick:t[1]||(t[1]=(...e)=>x.getSearch&&x.getSearch(...e))},u)]),(0,s._)("div",p,[(0,s._)("button",{class:"btn btn-secondary",onClick:t[2]||(t[2]=e=>x.openModal(""))},[_,(0,s.Uk)(" 建立")])])])]),(0,s._)("div",b,[(0,s._)("table",f,[h,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(D.PES_arr,(e=>((0,s.wg)(),(0,s.iD)("tbody",{key:e.diagnosis_no},[(0,s._)("tr",null,[(0,s._)("td",null,(0,o.zw)(e.patient_id),1),(0,s._)("td",null,(0,o.zw)(e.name),1),(0,s._)("td",null,(0,o.zw)(x.formatDate(e.create_time)),1),(0,s._)("td",null,(0,o.zw)(x.formatDate(e.update_time)),1),(0,s._)("td",null,[(0,s._)("div",g,[(0,s._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:t=>x.openModal("editModal",e)},y,8,v),(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>x.openModal("delModal",e)},w,8,M)])])])])))),128))])]),(0,s.Wm)(E,{active:e.isLoading},null,8,["active"])]),(0,s.Wm)(P,{"info-detail":D.PES_InfoDetails,onAddPes:t[3]||(t[3]=e=>x.closeModal(""))},null,8,["info-detail"]),(0,s.Wm)(S,{"info-detail":D.PES_InfoDetails,onEditPes:t[4]||(t[4]=e=>x.closeModal("editModal"))},null,8,["info-detail"]),(0,s.Wm)($,{"info-detail":D.PES_InfoDetails,onDeletePes:t[5]||(t[5]=e=>x.closeModal("delModal"))},null,8,["info-detail"])],64)}var P=a(2166),S=a(5513),$=a.n(S),k=a(65);const V={id:"pesModal",ref:"pesModal",class:"modal fade",tabindex:"-1","aria-labelledby":"pesModalLabel","aria-hidden":"true"},W={class:"modal-dialog modal-xl"},U=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{id:"pesModalLabel",class:"modal-title"},[(0,s._)("span",null,"建立紀錄")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),C={class:"modal-body"},I={class:"row"},A={class:"col-sm"},L={class:"row mb-3"},q={class:"form-group col-md-6"},z=(0,s._)("label",{for:"patient_id"},"病患編號：",-1),N={class:"form-group col-md-6"},O=(0,s._)("label",{for:"patient_name"},"姓名：",-1),Z={class:"form-textarea mb-4"},J=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"problem"},"Problem：")],-1),K={class:"form-textarea mb-4"},T=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"etiology"},"Etiology：")],-1),B={class:"form-textarea mb-4"},H=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"symptoms"},"Symptoms：")],-1),F={class:"modal-footer"},j=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function Y(e,t,a,i,n,d){const r=(0,s.up)("v-field"),c=(0,s.up)("error-message"),m=(0,s.up)("v-form");return(0,s.wg)(),(0,s.iD)("div",V,[(0,s._)("div",W,[(0,s.Wm)(m,{class:"modal-content border-0"},{default:(0,s.w5)((({errors:e})=>[U,(0,s._)("div",C,[(0,s._)("div",I,[(0,s._)("div",A,[(0,s._)("div",L,[(0,s._)("div",q,[z,(0,s.Wm)(r,{id:"patient_id",name:"病患編號",type:"number",modelValue:a.infoDetail.patient_id,"onUpdate:modelValue":t[0]||(t[0]=e=>a.infoDetail.patient_id=e),rules:{required:!0,min:1,max:7,min_value:1},class:(0,o.C_)({"is-invalid":e["病患編號"]})},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"病患編號",class:"invalid-feedback"})]),(0,s._)("div",N,[O,(0,s.Wm)(r,{id:"patient_name",name:"姓名",type:"text",modelValue:a.infoDetail.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.infoDetail.name=e),rules:{required:!0,max:10},class:(0,o.C_)({"is-invalid":e["姓名"]})},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"姓名",class:"invalid-feedback"})])]),(0,s._)("div",Z,[J,(0,s.wy)((0,s._)("textarea",{id:"problem",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[2]||(t[2]=e=>a.infoDetail.problem=e),required:""},null,512),[[l.nr,a.infoDetail.problem]])]),(0,s._)("div",K,[T,(0,s.wy)((0,s._)("textarea",{id:"etiology",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[3]||(t[3]=e=>a.infoDetail.etiology=e),required:""},null,512),[[l.nr,a.infoDetail.etiology]])]),(0,s._)("div",B,[H,(0,s.wy)((0,s._)("textarea",{id:"etiology",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[4]||(t[4]=e=>a.infoDetail.symptoms=e),required:""},null,512),[[l.nr,a.infoDetail.symptoms]])])])])]),(0,s._)("div",F,[j,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>d.confirmPost&&d.confirmPost(...e))},"確認")])])),_:1})])],512)}var Q=a(5708),G=a(3990),R=a(579),X=a(2389),ee=a(8456);Object.keys(G.ZP).forEach((e=>{(0,Q.aH)(e,G.ZP[e])})),(0,Q.jQ)({generateMessage:(0,R.NC)({zh_TW:X}),validateOnInput:!0}),(0,R.i_)("zh_TW");var te={data(){return{fixApi:"https://140.123.173.4"}},methods:{confirmPost(){this.$store.dispatch("startLoading");const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}`;this.$http.post(e,this.infoDetail).then((e=>{this.$emit("addPes"),console.log(e.data),setTimeout((()=>{this.$store.dispatch("stopLoading")}),350),(0,ee.qp)(e.data.msg)})).catch((e=>{console.log(e),(0,ee.Jt)(e.response.data.msg)}))}},computed:{...(0,k.Se)(["getUserID"]),nutritionist_id(){return this.getUserID}},props:{infoDetail:{default:{}}},emits:["addPes"],components:{VField:Q.gN,VForm:Q.l0,ErrorMessage:Q.Bc}},ae=a(89);const se=(0,ae.Z)(te,[["render",Y]]);var le=se;const oe={id:"pesEditModal",ref:"pesEditModal",class:"modal fade",tabindex:"-1","aria-labelledby":"pesEditModalLabel","aria-hidden":"true"},ie={class:"modal-dialog modal-xl"},ne=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{id:"pesEditModalLabel",class:"modal-title"},[(0,s._)("span",null,"編輯紀錄")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),de={class:"modal-body"},re={class:"row"},ce={class:"col-sm"},me={class:"row mb-3"},ue={class:"form-group col-md-4"},pe=(0,s._)("label",{for:"diagnosis_no"},"病歷號碼：",-1),_e={class:"form-group col-md-4"},be=(0,s._)("label",{for:"patient_id"},"病患編號：",-1),fe={class:"form-group col-md-4"},he=(0,s._)("label",{for:"patient_name"},"姓名：",-1),ge={class:"form-textarea mb-4"},ve=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"problem"},"Problem：")],-1),De={class:"form-textarea mb-4"},ye=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"etiology"},"Etiology：")],-1),Me={class:"form-textarea mb-4"},xe=(0,s._)("div",{class:"form-label"},[(0,s._)("label",{for:"symptoms"},"Symptoms：")],-1),we={class:"modal-footer"},Ee=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function Pe(e,t,a,i,n,d){const r=(0,s.up)("v-field"),c=(0,s.up)("error-message"),m=(0,s.up)("v-form");return(0,s.wg)(),(0,s.iD)("div",oe,[(0,s._)("div",ie,[(0,s.Wm)(m,{class:"modal-content border-0"},{default:(0,s.w5)((({errors:e})=>[ne,(0,s._)("div",de,[(0,s._)("div",re,[(0,s._)("div",ce,[(0,s._)("div",me,[(0,s._)("div",ue,[pe,(0,s.Wm)(r,{id:"diagnosis_no",name:"病歷號碼",type:"number",modelValue:a.infoDetail.diagnosis_no,"onUpdate:modelValue":t[0]||(t[0]=e=>a.infoDetail.diagnosis_no=e),rules:{required:!0,min:1,min_value:1},class:(0,o.C_)({"is-invalid":e["病歷號碼"]}),disabled:""},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"病歷號碼",class:"invalid-feedback"})]),(0,s._)("div",_e,[be,(0,s.Wm)(r,{id:"patient_id",name:"病患編號",type:"number",modelValue:a.infoDetail.patient_id,"onUpdate:modelValue":t[1]||(t[1]=e=>a.infoDetail.patient_id=e),rules:{required:!0,min:1,max:7,min_value:1},class:(0,o.C_)({"is-invalid":e["病患編號"]}),disabled:""},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"病患編號",class:"invalid-feedback"})]),(0,s._)("div",fe,[he,(0,s.Wm)(r,{id:"patient_name",name:"姓名",type:"text",modelValue:a.infoDetail.name,"onUpdate:modelValue":t[2]||(t[2]=e=>a.infoDetail.name=e),rules:{required:!0,max:10},class:(0,o.C_)({"is-invalid":e["姓名"]}),disabled:""},null,8,["modelValue","class"]),(0,s.Wm)(c,{name:"姓名",class:"invalid-feedback"})])]),(0,s._)("div",ge,[ve,(0,s.wy)((0,s._)("textarea",{id:"problem",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[3]||(t[3]=e=>a.infoDetail.problem=e),required:""},null,512),[[l.nr,a.infoDetail.problem]])]),(0,s._)("div",De,[ye,(0,s.wy)((0,s._)("textarea",{id:"etiology",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[4]||(t[4]=e=>a.infoDetail.etiology=e),required:""},null,512),[[l.nr,a.infoDetail.etiology]])]),(0,s._)("div",Me,[xe,(0,s.wy)((0,s._)("textarea",{id:"etiology",type:"text",name:"textarea",class:"form-control",rows:"10",cols:"30","onUpdate:modelValue":t[5]||(t[5]=e=>a.infoDetail.symptoms=e),required:""},null,512),[[l.nr,a.infoDetail.symptoms]])])])])]),(0,s._)("div",we,[Ee,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=(...e)=>d.confirmEdit&&d.confirmEdit(...e))},"確認")])])),_:1})])],512)}Object.keys(G.ZP).forEach((e=>{(0,Q.aH)(e,G.ZP[e])})),(0,Q.jQ)({generateMessage:(0,R.NC)({zh_TW:X}),validateOnInput:!0}),(0,R.i_)("zh_TW");var Se={data(){return{fixApi:"https://140.123.173.4"}},methods:{confirmEdit(){this.$store.dispatch("startLoading");const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}/${this.infoDetail.diagnosis_no}`;this.$http.put(e,this.infoDetail).then((e=>{this.$emit("editPes"),console.log(e.data),setTimeout((()=>{this.$store.dispatch("stopLoading")}),350),(0,ee.qp)(e.data.msg)})).catch((e=>{console.log(e),(0,ee.Jt)(e.response.data.msg)}))}},computed:{...(0,k.Se)(["getUserID"]),nutritionist_id(){return this.getUserID}},props:{infoDetail:{default:{}}},emits:["editPes"],components:{VField:Q.gN,VForm:Q.l0,ErrorMessage:Q.Bc}};const $e=(0,ae.Z)(Se,[["render",Pe]]);var ke=$e;const Ve={id:"pesDelModal",ref:"pesDelModal",class:"modal fade",tabindex:"-1","aria-labelledby":"pesDelModalLabel","aria-hidden":"true"},We={class:"modal-dialog"},Ue={class:"modal-content border-0"},Ce=(0,s._)("div",{class:"modal-header bg-danger text-white"},[(0,s._)("h5",{id:"pesDelModalLabel",class:"modal-title"},[(0,s._)("span",null,"刪除紀錄")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ie={class:"modal-body"},Ae={class:"text-danger"},Le={class:"modal-footer"},qe=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function ze(e,t,a,l,i,n){return(0,s.wg)(),(0,s.iD)("div",Ve,[(0,s._)("div",We,[(0,s._)("div",Ue,[Ce,(0,s._)("div",Ie,[(0,s.Uk)(" 是否刪除 "),(0,s._)("strong",Ae,"病歷編號："+(0,o.zw)(a.infoDetail.diagnosis_no),1),(0,s.Uk)(" 紀錄(刪除後將無法恢復)。 ")]),(0,s._)("div",Le,[qe,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>n.confirmDel&&n.confirmDel(...e))},"確認刪除")])])])],512)}var Ne={data(){return{fixApi:"https://140.123.173.4"}},methods:{confirmDel(){this.$store.dispatch("startLoading");const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}/${this.infoDetail.diagnosis_no}`;this.$http.delete(e).then((e=>{this.$emit("deletePes"),console.log(e.data),setTimeout((()=>{this.$store.dispatch("stopLoading")}),350),(0,ee.qp)(e.data.msg)})).catch((e=>{console.log(e),(0,ee.Jt)(e.response.data.msg)}))}},computed:{...(0,k.Se)(["getUserID"]),nutritionist_id(){return this.getUserID}},props:{infoDetail:{default:{}}},emits:["deletePes"]};const Oe=(0,ae.Z)(Ne,[["render",ze]]);var Ze=Oe,Je={data(){return{fixApi:"https://140.123.173.4",searchKeyWords:"",PES_arr:[],PES_InfoDetails:{},pesModal:{},pesEditModal:{},pesDelModal:{}}},methods:{getSearch(){const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}`,t=this.searchKeyWords.trim();this.$http.get(e,{params:{keyword:t}}).then((e=>{this.PES_arr=e.data[0].result,""===t?(0,ee.tv)():(0,ee.e$)(e.data[0].total),this.searchKeyWords=""})).catch((e=>{console.log(e)}))},getAssessmentDiagnosis(){const e=`${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}`;this.$http.get(e).then((e=>{this.PES_arr=e.data[0].result,this.searchKeyWords=""})).catch((e=>{console.log(e)}))},formatDate(e){const t=new Date(e),a=t.getFullYear(),s=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getDate().toString().padStart(2,"0");let o=t.getHours();const i=t.getMinutes().toString().padStart(2,"0"),n=t.getSeconds().toString().padStart(2,"0"),d=t.getHours()>=12?"PM":"AM";return o>12&&(o-=12),o=o.toString().padStart(2,"0"),`${a}/${s}/${l}, ${o}:${i}:${n} ${d}`},openModal(e,t){""===e?(this.PES_InfoDetails={},this.pesModal.show()):"editModal"===e?(this.PES_InfoDetails=JSON.parse(JSON.stringify(t)),this.pesEditModal.show()):"delModal"===e?(this.PES_InfoDetails=JSON.parse(JSON.stringify(t)),this.pesDelModal.show()):console.log("openModal Error！！")},closeModal(e){""===e?this.pesModal.hide():"editModal"===e?this.pesEditModal.hide():"delModal"===e?this.pesDelModal.hide():console.log("closeModal Error！！"),this.getAssessmentDiagnosis()}},computed:{...(0,k.Se)(["getUserID"]),...(0,k.Se)(["isLoading"]),nutritionist_id(){return this.getUserID}},components:{PesModal:le,PesEditModal:ke,PesDelModal:Ze,Loading:$()},created(){this.getAssessmentDiagnosis()},mounted(){this.pesModal=new P.u_(document.getElementById("pesModal")),this.pesEditModal=new P.u_(document.getElementById("pesEditModal")),this.pesDelModal=new P.u_(document.getElementById("pesDelModal"))}};const Ke=(0,ae.Z)(Je,[["render",E]]);var Te=Ke}}]);
//# sourceMappingURL=827.ac1c37c7.js.map