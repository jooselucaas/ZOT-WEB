// Função para fazer a rolagem suave até o topo da página
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mostrar ou ocultar a seta conforme o usuário rola a página
window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
