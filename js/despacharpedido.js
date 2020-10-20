function despachar () {
    var opcion = confirm("Al despachar el pedido, este desaparecerá de la lista.");
    if (opcion) {
        return true;
    }
    else {
        return false;
    }
}