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

    const applyLinks = document.querySelectorAll('[data-apply-target-desktop]');
    const applyMediaQuery = window.matchMedia('(max-width: 960px)');

    const updateApplyLinks = () => {
        const useMobileTarget = applyMediaQuery.matches;
        applyLinks.forEach(link => {
            const desktopTarget = link.getAttribute('data-apply-target-desktop');
            const mobileTarget = link.getAttribute('data-apply-target-mobile');
            const target = useMobileTarget && mobileTarget ? mobileTarget : desktopTarget;

            if (target) {
                link.setAttribute('href', target);
            }
        });
    };

    if (applyLinks.length) {
        updateApplyLinks();

        if (typeof applyMediaQuery.addEventListener === 'function') {
            applyMediaQuery.addEventListener('change', updateApplyLinks);
        } else if (typeof applyMediaQuery.addListener === 'function') {
            applyMediaQuery.addListener(updateApplyLinks);
        }

        window.addEventListener('resize', updateApplyLinks);
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

    const testimonialVideos = [
        {
            headline: 'Finding Creative Confidence with Mentorship',
            youtubeId: 'ysz5S6PUM-U',
            summary: 'Alex explains how dedicated coaching unlocked the clarity to move from scattered ideas to a focused creative practice.'
        },
        {
            headline: 'Turning a Side Hustle into a Sustainable Studio',
            youtubeId: '1La4QzGeaaQ',
            summary: 'Priya shares the systems she built with Artisan Lab to scale her client work without sacrificing craft.'
        },
        {
            headline: 'Shipping a Passion Project with Community Support',
            youtubeId: 'aqz-KE-bpKQ',
            summary: 'Miguel walks through the milestones that took his concept from sketchbook to launch-ready product.'
        }
    ];

    const createTestimonialVideo = ({ headline, youtubeId, summary }, index) => {
        const wrapper = document.createElement('article');
        wrapper.className = 'testimonial-video';
        if (index % 2 !== 0) {
            wrapper.classList.add('testimonial-video--reverse');
        }

        const content = document.createElement('div');
        content.className = 'testimonial-video__content';

        const eyebrow = document.createElement('p');
        eyebrow.className = 'testimonial-video__eyebrow';
        eyebrow.textContent = 'Student Interview';

        const title = document.createElement('h3');
        title.className = 'testimonial-video__headline';
        title.textContent = headline;

        const description = document.createElement('p');
        description.className = 'testimonial-video__summary';
        description.textContent = summary || 'Discover how focused support helped this student accelerate their craft and career.';

        content.append(eyebrow, title, description);

        const media = document.createElement('div');
        media.className = 'testimonial-video__media';

        const frame = document.createElement('div');
        frame.className = 'testimonial-video__frame';

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${youtubeId}?rel=0`;
        iframe.title = `${headline} interview`;
        iframe.loading = 'lazy';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.setAttribute('allowfullscreen', '');

        frame.appendChild(iframe);
        media.appendChild(frame);

        wrapper.append(content, media);

        return wrapper;
    };

    const testimonialVideoList = document.getElementById('testimonialVideoList');
    if (testimonialVideoList) {
        testimonialVideos.forEach((testimonial, index) => {
            testimonialVideoList.appendChild(createTestimonialVideo(testimonial, index));
        });
    }

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
