(function () {var b={KEYVAL:"NEjFQLMGv57omxxph5uoht",PLAY_PERCENT:0,WIN_PERCENT:1,POWER:2,NAME:3,CONFIDENCE_INTERVAL_LOWER:4,CONFIDENCE_INTERVAL_UPPER:5,ELO:"e",REGION:"g",PATCH:"h",TIME:"l",QUEUE:"q"};const d=(e,o=!1)=>{return o?Number(e.replace("%","")):Number(e)};const f=(e,o)=>o*(e-50)*10;const g=e=>{const o=e.map(e=>({"Champ Name":e[b.NAME],"Win Percent":e[b.WIN_PERCENT],"Play Percent":e[b.PLAY_PERCENT],Power:e[b.POWER],"95% CI Lower Bound":e[b.CONFIDENCE_INTERVAL_LOWER],"95% CI Upper Bound":e[b.CONFIDENCE_INTERVAL_UPPER]}));console.table(o)};const c=async e=>{const o=new TextEncoder().encode(e),t=await crypto.subtle.digest("SHA-1",o);return Array.from(new Uint8Array(t)).map(e=>e.toString(16).padStart(2,"0")).join("")},h=async(e,o="",t="",$="",r="",a="https://power.benc.me")=>{const p=`https://kvdb.io/${b.KEYVAL}`,N={datetime:o,patch:t,queue:$,elo:r,champions:e.slice(0,30)},s=JSON.stringify(N),E=await c(s);await fetch(`${p}/v2-${E}`,{method:"POST",body:s}),window.open(`${a}/?s=v2-${E}`,"_blank")};(async()=>{await new Promise(e=>{let t=document.getElementsByClassName("rt-tr-group").length,r=0,l=0;const n=setInterval(()=>{window.scrollTo(0,document.body.scrollHeight),t=r,r=document.getElementsByClassName("rt-tr-group").length;(t===r&&r>=183||l++>Math.ceil(7.32))&&(clearInterval(n),e())},35)}),document.body.scrollTop=document.documentElement.scrollTop=0;const e=Array.from(document.getElementsByClassName("rt-tbody")[0].childNodes),t={};for(let i=0;i<e.length;i++){const r=e[i].childNodes[0],l=r.childNodes[2].getElementsByClassName("champion-name")[0].innerHTML,n=Number(r.childNodes[8].getElementsByTagName("span")[0].innerHTML.replace(",","").replace(",","")),o=d(r.childNodes[4].getElementsByTagName("b")[0].innerHTML,!0);d(r.childNodes[6].getElementsByTagName("span")[0].innerHTML,!0);null==t[l]?t[l]={played:n,won:n*o}:(t[l].played+=n,t[l].won+=n*o)}const r=Object.values(t).reduce((e,{played:t})=>t+e,0),l=Object.keys(t).reduce((e,l)=>{const{won:n,played:o}=t[l],a=n/o/100,s=(a*(1-a)/o)**.5,c=a-1.96*s,d=a+1.96*s;return e.concat([Array.from({[b.WIN_PERCENT]:n/o,[b.PLAY_PERCENT]:100*o/r,[b.POWER]:f(n/o,100*o/r),[b.NAME]:l,[b.CONFIDENCE_INTERVAL_LOWER]:c,[b.CONFIDENCE_INTERVAL_UPPER]:d,length:6})])},[]).sort((e,t)=>t[b.POWER]-e[b.POWER]);g(l);const n=new Date,o=n.toDateString()+" "+n.toTimeString();let a="?",s="?",c="?";try{a=document.querySelector("h1.tier-list > span:nth-child(1)").innerHTML.split(" ").slice(-1)[0]}catch(d){console.error("Couldn't parse patch")}try{s=document.querySelector(".stats-page_subheader > div:nth-child(1) > strong:nth-child(1)").innerHTML}catch(d){console.error("Couldn't parse queue")}try{c=document.querySelector("div.filter-select_rank:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)").innerHTML}catch(d){console.error("Couldn't parse rank/elo")}await h(l,o,a,s,c)})();})();