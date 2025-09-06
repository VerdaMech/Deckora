/* PRODUCTOS MAGIC */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    productosM.forEach(productoM => {
        html += `
            <div class="pro" onclick="clickProductos(${productoM.id})">
                <img src="${productoM.url}" alt="${productoM.nombre}" class="carta-mtg"}>
                <div class="desc">
                    <span>${productoM.edicion}</span>
                    <h5>${productoM.nombre}</h5>
                    <h4>$${productoM.precio}</h4>
                </div>
                <div class="carrito-casa">
                    <a href="#"><img src="../../imagenes/iconos/carrito.ico" alt="anadir-carrito" class="carrito"></a>
                </div>
            </div>
            
        `;
    });
    return html;
}

    const contenedor = document.querySelector(".contenedor-productos");
    contenedor.innerHTML = renderProductos();


    function clickProductos(id) {
        window.location.href= `../../html/productos/productoM.html?id=${id}`;
    }