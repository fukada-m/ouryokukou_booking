class BookingsController < ApplicationController
  def create_booking
    booking = Booking.new(get_body_booking_params)
    if booking.save
      get_body_table_params[:id].each do |table_id|
        table = Table.find(table_id)
        unless booking.tables.include?(table)
          booking.tables << table
        end
      end
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR', data: booking.errors, message: '予約の作成に失敗しました。' }
    end
  end

  def get_all_booking
    all_bookings = Booking.all.map do |booking|
      tables = booking.tables.map { |table| table.name }
        {
          id: booking.id,
          date: booking.date,
          name: booking.name,
          number_of_adults: booking.number_of_adults,
          number_of_children: booking.number_of_children,
          note: booking.note,
          table: tables,
          booking_category: booking.booking_category.name
        }
    end
    render json: { status: 'SUCCESS', data: all_bookings }
  end

  def get_booking
    begin
      booking = Booking.find_by!(id: get_body_booking_params[:id])
      tables = booking.tables.map { |table| table.name }
      render json: {
        id: booking.id,
        date: booking.date,
        name: booking.name,
        number_of_adults: booking.number_of_adults,
        number_of_children: booking.number_of_children,
        note: booking.note,
        table: tables,
        booking_category: booking.booking_category.name
      }
    rescue ActiveRecord::RecordNotFound => e
      render json: { status: 'ERROR', data: e.message, message: '該当する予約がありませんでした。' }
    end
  end

  # 暫定版
  def update_booking
    begin
      booking = Booking.find_by!(id: get_body_booking_params[:id])
      if booking.update(get_body_booking_params)
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
      booking = Booking.find_by!(id: get_body_booking_params[:id])
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

  def get_body_booking_params
    params.require(:booking).permit(:id, :date,:name,
      :number_of_adults, :number_of_children, :note, :booking_category_id)
  end

  def get_body_table_params
    params.require(:table).permit(id: [])
  end

end
