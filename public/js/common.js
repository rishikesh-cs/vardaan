/*
 * Author: ArtStyles (ArtTemplate)
 * Template Name: ARCDECO
 * Version: 1.0.3
*/

$(document).ready(function() {

    'use strict';

    /*-----------------------------------------------------------------
      01. Detect device mobile
    -------------------------------------------------------------------*/
	
    var isMobile = false; 
    if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    }
    else {
        $('html').addClass('no-touch');
        isMobile = false;
    }
    
	var isMacLike = /(Mac)/i.test(navigator.platform);
	
    /*-----------------------------------------------------------------
      02. Loaded
    -------------------------------------------------------------------*/
    
    anime({
        targets: 'body',
        opacity: 1,
        delay: 900,
        complete: function(anim) {
            tween(); //Init animations
		    sliders(); //Init main slider
		    jarallax(); //Init parallax images
        }
    });
    
    $('body, .js-img-load').imagesLoaded({ background: !0 }).always( function( instance ) {
	    preloader(); //Init preloader
    });

    
    // function preloader() {
    //     var tl = anime.timeline({
    //         complete: function(anim) {
    //             $('body').removeClass('no-scroll');
    //         }    
    //     });
           
    //     tl
    //     .add({
    //         targets: 'body',
    //         duration: 1,
    //         update: function() {
    //             //$('body').addClass('no-scroll');
    //         }
    //     })
    //     .add({
    //         targets: '.preloader',
    //         duration: 1,
    //         //translateX: 0,
    //         opacity: 1
    //     })
    //     .add({
    //         targets: '.preloader__logo',
    //         duration: 1200,
    //         webkitFilter: 'blur(0)',
    //         scale: 1,
    //         opacity: 1,
    //         easing: 'easeInOutQuart'
    //     })
    //     .add({
    //         targets: '.preloader__progress span',
    //         duration: 1000,
    //         width: '100%',
	// 		easing: 'easeInOutQuart'
    //     },'-=500')
    //     .add({
    //         targets: '.preloader',
	// 		delay: 1,
    //         opacity: 0,
    //         //translateX: '100%',
    //         //skewX: 15,
	// 		//transformOrigin: 'top left',
	// 		zIndex: '-1',
    //         easing: 'easeInOutQuart'
	// 	})
    //     .add({
    //         targets: '.preloader__wrap',
    //         duration: 1000,
    //         translateY: '30px',
    //         opacity: 0,
    //         easing: 'easeInOutQuart'
    //     },'-=1500');
    // };
 
    /*-----------------------------------------------------------------
      03. Smooth scroll
    -------------------------------------------------------------------*/
	
	function inertiaScroll() {
	    luxy.init({
		    wrapper: '.js-scroll',
		    targets : '.js-parallax',
		    wrapperSpeed: 0.08,
		    targetSpeed: 0.1,
		    targetPercentage: 0.1
	    });
	};
	
    if (!isMobile) {
        //inertiaScroll(); //Init
    }

    /*-----------------------------------------------------------------
      04. Hamburger
    -------------------------------------------------------------------*/

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
	    $('body').toggleClass('open');
    });

    // Closing the menu by Esc
    $(document).on('keyup', function(e) {
        if (e.keyCode === 27) $('.open .hamburger').click();
    });

    /*-----------------------------------------------------------------
	  Collapse nav mobile
	-------------------------------------------------------------------*/

	$('.nav-2 li a[href="#"]').on('click',function(){
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').children('ul').slideToggle(400);
		return false;
	});
	
	
    /*-----------------------------------------------------------------
      05. Overlay Nav
    -------------------------------------------------------------------*/

    var navOverlay = $('.hamburger');

    $('.nav-overlay').each(function(i) {
        var navTl = anime.timeline({autoplay: false});
        navTl
        .add({ 
            targets: '.nav-overlay',
            translateY: 0,
            duration: 1,
            zIndex: ['-1', '999'],
            autoplay: false
         })
        .add({
            targets: '.nav-overlay__bg',
            duration: 900,
            scaleY: [0, 1],
            skewY: ['-5', '0'],
            transformOrigin: '0% 0%',
            easing: 'easeInOutCirc'
        })
        .add({
            targets: '.nav-overlay__menu-item',
            duration: 400,
            opacity: [0, 1],
            delay: anime.stagger(80),
            translateY: ['-30', '0'],
            easing: 'easeInOutCirc'
        },'-=500');

        $(navOverlay).on('click', function(e) {
            e.preventDefault();
            if (navTl.began) {
                navTl.reverse()
                navTl.completed = false;
            }
            if (navTl.paused) {
                navTl.play()
            }
        });
    });

    /*-----------------------------------------------------------------
      06. Side Nav
    -------------------------------------------------------------------*/

    var sideNavOpen = $('.hamburger');
    
    $('.sideNav').each(function(i) {
        var sideNavTl = anime.timeline({autoplay: false});
        anime.set('.sideNav', {
            translateX: '100%'
        });
        anime.set('.sideNav .sideNav__item.el', {
            translateX: '70'
        });
        sideNavTl
        .add({
            targets: '.overlay-sideNav',
            opacity: {
                value: 1,
                duration: 500,
                delay: 0
            }, 
            zIndex: {
                value: 2,
                duration: 1,
                delay: 0
            }
        })
        .add({
            targets: '.sideNav',
            translateX: '0',
            duration: 500,
            easing: 'easeInOutQuart'
        },'-=500')
        .add({
            targets: '.sideNav__item.el',
            duration: 200,
            delay: anime.stagger(80),
            translateX: 0,
            easing: 'easeInOutCirc'
        },'-=500');

        $(sideNavOpen).on('click', function(e) {
            e.preventDefault();
            if (sideNavTl.began) {
                sideNavTl.reverse()
                sideNavTl.completed = false;
            }
            if (sideNavTl.paused) {
                sideNavTl.play()
            }
        });
    });

    // Sub items
    $('.sideNav-collapsed').on('click', function() {
        $(this).toggleClass('sideNav__item-open').parent('li').siblings('li').children('span.sideNav-collapsed').removeClass('sideNav__item-open');
        $(this).parent().toggleClass('sideNav__item-open').children('ul').slideToggle(500).end().siblings('.sideNav__item-open').removeClass('sideNav__item-open').children('ul').slideUp(500);
    });

    /*-----------------------------------------------------------------
      07. Cursor
    -------------------------------------------------------------------*/
    
    // var cursor = {
    //     delay: 8,
    //     _x: 0,
    //     _y: 0,
    //     endX: (window.innerWidth / 2),
    //     endY: (window.innerHeight / 2),
    //     cursorVisible: true,
    //     cursorEnlarged: false,
    //     $cursor: document.querySelector('.cursor'),
    //     $node: document.querySelector('.node'),
		
    //     init: function() {
	// 		$('body').css('cursor', 'none');
			
    //         // Set up element sizes
    //         this.cursorSize = this.$cursor.offsetWidth;
    //         this.nodeSize = this.$node.offsetWidth;
        
    //         this.setupEventListeners();
    //         this.animateDotOutline();
	// 		this.cursorDrag();
    //     },
    
    //     setupEventListeners: function() {
    //         var self = this;
        
    //         // Anchor hovering
	// 		Array.prototype.slice.call(document.querySelectorAll('a, button, .zoom-cursor')).forEach(function (el) {
    //             el.addEventListener('mouseover', function() {
    //                 self.cursorEnlarged = true;
    //                 self.toggleCursorSize();
    //             });
    //             el.addEventListener('mouseout', function() {
    //                 self.cursorEnlarged = false;
    //                 self.toggleCursorSize();
    //             });
    //         });

    //         document.addEventListener('mousemove', function(e) {
    //             // Show the cursor
    //             self.cursorVisible = true;
    //             self.toggleCursorVisibility();

    //             // Position the dot
    //             self.endX = e.clientX;
    //             self.endY = e.clientY;
    //             self.$cursor.style.top = self.endY + 'px';
    //             self.$cursor.style.left = self.endX + 'px';
    //         });
        
    //         // Hide/show cursor
    //         document.addEventListener('mouseenter', function(e) {
    //             self.cursorVisible = true;
    //             self.toggleCursorVisibility();
    //             self.$cursor.style.opacity = 1;
    //             self.$node.style.opacity = 1;
    //         });
        
    //         document.addEventListener('mouseleave', function(e) {
    //             self.cursorVisible = true;
    //             self.toggleCursorVisibility();
    //             self.$cursor.style.opacity = 0;
    //             self.$node.style.opacity = 0;
    //         });			
    //     },
    
    //     animateDotOutline: function() {
    //         var self = this;
        
    //         self._x += (self.endX - self._x) / self.delay;
    //         self._y += (self.endY - self._y) / self.delay;
    //         self.$node.style.top = self._y + 'px';
    //         self.$node.style.left = self._x + 'px';
        
    //         requestAnimationFrame(this.animateDotOutline.bind(self));
    //     },
    
    //     toggleCursorSize: function() {
    //         var self = this;
        
    //         if (self.cursorEnlarged) {
    //             self.$node.classList.add('expand');
    //         } else {
    //             self.$node.classList.remove('expand');
    //         }
    //     },
    
    //     toggleCursorVisibility: function() {
    //         var self = this;
        
    //         if (self.cursorVisible) {
    //             self.$cursor.style.opacity = 1;
    //             self.$node.style.opacity = 1;
    //         } else {
    //             self.$cursor.style.opacity = 0;
    //             self.$node.style.opacity = 0;
    //         }
    //     },
		
	// 	cursorDrag: function() {
	// 		var self = this;
	// 		$('.cursorDrag').on('mouseenter', function(){
	// 			self.$node.classList.add('drag', 'expand');
	// 		});
	// 		$('.cursorDrag').on('mouseleave', function(){
	// 			self.$node.classList.remove('drag', 'expand');
	// 		});
	// 	}
    // }

	// if (!isMobile) {
    //     cursor.init(); //Init custom cursor
	// }

    /*-----------------------------------------------------------------
      08. Magnetic
    -------------------------------------------------------------------*/

    function magnetic() {
        var magnets = document.querySelectorAll('.magnetic');
        var strength = 50;
    
        magnets.forEach(function (magnet) {
            magnet.addEventListener('mousemove', moveMagnetic);
            magnet.addEventListener('mouseout', function (event) {
                var animObj = anime({
                    targets: event.currentTarget,
                    translateX: 0,
                    translateY: 0,
                    duration: 1000
                });
            });
        });
    
        function moveMagnetic(event) {
            var magnetButton = event.currentTarget;
            var bounding = magnetButton.getBoundingClientRect();
            var animObj = anime({
                targets: magnetButton,
                translateX: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * strength,
                translateY: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * strength,
                duration: 1000
            });
        }
    };
    
    if (!isMobile) {
        //magnetic(); // Init magnetic effect
    }

    /*-----------------------------------------------------------------
      09. Scroll indicator
    -------------------------------------------------------------------*/
  
    function scrollIndicator() {
        $(window).on('scroll', function() {
            var wintop = $(window).scrollTop(), docheight = 
            $(document).height(), winheight = $(window).height();
 	        var scrolled = (wintop/(docheight-winheight))*100;
  	        $('.scroll-line').css('width', (scrolled + '%'));
        });
    }
	
	scrollIndicator(); //Init
	
    /*-----------------------------------------------------------------
      10. ScrollTo
    -------------------------------------------------------------------*/
	
    function scrollToTop() {
        var $backToTop = $('.back-to-top'),
            $showBackTotop = $(window).height();
			
        $backToTop.hide();

        $(window).scroll( function() {
            var windowScrollTop = $(window).scrollTop();
            if( windowScrollTop > $showBackTotop ) {
                $backToTop.fadeIn('slow');
            } else {
                $backToTop.fadeOut('slow');
            }
        });
        
		$backToTop.on('click', function (e) {
            e.preventDefault();
            $(' body, html ').animate( {scrollTop : 0}, 'slow' );
        });
    }
	
	scrollToTop(); //Init

    /*-----------------------------------------------------------------
      11. Hiding Navbar on scroll down
    -------------------------------------------------------------------*/
	
	function hidingNavbar() {
        var c, 
	        currentScrollTop = 0,
            $navbar = $('.navbar');

        $(window).scroll(function () {
            var a = $(window).scrollTop(),
                b = $navbar.height();
     
            currentScrollTop = a;
     
            if (c < currentScrollTop && a > b + b) {
                $navbar.addClass("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
                $navbar.removeClass("scrollUp");
            }
            c = currentScrollTop;
        });
    }
	
	hidingNavbar(); //Init

    /*-----------------------------------------------------------------
      12. Toggle Navbar
    -------------------------------------------------------------------*/
  
    function toggleNavbar() {
        $(window).on('scroll', function() {
	        $('.navbar-change').each(function(index, value) {
                var navToggle = $('#start').offset().top;

                if ($(window).scrollTop() >= navToggle){
                    $('.navbar').removeClass('navbar--white');
                } else {
                    $('.navbar').addClass('navbar--white');
                }
            });
        });
    }
	
	toggleNavbar(); //Init
	
    /*-----------------------------------------------------------------
      13. Slider
    -------------------------------------------------------------------*/
 
    // Main slider
    function sliders() {
        $('.slider').each(function() {
            var interleaveOffset = 0.7;

            var sliderCaption = new Swiper('.slider__caption', {
                slidesPerView: 1,
				loop: true,
				parallax: true,
                effect: 'fade',
				fadeEffect: {
                    crossFade: true
                },
                speed: 1200,
                simulateTouch: false,
				pagination: {
                    el: '.slider-pagination-fraction',
                    type: 'custom',
					progressbarOpposite: true,
		            clickable: false,
					renderCustom: function(swiper, current, total) {
                        var i = current ? current : 0;
                        return '<div>' + ('0' + i) + '</div><div>' + ('0' + total) + '</div>';
                    }
                }
            });
			
            var sliderImage = new Swiper('.slider__image', {
                slidesPerView: 1,
                loop: true,
				parallax: true,
			    speed: 1200,
                simulateTouch: false,
	            roundLengths: true,
				watchSlidesProgress: true,
                pagination: {
                    el: '.slider-pagination-progressbar',
                    type: 'progressbar',
					progressbarOpposite: true,
		            clickable: false
                },
                autoplay: {
                    disableOnInteraction: false,
					delay: 2500
                },
                keyboard: {
	                enabled: true
	            },
                mousewheel: {
		            eventsTarged: '.slider',
		            sensitivity: 1
	            },
                navigation: {
                    nextEl: '.slider-next',
                    prevEl: '.slider-prev'
                },
				breakpoints: {
					768: {
                        pagination: {
                            progressbarOpposite: false,
						}
                    }
				}, 
				on: {
                    progress: function() {
						if (!/Edge/.test(navigator.userAgent)) {
                            var swiper = this;
                            for (var i = 0; i < swiper.slides.length; i++) {
                                var slideProgress = swiper.slides[i].progress,
                                    innerOffset = swiper.width * interleaveOffset,
                                    innerTranslate = slideProgress * innerOffset;					
                                swiper.slides[i].querySelector('.cover-slider').style.transform = 'translateX(' + innerTranslate + 'px)';								
                            }
						}
                    },
                    touchStart: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },
                    setTransition: function(speed) {
						if (!/Edge/.test(navigator.userAgent)) {
                            var swiper = this;
                            for (var i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = speed + "ms";
                                swiper.slides[i].querySelector(".cover-slider").style.transition = speed + "ms";
                            }
						}
                    }
                }
            });
					
            sliderCaption.controller.control = sliderImage;
            sliderImage.controller.control = sliderCaption;
		});
	};
	
	// Portfolio carousel
	$('.carousel').each(function() {
		var carouselProject = new Swiper('.carousel-container', {
            slidesPerView: 4,
			parallax: true,
            speed: 1000,
            simulateTouch: false,
            keyboard: {
	            enabled: true
	        },
            mousewheel: {
		        eventsTarged: '.carousel',
		        sensitivity: 1
	        },
            navigation: {
                nextEl: '.slider-next',
                prevEl: '.slider-prev'
            },
			breakpoints: {
				1600: {
                    slidesPerView: 3
                },
				1024: {
                    slidesPerView: 2
                },
				768: {
                    slidesPerView: 1,
					simulateTouch: true
                }
			}
		});
	});
			
	// Project slider
	$('.project-slider').each(function() {
		var carouselProject = new Swiper('.project-slider', {
            slidesPerView: 'auto',
			centeredSlides: true,
			loop: true,
			grabCursor: true,
			//parallax: true,
            speed: 1000,
			watchSlidesProgress: true,
            pagination: {
                el: '.slider-pagination-progressbar',
                type: 'progressbar',
		        clickable: false
            }
		});
	});

    /*-----------------------------------------------------------------
      14. Style background image
    -------------------------------------------------------------------*/	
  
    $('.js-image').each(function(){
        var dataImage = $(this).attr('data-image');
        $(this).css('background-image', 'url(' + dataImage + ')');
    });
    
    /*-----------------------------------------------------------------
      15. Autoresize textarea
    -------------------------------------------------------------------*/	

    $('textarea').each(function(){
        autosize(this);
    });

    /*-----------------------------------------------------------------
      16. Switch categories & Filter mobile
    -------------------------------------------------------------------*/	
  
    $('.select').on('click','.placeholder',function(){
      var parent = $(this).closest('.select');
      if ( ! parent.hasClass('is-open')){
          parent.addClass('is-open');
          $('.select.is-open').not(parent).removeClass('is-open');
      }else{
          parent.removeClass('is-open');
      }
    }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	
	    $('.filter__item').removeClass('active');
	    $(this).addClass('active');
	    var selector = $(this).attr('data-filter');
		
	    $('.filter-container').isotope({
	        filter: selector
	    });
	    return false;	
    });

    /*-----------------------------------------------------------------
      17. Masonry
    -------------------------------------------------------------------*/
  
    // Project
    var $projectMasonry = $('.project-masonry').isotope({
        itemSelector: '.content-grid__item',
	    layoutMode: 'fitRows',
        percentPosition: true,
	    transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        fitRows: {
            gutter: '.gutter-sizer'
        },	
        masonry: {
	        columnWidth: '.content-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
        }
    });
  
    $projectMasonry.imagesLoaded().progress( function() {
        $projectMasonry.isotope ({
	        columnWidth: '.content-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true,
	        layoutMode: 'fitRows',
            fitRows: {
                gutter: '.gutter-sizer'
            }
	    });
    });
	
    // Post
    var $newsMasonry = $('.news-masonry').isotope({
        itemSelector: '.content-grid__item-two',
        percentPosition: true,
	    transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        masonry: {
	        columnWidth: '.content-grid__item-two',
            gutter: '.gutter-sizer-two',
            isAnimated: true
        }
    });
  
    $newsMasonry.imagesLoaded().progress( function() {
        $newsMasonry.isotope ({
	        columnWidth: '.content-grid__item-two',
            gutter: '.gutter-sizer-two',
            isAnimated: true 	  
	    });
    });

    /*-----------------------------------------------------------------
      18. Animations
    -------------------------------------------------------------------*/

	function tween() {
	    // init ScrollMagic
        var ctrl = new ScrollMagic.Controller(); 		

        // Tween for Filter
        $('.js-down-done').each(function(index) {
            if (!isMobile) {
                var animDown = anime({
                    targets: '.filter__item',
                    translateY: [60, 0],
                    opacity: [0, 1],
                    duration: 300,
                    delay: function(el, i) { return i * 40 },
                    easing: 'easeInOutSine'
                });
            }
        });

        // Reveal image
        $('.reveal-overlay').each(function() {
            var animReveal = anime({
                targets: this,
                translateX: ['0', '100%'],
                transformOrigin: ['0% 100%', '0% 100%'],
                skewX: [30, 0],
                scaleX: [2, 2],
                duration: 1000,
                easing: 'easeOutCirc',
                autoplay: false
            });
            new ScrollMagic.Scene({
                triggerElement: this,
	            triggerHook: 'onEnter',
                offset: 300,
                reverse: false
            })
            .setAnime(animReveal)
            .addTo(ctrl);
        });
        
        $('.reveal-box').each(function() {
            var animRevealBox = anime({
                targets: this,
                //translateY: [80, 0],
                opacity: [0, 1],
                duration: 600,
                easing: 'easeOutCirc',
                autoplay: false
            });
            new ScrollMagic.Scene({
                triggerElement: this,
	            triggerHook: 'onEnter',
                offset: 200,
                reverse: false
            })
            .setAnime(animRevealBox)
            .addTo(ctrl);
        });

        // Scale
        $('.js-scale').each(function() {
            var animScale = anime({
                targets: this,
                scale: ['1.2', '1'],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutCirc'
            });
        });

        // Split chars
        var splitChars = new SplitType('.js-words', {
            split: 'chars'
        });

        // Words animation
        $('.js-words .char').each(function(index) {
            var animWords = anime({
                targets: this,
                translateY: ['100%', '0%'],
                duration: 400,
                easing: 'easeOutCirc',
                delay: 30 + index * 30,
                autoplay: false
            });
            new ScrollMagic.Scene({
                triggerElement: this,
	            triggerHook: 'onEnter',
                reverse: false
            })
            .setAnime(animWords)
            .addTo(ctrl);
        });

        // Split lines
        var splitLines = new SplitType('.js-lines', {
            split: 'lines'
        });

        // Lines animation
        $('.js-lines .line').each(function(index) {
            var animLines = anime({
                targets: this,
                translateY: ['100%', '0%'],
                opacity: [0, 1],
                duration: 600,
                easing: 'easeOutCirc',
                delay: 100 + index * 100,
                autoplay: false
            });
            new ScrollMagic.Scene({
                triggerElement: this,
	            triggerHook: 'onEnter',
                reverse: false
            })
            .setAnime(animLines)
            .addTo(ctrl);
        });
        $('.line').wrap('<div></div>');
		
        // Show scroll
        $('.js-scroll-show').each(function(index) {
            var animScrollShow = anime({
                targets: this,
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: 60 + index * 30,
                easing: 'easeOutCirc',
                autoplay: false
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 'onEnter',
                reverse: false
            })
            .setAnime(animScrollShow)
            .addTo(ctrl);
        });
        
        // Show scroll
        $('.js-scroll-show-o .content-grid__link').each(function(index) {
            if (!isMobile) {
                var animScrollShow = anime({
                    targets: this,
                    translateY: [60, 0],
                    opacity: [0, 1],
                    duration: 500,
                    delay: 100 + index * 100,
                    easing: 'easeOutCirc',
                    autoplay: false
                });
                new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 'onEnter',
                    reverse: false
                })
                .setAnime(animScrollShow)
                .addTo(ctrl);
            }
        });

        // Hide scroll
        $('.js-scroll-hide').each(function(index) {
            var animScrollHiden = anime({
                targets: this,
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: 100 + index * 100,
                easing: 'easeOutCirc',
                autoplay: false
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 'onLeave',
                duration: 300,
                reverse: false
            })
            .setAnime(animScrollHiden)
            .addTo(ctrl);
        });
			
        // List
        $('.list-row').each(function(index) {
            var listRow = anime({
                targets: '.js-list',
                translateX: ['-100%', 0],
                opacity: [0, 1],
                duration: 1200,
                delay: function(el, i) { return i * 60 },
                easing: 'easeOutExpo',
                autoplay: false
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 'onEnter',
                reverse: false
            })
            .setAnime(listRow)
            .addTo(ctrl);
        });

	};
	
	// Init effect zooming item grid
	function zoomingItem() {
        $('.js-zooming').on('mouseenter', function(){
            $(this).addClass('has-hovered');
            $(this).removeClass('not-hovered');
        });
        $('.js-zooming').on('mouseleave', function(){
            $(this).removeClass('has-hovered');
            $(this).addClass('not-hovered');
        });
	};
	
	if (!isMobile) {
	    zoomingItem(); // Init
	};	
	
    /*-----------------------------------------------------------------
      19. Start video
    -------------------------------------------------------------------*/
  
    function videoPlay($wrapper) {
        var $iframe = $wrapper.find('.js-video-iframe'),
        src = $iframe.data('src');
        $wrapper.addClass('is-active'),
	    $iframe.attr('src', src)
    }
    $(document).on('click', '.video__btn', function(e) {
        e.preventDefault();
        var $btn = $(this),
        $wrapper = $btn.closest('.js-video');
        $btn.addClass('is-active'), videoPlay($wrapper)
    });
	
    /*-----------------------------------------------------------------
      20. Jarallax
    -------------------------------------------------------------------*/		

    function jarallax() {
        $('.jarallax').jarallax({
            speed: .8,
			disableParallax: /iPhone|iPod|Android/
        });

        $('.jarallax-keep-img').jarallax({
            speed: .8,
            keepImg: true,
			disableParallax: /iPhone|iPod|Android/
        });

        $('.jarallaxVideo').jarallax({
			speed: .8,
            disableVideo: /iPhone|iPod|Android/
        });
    };
	
    /*-----------------------------------------------------------------
      21. Parallax mouse
    -------------------------------------------------------------------*/

    var timeout;
    $('.parallax-container').mousemove(function(e){
        if(timeout) clearTimeout(timeout);
        setTimeout(callParallax.bind(null, e), 200);
  
    });

    function callParallax(e){
        parallaxIt(e, '.error-page', -30);
    }

    function parallaxIt(e, target, movement){
		if (!isMobile) {
            var $this = $('.parallax-container'),
                relX = e.pageX - $this.offset().left,
                relY = e.pageY - $this.offset().top;
            
            var animMove = anime({
                targets: target,
                translateX: (relX - $this.width()/2) / $this.width() * movement,
                translateY: (relY - $this.height()/2) / $this.height() * movement,
                duration: 1000,
                easing: 'easeOutCirc'
            });
		}
    }

    /*-----------------------------------------------------------------
	  22. mediumZoom
    -------------------------------------------------------------------*/
  
    mediumZoom($('[data-zoomable]').toArray())
	
    /*-----------------------------------------------------------------
      23. Lazyload
    -------------------------------------------------------------------*/

    lazySizes.init();

    /*-----------------------------------------------------------------
      24. Polyfill object-fit
    -------------------------------------------------------------------*/	
	
    var $someImages = $('img.cover');
    objectFitImages($someImages);

    /*-----------------------------------------------------------------
      25. Video background
    -------------------------------------------------------------------*/	
	
	$('#js-video-bg').each(function() {
	    setTimeout(function(){
            document.getElementById('js-video-bg').play();
        }, 2500);
    });
	
    /*-----------------------------------------------------------------
      26. Contacts form
    -------------------------------------------------------------------*/

    $("#contact-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formError();
            submitMSG(false, "Please fill in the form...");
        } else {
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm(){
        var name = $("#nameContact").val(),
            email = $("#emailContact").val(),
            message = $("#messageContact").val();
			
        var url = "assets/php/form-contact.php";
		
        $.ajax({
            type: "POST",
            url: url,
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contact-form")[0].reset();
        submitMSG(true, "Thanks! Your message has been sent.");
    }
  
    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }  
  
    function submitMSG(valid, msg){
		var msgClasses;
        if(valid){
            msgClasses = "validation-success";
        } else {
           msgClasses = "validation-danger";
        }
        $("#validator-contact").removeClass().addClass(msgClasses).text(msg);
    }
});