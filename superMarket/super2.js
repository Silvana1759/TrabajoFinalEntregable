"use strict"
let contenedor = document.getElementById("contenedor");
let lista = document.getElementById("lista");
let btnTotal = document.getElementById("btnTotal");
let cantidadTotal = document.getElementById("cantidadTotal");
const productos =["Pan", "Shampoo", "Lavandina", "Carne", "Jugo", "Cerveza", "Aceite", "Helado", "Verdura", "Huevos", "Azucar", "Fernet"];
const precios = [1700, 4200, 3500, 4500, 2500, 920, 2000, 3500, 1500, 4500, 3200, 2300];

const stock = [12, 10, 8, 5, 3, 22, 10, 3, 15, 6, 10, 23];

function pintarProductos(arrayProductos, arrayPrecios, arrayStock) {
        for(let i=0; i< arrayPrecios.length; i++) {
            let li = document.createElement("li");
            li.dataset.producto = arrayProductos[i];
            let texto = document.createTextNode(`Producto:  ${arrayProductos[i]} - Precio:$   ${arrayPrecios[i]} - Stock: ${arrayStock[i]}`);
         
        

        let input=document.createElement("input");
        input.type="number";
        input.min="0";
        input.value="0";
        input.dataset.precio = arrayPrecios[i];
        input.dataset.stock = arrayStock[i];

        let precioTotal=document.createElement("span");
        precioTotal.textContent= "- Total: $ 0";

        let boton=document.createElement("button");
        boton.textContent="comprar";
        boton.onclick=function(){
            calcularPrecioTotal(input,precioTotal);
        };
      
        li.appendChild(texto);
        li.appendChild(input);
        li.appendChild(boton);
        li.appendChild(precioTotal);

        lista.appendChild(li);
        }
}


pintarProductos(productos, precios, stock);

function calcularPrecioTotal(input,precioTotal){
    let cantidad=parseInt(input.value) || 0;
    let precioUnitario=parseInt(input.dataset.precio) || 0;
    let stockDisponible = parseInt(input.dataset.stock)  || 0;
    if(cantidad < 0){
        alert("La cantidad no puede ser menor a 0");
        input.value = "0";
        return;
    }
    if (cantidad > stockDisponible){
        alert(`La cantidad (${cantidad}) es mayor al stock disponible (${stockDisponible}).`);
        input.value = "0";
        return;
    }
    let totalProducto = cantidad * precioUnitario;
    precioTotal.textContent=` - Total: $ ${totalProducto}`;
    input.dataset.stock = stockDisponible - cantidad;
    let textoProducto = input.parentElement.childNodes[1];
    textoProducto.textContent =(`Producto:  ${input.parentElement.dataset.producto} - Precio:$  ${precioUnitario} - Stock: ${input.dataset.stock}`); 
    calcularTotal();
}

function calcularTotal(){
    let inputs = document.querySelectorAll("li input");
    let total= 0;
    inputs.forEach(input => {
        let cantidad = parseInt(input.value) || 0;
        let precioUnitario = parseInt(input.dataset.precio) || 0;
        total += cantidad * precioUnitario;
    });

     cantidadTotal.textContent=`Total a pagar:$ ${total}`;
}


