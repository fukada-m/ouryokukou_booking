class AddIndexToBookingCategories < ActiveRecord::Migration[7.0]
  def change
    add_index :booking_categories, :name, unique: true
  end
end
