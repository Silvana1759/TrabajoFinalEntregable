"use strict"

/*const { INSPECT_MAX_BYTES } = require("buffer")*/

/*let lista = document.getElementById("lista")
const nombreProducto = ["Pan", "Yerba" , "Café", "Juguete sorpresa" , "Shampoo" , "Lavandina" , "Carne surtida" , "Jugo" , "Cerveza" , "Aceite" , "Helado" , "Panqueques mágicos" , "Verdura", "Huevos", "Azúcar", "Fernet"];
const precio = [17000, 54000, 22000, 3500, 42000, 35000, 4500, 25000, 920, 2000, 35000, 850, 1500, 5000, 9000, 2300];
const stock = [12, 6, 3, 20, 10, 8, 5, 3, 22, 10, 3, 30, 15, 6, 10, 23];


function mostrarProductos(arraynombreProducto, arrayPrecio, arrayStock) {
    for(let i = 0; i < arraynombreProducto.length; i++) {
        const productos= [];
        productos.push({
            Nombre: arraynombreProducto[i],
            Precio: arrayPrecio[i],
            Stock: arrayStock[i]
        });

        let li = document.createElement("li");
        let texto =  document.createTextNode('Nombre: ${arraynombreProducto[i]} - Precio: $ ${arrayPrecio[i]} - Stock: ${arrayStock[i]}');
        li.appendChild(texto);
        lista.appendChild(li);
        
     }
}
mostrarProductos(nombreProducto, precio, stock)*/

/*PRODUCTOS*/
/*const productos = [
    {
        id: "pan",
        titulo: "Pan",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/PAN.jpg",
        Precio: 17000,
        Stock: 12
    },
  
    {
        id: "cafe",
        titulo: "Cafe",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/CAFE.jpg",
        Precio: 22000,
        Stock: 3
    },
    {
        id: "juguete",
        titulo: "Juguete sorpresa",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/juguete.jpg",
        Precio: 3500,
        Stock: 20
    },
    {
        id: "shampoo",
        titulo: "Shampoo",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/shampoo.jpg",
        Precio: 42000,
        Stock: 10
    },
    {
        id: "lavandina",
        titulo: "Lavandina",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/lavandina.jpg",
        Precio: 3500,
        Stock: 20
    },
    {
        id: "carne",
        titulo: "Carne surtida",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/carne.jpg",
        Precio: 17000,
        Stock: 12
    },
    {
        id: "jugo",
        titulo: "Jugo",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/jugo.jpg",
        Precio: 25000,
        Stock: 3
    },
    {
        id: "cerveza",
        titulo: "Cerveza",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/cerveza.jpg",
        Precio: 92000,
        Stock: 22
    },  
    {
        id: "aceite",
        titulo: "Aceite",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/aceite.jpg",
        Precio: 2000,
        Stock: 10
    },
    {
        id: "helado",
        titulo: "Helado",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/helado.jpg",
        Precio: 35000,
        Stock: 3
    },
    {
        id: "panqueques",
        titulo: "Panqueques mágicos",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/panqueques.jpg",
        Precio: 850,
        Stock: 30
    },
    {
        id: "verduras",
        titulo: "Verduras",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/VERDURAS.jpg",
        Precio: 1500,
        Stock: 15
    },
    {
        id: "huevos",
        titulo: "Huevos",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/huevos.jpg",
        Precio: 5000,
        Stock: 6
    },
    {
        id: "azucar",
        titulo: "Azúcar",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/azucar.jpg",
        Precio: 9000,
        Stock: 10
    },
    {
        id: "fernet",
        titulo: "Fernet",
        imagen: "./TPFinal_Supermercado/superMarket/imagenesyTexto/FERNET.jpg",
        Precio: 23000,
        Stock: 23
    }*/

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
console.log(`su nombre es: ${informacion[0]}`);
let blob = new Blob([informacion],{type: "text/plain;charset=utf-8"});
saveAs(blob,"contacto.txt");
});