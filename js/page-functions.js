

// global vars
var $window;
var WH;
var WW;
var HH;

// ---

// the magic begins
$(document).ready(function () {

	// global vars
	$window = $(window);

	// ---

	// global resize
	globalResize();
	$window.resize(globalResize);



});

// ---

// global resize
function globalResize() {

	// set window size
	WH = $window.height();
	WW = $window.width();
	HH = 0;

}

