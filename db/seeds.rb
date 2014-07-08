# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Goal.create(category: "I used my own bags at the grocery store.", point_value: 20, frequency: 1)
Goal.create(category: "I carpooled to work today.", point_value: 50, frequency: 2)
Goal.create(category: "I turned off a light when I left the room.", point_value: 5, frequency: 3)



# t.text :category
# t.integer :point_value
# t.integer :frequency
# t.integer :weekly_points_goal
# t.integer :weekly_points_results
