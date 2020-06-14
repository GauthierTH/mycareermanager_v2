# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Api::V1::JobApplications", type: :request do
  before do
    @user = create(:user)
    sign_in(@user)
  end

  describe 'GET /api/v1/job_applications' do
    before do
      create_list(:job_application, 5, user: @user)
      create_list(:job_application, 10)
      get '/api/v1/job_applications'
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns only the job_applications of the current user' do
      expect(JSON.parse(response.body).size).to eq(5)
    end
  end

  describe 'GET /api/v1/job_applications/:id' do
    before do
      @job_application = create(:job_application, user: @user)
      get "/api/v1/job_applications/#{@job_application.id}"
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns the right job_application' do
      expect(JSON.parse(response.body)['id']).to eq(@job_application.id)
    end
  end

  describe 'POST /api/v1/job_applications' do
    before do
      post '/api/v1/job_applications',
           params: {
             job_application: {
               company_name: 'Facebook',
               position: 'CEO',
               status: 'identified',
               job_offer_link: 'https://www.facebook.com',
               job_description: 'easy',
               note: 'minimum wage'
             }
           }
    end

    it 'returns a created status' do
      expect(response).to have_http_status(:created)
    end

    it 'returns job_application with correct attributes' do
      expect(JSON.parse(response.body)['company_name']).to eq('Facebook')
      expect(JSON.parse(response.body)['position']).to eq('CEO')
      expect(JSON.parse(response.body)['status']).to eq('identified')
      expect(JSON.parse(response.body)['job_offer_link']).to eq('https://www.facebook.com')
      expect(JSON.parse(response.body)['job_description']).to eq('easy')
      expect(JSON.parse(response.body)['note']).to eq('minimum wage')
      expect(JSON.parse(response.body)['user_id']).to eq(@user.id)
    end
  end

  describe 'PUT /api/v1/job_applications/:id' do
    before do
      @job_application = create(:job_application, user: @user)
      put "/api/v1/job_applications/#{@job_application.id}",
          params: {
            job_application: {
              company_name: 'Facebook'
            }
          }
      @job_application.reload
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns updated job_application' do
      expect(@job_application.company_name).to eq('Facebook')
    end
  end

  describe 'PATCH /api/v1/job_applications/:id' do
    before do
      @job_application = create(:job_application, user: @user)
      patch "/api/v1/job_applications/#{@job_application.id}",
            params: {
              job_application: {
                company_name: 'Facebook'
              }
            }
      @job_application.reload
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns updated job_application' do
      expect(@job_application.company_name).to eq('Facebook')
    end
  end

  describe 'DELETE /api/v1/job_applications/:id' do
    before do
      @job_application = create(:job_application, user: @user)
      delete "/api/v1/job_applications/#{@job_application.id}"
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(:no_content)
    end

    it 'deletes job_application' do
      expect(@user.job_applications).not_to include(@job_application)
    end
  end
end
