"use strict"

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let dni = document.getElementById("dni");
let telefono = document.getElementById("telefono");
let comentarios = document.getElementById("comentarios");
let btnEnviar = document.getElementById("enviar");

let informacion = [];


btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = dni.value;
    informacion[3] = telefono.value;
    informacion[4] = comentarios.value;
console.log(`Su nombre es: ${informacion[0]}`);
let blob = new Blob([informacion],{type: "text/plain;charset=utf-8"});
saveAs(blob,"contacto.txt");


nombre.value = '';
apellido.value = '';
dni.value = '';
telefono.value = '';
comentarios.value = '';


});