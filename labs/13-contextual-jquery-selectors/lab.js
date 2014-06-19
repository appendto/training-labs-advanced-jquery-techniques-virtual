(function ( $, lesson ){

lesson.contextualjQuerySelectors = {

	exercise_1: function () {
		// -- DO NOT EDIT --
		var actionMarkup = "<div class='actions'><span class='favorite'>Favorite</span><span class='retweet'>Retweet</span><span class='reply'>Reply</span></div>";
		// -- /DO NOT EDIT --

		// Delegate a "mouseenter" event for the tweets, but delegate it to the closest
		// parent possible to avoid performance issues.
		//
		// In the event callback:
		//   1. Determine if an element with the class "actions" already
		//      exists in the current tweet – if it does, return immediately
		//   2. If it does not, append the `actionMarkup` to the .content element
		//      in the current tweet

		
	},

	exercise_2: function () {
		// Delegate a handler for all clicks on the ".reply" links.
		// In the callback:
		//   1. contextually find the username for the current tweet
		//   2. set the value of the textarea to "@" + username
		//   3. Trigger focus to the textarea
		//
		// Note: By contextually, use traversal methods to find the username in the current tweet

		
	},

	exercise_3: function () {
		// Delegate a click handler for a complicated selector that matches
		// all anchor elements that link out to Twitter.
		//
		// In the event callback:
		//   1. Add a message to the notification element that says
		//      "Trust me, you don't really want to do that..."
		//   2. Prevent the default behavior of the event

		
	}
};

}( jQuery, window.lesson = window.lesson || {} ));
