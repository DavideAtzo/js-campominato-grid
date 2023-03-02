'use strict';
/* <div class="casella">1</div> */

function creaCasella(tagElement, className){
    const element = document.createElement(tagElement);
    element.classList.add(className);
    return element;
}

const container = document.querySelector('.container');
const x = 'div';
const y = 'casella';

creaCasella(x, y);

for(let i = 1; i <= 100; i++){
    const box = creaCasella(x, y);
    container.append(box);
}