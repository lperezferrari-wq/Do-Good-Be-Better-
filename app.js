const startDate=new Date("2026-08-18T00:00:00"), endDate=new Date("2026-10-31T00:00:00");
const checklistItems=["AM skincare + SPF","PM skincare","Bible study","Intentional movement","Nourishing meals","Take fiber supplement","Hydration focus","10-minute tidy / reset","Kind self-talk","Work goal / priority tasks"];
const moods=[["😣","rough"],["😕","low"],["😌","okay"],["😊","good"],["✨","great"]];
const quotes=["You do not need a perfect day to build a beautiful life.","Discipline can be gentle. Consistency can be loving.","Small choices repeated with care become a different life.","Your body deserves partnership, not punishment.","You are allowed to become someone you are proud of slowly.","A reset does not require a Monday.","Keep showing up. Your future self is built in ordinary moments."];
const verses=["“I can do all things through Christ who strengthens me.” — Philippians 4:13","“She is clothed with strength and dignity.” — Proverbs 31:25","“Create in me a clean heart, O God, and renew a steadfast spirit within me.” — Psalm 51:10","“The Lord is my strength and my shield; my heart trusts in Him.” — Psalm 28:7","Prayer: Lord, help me care for my body, mind, and life with patience, wisdom, and gratitude today.","Prayer: God, quiet the pressure to be perfect. Help me choose what is healthy, peaceful, and sustainable.","“Let all that you do be done in love.” — 1 Corinthians 16:14"];
const affirmations=["I take care of myself because I am worth caring for.","I can be disciplined without being cruel to myself.","My body is getting stronger, and I am learning to trust it.","I am becoming more confident through the promises I keep to myself.","I do not need to earn food, rest, beauty, or kindness.","I am allowed to take up space while I grow.","I am building a life that feels as good as it looks."];

const foods={
 "Greek yogurt (1 cup)":[130,23,0],"Egg (1 large)":[72,6,0],"Chicken breast (4 oz)":[185,35,0],
 "Salmon (4 oz)":[235,25,0],"Ground turkey 93% (4 oz)":[170,22,0],"Tofu (4 oz)":[105,12,2],
 "Oats (1/2 cup dry)":[150,5,4],"Rice (1 cup cooked)":[205,4,1],"Potato (medium)":[160,4,4],
 "Sweet potato (medium)":[115,2,4],"Whole wheat toast (1 slice)":[90,4,2],"Banana (medium)":[105,1,3],
 "Apple (medium)":[95,0,4],"Berries (1 cup)":[80,1,8],"Avocado (1/2)":[120,2,5],
 "Black beans (1/2 cup)":[115,8,8],"Broccoli (1 cup)":[55,4,5],"Spinach (2 cups)":[14,2,1],
 "Peanut butter (2 tbsp)":[190,7,2],"Cottage cheese (1 cup)":[180,25,0],"Protein shake (1 serving)":[160,25,2]
};
const recipes=[
 {name:"Greek Yogurt Power Bowl",tags:["breakfast","easy","protein"],detail:"Greek yogurt + berries + oats or granola + chia/flax if you like.",cal:380,pro:28},
 {name:"Egg + Avocado Toast",tags:["breakfast","whole foods"],detail:"2 eggs + whole wheat toast + avocado + fruit.",cal:430,pro:20},
 {name:"Chicken Rice Bowl",tags:["lunch","recovery","meal prep"],detail:"Chicken + rice + roasted broccoli + avocado or olive-oil dressing.",cal:560,pro:42},
 {name:"Turkey Taco Bowl",tags:["lunch","fiber","meal prep"],detail:"Ground turkey + rice + black beans + salsa + lettuce + Greek yogurt.",cal:590,pro:40},
 {name:"Salmon Potato Plate",tags:["dinner","recovery"],detail:"Salmon + roasted potato + green veggie + lemon.",cal:575,pro:34},
 {name:"Pesto Chicken Pasta",tags:["dinner","run day"],detail:"Chicken + pasta + spinach + pesto + tomatoes.",cal:620,pro:42},
 {name:"Loaded Sweet Potato",tags:["dinner","fiber"],detail:"Sweet potato + black beans + turkey or chicken + salsa + avocado.",cal:520,pro:32},
 {name:"Protein Smoothie",tags:["snack","post-workout"],detail:"Milk of choice + protein powder + banana + berries + peanut butter.",cal:390,pro:30}
];

