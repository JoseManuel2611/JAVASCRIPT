// Variables
let turnoActual = 1;
const numeroTurnoElement = document.querySelector('.numero-turno') as HTMLHeadingElement; // Use type assertion for better type safety
const textoTurnoElement = document.querySelector('.texto-turno') as HTMLParagraphElement; // Use type assertion for better type safety
const inputTurnoElement = document.querySelector('.input-turno') as HTMLInputElement; // Use type assertion for better type safety

// Functions
function actualizarTurno() {
  // Format the turnoActual with two digits (Challenge)
  const turnoFormateado = turnoActual.toString().padStart(2, '0');

  // Update the content of the elements
  numeroTurnoElement.textContent = turnoFormateado;
  textoTurnoElement.textContent = "Por favor, acérquese al mostrador"; // Update the message if needed
}

// Event Listeners (assuming you have them defined elsewhere)
// Attach event listeners to buttons for functionality

// Call actualizarTurno on page load using DOMContentLoaded event
document.addEventListener('DOMContentLoaded', actualizarTurno);
