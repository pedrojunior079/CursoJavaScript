// Função para desenhar um triangulo retangulo
function desenharTrianguloRetangulo(linhas){
  for(let i=1; i<=linhas; i++){
    let linha = '';
    for(let j=1; j<=i; j++){
        linha+= '* ';
    }
    console.log(linha);
  }  
}

// Função para desenhar um triangulo isosceles
function desenharTrianguloIsosceles(linhas) {
    for (let i = 1; i <= linhas; i++) {
        let espacos = ' '.repeat(linhas - i);
        let asteriscos = '* '.repeat(i);
        console.log(espacos + asteriscos);
    }
}

// Função para desenhar um quadrado
function desenharQuadrado(linhas) {
    for (let i = 1; i <= linhas; i++) {
        let linha = '* '.repeat(linhas);
        console.log(linha);
    }
}

// Exemplos de uso
console.log("Triângulo Retângulo:");
desenharTrianguloRetangulo(5);

console.log("\nTriângulo Isósceles:");
desenharTrianguloIsosceles(5);

console.log("\nQuadrado:");
desenharQuadrado(5);

