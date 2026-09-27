let total = 0;
let listaPedido = [];

function agregarAlPedido(nombrePlato, precio) {
    total = total + precio;
    listaPedido.push(nombrePlato);

    document.getElementById("texto-pedido").innerText = listaPedido.join(", ");
    document.getElementById("precio-total").innerText = total.toFixed(2);
}

function filtrarMenu(categoria) {
    let platos = document.querySelectorAll(".dish-card");

    platos.forEach(function(plato) {
        if (categoria === 'todos') {
            plato.style.display = "block";
        } else if (plato.classList.contains(categoria)) {
            plato.style.display = "block";
        } else {
            plato.style.display = "none";
        }
    });

    let botones = document.querySelectorAll(".filter-btn");
    botones.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

function enviarPedidoWhatsApp() {
    if (listaPedido.length === 0) {
        alert("¡Por favor añade al menos un plato a tu pedido!");
        return;
    }

    let mensaje = "Hola, me gustaría pedir: " + listaPedido.join(", ") + ". Total: " + total.toFixed(2) + "€";
    let url = "https://wa.me/34612404235?text=" + encodeURIComponent(mensaje);
    
    window.open(url, "_blank");
}


