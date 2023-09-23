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

//let const
let descuento1= 0.8;
let iva2 = 1.22;
let PrecioProduct1 = 150;
let PrecioProduct2 = 35;
iva = 1.1; //Aplicamos IVA reducido

console.log(100 * descuento1 * iva + 30 * descuento1 * iva);

//const, no nos permite cambiar de valor más adelante
//const sólo deja definir el valor inicial
//tiene su utilidad ya que hay variables que solo vamos a asignar una vez
//y nos sirve para no equivocarnos
const descuento7= 0.7;
const iva3 = 1.22;
let productos = 160;
let producto = 40;
iva = 1.1; //Aplicamos IVA reducido

console.log(100 * descuento1 * iva + 30 * descuento1 * iva);

