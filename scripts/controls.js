// IMPORTS
import { TimeData } from "./time.js"; // Importa os elementos relacionados ao tempo do arquivo time.js
import { TimerFunctions } from "./utils.js"; // Importa as funções relacionadas ao timer do arquivo utils.js

// DATA
const ControlsData = { // Define um objeto ControlsData que contém elementos do DOM relacionados aos controles do timer
   playBtn: document.querySelector('.play'), // Seleciona o elemento com a classe 'play'
   setBtn: document.querySelector('.set'), // Seleciona o elemento com a classe 'set'
   pauseBtn: document.querySelector('.pause'), // Seleciona o elemento com a classe 'pause'
   stopBtn: document.querySelector('.stop'), // Seleciona o elemento com a classe 'stop'
};

let initialInputsDataForEndTimer = []; // Declara uma array vazia chamada initialInputsDataForEndTimer para armazenar os inputs iniciais para o timer de fim
let initialInputsData = []; // Declara uma array vazia chamada initialInputsData para armazenar os inputs iniciais
const maxInputLength = 1; // Define o comprimento máximo dos inputs

// FUNCTIONS
const startTimer = () => { // Declara uma função chamada startTimer
   captureInitialUserInputs(initialInputsData, TimeData.minutes.value, TimeData.seconds.value, maxInputLength); // Captura os inputs iniciais e os armazena em initialInputsData
   captureInitialUserInputs(initialInputsDataForEndTimer, TimeData.minutes.value, TimeData.seconds.value, maxInputLength); // Captura os inputs iniciais para o timer de fim e os armazena em initialInputsDataForEndTimer
   TimerFunctions.runCutdown(initialInputsDataForEndTimer[0], initialInputsDataForEndTimer[1]); // Inicia o timer
   initialInputsDataForEndTimer = []; // Limpa a array initialInputsDataForEndTimer
};

const captureInitialUserInputs = (array, minute, second, maxLenght) => { // Declara uma função chamada captureInitialUserInputs com parâmetros
   if(array.length < maxLenght) { // Verifica se a array está vazia
      array.push(minute, second); // Adiciona os inputs de minutos e segundos à array
   };
};

const startCounter = (event) => { // Declara uma função chamada startCounter com um parâmetro
   event.preventDefault(); // Previne o comportamento padrão do evento

   // Validações dos inputs
   TimeData.minutes.value = String(TimeData.minutes.value).padStart(2, '0');
   TimeData.seconds.value = String(TimeData.seconds.value).padStart(2, '0');
   const nullMinutesValue = TimeData.minutes.value == 0;
   const emptyMinutesValue = TimeData.minutes.value == '';
   const nullSecondsValue = TimeData.seconds.value == 0;
   const emptySecondsValue = TimeData.seconds.value == '';
   const minutesOrSecondsAreNegative = Math.sign(TimeData.minutes.value) == -1 || Math.sign(TimeData.seconds.value) == -1;
   const inputsNotANumber = isNaN(TimeData.minutes.value) || isNaN(TimeData.seconds.value);
   const reciveAnEmptyAndNumber = /^\s+\d+/;

   // Lógica para iniciar o timer
   if(nullMinutesValue && nullSecondsValue || nullMinutesValue && emptySecondsValue || emptyMinutesValue && nullSecondsValue) {
      TimerFunctions.showErrorMsg(); // Exibe uma mensagem de erro se ambos os campos estiverem vazios
   } else if(emptyMinutesValue && emptySecondsValue || inputsNotANumber || minutesOrSecondsAreNegative){
      TimerFunctions.showErrorMsg(); // Exibe uma mensagem de erro se os campos não forem preenchidos corretamente
   } else if(reciveAnEmptyAndNumber.test(TimeData.minutes.value) || reciveAnEmptyAndNumber.test(TimeData.seconds.value)) {
      TimeData.minutes.value = TimeData.minutes.value.replace(/\s/g, '0');
      TimeData.seconds.value = TimeData.seconds.value.replace(/\s/g, '0');
      startTimer(); // Inicia o timer
   } else if(TimeData.seconds.value > 60) {
      TimeData.seconds.value = 60;
      startTimer(); // Inicia o timer
   } else {
      startTimer(); // Inicia o timer
   };
};

const setTime = (event) => { // Declara uma função chamada setTime com um parâmetro
   event.preventDefault(); // Previne o comportamento padrão do evento
   TimerFunctions.resetDefaultValue(); // Reseta os valores dos inputs de tempo
};

const pauseCounter = (event) => { // Declara uma função chamada pauseCounter com um parâmetro
   event.preventDefault(); // Previne o comportamento padrão do evento

   ControlsData.playBtn.classList.remove('hide'); // Remove a classe 'hide' do botão play
   ControlsData.pauseBtn.classList.add('hide'); // Adiciona a classe 'hide' ao botão pause
   TimerFunctions.pauseTimer(TimerFunctions.timeoutId); // Pausa o timer
};

const stopCounter = (event) => { // Declara uma função chamada stopCounter com um parâmetro
   event.preventDefault(); // Previne o comportamento padrão do evento

   ControlsData.playBtn.classList.remove('hide'); // Remove a classe 'hide' do botão play
   ControlsData.setBtn.classList.remove('hide'); // Remove a classe 'hide' do botão set
   ControlsData.pauseBtn.classList.add('hide'); // Adiciona a classe 'hide' ao botão pause
   ControlsData.stopBtn.classList.add('hide'); // Adiciona a classe 'hide' ao botão stop
   TimerFunctions.stopTimer(initialInputsData[0], initialInputsData[1], TimerFunctions.timeoutId); // Para o timer e reseta os valores dos inputs de tempo
   initialInputsData = []; // Limpa a array initialInputsData
   initialInputsDataForEndTimer = []; // Limpa a array initialInputsDataForEndTimer
};

// EVENTS
ControlsData.playBtn.addEventListener('click', startCounter); // Adiciona um evento de clique ao botão play para iniciar o contador
ControlsData.setBtn.addEventListener('click', setTime); // Adiciona um evento de clique ao botão set para definir o tempo
ControlsData.pauseBtn.addEventListener('click', pauseCounter); // Adiciona um evento de clique ao botão pause para pausar o contador
ControlsData.stopBtn.addEventListener('click', stopCounter); // Adiciona um evento de clique ao botão stop para parar o contador

// EXPORTS
export { ControlsData, initialInputsData }; // Exporta o objeto ControlsData e a array initialInputsData para serem utilizados em outros arquivos
