function validar_index () {
    var usuario = document.getElementById("user");
    var contraseña = document.getElementById("pword");
    if (usuario.length < 6) {
        alert("El usuario tiene menos de 6 caracteres");
        return false;
    }
    else if (usuario.length < 6) {
        alert("El usuario tiene menos de 6 caracteres");
        return false;
    }
    else if (contraseña.length < 6) {
        alert("La contraseña tiene menos de 6 caracteres");
        return false;
    }
    else {
        return true;
    }
}