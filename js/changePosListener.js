document.addEventListener('keydown', function(event) {
  if ((event.keyCode >= 37 | event.keyCode <= 40) ) {
    canvas.clearRect(0, 0, 300, 300);
    if(event.keyCode == 37) {
      posX -= 5;
    }
    else if(event.keyCode == 39) {
      posX += 5;
    }
    else if(event.keyCode == 40) {
      posY += 5;
    }
    else if(event.keyCode == 38) {
      posY -= 5;
    }
    drawI(canvas2);
    canvas2.stroke();
  }

});
