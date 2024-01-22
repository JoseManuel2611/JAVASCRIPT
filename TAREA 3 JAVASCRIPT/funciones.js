
let turno = 1; // Puedes inicializar el turno como desees

function actualizarTurno() {
  const turnoFormateado = turno.toString().padStart(2, '0');
  document.querySelector('.numero-turno').textContent = turnoFormateado;
}

function siguienteTurno() {
  turno++;
  actualizarTurno();
}

function anteriorTurno() {
  turno = Math.max(1, turno - 1); // Asegurarse de que el turno no sea menor que 1
  actualizarTurno();
}

function cambiarTurno() {
  const nuevoTurno = parseInt(document.getElementById('input-turno').value, 10);
  if (!isNaN(nuevoTurno) && nuevoTurno > 0) {
    turno = nuevoTurno;
    actualizarTurno();
  } else {
    alert('Ingrese un valor válido para el turno.');
  }
}

// Inicializar la pantalla con el turno actualizado
actualizarTurno();
