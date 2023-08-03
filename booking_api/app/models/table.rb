# frozen_string_literal: true

class Table < ApplicationRecord
  has_and_belongs_to_many :bookings

  validates :name, presence: true, uniqueness: true,
                   inclusion: { in: %w[1番 2番 3番 5番 11番 12番 13番 14番 15番 16番 21番] }
end
