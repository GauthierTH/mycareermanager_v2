# frozen_string_literal: true

class Api::V1::ProfileController < ApplicationController
  def show
    render json: current_user
  end
end
