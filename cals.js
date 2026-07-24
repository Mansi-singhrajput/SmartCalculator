let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
function squareNumber() {
    if (display.value === "") {
        return;
    }

    let num = parseFloat(display.value);
    display.value = num * num;
}
function ModuleNumber() {
    if (display.value === "") {
        return;
    }

    let num = parseFloat(display.value);
    display.value = num % num;
}
function squareRoot() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
}
function changeSign() {
    let display = document.getElementById("display");

    if(display.value!="")
    {
        display.value=parseFloat(display.value)*(-1);
    }
}
function reciprocal(){
let display=document.getElementById("display");

display.value=1/parseFloat(display.value);
}
function randomNumber(){
document.getElementById("display").value=
Math.floor(Math.random()*1000);
}
function toggleTheme(){
document.body.classList.toggle("dark");
}
function calculate(){

let display=document.getElementById("display");

try{

let expression=display.value;

let result=eval(expression);

document.getElementById("history").innerHTML +=
expression+" = "+result+"<br>";

display.value=result;

}
catch{
display.value="Error";
}

}
document.addEventListener("keydown",function(e){

let key=e.key;

if("0123456789+-*/.%".includes(key))
appendValue(key);

else if(key==="Enter")
calculate();

else if(key==="Backspace")
deleteLast();

else if(key==="Escape")
clearDisplay();

});
setInterval(function(){

document.getElementById("clock").innerHTML=
new Date().toLocaleTimeString();

},1000);
function copyAnswer(){

let display=document.getElementById("display");

navigator.clipboard.writeText(display.value);

alert("Copied!");
}
function sin(){
display.value=Math.sin(display.value*Math.PI/180);
}

function cos(){
display.value=Math.cos(display.value*Math.PI/180);
}

function tan(){
display.value=Math.tan(display.value*Math.PI/180);
}

function log(){
display.value=Math.log10(display.value);
}