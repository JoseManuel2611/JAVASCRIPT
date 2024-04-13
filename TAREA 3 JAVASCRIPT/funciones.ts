let turno: number = 1; // Puedes inicializar el turno como desees

function actualizarTurno(): void {
  const turnoFormateado: string = turno.toString().padStart(2, '0');
  const numeroTurnoElement = document.querySelector('.numero-turno');
  if (numeroTurnoElement) {
    numeroTurnoElement.textContent = turnoFormateado;
  }
}

function siguienteTurno(): void {
  turno++;
  actualizarTurno();
}

function anteriorTurno(): void {
  turno--;
  if (turno < 1) {
    turno = 1;
  }
  actualizarTurno();
}

function cambiarTurno(): void {
  const inputTurnoElement = document.getElementById('input-turno') as HTMLInputElement;
  const nuevoTurno: string = inputTurnoElement.value;
  const parsedTurno: number = parseInt(nuevoTurno, 10);
  if (!isNaN(parsedTurno) && parsedTurno > 0) {
    turno = parsedTurno;
    actualizarTurno();
  } else {
    alert('Ingrese un valor válido para el turno.');
  }
}

// Inicializar la pantalla con el turno actualizado
actualizarTurno();