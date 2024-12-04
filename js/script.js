let body1 = document.querySelector('body');
let tapa = document.querySelector('.tapa');
let wrap = document.querySelector('.wrap');

let i = 3;
setInterval(() => 
	tapa.textContent = i--, 
	1000);
   
setTimeout(function() {
   wrap.style.display = 'none';
} , 4000);
