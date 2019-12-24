import Glide from '@glidejs/glide';

export const glide = new Glide('.glide', {
    type: 'carousel',

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
            perView: 1.5,
            peek: {
                before: 0,
                after: 132
            }
        },
        680: {
            perView: 1,
            focusAt: 'center',
            peek: {
                before: 0,
                after: 32
            }
        }
    },
});

