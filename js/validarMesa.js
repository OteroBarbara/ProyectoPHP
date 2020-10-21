function cerrarMesa () {
    var opcion = confirm("¿Desea cerrar esta mesa? La información de la misma dejará de estar en el inicio, pero podrá visualizarla en el historial.");
    if (opcion) {
        return true;
    }
    else {
        return false;
    }
}