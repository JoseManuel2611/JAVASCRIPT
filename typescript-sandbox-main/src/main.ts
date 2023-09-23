import "./style.css";

console.log("Laboratorio Módulo 2");

//Variables: es cómo una cajita mágica en la que podemos guardar
//información para usarla más tarde dándoles un nombre para
//encontrarlas más fácil

var descuento = 0.9; //creamos variables para que el código
var iva = 1.21;      //quede más legible

console.log(100 * descuento * iva + 30 * descuento * iva);

//Práctica
var PrecioProducto1 = 100;
var PrecioProducto2 = 30;

console.log(PrecioProducto1 * descuento * iva 
            + PrecioProducto2 * descuento * iva);

//let permite declarar variables limitando su alcance (scope) al bloque, 
//declaración, o expresión donde se está usando
let descuento1= 0.8;
let iva2 = 1.22;
let PrecioProduct1 = 150;
let PrecioProduct2 = 35;
iva = 1.1; //Aplicamos IVA reducido

console.log(PrecioProduct1 * descuento1 * iva2 + PrecioProduct2 * descuento1 * iva2);

//const, no nos permite cambiar de valor más adelante
//const sólo deja definir el valor inicial
//tiene su utilidad ya que hay variables que solo vamos a asignar una vez
//y nos sirve para no equivocarnos
const descuento7= 0.7;
const iva3 = 1.22;
let productos = 160;
let producto = 40;
iva = 1.1; //Aplicamos IVA reducido

console.log(productos * descuento7 * iva3 + producto * descuento7 * iva3);

//const y objetos
//Objetos: son una coleccion de propiedades, que a su vez son pares de claves y valor
//para guardar datos (por ejemplo una ficha de datos de un cliente)
//const solo aplica a su objeto completo, pero no a sus propiedades
const cliente =  {
    nombre: 'Juan',
    apellidos: 'Perez',
    edad: '30',
    direccion: {
        calle: 'calle falsa',
        numero: 123,
        ciudad: 'Madrid',
        codigoPostal: '28001',
    }
}

 //esto es una propiedad (nombre, apellidos...)
cliente.nombre ="Ana";

console.log(cliente);

//Práctica Video const

/*
- Título: "The Catcher in the Rye"
- Autor: "J.D. Salinger"
- Año de publicacion: 1951
*/
let book = {
    titulo: "The Catcher in the Rye",
    autor: "J.D. Salinger",
    añoPublicacion: "1951",
}

book.añoPublicacion= "1953";

console.log(book);

const libro = {
    titulo: "The Catcher in the Rye",
    autor: "J.D. Salinger",
    añoPublicacion: "1951",
}

libro.añoPublicacion= "1953";

/*
Se podrá seguir cambiando, porque resulta que
es una propiedad dentro de un objeto, y no el objeto en sí
Para forzar el error, escribiriamos libro = {
    titulo: "Fundacion Escolaneta"
}
*/
console.log(libro);

//Variables son contenedores para almacenar datos
//Tipos: string, numero, booleano, objeto

let name = "Jose"
let post = "Escolano";

console.log(name + " " + post);

/*oculto el error
name = {
    id: 2,
    ciudad: "Malaga",
};


console.log(name + " " + post);
*/

//Variables: Backticks
const names = "Pepe"
const posts = "Escolano";

const nombreCompleto = `${names} ${posts}`; //esto es un backticks ``

console.log(nombreCompleto);

const nam = "Manolo"
const years= "33";
const cities= "Marbella";

const message = `Hola, mi nombre es ${nam} tengo ${years} años y vivo en ${cities}.`;

//esto es un backticks ``

console.log(message);

//Backticks Ejercicio
/*
Ensalada de alubias con aguacate y huevo
Ingredientes: alubias, aguacate, huevo, cebolla, tomate, lechuga.
Preparación: cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos,
huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada.
Aliñar con aceite de oliva y vinagre.

Ensalada de setas y bacon
Ingredientes: setas, bacon, lechuga, tomate, cebolla, queso.
Preparación: saltear las setas y el bacon hasta que estén dorados. Mezclar con
lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con
aceite de oliva y vinagre.

Ensalada de arándanos y pollo
Ingredientes: arándanos, pollo cocido, lechuga, zanahoria, queso, nueces.
Preparación: mezclar los arándanos con el pollo cocido en cubos, lechuga troceada,
zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de
miel y mostaza.

Ensalada de maíz y piña
Ingredientes: maíz, piña en cubos, lechuga, pepino, cebolla, aguacate.
Preparación: mezclar el maíz con la piña en cubos, lechuga troceada, pepino en
rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de
aceite de oliva y vinagre.

Ensalada de mango y queso feta
Ingredientes: mango en cubos, queso feta, lechuga, cebolla, pepino, aceitunas.
Preparación: mezclar el mango en cubos con el queso feta desmenuzado, lechuga
troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una
vinagreta de limón y aceite de oliva.
*/

