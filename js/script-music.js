$(document).ready(function() {
	
	$('#gbq1').on('click', 'a.gb_la', function(e) {
		if ($('body').width() < 940) {
			e.preventDefault();
			$('#doc').toggleClass('menu-open');
		}
	});
	
	$('body').on('click', '#doc.menu-open', function() {
		$(this).removeClass('menu-open');
	});
	
	$('#nav_collections, #auto-playlists, #playlists').on('click', 'li', function(e) {
		if (!$(e.target).hasClass('playlistDropDown')) {
			$('#doc').removeClass('menu-open');
		}
	});
	
});