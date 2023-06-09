const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel'){
        //recebe o valor do Reduce
        const valorTotal = calcularValorTotalLivrosDisp(livrosFiltrados);
        exibirValorTotalNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalNaTela(valorTotal){ 
    elementoValorTotalLivrosDisponiveis.innerHTML=`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}


//Procura apenas 1 elemento especifico
// const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');

// btnFiltrarLivrosFront.addEventListener('click', filtrarLivros);

// function filtrarLivros() {
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end' );
//     console.table(livrosFiltrados);
// }