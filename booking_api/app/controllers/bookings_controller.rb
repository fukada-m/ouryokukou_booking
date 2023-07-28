# frozen_string_literal: true

# 予約のCURD処理を行うコントローラー
class BookingsController < ApplicationController
  def create_booking
    booking = Booking.new(booking_params)
    if booking.save
        table_params[:id].each do |table_id|
          next if table_id.blank?
          table = Table.find(table_id)
          booking.tables << table unless booking.tables.include?(table)
        end
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: booking.errors, message: '予約の作成に失敗しました。' }
    end
  end

  def all_booking
    booking = Booking.includes(:tables, :booking_category)
    render json: booking.as_json(
      include: {
        booking_category: { except: %i[id created_at updated_at] },
        tables: { except: %i[created_at updated_at] }
      },
      except: %i[booking_category_id created_at updated_at]
    )
  end

  def update_booking
    booking = Booking.find_by!(id: booking_params[:id])
    if booking.update(booking_params)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: booking.errors }
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { status: 'ERROR', data: e.message, message: '該当する予約がありませんでした。' }
  end

  def delete_booking
    booking = Booking.find_by!(id: booking_params[:id])
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
end
