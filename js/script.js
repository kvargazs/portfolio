//FUNÇÃO PARA DIGITAR E DESCER OS ELEMENTOS
function digitando(elemento) { //elemento = titulo
    const arrTexto = elemento.innerHTML.split(''); //innerHTML separa as letras
    elemento.innerHTML = ''; 
    arrTexto.forEach((letra, i) => { //loop
        setTimeout(() => { 
            elemento.innerHTML += letra;
        }, 100 * i); //tempo de duração
    })
}

const titulo = document.querySelector('.home__profissao');
digitando(titulo);



// Função para verificar se a seção está visível na tela
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe de animação quando a seção estiver visível
function animacaoTexto() {
    var animacaoSection = document.querySelector('.animacao-section');
    if (isElementInViewport(animacaoSection)) {
        animacaoSection.classList.add('animacao-visivel');
    }
}
function animacaoImagem() {
    var animacaoSection = document.querySelector('.animacao-section-eu');
    if (isElementInViewport(animacaoSection)) {
        animacaoSection.classList.add('animacao-visivel-eu');
    }
}

// Adiciona um listener de scroll para verificar quando a seção está visível
window.addEventListener('scroll', animacaoImagem);
window.addEventListener('scroll', animacaoTexto);

// Verifica a animação assim que a página é carregada
animacaoImagem();
animacaoTexto();
