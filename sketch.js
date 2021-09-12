var game, form, player;
var playerCount, gameState = 0;
var database;

function setup(){

  createCanvas(1000,600);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
}

