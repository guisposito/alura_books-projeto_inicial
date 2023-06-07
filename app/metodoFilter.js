const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}


//Procura apenas 1 elemento especifico
// const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');

// btnFiltrarLivrosFront.addEventListener('click', filtrarLivros);

// function filtrarLivros() {
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end' );
//     console.table(livrosFiltrados);
// }