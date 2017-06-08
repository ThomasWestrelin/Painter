function setLineColor(color) {
  canvas.strokeStyle = color;
}

document.getElementById('lc_black').addEventListener('mousedown', function(event) {
  setLineColor('#000000');
});

document.getElementById('lc_blue').addEventListener('mousedown', function(event) {
  setLineColor('blue');
});

document.getElementById('lc_red').addEventListener('mousedown', function(event) {
  setLineColor('red');
});
