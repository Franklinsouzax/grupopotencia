// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Verifica se pelo menos metade do elemento está visível
    return rect.top <= windowHeight * 0.5;
}

// Função para lidar com o scroll da página
function handleScroll() {
    var elementos = document.querySelectorAll('.pilares-desktop h2, .pilares-desktop p');
    
    elementos.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('mostrar');
        }
    });
}

// Adiciona evento de scroll para chamar a função handleScroll
window.addEventListener('scroll', handleScroll);

// Chama handleScroll ao carregar a página para verificar imediatamente
handleScroll();
