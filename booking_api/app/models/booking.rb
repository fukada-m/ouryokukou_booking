class Booking < ApplicationRecord
  belongs_to :booking_category
  validates :date, presence: true
  validates :name, presence: true
  validates :number_of_adults, presence: true
  validates :number_of_children, presence: true
  validates :booking_category_id, presence: true

end
