// Importando nossas funçãoes.
import { $, validChecked, local } from './functions.js';

(function(){
	"use strict";
	
	// Adidicionando um evendo a nossa função de temas.
	$('#checked').addEventListener('click', validChecked);

	// Chamando a função do localStorage.
	local();

})();