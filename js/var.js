canvas = document.getElementById('c1').getContext('2d');
lw1 = document.getElementById('lw1').getContext('2d');
lw2 = document.getElementById('lw2').getContext('2d');
lw3 = document.getElementById('lw3').getContext('2d');
lc_black = document.getElementById('lc_black').getContext('2d');
lc_blue = document.getElementById('lc_blue').getContext('2d');
lc_red = document.getElementById('lc_red').getContext('2d');
lw1.moveTo(10,25);
lw1.lineTo(90,25);
lw1.stroke();
lw2.lineWidth = 5;
lw2.moveTo(10,25);
lw2.lineTo(90,25);
lw2.stroke();
lw3.lineWidth = 10;
lw3.moveTo(10,25);
lw3.lineTo(90,25);
lw3.stroke();
lc_black.fillRect(0, 0, 100, 50);
lc_black.stroke();
lc_blue.fillStyle = 'blue';
lc_blue.fillRect(0, 0, 100, 50);
lc_blue.stroke();
lc_red.fillStyle = 'red';
lc_red.fillRect(0, 0, 100, 50);
lc_red.stroke();
