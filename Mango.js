class Mango{
    constructor(x,y,radius){
    var option = {
        isStatic : true,
        restitution : 0,
        friction : 1,
       // density : 1.2
    }
    this.body = Bodies.circle(x,y,radius,option)
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.image = loadImage("mango.png");
    World.add(world, this.body)
  }
   display(){
    var pos = this.body.position
    var angle = this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    imageMode(RADIUS)
    strokeWeight(0)
    image(this.image,0,0,this.radius,this.radius);
    pop () 
  }
}