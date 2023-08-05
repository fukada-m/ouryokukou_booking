# frozen_string_literal: true

class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      token = create_token(@user.id)
      render json: { token: }
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by(email: user_params[:email])
    if @user&.authenticate(user_params[:password])
      token = create_token(@user.id)
      render json: { token: }
    else
      render status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
