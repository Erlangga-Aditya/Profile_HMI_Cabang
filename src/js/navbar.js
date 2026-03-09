export const initNavbar = () => {
    const navbar = document.getElementById('main-navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // Scroll Effect (Transparent to Solid/Glass)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('bg-transparent');
        }
    });

    // Mobile Hamburger Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileDropdown.classList.contains('hidden');
            if (isHidden) {
                mobileDropdown.classList.remove('hidden');
                // Small timeout to trigger transition
                setTimeout(() => {
                    mobileDropdown.classList.remove('scale-95', 'opacity-0');
                    mobileDropdown.classList.add('scale-100', 'opacity-100');
                }, 10);
            } else {
                mobileDropdown.classList.remove('scale-100', 'opacity-100');
                mobileDropdown.classList.add('scale-95', 'opacity-0');
                // Wait for transition then hide
                setTimeout(() => {
                    mobileDropdown.classList.add('hidden');
                }, 300);
            }
        });
    }

    // Smooth Scroll & Close Mobile Menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close menu
                    mobileDropdown.classList.add('hidden');
                    mobileDropdown.classList.remove('block');

                    // Scroll
                    window.scrollTo({
                        top: targetElement.offsetTop - (navbar.offsetHeight > 0 ? navbar.offsetHeight : 80),
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};
