document.addEventListener('DOMContentLoaded', function () {
    renderProducto();
});

function renderProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get('id');
    const productoEncontrado = productosP.find(p => p.id == producto);
    if (productoEncontrado) {
        document.getElementById("edicionProducto").innerText = productoEncontrado.edicion;
        document.getElementById("tituloProducto").innerText = productoEncontrado.nombre;
        document.getElementById("imagen-principal-P").src = productoEncontrado.url;
        document.getElementById("valorProducto").innerText = "$" + productoEncontrado.precio;
        document.getElementById("descripcionProducto").innerText = productoEncontrado.descripcion;
        document.getElementById("imagenPequeña1").src = productoEncontrado.imgP1;
        document.getElementById("imagenPequeña2").src = productoEncontrado.imgP2;
        document.getElementById("imagenPequeña3").src = productoEncontrado.imgP3;
        document.getElementById("imagenPequeña4").src = productoEncontrado.imgP4;

    } else {
        document.getElementById("tituloProducto").innerText = "Producto no encontrado";
    }
}

function cambiarImagen1() {

    var ImgPrin = document.getElementById("imagen-principal-P");
    var ImgPeq1 = document.getElementById("imagenPequeña1");
        ImgPrin.src = ImgPeq1.src;
}

function cambiarImagen2() {

    var ImgPrin = document.getElementById("imagen-principal-P");
    var ImgPeq2 = document.getElementById("imagenPequeña2");
        ImgPrin.src = ImgPeq2.src;
}

function cambiarImagen3() {
    var ImgPrin = document.getElementById("imagen-principal-P");
    var ImgPeq3 = document.getElementById("imagenPequeña3");
        ImgPrin.src = ImgPeq3.src;
}

function cambiarImagen4() {

    var ImgPrin = document.getElementById("imagen-principal-P");
    var ImgPeq4 = document.getElementById("imagenPequeña4");
        ImgPrin.src = ImgPeq4.src;
}