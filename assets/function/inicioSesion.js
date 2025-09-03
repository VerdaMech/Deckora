let correosRegistrados = ["vicente"];
let passwordRegistrados = ["vicente123"];


function iniciarSesion(){
    let correo = document.getElementById("correo");
    let password = document.getElementById("contrasena");
    let verCorreo = validarFull("correo",correo.value);
    let verPassword = validarFull("contraseña",password.value);

    if(verCorreo == 1 && verPassword == 1){
        alert("inicio de sesión correcto ");
    }
}

function validarFull(atributo, valor){
    if(validarCampos(valor) == 1){
        if(validarArray(valor) == 1){
            return 1;
        }else{
            alert("${atributo} incorrecto")    
            return 0;
        }
    }else{
        alert("El campo ${atributo} está vacío")
        return 0;
    }
}

function validarCampos(texto){
    if(texto.trim() == "" ){
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