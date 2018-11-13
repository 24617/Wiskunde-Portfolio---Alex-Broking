class Point2 {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  pos(vector){
    this.x = vector.dx;
    this.y = vector.dy;
  }

  draw2(ctx){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.color;
    ctx.lineWidth= 4;
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();  }
}
