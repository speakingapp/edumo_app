System.register(["./index-legacy-LTGG3myd.js","./index-legacy-sLfwhkM4.js","./networkService-legacy-Kfb6QfUT.js","./Authorize-legacy-CMcTS07k.js"],(function(e,t){"use strict";var l,n,o,r,a,i,u,s,c,d,f,g,y,m,b,v,h,p,x,_,w,E,A,j;return{setters:[e=>{l=e._,n=e.r,o=e.u,r=e.o,a=e.T,i=e.b,u=e.c,s=e.d,c=e.w,d=e.f,f=e.i,g=e.$,y=e.a0,m=e.h,b=e.g,v=e.H,h=e.F,p=e.a1,x=e.a2,_=e.a3,w=e.x},e=>{E=e.r},e=>{A=e.n},e=>{j=e._}],execute:function(){var S,T;!function(e){e.Documents="DOCUMENTS",e.Data="DATA",e.Library="LIBRARY",e.Cache="CACHE",e.External="EXTERNAL",e.ExternalStorage="EXTERNAL_STORAGE"}(S||(S={})),e("E",T),function(e){e.UTF8="utf8",e.ASCII="ascii",e.UTF16="utf16"}(T||e("E",T={})),E("Filesystem",{web:()=>l((()=>t.import("./web-legacy-BDIt2P6-.js")),void 0).then((e=>new e.FilesystemWeb))});const k=["src"],C={class:"px-5 py-1 rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-lg font-medium",for:"upload"},D={class:"text-3xl font-bold"},F={key:1,class:"flex min-h-screen flex-col justify-center items-center"},L={__name:"Profile",setup(e){A.getCurrentStatus().then((e=>{console.log("Current network status:",e)})),n(!1),o();const t=n(!0),l=n(!1),E=n("O'quvchi"),S=n(null);let T=n(null);r((()=>{a((e=>{if(e){const{uid:n,displayName:o,email:r}=e;S.value=e.photoURL,E.value=o,t.value=!1,l.value=!1,T=function(e){const t=new Date(e);return`${["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`}(e.metadata.creationTime)}else console.log("You are not authorized"),t.value=!1,l.value=!0}))}));const L=async e=>{const t=e.target.files[0];if(t)try{const e=await _(t);S.value=e,w(E.value,e)}catch(l){console.error("Error uploading file:",l)}},R=n(!1),M=window.matchMedia("(prefers-color-scheme: dark)"),O=e=>{var t;R.value=e,t=e,document.body.classList.toggle("dark",t)};return O(M.matches),M.addEventListener("change",(e=>O(e.matches))),(e,t)=>{const n=i("ion-title"),o=i("ion-icon"),r=i("ion-button"),a=i("ion-toolbar"),_=i("ion-header"),w=i("ion-col"),A=i("ion-row"),R=i("ion-grid"),M=i("ion-content"),O=i("ion-page");return u(),s(O,null,{default:c((()=>[d(_,{class:"ion-no-border"},{default:c((()=>[d(a,{color:"primary",class:"px-2"},{default:c((()=>[d(n,null,{default:c((()=>[f("Profil")])),_:1}),g(d(r,{"router-link":"/settings","router-direction":"forward",slot:"end",fill:"clear"},{default:c((()=>[d(o,{color:"light",icon:m(p),size:"large"},null,8,["icon"])])),_:1},512),[[y,!l.value]])])),_:1})])),_:1}),d(M,{"scroll-y":"true",fullscreen:!0},{default:c((()=>[l.value?(u(),h("div",F,[d(j)])):(u(),s(R,{key:0},{default:c((()=>[d(A,{class:"ion-align-items-center ion-justify-content-center"},{default:c((()=>[d(w,{class:"mt-4 flex flex-col items-center justify-center"},{default:c((()=>[b("img",{src:S.value,class:"mb-3 mx-auto w-16 h-16 rounded-full border-2 border-blue-600"},null,8,k),b("input",{id:"upload",type:"file",onChange:L,accept:"image/*",hidden:"",ref:"fileInput"},null,544),b("label",C,[d(o,{icon:m(x),slot:"start"},null,8,["icon"]),f(" Rasmni o'zgartirish ")]),b("h1",D,v(E.value),1),b("p",null,"Qo'shilgan: "+v(m(T)),1)])),_:1})])),_:1})])),_:1}))])),_:1})])),_:1})}}},R=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));e("P",R)}}}));