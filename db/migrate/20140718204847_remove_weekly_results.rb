class RemoveWeeklyResults < ActiveRecord::Migration
  def change
    remove_column :users, :weekly_results, :integers
  end
end
