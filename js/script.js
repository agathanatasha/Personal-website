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
	/*accordion*/
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].addEventListener("click", function() {
	        /* Toggle between adding and removing the "active" class,
	        to highlight the button that controls the panel */
	        this.classList.toggle("active");

	        /* Toggle between hiding and showing the active panel */
	        var panel = this.nextElementSibling;
	        if (panel.style.maxHeight){
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
	    });
	}
});