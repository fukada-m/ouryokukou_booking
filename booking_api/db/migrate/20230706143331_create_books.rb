class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.date :date
      t.string :name
      t.integer :number
      t.text :note
      t.belongs_to :booking_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
