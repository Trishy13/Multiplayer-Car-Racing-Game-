class Game {

  constructor(){}

  getState(){

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState : state
    })
  }

  async start(){

    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");

      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form();
      form.display();
    }
  }

  play(){
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

      background("#c68767");
      var index = 0, x = 175, y;

      for(var plr in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if(index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index - 1].y;
        }
      }
    }
  }
}