# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


#translate into js and move into js file?
# $("select").change ->
#   id = $(this).closest("ul li input").val()  #this is still not working.
#   frequency_button = parseInt($(this).val())
#   local_point_value = parseInt($(this).closest("li").find(".point_value").text())
#   # parseInt $(this).closest("li").find(".weekly_goal").text(frequency_button * local_point_value)
#
#   console.log id
#   console.log frequency_button
#   console.log local_point_value
#
#
#   $.ajax
#     url: "/clients/goals/#{id}"
#     type: "PATCH"
#     data:
#       frequency: frequency_button
#
#     success: (data) ->
#
#       return
#
#     error: (data) ->
#       return
