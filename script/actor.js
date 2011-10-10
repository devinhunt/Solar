/**
 * Actors are the basic game-unit that appear on the screen and move about
 */

window.Actor = function(x, y){
    
    /** Current position */
    this.p = new Vector(x, y);
    
    /** Current velocity */
    this.v = new Vector();
    
    /** Direction we're facing */
    this.theta = 0;
    
    /** Total energy */
    this.energy = 100;
    
    this.update = function(delta) {
        
        // Thrust
        if(Input.isPressed(Input.UP) && this.v.length() < 100) {
            this.v.addIn({x: Math.cos(this.theta) * delta, y: Math.sin(this.theta) * delta});
        }
        
        // Diretion
        if(Input.isPressed(Input.LEFT)) {
            this.theta -= .01;
        }
        
        if(Input.isPressed(Input.RIGHT)) {
            this.theta += .01;
        }
        
        this.p.addIn(this.v);
    };
    
    this.render = function() {
        ctx.fillStyle="#000000";
        drawCircle(this.p.x, this.p.y, 10);
        
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 2;
        drawLine(this.p.x, this.p.y, this.p.x + 15 * Math.cos(this.theta), this.p.y + 15 * Math.sin(this.theta));
    };
};