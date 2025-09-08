/* PRODUCTOS MAGIC */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    productosP.forEach(productoP => {
        html +=`
            <div class="pro" >
                <div class="desc">
                    <img src="${productoP.url}" alt="${productoP.nombre}" class="carta-mtg"} onclick="clickProductos(${productoP.id})">
                    <span>${productoP.edicion}</span>
                    <h5>${productoP.nombre}</h5>
                    <p class= "precio" >$<span class= "precio">${productoP.precio}</span></p>
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
        window.location.href= `../../html/productos/productoP.html?id=${id}`;
    }