let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }


  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  
  for (let name in names) {
    console.log(' olá ' + names[name]);
  }


  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key + ':' + car[key]);
  }

  let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'banana', 'beterraba' ];
  
  for (let index =0; index < groceryList.length; index +=1) {
    console.log(groceryList[index]);
  }

  let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida', 'fabio'];

for(let index of names) {
  console.log(index);
}


let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}


l//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

let n = 10;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);



