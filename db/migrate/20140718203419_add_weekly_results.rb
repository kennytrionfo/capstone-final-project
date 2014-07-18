class AddWeeklyResults < ActiveRecord::Migration
  def change
    add_column :users, :weekly_results, :integer
  end
end
