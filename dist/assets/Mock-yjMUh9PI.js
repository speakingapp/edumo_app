import{B as v,r as l,o as x,b as o,c as y,d as q,w as e,f as t,i as w,H as r,g as z}from"./index-M_SpqCHy.js";import{s as B}from"./supabaseClient-O_oIoB1U.js";const I={__name:"Mock",setup(N){const i=v().params.id,a=l([]),s=l("Yuklanmoqda");return x(async()=>{try{const{data:n,error:c}=await B.from("tests").select("*,\n      part1(\n        *\n      )").eq("id",i).single();if(c){console.error("Error fetching data:",c.message);return}n&&(a.value=n,s.value=!1,console.log(a.value))}catch(n){console.error("Error fetching data:",n.message),s.value="Internet aloqasi yo'q"}}),(n,c)=>{const _=o("ion-back-button"),u=o("ion-buttons"),d=o("ion-title"),f=o("ion-toolbar"),p=o("ion-header"),m=o("ion-col"),g=o("ion-row"),b=o("ion-grid"),h=o("ion-content"),k=o("ion-page");return y(),q(k,null,{default:e(()=>[t(p,{class:"ion-no-border"},{default:e(()=>[t(f,{color:"primary"},{default:e(()=>[t(u,{slot:"start"},{default:e(()=>[t(_,{"default-href":"/speaking"})]),_:1}),t(d,null,{default:e(()=>[w(r(a.value.title)+". "+r(a.value.topic),1)]),_:1})]),_:1})]),_:1}),t(h,{fullscreen:!0,"scroll-y":"false"},{default:e(()=>[t(b,null,{default:e(()=>[t(g,null,{default:e(()=>[t(m,{size:"12","size-md":"8","size-lg":"6","size-xl":"4",class:"mx-auto flex flex-col items-center justify-center"},{default:e(()=>[z("p",null,r(s.value),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{I as default};
