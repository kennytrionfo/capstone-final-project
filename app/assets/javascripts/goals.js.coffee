# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


# kenny's psuedo code..

$("select").change ->
  frequency_button = parseInt($(this).val())
  local_point_value = parseInt($(this).closest("tr").find(".point_value").text())
  parseInt $(this).closest("tr").find(".weekly_goal").text(frequency_button * local_point_value)
  #psuedo
  save this to db..


also:
set up post route
