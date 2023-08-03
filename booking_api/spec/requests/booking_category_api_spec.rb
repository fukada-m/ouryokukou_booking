require 'rails_helper'

RSpec.describe "BookingCategoryApis", type: :request do
    before do
      FactoryBot.create(:booking_category)
      FactoryBot.create(:booking_category, :tell)
    end
    it "全ての予約カテゴリーを取得する" do
      get "/api/get_all_categories"
      expect(response).to be_successful
      expect(JSON.parse(response.body)).to match_array([
        {
            "id" => 1,
            "name" => "LINE"
        },
        {
            "id" => 2,
            "name" => "電話"
        }
      ])
    end

end
