# frozen_string_literal: true

class BookingCategory < ApplicationRecord
  has_many :bookings, dependent: :nullify

  validates :name, presence: true, uniqueness: true, inclusion: { in: %w[LINE 電話] }
end
