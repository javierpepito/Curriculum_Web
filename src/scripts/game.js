import { Objetct } from "./objetcts.js";
import { Ship } from "./ship.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nave_pixel = document.getElementById("nave_pixel");
canvas.width = 900;
canvas.height = 600;

const ship = new Ship(ctx, nave_pixel);

function background(){
    ctx.fillStyle = "#130000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

// Funcion main para iterar y mostrar el juego.
function update(){
    background();
    ship.update();
    requestAnimationFrame(update);
}
update();