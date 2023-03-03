'use strict';
// funziona che crea la cella 
function creaCasella(tagElement, className, number){
    const element = document.createElement(tagElement);
    element.classList.add(className);
    element.innerText = number;
    return element;
}
// funzione che crea il tabellone di gioco 
function Tabellone(){
    const container = document.querySelector('.container');
    container.innerHTML = '';
    let selDifficolta = livDifficolta.value
    console.log(selDifficolta);
// condizione che comprende la creazione del tabellone di gioco in base alla difficolta 
    if(selDifficolta === 'difficile'){
        cellNumber = 49;
        for (let i = 1; i <= cellNumber; i++) {
            const box = document.createElement('div');
            box.classList.add('casella7');
            box.innerText = i;
            container.append(box);
            container.classList.add('show')
            box.addEventListener(
                'click',
                function(){
                    box.classList.add('cambio-colore');
                }  )
        }
    }else if(selDifficolta === 'normale'){
        cellNumber = 81;
        for (let i = 1; i <= cellNumber; i++) {
            const box = document.createElement('div');
            box.classList.add('casella9');
            box.innerText = i;
            container.append(box);
            container.classList.add('show')
            box.addEventListener(
                'click',
                function(){
                    box.classList.add('cambio-colore');
                })
        }
    } else{
        cellNumber = 100;
        for (let i = 1; i <= cellNumber; i++) {
            const box = document.createElement('div');
            box.classList.add('casella');
            box.innerText = i;
            container.append(box);
            container.classList.add('show')
            box.addEventListener(
                'click',
                function(){
                    box.classList.add('cambio-colore');
         } )
         }
    }
}
// dichiarazione variabili 
const x = 'div';
const y = 'casella';
let cellNumber = 0;
const livDifficolta = document.getElementById('difficoltà');
// richiamo funzione 
creaCasella(x, y);

const btnPlay = document.getElementById('btn-play');

btnPlay.addEventListener('click', Tabellone)