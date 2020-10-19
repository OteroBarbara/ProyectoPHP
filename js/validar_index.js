function validarindex () {
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("pword").value;

    if (!((/^\w{6,50}$/gm).test(usuario))) {
        alert("El usuario debe tener entre 6 y 50 caracteres alfanuméricos");
        return false;
    }
    else if (!((/^\w{6,50}$/gm).test(pass))) {
        alert("La contraseña debe tener entre 6 y 50 caracteres");
        return false;
    }
    else {
        return true;
    }
}