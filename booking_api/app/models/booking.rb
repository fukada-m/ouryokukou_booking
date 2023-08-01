# frozen_string_literal: true

class Booking < ApplicationRecord
  belongs_to :booking_category
  has_and_belongs_to_many :tables

  validates :date, presence: true, length: { is: 10 }
  validates :week, presence: true, inclusion: { in: %w[月 火 水 木 金 土 日] }
  validates :time, presence: true, length: { is: 5 }
  validates :name, presence: true
  validates :number_of_adults, presence: true, inclusion: { in: 1..60 }
  validates :number_of_children, presence: true, inclusion: { in: 0..60 }
end
