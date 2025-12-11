// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function () {

    // Garante início no topo e evita restaurar posição anterior
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 50);
    }

    // ==========================================
    // INICIALIZAÇÃO DAS BIBLIOTECAS
    // ==========================================

    // Inicializa AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        offset: 100,
        delay: 100
    });

    // Inicializa Swiper (Carrossel)
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        }
    });

    // ==========================================
    // FUNCIONALIDADES INTERATIVAS
    // ==========================================

    // Scroll suave para o indicador de scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function () {
            document.querySelector('#detalhes').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Botão de confirmação - WhatsApp
    const confirmBtn = document.querySelector('.confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function () {
            // Configurar dados para WhatsApp
            const phoneNumber = '5513991712888'; // Substitua pelo número desejado
            const message = encodeURIComponent(
                `Olá! Confirmo minha presença no seu aniversário ;)\n\n` +
                `- Data: 04 de Janeiro, 2026\n` +
                `- Horário: 12h00\n` +
                `- Local: Espaço Gourmet Edificio Elegance\n\n` +
                `Mal posso esperar para celebrar esse dia especial! :) S2 `
            );

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });

        // Efeito de pulsar no botão
        setInterval(function () {
            confirmBtn.style.transform = 'scale(1.05)';
            setTimeout(function () {
                confirmBtn.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Botão Google Maps
    const mapsBtn = document.querySelector('.maps-btn');
    if (mapsBtn) {
        mapsBtn.addEventListener('click', function () {
            const address = encodeURIComponent('Edifício Elegance, R. Alberto Santos Dumont, 148 - Guilhermina, Praia Grande');
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
            window.open(mapsUrl, '_blank');
        });
    }


    // ==========================================
    // ANIMAÇÕES PERSONALIZADAS
    // ==========================================

    // Animação de texto digitando para o título principal
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        const originalText = element.textContent;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        // Inicia a animação após um pequeno delay
        setTimeout(type, 1000);
    }

    // Aplica animação de digitação ao nome da aniversariante
    const birthdayName = document.querySelector('.birthday-name');
    if (birthdayName) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter(birthdayName, 'Isabela', 150);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(birthdayName);
    }


    // ==========================================
    // CONTADOR REGRESSIVO (OPCIONAL)
    // ==========================================

    function createCountdown() {
        // Data do aniversário (ajuste conforme necessário)
        const birthdayDate = new Date('2026-01-04T13:00:00').getTime();

        const countdownElement = document.createElement('div');
        countdownElement.className = 'countdown';
        countdownElement.innerHTML = `
            <div class="countdown-container">
                <h3>Contagem Regressiva</h3>
                <div class="countdown-timer">
                    <div class="time-unit">
                        <span class="number" id="days">00</span>
                        <span class="label">Dias</span>
                    </div>
                    <div class="time-unit">
                        <span class="number" id="hours">00</span>
                        <span class="label">Horas</span>
                    </div>
                    <div class="time-unit">
                        <span class="number" id="minutes">00</span>
                        <span class="label">Minutos</span>
                    </div>
                    <div class="time-unit">
                        <span class="number" id="seconds">00</span>
                        <span class="label">Segundos</span>
                    </div>
                </div>
            </div>
        `;

        // Adiciona o countdown após os detalhes do evento
        const heroContent = document.querySelector('.hero-content');
        const eventDetails = document.querySelector('.event-details');
        if (heroContent && eventDetails) {
            heroContent.insertBefore(countdownElement, eventDetails.nextSibling);
        }

        // Atualiza o countdown
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = birthdayDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            } else {
                document.querySelector('.countdown-timer').innerHTML = '<h2>🎉 É HOJE! 🎂</h2>';
            }
        }

        // Atualiza a cada segundo
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Primeira execução
    }

    // Chama a função do countdown
    createCountdown();

    // ==========================================
    // EFEITOS NA GALERIA DE FOTOS
    // ==========================================

    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach((item, index) => {
        // Adiciona delay escalonado para animação
        item.style.animationDelay = `${index * 0.1}s`;

        // Efeito de hover personalizado
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) scale(1.03) rotate(1deg)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });

    // ==========================================
    // NAVEGAÇÃO SUAVE ENTRE SEÇÕES
    // ==========================================

    // Cria um menu de navegação flutuante (opcional)
    function createFloatingMenu() {
        const menu = document.createElement('nav');
        menu.className = 'floating-menu';
        menu.innerHTML = `
            <ul>
                <li><a href="#convite" title="Convite">🎉</a></li>
                <li><a href="#detalhes" title="Detalhes">📅</a></li>
                <li><a href="#homenagem" title="Homenagem">💕</a></li>
                <li><a href="#galeria" title="Galeria">📸</a></li>
                <li><a href="#timeline" title="Nossa História">⏰</a></li>
                <li><a href="#playlist" title="Playlist Musical">🎵</a></li>
                <li><a href="#mensagem-final" title="Mensagem Final">💌</a></li>
            </ul>
        `;

        document.body.appendChild(menu);

        // Adiciona funcionalidade de scroll suave
        menu.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.getAttribute('href')) {
                const targetId = e.target.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    // Chama a função do menu flutuante
    createFloatingMenu();

    // ==========================================
    // EFEITOS DE PARTÍCULAS (OPCIONAL)
    // ==========================================

    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Ativa partículas apenas em telas maiores
    if (window.innerWidth > 768) {
        createParticles();
    }

    // ==========================================
    // OTIMIZAÇÕES DE PERFORMANCE
    // ==========================================

    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    images.forEach(img => {
        if (img.dataset.src) {
            img.classList.add('lazy');
            imageObserver.observe(img);
        }
    });

    // ==========================================
    // FEEDBACK VISUAL DE CARREGAMENTO
    // ==========================================

    // Remove o loader quando tudo estiver carregado
    window.addEventListener('load', function () {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }

        // Adiciona classe para indicar que a página foi carregada
        document.body.classList.add('loaded');
    });

}); // Fim do DOMContentLoaded

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================

// Função para adicionar efeito de confete
function createConfetti() {
    const colors = ['#FFB6C1', '#F0E68C', '#DDA0DD', '#F5DEB3', '#FFE4E1'];

    for (let i = 0; i < 100; i++) {
        const confetto = document.createElement('div');
        confetto.className = 'confetto';
        confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetto.style.left = Math.random() * 100 + '%';
        confetto.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetto.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetto);

        // Remove confete após animação
        setTimeout(() => {
            confetto.remove();
        }, 5000);
    }
}

// Função para mostrar mensagem especial
function showSpecialMessage(message, duration = 3000) {
    const messageElement = document.createElement('div');
    messageElement.className = 'special-message';
    messageElement.innerHTML = message;
    document.body.appendChild(messageElement);

    setTimeout(() => {
        messageElement.style.opacity = '0';
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, duration);
}

// ==========================================
// EVENTOS ESPECIAIS
// ==========================================

// Easter egg: clique múltiplo no nome da aniversariante
let clickCount = 0;
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('birthday-name')) {
        clickCount++;
        if (clickCount === 5) {
            createConfetti();
            showSpecialMessage('🎉 Isabella é maravilhosa! 🎂💕');
            clickCount = 0;
        }
    }
});

// Detecta quando o usuário sai da aba
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '💕 Volte, sentimos sua falta! 💕';
    } else {
        document.title = 'Aniversário da Isabella - Um Dia Especial';
    }
});
