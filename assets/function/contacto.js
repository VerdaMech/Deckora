function enviarFormulario() {
    // Obtener valores de los campos
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let comentario = document.getElementById("comentario").value.trim();
    let mensajeError = document.getElementById("mensaje-error");
    
    // Regex para validar solo ciertos dominios de correo
    let regexCorreo = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com|live\.com)$/i;
    let errores = [];

    let correos = [gmail, duoc, profesorduoc];
    // Validaciones
    if(nombre === ""){
        errores.push("El nombre es obligatorio.");
    } else if(nombre.length > 100){
        errores.push("El nombre no puede superar los 100 caracteres.");
    }
    if(correo === ""){
        errores.push("El correo es obligatorio.");
    } else if(correo.length > 100){
        errores.push("El correo no puede superar los 100 caracteres.");
    } else if(!regexCorreo.test(correo)){
        errores.push("Correo no válido. Solo se aceptan: gmail, hotmail, outlook, yahoo o live.");
    }
    if(comentario === ""){
        errores.push("El comentario es obligatorio.");
    } else if(comentario.length > 500){
        errores.push("El comentario no puede superar los 500 caracteres.");
    }
    // Mostrar errores o enviar formulario
    if(errores.length > 0){
        mensajeError.innerHTML = errores.join("<br>");
        return;
    }
    mensajeError.innerText = "";
    alert("Formulario enviado correctamente");

    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("comentario").value = "";
}
