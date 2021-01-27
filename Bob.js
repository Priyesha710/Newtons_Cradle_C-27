class Bob{
    constructor(x,y){
        var options = {
            restitution: 1,
            density: 1,
            friction: 0,
            frictionAir: 0,
            frictionStatic: 0
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(userWorld,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,100,100);
    }
}