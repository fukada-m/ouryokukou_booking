# frozen_string_literal: true

# 予約とテーブルを紐付けるためのコントローラー
class TablesController < ApplicationController
  def index
    data = Table.all
    render json: data.as_json(except: %i[created_at updated_at])
  end

  def seated_true
    table = Table.find_by!(table_params)
    if table.update(is_seated: true)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: table.errors }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
  end

  def seated_false
    table = Table.find_by!(table_params)
    if table.update(is_seated: false)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: table.errors }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
  end

  def remove_booking_relation
    table = Table.find_by!(table_params)
    booking = Booking.find_by!(booking_params)
    if table.bookings.include?(booking)
      table.bookings.delete(booking)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', message: '該当するテーブルと予約の関連付けがありませんでした。' }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当するテーブルがありませんでした。' }
  end

  def add_booking_relation
    table = Table.find_by!(table_params)
    booking = Booking.find_by!(booking_params)
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

  def table_params
    params.require(:table).permit(:id)
  end

  def booking_params
    params.require(:booking).permit(:id)
  end
end
