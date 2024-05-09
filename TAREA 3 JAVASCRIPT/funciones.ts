// Variables
let currentTurn: number = 1;
const turnNumberElement: HTMLHeadingElement | null = document.querySelector<HTMLHeadingElement>('.numero-turno');
const turnTextElement: HTMLParagraphElement | null = document.querySelector<HTMLParagraphElement>('.texto-turno');
const inputTurnoElement: HTMLInputElement | null = document.querySelector<HTMLInputElement>('.input-turno');
const incrementButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('.increment-button');
const decrementButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('.decrement-button');
const resetButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('.reset-button'); // Optional reset button

const turnMessage: string = "Please approach the counter"; // Extracted string literal

// Functions
function updateTurnDisplay(): void {
  const formattedTurn: string = currentTurn.toString().padStart(2, '0');

  // Update the content of the elements (check for null before accessing properties)
  if (turnNumberElement) {
    turnNumberElement.textContent = formattedTurn;
  }
  if (turnTextElement) {
    turnTextElement.textContent = turnMessage;
  }
}

// Event Listeners (check for null values before attaching event listeners)
if (incrementButton) {
  incrementButton.addEventListener('click', (): void => {
    currentTurn++;
    updateTurnDisplay();
  });
}

if (decrementButton) {
  decrementButton.addEventListener('click', (): void => {
    if (currentTurn > 1) {
      currentTurn--;
      updateTurnDisplay();
    }
  });
}

// Optional reset functionality
if (resetButton) {
  resetButton.addEventListener('click', (): void => {
    currentTurn = 1;
    updateTurnDisplay();
  });
}

// Handle user input (assuming the input element exists)
if (inputTurnoElement) {
  inputTurnoElement.addEventListener('change', (): void => {
    const newTurn = parseInt(inputTurnoElement.value, 10);
    if (!isNaN(newTurn) && newTurn > 0) { // Check if valid number and positive
      currentTurn = newTurn;
      updateTurnDisplay();
    }
  });
}

// Call updateTurnDisplay on page load using DOMContentLoaded event
document.addEventListener('DOMContentLoaded', (): void => {
  updateTurnDisplay();
});
