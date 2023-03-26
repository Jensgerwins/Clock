const digStd =document.getElementById("digital-Std"); 
const digMin =document.getElementById("digital-Min"); 
const digSec =document.getElementById("digital-Sec"); 
const analogStdZeiger =document.getElementById("std-zeiger");
const analogMinZeiger =document.getElementById("std-min");
const analogSecZeiger =document.getElementById("std-sekunden");
//Digital Uhr
function DigUhr() {
const d =new Date();
let digitalstd =d.getHours();
let digitalmin =d.getMinutes();
let digitalsec =d.getSeconds();

digStd.innerText = nummerToStr(digitalstd);
digMin.innerText = nummerToStr(digitalmin);
digSec.innerText = nummerToStr(digitalsec);


//Analoge-Uhr


analogStdZeiger.style.setProperty("--stunden", digitalstd * 30 + "deg");
analogMinZeiger.style.setProperty("--minuten", digitalmin * 6 + "deg");
analogSecZeiger.style.setProperty("--seconden", digitalsec * 6 + "deg");





}


function nummerToStr (z) {
    let time = "0" + z.toString();
    return time.slice(-2);
}


DigUhr();
setInterval(DigUhr, 1000);

