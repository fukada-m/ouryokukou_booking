# frozen_string_literal: true

# 予約テーブル
class Booking < ApplicationRecord
  belongs_to :booking_category
  has_and_belongs_to_many :tables
  validates :date, presence: true
  validates :week, presence: true
  validates :time, presence: true
  validates :name, presence: true
  validates :number_of_adults, presence: true
  validates :number_of_children, presence: true
  validates :booking_category_id, presence: true
end
