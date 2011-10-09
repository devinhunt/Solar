
// Global canvas context. Must be set before any drawing utils are used
window.ctx = null;

window.drawCircle = function(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
}

window.drawLine = function(x1, y2, x2, y2) {
    
}