let studentGame = [4, 22, 28, 19, 44, 53];
console.log(' jogo do fabio', studentGame);

let megaSenaNumbers = [];

for (let index = 0; index < 6; index +=1) {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    megaSenaNumbers.push(randomNumber);
}

//let number1 = Math.floor(Math.random() * 60) + 1;
//let number2 = Math.floor(Math.random() * 60) + 1;
//let number3 = Math.floor(Math.random() * 60) + 1;
//let number4 = Math.floor(Math.random() * 60) + 1;
//let number5 = Math.floor(Math.random() * 60) + 1;
//let number6 = Math.floor(Math.random() * 60) + 1;

//let megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
//console.log('jogo sorteado', megaSenaNumbers);

//confere o jogo
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
    let drawNumber = megaSenaNumbers[index];
    //console.log('-------------');
    //console.log('numero sorteado', drawNumber);

    for (let gameIndex = 0; gameIndex < studentGame.length; gameIndex += 1) {
        let studentNumber = studentGame[gameIndex];   
        
        //console.log('número do fabio:', jogoDoFabio[gameIndex]);

        if (drawNumber === studentNumber) {
            numberOfHits += 1;
        }
    }
}  

console.log('numero de acertos', numberOfHits);







//console.log(jogoDoFabio.length);

//for (let index = 0; index < jogoDoFabio.length; index +=1){
  //  console.log('números selecionados:', jogoDoFabio[index]);
//}

//for (let values of jogoDoFabio) {
  //  console.log(values);
//}













