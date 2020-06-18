
const body = document.querySelector('body');


function turngreen(event){
    const green = event.target.id;
    document.getElementById(green).classList.toggle('green');

}
for (let i=1; i <= 20; i++) {
let button = document.createElement("button");
button.innerHTML = i;
button.id = i;
button.style.top = `${Math.random() * 80}vh`;
button.style.left = `${Math.random() * 80}vw`;
button.style.bottom = `${Math.random() * 80}vh`;
button.style.right = `${Math.random() * 80}vw`;
body.appendChild(button);
button.addEventListener('click',turngreen);
}