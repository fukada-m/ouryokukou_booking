# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'TableApis' do
  table_data = [1, 2, 3, 5, 11, 12, 13, 14, 15, 16, 21]

  before do
    table_data.each do |id|
      FactoryBot.create(:table, id:)
    end
  end

  describe '全ての卓番の情報を取得したい' do
    before do
      get '/api/get_all_tables'
    end

    it '正常にレスポンスを返すこと' do
      expect(response).to be_successful
    end

    it '全ての卓番の情報を読み取れること' do
      table_matcher = table_data.map do |num|
        { 'id' => num, 'name' => "#{num}番", 'is_seated' => false }
      end
      expect(response.parsed_body).to match_array(table_matcher)
    end
  end

  describe '着席の状態をテストする' do
    it 'trueにした場合正常にレスポンスを返すこと' do
      put '/api/is_seated_true', params: { table: { id: 1 } }
      expect(response).to be_successful
    end

    it 'falseにした場合正常にレスポンスを返すこと' do
      put '/api/is_seated_false', params: { table: { id: 1 } }
      expect(response).to be_successful
    end

    context 'デフォルトではfalseになっている' do
      it '指定した席の着席状態をtrueにする' do
        put '/api/is_seated_true', params: { table: { id: 1 } }
        updaged_table = Table.find(1)
        expect(updaged_table.is_seated).to be(true)
      end

      it '指定した席の着席状態をfalseにする' do
        put '/api/is_seated_true', params: { table: { id: 2 } }
        put '/api/is_seated_false', params: { table: { id: 2 } }
        updaged_table = Table.find(1)
        expect(updaged_table.is_seated).to be(false)
      end
    end
  end

  describe '席と予約の関係をテストする' do
    before do
      FactoryBot.create(:booking_category)
      FactoryBot.create(:booking)
    end

    context '席と予約の関連付けを行う' do
      before do
        put '/api/add_table_relation',
            params: { table: { id: 1 }, booking: { id: 1 } }
      end

      it '正常にレスポンスを返すこと' do
        expect(response).to be_successful
      end

      it '指定した席と予約が関連付けられていること' do
        expect(Table.find(1).bookings).to include(Booking.find(1))
      end
    end

    context 'デフォルトでは席と予約は関連づけられていないこと' do
      before do
        put '/api/add_table_relation',
            params: { table: { id: 21 }, booking: { id: 21 } }
        put '/api/remove_table_relation',
            params: { table: { id: 1 }, booking: { id: 1 } }
      end

      it '正常にレスポンスを返すこと' do
        expect(response).to be_successful
      end

      it '席と予約の関連付けを解除されていること' do
        expect(Table.find(1).bookings).not_to include(Booking.find(1))
      end
    end
  end
end
