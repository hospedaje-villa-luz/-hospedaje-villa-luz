let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

function guardar() {
    localStorage.setItem("reservas", JSON.stringify(reservas));
}

function mostrarReservas() {
    let tabla = document.getElementById("tablaReservas");
    tabla.innerHTML = "";

    reservas.forEach((r, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${r.nombre}</td>
                <td>${r.inicio}</td>
                <td>${r.final}</td>
                <td class="acciones">
                    <button onclick="editar(${index})">Editar</button>
                    <button onclick="eliminar(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function agregarReserva() {
    let nombre = document.getElementById("nombre").value;
    let inicio = document.getElementById("inicio").value;
    let final = document.getElementById("final").value;

    if (!nombre || !inicio || !final) {
        alert("Completa todos los campos.");
        return;
    }

    reservas.push({ nombre, inicio, final });
    guardar();
    mostrarReservas();

    document.getElementById("nombre").value = "";
    document.getElementById("inicio").value = "";
    document.getElementById("final").value = "";
}

function eliminar(i) {
    if (confirm("¿Eliminar esta reserva?")) {
        reservas.splice(i, 1);
        guardar();
        mostrarReservas();
    }
}

function editar(i) {
    let nuevoInicio = prompt("Nueva fecha de inicio:", reservas[i].inicio);
    let nuevoFinal = prompt("Nueva fecha final:", reservas[i].final);

    if (nuevoInicio && nuevoFinal) {
        reservas[i].inicio = nuevoInicio;
        reservas[i].final = nuevoFinal;
        guardar();
        mostrarReservas();
    }
}

mostrarReservas();
