document.getElementById('input').value = document.location.search.slice(7);
var text = document.getElementById('input').value;
document.getElementById('output').value = md5(text);
var input = document.getElementById('input');
input.oninput = function() {
	var text = document.getElementById('input').value;
	document.getElementById('output').value = md5(text);
};

