const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function animate() {
  let ball = new Point(200,200,20,255,255,255);
  ball.draw(ctx);
}

function randomNumber(max) {
  return Math.random()*max;
}

animate();
