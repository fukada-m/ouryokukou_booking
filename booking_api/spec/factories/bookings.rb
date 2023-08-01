FactoryBot.define do
  factory :booking do
    date { "2023-08-01" }
    week { "火" }
    time { "18:00" }
    name { "テスト太郎" }
    number_of_adults { 1 }
    number_of_children { 0 }
    booking_category { FactoryBot.create(:booking_category, name: "LINE")}
    tables { [FactoryBot.create(:table, name: "1番")] }
    note { "テスト用の予約です" }
  end
end
