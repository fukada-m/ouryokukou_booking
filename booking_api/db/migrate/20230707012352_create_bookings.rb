class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.date :date
      t.string :name
      t.integer :number_of_adults
      t.integer :number_of_children
      t.text :note
      t.belongs_to :booking_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
