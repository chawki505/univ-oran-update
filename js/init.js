(function($) {
	$(function() {

		$('.button-collapse').sideNav();

		$('.parallax').parallax();

		$('.slider').slider();

		$('.carousel.carousel-slider').carousel({
			fullWidth: true
		});

		//la bare de recherche annimation d'apparition
		$(".search").click(function() {
			if ($(this).text() == "search") {
				$(this).text("close")
			} else {
				$(this).text("search")
			}
			$(".grey").slideToggle(255)
		})

		//annimation dropdown du nav
		$('.dropdown-button').dropdown({
			inDuration: 300,
			outDuration: 225,
			constrainWidth: true, // Does not change width of dropdown to that of the activator
			hover: true, // Activate on hover
			gutter: 0, // Spacing from edge
			belowOrigin: false, // Displays dropdown below the button
			alignment: 'left', // Displays dropdown with edge aligned to the left of button
			stopPropagation: false // Stops event propagation
		});



		$('.collapsible').collapsible();

		$('.modal').modal({
		      dismissible: true, // Modal can be dismissed by clicking outside of the modal
		      opacity: .5, // Opacity of modal background
		      inDuration: 300, // Transition in duration
		      outDuration: 200, // Transition out duration
		      startingTop: '10%', // Starting top style attribute
		      endingTop: '10%', // Ending top style attribute
		    }
		  );


	}); // end of document ready
})(jQuery); // end of jQuery name space
