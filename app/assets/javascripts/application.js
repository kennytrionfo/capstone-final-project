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
//= require goals
//= require_tree .
//= require_self

$(document).foundation();
$(document).ready(function() {

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
