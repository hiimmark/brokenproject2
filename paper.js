class paper extends Baseclass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("paper.png")

        
    }
    display(){
        this.body.position.x = 200
        this.body.position.y = 640
        super.display();
    }
    
}