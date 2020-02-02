import { $ } from './selectors.js';
import { actived, inactived } from './temas.js';

/* ==================================================
			VALIDANDO O NOSSO CHECKED
   =================================================*/

const validChecked = () => {
	if($("#checked").checked) {
		actived();
		localStorage.setItem('checked', true); // Setando nosso localStorage.
		if(!localStorage.create) {
			localStorage.setItem('create', 'yes');
		}
	} else {
		inactived();
		localStorage.setItem('checked', false); // Setando nosso localStorage.	
	}
}

export { validChecked };