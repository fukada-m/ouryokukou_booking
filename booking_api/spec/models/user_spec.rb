# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User do
  it 'emailが空欄でないこと' do
    expect(FactoryBot.build(:user, email: nil)).not_to be_valid
  end

  it 'emailが重複していないこと' do
    FactoryBot.create(:user)
    expect(FactoryBot.build(:user)).not_to be_valid
  end

  it 'passwordが空欄でないこと' do
    expect(FactoryBot.build(:user, password_digest: nil)).not_to be_valid
  end
end
