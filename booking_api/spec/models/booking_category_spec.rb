require 'rails_helper'

RSpec.describe BookingCategory, type: :model do
  it "nameが空欄でないこと" do
    expect(FactoryBot.build(:booking_category, name: nil)).to_not be_valid
  end

  describe "nameがLINEか電話であること" do
    it "nameがLINEであること" do
      expect(FactoryBot.build(:booking_category)).to be_valid
    end
    it "nameが電話であること" do
      expect(FactoryBot.build(:booking_category, name: "電話")).to be_valid
    end
  end
end
