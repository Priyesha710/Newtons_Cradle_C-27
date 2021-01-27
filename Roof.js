class Roof{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,300,30,options);
        World.add(userWorld,this.body);
    }

    display(){
        rectMode(CENTER);
        fill("gray");
        rect(this.body.position.x,this.body.position.y,600,30);

    }
}