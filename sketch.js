// JOGO!


// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// velocidade da bolinha

let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;



//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

// let chanceDeErrar = 0;

//PLACAR DO JOGO!
let meusPontos = 0;
let pontosDoOponente = 0;
  
//SONS DO JOGO!
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup(){
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  midline();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xRaquete, yRaquete);
  incluiPlacar();
  marcaPonto();
  // bolinhaNaoFicaPresa();
  }

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function midline(){
    for(i=0;i<480;i+=10) {
    var y = 0;
    fill(color(250,0,0));
    stroke(0);
    strokeWeight(0)
    rect(width/2,y+i,10,480);
    fill(250,0,0);
    rect(250);
    }
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);

}



function movimentaMinhaRaquete() {
  
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
    
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    
    yRaquete += 10;
    
  }
  
}


function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
}


function movimentaRaqueteOponente(){
    
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
    
  }
  
  if (keyIsDown(83)) {
    
    yRaqueteOponente += 10;
    
  }
  
}
  
  // PLAYER 2 BOT QUASE INVENCÍVEL!
// function movimentaRaqueteOponente(){
//   velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 -30;
  
//   yRaqueteOponente += velocidadeYOponente;
// }


//BOT COM CHANCE DE ERRAR!
// function movimentaRaqueteOponente(){
//   velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
//   yRaqueteOponente += velocidadeYOponente + chanceDeErrar
//   calculaChanceDeErrar()
// }

// function bolinhaNaoFicaPresa(){
//     if (XBolinha - raio < 0){
//     XBolinha = 23
//     }
// }

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if(xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
  }
}


// function calculaChanceDeErrar() {
//   if (pontosDoOponente >= meusPontos) {
//     chanceDeErrar += 1
//     if (chanceDeErrar >= 39){
//     chanceDeErrar = 40
//     }
//   } else {
//     chanceDeErrar -= 1
//     if (chanceDeErrar <= 35){
//     chanceDeErrar = 35
//     }
//   }
// }












