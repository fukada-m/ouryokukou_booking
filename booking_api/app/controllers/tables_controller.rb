# frozen_string_literal: true

class TablesController < ApplicationController
  def get_all_tables
    data = Table.all
    render json: data.as_json(except: %i[created_at updated_at])
  end

  def is_seated_true
    table = Table.find_by!(get_table_params)
    if table.update(is_seated: true)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: table.errors }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
  end

  def is_seated_false
    table = Table.find_by!(get_table_params)
    if table.update(is_seated: false)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: table.errors }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
  end

  def remove_table_relation
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

  def add_table_relation
    table = Table.find_by!(get_table_params)
    booking = Booking.find_by!(get_booking_params)
    if table.bookings.include?(booking)
      render json: { status: 'ERROR', message: '該当するテーブルと予約の関連付けがすでにあります。' }
    else
      table.bookings << booking
      render json: { status: 'SUCCESS' }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
  end

  private

  def get_table_params
    params.require(:table).permit(:id)
  end

  def get_booking_params
    params.require(:booking).permit(:id)
  end
end
