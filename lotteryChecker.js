let jogoDoFabio = [18, 26, 35, 50, 60, 5];

let number1 = 20;
let number2 = 18;
let number3 = 53;
let number4 = 60;
let number5 = 2;
let number6 = 35;

let megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
console.log("jogo sorteado:", megaSenaNumbers);

let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) 
{
    let drawNumber = megaSenaNumbers[index];
    console.log("numero sorteado", drawNumber);

    for (let gameIndex = 0; gameIndex < studentGame.lenght; gameIndex += 1) {
        let studentGame = studentGame [gameIndex];
        console.log("numero sorteado", studentGame [gameIndex]);
    }
}