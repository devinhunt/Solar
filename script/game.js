/**
 * Solar: The Game: The Legend
 * @author Devin Hunt
 */
 
(function() {
    
    /**
     * Initialize the game
     */
    window.startSolar = function() {
        var canvas = document.createElement("canvas");
        window.ctx = canvas.getContext("2d");
        canvas.id = "solar-canvas";
        canvas.width = 800;
        canvas.height = 600;
        document.body.appendChild(canvas);
    };

    /**
     * Main game loop
     */
    var loopdeloop = function() {
        var now = Date.now();
        var delta = now - then;
        
        update(delta / 1000);
        render();
        
        then = now;
    };

    /**
     * Update all game objects 
     */
    var update = function(delta) {
    
    };


    /** 
     * Render the world
     */
    var render = function() {
    
    };
    
})();