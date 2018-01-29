
// Animação Scroll da página

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('.navbar-brand, .nav-link').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var targetOffset = $(id).offset().top;
  
  console.log(targetOffset);
  
  $('html, body').animate({
    scrollTop: targetOffset
  }, 700);
});

$('.curriculo-section').each(function() {
  var sectionHeight = $(this).height();
  var offsetTop = $(this).offset().top;
  var id = $(this).attr('id');
  var $itemMenu = $('a[href="#' + id + '"]');
  
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (offsetTop < scrollTop + 1 && offsetTop + sectionHeight > scrollTop + 1) {
      $($itemMenu).addClass('active');
    } else  {
      $($itemMenu).removeClass('active');
    }
  })
});

// Animação botão mobile

$('.mobile-btn').click(function() {
  $(this).toggleClass('activeEx');
});

// Animação do Scroll


function() {
  var $target = $('[data-anime="scroll"]');
  var animationClass = 'animate';
  var offset = $(window).height() * 3/4;

  function animeScroll() {
    var documentTop = $(window).scrollTop();

    $target.each(function() {
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });

