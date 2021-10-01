

function scrollTo(element) {
	document.querySelector(element).scrollToIntoView({ behavior: "smooth"});
}

	document.querySelector("#contato").addEventListener("Click", function (event){
	event.preventDefault();


	scrollTo("#contato");

	
	document.querySelector("#sobre").addEventListener("Click", function (event){
	event.preventDefault();


	scrollTo("#sobre");


	document.querySelector("#contato").addEventListener("Click", function (event){
	event.preventDefault();


	scrollTo("#contato");


}