let cor;
let PosicaoHorizontal;
let PosicaoVertical;

let PosicaoHorizontal2;
let PosicaoVertical2;

function setup() {
  createCanvas(400, 400);
  background(color(100,0,0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  PosicaoHorizontal = 0;
  PosicaoVertical = random(height);
  PosicaoHorizontal2 = 0
  PosicaoVertical2 = random(height)
}

function draw() {
  fill(cor);
  circle(PosicaoHorizontal,PosicaoVertical, 50);
  circle(PosicaoHorizontal2,PosicaoVertical2, 50);
  
  PosicaoHorizontal += random(0, 3);
  PosicaoVertical += random(-3, 3);
  PosicaoHorizontal2 += random(0, 3);
  PosicaoVertical2 += random(-3, 3);
  
  if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0,100));
    
  }
}