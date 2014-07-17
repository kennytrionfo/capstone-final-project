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
//= require jquery_ujs
//= require turbolinks
//= require cocoon
//= require_tree .
//= require formnestic/formnestic.js
//= require_self


var ready;
ready = function() {

  $('#frequency').change(function() {
      var val1 = $('#frequency option:selected').val();
      var val2 = $('.point_value');
      $('#lights_goal_total').text(val1*val2);
  });

  $('#frequency1').change(function() {
      var val1 = $('#frequency1 option:selected').val();
      var val2 = $('#bags_value').attr("value");
      $('#bags_goal_total').text(val1*val2);
  });

// use an ajax call to save the change to the db.

  var bagsTotal = 0;
    $('#bags').click(function(){
      bagsTotal = Number(bagsTotal) + Number($(this).val());
        $('#bags_total').text(bagsTotal);
  });
  $('#bags_total').text(bagsTotal);

  var lightsTotal = 0;
    $('#lights').click(function(){
      lightsTotal = Number(lightsTotal) + Number($(this).val());
        $('#lights_total').text(lightsTotal);
  });
  $('#lights_total').text(lightsTotal);

  var theTotal = 0;
    $('button').click(function(){
     theTotal = Number(theTotal) + Number($(this).val());
       $('.total').text("Your Grand Total: "+theTotal);
  });
  $('.total').text("Your Grand Total: "+theTotal);
};

$(document).ready(ready);
$(document).on('page:load', ready);
