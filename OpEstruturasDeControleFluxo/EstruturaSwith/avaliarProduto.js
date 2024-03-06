function avaliarProduto(categoria, subcategoria) {
    switch (categoria) {
        case "eletronicos":
            console.log("Categoria: Eletrônicos");
            switch (subcategoria) {
                case "smartphones":
                    console.log("Subcategoria: Smartphones");
                    break;
                case "laptops":
                    console.log("Subcategoria: Laptops");
                    break;
                default:
                    console.log("Subcategoria não especificada");
            }
            break;

        case "vestuario":
            console.log("Categoria: Vestuário");
            switch (subcategoria) {
                case "camisetas":
                    console.log("Subcategoria: Camisetas");
                    break;
                case "calcados":
                    console.log("Subcategoria: Calçados");
                    break;
                default:
                    console.log("Subcategoria não especificada");
            }
            break;

        default:
            console.log("Categoria não especificada");
    }
}

// Exemplo de uso da função
avaliarProduto("eletronicos", "smartphones");
avaliarProduto("vestuario", "calcas");
avaliarProduto("livros", "ficcao");
