Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root to: 'application#index'
  resources :contacts, only: [:index, :create, :show]
  resources :addresses, only: [:create]
end
