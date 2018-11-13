const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gear1 = new Image();
gear1.rot = 0;
gear1.src = "Gear_7.svg.png";

let gear2 = new Image();
gear2.rot = 0.4;
gear2.src = "Gear_7.svg.png";

let gear3 = new Image();
gear3.rot = 0;
gear3.src = "Gear_7.svg.png";

let gear4 = new Image();
gear4.rot = 0.4;
gear4.src = "black-gear-hi.png";

let gear5 = new Image();
gear5.rot = 0.4;
gear5.src = "black-gear-hi.png";

gear1.addEventListener('load',()=>{
  animate();
})


function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.save();
  ctx.translate(100,200);
  ctx.rotate(gear1.rot);
  ctx.drawImage(gear1,-gear1.width/2,-gear1.height/2);
  ctx.restore();

  ctx.save();
  ctx.translate(250,200);
  ctx.rotate(gear2.rot);
  ctx.drawImage(gear2,-gear2.width/2,-gear2.height/2);
  ctx.restore();

  ctx.save();
  ctx.translate(356,306);
  ctx.rotate(gear3.rot);
  ctx.drawImage(gear3,-gear3.width/2,-gear3.height/2);
  ctx.restore();

  ctx.save();
  ctx.translate(600,600);
  ctx.rotate(gear4.rot);
  ctx.drawImage(gear4,-gear4.width/2,-gear4.height/2);
  ctx.restore();

  ctx.save();
  ctx.translate(920,130);
  ctx.rotate(gear5.rot);
  ctx.drawImage(gear5,-gear5.width/2,-gear5.height/2);
  ctx.restore();

  gear1.rot += 0.01;
  gear2.rot -= 0.01;
  gear3.rot += 0.01;
  gear4.rot -= 0.01;
  gear5.rot += 0.01;
}
