document.getElementById("formReserva").addEventListener("submit", function(e){
    e.preventDefault();

    let inicio = document.getElementById("fechaInicio").value;
    let final = document.getElementById("fechaFinal").value;

    let mensaje = `Hola, quiero realizar una reserva. 
Fecha de inicio: ${inicio}
Fecha final: ${final}`;

    let url = "https://wa.me/573213096656?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
});

function enviarCupon(opcion) {
    let mensaje = `Hola, quiero adquirir el ${opcion}. Mi nombre es: `;
    let numero = "573213096656"; // ← reemplaza por tu número

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
}