$('.faq__question').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.parent().hasClass('active')) {
      $this.parent().removeClass('active');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('.faq__answer').removeClass('show');
      $this.parent().parent().find('.faq__answer').slideUp(350);
      $this.parent().toggleClass('active');
      $this.next().slideToggle(350);
  }
});