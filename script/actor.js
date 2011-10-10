/**
 * Actors are the basic game-unit that appear on the screen and move about
 */

window.Actor = function(x, y){
    this.x = x || 0;
    this.y = y || 0;
    
    this.theta = 0;
    this.velocity = 0;
    
    this.energy = 100;
    
    this.update = function(delta) {
        
        // Thrust
        if(Input.isPressed(Input.UP) && this.velocity < 100) {
            this.velocity += .5;
        }
        
        // Diretion
        if(Input.isPressed(Input.LEFT)) {
            this.theta -= .01;
        }
        
        if(Input.isPressed(Input.RIGHT)) {
            this.theta += .01;
        }
        
        this.x += Math.cos(this.theta) * this.velocity * delta;
        this.y += Math.sin(this.theta) * this.velocity * delta;
    };
    
    this.render = function() {
        ctx.fillStyle="#000000";
        drawCircle(this.x, this.y, 10);
        
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 2;
        drawLine(this.x, this.y, this.x + 15 * Math.cos(this.theta), this.y + 15 * Math.sin(this.theta));
    };
};