class AddIsSeatedToTables < ActiveRecord::Migration[7.0]
  def change
    add_column :tables, :is_seated, :boolean, default: false
  end
end
