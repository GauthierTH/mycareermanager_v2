# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Api::V1::Steps", type: :request do
  before do
    @job_application = create(:job_application)
    sign_in(@job_application.user)
  end

  describe 'GET /api/v1/job_applications/:job_application_id/steps' do
    before do
      create_list(:step, 5, job_application: @job_application)
      create_list(:step, 10)
      get "/api/v1/job_applications/#{@job_application.id}/steps"
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns only the steps of the job_application' do
      expect(JSON.parse(response.body).size).to eq(5)
    end
  end

  describe 'POST /api/v1/job_applications/:job_application_id/steps' do
    before do
      @datetime = DateTime.now
      post "/api/v1/job_applications/#{@job_application.id}/steps",
           params: {
             step: {
               category: 'interview',
               date: @datetime,
               description: 'with Mokoko',
               is_done: false
             }
           }
    end

    it 'returns a created status' do
      expect(response).to have_http_status(:created)
    end

    it 'returns job_application with correct attributes' do
      expect(JSON.parse(response.body)['category']).to eq('interview')
      expect(DateTime.parse(JSON.parse(response.body)['date']).to_i).to eq(@datetime.to_i)
      expect(JSON.parse(response.body)['description']).to eq('with Mokoko')
      expect(JSON.parse(response.body)['is_done']).to eq(false)
      expect(JSON.parse(response.body)['job_application_id']).to eq(@job_application.id)
    end
  end

  describe 'PUT /api/v1/steps/:id' do
    before do
      @step = create(:step, job_application: @job_application, category: 'phone call')
      put "/api/v1/steps/#{@step.id}",
          params: {
            step: {
              category: 'interview'
            }
          }
      @step.reload
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns updated step' do
      expect(@step.category).to eq('interview')
    end
  end

  describe 'PATCH /api/v1/steps/:id' do
    before do
      @step = create(:step, job_application: @job_application, category: 'phone call')
      patch "/api/v1/steps/#{@step.id}",
            params: {
              step: {
                category: 'interview'
              }
            }
      @step.reload
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns updated step' do
      expect(@step.category).to eq('interview')
    end
  end

  describe 'DELETE /api/v1/steps/:id' do
    before do
      @step = create(:step, job_application: @job_application)
      delete "/api/v1/steps/#{@step.id}"
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(:no_content)
    end

    it 'deletes job_application' do
      expect(@job_application.steps).not_to include(@step)
    end
  end

  describe 'GET /api/v1/next_steps' do
    before do
      other_job_application = create(:job_application, user: @job_application.user)
      create_list(:step, 2, job_application: @job_application, is_done: false)
      create_list(:step, 3, job_application: @job_application, is_done: true)
      create_list(:step, 4, job_application: other_job_application, is_done: false)
      create_list(:step, 5, job_application: other_job_application, is_done: true)
      get "/api/v1/next_steps"
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns (all) the steps of the current user that are not done' do
      expect(JSON.parse(response.body).size).to eq(6)
    end
  end
end
