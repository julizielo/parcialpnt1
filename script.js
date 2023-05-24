
function validarString(input) {
    let valor = input.value;
    let soloLetras = /^[a-zA-Z]+$/;
    if (soloLetras.test(valor)) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        alert("El valor ingresado solo debe contener letras");
        input.value = "";
    }
}

function validarTicket(input) {
    let valor = input.value;
    let soloNumeros = /^[0-4]+$/;
    if (soloNumeros.test(valor)) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        alert("El valor ingresado solo debe contener numeros");
        input.value = "";
    }
}

function validarEmail(input) {
    let valor = input.value;
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValido.test(valor)) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        alert("El valor ingresado no es un email válido");
        input.value;
    }
}

function mostrarReserva() {
    var precio;
    var cantTickets = parseInt(document.getElementById("cantick").value);
    precio = 2500 * cantTickets;

    var mensaje = document.getElementById("fname").value +
        " ha reservado " + document.getElementById("cantick").value +
        " tickets para ver " + document.getElementById("espectaculo").value +
        " el dia " + document.getElementById("fecha").value +
        " por valor de $" + precio +
        ". Recibirá un mail de reserva en el mail " + document.getElementById("email").value

    alert(mensaje);
}


