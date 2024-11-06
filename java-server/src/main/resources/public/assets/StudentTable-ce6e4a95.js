import{d as f,b as m,m as w,_ as k,n as r,c as C,e as u,s as a,x as l,o as y,y as n,p as s}from"./index-284e2513.js";import{g as B,s as E}from"./personServ-b89a8be2.js";import{a as F,m as g}from"./messageBox-2cdc502c.js";const v=f({data:()=>({numName:"",dataList:[],pagination:{currentPage:1,pageSize:10,dataTotal:0}}),created(){this.getDataPage()},methods:{doQuery(){this.pagination.currentPage=1,this.getDataPage()},handleChangePage(t){this.pagination.currentPage=t,this.getDataPage()},async getDataPage(){const t=await B(this.numName,this.pagination.currentPage);this.pagination.dataTotal=t.data.dataTotal,this.pagination.pageSize=t.data.pageSize,this.dataList=t.data.dataList},addItem(){m.push({name:"StudentInfo"})},editItem(t){m.push({name:"StudentInfo",query:{studentId:t}})},async deleteItem(t){if(!await F("确认删除学生吗?"))return;const c=await E(t);c.code==0?g(this,"删除成功"):g(this,c.msg)},familyMember(t){m.push({name:"FamilyMember",query:{studentId:t}})},async doExport(){await w("/api/student/getStudentListExcl","学生.xlsx",{numName:this.numName})!=200&&g(this,"导出失败！")}}}),D={class:"base_form"},z=u("div",{class:"base_header"},[u("div",{class:"blue_column"}),u("div",{class:"base_title"},"学生管理")],-1),P={class:"base_query_oneLine",style:{width:"97%"}},I={class:"query_left"},N={class:"query_right"},S={class:"table-content"},$={class:"pagin"};function A(t,i,c,L,T,V){const d=r("el-button"),b=r("el-input"),o=r("el-table-column"),_=r("el-table"),h=r("el-pagination");return y(),C("div",D,[z,u("div",P,[u("div",I,[a(d,{class:"commButton",size:"mini",onClick:i[0]||(i[0]=e=>t.addItem())},{default:l(()=>[n("添加")]),_:1})]),u("div",N,[a(b,{modelValue:t.numName,"onUpdate:modelValue":i[1]||(i[1]=e=>t.numName=e)},{default:l(()=>[n("学号或姓名")]),_:1},8,["modelValue"]),a(d,{class:"commButton",size:"small",onClick:i[2]||(i[2]=e=>t.doQuery())},{default:l(()=>[n("查询")]),_:1}),a(d,{class:"commButton",size:"small",onClick:i[3]||(i[3]=e=>t.doExport())},{default:l(()=>[n("导出")]),_:1})])]),u("div",S,[a(_,{data:t.dataList,size:"mini","header-cell-style":{color:"#2E2E2E",fontSize:"10px",fontWeight:"400",background:"rgb(242,242,242)"},"row-style":{height:"10px"},"cell-style":{padding:"2px"},style:{width:"100%"}},{default:l(()=>[a(o,{label:"序号",fixed:"left",width:"50",color:"black"},{default:l(e=>[n(s(e.$index+1),1)]),_:1}),a(o,{label:"学号",color:"black",align:"center",width:"100"},{default:l(e=>[n(s(e.row.num),1)]),_:1}),a(o,{label:"姓名",color:"black",align:"center",width:"100"},{default:l(e=>[n(s(e.row.name),1)]),_:1}),a(o,{label:"院系",color:"black",align:"center",width:"100"},{default:l(e=>[n(s(e.row.dept),1)]),_:1}),a(o,{label:"专业",color:"black",align:"center",width:"100"},{default:l(e=>[n(s(e.row.major),1)]),_:1}),a(o,{label:"班级",color:"black",align:"center",width:"100"},{default:l(e=>[n(s(e.row.className),1)]),_:1}),a(o,{label:"证件号码",color:"black",align:"center",width:"100"},{default:l(e=>[n(s(e.row.card),1)]),_:1}),a(o,{label:"性别",color:"black",align:"center",width:"100"},{default:l(e=>[n(s(e.row.genderName),1)]),_:1}),a(o,{label:"出生日期",color:"black",align:"center"},{default:l(e=>[n(s(e.row.birthday),1)]),_:1}),a(o,{label:"邮箱",color:"black",align:"center"},{default:l(e=>[n(s(e.row.email),1)]),_:1}),a(o,{label:"电话",color:"black",align:"center"},{default:l(e=>[n(s(e.row.phone),1)]),_:1}),a(o,{label:"地址",color:"black",align:"center"},{default:l(e=>[n(s(e.row.address),1)]),_:1}),a(o,{label:"操作",color:"black",align:"center",width:"260"},{default:l(e=>[a(d,{class:"commButton",size:"mini",onClick:p=>t.editItem(e.row.studentId)},{default:l(()=>[n("基本信息")]),_:2},1032,["onClick"]),a(d,{class:"commButton",size:"mini",onClick:p=>t.familyMember(e.row.studentId)},{default:l(()=>[n("家庭成员")]),_:2},1032,["onClick"]),a(d,{class:"commButton",size:"mini",onClick:p=>t.deleteItem(e.row.studentId)},{default:l(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"])]),u("div",$,[a(h,{background:"",style:{"margin-top":"15px"},total:t.pagination.dataTotal,"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,onCurrentChange:t.handleChangePage,layout:"total, prev, pager, next, jumper"},null,8,["total","current-page","page-size","onCurrentChange"])])])}const j=k(v,[["render",A]]);export{j as default};
