
    let turno = 0;

    function actualizarDisplay() {
      // Formatear el turno a dos dígitos usando padStart
      const turnoFormateado = turno.toString().padStart(2, '0');
      document.getElementById('turno-display').textContent = turnoFormateado;
      document.getElementById('input-turno').value = turnoFormateado;
    }

    function siguienteTurno() {
      turno++;
      actualizarDisplay();
    }

    function anteriorTurno() {
      turno = Math.max(0, turno - 1); // Asegurarse de que el turno no sea negativo
      actualizarDisplay();
    }

    function resetTurno() {
      turno = 0;
      actualizarDisplay();
    }

    function cambiarTurno() {
      const nuevoTurno = parseInt(document.getElementById('input-turno').value, 10) || 0;
      turno = nuevoTurno;
      actualizarDisplay();
    }

    //Inicializar la pantalla con el turno actualizado
    actualizarDisplay();