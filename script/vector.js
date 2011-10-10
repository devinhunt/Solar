/**
 * Vector.js
 * 2d Vector library for Javascript
 * @author Devin Hunt
 * @author_uri http://hailpixel.com
 */

window.Vector = function(ix, iy) {
    this.x = ix || 0;
    this.y = iy || 0;
};
_.extend(Vector.prototype, {
    
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    
    unit: function() {
        var mag = this.length();
        
        if(mag > 0.0001) {
            return new Vector(this.x / mag, this.y / mag);
        } else {
            return new Vector();
        }
    },
    
    /**
     * Rerturns the sum of two vectors
     */
    add: function(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    },
    
    /**
     * Adds the a vector
     */
    addIn: function(v) {
        this.x += v.x;
        this.y += v.y;
    }
});