Rails.application.routes.draw do
  get '/api/get_tables', to: 'tables#get_tables'
  get '/', to: 'health_checks#index'
  get '/health_check', to: 'health_checks#index'
  get '/test_db', to: 'health_checks#test_db'
end