const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const datePicker=document.getElementById("datePicker"); datePicker.min=iso(startDate);datePicker.max=iso(endDate);
const now=new Date(); let init=now<startDate?startDate:(now>endDate?endDate:now); datePicker.value=iso(init);
const keyFor=d=>"glow74_"+d, key=()=>keyFor(datePicker.value);
const loadDate=d=>JSON.parse(localStorage.getItem(keyFor(d))||"{}"), load=()=>loadDate(datePicker.value), save=d=>localStorage.setItem(key(),JSON.stringify(d));
const daysBetween=(a,b)=>Math.round((a-b)/86400000);
const allDates=()=>Array.from({length:75},(_,i)=>{let d=new Date(startDate);d.setDate(d.getDate()+i);return iso(d)});

function renderHeader(){
 const d=new Date(datePicker.value+"T00:00:00"), idx=daysBetween(d,startDate);
 document.getElementById("dayLabel").textContent=`Day ${Math.max(1,Math.min(74,idx+1))} of 74`;
 document.getElementById("daysLeft").textContent=Math.max(0,daysBetween(endDate,d));
 document.getElementById("quote").textContent=quotes[idx%quotes.length];
 document.getElementById("verse").textContent=verses[idx%verses.length];
 document.getElementById("affirmation").textContent=affirmations[idx%affirmations.length];
}
function renderChecklist(){
 const d=load(); d.checks=d.checks||{};
 const box=document.getElementById("checklist");
 let controls=box.querySelectorAll("input[data-check]");
 if(!controls.length){
   box.innerHTML=checklistItems.map((x,i)=>`<label class="check"><input type="checkbox" data-check="${i}"><span>${x}</span></label>`).join("");
   controls=box.querySelectorAll("input[data-check]");
 }
 controls.forEach((input,i)=>{
   input.checked=!!d.checks[i];
   const label=input.closest(".check");
   if(label) label.classList.toggle("done",input.checked);
   input.onchange=()=>{
     const a=load(); a.checks=a.checks||{}; a.checks[i]=input.checked; save(a); renderChecklist(); renderAnalytics(); renderWeek();
   };
 });
 const n=Object.values(d.checks).filter(Boolean).length;
 document.getElementById("checkCount").textContent=`${n} / ${checklistItems.length}`;
 document.getElementById("progressBar").style.width=(100*n/checklistItems.length)+"%";
}
function renderMoods(){const d=load(),b=document.getElementById("moods");b.innerHTML="";moods.forEach(([e,t],i)=>{const x=document.createElement("button");x.className="mood"+(d.mood===i?" active":"");x.innerHTML=`${e}<span>${t}</span>`;x.onclick=()=>{const a=load();a.mood=i;save(a);renderAll()};b.appendChild(x)})}
const simple=["energy","moodNote","sleepHours","wakeTime","sleepQuality","digestion","proud","tomorrow","workGoal","workWin"];
function bind(){const d=load();simple.forEach(id=>{const el=document.getElementById(id);el.value=d[id]||"";el.oninput=()=>{let a=load();a[id]=el.value;save(a);renderAnalytics()}});let show=localStorage.getItem("glow74_showCalories")==="1";document.getElementById("showCalories").checked=show;document.getElementById("showCalories").onchange=e=>{localStorage.setItem("glow74_showCalories",e.target.checked?"1":"0");renderMeals()}}
function populateFoods(){const sel=document.getElementById("foodPreset");if(sel.options.length>1)return;Object.keys(foods).forEach(f=>{let o=document.createElement("option");o.value=f;o.textContent=f;sel.appendChild(o)});sel.onchange=()=>{if(!sel.value)return;document.getElementById("mealText").value=sel.value;const s=parseFloat(document.getElementById("servings").value)||1,[c,p,f]=foods[sel.value];document.getElementById("caloriesInput").value=Math.round(c*s);document.getElementById("proteinGrams").value=Math.round(p*s);document.getElementById("fiberGrams").value=(f*s).toFixed(1)}}
function addMeal(){
 const txt=document.getElementById("mealText").value.trim();if(!txt)return;const d=load();d.meals=d.meals||[];
 d.meals.push({type:document.getElementById("mealType").value,text:txt,cal:+document.getElementById("caloriesInput").value||0,protein:+document.getElementById("proteinGrams").value||0,fiber:+document.getElementById("fiberGrams").value||0,whole:document.getElementById("wholeFood").value});
 save(d);["mealText","caloriesInput","proteinGrams","fiberGrams"].forEach(x=>document.getElementById(x).value="");document.getElementById("foodPreset").value="";renderAll()
}
function removeMeal(i){const d=load();d.meals.splice(i,1);save(d);renderAll()}
function renderMeals(){
 const d=load();d.meals=d.meals||[];const show=localStorage.getItem("glow74_showCalories")==="1";document.querySelectorAll(".calorieOnly").forEach(x=>x.style.display=show?"block":"none");
 const b=document.getElementById("mealList");b.innerHTML="";let cal=0,p=0,f=0,w=0;
 d.meals.forEach((m,i)=>{cal+=+m.cal||0;p+=+m.protein||0;f+=+m.fiber||0;if(m.whole==="Mostly whole foods")w++;let meta=[m.protein?`${m.protein}g protein`:"",m.fiber?`${m.fiber}g fiber`:"",show&&m.cal?`~${m.cal} cal`:"",m.whole||""].filter(Boolean).join(" · ");let e=document.createElement("div");e.className="entry";e.innerHTML=`<div><strong>${m.type}</strong> — ${m.text}<div class="small">${meta}</div></div><button class="mini" onclick="removeMeal(${i})">×</button>`;b.appendChild(e)});
 document.getElementById("calTotal").textContent=Math.round(cal);document.getElementById("proteinTotal").textContent=Math.round(p)+"g";document.getElementById("foodFiberTotal").textContent=Math.round(f)+"g";document.getElementById("wholeCount").textContent=w;
}
function addExercise(){
 let min=+document.getElementById("exerciseMinutes").value||0;if(!min)return;const d=load();d.exercise=d.exercise||[];
 d.exercise.push({type:document.getElementById("exerciseType").value,min,distance:+document.getElementById("distance").value||0,rpe:+document.getElementById("rpe").value||0,notes:document.getElementById("exerciseNotes").value.trim()});
 save(d);["exerciseMinutes","distance","rpe","exerciseNotes"].forEach(x=>document.getElementById(x).value="");renderAll()
}
function removeExercise(i){const d=load();d.exercise.splice(i,1);save(d);renderAll()}
function renderExercise(){const d=load();d.exercise=d.exercise||[];const b=document.getElementById("exerciseList");b.innerHTML="";d.exercise.forEach((x,i)=>{let meta=[x.distance?`${x.distance} mi`:"",x.rpe?`RPE ${x.rpe}`:"",x.notes||""].filter(Boolean).join(" · ");let e=document.createElement("div");e.className="entry";e.innerHTML=`<div><strong>${x.type}</strong> — ${x.min} min<div class="small">${meta}</div></div><button class="mini" onclick="removeExercise(${i})">×</button>`;b.appendChild(e)})}
function completionFor(ds){const d=loadDate(ds);let c=d.checks||{},n=Object.values(c).filter(Boolean).length;return n/checklistItems.length}
function renderWeek(){
 const cur=new Date(datePicker.value+"T00:00:00"), dow=cur.getDay(), mon=new Date(cur);mon.setDate(cur.getDate()-((dow+6)%7));const b=document.getElementById("weekView");b.innerHTML="";
 let last=new Date(mon);last.setDate(mon.getDate()+6);document.getElementById("weekRange").textContent=`${mon.toLocaleDateString(undefined,{month:"short",day:"numeric"})} – ${last.toLocaleDateString(undefined,{month:"short",day:"numeric"})}`;
 for(let i=0;i<7;i++){let d=new Date(mon);d.setDate(mon.getDate()+i);let ds=iso(d),pct=completionFor(ds);let mood=loadDate(ds).mood;let el=document.createElement("div");el.className="day"+(ds===datePicker.value?" active":"");let cls=pct>=.75?"good":pct>=.4?"mid":"low";el.innerHTML=`<div class="small">${d.toLocaleDateString(undefined,{weekday:"short"})}</div><div class="num">${d.getDate()}</div><div class="small"><span class="dot ${cls}"></span>${Math.round(pct*100)}%${mood!==undefined?" · "+moods[mood][0]:""}</div>`;el.onclick=()=>{if(d>=startDate&&d<=endDate){datePicker.value=ds;renderAll()}};b.appendChild(el)}
}
function streak(){
 let dates=allDates().filter(d=>new Date(d+"T00:00:00")<=new Date(datePicker.value+"T00:00:00"));let s=0;
 for(let i=dates.length-1;i>=0;i--){if(completionFor(dates[i])>=.5)s++;else if(s>0)break}
 return s
}
function lineChart(id,vals,maxVal){
 const svg=document.getElementById(id),W=600,H=190,p=28;svg.innerHTML="";if(!vals.length)return;
 const max=Math.max(maxVal||0,...vals.map(v=>v||0),1), pts=vals.map((v,i)=>[p+i*(W-2*p)/Math.max(vals.length-1,1),H-p-(v||0)*(H-2*p)/max]);
 let grid=`<line x1="${p}" y1="${H-p}" x2="${W-p}" y2="${H-p}" stroke="#eadde2"/><line x1="${p}" y1="${p}" x2="${p}" y2="${H-p}" stroke="#eadde2"/>`;
 let path=pts.map((q,i)=>(i?"L":"M")+q[0].toFixed(1)+" "+q[1].toFixed(1)).join(" ");
 let circles=pts.map(q=>`<circle cx="${q[0]}" cy="${q[1]}" r="4" fill="#b96f84"/>`).join("");
 svg.innerHTML=grid+`<path d="${path}" fill="none" stroke="#b96f84" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`+circles;
}
function barChart(id,vals,maxVal){
 const svg=document.getElementById(id),W=600,H=190,p=28;svg.innerHTML="";let max=Math.max(maxVal||0,...vals,1),bw=(W-2*p)/vals.length*.65,step=(W-2*p)/vals.length;
 let s=`<line x1="${p}" y1="${H-p}" x2="${W-p}" y2="${H-p}" stroke="#eadde2"/>`;
 vals.forEach((v,i)=>{let h=(v/max)*(H-2*p),x=p+i*step+(step-bw)/2,y=H-p-h;s+=`<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="5" fill="#d99aaa"/>`});svg.innerHTML=s
}
function renderAnalytics(){
 let dates=allDates(), entered=dates.map(ds=>loadDate(ds)), comp=dates.map(ds=>completionFor(ds));
 let completedDays=comp.filter(x=>x>0),overall=completedDays.length?comp.reduce((a,b)=>a+b,0)/completedDays.length:0;document.getElementById("overallPct").textContent=Math.round(overall*100)+"%";
 let move=0,mood=[],sleep=[],run=0,fib=0;
 dates.forEach((ds,i)=>{let d=entered[i];(d.exercise||[]).forEach(x=>{move+=+x.min||0;if(x.type==="Run / Walk")run+=+x.distance||0});if(d.mood!==undefined)mood.push(d.mood+1);if(+d.sleepHours)sleep.push(+d.sleepHours);if(d.checks&&d.checks[5])fib++});
 document.getElementById("moveTotal").textContent=move;document.getElementById("streakLabel").textContent=`${streak()} day streak`;document.getElementById("avgMood").textContent=mood.length?(mood.reduce((a,b)=>a+b,0)/mood.length).toFixed(1):"—";document.getElementById("avgSleep").textContent=sleep.length?(sleep.reduce((a,b)=>a+b,0)/sleep.length).toFixed(1):"—";document.getElementById("runMiles").textContent=run.toFixed(1);document.getElementById("fiberDays").textContent=fib;
 const cur=new Date(datePicker.value+"T00:00:00"), recent=[];for(let i=13;i>=0;i--){let d=new Date(cur);d.setDate(cur.getDate()-i);recent.push(iso(d))}
 barChart("consistencyChart",recent.map(d=>Math.round(completionFor(d)*100)),100);
 barChart("movementChart",recent.map(ds=>(loadDate(ds).exercise||[]).reduce((s,x)=>s+(+x.min||0),0)));
 lineChart("moodChart",recent.map(ds=>loadDate(ds).mood!==undefined?loadDate(ds).mood+1:null),5);
 let weekly=[];for(let w=0;w<11;w++){let sum=0;for(let j=0;j<7;j++){let d=new Date(startDate);d.setDate(startDate.getDate()+w*7+j);if(d>endDate)continue;(loadDate(iso(d)).exercise||[]).forEach(x=>{if(x.type==="Run / Walk")sum+=+x.distance||0})}weekly.push(sum)}
 barChart("runningChart",weekly);
}
function generatePlan(){
 const d=load(),ex=d.exercise||[],run=ex.some(x=>x.type==="Run / Walk"),strength=ex.some(x=>x.type==="Upper Body Weights"||x.type==="Pilates"),long=ex.some(x=>x.type==="Long Walk"),hard=ex.some(x=>+x.rpe>=7);
 let names;
 if(run||hard) names=["Greek Yogurt Power Bowl","Chicken Rice Bowl","Protein Smoothie","Pesto Chicken Pasta"];
 else if(strength) names=["Egg + Avocado Toast","Turkey Taco Bowl","Protein Smoothie","Salmon Potato Plate"];
 else if(long) names=["Greek Yogurt Power Bowl","Loaded Sweet Potato","Protein Smoothie","Salmon Potato Plate"];
 else names=["Egg + Avocado Toast","Chicken Rice Bowl","Greek Yogurt Power Bowl","Loaded Sweet Potato"];
 let label=run||hard?"Higher-carb recovery day":strength?"Protein-forward recovery day":long?"Balanced active day":"Balanced easy day";
 document.getElementById("mealPlan").innerHTML=`<div class="pill">${label}</div>`+names.map((n,i)=>{let r=recipes.find(x=>x.name===n);return `<p><b>${["Breakfast","Lunch","Snack","Dinner"][i]}:</b> ${r.name}<br><span class="small">${r.detail}</span></p>`}).join("")+`<div class="small">Use hunger/fullness as the final guide. This plan is a simple suggestion, not a required menu.</div>`;
 localStorage.setItem(key()+"_plan",JSON.stringify(names))
}
function renderRecipes(){const b=document.getElementById("recipeGrid");b.innerHTML="";recipes.forEach(r=>{let e=document.createElement("div");e.className="recipe";e.innerHTML=`<h3>${r.name}</h3><div class="tags">${r.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div><div class="small">${r.detail}</div><div class="small" style="margin-top:7px">Approx. ${r.cal} cal · ${r.pro}g protein</div>`;b.appendChild(e)})}

