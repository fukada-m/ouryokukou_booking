require 'rails_helper'

RSpec.describe "TableApis", type: :request do
  before do
    [1, 2, 3, 5, 11, 12, 13, 14, 15, 16, 21].each do |num|
      FactoryBot.create(:table,id: num, name: "#{num}番")
    end
  end

  it "全ての卓番の情報を読み出す" do
    get '/api/get_all_tables'
    expected_response = [
    {
        "id" => 1,
        "name" => "1番",
        "is_seated" => false
    },
    {
        "id" => 2,
        "name" => "2番",
        "is_seated" => false
    },
    {
        "id" => 3,
        "name" => "3番",
        "is_seated" => false
    },
    {
        "id" => 5,
        "name" => "5番",
        "is_seated" => false
    },
    {
        "id" => 11,
        "name" => "11番",
        "is_seated" => false
    },
    {
        "id" => 12,
        "name" => "12番",
        "is_seated" => false
    },
    {
        "id" => 13,
        "name" => "13番",
        "is_seated" => false
    },
    {
        "id" => 14,
        "name" => "14番",
        "is_seated" => false
    },
    {
        "id" => 15,
        "name" => "15番",
        "is_seated" => false
    },
    {
        "id" => 16,
        "name" => "16番",
        "is_seated" => false
    },
    {
        "id" => 21,
        "name" => "21番",
        "is_seated" => false
    }
    ]
    expect(response).to be_successful
    expect(JSON.parse(response.body)).to match_array(expected_response)
  end

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
end
