
function init(){
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cero = document.getElementById("0");

var pantalla = document.getElementById("display");

uno.addEventListener("click",function(){
pantalla.textContent+="1";
})
dos.addEventListener("click",function(){
pantalla.textContent+="2";
})


}

init();
