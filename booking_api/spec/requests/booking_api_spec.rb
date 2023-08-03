# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'BookingApis' do
  before do
    FactoryBot.create(:booking_category)
    FactoryBot.create(:booking)
  end

  it '全ての予約を取得する' do
    get '/api/get_all_booking'
    expect(response).to be_successful
    expect(response.parsed_body).to contain_exactly({ 'id' => 1,
                                                      'date' => '2023-08-01',
                                                      'name' => 'テスト太郎',
                                                      'number_of_adults' => 1,
                                                      'number_of_children' => 0,
                                                      'note' => 'テスト用の予約です',
                                                      'week' => '火',
                                                      'time' => '18:00',
                                                      'booking_category' => { 'name' => 'LINE' },
                                                      'tables' => [] })
  end

  it '予約を作成する' do
    post '/api/create_booking', params: {
      booking: {
        date: '2023-07-14',
        week: '木',
        time: '18:00:',
        name: '佐藤',
        number_of_adults: 2,
        number_of_children: 3,
        note: 'よろしくお願いします。',
        booking_category_id: 1
      },
      table: {
        id: [14]
      }
    }
    expect(response).to be_successful
  end

  it '予約を更新する' do
    put '/api/edit_booking', params: {
      booking: {
        id: 1,
        date: '2000-07-01',
        name: 'パッチ',
        number_of_adults: 22,
        number_of_children: 33,
        note: 'パッチです。',
        booking_category_id: 1,
        week: '水',
        time: '17:30'
      }
    }
    expect(response).to be_successful
  end

  it '予約を削除する' do
    delete '/api/delete_booking', params: {
      booking: {
        id: 1
      }
    }
    expect(response).to be_successful
  end
end
