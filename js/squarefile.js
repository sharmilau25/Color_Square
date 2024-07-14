$(document).ready(function() {
  drawCube(16);
//on color btn click cube is created and random color is generated
	$(".color").click(function() {
		setCube();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			$(this).css("background", randomColor());
		});
	});

  $('.square').mouseenter(function() {
		$(this).css("background", "#fff");
	});

//.clear class appends in draw()
  $('.clear').click(function() {
		clearCube();
	});

//on create grid btn click
	$(".normal").click(function() {
		setCube();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			$(this).css("background", "#000");
		});
	});


//on opacity btn click
	$(".opacity").click(function() {
		setCube();
		$(".square").unbind();
    $('.square').css('background', '#EC7063').css('border', '1px solid #000');
		$(".square").mouseenter(function() {
			reduceOpacity($(this));
		})
	});

//on trail btn click
	$(".trail").click(function () {
		setCube();
    $('.square').css('background', '#EC7063').css('border','1px solid #000');
		$(".square").unbind();
		$(".square").hover(function() {
			$(this).css('opacity', 0);
		}, function () {
			$(this).fadeTo('slow', 1);
		});
	});
});

function setCube() {
  drawCube(prompt('Enter rows/columns count'));
  clearCube();
}

//removes the original cube grid
function clearCube() {
  $('.square').css('background', '#EC7063').css('opacity', '1');
}

//size is from setCube() and default size passed is 16
function drawCube(size) {
  var box = 960;
  var squareSize = (box - 4*size)/size;
  var cube = $('.cube').html("");
  for (var x = 0; x < size; x++) {
    for (var i = 0; i < size; i++) {
      cube.append($('<div></div>').addClass('square').height(squareSize).width(squareSize));
    }
    cube.append($('<div></div>').css('clear', 'both'));
  }
}

function reduceOpacity(elem) {
	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1
	if (nextOpacity > 0) { elem.css('opacity', nextOpacity); }
	else { elem.css('opacity', '0'); }
}

function randomColor() {
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	
	return "#" + toHex(red)+ toHex(green) + toHex(blue) ;
}

//pass random rgb values from randomColor()
function toHex(number) {
    if (number < 16) {
        return '0' + number.toString(16);
    }
    return number.toString(16);
}