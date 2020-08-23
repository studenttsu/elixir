(function ($) {

    $.fn.faq = function () {
        $(this).each(function (index, item) {
            const el = $(this);
            let activeItem;

            el.children().each((index, elem) => {
                const answer = $(elem).find('[data-type=answer]');
                answer.hide();
            });

            el.find('[data-type=question]').on('click', function (event) {
                const elem = event.target;

                if (activeItem === elem) {
                    $(this).parent().removeClass('active');
                    $(this).next().slideUp('fast');
                } else {
                    el.children().each((index, item) => {
                        $(item).removeClass('active');
                        $(this).next().slideUp('fast');
                    });
    
                    $(this).addClass('active');
                    $(this).next().slideDown('fast');
    
                    activeItem = elem;
                }
            });

        });

        return this;
    };

}(jQuery));

$(function () {
    $('.faq').faq();
});