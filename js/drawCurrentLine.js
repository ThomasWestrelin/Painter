function drawCurrentLine() {
  l_current.clearRect(0, 0, l_current.width, l_current.height);
  l_current.lineWidth = canvas.lineWidth;
  l_current.moveTo(5,25);
  l_current.lineTo(5,25);
  l_current.stroke();
}
