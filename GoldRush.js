class GoldRush extends Matrix {
  constructor(numRow, numCol) {
    super(numRow, numCol);
    this.p1 = {coords :{ x: 0, y: 0 },score : 0};
    this.p2 = {coords:{x: numCol - 1, y: numRow - 1 },score : 0};
    this.coins 
  }

  generateCoins(numCoins){
      let y, x
      for(let i = 0; i< numCoins; i++){
           y = Math.floor(Math.random() * this.matrix.length)
           x = Math.floor(Math.random() * this.matrix[0].length)
           if(this.get(y,x) == "."){
               this.alter(y,x,"C")
           }
      }
      this.coins = numCoins
  }
  generateWalls(numWalls){
    let y, x
    for(let i = 0; i< numWalls; i++){
         y = Math.floor(Math.random() * this.matrix.length)
         x = Math.floor(Math.random() * this.matrix[0].length)
         if(this.get(y,x) == "." /*&&((this.get(y+1,x) || this.get(y-1,x) || this.get(y,x+1) ||this.
         get(y,x-1)) == "."*/){
             this.alter(y,x,"wall")
         }else{
           i--
         }
    }
}

  movePlayer(player, direction) {
    
    switch (direction) {
      case "up":
          if(this.validateMove(player,direction)){
              this.moveUp(player);
              break;
          }
      case "down":
        if(this.validateMove(player,direction)){
            this.moveDown(player);
            break;
        }
      case "left":
        if(this.validateMove(player,direction)){
            this.moveLeft(player);
            break;
        }
      case "right":
        if(this.validateMove(player,direction)){
            this.moveRight(player);
            break;
        }
    }
  }

  validateMove(player, direction) {
      const currPosition = (player == 1? this.p1.coords : this.p2.coords) 
      let nextSpot
    switch (direction) {
      case "up":
          nextSpot = this.matrix[currPosition.y - 1]; 
          nextSpot? nextSpot = this.matrix[currPosition.y - 1][currPosition.x] : nextSpot = undefined
          break;
      case "down":
          nextSpot = this.matrix[currPosition.y + 1];
          nextSpot? nextSpot = this.matrix[currPosition.y + 1][currPosition.x] : nextSpot = undefined
          break;
      case "left":
         nextSpot = this.matrix[currPosition.y][currPosition.x -1];
         break;
      case "right":
         nextSpot = this.matrix[currPosition.y ][currPosition.x + 1];
         break;
    }
    if (!nextSpot || nextSpot == "wall" || nextSpot == 1 || nextSpot == 2) {
        return false
    }else if(nextSpot == "C"){
        player == 1? this.p1.score++ : this.p2.score++
    }
    return true
  }

  moveUp(player,) {
    const position = (player == 1 ? this.p1.coords : this.p2.coords)
      this.alter(position.y, position.x, ".");
      this.alter(position.y - 1, position.x, player);
      position.y -=1
    }
  
  moveDown(player) {
    const position = (player == 1 ? this.p1.coords : this.p2.coords)
      this.alter(position.y, position.x, ".");
      this.alter(position.y + 1, position.x, player);
      position.y +=1
    }

    moveLeft(player){
        const position = (player == 1 ? this.p1.coords : this.p2.coords)
        this.alter(position.y, position.x, ".");
        this.alter(position.y, position.x -1, player);
        position.x -=1  
    }
  

  moveRight(player) {
      const position = (player == 1 ? this.p1.coords : this.p2.coords)
      this.alter(position.y, position.x, ".");
      this.alter(position.y, position.x + 1, player);
      position.x +=1
    }
  
}
