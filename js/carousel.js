let currentIndex = 0;
let intervalId;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    // Atualiza os indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });

    clearInterval(intervalId);
    startInterval();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index - 1);
}

function startInterval() {
    intervalId = setInterval(nextSlide, 7000);
}

startInterval();

document.querySelectorAll('.card-produtos').forEach(card => {
    card.addEventListener('mouseover', () => {
        document.querySelectorAll('.card-produtos').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.opacity = '0';
            }
        });
    });

    card.addEventListener('mouseout', () => {
        document.querySelectorAll('.card-produtos').forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    });
});

