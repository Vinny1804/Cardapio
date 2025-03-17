function filtrarCategoria(categoria) {
    let categorias = document.querySelectorAll(".categoria");
    categorias.forEach(secao => {
        if (secao.id === categoria) {
            secao.style.display = "block";
        } else {
            secao.style.display = "none";
        }
    });
}


function gerarMenu() {
    Object.keys(menu).forEach(categoria => {
        const container = document.getElementById(`${categoria}-container`);
        if (container) {
            container.innerHTML = menu[categoria].map(item => `
                <div class="item">
                    <img src="${item.imagem}" alt="${item.nome}">
                    <span>${item.nome}</span>
                    <span>${item.descricao}</span>
                    <span>${item.preco}</span>
                </div>
            `).join('');
        }
    });
}

document.addEventListener("DOMContentLoaded", gerarMenu);

