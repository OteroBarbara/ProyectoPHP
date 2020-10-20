function hacerpedido () {
    var opcion = confirm("¿Confirma el pedido?");
    if (opcion) {
        return true;
    }
    else {
        return false;
    }
}