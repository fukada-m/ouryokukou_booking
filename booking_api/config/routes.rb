Rails.application.routes.draw do
  post '/api/create_booking', to: 'bookings#create'
  get '/api/get_all_booking', to: 'bookings#index'
  put '/api/edit_booking', to: 'bookings#edit'
  delete '/api/delete_booking', to: 'bookings#destroy'

  get '/api/get_all_tables', to: 'tables#index'
  put '/api/is_seated_true', to: 'tables#seated_true'
  put '/api/is_seated_false', to: 'tables#seated_false'
  put '/api/remove_table_relation', to: 'tables#remove_booking_relation'
  put '/api/add_table_relation', to: 'tables#add_booking_relation'

  get '/api/get_all_categories', to: 'booking_categories#index'

  get '/', to: 'health_checks#index'
  get '/health_check', to: 'health_checks#index'
  get '/test_db', to: 'health_checks#test_db'
end
