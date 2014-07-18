class AddWeeklyResults < ActiveRecord::Migration
  def change
    add_column :goals, :weekly_results, :integer
  end
end
