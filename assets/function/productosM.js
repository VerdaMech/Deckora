/* PRODUCTOS MAGIC */

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    productosM.forEach(productoM => {
        html += `
            <div class="pro" >
                <div class="desc">
                    <img src="${productoM.url}" alt="${productoM.nombre}" class="carta-mtg"} onclick="clickProductos(${productoM.id})">
                    <span>${productoM.edicion}</span>
                    <h5>${productoM.nombre}</h5>
                    <p class= "precio" >$<span class= "precio">${productoM.precio}</span></p>
                    <div class="carrito-casa anadir-carrito">
                        <a href="#"><img src="../../imagenes/iconos/carrito.ico" alt="anadir-carrito" class="carrito"></a>
                    </div>
                </div>  
            </div>
         
        `;
    });
    return html;
}

const contenedor = document.querySelector(".contenedor-productos");
contenedor.innerHTML = renderProductos();


function clickProductos(id) {
    window.location.href = `../../html/productos/productoM.html?id=${id}`;
}