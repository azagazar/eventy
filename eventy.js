var lista = document.getElementById('list');
var add = document.getElementById('addElem');

document.getElementById("addElem").addEventListener("click", function(){
	list.innerHTML += '<li>'+(document.getElementsByTagName("li").length+1)+'</li>';
});