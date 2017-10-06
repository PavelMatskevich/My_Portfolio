window.onload = function() {
	var inp = document.querySelector('.menu');
	var ul = document.querySelector('aside ul');
	
	inp.addEventListener('click', function() {
			this.style.display = 'none';
			ul.style.display = 'block';
	});
}