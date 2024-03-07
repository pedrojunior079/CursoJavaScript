// Criar uma matriz de números 
const matrizNumeros = [
    [1, 2, 3, 4, 5],
    [8, 7, 8, 9, 10],
    [11, 12, 13, 14, 13] 
 ];

const numeroAlvo = 8;

for(let i = 0; i < matrizNumeros.length; i++){
    for(let j = 0; j < matrizNumeros[i].length; j++){
        const numero = matrizNumeros[i][j];

        // Verifica se o número é igual ao número alvo
        if(numero === numeroAlvo){
            // Usar break para interromper o loop
            console.log();
            break;
        }
    }
}

console.log("\n"); // Adiciona uma linha em branco para separar os resultados

// Utilizando o continue para pular iterações quando encontrar o número alvo
for(let i = 0; i < matrizNumeros.length; i++){
    for(let j = 0; j < matrizNumeros[i].length; j++){
        const numero = matrizNumeros[i][j];

        // Verifica se o número é igual ao número alvo
        if(numero === numeroAlvo){
            // Usar continue para pular iterações
            console.log(`número ${numeroAlvo} encontrado! (Iteração pulada)`);
            continue;
        }

        // Se o número não for ugual ao numero alvo, imprimir o número
        console.log(numero);
    }
}







