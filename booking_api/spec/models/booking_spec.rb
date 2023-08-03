# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Booking do
  before do
    FactoryBot.create(:booking_category)
  end

  it 'dateが空欄でないこと' do
    expect(FactoryBot.build(:booking, date: nil)).not_to be_valid
  end

  it 'weekが空欄でないこと' do
    expect(FactoryBot.build(:booking, week: nil)).not_to be_valid
  end

  it 'timeが空欄でないこと' do
    expect(FactoryBot.build(:booking, time: nil)).not_to be_valid
  end

  it 'nameが空欄でないこと' do
    expect(FactoryBot.build(:booking, name: nil)).not_to be_valid
  end

  it 'number_of_adultsが空欄でないこと' do
    expect(FactoryBot.build(:booking, number_of_adults: nil)).not_to be_valid
  end

  it 'number_of_childrenが空欄でないこと' do
    expect(FactoryBot.build(:booking, number_of_children: nil)).not_to be_valid
  end

  describe '日付が正しいフォーマットである時' do
    it '日付が10文字であること' do
      expect(FactoryBot.build(:booking, date: '2023-08-01')).to be_valid
    end
  end

  describe '日付が正しくないフォーマットである時' do
    it '日付が9文字である場合は無効' do
      expect(FactoryBot.build(:booking, date: '2023-0801')).not_to be_valid
    end

    it '日付が11文字である場合は無効' do
      expect(FactoryBot.build(:booking, date: '2023-08-001')).not_to be_valid
    end
  end

  describe '曜日が許可された値である時' do
    %w[日 月 火 水 木 金 土].each do |week|
      it "曜日が#{week}である場合は有効" do
        expect(FactoryBot.build(:booking, week: week.to_s)).to be_valid
      end
    end
  end

  describe '曜日が許可されていない値である時' do
    it '曜日が存在しない曜日である場合は無効' do
      expect(FactoryBot.build(:booking, week: 'あ')).not_to be_valid
    end
  end

  describe '時間が正しいフォーマットである時' do
    it '時間が5文字であること' do
      expect(FactoryBot.build(:booking, time: '18:00')).to be_valid
    end
  end

  describe '時間が正しくないフォーマットである時' do
    it '時間が4文字である場合は無効' do
      expect(FactoryBot.build(:booking, time: '1800')).not_to be_valid
    end

    it '時間が6文字である場合は無効' do
      expect(FactoryBot.build(:booking, time: '18:000')).not_to be_valid
    end
  end

  describe '人数が許可された値である時' do
    context '大人の人数が1人以上60人以下であること' do
      it '大人の人数が1人である場合は有効' do
        expect(FactoryBot.build(:booking, number_of_adults: 1)).to be_valid
      end

      it '大人の人数が60人である場合は有効' do
        expect(FactoryBot.build(:booking, number_of_adults: 60)).to be_valid
      end
    end
  end

  describe '人数が許可されていない値である時' do
    it '大人の人数が0人である場合は無効' do
      expect(FactoryBot.build(:booking, number_of_adults: 0)).not_to be_valid
    end

    it '大人の人数が61人である場合は無効' do
      expect(FactoryBot.build(:booking, number_of_adults: 61)).not_to be_valid
    end
  end

  describe '子供の人数が許可された値である時' do
    context '子供の人数が0人以上60人以下であること' do
      it '子供の人数が0人である場合は有効' do
        expect(FactoryBot.build(:booking, number_of_children: 0)).to be_valid
      end

      it '子供の人数が60人である場合は有効' do
        expect(FactoryBot.build(:booking, number_of_children: 60)).to be_valid
      end
    end
  end

  describe '子供の人数が許可されていない値である時' do
    it '子供の人数が-1人である場合は無効' do
      expect(FactoryBot.build(:booking, number_of_children: -1)).not_to be_valid
    end

    it '子供の人数が61人である場合は無効' do
      expect(FactoryBot.build(:booking, number_of_children: 61)).not_to be_valid
    end
  end
end
