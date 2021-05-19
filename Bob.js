class Bob{
    constructor(x,y,radius){
        var options = {isStatic: false, density: 0.5}
        this.body = Bodies.circle(x,y,radius,options);
        
        this.radius = radius
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        push()
        
        translate(pos.x,pos.y);
        fill("pink");
        stroke("black")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        
         pop()
        
    }
}