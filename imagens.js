// Variaveis
let imagemDaEstrada;
let gaia;
let letras2;
let lola;
let carro1;
let carro2;
let carro3;
let carro4;
let carro5;
let carro6;
let branco;

let somDaColisao;
let somDoPonto;
let somDaTrilha;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  gaia = loadImage("Imagens/husky.png");
  letras2 = loadImage("Imagens/letras2.png");
  lola = loadImage("Imagens/lola1.png");
  branco = loadImage("Imagens/branco.png");
  carro1 = loadImage("Imagens/carro-1.png");
  carro2 = loadImage("Imagens/carro-2.png");
  carro3 = loadImage("Imagens/carro-3.png");
  carro4 = loadImage("Imagens/carro-4.png");
  carro5 = loadImage("Imagens/carro-5.png");
  carro6 = loadImage("Imagens/carro-6.png");
  carros = [carro1, carro2, carro3, carro4, carro5, carro6];

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}

function mostraGaia(){
  image(gaia, 200, -2, 45, 40); // (x, y, comprimento, altura)
}

function mostraLetras(){
  image(letras2, 250, -1, 100, 38); // (x, y, comprimento, altura)
}
