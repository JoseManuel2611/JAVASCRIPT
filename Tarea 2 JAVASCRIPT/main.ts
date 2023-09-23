import "./style.css";

console.log("Laboratorio Módulo 3");

//Definimos las clases de los géneros de música
const poprock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardrock = "🤘 Hard Rock";
const classic = "🎼 Clásica";

//Estilos
const estiloNombre = "font-style: bold; font-size: 20px; background-color: #48B515";

//Definimos las interfaces
interface Groupname {
    nombre: string,
    año: number
    género: string
};

let groupPop : Groupname = {
    nombre: "The Beatles",
    año: 1960,
    género: `${poprock}`,
};

let musicalRock : Groupname = {
    nombre: "Queen",
    año: 1970,
    género: `${rock}`,
};

let musicalHard : Groupname = {
    nombre: "AC DC",
    año: 1973,
    género: `${hardrock}`,
};

let musicalClassic : Groupname = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    género: `${classic}`,
};

let groupRock : Groupname = {
    nombre: "The Rolling Stones",
    año: 1962,
    género: `${rock}`,
};



console.log("%cThe Beattles", estiloNombre, groupPop, true);
console.log("%cQueen", estiloNombre,musicalRock, false);
console.log("%cAC DC", estiloNombre,musicalHard, true);
console.log("%cLudwig van Beethoven", estiloNombre,musicalClassic, false);
console.log("%cThe Rolling Stones", estiloNombre,groupRock, true);
