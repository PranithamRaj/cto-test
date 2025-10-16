document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    let headerHeight = header?.offsetHeight || 70;

    const updateHeaderHeight = () => {
        headerHeight = header?.offsetHeight || 70;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    };

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            navLinks.setAttribute('data-visible', String(!isExpanded));
        });

        document.addEventListener('click', (e) => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            if (!isExpanded) {
                return;
            }

            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.setAttribute('data-visible', 'false');
            }
        });
    }

    const links = document.querySelectorAll('.nav a[href^="#"], .btn[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#apply') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                if (navToggle && navLinks) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navLinks.setAttribute('data-visible', 'false');
                }
                
                const offset = target.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                });
                history.pushState(null, '', href);
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-100px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section, .program-overview, .community-wins, .who-this-is-for, .final-cta');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY > 100;
                if (scrolled) {
                    header?.classList.add('scrolled');
                } else {
                    header?.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
});
