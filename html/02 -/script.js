const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let dots = [];

for (var i = 0; i < 10; i++) {
  addPoint();
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  if(Math.random()<0.01){
    addPoint();
  dots.splice(0,1);

  }
  ctx.fillStyle = "rgba(2,4,8,0.2)";
  ctx.beginPath();
  ctx.moveTo(dots[0].x,dots[0].y);
  for (var i = 0; i < dots.length; i++) {
    ctx.lineWidth = 2;
    ctx.lineTo(dots[i].x,dots[i].y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

animate();

function randomNumber(max){
  return Math.random()*max;
}

function addPoint(){
  let dot = new Point(randomNumber(canvas.width),randomNumber(canvas.height));
  dots.push(dot);
}
