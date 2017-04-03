var lista = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener("click", function(){
	list.innerHTML += '<li>item '+(list.getElementsByTagName("li").length)+'</li>';
});