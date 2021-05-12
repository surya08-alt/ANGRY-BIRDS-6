class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png")
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>5&&this.body.position.x>210)
    {
    var pos=[this.body.position.x,this.body.position.y]
    this.trajectory.push(pos)
    }
    for(var S=0;S<this.trajectory.length;S++){
    image(this.smokeimage,this.trajectory[S][0],this.trajectory[S][1])

    }
  }
}
