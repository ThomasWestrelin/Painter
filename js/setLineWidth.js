function setLineWidth(value) {
  canvas.lineWidth = value;
}

document.getElementById('lw1').addEventListener('mousedown', function(event) {
  setLineWidth(1);
});

document.getElementById('lw2').addEventListener('mousedown', function(event) {
  setLineWidth(5);
});

document.getElementById('lw3').addEventListener('mousedown', function(event) {
  setLineWidth(10);
});
