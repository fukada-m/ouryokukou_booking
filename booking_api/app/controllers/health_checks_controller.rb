# frozen_string_literal: true

# 疎通確認用のテストコントローラー
class HealthChecksController < ApplicationController
  def index
    render json: { status: 'ok' }
  end

  def test_db
    data = Test.all
    render json: data
  end

  def error
    this_method_does_not_exist
  end
end
