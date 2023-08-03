# frozen_string_literal: true

FactoryBot.define do
  factory :table do
    id { id }
    name { "#{id}番" }
    is_seated { false }
  end
end
