document.addEventListener('DOMContentLoaded', function() {
    const signupButtons = document.querySelectorAll('.signup-button');
    signupButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'sign_up.html';
        });
    });
    const priceLinks = document.querySelectorAll('.price-link');
    priceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const service = this.dataset.service; 
            alert(`Прайс для услуги: ${service}`);
        });
    });
});
function countVisits() {
    let visits = localStorage.getItem("visits");
    visits = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem("visits", visits);
    document.getElementById("visitorCount").textContent = `Вы посетитель номер: ${visits}`;
  }
  window.onload = countVisits;

  // Скрипт для кнопки "Наверх"
        document.addEventListener('DOMContentLoaded', function() {
            const backToTopButton = document.querySelector('.back-to-top');
            
            // Показываем/скрываем кнопку при прокрутке
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('active');
                } else {
                    backToTopButton.classList.remove('active');
                }
            });
            
            // Плавная прокрутка вверх при клике
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});
  
// Сортировка новостей
document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sort-news');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const newsGrid = document.querySelector('.news-grid');
            const newsCards = Array.from(newsGrid.querySelectorAll('.news-card'));
            
            newsCards.sort((a, b) => {
                const dateA = new Date(a.querySelector('.day').textContent + ' ' + a.querySelector('.month').textContent);
                const dateB = new Date(b.querySelector('.day').textContent + ' ' + b.querySelector('.month').textContent);
                return this.value === 'asc' ? dateA - dateB : dateB - dateA;
            });

            newsCards.forEach(card => newsGrid.appendChild(card));
        });
    }
});

//(Улучшение формы обратной связи с валидацией)
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Простая валидация
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Показать сообщение об успехе
                const successMsg = document.createElement('div');
                successMsg.className = 'form-success';
                successMsg.textContent = 'Спасибо! Ваша заявка отправлена.';
                form.appendChild(successMsg);
                
                // Очистить форму через 3 секунды
                setTimeout(() => {
                    form.reset();
                    successMsg.remove();
                }, 3000);
            }
        });
    });
});

// плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// не помню что хотела тут написать 
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// хзхзхз
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker registration failed: ', err));
    });
}

// Создание хэллоуинского анимированного фона
document.addEventListener('DOMContentLoaded', function() {
    // Создаем контейнер для анимированного фона
    const halloweenBg = document.createElement('div');
    halloweenBg.className = 'halloween-bg';
    document.body.appendChild(halloweenBg);
    
    // Создание привидений
    for (let i = 0; i < 5; i++) {
        const ghost = document.createElement('div');
        ghost.classList.add('floating-ghost');
        ghost.style.left = `${Math.random() * 90}%`;
        ghost.style.top = `${Math.random() * 90}%`;
        ghost.style.animationDelay = `${Math.random() * 10}s`;
        halloweenBg.appendChild(ghost);
    }
    
    // Создание летучих мышей
    for (let i = 0; i < 8; i++) {
        const bat = document.createElement('div');
        bat.classList.add('floating-bat');
        bat.style.left = `${Math.random() * 100}%`;
        bat.style.top = `${Math.random() * 100}%`;
        bat.style.animationDelay = `${Math.random() * 15}s`;
        halloweenBg.appendChild(bat);
    }
    
    // Создание падающих листьев
    for (let i = 0; i < 15; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('falling-leaves');
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.animationDelay = `${Math.random() * 20}s`;
        halloweenBg.appendChild(leaf);
    }
});