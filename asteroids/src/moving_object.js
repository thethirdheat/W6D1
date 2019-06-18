function  MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}


MovingObject.prototype.draw  = function(ctx){
  ctx.beginPath();
  ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI);
  ctx.stroke();


}

module.exports = MovingObject