'use strict';
/* <div class="casella">1</div> */

function creaCasella(tagElement, className, number){
    const element = document.createElement(tagElement);
    element.classList.add(className);
    element.innerText = number;
    element.addEventListener(
        'click',
        function(){
            element.classList.add('cambio-colore');
        }
    )
    return element;
}

const container = document.querySelector('.container');
const x = 'div';
const y = 'casella';

creaCasella(x, y);

for(let i = 1; i <= 100; i++){
    const box = creaCasella(x, y, i);
    container.append(box);
}
const btnPlay = document.getElementById('btn-play');

btnPlay.addEventListener('click',
    function () {
        container.classList.add('show')
    }
);
