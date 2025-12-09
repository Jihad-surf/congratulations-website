/* ==========================================
   SCRIPT PRINCIPAL - SITE ANIVERSÁRIO ISABELLA
   ========================================== */

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
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
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('#detalhes').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Botão de confirmação - WhatsApp
    const confirmBtn = document.querySelector('.confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            // Configurar dados para WhatsApp
            const phoneNumber = '5511999999999'; // Substitua pelo número desejado
            const message = encodeURIComponent(
                `Olá! Confirmo minha presença no aniversário da Isabella! 🎉💕\n\n` +
                `📅 Data: 15 de Dezembro, 2024\n` +
                `⏰ Horário: 19h00\n` +
                `📍 Local: Salão de Festas Golden\n\n` +
                `Mal posso esperar para celebrar esse dia especial! ❤️`
            );
            
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
        
        // Efeito de pulsar no botão
        setInterval(function() {
            confirmBtn.style.transform = 'scale(1.05)';
            setTimeout(function() {
                confirmBtn.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
    
    // Botão Google Maps
    const mapsBtn = document.querySelector('.maps-btn');
    if (mapsBtn) {
        mapsBtn.addEventListener('click', function() {
            // Coordenadas de exemplo (substitua pelas coordenadas reais)
            const address = encodeURIComponent('Salão de Festas Golden, Rua das Flores, 123 - Centro');
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
            window.open(mapsUrl, '_blank');
        });
    }
    
    // ==========================================
    // FUNCIONALIDADES DA PLAYLIST MUSICAL
    // ==========================================
    
    // Array para armazenar as músicas sugeridas
    let suggestedSongs = [
        {
            name: "Perfect",
            artist: "Ed Sheeran",
            suggester: "Ana",
            reason: "Nossa música!",
            genre: "romantica"
        },
        {
            name: "Uptown Funk",
            artist: "Mark Ronson ft. Bruno Mars",
            suggester: "João",
            reason: "Para animar a pista!",
            genre: "pop"
        },
        {
            name: "Aquarela",
            artist: "Toquinho",
            suggester: "Maria",
            reason: "Linda e nostálgica",
            genre: "mpb"
        },
        {
            name: "Can't Stop the Feeling",
            artist: "Justin Timberlake",
            suggester: "Pedro",
            reason: "Impossível não dançar!",
            genre: "dance"
        },
        {
            name: "All of Me",
            artist: "John Legend",
            suggester: "Lucia",
            reason: "Para os momentos românticos",
            genre: "romantica"
        }
    ];
    
    // Formulário de sugestão musical
    const musicForm = document.getElementById('musicForm');
    if (musicForm) {
        musicForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const songName = document.getElementById('songName').value.trim();
            const artistName = document.getElementById('artistName').value.trim();
            const suggesterName = document.getElementById('suggesterName').value.trim();
            const musicReason = document.getElementById('musicReason').value.trim();
            const musicGenre = document.getElementById('musicGenre').value;
            
            if (songName && artistName && suggesterName && musicGenre) {
                const newSong = {
                    name: songName,
                    artist: artistName,
                    suggester: suggesterName,
                    reason: musicReason || "Música especial!",
                    genre: musicGenre
                };
                
                suggestedSongs.push(newSong);
                updateMusicList();
                updateStats();
                updateGenreChart();
                
                // Reset form
                musicForm.reset();
                
                // Show success message
                showSpecialMessage(`🎵 "${songName}" foi adicionada à playlist! Obrigado, ${suggesterName}! 💕`);
                
                // Animate new song
                setTimeout(() => {
                    const musicItems = document.querySelectorAll('.music-item');
                    const lastItem = musicItems[musicItems.length - 1];
                    if (lastItem) {
                        lastItem.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            lastItem.style.transform = 'scale(1)';
                        }, 300);
                    }
                }, 100);
            }
        });
    }
    
    // Função para atualizar a lista de músicas
    function updateMusicList(filterGenre = 'todas') {
        const musicList = document.getElementById('musicList');
        if (!musicList) return;
        
        musicList.innerHTML = '';
        
        const filteredSongs = filterGenre === 'todas' ? 
            suggestedSongs : 
            suggestedSongs.filter(song => song.genre === filterGenre);
        
        filteredSongs.forEach((song, index) => {
            const musicItem = document.createElement('div');
            musicItem.className = 'music-item';
            musicItem.setAttribute('data-genre', song.genre);
            musicItem.style.animationDelay = `${index * 0.1}s`;
            
            musicItem.innerHTML = `
                <div class="music-info">
                    <div class="music-icon">
                        <i class="fas fa-music"></i>
                    </div>
                    <div class="music-details">
                        <h4>${song.name}</h4>
                        <p>${song.artist}</p>
                        <small>Sugerida por: ${song.suggester} ${getGenreEmoji(song.genre)}</small>
                        <div class="music-reason">"${song.reason}"</div>
                    </div>
                </div>
                <div class="music-genre">${getGenreDisplayName(song.genre)}</div>
            `;
            
            musicList.appendChild(musicItem);
        });
    }
    
    // Função para atualizar estatísticas
    function updateStats() {
        const totalSongs = document.getElementById('totalSongs');
        const totalContributors = document.getElementById('totalContributors');
        
        if (totalSongs) {
            totalSongs.textContent = suggestedSongs.length;
        }
        
        if (totalContributors) {
            const uniqueContributors = [...new Set(suggestedSongs.map(song => song.suggester))];
            totalContributors.textContent = uniqueContributors.length;
        }
    }
    
    // Função para atualizar gráfico de gêneros
    function updateGenreChart() {
        const genreCount = {};
        suggestedSongs.forEach(song => {
            genreCount[song.genre] = (genreCount[song.genre] || 0) + 1;
        });
        
        const totalSongs = suggestedSongs.length;
        const genreBars = document.querySelectorAll('.genre-bar');
        
        genreBars.forEach(bar => {
            const genre = bar.getAttribute('data-genre');
            const count = genreCount[genre] || 0;
            const percentage = totalSongs > 0 ? (count / totalSongs) * 100 : 0;
            
            bar.style.width = `${Math.max(percentage, 5)}%`;
            bar.querySelector('span').textContent = `${getGenreDisplayName(genre)} (${Math.round(percentage)}%)`;
        });
    }
    
    // Função auxiliar para emojis dos gêneros
    function getGenreEmoji(genre) {
        const emojis = {
            'romantica': '💕',
            'pop': '🎉',
            'rock': '🎸',
            'mpb': '🇧🇷',
            'sertanejo': '🤠',
            'internacional': '🌍',
            'dance': '💃',
            'classica': '🎼',
            'outros': '🎵'
        };
        return emojis[genre] || '🎵';
    }
    
    // Função auxiliar para nomes dos gêneros
    function getGenreDisplayName(genre) {
        const names = {
            'romantica': 'Romântica',
            'pop': 'Pop',
            'rock': 'Rock',
            'mpb': 'MPB',
            'sertanejo': 'Sertanejo',
            'internacional': 'Internacional',
            'dance': 'Dança',
            'classica': 'Clássica',
            'outros': 'Outros'
        };
        return names[genre] || 'Outros';
    }
    
    // Filtros de gênero
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter music list
            const genre = this.getAttribute('data-genre');
            updateMusicList(genre);
        });
    });
    
    // Ações da playlist
    const exportBtn = document.getElementById('exportPlaylist');
    const shareBtn = document.getElementById('sharePlaylist');
    
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            const playlistText = suggestedSongs.map(song => 
                `${song.name} - ${song.artist}`
            ).join('\n');
            
            const blob = new Blob([`Playlist do Aniversário da Isabella\n\n${playlistText}`], 
                { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'playlist-aniversario-isabella.txt';
            a.click();
            URL.revokeObjectURL(url);
            
            showSpecialMessage('📱 Playlist exportada com sucesso!');
        });
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            const playlistText = suggestedSongs.map(song => 
                `🎵 ${song.name} - ${song.artist} (por ${song.suggester})`
            ).join('\n');
            
            const shareText = `🎂 Playlist do Aniversário da Isabella! 🎵\n\n${playlistText}\n\n💕 Vem celebrar com a gente!`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'Playlist - Aniversário da Isabella',
                    text: shareText
                });
            } else {
                // Fallback para WhatsApp
                const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                window.open(whatsappUrl, '_blank');
            }
        });
    }
    
    // Inicializa a playlist
    updateMusicList();
    updateStats();
    updateGenreChart();
    
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
                    typeWriter(birthdayName, 'Isabella', 150);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(birthdayName);
    }
    
    // ==========================================
    // EFEITOS DE PARALLAX SUAVES
    // ==========================================
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.floating-hearts');
        
        if (parallax) {
            const speed = scrolled * 0.3;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // ==========================================
    // CONTADOR REGRESSIVO (OPCIONAL)
    // ==========================================
    
    function createCountdown() {
        // Data do aniversário (ajuste conforme necessário)
        const birthdayDate = new Date('2024-12-15T19:00:00').getTime();
        
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
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03) rotate(1deg)';
        });
        
        item.addEventListener('mouseleave', function() {
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
        menu.addEventListener('click', function(e) {
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
    // MENSAGENS DE CONSOLE ESPECIAIS
    // ==========================================
    
    console.log('%c💕 Site criado com muito amor para Isabella! 💕', 
        'color: #CD8CAE; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
    console.log('%c🎂 Feliz Aniversário! 🎂', 
        'color: #8B4B6B; font-size: 16px; font-weight: bold;');
    
    // ==========================================
    // TRATAMENTO DE ERROS
    // ==========================================
    
    window.addEventListener('error', function(e) {
        console.log('Ops! Algo deu errado, mas o amor continua! ❤️');
    });
    
    // ==========================================
    // FEEDBACK VISUAL DE CARREGAMENTO
    // ==========================================
    
    // Remove o loader quando tudo estiver carregado
    window.addEventListener('load', function() {
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
document.addEventListener('click', function(e) {
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
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '💕 Volte, sentimos sua falta! 💕';
    } else {
        document.title = 'Aniversário da Isabella - Um Dia Especial';
    }
});

// ==========================================
// RESPONSIVIDADE AVANÇADA
// ==========================================

// Ajusta comportamentos baseado no tamanho da tela
function handleResize() {
    const width = window.innerWidth;
    
    if (width <= 768) {
        // Comportamentos para mobile
        document.body.classList.add('mobile');
        
        // Reduz animações em dispositivos móveis para melhor performance
        const style = document.createElement('style');
        style.innerHTML = `
            * {
                animation-duration: 0.5s !important;
                transition-duration: 0.3s !important;
            }
        `;
        document.head.appendChild(style);
    } else {
        document.body.classList.remove('mobile');
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Executa na primeira carga