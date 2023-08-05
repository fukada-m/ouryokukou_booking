# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { 'yakiniku@example' }
    password_digest { 'pass' }
  end
end
