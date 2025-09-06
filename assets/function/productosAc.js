/* PRODUCTOS MAGIC */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    productosAc.forEach(productoAc => {
        html += `
            <div class="pro" onclick="clickProductos(${productoAc.id})">
                <img src="${productoAc.url}" alt="${productoAc.nombre}" class="producto-accesorio"}>
                <div class="desc">
                    <span>${productoAc.edicion}</span>
                    <h5>${productoAc.nombre}</h5>
                    <h4>$${productoAc.precio}</h4>
                </div>
                <div class="carrito-casa">
                    <a href="#"><img src="../../imagenes/iconos/carrito.ico" alt="anadir-carrito" class="carrito"></a>
                </div>
            </div>
        `;
    });
    return html;
}

    const contenedor = document.querySelector('.contenedor-productos');
    contenedor.innerHTML = renderProductos();

        function clickProductos(id) {
        window.location.href= `../../html/productos/productoAc.html?id=${id}`;
    }