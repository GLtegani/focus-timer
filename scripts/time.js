// IMPORTS
import { TimerFunctions } from "./utils.js"; // Importa as funções relacionadas ao timer do arquivo utils.js

// DATA
const TimeData = { // Define um objeto TimeData que contém elementos do DOM relacionados ao tempo
  errorAlert: document.querySelector('.empty-value-error'), // Seleciona o elemento com a classe 'empty-value-error'
  minutes: document.querySelector('#minutes'), // Seleciona o elemento com o id 'minutes'
  seconds: document.querySelector('#seconds'), // Seleciona o elemento com o id 'seconds'
};

// FUNCTIONS
const loadInitialItems = () => { // Define uma função chamada loadInitialItems
  TimerFunctions.resetDefaultValue(); // Chama a função resetDefaultValue do objeto TimerFunctions
};

// EVENTS
window.addEventListener('DOMContentLoaded', loadInitialItems); // Adiciona um evento para executar loadInitialItems quando o conteúdo da página é carregado

// EXPORTS
export { TimeData, loadInitialItems }; // Exporta o objeto TimeData e a função loadInitialItems para serem utilizados em outros arquivos
