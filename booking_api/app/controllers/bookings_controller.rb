class BookingsController < ApplicationController
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
end
