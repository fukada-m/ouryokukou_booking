# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'BookingCategoryApis' do
  before do
    FactoryBot.create(:booking_category)
    FactoryBot.create(:booking_category, :tell)
  end

  describe '全ての予約カテゴリーを取得したい' do
    before do
      get '/api/get_all_categories'
    end

    it '正常にレスポンスを返すこと' do
      expect(response).to be_successful
    end

    it '全ての予約カテゴリーを正しい値で取得する' do
      correct_booking_category = { 'id' => 1, 'name' => 'LINE' }, { 'id' => 2, 'name' => '電話' }
      expect([response.parsed_body]).to contain_exactly(correct_booking_category)
    end
  end
end
