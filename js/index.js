setInterval(function(){
    document.querySelector(".navbar-brand").innerHTML = (new Date())
    .toLocaleTimeString(); }, 1000);

document.querySelector('#go-button').addEventListener('click' , showAlert);

function showAlert() {
    window.alert("Your free ticket is waiting on you!");
}