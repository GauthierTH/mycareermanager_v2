# frozen_string_literal: true

module Api
  module V1
    class StepsController < ApplicationController
      before_action :set_step, only: [:update, :destroy]
      before_action :set_job_application, only: [:index, :create]
      before_action :check_user, except: [:next_steps]

      def index
        @steps = @job_application.steps
        render json: @steps
      end

      def create
        @step = Step.new(step_params.merge(job_application: @job_application))

        if @step.save
          render json: @step, status: :created, location: api_v1_job_application_steps_path(@step)
        else
          render json: @step.errors, status: :unprocessable_entity
        end
      end

      def update
        if @step.update(step_params)
          render json: @step
        else
          render json: @step.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @step.destroy
      end

      def next_steps
        @next_steps = current_user.steps.next_steps
        render json: @next_steps
      end

      private

      def set_step
        @step = Step.find(params[:id])
      end

      def set_job_application
        @job_application = JobApplication.find(params[:job_application_id])
      end

      def step_params
        params.require(:step).permit(:category, :description, :date, :is_done)
      end

      def check_user
        owner = @step ? @step.job_application.user : @job_application.user
        render json: { error: 'Unauthorized' }, status: :unauthorized if current_user != owner
      end
    end
  end
end
