/**
 * Actors are the basic game-unit that appear on the screen and move about
 */

window.Actor = function(x, y){
    this.x = x || 0;
    this.y = y || 0;
    
    this.theta = 0;
    this.thrust = 0;
    
    
    this.update = function() {
        
    };
    
    this.render = function() {
        drawCircle(this.x, this.y, 10);
    };
};