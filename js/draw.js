var click = false;
document.getElementById('c1').addEventListener('mousemove', function(event) {
  if (click) {
    canvas.lineTo(event.offsetX, event.offsetY);
    canvas.stroke();
  }
});
document.getElementById('c1').addEventListener('mousedown', function(event) {
  click = true;
  canvas.beginPath();
  canvas.moveTo(event.offsetX, event.offsetY);
});
document.getElementById('c1').addEventListener('mouseup', function(event) {
  click = false;
  canvas.closePath();
});
