let numero = 1;
while(numero <= 20){
  // Verifica se número é impar
  if(numero % 2 !== 0){
    // Imprime o numero impar
    console.log(numero);
  }
  
  // verifica s número é igual a 15 para interromper a interação
  if(numero === 15){
    break;
  }

  // Incrementa o número para a proxima iteração
  numero++;
}


