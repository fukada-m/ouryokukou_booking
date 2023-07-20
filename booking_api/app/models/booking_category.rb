# frozen_string_literal: true

class BookingCategory < ApplicationRecord
  has_many :bookings
  validates :name, presence: true
end
