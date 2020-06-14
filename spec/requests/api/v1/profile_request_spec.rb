# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Api::V1::Profiles", type: :request do
  before do
    @user = create(:user)
    sign_in(@user)
  end

  describe 'GET /api/v1/profile' do
    before do
      get "/api/v1/profile"
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns the right user' do
      expect(JSON.parse(response.body)['id']).to eq(@user.id)
    end
  end
end
