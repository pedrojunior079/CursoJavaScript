// Criar uma matriz de números 
const matrizNumeros = [
   [1, -2, 3, -4, 5],
   [-8, 7, -8, 9, -10],
   [11, -12, 13, -14, 13] 
];

// Percorrer a matriz
for(let i = 0;i < matrizNumeros.length; i++){
    for(let j = 0; j < matrizNumeros[i].length; j++){
        const numero = matrizNumeros[i][j];

        // Verifica se número é negativo
        if(numero < 0){
           // Usar continue para pular números negativos
           continue;
        }

        // Imprimir apenas números positivos
        console.log(numero);
    }
}
