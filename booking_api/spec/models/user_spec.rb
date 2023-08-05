# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User do
  before do
  end

  it 'emailが空欄でないこと' do
    expect(FactoryBot.build(:user, email: nil)).to_not be_valid
  end
  it 'emailが重複していないこと' do
    FactoryBot.create(:user)
    expect(FactoryBot.build(:user)).to_not be_valid

  end
  it 'passwordが空欄でないこと' do
    expect(FactoryBot.build(:user, password_digest: nil)).to_not be_valid
  end
end
