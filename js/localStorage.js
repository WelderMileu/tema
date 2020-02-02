import { actived, inactived } from './temas.js';
import { $ } from './selectors.js';

/* ==================================================
			VALIDANDO O NOSSO LOCALSTORAGE
   =================================================*/

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

export { local };