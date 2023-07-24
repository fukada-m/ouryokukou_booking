# frozen_string_literal: true

# 予約カテゴリーに関するコントローラー
class BookingCategoriesController < ApplicationController
  def all_categories
    categories = BookingCategory.all.map { |category| { id: category.id, name: category.name } }
    render json: categories
  end
end
