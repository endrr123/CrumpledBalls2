class Paper{
    constructor(x,y,radius){
        var options = {isStatic: false, density: 1.2, friction: 3.0}
        this.body = Bodies.circle(x,y,radius,options);
        
        this.radius = radius
        this.image = loadImage("paper.png")
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER)
        image(this.image, 0, 0, 25, 25)
        
         pop()
        
    }
}