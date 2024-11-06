import{f as a}from"./systemServ-d46d3acb.js";import{a as r,b as m}from"./personServ-b89a8be2.js";import{d as p,E as h,b as f,_ as g,n as y,c as d,e as t,w as n,v as l,i as c,F as _,q as v,s as w,o as i,p as E}from"./index-284e2513.js";const F=p({data:()=>({valid:!1,studentId:null,form:{},gender:{},genderList:[],nameRules:[],emailRules:[]}),async created(){const e=this.$route.query.studentId;e!=null&&(this.studentId=parseInt(e.toString())),this.genderList=await a("XBM"),this.studentId!=null&&(this.form=await r(this.studentId),this.gender=h(this.genderList,this.form.gender))},methods:{async submit(){const e=await m(this.studentId,this.form);e.code==0?f.push("student-panel"):alert(e.msg)}}}),V={class:"base_form"},B=t("div",{class:"base_header"},[t("div",{class:"blue_column"}),t("div",{class:"base_title"},"学生信息")],-1),b={class:"form-div",style:{"margin-top":"5px"}},I={class:"content"},U=t("td",{colspan:"1",style:{"text-align":"right"}},"学号",-1),D={colspan:"1"},k=t("td",{colspan:"1",style:{"text-align":"right"}},"姓名",-1),A={colspan:"1"},L=t("td",{colspan:"1",style:{"text-align":"right"}},"学院",-1),S={colspan:"1"},M=t("td",{colspan:"1",style:{"text-align":"right"}},"专业",-1),$={colspan:"1"},C=t("td",{colspan:"1",style:{"text-align":"right"}},"班级",-1),N={colspan:"1"},j=t("td",{colspan:"1",style:{"text-align":"right"}},"证件号码",-1),q={colspan:"1"},O=t("td",{colspan:"1",style:{"text-align":"right"}},"性别",-1),R={colspan:"1"},z=t("option",{value:"0"},"请选择...",-1),T=["value"],X=t("td",{colspan:"1",style:{"text-align":"right"}},"出生日期",-1),G={colspan:"1"},H=t("td",{colspan:"1",style:{"text-align":"right"}},"邮箱",-1),J={colspan:"1"},K=t("td",{colspan:"1",style:{"text-align":"right"}},"电话",-1),P={colspan:"1"},Q=t("td",{colspan:"1",style:{"text-align":"right"}},"地址",-1),W={colspan:"1"},Y={colspan:"2"};function Z(e,o,x,tt,et,st){const u=y("el-date-picker");return i(),d("div",V,[B,t("div",b,[t("table",I,[t("tr",null,[U,t("td",D,[n(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.num=s),style:{width:"97%"}},null,512),[[l,e.form.num]])])]),t("tr",null,[k,t("td",A,[n(t("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.name=s),style:{width:"97%"}},null,512),[[l,e.form.name]])])]),t("tr",null,[L,t("td",S,[n(t("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.dept=s),style:{width:"97%"}},null,512),[[l,e.form.dept]])])]),t("tr",null,[M,t("td",$,[n(t("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>e.form.major=s),style:{width:"97%"}},null,512),[[l,e.form.major]])])]),t("tr",null,[C,t("td",N,[n(t("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>e.form.className=s),style:{width:"97%"}},null,512),[[l,e.form.className]])])]),t("tr",null,[j,t("td",q,[n(t("input",{"onUpdate:modelValue":o[5]||(o[5]=s=>e.form.card=s),style:{width:"97%"}},null,512),[[l,e.form.card]])])]),t("tr",null,[O,t("td",R,[n(t("select",{class:"commInput","onUpdate:modelValue":o[6]||(o[6]=s=>e.form.gender=s),style:{width:"97%"}},[z,(i(!0),d(_,null,v(e.genderList,s=>(i(),d("option",{key:s.value,value:s.value},E(s.title),9,T))),128))],512),[[c,e.form.gender]])])]),t("tr",null,[X,t("td",G,[w(u,{modelValue:e.form.birthday,"onUpdate:modelValue":o[7]||(o[7]=s=>e.form.birthday=s),size:"mini",type:"date",style:{width:"100%"},"value-format":"yyyy-MM-dd",placeholder:"选择出生日期"},null,8,["modelValue"])])]),t("tr",null,[H,t("td",J,[n(t("input",{"onUpdate:modelValue":o[8]||(o[8]=s=>e.form.email=s),style:{width:"97%"}},null,512),[[l,e.form.email]])])]),t("tr",null,[K,t("td",P,[n(t("input",{"onUpdate:modelValue":o[9]||(o[9]=s=>e.form.phone=s),style:{width:"97%"}},null,512),[[l,e.form.phone]])])]),t("tr",null,[Q,t("td",W,[n(t("input",{"onUpdate:modelValue":o[10]||(o[10]=s=>e.form.address=s),style:{width:"97%"}},null,512),[[l,e.form.address]])])]),t("tr",null,[t("td",Y,[t("button",{class:"commButton",onClick:o[11]||(o[11]=(...s)=>e.submit&&e.submit(...s))},"提交")])])])])])}const dt=g(F,[["render",Z]]);export{dt as default};