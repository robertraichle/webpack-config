// logo
import logo from './assets/images/logo.svg';

import "./assets/css/style.scss";


const imgLogo = document.createElement('img');
imgLogo.src = logo
document.querySelector('.logo').appendChild(imgLogo);

const firstComponent = {
    tag: 1,
    monat: 5,
};

const secondComponent = {
    ...firstComponent,
    jahr: 2021,
}

console.log(firstComponent);
console.log(secondComponent);