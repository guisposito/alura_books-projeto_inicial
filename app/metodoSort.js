//ordenando por preco

let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdernarPorPreco.addEventListener('click', ordernarLivrosPorPreco);

function ordernarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
    console.table(livrosOrdenados);
}