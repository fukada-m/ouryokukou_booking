class Book < ApplicationRecord
  belongs_to :booking_category
  validates :name, presence: true
end
