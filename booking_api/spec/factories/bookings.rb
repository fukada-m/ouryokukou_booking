# frozen_string_literal: true

FactoryBot.define do
  factory :booking do
    date { '2023-08-01' }
    week { '火' }
    time { '18:00' }
    name { 'テスト太郎' }
    number_of_adults { 1 }
    number_of_children { 0 }
    note { 'テスト用の予約です' }
    booking_category_id { 1 }
  end
end
