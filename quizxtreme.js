let playerName = "";
let index = 0;
let score = 0;

let leaderboard = [];

const questions = [
{
q:"HTML stands for?",
options:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Language","None"],
answer:"Hyper Text Markup Language"
},
{
q:"CSS used for?",
options:["Styling","Database","Logic","AI"],
answer:"Styling"
},
{
q:"JS runs on?",
options:["Browser","Server","OS","Printer"],
answer:"Browser"
},
{
q:"MongoDB is?",
options:["Database","Language","Framework","OS"],
answer:"Database"
},
{
q:"Node.js used for?",
options:["Backend","Frontend","Design","Game"],
answer:"Backend"
}
];

function startQuiz(){

playerName = document.getElementById("player").value;

if(playerName === ""){
alert("Enter Player Name");
return;
}

index = 0;
score = 0;

document.getElementById("quizBox").style.display = "block";

showQuestion();
}

function showQuestion(){

let q = questions[index];

document.getElementById("question").innerText =
`Q${index+1}. ${q.q}`;

let html = "";

q.options.forEach(opt=>{
html += `
<div class="option" onclick="checkAnswer('${opt}')">
${opt}
</div>`;
});

document.getElementById("options").innerHTML = html;
}

function checkAnswer(opt){

if(opt === questions[index].answer){
score += 20;
}

index++;

if(index < questions.length){
showQuestion();
}
else{
showResult();
}
}

function showResult(){

document.getElementById("quizBox").style.display = "none";

document.getElementById("resultBox").innerHTML = `
<h2>🏁 FINAL RESULT</h2>
<p><b>Player:</b> ${playerName}</p>
<p><b>Score:</b> ${score} / 100</p>
<p><b>Performance:</b> ${score >= 80 ? "🔥 Excellent" : "👍 Good"}</p>
`;

leaderboard.push({name:playerName,score:score});

leaderboard.sort((a,b)=>b.score-a.score);

let html = "";

leaderboard.forEach((p,i)=>{
html += `
<p>#${i+1} ${p.name} - ${p.score}</p>
`;
});

document.getElementById("leaderboard").innerHTML = html;
}