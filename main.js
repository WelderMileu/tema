(function(){
	"use strict";

	const $ = event => document.querySelector(event);

	const validChecked = () => {
		
		if($("#checked").checked){
			$('body').classList.add("bg-dark");
			$('.list').classList.add("text-light"); 
			$('h1').classList.add("text-light");
		} else {
			$('body').classList.remove("bg-dark");
			$('.list').classList.remove("text-light");
			$('h1').classList.remove("text-light");
		}
	}
	
	$('#checked').addEventListener('click', validChecked);

})();