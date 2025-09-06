/* PRODUCTOS MAGIC */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    productosP.forEach(productoP => {
        html += `
            <div class="pro" onclick="clickProductos(${productoP.id})">
                <img src="${productoP.url}" alt="${productoP.nombre}" class="carta-pokemon"}>
                <div class="desc">
                    <span>${productoP.edicion}</span>
                    <h5>${productoP.nombre}</h5>
                    <h4>$${productoP.precio}</h4>
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
        window.location.href= `../../html/productos/productoP.html?id=${id}`;
    }