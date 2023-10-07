import "./style.css";

console.log("Hello from main");

/*
Modulo 4 Funciones
Funciones: Una función matemática es una regla que asigna a cada número de un conjunto llamado "dominio" un único
número de otro conjunto llamado "contradominio". En otras palabras, una función toma un valor de entrada (el
dominio) y produce un valor de salida (el contradominio) de acuerdo con una regla específica
*/

const valor = 3;

function doble(x) {
    return x * valor;
}

const eldoblededos = doble(2);

console.log(doble(2));
console.log(doble(4));

/* Funcion que calcule el área de un círculo
*/

// area circulo = 2 * PI * radio * radio
function areaDelCirculo(radio) {
    return 2 * Math.PI * radio * radio;
}

console.log(areaDelCirculo(3));
console.log(areaDelCirculo(5));

//area cuadrado = lado * lado
function areaCuadrado(lado) {
    return lado * lado;
}

console.log(areaCuadrado(5));
console.log(areaCuadrado(33));

const resultado = areaCuadrado(6);
console.log(resultado);

//Recetas

const lechuga = "🥬 Lechuga";
const setas = "🍄 Setas";
const alubias = "🫘 Alubias";
const cebolla = "🧅 Cebolla";
const maiz = "🌽 Maíz";
const arandanos = "🫐 Arándanos";
const aceitunas = "🫒 Aceitunas";
const piña = "🍍 Piña";
const mango = "🥭 Mango";
const zanahoria = "🥕 Zanahoria";
const tomate = "🍅 Tomate";
const pepino = "🥒 Pepino";
const aguacate = "🥑 Aguacate";
const bacon = "🥓 Bacon";
const huevo = "🥚 huevos";
const queso = "🧀 Queso";
const pollo= "🍗 Pollo"
const nuez = "🌰 Nuez"

function pintaReceta(Titulo, Ingredientes, Preparación) {
    const estiloTitulo = "color: red; font-size: 18px";
    const estiloFuente = "font-style: italic";

    //Titulo ensalada
    console.log(`%c${Titulo}`, estiloTitulo);

    //Ingredientes
    console.log(`Ingredientes: ${Ingredientes}`);

    //Preparación
    console.log(`Preparación: ${Preparación}`);
}

pintaReceta(
    "Ensalada de alubias con aguacate y huevo",
    `${alubias}, ${aguacate}, ${huevo}, ${cebolla}, ${tomate}, ${lechuga}.`,
    "cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre."
);

//Sumar

