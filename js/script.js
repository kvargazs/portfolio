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
    var animacaoSectionFormacao = document.querySelector('.animacao-section-eu');
    if (isElementInViewport(animacaoSectionFormacao)) {
        animacaoSectionFormacao.classList.add('animacao-visivel-eu');
    }
}

//FUNÇÃO PARA FUNCIONAR A ANIMAÇÃO QUANDO VISÍVEL
function animacaoTextoFormacao() {
    var animacaoSectionFormacao = document.querySelector('.animacao-section-formacao');
    if (isElementInViewport(animacaoSectionFormacao)) {
        animacaoSectionFormacao.classList.add('animacao-visivel-formacao');
    }
}

function animacaoImagemFormacao() {
    var animacaoSection = document.querySelector('.animacao-section-livro');
    if (isElementInViewport(animacaoSection)) {
        animacaoSection.classList.add('animacao-visivel-livro');
    }
}

//FUNÇÃO NAVEGAÇÃO DO USUARIO
function verificarSeccaoVisivel() {
    const seccoes = document.querySelectorAll('section');
    for (const seccao of seccoes) {
        const bounding = seccao.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.top <= window.innerHeight) {
            // Remove a classe ativo de todos os links e adiciona ao link correspondente à seção visível
            const links = document.querySelectorAll('.div__navegacao li a');
            for (const link of links) {
                link.classList.remove('ativo');
            }
            const linkAtivo = document.querySelector(`.div__navegacao li a[href="#${seccao.id}"]`);
            if (linkAtivo) {
                linkAtivo.classList.add('ativo');
            }
            break;
        }
    }
}

//FUNÇÃO PARA SOMBRA AO ROLAR A TELA
function atualizarSombraMenu() {
    const menu = document.querySelector('header');
    const scrollTop = window.scrollY;
    const alturaRolagemParaSombra = 1;
    if (scrollTop > alturaRolagemParaSombra) {
        menu.classList.add('navegacao-com-sombra');
    } else {
        menu.classList.remove('navegacao-com-sombra');
    }
}



window.addEventListener('scroll', atualizarSombraMenu);

//Evento de rolagem que chama a função verificarSeccaoVisivel
window.addEventListener('scroll', verificarSeccaoVisivel);
verificarSeccaoVisivel(); //Executa a função quando a página é carregada

window.addEventListener('scroll', animacaoImagem);
window.addEventListener('scroll', animacaoTexto);
window.addEventListener('scroll', animacaoImagemFormacao);
window.addEventListener('scroll', animacaoTextoFormacao);
window.addEventListener('scroll', animacaoHeader);

//Verifica a animação assim que a página é carregada
animacaoImagem();
animacaoTexto();
animacaoHeader();
setMenuLinkAtivo();
animacaoTextoFormacao();
animacaoImagemFormacao();

