System.register(["./index-legacy-LTGG3myd.js","./supabaseClient-legacy-9jAIcp-j.js"],(function(e,t){"use strict";var l,a,n,o,r,s,i,u,c,d,f,g;return{setters:[e=>{l=e.B,a=e.r,n=e.o,o=e.b,r=e.c,s=e.d,i=e.w,u=e.f,c=e.i,d=e.H,f=e.g},e=>{g=e.s}],execute:function(){e("default",{__name:"Mock",setup(e){const t=l().params.id,m=a([]),_=a("Yuklanmoqda");return n((async()=>{try{const{data:e,error:l}=await g.from("tests").select("*,\n      part1(\n        *\n      )").eq("id",t).single();if(l)return void console.error("Error fetching data:",l.message);e&&(m.value=e,_.value=!1,console.log(m.value))}catch(e){console.error("Error fetching data:",e.message),_.value="Internet aloqasi yo'q"}})),(e,t)=>{const l=o("ion-back-button"),a=o("ion-buttons"),n=o("ion-title"),g=o("ion-toolbar"),p=o("ion-header"),v=o("ion-col"),y=o("ion-row"),b=o("ion-grid"),x=o("ion-content"),h=o("ion-page");return r(),s(h,null,{default:i((()=>[u(p,{class:"ion-no-border"},{default:i((()=>[u(g,{color:"primary"},{default:i((()=>[u(a,{slot:"start"},{default:i((()=>[u(l,{"default-href":"/speaking"})])),_:1}),u(n,null,{default:i((()=>[c(d(m.value.title)+". "+d(m.value.topic),1)])),_:1})])),_:1})])),_:1}),u(x,{fullscreen:!0,"scroll-y":"false"},{default:i((()=>[u(b,null,{default:i((()=>[u(y,null,{default:i((()=>[u(v,{size:"12","size-md":"8","size-lg":"6","size-xl":"4",class:"mx-auto flex flex-col items-center justify-center"},{default:i((()=>[f("p",null,d(_.value),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}})}}}));