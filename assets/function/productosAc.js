/* PRODUCTOS MAGIC */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    productosAc.forEach(productoAc => {
        html +=`
            <div class="pro" >
                <div class="desc">
                    <img src="${productoAc.url}" alt="${productoAc.nombre}" class="carta-mtg"} onclick="clickProductos(${productoAc.id})">
                    <span>${productoAc.edicion}</span>
                    <h5>${productoAc.nombre}</h5>
                    <p class= "precio" >$<span class= "precio">${productoAc.precio}</span></p>
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
        window.location.href= `../../html/productos/productoAc.html?id=${id}`;
    }