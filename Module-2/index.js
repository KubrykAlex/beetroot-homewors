// * Мої константи
const coursDollar = 41.8;
const nowYear = 2022;  // рік, який зараз

// * Привітання
const yourName = prompt('Як тебе звати?');

console.log('Привіт,', yourName);

const yourAge = +prompt('Скільки тобі років?');
const bornYear = nowYear - yourAge; // Виводимо рік народдження
console.log('Ти народився у', bornYear, 'році');

// * Радіус кола

const radius = +prompt('Скажи мені радіус кола в сантиметрах і я порахую тобі його площу');
const circle = radius * radius * Math.PI; // Тут рахуємо площу круу за формулою
console.log('Площа такого кола буде', circle, 'сантиметрів квадратних');

// * Курс валют

alert('А зараз я допоможу тобі порахувати гроші');
let yourMoney = +prompt('Скільки гривень у тебе є,');
const yourDollar = yourMoney / coursDollar;
console.log('Ти наразі маєш', yourDollar, 'долларів');

let allMoney = confirm('Малувато? Треба заробити ще? :)');

  if (allMoney) {
    console.log('Тоді саме час відкласти забавки і йти вчитись')
};