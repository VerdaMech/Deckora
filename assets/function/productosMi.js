/* PRODUCTOS MITOS */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    productosMi.forEach(productoMi => {
        html +=`
            <div class="pro" >
                <div class="desc">
                    <img src="${productoMi.url}" alt="${productoMi.nombre}" class="carta-mtg"} onclick="clickProductos(${productoMi.id})">
                    <span>${productoMi.edicion}</span>
                    <h5>${productoMi.nombre}</h5>
                    <p class= "precio" >$<span class= "precio">${productoMi.precio}</span></p>
                    <div class="carrito-casa anadir-carrito">
                        <a href="#"><img src="../../imagenes/iconos/carrito.ico" alt="anadir-carrito" class="carrito"></a>
                    </div>
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