require 'rails_helper'

RSpec.describe BookingCategory, type: :model do
  it "nameが空欄でないこと" do
    expect(FactoryBot.build(:booking_category, name: nil)).to_not be_valid
  end

  it "nameが重複していないこと" do
    FactoryBot.create(:booking_category, name: "電話")
    expect(FactoryBot.build(:booking_category, name: "電話")).to_not be_valid
  end

  describe "nameが許可された値であるとき" do
    context "nameがLINEまたは電話であること" do
      it "nameがLINEである場合は有効" do
        expect(FactoryBot.build(:booking_category, name: "LINE")).to be_valid
      end

      it "nameが電話である場合は有効" do
        expect(FactoryBot.build(:booking_category, name: "電話")).to be_valid
      end
    end
  end

  describe "nameが許可されていない値であるとき" do
    it "nameがLINEでも電話でもない場合は無効" do
      expect(FactoryBot.build(:booking_category, name: "手紙")).to_not be_valid
    end
  end
end
