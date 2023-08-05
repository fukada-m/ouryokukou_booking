# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { 'yakiniku@example.com' }
    password_digest { 'pass' }
  end
end
