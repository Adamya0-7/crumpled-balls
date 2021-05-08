class Box{
    constructor(x,y, width, height){
        var options = {isStatic:false, restitution: 1, friction: 0, density: 0.8}
        
        this.body = Matter.Bodies.rectangle(x,y, width, height, options);
        this.height = height;
        this.width = width;
        Matter.World.add(world, this.body)
        this.Image = loadImage("dustbingreen.png")
    }
    display(){
       imageMode(CENTER)
       image(this.Image,this.body.position.x, this.body.position.y, 100, this.height);
    }
    
    
}