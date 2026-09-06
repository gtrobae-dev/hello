const profiles=[
{name:"Александр",age:29,city:"Москва",letter:"А",tags:["путешествия","спорт"]},
{name:"Илья",age:26,city:"Санкт-Петербург",letter:"И",tags:["музыка","кино"]},
{name:"Максим",age:32,city:"Казань",letter:"М",tags:["кофе","спорт"]},
{name:"Денис",age:28,city:"Сочи",letter:"Д",tags:["море","фото"]},
{name:"Антон",age:35,city:"Москва",letter:"А",tags:["технологии","кино"]},
{name:"Роман",age:30,city:"Екатеринбург",letter:"Р",tags:["путешествия","еда"]},
{name:"Михаил",age:27,city:"Самара",letter:"М",tags:["спорт","игры"]},
{name:"Сергей",age:33,city:"Новосибирск",letter:"С",tags:["музыка","авто"]}
];
function card(p){return `<article class="card"><div class="photo">${p.letter}</div><h3>${p.name}, ${p.age}</h3><p>${p.city}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div><button class="btn like" data-name="${p.name}" style="margin-top:12px">♡ Нравится</button></article>`}
function render(id,list=profiles){const el=document.getElementById(id);if(!el)return;el.innerHTML=list.map(card).join("");el.querySelectorAll(".like").forEach(b=>b.onclick=()=>{b.textContent=b.textContent.includes("♡")?"♥ Нравится":"♡ Нравится"})}
render("online",profiles.slice(0,4));render("profiles");
const search=document.getElementById("search");if(search)search.oninput=()=>{const q=search.value.toLowerCase();render("profiles",profiles.filter(p=>(p.name+" "+p.city).toLowerCase().includes(q)))};
const reg=document.getElementById("registerForm");if(reg)reg.onsubmit=e=>{e.preventDefault();alert("Регистрация в демо-версии выполнена!");location.href="profiles.html"};
const login=document.getElementById("loginForm");if(login)login.onsubmit=e=>{e.preventDefault();alert("Вход в демо-версии выполнен!");location.href="profiles.html"};
const chat=document.getElementById("chatForm");if(chat)chat.onsubmit=e=>{e.preventDefault();const i=document.getElementById("chatInput"),box=document.getElementById("chatBox");const d=document.createElement("div");d.className="msg mine";d.textContent=i.value;box.appendChild(d);i.value="";box.scrollTop=box.scrollHeight};
