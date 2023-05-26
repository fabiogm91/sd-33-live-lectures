//vamos criar um projeto que sera capaz de ler/receber três valores inteiros e testar se são positivos. Em seguida, verifica se formam um triângulo e, caso isso seja possível, verifica qual é o tipo de triangulo, além de calcular o seu perímetro. Ao final, uma mensagem deverá ser impressa na saída do console.
//Ufa... E aí, aceita o desafio?
//dados iniciais do desafio

//valores dos lados em cm

let lado1 = 9
let lado2 = 7
let lado3 = 8

// 1. Crie uma função `checkIntegerPositive` que verifica se os valores dos lados são inteiros e positivos.
// - a condição é que todos os valores dos lados devem ser maiores que zero;
// - a função deve receber 3 parâmetros (l1, l2, l3);
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false. 





// 2. Crie uma função `checkItsATriangle` que verifica se os valores dos lados formam um triângulo.
// - a condição é que o valor de um lado deve sempre ser menor que a soma dos valores dos outros dois lados, ou seja, l1 < l2 + l3 e l2 < l1 + l3 e l3 < l1 + l2.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false.





// 3. Crie uma função `checkWitchTriangle` que verifica qual é o tipo do triângulo.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - Retorna a string `escaleno`, se todos os lados tiverem valores diferentes;
// - Retorna a string `isósceles`, se dois lados tiverem valores iguais e um lado tiver valor diferente
// - Retorna a string `equilátero`, se todos os lados tiverem valores iguais.
// - dica: use o operador E (&&);

function checkItsATriangle(l1,l2,l3) {
    if(l1 !)
    
}





// 4. Crie uma função `checkPerimeterTriangle` que calcula o perímetro do triângulo.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - o perímetro do triângulo deve ser calculado como: perimetro = l1 + l2 + l3;
// - a função deve retornar o perimetro.

// 5. Crie uma função `infoTriangle` que irá apresentar uma mensagem na saída do console.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - a função deve verificar se os valores dos lados são inteiros positivos e se os valores dos lados formam um triângulo. Dica: você já criou as funções que fazem esta verificação (checkIntegerPositive() e checkItsATriangle()). Basta chamá-las aqui. Que tal colocar os resultados dentro de variáveis e depois usá-las na estrutura do IF?
// - se a condição for satisfeita, a função deve retornar a mensagem: `O triângulo é <tipo-do-triângulo> e seu perímetro vale <valor-do-perimetro> cm.`. Dica: chame a função checkWitchTriangle() para obter <tipo-do-triângulo> e a função checkPerimeterTriangle() para obter <valor-do-perimetro>;
// - se a condição não for satisfeita, a função deve retornar a mensagem: `Não é um triângulo.`.

// OBS: o console.log final deverá ser assim: console.log(infoTriangle(lado1, lado2, lado3)); Tudo deve acontecer depois de sua execução...

let idade = 29;
let cnh = false;

if (idade >= 18 && cnh === true) {
    console.log("pode dirigir");
} else {
    console.log("não pode dirigir");
}


let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4



  let moradores = [
    {
      nome: 'Luíza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luíza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    local: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
  };


  console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui o apelido ' + singer.nickname);

  console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + 'anos');


  singer['fullName'] = singer.name + ' ' + singer.lastName;

  console.table('O cantor' + singer.fullName + ' nasceu no estado do ' + singer.local.state);


let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: '34',
    bestInTheWorld: ['2006, 2007, 2008, 2009, 2010, 2018'],
    medals: {
        golden: 'golden: 2',
        silver: 'silver: 3',
    }

}

console.log('A joogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade ');

console.log('A joogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes ' + player.bestInTheWorld);

console.log('A jogadora possui duas medalhas ' + player.medals.golden + ' e três medalhas ' + player.medals.silver + ' de prata ');






let name = 'Luize Helena'
let lastName = 'Pessanha Silva'
let career = 'Bailarina'


let dancer = {
    name: 'Luize Helena',
    lastName: 'Silva Pessanha',
    career: 'Bailarina',

}

console.log(' A ' + dancer.name + ' ' + dancer.lastName + ' é uma ' + dancer.career + ' incrível e é a mulher que eu AMO!');