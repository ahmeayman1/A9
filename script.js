const questions = [

/* ========= MCQ (1–25) ========= */

{type:"mcq",q:"Which of the following is the primary cause of Nephrotic Syndrome?",options:["Bacterial infection of the bladder","Increased glomerular basement membrane permeability to albumin","Obstruction of the ureter by calculi","Decreased blood flow to the renal artery"],a:1},

{type:"mcq",q:"A characteristic finding in the urine of a patient with Nephrotic Syndrome is:",options:["Gross hematuria","Low specific gravity","Frothy or foamy appearance","Presence of glucose"],a:2},

{type:"mcq",q:"In Acute Glomerulonephritis, tea-colored urine is caused by:",options:["High lipid levels","Massive proteinuria","Presence of red blood cells","Bile pigments"],a:2},

{type:"mcq",q:"According to KDIGO, AKI is diagnosed if serum creatinine increases by at least:",options:["0.1 mg/dL","0.3 mg/dL","1.0 mg/dL","1.5 mg/dL"],a:1},

{type:"mcq",q:"Which cause of AKI is post-renal?",options:["Renal artery stenosis","Sepsis","Ureteral calculi","Hypovolemia"],a:2},

{type:"mcq",q:"CKD is defined by GFR <60 ml/min for at least:",options:["1 month","2 months","3 months","6 months"],a:2},

{type:"mcq",q:"Most common infectious cause of AGN is:",options:["Staph aureus","Group A beta-hemolytic Streptococcus","E. coli","Hepatitis B"],a:1},

{type:"mcq",q:"Hypoalbuminemia in Nephrotic Syndrome leads to:",options:["Hypertension","Generalized edema","Hypercalcemia","Hematuria"],a:1},

{type:"mcq",q:"Best dietary advice for AKI patient with hyperkalemia:",options:["Increase bananas","Limit tomatoes and potatoes","High protein diet","Increase fluids"],a:1},

{type:"mcq",q:"Urgent indication for dialysis:",options:["Mild fatigue","Pericarditis","1 kg weight gain","Loss of appetite"],a:1},

{type:"mcq",q:"Bed rest in AGN is recommended to:",options:["Prevent skin breakdown","Reduce inflammation and congestion","Encourage weight gain","Prevent infection"],a:1},

{type:"mcq",q:"Lab finding increased in Nephrotic Syndrome:",options:["Serum albumin","Serum calcium","Cholesterol & triglycerides","Hemoglobin"],a:2},

{type:"mcq",q:"Hallmark of glomerular hematuria:",options:["Red urine","Blood clots","Dysmorphic RBCs & casts","Low protein"],a:2},

{type:"mcq",q:"Pre-renal AKI is caused by:",options:["Tubular damage","Post-renal obstruction","Reduced renal perfusion","Chronic hypertension"],a:2},

{type:"mcq",q:"BP monitoring in AGN is important because:",options:["Hypotension risk","Hypertension from fluid overload","Protein loss","Identify bacteria"],a:1},

{type:"mcq",q:"Anasarca means:",options:["High nitrogen","Periorbital edema","Generalized massive edema","Low urine output"],a:2},

{type:"mcq",q:"Loss of anticoagulant proteins in NS causes:",options:["Hypercoagulability","Hypovolemia","Bone disease","Sepsis"],a:0},

{type:"mcq",q:"Fluid overload refractory to diuretics indicates:",options:["Increase fluids","Dialysis","High sodium","Discharge"],a:1},

{type:"mcq",q:"Most common cause of ATN:",options:["Stones","Prolonged ischemia & nephrotoxins","Tumor","Dehydration"],a:1},

{type:"mcq",q:"Test detecting 3+ proteinuria:",options:["Serum albumin","Ultrasound","Urine dipstick","ASOT"],a:2},

{type:"mcq",q:"Treatment effective in NS if:",options:["Weight gain","↓ edema & ↑ urine output","↑ lipids","4+ protein"],a:1},

{type:"mcq",q:"AGN with headache & convulsions → check:",options:["Temperature","Blood pressure","Weight","Urine color"],a:1},

{type:"mcq",q:"Pre-renal AKI can progress to intrinsic because:",options:["Urethral block","Prolonged hypoperfusion damages tubules","High protein intake","Immune response"],a:1},

{type:"mcq",q:"Anxiety in CKD is due to:",options:["Medication cost","Chronic disease & dialysis fear","Hormones","Not valid"],a:1},

{type:"mcq",q:"Urine output 0.2 ml/kg/h for 12h =",options:["Normal","Polyuria","Oliguria","Hematuria"],a:2},

/* ========= TRUE / FALSE (26–40) ========= */

{type:"tf",q:"Nephrotic syndrome is primarily a tubular inflammatory disease.",a:false},
{type:"tf",q:"Hypocalcemia can occur in Nephrotic Syndrome.",a:true},
{type:"tf",q:"Antibiotics prevent development of AGN.",a:false},
{type:"tf",q:"Post-renal AKI can be caused by BPH.",a:true},
{type:"tf",q:"GFR 75 for 4 months = CKD.",a:false},
{type:"tf",q:"Protein is always strictly restricted in AGN.",a:false},
{type:"tf",q:"Periorbital edema occurs in AGN and Nephrotic Syndrome.",a:true},
{type:"tf",q:"Loop diuretics reduce edema in AGN.",a:true},
{type:"tf",q:"Dyspnea in renal failure often indicates fluid overload.",a:true},
{type:"tf",q:"Azotemia means blood in urine.",a:false},
{type:"tf",q:"ASOT indicates recent streptococcal infection.",a:true},
{type:"tf",q:"Hyperlipidemia is common in Nephrotic Syndrome.",a:true},
{type:"tf",q:"AKI patients should always lie flat.",a:false},
{type:"tf",q:"Uremic encephalopathy is an indication for dialysis.",a:true},
{type:"tf",q:"Weight gain in renal patients is usually muscle mass.",a:false},

/* ========= ADVANCED (41–50) ========= */

{type:"mcq",q:"Gut edema in Nephrotic Syndrome causes:",options:["Better appetite","Malnutrition","Hypertension","Fast healing"],a:1},
{type:"mcq",q:"Finding suggesting glomerulonephritis vs UTI:",options:["Bacteria","RBC casts","Low pH","WBCs"],a:1},
{type:"tf",q:"Altered consciousness in AKI may result from toxin buildup.",a:true},
{type:"mcq",q:"History suggesting pre-renal AKI:",options:["IV contrast","Severe dehydration","Kidney stones","PKD"],a:1},
{type:"tf",q:"GFR is the standard kidney function measure.",a:true},
{type:"mcq",q:"Hyperlipidemia in NS occurs because:",options:["High fat intake","Liver increases lipid synthesis","Fat retention","Antibiotics"],a:1},
{type:"mcq",q:"Primary purpose of Foley catheter in AKI:",options:["Restrict movement","Monitor urine output","Treat infection","Prevent skin breakdown"],a:1},
{type:"tf",q:"Hypertension in AGN is due to fluid retention.",a:true},
{type:"mcq",q:"Most relevant subjective CKD symptom:",options:["Sore throat","Chronic fatigue","Dysuria","Salt craving"],a:1},
{type:"tf",q:"Renal biopsy helps identify type of kidney damage.",a:true}

];
/* SHUFFLE */
questions.sort(()=>Math.random()-0.5);

