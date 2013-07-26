var MUSIC_WINDOW_ID = 0;

chrome.browserAction.onClicked.addListener(function() {

	if (MUSIC_WINDOW_ID == 0) {
		
		chrome.windows.create({
			url: 'https://play.google.com/music/',
			type: 'panel',
			focused: true,
			width: 425
		}, function(window) {
			MUSIC_WINDOW_ID = window.id;
		});
		
	} else {
		chrome.windows.update(MUSIC_WINDOW_ID, { focused: true });
	}

});

chrome.windows.onRemoved.addListener(function(windowId) {
	if (windowId == MUSIC_WINDOW_ID) {
		MUSIC_WINDOW_ID = 0;
	}
});

var id = '';
var options = {
	type: 'basic',
	title: 'title',
	message: 'message',
	iconUrl: '/img/icon_16.png'
};
chrome.notifications.create(id, options, function(notificationId) {
	console.log(notificationId);
});

// handle message passing
chrome.extension.onRequest.addListener(function(request, sender) {
	chrome.tabs.update(sender.tab.id, {url: request.redirect});
});
