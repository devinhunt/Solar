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
    
    /** You! */
    var player = new Player(400, 300);
    
    /** Bunch of simple particles */
    var bullets = [];

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
        // bullets
        for(b in bullets) {
            bullets[b].update(delta);
        }
        
        // Thrust
        if(Input.isPressed(Input.UP)) {
            player.vx += Math.cos(player.theta) * player.thrust * delta;
            player.vy += Math.sin(player.theta) * player.thrust * delta;
        }
        
        // Direction
        if(Input.isPressed(Input.LEFT)) {
            player.theta -= .01;
        }
        if(Input.isPressed(Input.RIGHT)) {
            player.theta += .01;
        }
        
        // shoots!
        if(Input.isPressed(Input.FIRE)) {
            var b = new Actor(player.x, 
                    player.y, 
                    200 * Math.cos(player.theta), 
                    200 * Math.sin(player.theta))
            bullets.push(b);
        }
        
        player.update(delta);
    };


    /** 
     * Render the world
     */
    var render = function() {
        backgroundClear();
        
        for(b in bullets) {
            bullets[b].render();
        }
        player.render();
    };
    
    // Kickoff!
    var then = Date.now();
    setInterval(loopdeloop, 1);
    
})();