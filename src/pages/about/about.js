import "./about.css";

import Glide from '@glidejs/glide';

const mobileMenuButton = document.querySelector('.header__mobileico');
const mobileMenu = document.querySelector('.menumobile');
const ghButton = document.querySelector('.github__button');

let isOpenMenu = false;

ghButton.addEventListener('click', () => {
    window.open(
        'https://github.com/smirnovs/diplom-frontend',
        '_blank'
    )
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && isOpenMenu == true) {
        isOpenMenu = false;
        mobileMenu.classList.remove('menumobile__isopened');
        mobileMenuButton.classList.remove('header__mobileico_black-closed');
    }
})


mobileMenuButton.addEventListener('click', () => {
    if (isOpenMenu == false) {
        mobileMenuButton.classList.toggle('header__mobileico_black-closed');
        isOpenMenu = true;
        mobileMenu.classList.toggle('menumobile__isopened');
    } else {
        mobileMenuButton.classList.toggle('header__mobileico_black-closed');
        isOpenMenu = false;
        mobileMenu.classList.toggle('menumobile__isopened');
    }
})

const glide = new Glide('.glide', {
    type: 'carousel',
    // focusAt: 'center',
    perView: 1,
    breakpoints: {
        2560: {
            perView: 3,
            peek: {
                before: 84,
                after: 104
            }
        },
        1252: {
            perView: 2,
            peek: {
                before: 0,
                after: 132
            }
        },
        680: {
            perView: 1,
            peek: {
                before: 0,
                after: 32
            }
        }
    },
});

glide.mount();

// var glide = new Glide('.glide', {
//     type: 'carousel',
//     perView: 3,
//     focusAt: 'center',
//     gap: 16,
//     breakpoints: {
//         1080: {
//             perView: 2
//         },
//         590: {
//             perView: 1
//         },
//     }
// })

// glide.mount()