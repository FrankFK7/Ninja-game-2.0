class Obstacle {
    constructor(){
        this.speed = 10;
        this.position = {
            x: 350,
            y: 350
        }
        this.width = 50;
        this.height = 50;
        
        this.x = math.random() *canvas.width
        this.y = 0
    }
    // drawObstacle = () => {
    //     this.ctx.fillRect (this.x, this.y, this.obsHeight, this.obsWidth)
    // }
    // moveObstacle = () =>{
    //     this.y += 10

    // }
}
class Player {
    constructor() {
      this.speed = 10;
      this.position = {
        x: 300,
        y: 300,
      };
      this.velocity = {
        x: 0,
        y: 0,
      };
      this.width = 50;
      this.height = 50;{
      }
    }
    function (draw) {
        
    }
      }