
const body = document.querySelector('body');


function turngreen(event){
    const green = event.target.id;
    document.getElementById(green).classList.toggle('green');

}
for (let i=1; i <= 20; i++) {
let button = document.createElement("button");
button.innerHTML = i;
button.id = i;
body.appendChild(button);
button.addEventListener('click',turngreen);
}