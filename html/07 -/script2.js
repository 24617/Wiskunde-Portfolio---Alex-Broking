const canvas2 = document.getElementById('canvas2');
const context = canvas2.getContext('2d');

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let balls = [];

// for(let i = 0; i< numBalls; i++){
//   let ball = {};
//   ball.point = new Point(0,0,5,"DarkBlue");
//   ball.pos = new Vector2d(randomNumber(0,canvas.width),randomNumber(0,canvas.height));
//   ball.vel = new Vector2d(randomNumber(-10,10),randomNumber(-10,10));
//   balls.push(ball);
// }

function randomNumber2(min,max){
  return Math.random()*(max - min) + min;
}

function animate2(){
  requestAnimationFrame(animate2);
  if(Math.random()<0.5){
      let ball = {};
      ball.point2 = new Point2(0,0,5,"rgba("+randomNumber2(0,50)+","+randomNumber2(0,50)+","+randomNumber2(0,50)+"");
      ball.pos = new Vector2d(randomNumber2(0,canvas2.width),-10);
      ball.vel = new Vector2d(0,randomNumber2(3,5));
      balls.push(ball);
  }
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle= "rgba("+randomNumber2(0,255)+","+randomNumber2(0,255)+","+randomNumber2(0,255)+",0.05)";
  context.fillRect(0,0,canvas2.width,canvas2.height)
  for (var i = 0; i < balls.length; i++) {
    balls[i].pos.add(balls[i].vel);
    balls[i].point2.pos(balls[i].pos);
    balls[i].point2.draw2(context);
    // if(balls[i].pos.dx < balls[i].point.r || balls[i].pos.dx > canvas.width - balls[i].point.r){
    //   balls[i].vel.dx = -balls[i].vel.dx;
    // }
    // if(balls[i].pos.dy < balls[i].point.r ){
    //   balls[i].vel.dy = -balls[i].vel.dy;
    // }

    if(balls[i].pos.dy > canvas2.height-balls[i].point2.r){
      balls.splice(i,1);
    }
  }

}

animate2();
