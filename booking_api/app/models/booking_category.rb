# frozen_string_literal: true

# 予約カテゴリーに関するモデル
class BookingCategory < ApplicationRecord
  has_many :bookings
  validates :name, presence: true
end
