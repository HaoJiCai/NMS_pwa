"use strict";(self["webpackChunkvue3_pwa"]=self["webpackChunkvue3_pwa"]||[]).push([[54],{1054:function(t,e,o){o.r(e),o.d(e,{default:function(){return B}});var i=o(3396),n=o(9242),a=o(7139);const s={id:"app"},l={for:"search"},h={class:"input-group mb-3"},d=(0,i._)("i",{class:"bi bi-search"},null,-1),r=[d],c={class:"table-responsive"},p={class:"table table-striped table-bordered"},u=(0,i._)("thead",{class:"thead-dark"},[(0,i._)("tr",null,[(0,i._)("th",{scope:"col"},"姓名"),(0,i._)("th",{scope:"col"},"性別"),(0,i._)("th",{scope:"col"},"身分證字號"),(0,i._)("th",{scope:"col"},"電子信箱"),(0,i._)("th",{scope:"col"},"手機"),(0,i._)("th",{scope:"col"})])],-1),b=["onClick"],m=(0,i._)("i",{class:"bi bi-eye-fill"},null,-1),_=[m];function C(t,e,o,d,m,C){const f=(0,i.up)("PatientInfoDetailsModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",s,[(0,i._)("label",l,[(0,i._)("div",h,[(0,i.wy)((0,i._)("input",{type:"text",id:"search",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>m.searchKeyWords=t),placeholder:"輸入關鍵字"},null,512),[[n.nr,m.searchKeyWords]]),(0,i._)("button",{class:"btn btn-outline-success searchBtn",onClick:e[1]||(e[1]=(...t)=>C.searchKeyword&&C.searchKeyword(...t))},r)])]),(0,i._)("div",c,[(0,i._)("table",p,[u,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.patients,(t=>((0,i.wg)(),(0,i.iD)("tbody",{key:t.patient_id},[(0,i._)("tr",null,[(0,i._)("td",null,(0,a.zw)(t.name),1),(0,i._)("td",null,(0,a.zw)(C.genderText[t.gender]),1),(0,i._)("td",null,(0,a.zw)(t.ID_Number),1),(0,i._)("td",null,(0,a.zw)(t.email),1),(0,i._)("td",null,(0,a.zw)(t.phone),1),(0,i._)("td",null,[(0,i._)("button",{class:"btn btn-outline-secondary",onClick:e=>C.showDetails(t.patient_id)},_,8,b)])])])))),128))])])]),(0,i.Wm)(f,{"patientinfo-detail":m.healthConditions},null,8,["patientinfo-detail"])],64)}var f=o(2166),w=o(8456);const g={id:"patientInfoDetailsModal",ref:"patientInfoDetailsModal",class:"modal",tabindex:"-1",role:"dialog"},y={class:"modal-dialog",role:"document"},$={class:"modal-content"},D={class:"modal-header"},v={class:"modal-title"},I=(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),k=["innerHTML"],K=(0,i._)("div",{class:"modal-footer"},[(0,i._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉")],-1);function x(t,e,o,n,s,l){return(0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",y,[(0,i._)("div",$,[(0,i._)("div",D,[(0,i._)("h5",v,(0,a.zw)(o.patientinfoDetail.modalTitle),1),I]),(0,i._)("div",{class:"modal-body",innerHTML:o.patientinfoDetail.modalContent},null,8,k),K])])],512)}var M={data(){return{api:"https://140.123.173.4/patient/healthConditions"}},methods:{},props:{patientinfoDetail:{default:{}}}},T=o(89);const W=(0,T.Z)(M,[["render",x]]);var z=W,A={data(){return{fixApi:"https://140.123.173.4",searchKeyWords:"",patients:[],patientInfoDetails_modal:{},healthConditions:{modalTitle:"",modalContent:""}}},computed:{genderText(){return{0:"女",1:"男"}}},methods:{searchKeyword(){const t=`${this.fixApi}/patient/`,e=this.searchKeyWords.trim();this.$http.get(t,{params:{keyword:e}}).then((t=>{console.log(t.data),this.patients=t.data[0].result,""===e?(0,w.tv)():(0,w.e$)(t.data[0].total),this.searchKeyWords=""})).catch((t=>{console.log(t)}))},search(){const t=`${this.fixApi}/patient/`;this.$http.get(t).then((t=>{console.log(t.data),this.patients=t.data[0].result,this.searchKeyWords=""})).catch((t=>{console.log(t)}))},showDetails(t){const e=`${this.fixApi}/patient/healthConditions/${t}`;this.$http.get(e).then((t=>{this.healthConditions=t.data,this.healthConditions.modalTitle=`${this.healthConditions.name} 詳細資料`,this.healthConditions.modalContent=`飲食醫囑：${this.healthConditions.doctorOrder}<br>活動狀態：${this.healthConditions.activeStatus}<br>運動情況：${this.healthConditions.sportsStatus}<br>症狀：${this.healthConditions.symptom}<br>疾病：${this.healthConditions.disease}<br>營養知識：${this.healthConditions.knowledge}<br>遵從度：${this.healthConditions.compliance}<br>身高：${this.healthConditions.height}<br>體重：${this.healthConditions.weight}<br>BMI：${this.healthConditions.bmi}<br>體重變化：${this.healthConditions.weight_change}<br>總攝（灌）食量/天：${this.healthConditions.caloriesEaten} 大卡<br>總需求量/天：${this.healthConditions.caloriesDemand} 大卡<br>`,console.log(this.healthConditions.modalContent),this.patientInfoDetails_modal.show()})).catch((t=>{console.log(t),this.healthConditions.modalTitle="錯誤",this.healthConditions.modalContent="獲取用戶資訊失敗。請稍後再試。",this.patientInfoDetails_modal.show()}))}},components:{PatientInfoDetailsModal:z},created(){this.search()},mounted(){const t=new f.u_(document.getElementById("patientInfoDetailsModal"));this.patientInfoDetails_modal=t}};const H=(0,T.Z)(A,[["render",C]]);var B=H}}]);
//# sourceMappingURL=54.1467012e.js.map