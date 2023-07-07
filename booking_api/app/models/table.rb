class Table < ApplicationRecord
  has_and_belongs_to_many :bookings
  validates :name, presence: true
end
