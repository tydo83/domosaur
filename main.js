const warmUp1 = document.querySelector('span.mess-with-me');
warmUp1.style.fontSize = '3em';

const warmUp2 = document.querySelector('p.mess-with-me');
warmUp2.style.backgroundColor = 'green'; 

const warmUp3 = document.querySelector('img#hide-me');
warmUp3.style.display = "none";

const warmUp4 = document.querySelector('img#triceratops');
warmUp4.style.width = "324px";

const colorToOrange = () => {
    warmUp1.style.color = "orange";
}
warmUp1.addEventListener('click', colorToOrange);

const firstDino = document.querySelector('img#triceratops');
const redBorder = () => {
    firstDino.style.border = "1px solid red"; 
}
firstDino.addEventListener('click', redBorder);

const featherDino = document.querySelector('img#feathers');
const transparent = () => {
    featherDino.style.opacity = "0.5";
}
featherDino.addEventListener('click', transparent);

const rowDinos = document.querySelector('#row');
const switchBackGroundColor = () => {
    rowDinos.style.backgroundColor = "purple"
}
toggle.addEventListener('click', switchBackGroundColor);

const bigDino = document.querySelector('img#biggify');
const bigImage = () => {
    bigDino.style.width = "200px"
}
bigDino.addEventListener('mouseover', bigImage);
