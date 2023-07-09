class TablesController < ApplicationController
  def get_all_tables
    data = Table.all
      render json: data.as_json(except: [:created_at, :updated_at])
  end

  def is_seated_true
    begin
      table = Table.find_by!(get_table_params)
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
      table = Table.find_by!(get_table_params)
      if table.update(is_seated: false)
        render json: { status: 'SUCCESS' }
      else
        render json: { status: 'ERROR', data: table.errors }
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
    end
  end
  def remove_table_relation
    begin
      table = Table.find_by!(get_table_params)
      booking = Booking.find_by!(get_booking_params)
      if table.bookings.include?(booking)
        table.bookings.delete(booking)
        render json: { status: 'SUCCESS' }
      else
        render json: { status: 'ERROR', message: '該当するテーブルと予約の関連付けがありませんでした。' }
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
    end
  end

  def add_table_relation
    begin
      table = Table.find_by!(get_table_params)
      booking = Booking.find_by!(get_booking_params)
      unless table.bookings.include?(booking)
        table.bookings << booking
        render json: { status: 'SUCCESS' }
      else
        render json: { status: 'ERROR', message: '該当するテーブルと予約の関連付けがすでにあります。' }
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
    end
  end

  private

  def get_table_params
    params.require(:table).permit(:id)
  end

  def get_booking_params
    params.require(:booking).permit(:id)
  end
end
