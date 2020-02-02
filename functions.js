// Selectores.
const $ = event => document.querySelector(event);

// Função para setar o tema.
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

const validChecked = () => {
	if($("#checked").checked) {
		actived();
		localStorage.setItem('checked', true); // Setando nosso localStorage.
	} else {
		inactived();
		localStorage.setItem('checked', false); // Setando nosso localStorage.	
	}
}

// Validando nosso localStorage.
const local = () => {

	if (localStorage.checked) {
		if (localStorage.checked) {
			actived();
		} else {
			inactived();
		}
	}
}

// Exportando nossas variaveis.
export { validChecked, $, local };

