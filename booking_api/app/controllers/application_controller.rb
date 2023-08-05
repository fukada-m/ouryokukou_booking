# frozen_string_literal: true

class ApplicationController < ActionController::API
  def authenticate
    authorization_header = request.headers[:authorization]
    if authorization_header
      token = authorization_header.split[1]
      secret_key = Rails.application.secrets.secret_key_base[0]
      decoded_token = JWT.decode(token, secret_key)

      @user = User.find(decoded_token[0]['user_id'])
    else
      render status: :unauthorized
    end
  end

  def create_token(user_id)
    payload = { user_id: }
    secret_key = Rails.application.secrets.secret_key_base[0]
    JWT.encode(payload, secret_key)
  end
end
