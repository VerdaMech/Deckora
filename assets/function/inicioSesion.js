let correosRegistrados = ["vicente@gmail.com"];
let passwordRegistrados = ["vicente123"];


function iniciarSesion(){
    let correo = document.getElementById("correo");
    let password = document.getElementById("contrasena");
    let verCorreo = validarCorreo(correo.value);
    let verPassword = validarContrasena(password.value);

    if(verCorreo == 1 && verPassword == 1){
        alert("inicio de sesión correcto ");
        console.log(verCorreo);
        console.log(verPassword);
        
        correo.value = "";
        password.value = "";
    }
}


function validarCorreo(texto){

    if(texto.trim() == ""){
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
    }else if(validarArray(texto) == 0){
        alert("El correo no esta registrado")
        console.log("Correo no registrado");
        return 0;
    }else{
        return 1;
    }

}

function validarContrasena(texto){
    if(texto.trim() == ""){
        console.log("Input Contraseña vacío");
        alert("Campo contraseña vacío");
        return 0;
    }else if(texto.length < 4 || texto.length > 11){
        alert("La contraseña debe tener entre 4 y 10 caracteres");
        return 0;
    }else if(validarArray(texto) == 0){
        console.log("Contraseña no registrada");
        alert("La contraseña es incorrecta");
        return 0;
    }else{
        return 1;
    }
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