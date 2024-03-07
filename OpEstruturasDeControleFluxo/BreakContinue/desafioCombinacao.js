// Criar uma matriz de caracteres
const matrizCaracteres = [
    ['a', 'b', '3', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o']
  ];
  
  // Laço que percorre a matriz
  for (let i = 0; i < matrizCaracteres.length; i++) {
    for (let j = 0; j < matrizCaracteres[i].length; j++) {
      const caractere = matrizCaracteres[i][j];
  
      // Verificar se o caractere é uma vogal
      if ('aeiou'.includes(caractere.toLowerCase())) {
        // Usar continue para pular vogais
        console.log(`Vogal encontrada: ${caractere}`);
        continue;
      }
  
      // Verificar se o caractere é um número
      if (!isNaN(parseInt(caractere, 10))) {
        // Usar break para encerrar o loop se encontrar um número
        console.log(`Número encontrado: ${caractere}`);
        break;
      }
  
      // Imprimir o caractere se não for vogal nem número
      console.log(`Caractere encontrado: ${caractere}`);
    }
  }
  