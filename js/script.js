let body1 = document.querySelector('body');
let tapa = document.querySelector('.tapa');
body1.style.backgroundImage = 'url(/pics/tq.jpeg)';
body1.style.backgroundRepeat = 'repeat';
body1.style.backgroundSize = 'cover';
let i = 3;
setInterval(() => 
	tapa.textContent = i--, 
	1000);
   
setTimeout(function() {
   tapa.style.display = 'none';
} , 4000);

