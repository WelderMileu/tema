import { $ } from './selectors.js';

/* ==================================================
				NOSSOS TEMAS
   =================================================*/

// Setando nossos estilos do tema.
const actived = () => {
	$('body').classList.add("bg-dark");
	$('.list').classList.add("text-light"); 
}

// Rempovendo nossos estilos do tema.
const inactived = () => {
	$('body').classList.remove("bg-dark");
	$('.list').classList.remove("text-light");
}

export { actived, inactived };