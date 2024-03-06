let frutaString = "3";  // Uma string representando o número 3 
let frutaNumero = 3;   // Um número 3

console.log("Usando comparação flexível (==):");

// Utilize um switch com comparação flexível
switch (frutaString == frutaNumero) {
    case true:
        console.log("As frutas são iguais (comparação flexível).");
        break;
    case false:
        console.log("As frutas são diferentes (comparação flexível).");
        break;
}

console.log("\nUsando comparação estrita (===):");

// Utilize um switch com comparação estrita
switch (frutaString === frutaNumero) {
    case true:
        console.log("As frutas são iguais (comparação estrita).");
        break;
    case false:
        console.log("As frutas são diferentes (comparação estrita).");
        break;
}