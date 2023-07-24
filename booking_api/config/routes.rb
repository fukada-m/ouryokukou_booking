Rails.application.routes.draw do
  post '/api/create_booking', to: 'bookings#create_booking'
  get '/api/get_all_booking', to: 'bookings#all_booking'
  put '/api/update_booking', to: 'bookings#update_booking'
  delete '/api/delete_booking', to: 'bookings#delete_booking'

  get '/api/get_all_tables', to: 'tables#all_tables'
  put '/api/is_seated_true', to: 'tables#seated_true?'
  put '/api/is_seated_false', to: 'tables#seated_false?'
  put '/api/remove_table_relation', to: 'tables#remove_table_relation'
  put '/api/add_table_relation', to: 'tables#add_table_relation'

  get '/api/get_all_categories', to: 'booking_categories#all_categories'

  get '/', to: 'health_checks#index'
  get '/health_check', to: 'health_checks#index'
  get '/test_db', to: 'health_checks#test_db'
end
