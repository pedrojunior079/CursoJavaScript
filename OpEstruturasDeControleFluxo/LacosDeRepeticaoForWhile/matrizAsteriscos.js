const linhas = 5;
const colunas = 5;

for(let i = 0; i < linhas; i++){
    let linhaAtual = '';

    for(let j = 0; j < colunas; j++){
        linhaAtual += '* ';
    }

    console.log(linhaAtual);
}
