$(document).ready(function() {

	console.log('im ok');

	$('.js-blogs').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "carousel",
			// carouselVertical: true,
			autoHeight: "container",
			timeout:  0,
			carouselVisible: 1,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "blog__slide",
			allowWrap: "true",
			carouselFluid: "true",
			slides: $('.blog__slide', p),
			prev:   $('.blog__prev', p),
			next:   $('.blog__next', p),
		});

	});

	$('.js-partners').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "scrollHorz",
			timeout:  0,
			log: false,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "partners__slide",
			slides: $('.partners__slide', p),
			pager: ".partners__pager",
			pagerTemplate: "<span>•</span>"
		});

	});

});