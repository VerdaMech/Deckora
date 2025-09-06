/* PRODUCTOS MITOS */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    productosMi.forEach(productoMi => {
        html += `
            <div class="pro" onclick="clickProductos(${productoMi.id})">
                <img src="${productoMi.url}" alt="${productoMi.nombre}" class="carta-mitos"}>
                <div class="desc">
                    <span>${productoMi.edicion}</span>
                    <h5>${productoMi.nombre}</h5>
                    <h4>$${productoMi.precio}</h4>
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
        window.location.href= `../../html/productos/productoMi.html?id=${id}`;
    }