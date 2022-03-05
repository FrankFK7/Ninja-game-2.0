class Component {
  constructor(classGame, x, y, w, h, imageSrc){
      this.game = classGame; // We need the "context" from the class Game so we passed the Game object down from the Game class
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.img = new Image();
      this.img.src = imageSrc;
  }

  drawComponent(){
      this.game.context.drawImage(
          this.img,
          this.x,
          this.y,
          this.width,
          this.height    
      )
  }
  // otherComponent ===> superman
  didCollide(otherComponent){
      if (
          // right (case 1)
          otherComponent.x + otherComponent.width - 20 < this.x ||
          // left (case 3)
          otherComponent.x > this.x + this.width ||
          // bottom (case 4)
          this.y > otherComponent.y + otherComponent.height ||         
          // top (case 2)
          otherComponent.y > this.y + this.height
      ) {
  
          if(this.x === 0){
              this.game.score++;
          }
          return false;
      } else {
          return true;
      }
  }
  
}