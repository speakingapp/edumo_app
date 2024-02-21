import{_ as M,r as s,u as j,o as U,T as z,b as n,c as p,d as x,w as l,f as a,i as w,$ as B,a0 as I,h,g as c,H as T,F as $,a1 as V,a2 as Y,a3 as q,x as H}from"./index-M_SpqCHy.js";import{r as X}from"./index-oqNiFkU8.js";import{n as G}from"./networkService-GC3WorDj.js";import{_ as Q}from"./Authorize-Bxq5MwyM.js";var k;(function(t){t.Documents="DOCUMENTS",t.Data="DATA",t.Library="LIBRARY",t.Cache="CACHE",t.External="EXTERNAL",t.ExternalStorage="EXTERNAL_STORAGE"})(k||(k={}));var E;(function(t){t.UTF8="utf8",t.ASCII="ascii",t.UTF16="utf16"})(E||(E={}));X("Filesystem",{web:()=>M(()=>import("./web-zRVGrv4P.js"),__vite__mapDeps([0,1,2,3,4,5])).then(t=>new t.FilesystemWeb)});const W=["src"],J={class:"px-5 py-1 rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-lg font-medium",for:"upload"},K={class:"text-3xl font-bold"},Z={key:1,class:"flex min-h-screen flex-col justify-center items-center"},ee={__name:"Profile",setup(t){G.getCurrentStatus().then(e=>{console.log("Current network status:",e)}),s(!1),j();const g=s(!0),u=s(!1),_=s("O'quvchi"),d=s(null);let v=s(null);function A(e){const r=["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],o=new Date(e),i=r[o.getMonth()],f=o.getDate(),m=o.getFullYear();return"".concat(i," ").concat(f,", ").concat(m)}U(()=>{z(e=>{if(e){const{uid:r,displayName:o,email:i}=e;d.value=e.photoURL,_.value=o,g.value=!1,u.value=!1,v=A(e.metadata.creationTime)}else console.log("You are not authorized"),g.value=!1,u.value=!0})});const C=async e=>{const r=e.target.files[0];if(r)try{const o=await q(r);d.value=o,H(_.value,o)}catch(o){console.error("Error uploading file:",o)}},S=s(!1),b=window.matchMedia("(prefers-color-scheme: dark)"),L=e=>{document.body.classList.toggle("dark",e)},y=e=>{S.value=e,L(e)};return y(b.matches),b.addEventListener("change",e=>y(e.matches)),(e,r)=>{const o=n("ion-title"),i=n("ion-icon"),f=n("ion-button"),m=n("ion-toolbar"),P=n("ion-header"),R=n("ion-col"),F=n("ion-row"),O=n("ion-grid"),D=n("ion-content"),N=n("ion-page");return p(),x(N,null,{default:l(()=>[a(P,{class:"ion-no-border"},{default:l(()=>[a(m,{color:"primary",class:"px-2"},{default:l(()=>[a(o,null,{default:l(()=>[w("Profil")]),_:1}),B(a(f,{"router-link":"/settings","router-direction":"forward",slot:"end",fill:"clear"},{default:l(()=>[a(i,{color:"light",icon:h(V),size:"large"},null,8,["icon"])]),_:1},512),[[I,!u.value]])]),_:1})]),_:1}),a(D,{"scroll-y":"true",fullscreen:!0},{default:l(()=>[u.value?(p(),$("div",Z,[a(Q)])):(p(),x(O,{key:0},{default:l(()=>[a(F,{class:"ion-align-items-center ion-justify-content-center"},{default:l(()=>[a(R,{class:"mt-4 flex flex-col items-center justify-center"},{default:l(()=>[c("img",{src:d.value,class:"mb-3 mx-auto w-16 h-16 rounded-full border-2 border-blue-600"},null,8,W),c("input",{id:"upload",type:"file",onChange:C,accept:"image/*",hidden:"",ref:"fileInput"},null,544),c("label",J,[a(i,{icon:h(Y),slot:"start"},null,8,["icon"]),w(" Rasmni o'zgartirish ")]),c("h1",K,T(_.value),1),c("p",null,"Qo'shilgan: "+T(h(v)),1)]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})}}},le=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{E,le as P};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/web-zRVGrv4P.js","assets/index-oqNiFkU8.js","assets/index-M_SpqCHy.js","assets/index-oQxPm0VV.css","assets/networkService-GC3WorDj.js","assets/Authorize-Bxq5MwyM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
