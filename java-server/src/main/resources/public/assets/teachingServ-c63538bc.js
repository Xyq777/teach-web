import{B as s}from"./index-284e2513.js";async function c(e){return(await s("/api/course/getCourseList",{numName:e})).data}async function i(e){return await s("/api/course/courseDelete",{courseId:e})}async function u(e){return await s("/api/course/courseSave",e)}async function p(){return(await s("/api/score/getStudentItemOptionList",null)).itemList}async function f(){return(await s("/api/score/getCourseItemOptionList",null)).itemList}async function g(e,t){return(await s("/api/score/getScoreList",{studentId:e,courseId:t})).data}async function L(e,t,r,a){return await s("/api/score/scoreSave",{scoreId:e,studentId:t,courseId:r,mark:a})}async function l(e){return await s("/api/score/scoreDelete",{scoreId:e})}export{i as a,g as b,u as c,p as d,f as e,l as f,c as g,L as s};
