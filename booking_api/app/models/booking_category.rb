# frozen_string_literal: true

# 予約カテゴリーに関するモデル
class BookingCategory < ApplicationRecord
  has_many :bookings, dependent: :nullify

  validates :name, presence: true, inclusion: { in: %w[LINE 電話] }
end
