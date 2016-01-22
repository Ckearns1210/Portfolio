function toggleOn() {
  $('body, #projects-button, aside, section, .site-container').toggleClass('on');
}



$(document).ready(function() {
  $('#projects-button').click(function() {
    toggleOn();
  });
  $('section').click(function() {
    if ($('aside').hasClass('on')) {
      toggleOn();
    };
  })
  $('body').keyup(function(e) {
    if (e.keyCode == 32) {
      toggleOn();
    }
  });
  $('.glitch_word_box').on('touchstart', function(e) {
    $('.glitch_word_box').addClass('hover');
  }).on('touchmove', function(e) {
    $('.glitch_word_box').removeClass('hover');
  }).mouseenter(function(e) {
    $('.glitch_word_box').addClass('hover');
  }).mouseleave(function(e) {
    $('.glitch_word_box').removeClass('hover');
  }).click(function(e) {
    $('.glitch_word_box').removeClass('hover');
  });
});
