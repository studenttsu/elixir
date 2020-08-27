$(function () {
  const mobileMenuBtn = $('#mobile-menu-btn');
  const mobileMenu = $('#mobile-navigation');
  const catalogBtn = $('.mobile-navigation__catalog');
  const catalog = $('.mobile-navigation__secondary');
  const backBtn = $('.mobile-navigation__back');

  mobileMenuBtn.click(function() {
    $(this).toggleClass('active');
    mobileMenu.toggleClass('open');
    catalog.removeClass('open');
  });

  catalogBtn.click(function() {
    catalog.addClass('open');
  });

  backBtn.click(function() {
    catalog.removeClass('open');
  });

  $('input.phone-input').inputmask({
    mask: '+7 (999) 999-99-99'
  });

  $('form#subscribe').validate({
    rules: {
      phone: {
        required: true,
        phoneValidator: true
      },
      policy: 'required'
    },
    errorPlacement: function (error, element) { },
    submitHandler: function (form) {
      form.submit();
    }
  });
});
