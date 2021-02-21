class Dustbin {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //rectMode(CENTER);
    //strokeWeight(2);
    //stroke("yellow")
    //fill("darkred");
    //rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 650, 580, this.width, this.height+200);
  }
}