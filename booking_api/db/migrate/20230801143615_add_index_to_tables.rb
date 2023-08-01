class AddIndexToTables < ActiveRecord::Migration[7.0]
  def change
    add_index :tables, :name, unique: true
  end
end
