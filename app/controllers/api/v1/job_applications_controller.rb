# frozen_string_literal: true

module Api
  module V1
    class JobApplicationsController < ApplicationController
      before_action :set_job_application, only: [:show, :update, :destroy]
      before_action :check_user, except: [:index, :create]

      def index
        @job_applications = current_user.job_applications.order(priority: :desc)

        render json: @job_applications
      end

      def show
        render json: @job_application
      end

      def create
        @job_application = JobApplication.new(job_application_params)

        if @job_application.save
          render json: @job_application, status: :created, location: api_v1_job_applications_path(@job_application)
        else
          render json: @job_application.errors, status: :unprocessable_entity
        end
      end

      def update
        if @job_application.update(job_application_params)
          render json: @job_application
        else
          render json: @job_application.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @job_application.destroy
      end

      private

      def set_job_application
        @job_application = JobApplication.find(params[:id])
      end

      def job_application_params
        params.require(:job_application).permit(:company_name, :position, :status, :job_offer_link, :job_description, :note, :priority).merge(user: current_user)
      end

      def check_user
        render json: { error: 'Unauthorized' }, status: :unauthorized if current_user != @job_application.user
      end
    end
  end
end
