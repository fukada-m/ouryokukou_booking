Rails.application.routes.draw do
  get '/health_check', to: 'health_checks#index'
  get '/test_db', to: 'health_checks#test_db'
end
