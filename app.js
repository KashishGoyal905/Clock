const secondDegree =document.querySelector('.second-hand');
const minuteDegree =document.querySelector('.min-hand');
const hourDegree =document.querySelector('.hour-hand')
function setDate(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const sec = ((seconds/60)*360)+90;
    const min = ((minutes/60)*360)+((seconds/60)*6) + 90;
    const hour = ((hours / 12) * 360) + ((minutes/60)*30) + 90
    secondDegree.style.transform = `rotate(${sec}deg)`;
    minuteDegree.style.transform = `rotate(${min}deg)`;
    hourDegree.style.transform = `rotate(${hour}deg)`;
 }

setInterval(setDate ,1000);
setDate();
