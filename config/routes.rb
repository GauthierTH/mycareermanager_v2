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

      resources :job_applications, except: [:edit, :new] do
        resources :steps, except: [:show, :edit, :new]
        resources :contacts, except: [:show, :edit, :new]
      end
    end
  end
end
