const digStd =document.getElementById("digital-Std"); 
const digMin =document.getElementById("digital-Min"); 
const digSec =document.getElementById("digital-Sec"); 

function DigUhr() {
const d =new Date();
let digitalstd =d.getHours();
let digitalmin =d.getMinutes();
let digitalsec =d.getSeconds();

digStd.innerText = nummerToStr(digitalstd);
digMin.innerText = nummerToStr(digitalmin);
digSec.innerText = nummerToStr(digitalsec);

}


function nummerToStr (z) {
    let time = "0" + z.toString();
    return time.slice(-2);
}


DigUhr();
setInterval(DigUhr, 1000);

