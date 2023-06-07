const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel'){
        exibirValorTotalNaTela();
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalNaTela(){
    elementoValorTotalLivrosDisponiveis.innerHTML=`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
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