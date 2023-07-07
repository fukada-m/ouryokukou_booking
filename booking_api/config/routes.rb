Rails.application.routes.draw do
  post '/api/create_booking', to: 'bookings#create_booking'
  get '/api/get_all_booking', to: 'bookings#get_all_booking'
  get '/api/get_booking', to: 'bookings#get_booking'
  put '/api/upeate_booking', to: 'bookings#update_booking'
  delete '/api/delete_booking', to: 'bookings#delete_booking'

  get '/api/get_all_categories', to: 'booking_categories#get_all_categories'
  get '/api/get_all_tables', to: 'tables#get_all_tables'

  get '/', to: 'health_checks#index'
  get '/health_check', to: 'health_checks#index'
  get '/test_db', to: 'health_checks#test_db'
end
