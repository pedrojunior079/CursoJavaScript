function testFunction(){
  var localVar = "Eu sou local";
  console.log(localVar);  
} 
testFunction(); // Imprime:Eu sou local!
console.log(localVar); // Erro! localVar não está definida.