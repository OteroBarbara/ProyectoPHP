function cerrarsesion () {
    var opcion = confirm("¿Desea cerrar sesión?");
    if (opcion) {
        return true;
    }
    else {
        return false;
    }
}