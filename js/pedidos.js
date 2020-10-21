function hacerPedido () {
    var opcion = confirm("¿Confirma el pedido?");
    if (opcion) {
        return true;
    }
    else {
        return false;
    }
}
function despacharPedido () {
    var opcion = confirm("Al despachar el pedido, este desaparecerá de la lista.");
    if (opcion) {
        return true;
    }
    else {
        return false;
    }
}