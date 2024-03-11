let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
let mayusculas = /[A-Z]/g;  
let vacio="";
let reglaDeEncriptado = {
    "e":"enter",
    "i":"imes",
    "a":"ai",
    "o":"ober",
    "u":"ufat"};

function verificarCaracteres (textoUsuario) {
    if (textoUsuario == vacio) {
        alert("No puedes dejar el campo vacio");
        return false
    }

    if(textoUsuario.match(mayusculas)||textoUsuario.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return false
    }

    return true

}

function encriptarTexto () {
    let palabraDeUsuario = document.getElementById("textoUsuario").value;
    if (!verificarCaracteres(palabraDeUsuario)) {
        return
    }
    
    let resultado = "";
    for (const obj in reglaDeEncriptado) {
        resultado = palabraDeUsuario.replaceAll(obj, reglaDeEncriptado[obj]);
        palabraDeUsuario = resultado
    }

    document.querySelector("#textoResultado").innerHTML = resultado;
    document.querySelector(".copiar-button").removeAttribute('disabled');

    return
}

function desencriptarTexto () {
    let palabraEncriptado = document.getElementById("textoUsuario").value;
    let encriptado = "";
    for (const obj in reglaDeEncriptado) {
        encriptado = palabraEncriptado.replaceAll(reglaDeEncriptado[obj], obj);
        palabraEncriptado = encriptado
    }
    
    document.querySelector("#textoResultado").innerHTML = encriptado;
    document.querySelector(".copiar-button").removeAttribute('disabled');

    return
}

function copiarTexto () {
    let textoACopiar = document.getElementById("textoResultado").innerText;
    navigator.clipboard.writeText(textoACopiar)
    
    return
}

function recargarPagina() {
    location.reload();
}