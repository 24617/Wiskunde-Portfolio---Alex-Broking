const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let kineticObjects = [];


function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  if(Math.random()<0.1){
    let kineticObject = {};
    kineticObject.ball = new Point(0,0,30,"white");
    kineticObject.pos = new Vector2d(GetRandomNumber(canvas.width),-100);
    kineticObject.vel = new Vector2d(0,1);
    kineticObject.acc = new Vector2d(0,0.2);
    kineticObjects.push(kineticObject);
  }

  for (var i = 0; i < kineticObjects.length; i++) {
  //  kineticObjects[i].vel.add(kineticObjects[i].acc);
    kineticObjects[i].pos.add(kineticObjects[i].vel);
    kineticObjects[i].ball.position(kineticObjects[i].pos);
    kineticObjects[i].ball.draw(ctx);
  }

  for (var i = 0; i < kineticObjects.length; i++) {
    if(kineticObjects[i].pos.dy > canvas.height + 100){
      kineticObjects.splice(i,1)
    }
  }
}

document.addEventListener('mousedown',(evt)=>{
  let mousePos = {};
  mousePos.x = evt.clientX;
  mousePos.y = evt.clientY;
  for (var i = 0; i < kineticObjects.length; i++) {
    if(kineticObjects[i].ball.distanceToAnOtherPoint(mousePos) <kineticObjects[i].ball.r){
      kineticObjects[i].ball.color = "yellow";
    }
  }
})

animate();

function GetRandomNumber(max) {
  return Math.floor(Math.random()*max);
}
