// Exercise 1.1
// ------------
console.log('exercise 1.1');
let win=false;
const body= document.querySelector('#bod');
const text= document.createElement('h1');
text.style.color="pink";
text.style.fontSize="200px";

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
},1000);
body.addEventListener('click',timegame);