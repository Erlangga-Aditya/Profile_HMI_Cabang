import '../css/style.css';
import { initNavbar } from './navbar';
import { initAnimations } from './animation';
import { initGallery } from './gallery';

// Main execution when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {

    // PRELOADER
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            // Let it spin for a bit for premium feel
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 800);
        });
    }

    // Initialize modules
    initNavbar();
    initAnimations();
    initGallery();

    // GSAP ScrollTrigger refresh
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
    });
});

// For HMR (Hot Module Replacement)
if (module.hot) {
    module.hot.accept();
}
