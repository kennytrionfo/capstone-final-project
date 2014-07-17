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
    $('.weekly_goal').text(val1*val2);
  });


  var weeklyResults = 0;
    $('#done').click(function(){
      weeklyResults = Number(weeklyResults) + Number($(this).val());
        $('#weekly_results').text(weeklyResults);
    });
        $('#weekly_results').text(weeklyResults);



// // use an ajax call to save the change to the db.

  var theTotal = 0;
    $('button').click(function(){
     theTotal = Number(theTotal) + Number($(this).val());
       $('.total').text("Your Grand Total: "+theTotal);
    });
      $('.total').text("Your Grand Total: "+theTotal);

});
