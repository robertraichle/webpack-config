import "./assets/css/style.scss";

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