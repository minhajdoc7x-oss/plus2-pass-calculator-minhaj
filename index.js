
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

<script>

function updateMaxMark(){

const subjectValue=document.getElementById("subject").value;
const markInput=document.getElementById("p1Mark");

if(subjectValue==="80"){
markInput.max=80;
markInput.placeholder="Enter mark (Max 80)";
}
else if(subjectValue==="60"){
markInput.max=60;
markInput.placeholder="Enter mark (Max 60)";
}

}

function celebratePass(){

const btn=document.getElementById("checkBtn");
const rect=btn.getBoundingClientRect();

const x=(rect.left + rect.width/2)/window.innerWidth;
const y=(rect.top + rect.height/2)/window.innerHeight;

confetti({
particleCount:150,
spread:100,
origin:{x:x,y:y}
});

}
function calculate(){

const subjectValue=document.getElementById('subject').value;

if(subjectValue===""){
alert("ദയവായി Subject തിരഞ്ഞെടുക്കുക!");
return;
}

const type=parseInt(subjectValue);
const subjectName=document.getElementById('subject').selectedOptions[0].text;

const p1=parseFloat(document.getElementById('p1Mark').value);
const resultDiv=document.getElementById('result');

if(isNaN(p1)){
alert("ദയവായി മാർക്ക് എന്റർ ചെയ്യുക!");
return;
}

let totalNeeded=(type===80)?48:36;
let p2Required=totalNeeded-p1;

resultDiv.style.display="block";

if(p2Required<=0){

celebratePass();

resultDiv.className="pass-card";

resultDiv.innerHTML=`
<span>${subjectName}</span>
<span class="big-mark">PASSED ✅</span>
<small class="malayalam-text">🎉 അഭിനന്ദനങ്ങൾ! രണ്ട് വർഷത്തെയും കൂടി PASS ഉറപ്പായി കഴിഞ്ഞു!</small>
`;

}else{

resultDiv.className="need-card";

resultDiv.innerHTML=`
<span>${subjectName}</span>
<span class="big-mark">${p2Required} Marks</span>
<small class="malayalam-text">🎯 +2 PASS നേടാൻ ഇനി ഇത്ര മാർക്ക് മാത്രം മതിയാകും!</small>
`;

}

}

</script>
```
