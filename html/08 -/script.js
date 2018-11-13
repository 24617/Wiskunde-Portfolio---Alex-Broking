const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(300,300,20,"Green");
let D = new Point(800,300,20,"Yellow");

let S = new Point(0,0,10,"white");

let l = new LinearFunction(0.5,0.5);
let m = new LinearFunction(0.5,0.5);

A.drag(); B.drag(); C.drag(); D.drag();

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  l.defineLineWithTwoPoint(A,B);
  l.draw(ctx);



  m.defineLineWithTwoPoint(C,D);
  m.draw(ctx);

  S.x = l.instersection(m).x;
  S.y = l.instersection(m).y;

  S.draw(ctx);

  A.draw(ctx);
  B.draw(ctx);
  C.draw(ctx);
  D.draw(ctx);

}



animate();

function GetRandomNumber(max) {
  return Math.random()*max;
}
