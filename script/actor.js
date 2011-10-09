/**
 * Actors are the basic game-unit that appear on the screen and move about
 */

window.Actor = function(x, y){
    this.x = x || 0;
    this.y = y || 0;
    
    this.theta = 0;
    this.velocity = 0;
    
    
    this.update = function(delta) {
        this.x += Math.cos(this.theta) * this.velocity * delta;
        this.y += Math.sin(this.theta) * this.velocity * delta;
    };
    
    this.render = function() {
        ctx.fillStyle="#000000";
        drawCircle(this.x, this.y, 10);
    };
};