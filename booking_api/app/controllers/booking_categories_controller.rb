class BookingCategoriesController < ApplicationController
  def get_all_categories
    categories = BookingCategory.all.map { |category| { id: category.id, name: category.name } }
    render json: categories
  end
end
