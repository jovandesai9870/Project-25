class Paper
{
    constructor(x,y,r){
       var options = {
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
       this.body=Bodies.circle(x,y,r,options);
       this.r=r;
       this.image = loadImage("paper.png");
       World.add(world,this.body); 
      
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        //rectMode(CENTER);
        //fill("silver");
        //ellipse(0, 0, this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0,-45, this.r+130);
        pop();
      }
}