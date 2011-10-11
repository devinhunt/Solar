/**
 * Actors are the basic game-unit that appear on the screen and move about
 */
Actor = function(x, y){
    /** Current position */
    this.x = x || 0;
    this.y = y || 0;
    
    /** Current velocity */
    this.vx = 0;
    this.vy = 0;
};
Actor.prototype = {
    update: function(delta) {
        this.x += this.vx * delta;
        this.y += this.vy * delta;
    },
    
    render: function() {
        ctx.fillStyle="#000000";
        drawCircle(this.x, this.y, 10);
    }
};


Player = function(x, y) {
    /** Current position */
    this.x = x || 0;
    this.y = y || 0;
    
    /** Current velocity */
    this.vx = 0;
    this.vy = 0;
    
    /** Direction we're facing */
    this.theta = 0;
    
    /** Power of the rocket */
    this.thrust = 100;
    
    /** Total energy */
    this.energy = 100;
};
_.extend(Player.prototype, Actor.prototype, {
    update: function(delta) {
        // Thrust
        if(Input.isPressed(Input.UP)) {
            this.vx += Math.cos(this.theta) * this.thrust * delta;
            this.vy += Math.sin(this.theta) * this.thrust * delta;
        }
        
        // Diretion
        if(Input.isPressed(Input.LEFT)) {
            this.theta -= .01;
        }
        
        if(Input.isPressed(Input.RIGHT)) {
            this.theta += .01;
        }
        
        this.x += this.vx * delta;
        this.y += this.vy * delta;
    },
    
    render: function() {
        ctx.fillStyle="#000000";
        drawCircle(this.x, this.y, 10);
        
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 2;
        drawLine(this.x, this.y, this.x + 15 * Math.cos(this.theta), this.y + 15 * Math.sin(this.theta));
    }
});