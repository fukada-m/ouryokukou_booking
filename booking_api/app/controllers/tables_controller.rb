class TablesController < ApplicationController
  def get_tables
    data = Table.all.map(&:name)
      render json: data
  end
end
