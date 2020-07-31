var thumbsSwiper = new Swiper('.gallery-thumbs', {
  spaceBetween: 8,
  slidesPerView: 5,
  freeMode: true,
});


var mySwiper = new Swiper('.gallery-top', {
  // Optional parameters
  direction: 'horizontal',
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  mousewheel: {
    invert: false,
    forceToAxis: true,
  },

  thumbs: {
    swiper: thumbsSwiper
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: false,
    hide: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

})

$("#left-tab").unbind().click(function() {
  
  $('.right-tab-content').stop();

  $('.right-tab-content').slideUp('slow');
  $('.left-tab-content').slideDown(2000);

  $('#left-tab').removeClass('tab-inactive').addClass('tab-active');

  $('#right-tab').removeClass('tab-active');

});

$("#right-tab").unbind().click(function() {
  
  $('.left-tab-content').stop()

  //hide left-tab-content
  $('.left-tab-content').slideUp('slow');
  $('.right-tab-content').slideDown(2000);

  $('#right-tab').removeClass('tab-inactive').addClass('tab-active');

  $('#left-tab').removeClass('tab-active');

});

$( document ).ready(function() {
  
});