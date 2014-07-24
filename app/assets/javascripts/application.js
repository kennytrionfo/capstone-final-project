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
//= require goals
//= require_self

$(document).foundation();

$(document).ready(function() {
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

 // put these into different js files like user.js and goals.js etc.

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
        console.log(goal);
    });
  });


  $('a.done').click(function(){
    var weekly_results = parseInt($(this).closest('li').find('.weekly_results').text(), 10);
    var point_value = parseInt($(this).closest('li').find('.point_value').text(), 10);
    var total = weekly_results + point_value;
    $(this).closest('li').find('.weekly_results').text(total);
    var goal_id = $(this).closest('li').find('.goal_id').val();
    $.post('/clients/goals/' + goal_id, {
      _method: 'patch',
      goal: {
        weekly_results: total,
        },
      },function(goal){
        console.log(goal);
    });
    return false;
  });

      // psuedo for reset button
      // when I click on the refresh button for THIS goal
      // set the value of weekly results back to 0 and send this new value to db via ajax
  $('a.refresh').click(function(){
    var total = 0
    $(this).closest('li').find('.weekly_results').text(total);
    var goal_id = $(this).closest('li').find('.goal_id').val();
    $.post('/clients/goals/' + goal_id, {
      _method: 'patch',
      goal: {
        weekly_results: total,
        },
      },function(goal){
        console.log(goal);
    });
    return false;
  });

  var theTotal = $('#grand_total').attr('value')
  $('a.done').click(function(){
    theTotal = Number(theTotal) + parseInt($(this).closest('li').find('.point_value').text());
    var user_id = $(this).closest('li').find('.user_id').val();  // do I need the this here cuz its not closest to anything theres just one on page
    $('#grand_total').text("Your Grand Total: "+ theTotal);
      $.post('/clients/users/' + user_id, {
        _method: 'patch',
        user: {
          grand_total: theTotal,
          },
        },function(user){
        console.log(user);
      });
        return false;
    });
      $('#grand_total').text("Your Grand Total: "+ theTotal);

});
