const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let kineticObjects = [];




for (var i = 0; i < 10; i++) {
  let kineticObject = {};
  kineticObject.point = new Point(200,300,10,"blue");
  kineticObject.pos = new Vector2d(randomNumber(canvas.width),randomNumber(canvas.height));
  kineticObject.vel = new Vector2d(3,0);
  kineticObject.acc = new Vector2d(0,0.5);
  kineticObjects.push(kineticObject);
}



function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  for (var i = 0; i < 10; i++) {
  kineticObjects[i].vel.add(kineticObjects[i].acc);
  kineticObjects[i].pos.add(kineticObjects[i].vel);
  kineticObjects[i].point.position(kineticObjects[i].pos);
  kineticObjects[i].point.draw(ctx);
  if (kineticObjects[i].pos.dx > canvas.width){
    kineticObjects[i].vel.dx = - kineticObjects[i].vel.dx;
    kineticObjects[i].pos.dx = canvas.width;
  }
  if (kineticObjects[i].pos.dx < 0){
    kineticObjects[i].vel.dx = - kineticObjects[i].vel.dx;
    kineticObjects[i].pos.dx = 0;
  }
  if (kineticObjects[i].pos.dy > canvas.height){
    kineticObjects[i].vel.dy = - kineticObjects[i].vel.dy;
    kineticObjects[i].pos.dy = canvas.height;
  }
  if (kineticObjects[i].pos.dy < 0){
    kineticObjects[i].vel.dy = - kineticObjects[i].vel.dy;
    kineticObjects[i].pos.dy = 0;
  }
}

}

function randomNumber(max){
  return Math.random()*max;
}

animate();
