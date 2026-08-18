const startDate=new Date("2026-08-18T00:00:00"), endDate=new Date("2026-10-31T00:00:00");
const checklistItems=["AM skincare + SPF","PM skincare","Bible study","Intentional movement","Nourishing meals","Take fiber supplement","Hydration focus","10-minute tidy / reset","Kind self-talk","Work goal / priority tasks"];
const moods=[["😣","rough"],["😕","low"],["😌","okay"],["😊","good"],["✨","great"]];
const quotes=["Today is not a test. It is another chance to care for yourself well.","Consistency grows quietly, one ordinary choice at a time.","You can want change without declaring war on who you are today.","Soft discipline is still discipline.","Your glow is built in the routines no one applauds.","Do the next kind, useful thing.","Progress feels better when you can actually live with it.","Small promises kept to yourself become self-trust.","A slower pace can still take you somewhere beautiful.","You are building strength, not serving a sentence.","Let today be simple: nourish, move, pray, repeat.","You do not have to feel motivated to choose what matters.","Your future self needs consistency more than intensity.","Make your habits feel like care, not punishment.","One nourishing meal can simply be one nourishing meal.","Your life changes when your ordinary days begin to change.","Keep the goal, release the drama.","You can begin again without starting over.","Strong does not have to look rushed.","Let your routines support your life instead of controlling it.","Confidence is often evidence that you kept showing up.","Your body is your home; treat it like somewhere you plan to stay.","Choose the version of discipline that leaves room for joy.","Today’s effort counts even if nobody sees it.","Being imperfect and being consistent can exist at the same time.","You are allowed to make this easier to maintain.","Take care of the basics and let the basics take care of you.","A good day does not require a flawless checklist.","Your habits are becoming proof that you can rely on yourself.","Do not underestimate what 20 calm minutes can change.","Fuel the life you are asking your body to live.","Rest and progress are not opposites.","Your pace is allowed to match your season.","Keep choosing what makes tomorrow feel a little lighter.","The goal is not to shrink your life; it is to feel more alive in it.","You do not need urgency to create momentum.","Every run, walk, stretch, and meal is a vote for the life you want.","Let consistency be your quiet flex.","Your strongest routine is the one you can return to.","You are not behind; you are in the middle of becoming.","Take the pressure off and put the intention back in.","Your energy deserves a budget too.","Some days the win is doing less, but doing it on purpose.","Build a life you do not constantly need to recover from.","You can be ambitious and gentle with yourself at the same time.","Make today feel good enough to want to repeat.","Progress is allowed to look boring before it looks impressive.","Keep collecting small wins.","Your body notices kindness too.","Let the routine carry you when motivation gets quiet.","You do not need to earn the right to feel proud today.","Show up for yourself in ways future you will recognize.","Healthy can be delicious, flexible, social, and real.","Your habits should make your world bigger, not smaller.","Today’s goal: leave yourself a little stronger than you found yourself.","Be patient with the version of you learning a new rhythm.","The comeback is built before anyone can see it.","Choose steady over extreme.","You are closer because you kept going.","Let your effort be enough for today.","Your glow-up includes peace.","Keep the promises that make you trust yourself.","You can celebrate progress before the finish line.","Make room for the person you are becoming.","Discipline feels different when it comes from self-respect.","Your routines are starting to look like a lifestyle.","You have already proven you can keep returning.","Finish this season with gratitude, not punishment.","Notice how much easier some things feel now.","Do not rush past the strength you built along the way.","Your progress belongs to you, even when it is not visible.","Keep what worked. Release what did not.","You are not finishing a challenge; you are keeping the parts that changed you.","Walk into your next season knowing you showed up for yourself."];
const verses=["Psalm 118:24 — Receive today as a gift and choose gladness in it.","Philippians 4:13 — Christ gives you strength for what is in front of you.","Proverbs 31:25 — Let strength and dignity be what you wear today.","Psalm 51:10 — Prayer: God, renew my heart and make my spirit steady.","Psalm 28:7 — The Lord is your strength; trust Him with today.","1 Corinthians 16:14 — Let love shape the way you do everything today.","Isaiah 40:31 — Hope in the Lord renews your strength.","Proverbs 3:5–6 — Trust God beyond your own understanding and let Him direct you.","Psalm 46:5 — God is with you; you do not face this day alone.","Matthew 6:34 — Stay with today instead of carrying tomorrow too.","Psalm 139:14 — Remember that you are wonderfully made.","Galatians 6:9 — Do not grow weary in doing good; the harvest takes time.","Joshua 1:9 — Be strong and courageous because God goes with you.","Psalm 23:3 — God restores your soul and leads you toward what is right.","Romans 12:2 — Let your mind be renewed instead of shaped by old patterns.","Colossians 3:23 — Bring your whole heart to the work in front of you.","Psalm 37:5 — Commit your way to the Lord and trust Him with the outcome.","2 Timothy 1:7 — God gives a spirit of power, love, and self-control.","Psalm 34:5 — Look to God and let your face be radiant with hope.","Matthew 11:28 — Bring your weariness to Jesus and receive rest.","Proverbs 16:3 — Commit your plans to the Lord.","Psalm 16:8 — Keep the Lord before you and remember you are not easily shaken.","Romans 8:28 — Trust that God can work through every part of your story.","1 Peter 5:7 — Give God the anxieties you were never meant to carry alone.","Psalm 90:17 — Prayer: Lord, establish the work of my hands today.","Micah 6:8 — Choose justice, mercy, and a humble walk with God.","Hebrews 12:1 — Keep moving forward with endurance and release what weighs you down.","Psalm 121:1–2 — Your help comes from the Lord.","James 1:5 — Ask God for wisdom when you do not know the next step.","Romans 15:13 — May God fill you with hope, peace, and joy as you trust Him.","Psalm 19:14 — Prayer: Let my words and thoughts be pleasing to You today.","Ecclesiastes 3:1 — Trust that there is a season for everything.","Isaiah 41:10 — Do not fear; God is with you and will strengthen you.","Psalm 62:5 — Let your soul rest in God; your hope comes from Him.","Matthew 5:16 — Let your light show through the good you do.","Proverbs 4:23 — Guard your heart because it shapes the course of your life.","Psalm 119:105 — Let God’s word give light to your next step.","Romans 5:3–4 — Endurance develops character, and character strengthens hope.","Zephaniah 3:17 — God is with you, delights in you, and quiets you with His love.","Psalm 27:1 — With the Lord as your light and strength, you do not have to live afraid.","Philippians 4:6–7 — Bring your worries to God in prayer and receive His peace.","Proverbs 17:22 — A joyful heart brings its own kind of healing.","Psalm 55:22 — Place your burdens on the Lord and let Him sustain you.","John 15:5 — Stay connected to Christ; lasting fruit grows from that connection.","Romans 12:12 — Be joyful in hope, patient in difficulty, and faithful in prayer.","Psalm 143:8 — Prayer: Show me the way to go today, because I trust You.","1 Thessalonians 5:16–18 — Choose joy, keep praying, and practice gratitude.","Proverbs 16:9 — Make your plans while trusting God to guide your steps.","Psalm 73:26 — When your strength feels small, God remains your strength.","Hebrews 10:23 — Hold tightly to hope because God is faithful.","Matthew 22:39 — Love your neighbor as yourself; self-care and love are not enemies.","Psalm 32:8 — Trust God to instruct you and guide the way forward.","Isaiah 43:19 — God can make a new way where you could not see one before.","2 Corinthians 12:9 — Grace is enough; strength can meet you in weakness.","Psalm 84:11 — Trust God to give what is good in the right time.","Colossians 3:15 — Let the peace of Christ have the final word in your heart.","Psalm 94:19 — When anxious thoughts multiply, God’s comfort can bring joy.","1 Corinthians 10:31 — Let even ordinary choices be made with purpose and gratitude.","Psalm 138:8 — Trust the Lord to continue His work in your life.","Ephesians 3:20 — God is able to do beyond what you can imagine.","Proverbs 24:16 — Falling is not the end; rise again.","Psalm 30:5 — Hard moments do not get the final word; joy returns.","John 14:27 — Receive Christ’s peace instead of letting fear rule the day.","Romans 8:31 — If God is for you, fear does not get to define you.","Psalm 18:32 — God equips you with strength for your path.","Philippians 1:6 — Trust that God is still completing the good work He began in you.","Psalm 126:5 — Tears and difficult seasons can still lead toward joy.","Hebrews 6:19 — Let hope be an anchor for your soul.","Isaiah 26:3 — A mind stayed on God can find steady peace.","Psalm 92:12–14 — A rooted life can keep growing and bearing fruit.","2 Corinthians 5:17 — In Christ, newness is possible.","Psalm 103:2–5 — Remember God’s goodness and the ways He renews you.","Numbers 6:24–26 — Prayer: Lord, bless me, keep me, and give me peace.","Psalm 150:6 — Finish with gratitude: let everything in you praise the Lord."];
const affirmations=["I am worthy of care before I accomplish anything today.","I can build discipline without abandoning gentleness.","I trust myself to make one supportive choice at a time.","I am learning what makes my body feel strong and cared for.","I deserve routines that bring me peace.","I can be a work in progress and still be proud of myself.","I am creating momentum without rushing myself.","I speak to myself like someone I am responsible for encouraging.","My body and I are on the same team.","I am capable of returning to myself after an imperfect day.","I choose nourishment over punishment.","I can do hard things without making everything hard.","I am becoming consistent because I keep coming back.","I deserve to feel at home in my own life.","I am allowed to enjoy food while caring about my health.","My strength is growing in ways I can and cannot see.","I can honor hunger, fullness, energy, and joy.","I am not required to be perfect to make progress.","I am becoming someone who follows through with love.","I protect my peace while pursuing my goals.","I am proud of every promise I keep to myself.","I let movement be a celebration of what my body can do.","I am allowed to take up space exactly as I am.","I choose habits that support the life I actually want.","I can rest without losing momentum.","I am learning to trust slow progress.","I deserve a life that feels good on ordinary Tuesdays.","I am capable, grounded, and growing.","I do not measure my worth by a number.","I am building confidence through action.","I can nourish myself without negotiating whether I deserve it.","I make room for both ambition and softness.","I am stronger than the urge to make one hard moment mean everything.","I choose curiosity instead of criticism toward my body.","I am becoming more comfortable being seen.","I am allowed to change without hating who I was.","I trust that small efforts compound.","I can choose the next helpful thing without fixing everything at once.","I am creating a relationship with myself that feels safe.","I deserve to celebrate progress while I am still progressing.","I am becoming more energetic, capable, and confident.","I can listen to my body without fearing it.","I release all-or-nothing thinking and choose enough.","I am building a routine I can live inside.","I am proud of the way I keep returning.","I do not need punishment to become disciplined.","I am allowed to enjoy this process.","I choose consistency that leaves room for being human.","I am learning to recognize my own strength.","I deserve patience from myself.","I am becoming the kind of person I can depend on.","I can have goals without making my body the enemy.","I am allowed to feel beautiful today, not someday.","I honor the work my body does for me.","I can make choices from self-respect instead of fear.","I am creating evidence that I can trust myself.","I am more than a before picture.","I choose steady effort over dramatic promises.","I can be proud of myself without waiting for permission.","I am becoming stronger because I stayed.","I let peace be part of my progress.","I have already changed by learning how to keep going.","I deserve food, rest, movement, faith, fun, and connection.","I am capable of finishing what matters without exhausting myself.","I notice and appreciate what my body can do now.","I am becoming more confident in the life I am building.","I can keep the habits that serve me and release the ones that do not.","I am grateful for the version of me who started.","I trust myself more than I did at the beginning.","I carry the strength I built into what comes next.","I am allowed to be proud of visible and invisible progress.","I do not need a challenge to keep caring for myself.","I am walking into my next season with confidence and peace.","I showed up for myself, and I will keep showing up."];

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
 document.getElementById("quote").textContent=quotes[Math.max(0,Math.min(73,idx))];
 document.getElementById("verse").textContent=verses[Math.max(0,Math.min(73,idx))];
 document.getElementById("affirmation").textContent=affirmations[Math.max(0,Math.min(73,idx))];
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
