class HealthChecksController < ApplicationController
  def index
    render json: { status: 'ok' }
  end

  def test_db
    data = Test.all
    render json: data
  end

end
