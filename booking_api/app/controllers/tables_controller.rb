class TablesController < ApplicationController
  def get_all_tables
    data = Table.all.map{ |table| { name: table.name, is_seated: table.is_seated } }
      render json: data
  end

  def is_seated_true
    begin
      table = Table.find_by!(id: get_body_table_params[:id])
      if table.update(is_seated: true)
        render json: { status: 'SUCCESS' }
      else
        render json: { status: 'ERROR', data: table.errors }
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
    end
  end

  def is_seated_false
    begin
      table = Table.find_by!(id: get_body_table_params[:id])
      if table.update(is_seated: false)
        render json: { status: 'SUCCESS' }
      else
        render json: { status: 'ERROR', data: table.errors }
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
    end
  end

  private

  def get_body_table_params
    params.require(:table).permit(:id)
  end
end
