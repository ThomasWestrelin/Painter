function setLineWidth(value) {
  if (value) {
    canvas.lineWidth++;
  }
  else {
    canvas.lineWidth--;
  }
  if (canvas.lineWidth >= 25) {
    canvas.lineWidth = 25;
  }
  else if (canvas.lineWidth < 0) {
    canvas.lineWidth = 1;
  }
  document.getElementById('lineWidthValue').value = canvas.lineWidth;
  drawCurrentLine();
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
  drawCurrentLine();
}

document.getElementById('lower').addEventListener('mousedown', function(event) {
  setLineWidth(false);
});

document.getElementById('upper').addEventListener('mousedown', function(event) {
  if (canvas.lineWidth <= 100) {
    setLineWidth(true);
  }
});
