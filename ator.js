// Variaveis Y
let xLola = 100;
let yLola = 365;
let colisao = false;
let pontosDaLola = 0;
let pontosDoBranco = 0;
let xBranco = 450;
let yBranco = 365;

function mostraLola(){
  image(lola, xLola, yLola, 35, 32); // (x, y, comprimento, altura)
}

function movimentaLola(){
  if (keyIsDown(87)){yLola -= 4}
  if (keyIsDown(83)){
    if (lolaPodeSeMover()){yLola += 4}
  }
}

function mostraBranco(){
  image(branco, xBranco, yBranco, 35, 32);
}

function movimentaBranco(){
  if (keyIsDown(UP_ARROW)){yBranco -= 4}
  if (keyIsDown(DOWN_ARROW)){
    if (brancoPodeSeMover()){yBranco += 4}
  }
}

function verificaColisao(){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
//collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 0; i < carros.length; i += 1){
    colisaoDaLola = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xLola, yLola, 35, 32)
    if (colisaoDaLola){lolaColidiu()}
  }
  for (let i = 0; i < carros.length; i += 1){
    colisaoDoBranco = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xBranco, yBranco, 35, 32)
    if (colisaoDoBranco){brancoColidiu()}
  }
}

function lolaColidiu(){
  yLola = 365; somDaColisao.play();
  if (pontosDaLola > 0){pontosDaLola -= 1}
}

function brancoColidiu(){
  yBranco = 365; somDaColisao.play();
  if (pontosDoBranco > 0){pontosDoBranco -= 1}
}

function mostraPontos(){
  textSize(25);
  fill(255, 240, 60);
  text(pontosDaLola, 50, 26);
  text(pontosDoBranco, 500, 26);
}

function marcaPonto(){
  if (yLola < 15){pontosDaLola += 1; somDoPonto.play(); yLola = 365}
  if (yBranco < 15){pontosDoBranco += 1; somDoPonto.play(); yBranco = 365}
}

function lolaPodeSeMover(){
  return yLola < 365;
}
function brancoPodeSeMover(){
  return yBranco < 365;  
}
