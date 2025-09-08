
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
    let html = '';
    cartasDestacadas.forEach(cartasDestacadas => {
        html += `
            <div class="pro">
                <img src="${cartasDestacadas.url}" alt="${cartasDestacadas.nombre}" class="carta-pokemon"}>
                <div class="desc">
                    <span>${cartasDestacadas.edicion}</span>
                    <h5>${cartasDestacadas.nombre}</h5>
                    <h4>$${cartasDestacadas.precio}</h4>
                </div>
            </div>
        `;
    });
    return html;
}

    const contenedor = document.querySelector('.contenedor-productos');
    contenedor.innerHTML = renderProductos();
