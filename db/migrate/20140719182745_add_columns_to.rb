class AddColumnsTo < ActiveRecord::Migration
  def change
    add_column :goals, :grand_total, :integer
  end
end
