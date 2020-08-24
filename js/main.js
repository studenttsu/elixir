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
});
