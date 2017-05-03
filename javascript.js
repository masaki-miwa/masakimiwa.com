!function($) {
  // Write your own javascript here.

  // Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-35295447-1', 'auto');
  ga('send', 'pageview');
 
  }(window.jQuery);

// Create an overlay with image
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');

// Add image to overlay
$overlay.append($image);

// Add overlay
$('body').append($overlay);
	
// Hover over link
$('.image').hover(function() {
	var imageLocation = $(this).attr('alt');
	$image.attr('src', imageLocation); // Update overlay with the image linked in the link
	$overlay.css('display', 'flex');
	},
	function() {
		$('#overlay').hide(); // Hide overlay when mouse leave
	}
);

$('#overlay').click(function() {
	$('#overlay').hide();
});