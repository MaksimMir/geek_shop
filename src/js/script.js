window.addEventListener("load", () => {
    const burger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu_close');
    const cards = document.querySelectorAll('.product_card');
    const linkOnCart = document.querySelector('.black_link');
    const items = document.querySelectorAll('.subscrabe_comments .item');
    
    let i = 0;
    let index = 0;

    const black = document.createElement('div');
    black.classList.add('black');
    black.innerHTML = '<p class="black_link"><i class="fa fa-shopping-cart"></i>Add to Cart</p>';
    
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    for (const card of cards) {
        card.addEventListener('mouseenter', () => {
            card.append(black);
        });

        card.addEventListener('mouseleave', () => {
            card.removeChild(black);
        });
    };

    setInterval(() => {
        items[i].classList.remove('showed');
        i++;
        if(i >= items.length) i = 0;
        
        items[i].classList.add('showed');
    }, 5000);


    try {
        const slides = document.querySelectorAll('.preview_slider-box img');
        const line = document.querySelector('.preview_slider-line');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        let width = window.getComputedStyle(line.parentNode).width;

        for (const slide of slides) {
            slide.style.width = width;
        };

        let pos = 0;
        line.style.width = 100 * slides.length + '%';

        
        prev.addEventListener('click', (evt) => {
            evt.preventDefault();

            if(index < slides.length - 1) index++;                       
            slideShow(width, pos);
        });

        next.addEventListener('click', (evt) => { 
            evt.preventDefault();
    
            if(index > 0) index--;              
            slideShow(width, pos); 
        });
    } catch (error) {}
    
    function slideShow(w, p) {
        p = w.replace(/px/g, '') * index; 
        line.style.transition = 'all 1s'; 
        line.style.marginLeft = -p + 'px';
    }
});

