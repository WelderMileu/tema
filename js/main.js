import { $ } from './selectors.js';
import { validChecked } from './valida.js';
import { local } from './localStorage.js';

(function(){
	"use strict";
	
	// Adidicionando um evendo a nossa função de temas.
	$('#checked').addEventListener('click', validChecked);

	// Chamando a funções.
	local();
	validChecked();

})();