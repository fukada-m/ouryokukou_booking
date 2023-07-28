# frozen_string_literal: true

# 予約のCURD処理を行うコントローラー
class BookingsController < ApplicationController
  def create
    booking = Booking.new(booking_params)
    if booking.save
      link_table(booking)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: booking.errors, message: '予約の作成に失敗しました。' }
    end
  end

  def index
    booking = Booking.includes(:tables, :booking_category)
    render json: booking.as_json(
      include: {
        booking_category: { except: %i[id created_at updated_at] },
        tables: { except: %i[created_at updated_at] }
      },
      except: %i[booking_category_id created_at updated_at]
    )
  end

  def edit
    booking = Booking.find(booking_params[:id])
    if booking.update(booking_params)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: booking.errors }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当する予約がありませんでした。' }
  end

  def destroy
    booking = Booking.find(booking_params[:id])
    if booking.destroy
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: booking.errors }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当する予約がありませんでした。' }
  end

  private

  def booking_params
    params.require(:booking).permit(:id, :date, :week, :time, :name,
                                    :number_of_adults, :number_of_children, :note, :booking_category_id)
  end

  def table_params
    params.require(:table).permit(id: [])
  end

  def link_table(booking)
    table_params[:id].each do |table_id|
      next if table_id.blank?

      table = Table.find(table_id)
      booking.tables << table unless booking.tables.include?(table)
    end
  end
end
