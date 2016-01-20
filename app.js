function toggleOn(){
  $('body, #projects-button, aside, section').toggleClass('on');
}



$(document).ready(function() {
  $('#projects-button').click(function() {
    toggleOn();
  });
  $('section').click(function() {
    if ($('aside').hasClass('on')) {
      toggleOn();
    };
  })});
