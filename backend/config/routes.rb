Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  def api_resources(res)
    resources res, only: [:index, :create]
  end

  root to: 'application#index'
  api_resources :contacts
  api_resources :addresses
end
