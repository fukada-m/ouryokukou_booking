require 'rails_helper'

RSpec.describe "TableApis", type: :request do
  table_data = [1, 2, 3, 5, 11, 12, 13, 14, 15, 16, 21]

  before do
    table_data.each do |id|
      FactoryBot.create(:table, id: id)
    end
  end

  it "全ての卓番の情報を読み取る" do
    get '/api/get_all_tables'
    expect(response).to be_successful
    table_matcher = table_data.map do |num|
      {
        "id" => num,
        "name" => "#{num}番",
        "is_seated" => false
      }
    end
    expect(JSON.parse(response.body)).to match_array(table_matcher)
  end

  describe "着席の状態をテストする" do
  it "指定した席の着席状態をtrueにする" do
    put '/api/is_seated_true', params: {
      "table": {
        "id": 1
      }
    }
    expect(response).to be_successful
    updaged_table = Table.find(1)
    expect(updaged_table.is_seated).to eq(true)
  end

  it "指定した席の着席状態をfalseにする" do
    put '/api/is_seated_true', params: {
      "table": {
        "id": 2
      }
    }
    put '/api/is_seated_false', params: {
      "table": {
        "id": 2
      }
    }
    expect(response).to be_successful
    updaged_table = Table.find(1)
    expect(updaged_table.is_seated).to eq(false)
  end
end

  describe "席と予約の関係をテストする" do
    before do
      FactoryBot.create(:booking_category)
      FactoryBot.create(:booking)
    end
    it "指定した席と予約を関連付ける" do
      put '/api/add_table_relation', params: {
        "table": {
          "id": 1
        },
        "booking": {
          "id": 1
        }
      }
      expect(response).to be_successful
      expect(Table.find(1).bookings).to include(Booking.find(1))
    end

    it "席と予約の関連付けを解除する" do
      put '/api/add_table_relation', params: {
        "table": {
          "id": 21
        },
        "booking": {
          "id": 21
        }
      }
      put '/api/remove_table_relation', params: {
        "table": {
          "id": 1
        },
        "booking": {
          "id": 1
        }
      }
      expect(response).to be_successful
      expect(Table.find(1).bookings).not_to include(Booking.find(1))
    end
  end
end
