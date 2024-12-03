let body1 = document.querySelector('body');
let tapa = document.querySelector('.tapa');

let i = 3;
setInterval(() => 
	tapa.textContent = i--, 
	1000);
   
setTimeout(function() {
   tapa.style.display = 'none';
} , 4000);

