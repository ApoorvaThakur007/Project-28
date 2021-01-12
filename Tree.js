class Tree{
    constructor(x,y,width,height){
    var option = {
        isStatic : true
        //length: 5
        //restitution : 0,
        //friction : 1,
        //density : 1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,option)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("tree.png");
    World.add(world, this.body)
  }
   display(){
    //var pos = this.body.position
    //var angle = this.body.angle
    //push ()
    //translate (pos.x,pos.y)
    //rotate (angle)
    //imageMode(CENTER)
    //strokeWeight(0)
    image.scale=0.05
    image(this.image,this.x,this.y,this.radius,this.radius);
    //pop () 
  }
}