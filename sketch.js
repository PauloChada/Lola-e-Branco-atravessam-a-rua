function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraLola();
  movimentaLola();
  mostraGaia();
  mostraBranco();
  movimentaBranco();
  mostraLetras();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  mostraPontos();
  marcaPonto();
}