function weekStorageKey(){
  const cur=new Date(datePicker.value+"T00:00:00"), dow=cur.getDay(), mon=new Date(cur);
  mon.setDate(cur.getDate()-((dow+6)%7));
  return "glow74_homeweek_"+iso(mon);
}
function renderHomeChecklist(){
  const data=JSON.parse(localStorage.getItem(weekStorageKey())||"{}");
  const inputs=document.querySelectorAll("#homeChecklist input[data-home]");
  let done=0;
  inputs.forEach(input=>{
    const k=input.getAttribute("data-home");
    input.checked=!!data[k];
    if(input.checked) done++;
    const label=input.closest(".check");
    if(label) label.classList.toggle("done",input.checked);
    input.onchange=()=>{
      const d=JSON.parse(localStorage.getItem(weekStorageKey())||"{}");
      d[k]=input.checked;
      localStorage.setItem(weekStorageKey(),JSON.stringify(d));
      renderHomeChecklist();
    };
  });
  document.getElementById("homeCount").textContent=`${done} / ${inputs.length}`;
  document.getElementById("homeProgress").style.width=(done/inputs.length*100)+"%";
}

function renderAll(){renderHeader();renderChecklist();renderMoods();bind();populateFoods();renderMeals();renderExercise();renderHomeChecklist();renderWeek();renderAnalytics();generatePlan();renderRecipes()}
datePicker.onchange=renderAll;renderAll();
document.querySelectorAll('#weekView [data-static-date]').forEach(el=>{
  el.addEventListener('click',()=>{
    const ds=el.getAttribute('data-static-date');
    if(ds>=datePicker.min && ds<=datePicker.max){datePicker.value=ds;renderAll();}
  });
});

function setTab(tab){
  document.querySelectorAll(".app-section").forEach(sec=>{
    sec.classList.toggle("hidden-by-tab", sec.getAttribute("data-tab")!==tab);
  });
  document.querySelectorAll(".nav-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.getAttribute("data-nav")===tab);
  });
  localStorage.setItem("glow74_activeTab",tab);
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-btn").forEach(btn=>{
  btn.addEventListener("click",()=>setTab(btn.getAttribute("data-nav")));
});
setTab(localStorage.getItem("glow74_activeTab")||"today");