let index=0;
let answers=Array(questions.length).fill(null);

/* ELEMENTS */
const qText=document.getElementById("questionText");
const optionsDiv=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

/* MENU */
function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* QUIZ */
function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";

  const q=questions[index];
  qText.innerText=q.q;
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  if(q.type==="tf"){
    createOption("True",true);
    createOption("False",false);
  }else{
    q.options.forEach((o,i)=>createOption(o,i));
  }
}

function createOption(text,val){
  const b=document.createElement("button");
  b.innerText=text;
  b.onclick=()=>select(val,b);
  optionsDiv.appendChild(b);
}

function select(val,btn){
  if(answers[index]!==null)return;
  answers[index]=val;

  const q=questions[index];
  [...optionsDiv.children].forEach((b,i)=>{
    const correct=q.type==="tf"?((i===0)===q.a):(i===q.a);
    if(correct)b.style.background="#27ae60";
    else if(b===btn)b.style.background="#e74c3c";
    b.disabled=true;
  });
  nextBtn.style.display="inline-block";
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else finishQuiz();
}

function finishQuiz(){
  let score = 0;
  questions.forEach((q,i)=>{
    if(answers[i] === q.a) score++;
  });

  let percent = Math.round((score / questions.length) * 100);

  document.getElementById("resultScore").innerText =
    `Score: ${score} / ${questions.length}`;

  document.getElementById("resultPercent").innerText =
    `Percentage: ${percent}%`;

  let message = "";

if(percent >= 85){
  message = " اول دفعه يعععمممم  "  ;
}
else if(percent >= 70){
  message = " شد شويه يعم";
}
else{
  message = " انت اخرك تخش كليه البهايممممم  ";
}

document.getElementById("resultTitle").innerText = message;

  // إظهار شاشة النتيجة
  document.getElementById("result").classList.add("show");

  // كونفيتي لو أكتر من 70%
  if(percent >= 70){
    fireConfetti();
  }
}
function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}
function fireConfetti(){
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}
function confettiEffect(){
  for(let i=0;i<150;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.top="-10px";
    c.style.left=Math.random()*100+"vw";
    c.style.width="8px";
    c.style.height="8px";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.opacity="0.8";
    c.style.borderRadius="50%";
    c.style.animation=`fall ${2+Math.random()*3}s linear`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}
function reviewFromResult(){
  const result = document.getElementById("result");

  // اقفل شاشة النتيجة
  result.classList.remove("show");

  // رجّع الكويز
  document.getElementById("quiz").style.display = "block";

  // افتح قائمة الأسئلة
  toggleQuestions();
}