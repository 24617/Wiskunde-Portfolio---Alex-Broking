const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let kineticObject = {};


function setUp(){
  kineticObject.dot = new Point(490,310,50,"blue");
  kineticObject.point = new Point(490,200,10,"blue");
  kineticObject.pos = new Vector2d(500,100);
  kineticObject.vel = new Vector2d(3,0);


  animate()
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  kineticObject.pos.add(kineticObject.vel);
  kineticObject.point.position(kineticObject.pos);
  kineticObject.dot.draw(ctx);
  kineticObject.point.draw(ctx);
  if(kineticObject.pos.dx > canvas.width){
    kineticObject.vel.dx = - kineticObject.vel.dx;
    kineticObject.pos.dx = canvas.width;
  }
  if(kineticObject.pos.dx < 0){
    kineticObject.vel.dx = - kineticObject.vel.dx;
    kineticObject.pos.dx = 0;
  }
  if(kineticObject.pos.dy > canvas.height){
    kineticObject.vel.dy = - kineticObject.vel.dy;
    kineticObject.pos.dy = canvas.height;
  }
  if (kineticObject.pos.dy <0) {
    kineticObject.vel.dy = - kineticObject.vel.dy;
    kineticObject.pos.dy = 0;
  }
  
}

setUp()
