$(function () {
	$('[data-toggle="tooltip"]').tooltip();	
	
	var marginTop = function () {
		$('main').each(function () {
			var header = $('header').height();
			// var main = $('main').height();
			$(this).css({
				'top': header,
				// overflow: 'hidden'
			})
			// if (bannerHeight < innerHeight) {
			// 	$(this).css({
			// 		'height': 'auto',
			// 		'padding-top': '20px',
			// 		'padding-bottom': '20px',
			// 	})
			// } else (
			// 	$(this).css({
			// 		'margin-top': bannerHeight,
			// 		// overflow: 'hidden'
			// 	})
			// )
		})
	}
	
	$(window).on("load", marginTop)
	$(window).on("resize", marginTop)
});
