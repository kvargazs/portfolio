//Obter todos os elementos com a classe .github-icon
const githubIcons = document.querySelectorAll('.github-icon');

// Para cada elemento com a classe .github-icon, adicionar os ouvintes de eventos
githubIcons.forEach(githubIcon => {
    githubIcon.addEventListener('mouseenter', () => {
      // Alterar o ícone quando o mouse passar por cima
        const iconElement = githubIcon.querySelector('.icon-github');
        if (iconElement) {
        iconElement.setAttribute('src', 'assets/github-icon2.svg'); // Substitua 'caminho/do/novo/icone.svg' pelo caminho do seu novo ícone
        }
    });
    githubIcon.addEventListener('mouseleave', () => {
        // Restaurar o ícone original quando o mouse sair
        const iconElement = githubIcon.querySelector('.icon-github');
        if (iconElement) {
        iconElement.setAttribute('src', 'assets/github-icon.svg'); // Substitua 'assets/github-icon.svg' pelo caminho do seu ícone original
        }
    });
});
