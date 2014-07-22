class AddColumnToUser < ActiveRecord::Migration
  def change
    add_column :users, :grand_total, :integer, default: 0
  end
end
