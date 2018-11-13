const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let l = new LinearFunction(0.5,0.5);
let C = new Point(100,l.calcY(100),10,"yellow");
let D = new Point(500,l.calcY(500),10,"green");
A.drag(); B.drag();

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  l.defineLineWithTwoPoint(A,B);

  C.x = 0; C.y = l.calcY(0);
  D.x = canvas.width; D.y = l.calcY(canvas.width);
  C.draw(ctx);
  D.draw(ctx);

  ctx.beginPath();
  ctx.moveTo(C.x,C.y);
  ctx.lineTo(D.x,D.y);
  ctx.stroke();

  A.draw(ctx);
  B.draw(ctx);

}



animate();

function GetRandomNumber(max) {
  return Math.random()*max;
}
