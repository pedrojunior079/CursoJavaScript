function verificaSinal(numero){
  if(numero > 0){
    console.log("O numero é positivo.");
  }else if(numero < 0){
    console.log("o numero é negativo.");
  }else{
    console.log("O numero é zero.");
  }  
}

verificaSinal(5);
verificaSinal(-3);