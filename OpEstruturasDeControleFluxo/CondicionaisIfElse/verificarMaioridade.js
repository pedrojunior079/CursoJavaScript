function verificarMaioridade(idade){
  const status = idade >= 18 ?  "Adulto" : "Menor de idade";
  console.log(status);  
}

verificarMaioridade(20);
verificarMaioridade(16);
