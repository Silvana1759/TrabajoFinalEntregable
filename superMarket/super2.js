"use strict"
let contenedor = document.getElementById("contenedor");
let lista = document.getElementById("lista");
let btnTotal = document.getElementById("btnTotal");
let cantidadTotal = document.getElementById("cantidadTotal");
const productos =["Pan", "Shampoo", "Lavandina", "Carne", "Jugo", "Cerveza", "Aceite", "Helado", "Verdura", "Huevos", "Azucar", "Fernet"];
const precios = [1700, 4200, 3500, 4500, 2500, 920, 2000, 3500, 1500, 4500, 3200, 2300];
const imagenes = ["./PAN.jpg", "./shampoo.jpg","./lavandina.jpg", "./carne.jpg", "jugo.jpg", "./cerveza.jpg", "./aceite.jpg", "./helado.jpg", "./VERDURAS.jpg", "./huevos.jpg","./azucar.jpg", "FERNET.jpg"];


function pintarProductos(arrayProductos, arrayPrecios, arrayImagenes) {
        for(let i=0; i< arrayPrecios.length; i++) {
            let li = document.createElement("li");
            let texto = document.createTextNode(`Producto:  ${arrayProductos[i]} - Precio:$   ${arrayPrecios[i]}`);
            let imag= document.createElement("img");
        imag.src=arrayImagenes[i];
        imag.alt=`Imagen de ${arrayProductos[i]}`;

        let input=document.createElement("input");
        input.type="number";
        input.min="0";
        input.value="0";
        input.dataset.precio = arrayPrecios[i];

        let precioTotal=document.createElement("span");
        precioTotal.textContent= "- Total: $ 0";

        let boton=document.createElement("button");
        boton.textContent="comprar";
        boton.onclick=function(){
            calcularPrecioTotal(input,precioTotal);
        };
        li.appendChild(imag);
        li.appendChild(texto);
        li.appendChild(input);
        li.appendChild(boton);
        li.appendChild(precioTotal);

        lista.appendChild(li);
        }
}

pintarProductos(productos,precios);
pintarProductos(productos,precios,imagenes);

function calcularPrecioTotal(input,precioTotal){
    let cantidad=parseInt(input.value) || 0;
    let precioUnitario=parseInt(input.dataset.precio) || 0;
    if(cantidad<0){
        alert("la cantidad no puede ser negativa.");
        input.value="0";
        return;
    }
    let totalProducto = cantidad * precioUnitario;
    precioTotal.textContent=` - Total: $${totalProducto}`;
    calcularTotal();
}

function calcularTotal(){
    let inputs = document.querySelectorAll("li input");
    let total= 0;
    inputs.forEach(input => {
        let cantidad = parseInt(input.value) || 0;
        let precioUnitario = parseInt(input.dataset.precio) || 0;
        total +=cantidad * precioUnitario;
    });

     totalCantidad.textContent=`Total a pagar: $${total}`;
}
btnTotal.addEventListener("click", calcularTotal);
/*}function pintarProductos(arrayProductos, arrayPrecios) {*/
