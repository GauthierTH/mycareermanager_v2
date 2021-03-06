# frozen_string_literal: true

RSpec.describe 'POST /signup', type: :request do
  let(:url) { '/signup' }
  let(:params) do
    {
      user: {
        username: Faker::Name.first_name,
        email: Faker::Internet.email,
        password: 'password'
      }
    }
  end

  context 'when user is unauthenticated' do
    before { post url, params: params }

    it 'returns 200' do
      expect(response.status).to eq 200
    end

    it 'returns a new user' do
      user = JSON.parse(response.body)
      expect(user).to include('id', 'email')
    end
  end

  context 'when user already exists' do
    before do
      create(:user, email: params[:user][:email])
      post url, params: params
    end

    it 'returns bad request status' do
      expect(response.status).to eq 400
    end
  end
end
