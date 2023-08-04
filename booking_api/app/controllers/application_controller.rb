# frozen_string_literal: true

class ApplicationController < ActionController::API
    def authenticate
    authorization_header = request.headers[:authorization]
    if !authorization_header
      render status: :unauthorized
    else
      token = authorization_header.split(" ")[1]
      secret_key = Rails.application.secrets.secret_key_base[0]
      decoded_token = JWT.decode(token, secret_key)

      @user = User.find(decoded_token[0]["user_id"])
    end
  end

  def create_token(user_id)
    payload = {user_id: user_id}
    secret_key = Rails.application.secrets.secret_key_base[0]
    token = JWT.encode(payload, secret_key)

    return token
  end
end
