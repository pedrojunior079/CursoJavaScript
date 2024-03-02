// Importa a biblioteca readline-sync
const readlineSync = require('readline-sync');

let numeroCorreto = 7; // Número que o usuario deve adivinhar
let numeroUsuario;

do{
  // Pede ao usuário para digitar um numero entre 1 a 10
  numeroUsuario = readlineSync.question('Digite um número entre 1 e 10: ');
  
  // Converte a entrada do usuario para um número inteiro
  numeroUsuario = parseInt(numeroUsuario);

  // Verifica se o número está dentro do intervalo permitido
  if(numeroUsuario < 1 || numeroUsuario > 10){
    console.log('Por favor, digite um numero valido entre 1 e 10');
  }else{
    // Verifica se o número é o correto
    if(numeroUsuario === numeroCorreto){
      console.log('Parabens! Voce acertou o numero!');
    }else{
      console.log('Numero incorreto. Tente novamente.');
    }
  }
}while(numeroUsuario !== numeroCorreto);