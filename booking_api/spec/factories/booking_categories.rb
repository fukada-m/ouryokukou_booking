FactoryBot.define do
  factory :booking_category do
    name { "LINE" }
  end

  trait :tell do
    name { "電話" }
  end
end
