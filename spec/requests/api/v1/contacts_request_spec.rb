# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Api::V1::Contacts", type: :request do
  before do
    @job_application = create(:job_application)
    sign_in(@job_application.user)
  end

  describe 'POST /api/v1/job_applications/:job_application_id/contacts' do
    before do
      post "/api/v1/job_applications/#{@job_application.id}/contacts",
           params: {
             contact: {
               email: 'gogo.gaga@gmail.com',
               first_name: 'gogo',
               last_name: 'gaga',
               phone_number: '0123456789',
               position: 'seated'
             }
           }
    end

    it 'returns a created status' do
      expect(response).to have_http_status(:created)
    end

    it 'returns job_application with correct attributes' do
      expect(JSON.parse(response.body)['email']).to eq('gogo.gaga@gmail.com')
      expect(JSON.parse(response.body)['first_name']).to eq('gogo')
      expect(JSON.parse(response.body)['last_name']).to eq('gaga')
      expect(JSON.parse(response.body)['phone_number']).to eq('0123456789')
      expect(JSON.parse(response.body)['position']).to eq('seated')
    end
  end

  describe 'PUT /api/v1/contacts/:id' do
    before do
      @contact = create(:contact, job_application: @job_application)
      put "/api/v1/contacts/#{@contact.id}",
          params: {
            contact: {
              first_name: 'gogo'
            }
          }
      @contact.reload
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns updated contact' do
      expect(@contact.first_name).to eq('gogo')
    end
  end

  describe 'PATCH /api/v1/contacts/:id' do
    before do
      @contact = create(:contact, job_application: @job_application)
      patch "/api/v1/contacts/#{@contact.id}",
            params: {
              contact: {
                first_name: 'gogo'
              }
            }
      @contact.reload
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns updated contact' do
      expect(@contact.first_name).to eq('gogo')
    end
  end

  describe 'DELETE /api/v1/contacts/:id' do
    before do
      @contact = create(:contact, job_application: @job_application)
      delete "/api/v1/contacts/#{@contact.id}"
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(:no_content)
    end

    it 'deletes job_application' do
      expect(@job_application.contacts).not_to include(@contact)
    end
  end
end
