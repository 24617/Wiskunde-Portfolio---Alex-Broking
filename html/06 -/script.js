const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



  dragPoint = new Point(GetRandomNumber(canvas.width),GetRandomNumber(canvas.height),20,"red");
  dragPoint.draw(ctx);
  dragPoint.drag();

  let otherDragPoint = new Point(GetRandomNumber(canvas.width),GetRandomNumber(canvas.height),20,"blue");
  otherDragPoint.drag();

  let anotherDragPoint = new Point(GetRandomNumber(canvas.width),GetRandomNumber(canvas.height),20,"yellow");
  anotherDragPoint.drag();


function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.width);
  requestAnimationFrame(animate);
  ctx.beginPath();
  ctx.moveTo(dragPoint.x,dragPoint.y);
  ctx.lineTo(otherDragPoint.x,otherDragPoint.y);
  ctx.lineTo(anotherDragPoint.x,anotherDragPoint.y);
  ctx.closePath();
  ctx.stroke();

  dragPoint.draw(ctx);
  otherDragPoint.draw(ctx);
  anotherDragPoint.draw(ctx);

}

animate();

function GetRandomNumber(max) {
  return Math.random()*max;
}
