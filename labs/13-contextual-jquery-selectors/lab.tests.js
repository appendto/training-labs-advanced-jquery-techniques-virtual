module( "Contextual jQuery Selectors", {
	setup: function() {

	},
	teardown: function() {

	}
});

test( "Exercise 1", function() {
	var $lastTweet = $( "#tweets .tweet:last" );

	ok( $lastTweet.find( ".actions" ).length === 0, "There are no actions setup initially" );

	lesson.contextualjQuerySelectors.exercise_1();

	$lastTweet.trigger( "mouseenter" );

	ok( $lastTweet.find( ".actions" ).length === 1, "The actions where added after mouseenter" );
});

test( "Exercise 2", function() {
	var $textarea = $( "#compose textarea" ),
		$lastTweet = $( "#tweets .tweet:last" ),
		userName = $lastTweet.find( ".user-name" ).text();

	equals( $textarea.val(), "", "The textarea is initially empty" );

	lesson.contextualjQuerySelectors.exercise_1();
	lesson.contextualjQuerySelectors.exercise_2();

	$lastTweet.trigger( "mouseenter" );
	$lastTweet.find( ".reply" ).trigger( "click" );

	equals( $.trim( $textarea.val() ), "@" + userName, "The textarea is ready to reply to that username" );
});

test( "Exercise 3", function() {
	var $firstTweet = $( "#tweets .tweet:first" );

	$firstTweet.find( ".text" ).html( "This is a bogus tweet <a href='http://twitter.com/appendto'>appendto</a>" );
	lesson.contextualjQuerySelectors.exercise_3();
	$firstTweet.find( "a[href*=twitter]" ).trigger( "click" );

	equals( $( "#notification" ).html(), "Trust me, you don't really want to do that...", "The notification has been updated" );
});