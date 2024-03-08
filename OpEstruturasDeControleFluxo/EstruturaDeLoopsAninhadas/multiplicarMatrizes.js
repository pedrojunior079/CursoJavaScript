// Função para multiplicar duas matrizes
function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    // Verifica se as dimensões são compatíveis para multiplicação
    if (colunasA !== linhasB) {
        console.error("Não é possível multiplicar as matrizes. Dimensões incompatíveis.");
        return null;
    }

    // Inicializa a matriz resultante com zeros
    const resultado = new Array(linhasA);
    for (let i = 0; i < linhasA; i++) {
        resultado[i] = new Array(colunasB).fill(0);
    }

    // Multiplica as matrizes
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultado;
}

// Função para transpor uma matriz
function transporMatriz(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;

    const matrizTransposta = new Array(colunas);
    for (let j = 0; j < colunas; j++) {
        matrizTransposta[j] = new Array(linhas);
        for (let i = 0; i < linhas; i++) {
            matrizTransposta[j][i] = matriz[i][j];
        }
    }

    return matrizTransposta;
}

// Exemplo de uso
const matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

console.log("Matriz A:");
console.log(matrizA);

console.log("\nMatriz B:");
console.log(matrizB);

const resultadoMultiplicacao = multiplicarMatrizes(matrizA, matrizB);

console.log("\nResultado da Multiplicação:");
console.log(resultadoMultiplicacao);

const matrizTranspostaA = transporMatriz(matrizA);

console.log("\nTransposta da Matriz A:");
console.log(matrizTranspostaA);