/*
🥬 Lechuga
🍄 Setas
🫘 Alubias
🧅 Cebolla
🌽 Maíz
🫐 Arándanos
🫒 Aceitunas
🍍 Piña
🥭 Mango
🥕 Zanahoria
🍅 Tomate
🥒 Pepino
🥑 Aguacate
🥓 Bacon
🥚 huevos
🧀 Queso
*/

const estiloTitulo = "color: red; font-size: 18px";
const estiloFuente = "font-style: italic";

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


//Titulo
console.log("%cEnsalada de alubias con aguacate y huevo", estiloTitulo);
//Ingredientes
console.log(`- Ingredientes: ${alubias}, ${aguacate}, ${huevo}, ${cebolla}, ${tomate}, ${lechuga}.`);
//Preparación
console.log("%c- Preparación: cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre.", estiloFuente);

console.log("*************");

//Titulo
console.log("%cEnsalada de setas y bacon", estiloTitulo);
//Ingredientes
console.log(`- Ingredientes: ${setas}, ${bacon}, ${lechuga}, ${tomate}, ${cebolla}, ${queso}.`);
//Preparación
console.log("%c- Preparación: saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre.", estiloFuente);

console.log("*************");

//Titulo
console.log("%cEnsalada de arándanos y pollo", estiloTitulo);
//Ingredientes
console.log(`- Ingredientes: ${arandanos}, ${pollo}, ${lechuga}, ${zanahoria}, ${queso}, ${nuez}.`);
//Preparación
console.log("%c- Preparación: mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza.", estiloFuente);

console.log("*************");

//Titulo
console.log("%cEnsalada de maíz y piña", estiloTitulo);
//Ingredientes
console.log(`- Ingredientes: ${maiz}, ${piña}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}.`);
//Preparación
console.log("%c- Preparación: mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre.", estiloFuente);

console.log("*************");

//Titulo
console.log("%cEnsalada de mango y queso feta", estiloTitulo);
//Ingredientes
console.log(`- Ingredientes: ${mango}, ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}.`);
//Preparación
console.log("%c- Preparación: mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva.", estiloFuente);

console.log("*************");


//3.2 Typescript
//Tipar el valor inicial
let nameses = "Pepe";

nameses = "Juan";
console.log(nameses);

//Meter una cagada
/*Ocultar cagada
nameses = 23;
console.log(nameses);
*/

/*
Nos saldrá error porque al asignarle inicialmente un string,
Typescript no me va a dejar asignarle después un número,
ya que no es del mismo tipo
*/

//Null y Strict
let nombres : string | null = null //Con | indicamos que puede ser de tipo string o null
nombres = "Rodolfo";
console.log(nombres);

//Meter una cagada
/*Ocultar cagada
nombres = 23;
console.log(nombres);
*/

//Práctica Video y sesion ANY
let year: any = null; //Any acepta todo tipo de dato (string, null o number)

year = "No te lo digo";
console.log(year);

//Interfaces, sirve para decir que la variable es del tipo string, null o number...etc
interface Cliente {
    nombre: string;
    edad: number;
};

const clientA : Cliente = {
    nombre: "Agustin",
    edad: 54,
};

const clientB : Cliente = {
    nombre: "Angel",
    edad: 34,
};

clientA.edad= 54;
clientB.edad= 34; 
console.log(clientA);
console.log(clientB);

/*
- titulo
- director
-año

variable Blade Runner / Ridley Scott / 1982
variable Matrix / Lana Wachowski / 1999
*/
interface Films {
    tit: string;
    director: string;
    año: number;
};

const peliA : Films = {
    tit: "Blade Runner",
    director: "Ridley Scott",
    año: 1982,
};
const peliB : Films = {
    tit: "Matrix",
    director: "Lana Wachowski",
    año: 1999,
};

console.log(peliA);
console.log(peliB);


