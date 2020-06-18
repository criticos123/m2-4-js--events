// Exercise 1.2
// ------------
console.log('exercise 1.2');

let win=false;
const body= document.querySelector('#bod');
const text= document.createElement('h1');
text.style.color="pink";
text.style.fontSize="200px";
text.style.position="absolute";
const time= Math.floor(Math.random() *5)+1;
document.getElementById('time').innerText = time;

function timegame(){
    
    text.innerText="You win";
    win=true;
    body.appendChild(text);
    
};


setTimeout(function(){
    if(win===false){
    text.innerText="You lose";
    body.appendChild(text);
    body.removeEventListener('click',timegame)
    }
},time*1000);

body.addEventListener('click',timegame);