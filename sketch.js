var hr,mn,sc,scAngle,hrAngle,mnAngle
hr = hour();
mn = minute();
sc = second();
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
  mnAngle = map(mn,0,60,0,360)
  hr = hour();
mn = minute();
sc = second();
translate (400,200)
rotate(-90)
push ()
rotate (scAngle)
stroke ("red");
strokeWeight(7);
line (0,0,100,0);
pop ()
push ()
rotate (mnAngle)
stroke("green")
strokeWeight(7);
line(0,0,75,0)
pop ()
push ()
rotate(hrAngle)
stroke("purple")
strokeWeight(7);
line(0,0,50,0)
pop()
strokeWeight(10)
stroke("black")
arc (0,0,300,300,0,scAngle)
stroke("yellow")
arc (0,0,280,280,0,mnAngle)
stroke("blue")
arc(0,0,260,260,0,hrAngle)
  drawSprites();


}
