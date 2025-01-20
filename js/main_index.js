let currentIndex = 0;
const items = document.querySelectorAll('.carrusel-item');
const totalItems = items.length;

function showSlide(index) {
    // Ocultar todos los elementos
    items.forEach(item => item.classList.remove('active'));
    
    // Mostrar el elemento actual
    items[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
}

// Mostrar el primer elemento al cargar
showSlide(currentIndex);

// Cambiar automáticamente cada 3 segundos
setInterval(nextSlide, 30000);
