// IMPORTS
import { TimeData } from "./time.js"; // Importa a constante TimeData do arquivo time.js
import { ControlsData, initialInputsData } from "./controls.js"; // Importa as constantes ControlsData e initialInputsData do arquivo controls.js
import { Sounds } from "./soundArea.js";

// DATA
let initialTime = []; // Cria uma array vazia chamada initialTime
let memeSounds = Sounds[0];

// FUNCTIONS

const TimerFunctions = { // Declara um objeto TimerFunctions que contém várias funções
   timeoutId: '', // Declara uma variável timeoutId

   resetDefaultValue: () => { // Declara uma função chamada resetDefaultValue
      TimeData.minutes.value = '00'; // Define o valor de minutos para '00' na interface do usuário
      TimeData.seconds.value = '00'; // Define o valor de segundos para '00' na interface do usuário
   },

   showErrorMsg: () => { // Declara uma função chamada showErrorMsg
      TimeData.errorAlert.style.transform = `translateY(0)`; // Altera a propriedade CSS transform para exibir uma mensagem de erro na interface do usuário
      TimerFunctions.resetDefaultValue(); // Chama a função resetDefaultValue para redefinir os valores do tempo
   },

   timerLogic: () => { // Declara uma função chamada timerLogic
      TimerFunctions.timeoutId = setTimeout(function() { // Define um temporizador para executar uma função após um determinado intervalo
         if(TimeData.seconds.value <= 0) { // Verifica se os segundos são menores ou iguais a zero
            TimeData.seconds.value = 60; // Define os segundos como 60
            TimeData.minutes.value = String(TimeData.minutes.value - 1).padStart(2, '0'); // Diminui um minuto e formata para dois dígitos
         };
         TimeData.seconds.value = String(TimeData.seconds.value - 1).padStart(2, '0'); // Diminui um segundo e formata para dois dígitos
         if(TimeData.minutes.value < 0) { // Verifica se os minutos são menores que zero
            const randomizedSounds = Math.floor(Math.random() * memeSounds.length);
            TimeData.minutes.value = initialTime[0]; // Define os minutos como o valor inicial
            TimeData.seconds.value = initialTime[1]; // Define os segundos como o valor inicial
            initialTime = []; // Limpa a array initialTime
            initialInputsData.splice(0); // Remove todos os elementos da array initialInputsData
            ControlsData.playBtn.classList.remove('hide'); // Remove a classe 'hide' do botão play na interface do usuário
            ControlsData.setBtn.classList.remove('hide'); // Remove a classe 'hide' do botão set na interface do usuário
            ControlsData.pauseBtn.classList.add('hide'); // Adiciona a classe 'hide' ao botão pause na interface do usuário
            ControlsData.stopBtn.classList.add('hide'); // Adiciona a classe 'hide' ao botão stop na interface do usuário
            memeSounds[randomizedSounds].sound.play();
            return; // Retorna para interromper a execução da função
         };
         TimerFunctions.timerLogic(); // Chama recursivamente a função timerLogic
      }, 1000); // Define o intervalo de tempo como 1000 milissegundos (1 segundo)
   },

   runCutdown: (initialMin, initialSec) => { // Declara uma função chamada runCutdown com dois parâmetros
      if(initialTime.length < 1) { // Verifica se a array initialTime está vazia
         initialTime.push(initialMin, initialSec); // Adiciona os minutos e segundos iniciais à array initialTime
      };

      TimeData.errorAlert.style.transform = `translateY(-100%)`; // Oculta a mensagem de erro na interface do usuário
      ControlsData.playBtn.classList.add('hide'); // Adiciona a classe 'hide' ao botão play na interface do usuário
      ControlsData.setBtn.classList.add('hide'); // Adiciona a classe 'hide' ao botão set na interface do usuário
      ControlsData.pauseBtn.classList.remove('hide'); // Remove a classe 'hide' do botão pause na interface do usuário
      ControlsData.stopBtn.classList.remove('hide'); // Remove a classe 'hide' do botão stop na interface do usuário
      TimerFunctions.timerLogic(); // Chama a função timerLogic para iniciar a contagem regressiva
   },

   pauseTimer: (timer) => { // Declara uma função chamada pauseTimer com um parâmetro
      clearTimeout(timer); // Limpa o temporizador para pausar a contagem regressiva
   },

   stopTimer: (initialMin, initialSec, timer) => { // Declara uma função chamada stopTimer com três parâmetros
      TimeData.minutes.value = initialMin; // Define os minutos como o valor inicial
      TimeData.seconds.value = initialSec; // Define os segundos como o valor inicial
      initialTime = []; // Limpa a array initialTime
      clearTimeout(timer); // Limpa o temporizador para interromper a contagem regressiva
   },

};

// EXPORTS
export { TimerFunctions }; // Exporta o objeto TimerFunctions para ser utilizado em outros arquivos
