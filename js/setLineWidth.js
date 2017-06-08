function setLineWidth(value) {
  if (value) {
    canvas.lineWidth++;
  }
  else {
    canvas.lineWidth--;
  }
}


document.getElementById('lower').addEventListener('mousedown', function(event) {
  setLineWidth(false);
});

document.getElementById('upper').addEventListener('mousedown', function(event) {
  setLineWidth(true);
});
