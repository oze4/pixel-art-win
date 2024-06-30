////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// main.js

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
// Call this *after* changing the canvas width/height
ctx.imageSmoothingEnabled = false;

const player= {
    x: 200,
    y: 100,
    width: 64,
    height: 64,
    frameWidth: 8,
    frameHeight: 8,
    frameX: 0,
    frameY: 0
};

const playerSprite = new Image();
playerSprite.src =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3ElEQVQYlWPg4OAQ+P//PwMhzMTIyPiZAQr6HbX/n8gy+H8iy+A/AwMDQ3Rs9P8lC2b9Z2BgYGD59u3bX5hCAwUJBotQbwasAGZ0Qab3//tX1vw/nqn//3im/v////8zzE4N/A+3moGBgWHTVojxO7ZvYeBNKma4oGTIcPXM4v/IBjIxMDAwCLKxwgUOH9jHwMDAwPD5+1+GlEgbVIW2LO/hArYOTgwMDAwMFrYJjHOWH0FVyOBYxAgT0DaJZRRk52NgYGBgOHnzAaZn/u/r/Y+VDcWM//+juBknAAAS2oNfe59X/wAAAABJRU5ErkJggg==";

function drawSprite(img, frameX, frameY, frameW, frameH, posX, posY, width, height) {
    ctx.drawImage(img, frameX * frameW, frameY * frameH, frameW, frameH, posX, posY, width, height);
}

// Update method

function Draw() {
ctx.clearRect(0,0, canvas.width, canvas.height);
drawSprite(playerSprite, player.frameX, player.frameY, player.frameWidth, player.frameHeight, player.x, player.y, player.width, player.height);
}


let DrawTick = setInterval(Draw, 300);

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// the solution is in the ratio between frameHeight and Height.
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

let zoomLevel = 1.0; // Initial zoom level
let mouseX, mouseY; // Variables to store mouse position
let zoomFactor = 0.1; // How much to zoom in or out
let currentZoom = 1.0;
let maxZoom = 2;
let minZoom = -2;