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
//= require foundation
//= require turbolinks
//= require cocoon
//= require_tree .
//= require formnestic/formnestic.js
//= require foundation
//= require_self

$(document).foundation();

$(document).ready(function() {

  // $('table tbody tr').each(function(index, row) {
  //   $(row).find('.point_value').text()
  // });

  $('select').change(function() {
    var val1 = parseInt($(this).val());
    var val2 = parseInt($(this).parents('tr').find('.point_value').text());
    $('#lights_goal_total').text(val1*val2);
  });


  var lightsTotal = 0;
    $('#lights').click(function(){
      lightsTotal = Number(lightsTotal) + Number($(this).val());
        $('#lights_total').text(lightsTotal);
    });
        $('#lights_total').text(lightsTotal);



// // use an ajax call to save the change to the db.
//
//   var bagsTotal = 0;
//     $('#bags').click(function(){
//       bagsTotal = Number(bagsTotal) + Number($(this).val());
//         $('#bags_total').text(bagsTotal);
//     });
//         $('#bags_total').text(bagsTotal);
//
//
//   var theTotal = 0;
//     $('button').click(function(){
//      theTotal = Number(theTotal) + Number($(this).val());
//        $('.total').text("Your Grand Total: "+theTotal);
//     });
//       $('.total').text("Your Grand Total: "+theTotal);

});
