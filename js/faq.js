(function ($) {
    console.log(1)
    $.fn.faq = function () {
        console.log(2)
        $(this).each(function (index, item) {
            console.log(item)
            const el = $(this);
            let activeItem;

            el.children().each((index, el) => {
                const element = $(el);
                const question = element.find('[data-type=question]');
                const answer = element.find('[data-type=answer]');
                const isActive = element.hasClass('active');

                if (isActive) {
                    activeItem = element;
                } else {
                    answer.hide();
                }

                question.on('click', function () {
                    answer.slideDown('fast');

                    if (activeItem) {
                        activeItem.find('[data-type=answer]').slideToggle('fast');
                    }

                    activeItem = element;
                });

                if (index === 0 && !activeItem) {
                    activeItem = element;
                    answer.show();
                }
            });
        });

        return this;
    };

}(jQuery));

$(function () {
    $('.faq').faq();
});