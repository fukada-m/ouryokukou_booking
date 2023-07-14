class BookingsController < ApplicationController
  def create_booking
    booking = Booking.new(get_booking_params)
    if booking.save
      get_table_params[:id].each do |table_id|
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
  booking = Booking.includes(:tables, :booking_category)
  render json: booking.as_json(
    include: {
      booking_category: {
        except: [:id, :created_at, :updated_at]
      },
      tables: {
        except: [:created_at, :updated_at]
      },
    },
    except: [:booking_category_id,:created_at, :updated_at])
  end

  def update_booking
    begin
      booking = Booking.find_by!(id: get_booking_params[:id])
      if booking.update(get_booking_params)
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
      booking = Booking.find_by!(id: get_booking_params[:id])
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

  def get_booking_params
    params.require(:booking).permit(:id, :date, :week, :time, :name,
      :number_of_adults, :number_of_children, :note, :booking_category_id)
  end

  def get_table_params
    params.require(:table).permit(id: [])
  end

end
