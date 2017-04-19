$(document).ready(function () {
	
	/* Underline text in nav-box when hover */
	$('.nav-box').hover(
		function () { $(this).css("background-color", "#333333")},
		function () { $(this).css("background-color", "#666666")}
	);


	/* only for desktop */
	var isMobile = window.matchMedia("only handheld and (max-width: 700px)")
	if (!isMobile.matches) {

		

		/* sticky nav bar */
		if ($(".nav").scrollTop > 147) {
			$(this).addClass("nav-fixed")
		} else {
			$(this).removeClass("nav-fixed")
		}
	};
	
});