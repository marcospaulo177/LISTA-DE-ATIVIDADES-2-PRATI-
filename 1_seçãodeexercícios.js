//1. Validação de Datas
//função ehDataValida em JavaScript:

function ehDataValida(dia, mes, ano) {
  // Verifica se o mês é válido
  if (mes < 1 || mes > 12) return false;

  // Verifica se o dia é válido para o mês
  const diasNoMes = new Date(ano, mes - 1, 0).getDate();
  if (dia < 1 || dia > diasNoMes) return false;

  // Verifica se o ano é válido
  if (ano < 1) return false;

  return true;
}

//Essa função usa a classe Date do JavaScript para determinar o número de dias em um mês específico. O mês é passado como mes - 1 porque a classe Date usa o mês como um índice baseado em zero (janeiro = 0, fevereiro = 1, etc.).

//Aqui estão alguns exemplos de uso da função:

console.log(ehDataValida(31, 1, 2022)); // true
console.log(ehDataValida(29, 2, 2020)); // true
console.log(ehDataValida(30, 2, 2022)); // false
console.log(ehDataValida(32, 1, 2022)); // false
console.log(ehDataValida(29, 2, 2020)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2022)); // false (ano não bissexto)


//2. Jogo de Adivinhação
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinhar() {
  rl.question('Adivinhe o número entre 1 e 100: ', (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (palpite === numeroAleatorio) {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
      rl.close();
    } else if (palpite < numeroAleatorio) {
      console.log('Mais alto!');
      adivinhar();
    } else {
      console.log('Mais baixo!');
      adivinhar();
    }
  });
}

adivinhar();

//3. Palavras Únicas

const string = "Ser ou não ser, eis a questão";

const palavras = string.toLowerCase().replace(/[^\w\s]/gi, '').split(" ");
const palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i];
  let existe = false;

  for (let j = 0; j < palavrasUnicas.length; j++) {
    if (palavrasUnicas[j] === palavra) {
      existe = true;
      break;
    }
  }

  if (!existe) {
    palavrasUnicas.push(palavra);
  }
}

console.log(palavrasUnicas);
