$(function() {
    
  // ----- Burger menu

  $('.menu-bar__burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  })

  // ----- Hero text transformation
  $('.hero__information-button').on('click', function() {
    
    $('.hero__accent-background').toggleClass('hero__accent-background--active');
    $('.hero__container').toggleClass('hero__container--active');
    $('.hero__information-quote').slideToggle();
    $('.hero__information-text').toggleClass('hero__information-text--active');
    $(this).toggleClass('arrow-down-button--reversed');
    
  });

  new SimpleBar($('#hero-scrollbar')[0], {
    // autoHide: false,
    scrollbarMaxSize: 70,
  });

});