class CreateJoinTableBookingTable < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings_tables do |t|
      t.belongs_to :booking, foreign_key: true
      t.belongs_to :table, foreign_key: true
    end
  end
end
