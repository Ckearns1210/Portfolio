function toggleOn() {
  $('body, #projects-button, aside, section, .site-container').toggleClass('on');
}

var ballCount = 10 ,
    ballMinSize = 40,
    ballMaxSize = 125,
    container = $('.balls');

var numArray = []



$(document).ready(function() {

numArray = [];

  var byline = document.getElementById('byline');  	// Find the H2
  bylineText = byline.innerHTML;										// Get the content of the H2
  bylineArr = bylineText.split('');									// Split content into array
  byline.innerHTML = '';														// Empty current content

  var span;					// Create variables to create elements
  var letter;

  for(i=0;i<bylineArr.length;i++){									// Loop for every letter
    span = document.createElement("span");					// Create a <span> element
    letter = document.createTextNode(bylineArr[i]);	// Create the letter
    if(bylineArr[i] == ' ') {												// If the letter is a space...
      byline.appendChild(letter);					// ...Add the space without a span
    } else {
  		span.appendChild(letter);						// Add the letter to the span
    	byline.appendChild(span); 					// Add the span to the h2
    }
  }




    // var width = $(window).width()
    // if ((width <= 720 )){
    // alert('Remove my nav!');
    // } else {
    // alert('Do nothing');
    // }
    // mobileSection.style.display = 'block'; }, false);

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

  initBalls();
    balls = window.setInterval(moveBalls,40); // 24 FPS
    $(window).resize(function() { moveBallsIntoBounds(); });




});

// Random number generator. Takes a minimum, maximum, and a boolean for whether the random number should be an integer.
function rand(min,max,isInt) {
  var min = min || 0,
      max = max || 1,
      isInt = isInt || false,
      num = Math.random()*(max - min) + min;
      if (isInt === true) {
        num = Math.round(num)
        if (contains.call(numArray, num)) {
          rand(min, max, isInt)
        }
        else {
          numArray.push(num)
          console.log(num)
          return num
        }

      }
    else {
      return num
    }

}

// Creates the balls, puts them in the container, and gives them a random size, color, opacity, starting location, and direction/speed of movement.
function initBalls() {
  container.css({'position':'relative'});
  for (i=0;i<ballCount;i++) {
    var newBall = $('<b />').appendTo(container),
        size = rand(ballMinSize,ballMaxSize);
    newBall.css({
      'position':'absolute',
      'width': '5em',
      'height': '5em',
      'background-image': 'url(img/' + rand(0, 47, true) + '.png)',
      'background-position': 'contain',
      'background-repeat': 'no-repeat',
      'display': 'inline-block',
      'vertical-align': 'middle',
      // 'opacity': rand(.1,.8),
      // 'background-color': 'rgb('+rand(0,255,true)+','+rand(0,255,true)+','+rand(0,255,true)+')',
      'top': rand(0,container.height()-size),
      'left': rand(0,container.width()-size)
    }).attr({
      'data-dX':rand(-10,10),
      'data-dY':rand(1,10)
    });
  }
}

// Moves the balls based on their direction/speed of movement (saved as a data attribute). If the movement will take them outside of the container, they reverse direction along that axis.
function moveBalls() {
  var maxX = container.width(),
      maxY = container.height();
  $('b',container).each(function(i,b) {
    var ball = $(b),
        pos = ball.position()
        x = pos.left,
        y = pos.top,
        dX = parseFloat(ball.attr('data-dX')),
        dY = parseFloat(ball.attr('data-dY')),
        size = ball.height();
    if(x+dX+size > maxX || x+dX < 0) ball.attr('data-dX',(dX=-dX));
    if(y+dY+size > maxY || y+dY < 0) ball.attr('data-dY',(dY=-dY));
    ball.css({'top':y+dY,'left':x+dX});
  });
}

// Move the balls back within the bounds of the container if the window (ergo, possibly the container) is resized. Because we're positioning from the top/left corners, we only have to worry about the bottom/right sides.
function moveBallsIntoBounds() {
  var maxX = container.width(),
      maxY = container.height();
  $('b',container).each(function(i,b) {
    var ball = $(b),
        pos = ball.position()
        x = pos.left,
        y = pos.top,
        size = ball.height();
    if (x+size > maxX) ball.css({ left: maxX-size+'px' });;
    if (y+size > maxY) ball.css({ top: maxY-size+'px' });;
  });
}


  var contains = function(needle) {
      // Per spec, the way to identify NaN is that it is not equal to itself
      var findNaN = needle !== needle;
      var indexOf;

      if(!findNaN && typeof Array.prototype.indexOf === 'function') {
          indexOf = Array.prototype.indexOf;
      } else {
          indexOf = function(needle) {
              var i = -1, index = -1;

              for(i = 0; i < this.length; i++) {
                  var item = this[i];

                  if((findNaN && item !== item) || item === needle) {
                      index = i;
                      break;
                  }
              }

              return index;
          };
      }

      return indexOf.call(this, needle) > -1;
  };
