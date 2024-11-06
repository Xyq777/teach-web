import{b as p,d as I,e as _,s as g,f as v}from"./teachingServ-c63538bc.js";import{m as r,a as B}from"./messageBox-2cdc502c.js";import{d as y,_ as E,c as l,e as t,w as i,i as c,F as d,q as a,v as f,o as n,p as u}from"./index-284e2513.js";const b=y({data:()=>({scoreList:[],studentId:null,courseId:null,editedItem:{},studentList:[],courseList:[],deleteId:-1}),computed:{},created(){this.initialize()},methods:{async initialize(){this.scoreList=await p(this.studentId,this.courseId),this.studentList=await I(),this.courseList=await _()},async query(){this.scoreList=await p(this.studentId,this.courseId)},addItem(){this.editedItem={},document.getElementById("favDialog").show()},editItem(s){this.editedItem=s,document.getElementById("favDialog").show()},close(){document.getElementById("favDialog").close()},async confirm(){this.close();const s=await g(this.editedItem.scoreId,this.editedItem.studentId,this.editedItem.courseId,this.editedItem.mark);s.code==0?(r(this,"保存成功"),this.query()):r(this,s.msg)},async deleteItem(s){if(!await B("确认删除吗?"))return;const m=await v(s);m.code==0?(r(this,"删除成功"),this.query()):r(this,m.msg)}}}),F={class:"base_form"},k=t("div",{class:"base_header"},[t("div",{class:"blue_column"}),t("div",{class:"base_title"},"课程管理")],-1),D={class:"base_query_oneLine"},L={class:"query_left"},C={class:"query_right"},w=t("span",{style:{"margin-top":"5px"}},"学生",-1),A=t("option",{value:"0"},"请选择...",-1),$=["value"],q=t("span",{style:{"margin-top":"5px"}},"课程",-1),N=t("option",{value:"0"},"请选择...",-1),S=["value"],V={class:"table_center",style:{"margin-top":"5px"}},U={class:"content"},z=t("tr",{class:"table_th"},[t("td",null,"学号"),t("td",null,"姓名"),t("td",null,"班级"),t("td",null,"课程号"),t("td",null,"课程名"),t("td",null,"学分"),t("td",null,"成绩"),t("td",null,"操作")],-1),M=["onClick"],O=["onClick"],T={id:"favDialog",onclose:"close()",style:{position:"absolute",top:"300px",left:"300px",width:"300px",height:"210px"}},j=t("div",{class:"base_title"},"成绩添加修改对话框",-1),G={class:"dialog-div",style:{"margin-top":"5px"}},H={class:"dialog-content"},J=t("td",{colspan:"1",style:{"text-align":"right"}},"课程号",-1),K={colspan:"1"},P=t("option",{value:"0"},"请选择...",-1),Q=["value"],R=t("td",{colspan:"1",style:{"text-align":"right"}},"课程名",-1),W={colspan:"1"},X=t("option",{value:"0"},"请选择...",-1),Y=["value"],Z=t("td",{colspan:"1",style:{"text-align":"right"}},"成绩",-1),x={colspan:"1"},tt={colspan:"2"};function et(s,o,m,st,ot,lt){return n(),l(d,null,[t("div",F,[k,t("div",D,[t("div",L,[t("button",{class:"commButton",onClick:o[0]||(o[0]=e=>s.addItem())},"添加")]),t("div",C,[w,i(t("select",{class:"commInput","onUpdate:modelValue":o[1]||(o[1]=e=>s.studentId=e)},[A,(n(!0),l(d,null,a(s.studentList,e=>(n(),l("option",{key:e.id,value:e.id},u(e.title),9,$))),128))],512),[[c,s.studentId]]),q,i(t("select",{class:"commInput","onUpdate:modelValue":o[2]||(o[2]=e=>s.courseId=e)},[N,(n(!0),l(d,null,a(s.courseList,e=>(n(),l("option",{key:e.id,value:e.id},u(e.title),9,S))),128))],512),[[c,s.courseId]]),t("button",{style:{"margin-left":"5px"},class:"commButton",onClick:o[3]||(o[3]=e=>s.query())},"查询")])]),t("div",V,[t("table",U,[z,(n(!0),l(d,null,a(s.scoreList,e=>(n(),l("tr",{key:e.scoreId},[t("td",null,u(e.studentNum),1),t("td",null,u(e.studentName),1),t("td",null,u(e.className),1),t("td",null,u(e.courseNum),1),t("td",null,u(e.courseName),1),t("td",null,u(e.credit),1),t("td",null,u(e.mark),1),t("td",null,[t("button",{class:"table_edit_button",onClick:h=>s.editItem(e)},"编辑",8,M),t("button",{class:"table_delete_button",onClick:h=>s.deleteItem(e.scoreId)},"删除",8,O)])]))),128))])])]),t("dialog",T,[j,t("div",G,[t("table",H,[t("tr",null,[J,t("td",K,[i(t("select",{class:"commInput","onUpdate:modelValue":o[4]||(o[4]=e=>s.editedItem.studentId=e)},[P,(n(!0),l(d,null,a(s.studentList,e=>(n(),l("option",{key:e.id,value:e.id},u(e.title),9,Q))),128))],512),[[c,s.editedItem.studentId]])])]),t("tr",null,[R,t("td",W,[i(t("select",{class:"commInput","onUpdate:modelValue":o[5]||(o[5]=e=>s.editedItem.courseId=e)},[X,(n(!0),l(d,null,a(s.courseList,e=>(n(),l("option",{key:e.id,value:e.id},u(e.title),9,Y))),128))],512),[[c,s.editedItem.courseId]])])]),t("tr",null,[Z,t("td",x,[i(t("input",{"onUpdate:modelValue":o[6]||(o[6]=e=>s.editedItem.mark=e),class:"commInput"},null,512),[[f,s.editedItem.mark]])])]),t("tr",null,[t("td",tt,[t("button",{class:"commButton",onClick:o[7]||(o[7]=e=>s.close()),style:{"margin-right":"30px"}},"取消"),t("button",{class:"commButton",onClick:o[8]||(o[8]=e=>s.confirm())},"确认")])])])])])],64)}const it=E(b,[["render",et]]);export{it as default};