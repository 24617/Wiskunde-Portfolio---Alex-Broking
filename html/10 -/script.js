const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let A = new Point(600,600,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(300,600,20,"yellow");
let AB = new Point(0,0,20,"green");
let AC = new Point(0,0,20,"green");
let BC = new Point(0,0,20,"green");
let ABC = new Point(0,0,20,"purple")

let l = new LinearFunction(0.5,0.5);
let m = new LinearFunction(0.5,0.5);
let n = new LinearFunction(0.5,0.5);
let o = new LinearFunction(0.5,0.5);
let p = new LinearFunction(0.5,0.5);
let q = new LinearFunction(0.5,0.5);

A.drag(); B.drag(); C.drag();

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  l.defineLineWithTwoPoint(A,B);
  n.defineLineWithTwoPoint(A,C);
  o.defineLineWithTwoPoint(B,C);
  m.defineLineWithTwoPoint(C,AB);
  p.defineLineWithTwoPoint(B,AC);
  q.defineLineWithTwoPoint(A,BC);
  l.draw(ctx);  n.draw(ctx);  o.draw(ctx);
  m.draw(ctx);  p.draw(ctx);  q.draw(ctx);

  AB.x = (A.x + B.x) / 2;
  AB.y = (A.y + B.y) / 2;
  AB.draw(ctx);

  AC.x = (A.x + C.x) / 2;
  AC.y = (A.y + C.y) / 2;
  AC.draw(ctx);

  BC.x = (B.x + C.x) / 2;
  BC.y = (B.y + C.y) / 2;
  BC.draw(ctx);

  ABC.x = (AB.x + AC.x + BC.x) / 3;
  ABC.y = (AB.y + AC.y + BC.y) / 3;
  ABC.draw(ctx);

  A.draw(ctx);
  B.draw(ctx);
  C.draw(ctx);

}

animate();

function GetRandomNumber(max) {
  return Math.random()*max;
}
