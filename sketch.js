function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDoEspaco);
  mostraAstronaut();    
  mostraNave();
  movimentaNave();
  movimentaAstronaut();
  voltaPosicaoInicialDaNave ();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}