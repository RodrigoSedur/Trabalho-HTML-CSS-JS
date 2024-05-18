let currentIndex = 0;

function moveCarrossel(direction) {
    const carrosselSlide = document.querySelector('.carrossel-slide');
    const totalItems = document.querySelectorAll('.carrossel-item').length;
    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const slideWidth = document.querySelector('.carrossel-item').clientWidth;
    carrosselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    moveCarrossel(0); // Inicializ a posição do carrossel
});

document.getElementById('verNovidadesBtn').addEventListener('click', function() {
    document.getElementById('novidadesSection').scrollIntoView({ behavior: 'smooth' });
});

function sair() {
    // Redireciona para a página de login (ou outra página apropriada)
    location.href = "SRC/loginPage.html";
}