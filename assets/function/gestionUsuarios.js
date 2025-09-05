let correosRegistrados = ["vicente@gmail.com"];
let passwordRegistrados = ["vicente123"];


function iniciarSesion(){
    let correo = document.getElementById("correo");
    let verCorreo = validarCorreo(correo.value,"login");
    let password = document.getElementById("contrasena");
    let verPassword = validarContrasena(password.value,"login");

    if(verCorreo == 1 && verPassword == 1){
        alert("inicio de sesión correcto ");
        console.log(verCorreo);
        console.log(verPassword);
        console.log(passwordRegistrados);
        correo.value = "";
        password.value = "";
        window.location.href = "../../../index.html";
    }else{
        alert("No se pudo iniciar sesion");
        console.log(verCorreo);
        console.log(verPassword);
    }
}

function registrarCuenta(){
    let nombre = document.getElementById("nombre");
    let verNombre = validarNombreApellido("Nombre",nombre.value);
    let apellidos = document.getElementById("apellidos");
    let verApellidos = validarNombreApellido("Apellidos",apellidos.value);
    let correo = document.getElementById("correo");
    let verCorreo = validarCorreo(correo.value,"registro");
    let numero = document.getElementById("telefono");
    let verNumero = validarNumero(numero.value);
    let password = document.getElementById("contrasena");
    let verPassword = validarContrasena(password.value,"registro");
    let repPassword = document.getElementById("repetir-contrasena");
    let verRepPassword = validarContrasena(repPassword.value,"registro");

    if (password.value != repPassword.value){
        alert("Las contraseñas deben ser iguales");
        verPassword = 0;
    }

    if(verNombre == 1 && verApellidos == 1 && verCorreo == 1 && verPassword == 1 && verNumero == 1 && verRepPassword == 1){
        alert("Cuenta creada exitosamente ");
        console.log(verCorreo);
        console.log(verPassword);
        console.log(verNombre);
        console.log(verApellidos);
        console.log(verNumero);
        console.log(verRepPassword);
        nombre.value = "";
        apellidos.value = "";
        correo.value = "";
        password.value = "";
        numero.value = "";
        repPassword.value = "";
        console.log(correosRegistrados);
        console.log(passwordRegistrados);
    }else{
        alert("El correo no se registro")
        console.log(verNombre);
        console.log(verApellidos);
        console.log(verCorreo);
        console.log(verPassword);
        console.log(verNumero);
        console.log(verRepPassword);
        console.log(correosRegistrados);
        console.log(passwordRegistrados);
    }
}

function validarCorreo(texto, tipo){

    if(validarCampos(texto) == 0){
        console.log("Input correo vacío");
        alert("Campo correo vacío");
        return 0;
    }
    else if(texto.length > 100){
        console.log("El texto no puede tener más de 100 caracteres");
        alert("No puedes ingresar más de 100 caracteres");
        return 0;
    }
    else if(!texto.includes("@duoc.cl") && !texto.includes("@profesor.duoc.cl") && !texto.includes("@gmail.com")){
        alert("El correo solo permite: @duoc.cl / @profesor.duoc.cl / @gmail.com");
        console.log("Formato de correo incorrecto");
        return 0;
    }
    
    if(tipo === "login"){
        if(validarArray(texto) == 0){
            alert("El correo no está registrado");
            return 0;
        }else{
            return 1;
        }
    }else if(tipo === "registro"){
        if(validarArray(texto) == 1){
            alert("El correo ya está registrado");
            return 0;
        }else{
            correosRegistrados.push(texto);
            return 1;
        }
    }else{
        return 1;
    }

}

function validarContrasena(texto,tipo){
    if(validarCampos(texto) == 0){
        console.log("Input Contraseña vacío");
        alert("Campo contraseña vacío");
        return 0;
    }else if(texto.length < 4 || texto.length > 11){
        alert("La contraseña debe tener entre 4 y 10 caracteres");
        return 0;
    }
    
    if(tipo === "login"){
        if(validarArray(texto) == 0){
        console.log("Contraseña no registrada");
        alert("La contraseña es incorrecta");
        return 0;
        }
    }else if(tipo === "registro"){
        passwordRegistrados.push(texto);
    }
    return 1;


}


function validarArray(texto){

    if(correosRegistrados.includes(texto)){
        return  1;
    }  
    if(passwordRegistrados.includes(texto)){
        return 1;
    }
    return 0;
}

function validarNombreApellido(atributo, texto){

    if(validarCampos(texto) == 1){
        if(texto.length > 100){
            alert("El campo "+atributo+" no puede superar los 100 caracteres")  
            return 0;
        }else{
            return 1;
        }   
    }else{
        alert("El campo "+atributo+" esta vacío")  
        return 0;
    }

}

function validarNumero(valor){
    if(validarCampos(valor) == 0){
        console.log("Input apellidos vacío");
        alert("Campo número vacío");
        return 0;
    }else if(valor.length > 15){
        console.log("El número de telefono no puede contener más de 15 dígitos");
        alert("No puedes ingresar más de 15 números");
        return 0;
    }else{
        return 1;
    }
}

function validarCampos(texto){

  if(texto.trim() == "" ){
    return 0;
  }else{
    return 1;
  }

}


