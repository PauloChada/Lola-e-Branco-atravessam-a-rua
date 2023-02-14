// Variaveis X
let xCarros = [600, 5, 600, 600, 5, 5];
let yCarros = [40, 97, 150, 210, 265, 320];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < carros.length; i += 1){
    image(carros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
// (i = i + 1) ou (i += 1) ou (i++)

//function mostraCarro(){
// image(carros[0], xCarros[0], yCarros[0], 50, 40);
// image(carros[1], xCarros[1], yCarros[1], 50, 40);
// image(carros[2], xCarros[2], yCarros[2], 50, 40);
// image(carros[3], xCarros[3], yCarros[3], 55, 40);
// image(carros[4], xCarros[4], yCarros[4], 45, 40);
// image(carros[5], xCarros[5], yCarros[5], 50, 40);
//}
//(x, y, comprimento, altura)

function movimentaCarro(){
  xCarros[0] -= 5;
  xCarros[1] += 4;
  xCarros[2] -= 10;
  xCarros[3] -= 8;
  xCarros[4] += 6;
  xCarros[5] += 3;
}

function voltaPosicaoInicialDoCarro(){
  if (xCarros[0] < -50){xCarros[0] = 600}
  if (xCarros[1] > 650){xCarros[1]  = 5}
  if (xCarros[2] < -50){xCarros[2] = 600}
  if (xCarros[3] < -55){xCarros[3] = 600}
  if (xCarros[4] > 645){xCarros[4] = 5}
  if (xCarros[5] > 650){xCarros[5] = 5}
}
