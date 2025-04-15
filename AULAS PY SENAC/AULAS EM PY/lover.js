let nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10): "));
let nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10): "));
let nota3 = parseFloat(prompt("Digite a terceira nota (0 a 10): "));
let nota4 = parseFloat(prompt("Digite a quarta nota (0 a 10): "));

let media=(nota1 + nota2 + nota3 + nota4) / 4;

alert(`A média das notas é: ${media.toFixed(2)}`);

if (media >= 7) {
    alert("Parabéns! Você foi aprovado!");
} else if (media >= 5) {
} else {
    alert("Infelizmente, você foi reprovado.");
}


let inicio = parseInt(prompt("Digite o número de início do intervalo:"));
let fim = parseInt(prompt("Digite o número final do intervalo:"));


let soma = 0;


for (let i = inicio; i <= fim; i++) {
  if (i % 2 === 0) { 
    soma += i; 
  }
}


console.log("A soma dos números pares no intervalo é: " + soma);


function verificarPalindromo() {
  
  let entrada = prompt("Digite uma palavra ou frase:");

  
  let entradaLimpa = entrada.replace(/\s+/g, '').toLowerCase();

  
  let entradaInvertida = entradaLimpa.split('').reverse().join('');

  
  if (entradaLimpa === entradaInvertida) {
      console.log("É palíndromo");
  } else {
      console.log("Não é palíndromo");
  }
}

verificarPalindromo();



function calcularJurosSimples() {

  let principal = parseFloat(prompt("Digite o valor principal (P):"));
  let taxaJuros = parseFloat(prompt("Digite a taxa de juros anual (r) em formato decimal (ex: 0.05 para 5%):"));
  let tempo = parseFloat(prompt("Digite o tempo em anos (t):"));

  
  let montante = principal * (1 + taxaJuros * tempo);

  
  console.log("O montante final é: R$ " + montante.toFixed(2));
}

calcularJurosSimples();


function contarDigitos() {
  
  let numero = prompt("Digite um número inteiro positivo:");

  
  if (numero > 0 && Number.isInteger(parseFloat(numero))) {
      
      let numDigitos = numero.length;

      
      console.log("O número possui " + numDigitos + " dígitos.");
  } else {
      console.log("Por favor, digite um número inteiro positivo.");
  }
}

contarDigitos();
