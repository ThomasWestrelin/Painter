canvas = document.getElementById('c1').getContext('2d');
lower = document.getElementById('lower');
upper = document.getElementById('upper');
lc_black = document.getElementById('lc_black').getContext('2d');
lc_blue = document.getElementById('lc_blue').getContext('2d');
lc_red = document.getElementById('lc_red').getContext('2d');

lc_black.fillRect(0, 0, 100, 50);
lc_black.stroke();
lc_blue.fillStyle = 'blue';
lc_blue.fillRect(0, 0, 100, 50);
lc_blue.stroke();
lc_red.fillStyle = 'red';
lc_red.fillRect(0, 0, 100, 50);
lc_red.stroke();
