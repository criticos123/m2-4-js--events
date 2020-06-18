
const body = document.querySelector('body');

for (let i=1; i <= 20; i++) {
let button = document.createElement("button");
button.innerHTML = i;
button.style.backgroundColor="darkred";
button.style.width="100px";
button.style.height="100px";
button.style.color="white";
button.style.fontSize="40px";
body.appendChild(button);
function turngreen(){
    button.style.backgroundColor="green";
}
button.addEventListener('click',turngreen);
}



