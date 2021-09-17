class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);

    this.life1 = "green"
    this.life2 = "green"
    this.life3 = "green"
  }

  life()
  {
  push()

textSize(50)
fill("white")
text("Player",280,height-800)


fill(this.life1)
rect(210,200,30,20)


fill(this.life2)
rect(240,200,30,20)


fill(this.life3)
rect(270,200,30,20)

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
