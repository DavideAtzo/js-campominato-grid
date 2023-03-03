'use strict';

function creaCasella(tagElement, className, number) {
    const element = document.createElement(tagElement);
    element.classList.add(className);
    element.innerText = number;
    element.addEventListener(
        'click',
        function () {
            console.log(number);
            element.classList.add('cambio-colore');
        }
    )
    return element;
}
function tabellone() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    let selDifficolta = livDifficolta.value
    console.log(selDifficolta);

    if(selDifficolta === 'difficile'){
        cellNumber = 49;
        for (let i = 1; i <= cellNumber; i++) {
            const box = document.createElement('div');
            box.classList.add('casella');
            box.innerText = i;
            container.append(box);
            container.classList.add('show')
        }
    }else if(selDifficolta === 'normale'){
        cellNumber = 81;
        for (let i = 1; i <= cellNumber; i++) {
            const box = document.createElement('div');
            box.classList.add('casella');
            box.innerText = i;
            container.append(box);
            container.classList.add('show')
        }
    } else{
        cellNumber = 100;
        for (let i = 1; i <= cellNumber; i++) {
            const box = document.createElement('div');
            box.classList.add('casella');
            box.innerText = i;
            container.append(box);
            container.classList.add('show')
        }
    }
}
const x = 'div';
const y = 'casella';
let cellNumber = 0;
const livDifficolta = document.getElementById('difficoltà');

creaCasella(x, y);
const btnPlay = document.getElementById('btn-play');

btnPlay.addEventListener('click', tabellone);






