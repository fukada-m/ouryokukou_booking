Rails.application.routes.draw do
  post '/api/create_booking', to: 'bookings#create_booking'
  get '/api/get_all_booking', to: 'bookings#get_all_booking'
  put '/api/update_booking', to: 'bookings#update_booking'
  delete '/api/delete_booking', to: 'bookings#delete_booking'

  get '/api/get_all_tables', to: 'tables#get_all_tables'
  put '/api/is_seated_true', to: 'tables#is_seated_true'
  put '/api/is_seated_false', to: 'tables#is_seated_false'

  get '/api/get_all_categories', to: 'booking_categories#get_all_categories'

  get '/', to: 'health_checks#index'
  get '/health_check', to: 'health_checks#index'
  get '/test_db', to: 'health_checks#test_db'
end
