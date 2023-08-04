class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      token = create_token(@user.id)
      render json: {token: token}
    else
      render json: {errors: @user.errors}, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by_email(user_params[:email])
    if @user && @user.authenticate(user_params[:password])
      token = create_token(@user.id)
      render json: {token: token}
    else
      render status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
