// Exercise 1.0
// ------------
console.log('exercise-1');
const body= document.querySelector('#bod');
const text= document.createElement('p');
body.addEventListener('click',function(){
    text.innerText="You Win!";
    body.appendChild(text);
});

