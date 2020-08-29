$(function () {
    const slider$ = $('.slider');

    const moveTargetToActiveItem = (nextEl, activateAnimation) => {
        const activeEl = nextEl || document.querySelector('.slick-dots .slick-active button');
        const target = document.querySelector('.slider-active-target');
        const sliderEl = document.querySelector('.slider');
        const sliderOffsetLeft = sliderEl.getBoundingClientRect().left;

        const width = activeEl.getBoundingClientRect().width;
        const height = activeEl.getBoundingClientRect().height;
        const left = activeEl.getBoundingClientRect().left + window.pageXOffset - sliderOffsetLeft;

        target.style.transition = activateAnimation ? 'all .35s ease-in-out' : '';
        target.style.opacity = "1";
        target.style.width = `${width}px`;
        target.style.height = `${height + 1}px`;
        target.style.left = `${left}px`;
        target.style.transform = "none";
        target.style.zIndex = 101;
    };

    slider$.slick({ dots: true, arrows: false, autoplay: true, autoplaySpeed: 4500 });
    slider$.append('<span class="slider-active-target"></span>');

    slider$.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        const activeEl = document.querySelectorAll('.slick-dots li');
        moveTargetToActiveItem(activeEl[nextSlide].querySelector('button'), true);
    });

    window.addEventListener("resize", () => moveTargetToActiveItem());
    moveTargetToActiveItem();
});
