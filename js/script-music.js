// startsWith string function
if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str){
		return this.slice(0, str.length) == str;
	};
}

// moved to a function so we can call it on window.resize
function moveGear() {
	if (document.width < 940) {
		$('#extra-links-container').appendTo('#oneGoogleWrapper');
	} else {
		$('#extra-links-container').prependTo('#headerBar > .nav-bar');
	}
}

$(document).ready(function() {
	
	// prepend burger (menu), overlay, & history navigation to google bar
	var extras = 
		'<div id="burger"><span></span><span></span><span></span></div>' + 
		'<div id="overlay"></div>' + 
		'<div id="top-bar-back"></div>' + 
		'<div id="top-bar-fwd"></div>';
	$('#oneGoogleWrapper').prepend(extras);
	
	// copy gear menu to inside google bar
	$(window).resize(moveGear);
	moveGear();
	
	// override target="_blank" on user switching
	$('#gbd4').on('click', 'a', function() {
		if ($(this).attr('href').startsWith('/music/listen')) {
			$(this).removeAttr('target');
		}
		return true;
	});
	
	// burger and overlay click event
	$('#burger, #overlay').click(function() {
		if ($('#nav-content-container').hasClass('show-menu')) {
			$('#nav-content-container, #oneGoogleWrapper').removeClass('show-menu');
		} else {
			$('#nav-content-container, #oneGoogleWrapper').addClass('show-menu');
		}
	});
	
	// history navigation
	$('#top-bar-back').click(function() {
		window.history.back();
	});
	$('#top-bar-fwd').click(function() {
		window.history.forward();
	});
	
	// collapse nav if these are clicked
	$('#nav_collections, #auto-playlists, #playlists').on('click', 'li', function(e) {
		if (!$(e.target).hasClass('playlistDropDown')) {
			$('#burger').click();
		}
	});
	
});
