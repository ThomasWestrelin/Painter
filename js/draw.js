var click = false;
document.getElementById('c1').addEventListener('mousemove', function(event) {
  if (click) {
    canvas.lineTo(event.pageX, event.pageY);
    canvas.stroke();
  }
});
document.getElementById('c1').addEventListener('mousedown', function(event) {
  click = true;
  canvas.beginPath();
  canvas.moveTo(event.pageX, event.pageY);
});
document.getElementById('c1').addEventListener('mouseup', function(event) {
  click = false;
  canvas.closePath();
  canvas.style.cursor = 'help';
});
