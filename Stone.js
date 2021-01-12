class Stone{
    constructor(x,y,radius){
    var option = {
        isStatic : false,
        restitution : 0,
        friction : 1,
        density : 0.8
    }
    this.body = Bodies.circle(x,y,radius,option)
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.image = loadImage("stone.png");
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