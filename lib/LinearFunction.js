class LinearFunction {
  constructor(slope,intercept) {
  this.slope = slope;
  this.intercept = intercept;
  }

  calcY(x){
    return this.slope * x + this.intercept;
  }

  defineLineWithTwoPoint(A,B){
    this.slope = (B.y - A.y)/(B.x - A.x);
    this.intercept = A.y - this.slope*A.x;
  }

  defineLineWithThreePoint(A,B,C){
    this.slope = (C.y - B.y - A.y)/(C.x - B.x - A.x);
    this.intercept = A.y - this.slope*A.x;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(0,this.calcY(0));
    ctx.lineTo(canvas.width,this.calcY(canvas.width));
    ctx.clostPath;
    ctx.stroke();
  }

  instersection(m){
    let ans = {};
    ans.x = (m.intercept - this.intercept) / (this.slope - m.slope);
    ans.y = this.calcY(ans.x);
    return ans;
  }


}
