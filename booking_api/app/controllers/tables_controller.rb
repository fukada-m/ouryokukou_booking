class TablesController < ApplicationController
  def get_tables
    data = Table.all.map(&:name)
    if data.empty?
      render json: { status: 'error', message: 'No tables found' }
    else
      render json: data
    end
  end
end
