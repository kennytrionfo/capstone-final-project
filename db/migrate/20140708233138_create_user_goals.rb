class CreateUserGoals < ActiveRecord::Migration
  def change
    create_table :user_goals do |t|
      t.text :category
      t.integer :point_value
      t.integer :frequency
      t.integer :weekly_points_goal
      t.integer :weekly_points_results
      t.integer :user_id
      t.integer :goal_id
      t.timestamps
    end
  end
end
