class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true






    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");
    this.complife1 = "green"
    this.complife2 = "green"
    this.complife3 = "green"
        World.add(world, this.body);
  }

  life()
  {
  push()

textSize(50)
fill("white")
text("Computer",1600,height-800)


fill(this.complife1)
rect(1600,200,30,20)


fill(this.complife2)
rect(1570,200,30,20)


fill(this.complife3)
rect(1630,200,30,20)

pop()

  }

   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
