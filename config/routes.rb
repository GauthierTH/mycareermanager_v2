# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json },
                     path: '',
                     path_names: {
                       sign_in: 'login',
                       sign_out: 'logout',
                       registration: 'signup'
                     },
                     controllers: {
                       sessions: 'sessions',
                       registrations: 'registrations'
                     }

  namespace :api do
    namespace :v1 do
      get 'profile', to: 'profile#show'

      resources :steps, only: [:update, :destroy]
      resources :contacts, only: [:update, :destroy]
      resources :job_applications, except: [:edit, :new] do
        resources :steps, only: [:index, :create]
        resources :contacts, only: [:index, :create]
      end
    end
  end
end
