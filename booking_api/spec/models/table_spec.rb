require 'rails_helper'

RSpec.describe Table, type: :model do
  it "nameが空欄でないこと" do
    expect(FactoryBot.build(:table, id: nil)).to_not be_valid
  end

  it "nameが重複していないこと" do
    FactoryBot.create(:table, id: 1)
    expect(FactoryBot.build(:table, id: 1)).to_not be_valid
  end

  describe "nameが許可された値である時" do
    [1, 2, 3, 5, 11, 12, 13, 14, 15, 16, 21].each do |num|
      it "nameが#{num}番である場合は有効" do
        expect(FactoryBot.build(:table, id: num)).to be_valid
      end
    end
  end

  describe "nameが許可されていない値である時" do
    it "nameが存在しない卓番である場合は無効" do
      expect(FactoryBot.build(:table, id: 100)).to_not be_valid
    end
  end
end
