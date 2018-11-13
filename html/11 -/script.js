const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let A = new Point(600,600,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(300,600,20,"yellow");
let AB = new Point(0,0,20,"green");
let AC = new Point(0,0,20,"green");
let BC = new Point(0,0,20,"green");

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

  l.draw(ctx);
  n.draw(ctx);
  o.draw(ctx);

  m.slope = -1/l.slope;
  m.intercept = C.y - m.slope *C.x;
  m.draw(ctx);

  p.slope = -1/o.slope;
  p.intercept = A.y - p.slope *A.x;
  p.draw(ctx);

  q.slope = -1/n.slope;
  q.intercept = B.y - q.slope *B.x;
  q.draw(ctx);

  AB.x = l.instersection(m).x;
  AB.y = l.instersection(m).y;
  AB.draw(ctx);

  AC.x = o.instersection(p).x;
  AC.y = o.instersection(p).y;
  AC.draw(ctx);

  BC.x = n.instersection(q).x;
  BC.y = n.instersection(q).y;
  BC.draw(ctx);

  A.draw(ctx);
  B.draw(ctx);
  C.draw(ctx);

}

animate();

function GetRandomNumber(max) {
  return Math.random()*max;
}
