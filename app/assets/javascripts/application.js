// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require modernizr
//= require foundation
//= require responsivetabs
//= require fancybox
//= require fancybox-media
//= require donutchart
//= require waypoints
//= require accordion
//= require retina
//= require classie
//= require uisearch
//= require sticky
//= require sscr
//= require parallax
//= require countTo
//= require contact-form
//= require scrollUp
//= require themepunch
//= require themepunch-revolution
//= require carousel
//= require prodigy
//= require jquery_ujs
//= require_self

$(document).foundation();

$(document).ready(function() {
  display_badges();
// for the home page
        // Initialization Handle
        Prodigy.init();
        Prodigy.contentCarouselHandle();

        //Slideshow
        $('.banner').revolution({
            delay:9000,
            startwidth:1000,
            startheight:575,
            hideThumbs:1,
            navigationType:"none",                  // bullet, thumb, none
            navigationArrows:"solo",                // nexttobullets, solo (old name verticalcentered), none
            navigationStyle:"navbar",               // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
            navigationHAlign:"center",              // Vertical Align top,center,bottom
            navigationVAlign:"bottom",              // Horizontal Align left,center,right
            navigationHOffset:0,
            navigationVOffset:0,
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:30,
            soloArrowLeftVOffset:0,
            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:30,
            soloArrowRightVOffset:0,
            touchenabled:"on",                      // Enable Swipe Function : on/off
            onHoverStop:"off",                      // Stop Banner Timet at Hover on Slide on/off
            stopAtSlide:-1,                         // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
            stopAfterLoops:-1,                      // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
            hideCaptionAtLimit:0,                   // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
            hideAllCaptionAtLilmit:0,               // Hide all The Captions if Width of Browser is less then this value
            hideSliderAtLimit:0,                    // Hide the whole slider, and stop also functions if Width of Browser is less than this value
            shadow:0,                               //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
            fullWidth:"on"                          // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
        });

// ------SELECT BUTTON GIVING USER FREQUENCY OPTIONS FOR DOING EACH TASK-----
  $('select.frequency-select').change(function() {
    var frequency_button = parseInt($(this).val());
    var local_point_value = parseInt($(this).closest('li').find('.point_value').text());
  parseInt($(this).closest('li').find('.weekly_goal').text(frequency_button*local_point_value));
    var goal_id = $(this).closest('li').find('.goal_id').val();
    $.post('/clients/goals/' + goal_id, {
      _method: 'patch',
      goal: {
        frequency: frequency_button,
        weekly_points_goal: frequency_button*local_point_value
        },
      },function(goal){
    });
  });


// ------Did it! BUTTON THAT ADDS THE CATAGORY'S POINTS TO WEEKLY RESULTS & GRAND TOTAL-----
  var theTotal = $('#grand_total').attr('value');
  $('a.done').click(function(){
    var $link = $(this);
    var weekly_goal = parseInt($link.parents('.card').find('.weekly_goal').text(), 10);
    if  (weekly_goal == 0 ) {
      alert('Please choose at least 1 "Times Per Week" first');
    } else {
    var theTotal = $('#grand_total').attr('value');
    var weekly_results = parseInt($link.closest('li').find('.weekly_results').text(), 10);
    var point_value = parseInt($link.closest('li').find('.point_value').text(), 10);
    var total = weekly_results + point_value;
    $link.closest('li').find('.weekly_results').text(total);
    var goal_id = $link.closest('li').find('.goal_id').val();
    var $progressBar = $link.parents('.card').find('.circular-bar-green');
    $.post('/clients/goals/' + goal_id, {
      _method: 'patch',
      goal: {
        weekly_results: total,
      },
    }, function(goal){
    });
    theTotal = Number(theTotal) + parseInt($link.closest('li').find('.point_value').text());
    var user_id = $('.user_id').val();
    $('#grand_total').text("Your Grand Total: "+ theTotal);
    $('#grand_total').attr('value', theTotal);
    $.post('/clients/users/' + user_id, {
      _method: 'patch',
      user: {
        grand_total: theTotal,
        },
      },function(user){
        display_badges();
        var new_weekly_results = parseInt($link.closest('li').find('.weekly_results').text(), 10);
        var percentage = Math.ceil((new_weekly_results / weekly_goal) * 100);
        $progressBar.attr('data-percent', percentage);
        $progressBar.donutchart('animate');
    });
    return false;
    }

  });

  $('#grand_total').text("Your Grand Total: "+ theTotal);

// -------REFRESH BUTTON THAT SETS THAT CARD'S WEEKLY RESULTS BACK TO ZERO-----
  $('a.refresh').click(function(){
    if (confirm("This will reset your 'Weekly Results' back to zero. \n\nReset now?") == true) {
    var total = 0
    $(this).closest('li').find('.weekly_results').text(total);
    var goal_id = $(this).closest('li').find('.goal_id').val();
    $.post('/clients/goals/' + goal_id, {
      _method: 'patch',
      goal: {
        weekly_results: total,
        },
      },function(goal){
    });
    return false;
    } else {
    }
  });
// ----a hidden link at bottom of page to easily reset grand total to 0 for demo & testing
  $('a#grandtotal_refresh').click(function(){
    var theTotal = 0
    $('#grand_total').text("Your Grand Total: "+ theTotal);
    $('#grand_total').attr('value', theTotal);
    var user_id = $('.user_id').val();
    $.post('/clients/users/' + user_id, {
        _method: 'patch',
        user: {
          grand_total: theTotal,
        },
      },function(user){
          display_badges();
    });
      return false;
  });


  // -------REMOVE BUTTON THAT REMOVES THAT CARD FROM THE USER-----
  // on click, remove the div of that catagory. THIS IS ON HOLD DUE TO TIME CONTSTRAINTS--
  // $('.refreshtest').click(function(){
  //
  //
  // });


});


function display_badges() {
  var theTotal = $('#grand_total').attr('value');
  if (theTotal > 499) {
    $('#five').css({
      'opacity': 1.0
      });
    $('#four').css({
      'opacity': 1.0
      });
    $('#three').css({
      'opacity': 1.0
      });
    $('#two').css({
      'opacity': 1.0
      });
    $('#one').css({
      'opacity': 1.0
      });
    } else if (theTotal > 399){
      $('#four').css({
        'opacity': 1.0
        });
      $('#three').css({
        'opacity': 1.0
        });
      $('#two').css({
        'opacity': 1.0
        });
      $('#one').css({
        'opacity': 1.0
        });
    } else if (theTotal > 299){
      $('#three').css({
        'opacity': 1.0
        });
      $('#two').css({
        'opacity': 1.0
        });
      $('#one').css({
        'opacity': 1.0
        });
    } else if (theTotal > 199){
      $('#two').css({
        'opacity': 1.0
        });
      $('#one').css({
        'opacity': 1.0
        });
    } else if (theTotal > 99){
      $('#one').css({
        'opacity': 1.0
        });
    } else if (theTotal < 100){
      $('#five').css({
        'opacity': 0.2
        });
      $('#four').css({
        'opacity': 0.2
        });
      $('#three').css({
        'opacity': 0.2
        });
      $('#two').css({
        'opacity': 0.2
        });
      $('#one').css({
        'opacity': 0.2
        });
    }
}
