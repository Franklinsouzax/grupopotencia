// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Verifica se a parte de cima do elemento está dentro da janela visível
    return rect.top >= 0 && rect.top <= windowHeight;
}

// Função para lidar com o scroll da página
function handleScroll() {
    var topicosElement = document.getElementById('topicosPilares');
    var quemSomosElement = document.querySelector('.quem-somos');
    
    var elements = topicosElement.querySelectorAll('h2, p');
    var quemSomosElements = quemSomosElement.querySelectorAll('h2, p');
    
    // Verifica elementos da seção Tópicos Pilares
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('mostrar'); // Adiciona a classe 'mostrar' quando está visível
        }
    });
    
    // Verifica elementos da seção Quem Somos
    quemSomosElements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('mostrar'); // Adiciona a classe 'mostrar' quando está visível
        }
    });
}

// Adiciona evento de scroll para chamar a função handleScroll
window.addEventListener('scroll', handleScroll);

// Chama handleScroll ao carregar a página para verificar imediatamente
handleScroll();
