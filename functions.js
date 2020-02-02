// Selectores.
const $ = event => document.querySelector(event);

/* ==================================================
			FUNÇÃO PARA SETAR O NOSSO TEMA
   ================================================= */

// Setando nossos estilos do tema.
const actived = () => {
	$('body').classList.add("bg-dark");
	$('.list').classList.add("text-light"); 
	$('h1').classList.add("text-light");
}

// Rempovendo nossos estilos do tema.
const inactived = () => {
	$('body').classList.remove("bg-dark");
	$('.list').classList.remove("text-light");
	$('h1').classList.remove("text-light");
}

// Validando o nosso checked.
const validChecked = () => {
	if($("#checked").checked) {
		actived();
		localStorage.setItem('checked', true); // Setando nosso localStorage.
		localStorage.setItem('create', 'yes');
	} else {
		inactived();
		localStorage.setItem('checked', false); // Setando nosso localStorage.	
	}
}

// Validando nosso localStorage.
const local = () => {

	if (localStorage.create) {
		if (localStorage.checked === "true") {
			actived();
			$("#checked").checked = true;
		} else {
			inactived();
			$("#checked").checked = false;
		}
	}
}

// Exportando nossas variaveis.
export { validChecked, $, local };




