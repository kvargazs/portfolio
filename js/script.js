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



//FUNÇÃO QUE VERIFICA O SCROLL
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//FUNÇÃO PARA FUNCIONAR A ANIMAÇÃO QUANDO VISÍVEL
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

function animacaoHeader() {
    const header = document.getElementById("header");
    const scrollY = window.scrollY;
    const altura = 1; //Definir uma altura limite (por exemplo, 1px) para ativar a mudança de cor

    //Verificar se o scroll passou da altura limite
    if (scrollY > altura) {
        header.classList.add("header-scrolled"); // Adicionar a classe CSS para alterar a cor
    } else {
        header.classList.remove("header-scrolled"); // Remover a classe CSS caso esteja antes da altura limite
    }
};

//Adiciona um listener de scroll para verificar quando a seção está visível
window.addEventListener('scroll', animacaoImagem);
window.addEventListener('scroll', animacaoTexto);
window.addEventListener('scroll', animacaoHeader);

//Verifica a animação assim que a página é carregada
animacaoImagem();
animacaoTexto();
animacaoHeader();

