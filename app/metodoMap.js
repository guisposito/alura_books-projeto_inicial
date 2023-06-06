function aplicarDesconto(livros){
    const desconto = 0.3;
    //Pegando todos os livros para alterar o preço
    livrosComDesconto = livros.map(livro => {
        //faz uma copia do array de livro, mas alterado o preco
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })

    return livrosComDesconto;
}