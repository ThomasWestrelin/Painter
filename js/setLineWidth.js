function setLineWidth(value) {
  if (value) {
    canvas.lineWidth++;
  }
  else {
    canvas.lineWidth--;
  }
  document.getElementById('lineWidthValue').value = canvas.lineWidth;
}

function setLineWidthEnterField(value) {
  if (value >= 25) {
    value = 25;
  }
  else if (value < 0) {
    value = 1;
  }
  canvas.lineWidth = value;
  document.getElementById('lineWidthValue').value = value;
}

document.getElementById('lower').addEventListener('mousedown', function(event) {
  setLineWidth(false);
});

document.getElementById('upper').addEventListener('mousedown', function(event) {
  if (canvas.lineWidth <= 100) {
    setLineWidth(true);
  }
});
