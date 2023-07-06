class BookingCategoriesController < ApplicationController
  def get_all_categories
    # 名前とIDをJsonで返す
    categories = BookingCategory.all.map { |category| { id: category.id, name: category.name } }
    render json: categories
  end
end
