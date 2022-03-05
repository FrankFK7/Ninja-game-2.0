class Player extends Component {
    constructor(classGame, x, y, w, h, imageSrc){
        super(classGame, x, y, w, h, imageSrc);
        
        this.immunity = false;
        this.lives = 3;
    }

    move(){
        document.addEventListener("keydown", (event) => {
            // console.log(event.code);
        
            switch(event.code){
         
                case "ArrowRight":
                case "KeyD":
                    this.x += 30;
                    break;
                case "ArrowLeft": 
                case "KeyA":   
                    if(this.x > 0) this.x -= 30;
                    break;
                case "ArrowUp":
                case "KeyW":
                    this.y -= 30;
                    break;
                case "ArrowDown":
                case "KeyS":    
                    this.y += 30;
                    break;
                default:
                    console.log("You are not using arrow keys!");
            }
        })
    }

    switchImmunity(){
        this.immunity = true;
    
        setTimeout(() => {
            this.immunity = false;
        }, 1000);
    }
}