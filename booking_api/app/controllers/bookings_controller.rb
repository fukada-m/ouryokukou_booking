class BookingsController < ApplicationController
  def get_all_booking
    bookings = Book.all.map do |book|
      {
        date: book.date,
        name: book.name,
        number: book.number,
        note: book.note,
        booling_category: book.booking_category.name
      }
    end
    render json: bookings
  end
end


