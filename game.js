class Game {
    constructor(){
        this.canvas = document.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        this.score = 0;
        this.superman = new Player(this, 0, 150, 100, 150, "./images/giphy.gif");
        this.fireball = new Component(this, 800, 200, 70, 70, "./images/obs1.png")
        this.image = new Image ()
    }

    start(){
        this.drawingLoop();

        this.superman.move();
    }

    drawBackground(){

        // image.addEventListener('load', () => {
        //         const ptrn = c.createPattern(image, 'repeat'); // Create a pattern with this image, and set it to "repeat".
        //         c.fillStyle = ptrn;
        //         c.fillRect(0, 0, canvas.width, canvas.height); // context.fillRect(x, y, width, height);
        //       })
        //       x--;
            
        //       if (x >= -canvas.width) {
        //         x = canvas.width;
        //       }
            
        //       y--;
            
        //       if (y <= -canvas.height) {
        //         y = -canvas.height;
        //       }
            
        //      c.drawImage(image, x, 0, canvas.width, canvas.width);
            
        //       c.drawImage(image, y, 0, canvas.height, canvas.height);
            
            
        //     let image = new Image();
            
        //     image.src =
        //       "ninjatheme2.jpg";
            
        this.context.fillStyle = "blue";

        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = "red";
        this.context.font = "25px Arial";
        this.context.fillText(`Score: ${this.score}`, 800, 50);
        this.context.fillText(`Lives: ${this.superman.lives}`, 800, 80);
    }

    drawingLoop(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawBackground();

        this.fireball.drawComponent();
        this.superman.drawComponent();

        this.fireball.x -= 10;
        if (this.fireball.x + this.fireball.width < 0){
            this.fireball.x = this.canvas.width;
            this.fireball.y = Math.random() * (this.canvas.height - this.fireball.height);
            this.fireball.y = Math.random() * (this.canvas.height - this.fireball.height);
        }

        if(this.fireball.didCollide(this.superman)){
            if(this.superman.immunity === false){
                this.superman.lives -=1;
                this.superman.switchImmunity();
            }
        }

        if(this.superman.lives > 0){
            requestAnimationFrame(() => this.drawingLoop());
        }

        if(this.superman.lives === 0){
            // alert("GAME OVER!");

            this.gameOver();
        }


    }

    gameOver(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawBackground();

        const tiredSuperman = new Component(this,250, 50, 400, 300, "./images/TMNTGameOver.png");

        tiredSuperman.img.addEventListener("load", () => {

            tiredSuperman.drawComponent(
                tiredSuperman.img, 
                tiredSuperman.x,
                tiredSuperman.y,
                tiredSuperman.width,
                tiredSuperman.height
            )
        })
    }
}