// Sumar
function sumar() {
    // Leer los valores de los inputs
    const sumando1 = document.getElementById("sumando1").value;
    const sumando2 = document.getElementById("sumando2").value;
    // Sumar los dos números
    const resultado = parseInt(sumando1) + parseInt(sumando2);
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = resultado;
    }

    const botonSumar = document.getElementById("sumar");
    botonSumar.addEventListener("click", sumar);
/* addEventListener nos permite asociar una función (un evento) a ese
botón (es decir, cada vez que el usuario pulse el botón, 
se ejecutará la función que le hemos indicado). */

//Depurar
function saludar () {
    //Leer valores de inputs
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
     //Concatenar los valores
    const resultado1 = `¡Hola ${name} ${surname}!`;
    //Mostrar el resultado
    document.getElementById("resultado1").innerHTML = resultado1;
}

const botonSaludar = document.getElementById("saludar");
botonSaludar.addEventListener("click", saludar);

//Carrusel de fotos y fat arrow
sessionStorage