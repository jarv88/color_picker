"use strict";

var color = document.querySelector("#color");
var salida = document.querySelector("#salida");

function cambiarSalida(newInput) {
  salida.innerHTML = newInput;
}

color.addEventListener("input", function () {
  var value = color.value; //console.log(value);
  //cambiarSalida(value);

  document.querySelector("#salida").innerHTML = value; //document.body.style.backgroundColor=value;

  document.querySelector("#salida").style.backgroundColor = value;
});