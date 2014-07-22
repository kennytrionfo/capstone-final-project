/*----------------------------------------------------------------------------------
    Prodigy Configuration Script - Reva HTML5 Template
------------------------------------------------------------------------------------

    --> Javascript main configuration handle plugin
        1. Animated Content
        2. Responsive Tab
        3. Menu Trigger
        4. Fancybox
        5. Progress bar and donut chart
        6. Retina Image
        7. Seacrh Expanding
        8. Parallax Background
        9. Menu Expanding
        10. Touch

    --> Javascript handle plugin
        - Number counter
        - Media element
        - Map
        - Grayscale Image
        - Content Carousel
        - Client logo
        - Testimonial Carousel
        - Isotope

------------------------------------------------------------------------------------
    file --> prodigy.js
    http://prodigystudio.net
    Prodigy Studio. Copyright © 2014. All Rights Reserved.
------------------------------------------------------------------------------------*/

var Prodigy = function () {

    // get window screen
    widthScreen = $(window).width();

    /*------------------------------------------------------------------------------*/
    /*  1. Animated Content
     *------------------------------------------------------------------------------*/
    var animatedContentHandle = function () {
        // function to check is user is on touch device
        if (!is_touch_device()) {

            if ($(".animated")[0]) {
                jQuery('.animated').css('opacity', '0');
            }

            $('.triggerAnimation').waypoint(function() {
                var animation = $(this).attr('data-animate');

                $(this).css('opacity', '');
                $(this).addClass("animated " + animation);

            }, {
                offset: '80%',
                triggerOnce: true
            });
        }

        // function to check is user is on touch device
        function is_touch_device() {
            return 'ontouchstart' in window || 'onmsgesturechange' in window; // works on ie10
        }
    };

    /*------------------------------------------------------------------------------*/
    /*  2. Responsive Tab
     *------------------------------------------------------------------------------*/
    var responsiveTabHandle = function () {
        $('#horizontalTab-Top').easyResponsiveTabs({
            type: 'default',
            width: 'auto',
            fit: true
        });

        $('#horizontalTab-Bottom').easyResponsiveTabs({
            type: 'horizontal-bottom',
            width: 'auto',
            fit: true
        });

        $('#verticalTab-Left').easyResponsiveTabs({
            type: 'vertical-left',
            width: 'auto',
            fit: true
        });

        $('#verticalTab-Right').easyResponsiveTabs({
            type: 'vertical-right',
            width: 'auto',
            fit: true
        });
    };

    /*------------------------------------------------------------------------------*/
    /*  3. Menu Trigger
     *------------------------------------------------------------------------------*/
    var menuTriggerHandle = function () {
        var menu = $(".header");
        var searchForm = $("#form-search");

        $('#content-wrapper').waypoint(function(direction) {
            if ( widthScreen > 960 ) {
                // sticky menu show
                if (direction == 'down') {
                    menu.fadeIn(0,function () {
                        menu.sticky({topSpacing:0});
                        menu.addClass('stuck');
                        unexpandSearch();

                        $('.nav').show();
                        $("#logo img").attr('src','assets/logo_sticky.png').attr('alt','logo').addClass('retina');
                        $('img.retina').retina('@2x');
                    });
                }

                // sticky menu hide
                if (direction == 'up') {
                    menu.fadeOut(function() {
                        menu.sticky({topSpacing:0}).hide();
                        menu.fadeIn(0, function() {
                            menu.removeClass('stuck');
                            unexpandSearch();

                            // show menu in first condition
                            $(".nav").show();
                            $("#logo img").attr('src','assets/logo.png').attr('alt','logo').addClass('retina');
                            $('img.retina').retina('@2x');
                        });
                    });
                }
            }
        }, { offset: '20%' });


        function unexpandSearch() {
            if (searchForm.hasClass('form-search-open')) {
                $("#form-search").removeClass('form-search-open');
            };
        }

        $(".search-icon").click(function() {
            $(".nav").hide();
        });

        if (!jQuery().scrollUp) {
            return;
        }

        $.scrollUp({
           scrollText: '<i class="icon-chevron-up"/>',
           scrollSpeed: 450
        });
    };

    /*------------------------------------------------------------------------------*/
    /*  4. Fancybox
     *------------------------------------------------------------------------------*/
    var fancyboxHandle = function () {
        $(".fancybox").fancybox({
            padding:0,
            openEffect:'elastic',
            openSpeed:250,
            closeEffect:'elastic',
            closeSpeed:250,
            closeClick:false,
            helpers:{
                title: { type:'outside'},
                overlay:{ css:{'background':'rgba(0,0,0,0.85)'}},
                media:{}
            }
        });
    };

    /*------------------------------------------------------------------------------*/
    /*  5. Progress bar and donut chart
     *------------------------------------------------------------------------------*/
    var progressBarDonutChartHandle = function () {
        function progress(percent, element) {
            var progressBarWidth = percent * element.width() / 100;
            element.find('div').animate({ width: progressBarWidth }, 2000).html("<div class='progress-meter'>"+percent+"%&nbsp;</div>");
        }

        $('#progress-trigger').waypoint(function() {
            $('.progress-bar').each(function() {
                var bar = $(this);
                var percentage = $(this).attr('data-percent');

                progress(percentage, bar);
            });
        }, { offset: '80%' , triggerOnce: true });

        $('.circular-trigger').waypoint(function () {
            $(".circular-bar").donutchart({'size': 150});
            $(".circular-bar").donutchart("animate");

            $(".circular-bar-green").donutchart({'size': 150, 'fgColor': '#59ba47' });
            $(".circular-bar-green").donutchart("animate");

            $(".circular-bar-blue").donutchart({'size': 150, 'fgColor': '#3498db' });
            $(".circular-bar-blue").donutchart("animate");

            $(".circular-bar-yellow").donutchart({'size': 150, 'fgColor': '#f1c40f' });
            $(".circular-bar-yellow").donutchart("animate");

            $(".circular-bar-red").donutchart({'size': 150, 'fgColor': '#ed4f4f' });
            $(".circular-bar-red").donutchart("animate");
        }, { offset: '80%', triggerOnce: true });
    };

    /*------------------------------------------------------------------------------*/
    /*  6. Image retina
     *------------------------------------------------------------------------------*/
    var retinaImageHandle = function () {
        if (!jQuery().retina) {
            return;
        }

        $('img.retina').retina('@2x');
    };

    /*------------------------------------------------------------------------------*/
    /*  7. Seacrh Expanding
     *------------------------------------------------------------------------------*/
    var seacrhExpandHandle = function () {
        new UISearch(document.getElementById( 'form-search' ));
    };

    /*------------------------------------------------------------------------------*/
    /*  8. Parallax Background
     *------------------------------------------------------------------------------*/
    var parallaxbgHandle = function() {

        if ( widthScreen > 959 ) {
            // index-layout2.html
            $('.content-parallax1').parallax("30%", 0.1);

            // Page title
            $('#pagetitle-wrapper').parallax("20%",0.1);

            // About parallax
            $('#about-parallax').parallax("25%", 0.1);

            // service-layout2.html
            $(".content-parallax2").parallax("30%", 0.1);
        }
    };

    /*------------------------------------------------------------------------------*/
    /*  9. Menu Expanding
     *------------------------------------------------------------------------------*/
    var menuHandle = function () {
        var ww = document.body.clientWidth;
        var menuLevel3 = $(".nav ul ul ul");

        $(document).ready(function() {
            $(".nav li a").each(function() {
                if ($(this).next().length > 0) {
                    $(this).addClass("parent");
                };
            });

            $(".toggleMenu").click(function(e) {
                e.preventDefault();
                $(this).toggleClass("active");
                // expanding nav menu
                $('ul.nav').css({
                  'width': $('ul.nav').width(),
                  'height': $('ul.nav').height()
                });

                $('.nav').animate({'width': 'toggle'});
            });
            adjustMenu();
        });

        $(window).bind('resize orientationchange', function() {
            ww = document.body.clientWidth;
            adjustMenu();
        });

        var adjustMenu = function() {
            if ( ww < 960 ) {
                $(".toggleMenu").css("display", "inline-block");
                $('.nav').hide();
                menuLevel3.hide();

                if (!$(".toggleMenu").hasClass("active")) {
                    $(".nav").hide();
                } else {
                    $(".nav").show();
                }

                $(".nav li").unbind('mouseenter mouseleave');
                $(".nav li a.parent").unbind('click').bind('click', function(e) {
                    // must be attached to anchor element to prevent bubbling
                    e.preventDefault();
                    $(this).parent("li").toggleClass("hover");

                    $(".nav ul ul li.dropdown").unbind('click').bind('click', function(e) {
                        menuLevel3.toggle();
                    });
                });
            }

            else if (ww >= 960) {
                $(".toggleMenu").css("display", "block");
                // show menu in first condition
                $(".nav").show();
                $(".nav li").removeClass("hover");
                $(".nav li a").unbind('click');
                $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
                    // must be attached to li so that mouseleave is not triggered when hover over submenu
                    $(this).toggleClass('hover');

                    $(".nav ul ul li.dropdown").hover(function () {
                        menuLevel3.show();
                    }, function () {
                        menuLevel3.hide();
                    });
                });
            }
        }

    };

    /*------------------------------------------------------------------------------*/
    /*  10. Touch
     *------------------------------------------------------------------------------*/
    var touchHandle = function () {

        if (Modernizr.touch){

            // classie.js https://github.com/desandro/classie/blob/master/classie.js
            // class helper functions from bonzo https://github.com/ded/bonzo

            function classReg( className ) {
                return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
            }

            // classList support for class management
            // altho to be fair, the api sucks because it won't accept multiple classes at once
            var hasClass, addClass, removeClass;

            if ( 'classList' in document.documentElement ) {
                hasClass = function( elem, c ) {
                    return elem.classList.contains( c );
                };
                addClass = function( elem, c ) {
                    elem.classList.add( c );
                };
                removeClass = function( elem, c ) {
                    elem.classList.remove( c );
                };
            }
            else {
                hasClass = function( elem, c ) {
                    return classReg( c ).test( elem.className );
                };
                addClass = function( elem, c ) {
                    if ( !hasClass( elem, c ) ) {
                            elem.className = elem.className + ' ' + c;
                    }
                };
                removeClass = function( elem, c ) {
                    elem.className = elem.className.replace( classReg( c ), ' ' );
                };
            }

            function toggleClass( elem, c ) {
                var fn = hasClass( elem, c ) ? removeClass : addClass;
                fn( elem, c );
            }

            var classie = {
                // full names
                hasClass: hasClass,
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                // short names
                has: hasClass,
                add: addClass,
                remove: removeClass,
                toggle: toggleClass
            };

            // transport
            if ( typeof define === 'function' && define.amd ) {
                // AMD
                define( classie );
            } else {
                // browser global
                window.classie = classie;
            }

            [].slice.call( document.querySelectorAll( '.cs-style-1 > figure' ) ).forEach( function( el, i ) {
                console.log('touched')
                el.querySelector( 'figcaption > a' ).addEventListener( 'touchstart', function(e) {
                    e.stopPropagation();
                }, false );
                el.addEventListener( 'touchstart', function(e) {
                    classie.toggle( this, 'cs-hover' );
                }, false );
            });

            // disable tooltip on touch device
            if ($('.has-tip').length) {
                var $target = $('.has-tip');
                var attrs = $target[0].attributes;
                var name, index;

                for (index = attrs.length - 1; index >= 0; --index) {
                    name = attrs[index].nodeName;

                    $target.removeAttr("title");
                    if (name.substring(0, 5) === "data-") {
                        $target.removeAttr(name);
                    }
                }
            }

            // menu touch friendly
            /*
                By Osvaldas Valutis, www.osvaldas.info
                Available for use under the MIT License
            */

            ;(function( $, window, document, undefined ) {
                $.fn.doubleTapToGo = function( params )
                {
                    if( !( 'ontouchstart' in window ) &&
                        !navigator.msMaxTouchPoints &&
                        !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

                        this.each( function()
                        {
                            var curItem = false;

                            $( this ).on( 'click', function( e )
                            {
                                var item = $( this );
                                if( item[ 0 ] != curItem[ 0 ] )
                                {
                                    e.preventDefault();
                                    curItem = item;
                                }
                            });

                            $( document ).on( 'click touchstart MSPointerDown', function( e )
                            {
                                var resetItem = true,
                                parents   = $( e.target ).parents();

                                for( var i = 0; i < parents.length; i++ )
                                    if( parents[ i ] == curItem[ 0 ] )
                                        resetItem = false;

                                    if( resetItem )
                                        curItem = false;
                                });
                        });
                    return this;
                };
            })( jQuery, window, document );

            $('.nav li:has(ul)').doubleTapToGo();
        }
    };

    return {

        // main function
        init: function () {
            animatedContentHandle();
            menuTriggerHandle();
            responsiveTabHandle();
            fancyboxHandle();
            progressBarDonutChartHandle();
            retinaImageHandle();
            seacrhExpandHandle();
            menuHandle();
            parallaxbgHandle();
            touchHandle();
        },

    /*------------------------------------------------------------------------------*/
    /*  -- Conditional Handle Script --
     *------------------------------------------------------------------------------*/

        /*--------------------------------------------------------------------------*/
        /*  Number counter
         *--------------------------------------------------------------------------*/
        numberCounterHandle: function () {
            $('#count-number').waypoint(function() {
                // custom formatting numbers
                $('.numbers').data('countToOptions', {
                    formatter: function (value, options) {
                        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    }
                });

                // start all the timers
                $('.timer').each(count);

                function count(options) {
                    var $this = $(this);
                    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                    $this.countTo(options);
                }

            }, { offset: '60%' , triggerOnce: true });
        },

        /*--------------------------------------------------------------------------*/
        /*  Media element
         *--------------------------------------------------------------------------*/
        mediaElementHandle: function () {
            if (!jQuery().mediaelementplayer) {
                return;
            }
            $('audio,video').mediaelementplayer();
        },

        /*--------------------------------------------------------------------------*/
        /*  Map
         *--------------------------------------------------------------------------*/
        mapHandle: function () {
            var map = new GMaps({
                el: '#map',
                scrollwheel: false,
                lat: 52.52315,
                lng: 13.40696,
                zoom: 17,
                zoomControl : true,
                zoomControlOpt: {
                    style : 'SMALL',
                    position: 'TOP_LEFT'
                },
                panControl : false,
                streetViewControl : false,
                mapTypeControl: false,
                overviewMapControl: false
            });

            var styles = [
            {
                stylers: [
                { hue: "#95a5a6" },
                { saturation: -100 }
                ]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                { visibility: "off" }
                ]
            }
            ];

            map.addStyle({
                styledMapName:"Styled Map",
                styles: styles,
                mapTypeId: "map_style"
            });

            map.setStyle("map_style");
        },

        /* Map2 */
        mapHandle2: function () {
            var map = new GMaps({
                el: '#map2',
                scrollwheel: false,
                lat: 52.52398,
                lng: 13.40540,
                zoom: 17,
                zoomControl : true,
                zoomControlOpt: {
                    style : 'SMALL',
                    position: 'TOP_LEFT'
                },
                panControl : false,
                streetViewControl : false,
                mapTypeControl: false,
                overviewMapControl: false
            });

            map.addMarker({
                  lat: 52.52398,
                  lng: 13.40540,
                  icon: "assets/map-marker.png"
                });

            var styles = [
            {
                stylers: [
                { hue: "#95a5a6" },
                { saturation: -100 }
                ]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                { visibility: "off" }
                ]
            }
            ];

            map.addStyle({
                styledMapName:"Styled Map",
                styles: styles,
                mapTypeId: "map_style"
            });

            map.setStyle("map_style");
        },

        /* Map3 */
        mapHandle3: function () {
            var map = new GMaps({
                el: '#map3',
                scrollwheel: false,
                lat: 52.52398,
                lng: 13.40540,
                zoom: 17,
                zoomControl : true,
                zoomControlOpt: {
                    style : 'SMALL',
                    position: 'TOP_LEFT'
                },
                panControl : false,
                streetViewControl : false,
                mapTypeControl: false,
                overviewMapControl: false
            });

            map.addMarker({
                  lat: 52.52398,
                  lng: 13.40540,
                  icon: "assets/map-marker.png"
                });

            var styles = [
            {
                stylers: [
                { hue: "#95a5a6" },
                { saturation: -100 }
                ]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                { visibility: "off" }
                ]
            }
            ];

            map.addStyle({
                styledMapName:"Styled Map",
                styles: styles,
                mapTypeId: "map_style"
            });

            map.setStyle("map_style");
        },

        /*--------------------------------------------------------------------------*/
        /*  Grayscale Image
         *--------------------------------------------------------------------------*/

        grayscaleImageHandle: function () {
            $(window).load(function() {
                $('.client-box img, #client-carousel img, #clientlogo-carousel img').each(function() {
                    $(this).wrap('<div style="display:inline-block;width:' + this.width + 'px;height:' + this.height + 'px;">').clone().addClass('gotcolors').css({'position': 'absolute', 'opacity' : 0 }).insertBefore(this);
                    this.src = grayscale(this.src);
                }).animate({opacity: 1}, 500);
            });

            $(document).ready(function() {
                $(".client-box a, #client-carousel a, #clientlogo-carousel a").hover(
                    function() {
                        $(this).find('.gotcolors').stop().animate({opacity: 1}, 200);
                    },
                    function() {
                        $(this).find('.gotcolors').stop().animate({opacity: 0}, 500);
                    }
                    );
            });

            function grayscale(src) {
                var supportsCanvas = !!document.createElement('canvas').getContext;
                if (supportsCanvas) {
                    var canvas = document.createElement('canvas'),
                    context = canvas.getContext('2d'),
                    imageData, px, length, i = 0, gray,
                    img = new Image();

                    img.src = src;
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context.drawImage(img, 0, 0);

                    imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    px = imageData.data;
                    length = px.length;

                    for (; i < length; i += 4) {
                        gray = px[i] * .3 + px[i + 1] * .59 + px[i + 2] * .11;
                        px[i] = px[i + 1] = px[i + 2] = gray;
                    }

                    context.putImageData(imageData, 0, 0);
                    return canvas.toDataURL();
                } else {
                    return src;
                }
            }
        },

        /*--------------------------------------------------------------------------*/
        /*  Content Carousel
         *--------------------------------------------------------------------------*/
        contentCarouselHandle: function () {
            $("#content-carousel").owlCarousel({
                itemsCustom : [[0, 1], [400, 2], [700, 3], [1000, 3], [1200, 3], [1600, 3]],
                singleItem : false,
                itemsScaleUp : false,
                autoPlay: false, //Set AutoPlay to 3 seconds
                navigation : true,
                slideSpeed : 300,
                navigation : true,
                pagination : false,
                paginationNumbers : false,
                paginationSpeed : 400,
                scrollPerPage : false,
                lazyLoad : false,
                lazyFollow : true,
                lazyEffect : "fade"
            });
        },

        /*--------------------------------------------------------------------------*/
        /*  Client Logo Carousel
         *--------------------------------------------------------------------------*/
        clientlogoHandle: function () {
            $("#clientlogo-carousel").owlCarousel({
                itemsCustom : [[0, 2], [400, 3], [700, 4], [1000, 6], [1200, 6], [1600, 6]],
                singleItem : false,
                itemsScaleUp : false,
                autoPlay: false, //Set AutoPlay to 3 seconds
                navigation : true,
                slideSpeed : 300,
                navigation : true,
                pagination : false,
                paginationNumbers : false,
                paginationSpeed : 400,
                scrollPerPage : false,
                lazyLoad : false,
                lazyFollow : true,
                lazyEffect : "fade"
            });
        },

        /*--------------------------------------------------------------------------*/
        /*  Testimonial Carousel
         *--------------------------------------------------------------------------*/
        testiCarouselHandle: function () {
            $("#testi-carousel").owlCarousel({
                singleItem : true,
                itemsScaleUp : false,
                autoPlay: false, //Set AutoPlay to 3 seconds
                navigation : false,
                slideSpeed : 300,
                pagination : true,
                paginationNumbers : false,
                paginationSpeed : 400,
                scrollPerPage : false,
                lazyLoad : false,
                lazyFollow : true,
                lazyEffect : "fade"
            });
        },

        /*--------------------------------------------------------------------------*/
        /*  Isotope
         *--------------------------------------------------------------------------*/
        isotopeHandle: function () {
            if (!jQuery().isotope) {
                return;
            }

            //Portfolio Filter
            $(window).load(function(){
                var $container = $('.pf-container');
                $container.isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                $('#pf-filter a').click(function(){
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;
                });

                var $optionSets = $('#pf-filter'),
                $optionLinks = $optionSets.find('a');

                $optionLinks.click(function(){
                    var $this = $(this);
                    // don't proceed if already selected
                    if ( $this.hasClass('selected') ) {
                        return false;
                    }
                    var $optionSet = $this.parents('#pf-filter');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');
                });
            });
        }

        /*--------------------------------------------------------------------------*/
        /*  Caution !!!
         *--------------------------------------------------------------------------
            If you want to add new plugin, this format to create new handle plugin :

            pluginHandlePrimary: function () {
                // your plugin code here
            },
            //don't forget to add a comma at the end of each code

            pluginHandleSecondary: function () {
                // your plugin code here
            },
            //don't forget to add a comma at the end of each code

            pluginHandleThird: function () {
                // your plugin code here
            }
            //special for the last plugin, leave without coma
        ---------------------------------------------------------------------------*/
    };

}();
