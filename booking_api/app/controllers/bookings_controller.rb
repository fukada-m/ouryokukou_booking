class BookingsController < ApplicationController
  def create_booking
    booking = Booking.new(get_body_params)
    if booking.save
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: booking.errors }
    end
  end

  def get_all_booking
    all_booking = Booking.all.map do |booking|
      {
        date: booking.date,
        name: booking.name,
        number_of_adults: booking.number_of_adults,
        number_of_children: booking.number_of_children,
        note: booking.note,
        booking_category_name: booking.booking_category.name,
      }
    end
    render json: all_booking
  end

  def get_booking
    begin
      booking = Booking.find_by!(id: get_body_params[:id])
      render json: booking
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当する予約がありませんでした。' }
    end
  end

  def update_booking
    begin
      booking = Booking.find_by!(id: get_body_params[:id])
      if booking.update(get_body_params)
        render json: { status: 'SUCCESS' }
      else
        render json: { status: 'ERROR', data: booking.errors }
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当する予約がありませんでした。' }
    end
  end

  def delete_booking
    begin
      booking = Booking.find_by!(id: get_body_params[:id])
      if booking.destroy
        render json: { status: 'SUCCESS' }
      else
        render json: { status: 'ERROR', data: booking.errors }
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当する予約がありませんでした。' }
    end
  end

  private

  def get_body_params
    params.require(:booking).permit(:id, :date,:name,
      :number_of_adults, :number_of_children, :note, :booking_category_id)
  end

end
