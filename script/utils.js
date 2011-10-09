
// Global canvas context. Must be set before any drawing utils are used
window.ctx = null;

window.backgroundClear = function() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 800, 600);
}
 
window.drawCircle = function(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
}

window.drawLine = function(x1, y1, x2, y2) {
    ctx.beginPath();  
    ctx.moveTo(x1, y1);  
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
}