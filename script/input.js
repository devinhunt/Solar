/**
 * Global object to store / query user input
 */

window.Input = new (function() {
    
    /** Constants */
    this.LEFT = 37;
    this.UP = 38;
    this.RIGHT = 39;
    this.DOWN = 40;
    
    /** 
     * Holds the states of keys pressed. 
     * 0 is released
     * 1 is pressed
     */
    var map = {};
    
    this.isPressed = function(keyCode) {
        return map[keyCode];
    };
    
    this.onKeyDown = function(event) {
        map[event.keyCode] = 1;
    };
    
    this.onKeyUp = function(event) {
        map[event.keyCode] = 0;
    };
})();