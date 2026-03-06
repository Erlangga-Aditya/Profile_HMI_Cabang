import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const initGallery = () => {
    // Gallery Slider (if using Swiper for gallery)
    const gallerySwiper = new Swiper('.gallery-slider', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1.2,
        spaceBetween: 16,
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
        }
    });

    // Lightbox / Zoom Logic (Optional JS approach)
    // For now, use the grid with hover effects defined in HTML
};
