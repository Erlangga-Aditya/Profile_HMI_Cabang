import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
    // Initialize AOS
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out-cubic',
        once: false, // Allows re-animating on scroll back up if desired
        mirror: true,
    });

    // Custom GSAP - Magnetic Buttons / Interactive elements
    const buttons = document.querySelectorAll('a, button');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Hero Section GSAP (Parallax / Floating effects)
    gsap.fromTo('.hero-bg-image',
        { yPercent: -5 },
        {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
                trigger: '#beranda',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        }
    );

    gsap.to('.hero-particles', {
        y: -100,
        ease: 'none',
        scrollTrigger: {
            trigger: '#beranda',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        },
    });

    // Reveal elements on scroll using GSAP + ScrollTrigger
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });
    });
};
