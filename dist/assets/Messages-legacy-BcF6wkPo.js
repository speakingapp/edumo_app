System.register(["./index-legacy-LTGG3myd.js","./networkService-legacy-Kfb6QfUT.js","./Offline-legacy-IjGKtpET.js","./index-legacy-sLfwhkM4.js","./_plugin-vue_export-helper-legacy-ZLWq2F6x.js"],(function(e,t){"use strict";var l,n,o,s,r,a,u,c,i,f,d,g,x,y,v,_,m,p,h;return{setters:[e=>{l=e.r,n=e.B,o=e.o,s=e.C,r=e.D,a=e.E,u=e.b,c=e.c,i=e.d,f=e.w,d=e.f,g=e.h,x=e.F,y=e.g,v=e.H,_=e.I,m=e.A},e=>{p=e.n},e=>{h=e.O},null,null],execute:function(){const t={class:"text-3xl font-bold"},j={class:"text-lg z"};e("default",{__name:"Messages",setup(e){const w=l(!0),b=l(!1),k=l(!0),z=n();return o((async()=>{if(p.getCurrentStatus().then((e=>{console.log("Current network status:",e),k.value=e})),!k.value)return void(b.value=!1);const e=z.params.id;try{const t=await s(r(a,"messages",e));t.exists()?w.value=t.data():console.error("Message not found")}catch(t){console.error("Error fetching message:",t)}finally{b.value=!1}})),(e,l)=>{const n=u("ion-icon"),o=u("ion-button"),s=u("ion-toolbar"),r=u("ion-header"),a=u("ion-col"),p=u("ion-row"),b=u("ion-grid"),z=u("ion-content"),C=u("ion-page");return c(),i(C,null,{default:f((()=>[d(r,{class:"ion-no-border"},{default:f((()=>[d(s,{color:"primary",class:"px-2"},{default:f((()=>[d(o,{"router-link":"/home","router-director":"root",fill:"clear",slot:"start"},{default:f((()=>[d(n,{class:"text-2xl text-white",icon:g(m)},null,8,["icon"])])),_:1})])),_:1})])),_:1}),d(z,{fullscreen:!0,"scroll-y":"false"},{default:f((()=>[d(b,null,{default:f((()=>[d(p,null,{default:f((()=>[d(a,{size:"12","size-md":"8","size-lg":"6","size-xl":"4",class:"mx-auto flex flex-col items-center justify-center"},{default:f((()=>[k.value||w.value?(c(),x(_,{key:1},[y("h1",t,"🔔 "+v(w.value.title),1),y("p",j,v(w.value.text),1)],64)):(c(),i(h,{key:0}))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}})}}}));
