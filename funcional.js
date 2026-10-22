document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.requirement-card');

    // 1. Menu Responsivo (Abrir/Fechar no Mobile)
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        menuToggle.textContent = sidebar.classList.contains('open') ? '✕' : '☰';
    });

    // Fechar menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                menuToggle.textContent = '☰';
            }
        });
    });

    // 2. Scrollspy (Muda o link ativo no menu ao rolar a tela)
    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Verifica se a rolagem passou do topo do elemento tirando uma margem de segurança
            if (window.scrollY >= (sectionTop - 100)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});
