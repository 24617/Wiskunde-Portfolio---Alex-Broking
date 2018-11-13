class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.draggable = false;


  }

  draw(ctx){
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.ClosePath;
    ctx.stroke();
    ctx.fill();

  }

  printText(myText){
    ctx.fillstyle = "black";
    ctx.font = "15px Arial";
    ctx.fillText(myText,this.x,this.y - 12);
  }

  position(vector){
    this.x = vector.dx;
    this.y = vector.dy;
  }

  distanceToAnOtherPoint(P){
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

  drag(){
    let dragStatus = false;
    let mousePos = {};
    document.addEventListener('mousedown',(evt)=>{
      mousePos.x = evt.clientX;
      mousePos.y = evt.clientY;
      if(this.distanceToAnOtherPoint(mousePos) <= this.r){
        dragStatus = true;
      } else {
        dragStatus = false;
      }
    });

    document.addEventListener('mousemove',(evt)=>{
      mousePos.x = evt.clientX;
      mousePos.y = evt.clientY;
          if(this.distanceToAnOtherPoint(mousePos) <= this.r){
            canvas.style.cursor = "pointer";
            evt.stopImmediatePropagation();
          } else {
            canvas.style.cursor = "default";
          }
      if (dragStatus){
        this.x = mousePos.x;
        this.y = mousePos.y;
      }
    });

    document.addEventListener('mouseup',(evt)=>{
        dragStatus = false;
    });
  }
}
