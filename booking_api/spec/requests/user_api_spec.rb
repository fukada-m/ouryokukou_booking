require 'rails_helper'

RSpec.describe "UserApis", type: :request do
  describe '正常なデータを登録したとき' do
    before do
      post '/api/signup', params: { user: { email: 'yakiniku@example.com', password: 'pass' } }
    end

    it '正常なレスポンスが返されること' do
      expect(response).to be_successful
    end
    it 'トークンが返されること' do
      expect(response.parsed_body['token']).to be_present
    end
  end
  describe '異常なデータを登録したとき' do
    before do
      post '/api/signup', params: { user: { email: nil, password: nil } }
    end
    it 'エラーレスポンスが返されること' do
      expect(response).to_not be_successful
    end
    it 'トークンが返されないこと' do
      expect(response.parsed_body['token']).to_not be_present
    end
  end

  describe '正常なデータでログインした時' do
    before do
      FactoryBot.create(:user, email: 'yakiniku@example.com', password: 'pass')
      post '/api/login', params: { user: { email: 'yakiniku@example.com', password: 'pass' } }
    end
    it '正常なレスポンスが返されること' do
      expect(response).to be_successful
    end
    it 'トークンが返されること' do
      expect(response.parsed_body['token']).to be_present
    end
  end

  describe '異常なデータでログインした時' do
    before do
      FactoryBot.create(:user, email: 'yakiniku@example.com', password: 'pass')
      post '/api/login', params: { user: { email: nil, password: nil } }
    end
    it 'エラーレスポンスが返されること' do
      expect(response).to_not be_successful
    end
    it 'トークンが返されないこと' do
      expect(response.parsed_body['token']).to_not be_present
    end
  end
end
