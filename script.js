
const quiz=[
{q:'Who is BIGGER?',pic:'🐘',o:['Ant 🐜','Elephant 🐘','Mouse 🐭','Bird 🐦'],a:1},
{q:'Count the stars: ⭐⭐⭐⭐⭐⭐⭐',pic:'⭐',o:['5','6','7','8'],a:2},
{q:'What shape is this?',pic:'🔺',o:['Circle','Rectangle','Triangle','Square'],a:2},
{q:'What comes after 19?',pic:'🔢',o:['18','20','21','22'],a:1},
{q:'Which is heavier?',pic:'🍉',o:['Feather','Leaf','Watermelon','Ball'],a:2}
];
const colors=['#f06292','#4fc3f7','#81c784','#ffd54f'];
let current=0,score=0;
function load(){
 let q=quiz[current];
 progress.innerText=`Question ${current+1}/${quiz.length} | Stars ${score}⭐`;
 question.innerText=q.q;
 picture.innerText=q.pic;
 result.innerText='';
 next.style.display='none';
 options.innerHTML='';
 q.o.forEach((x,i)=>{
  const b=document.createElement('button');
  b.textContent=String.fromCharCode(65+i)+'. '+x;
  b.style.background=colors[i];
  if(i===3) b.style.color='#333';
  b.onclick=()=>check(i);
  options.appendChild(b);
 });
}
function check(i){
 let q=quiz[current];
 document.querySelectorAll('#options button').forEach(b=>b.disabled=true);
 if(i===q.a){score++;result.innerText='⭐ Correct!';}
 else{result.innerText='😊 Correct answer: '+q.o[q.a];}
 next.style.display='block';
}
function nextQuestion(){
 current++;
 if(current<quiz.length){load();}
 else{
 document.querySelector('.card').innerHTML=`<h1>🎉 Quiz Complete!</h1><h2>${score}/${quiz.length} Stars</h2><p>${score>=4?'🌟 Little Star Champion!':'😊 Keep Practicing!'}</p>`;
 }
}
window.onload=load;
