# frozen_string_literal: true

module Api
  module V1
    class StepsController < ApplicationController
      before_action :set_step, only: [:update, :destroy]
      before_action :check_user

      def index
        @steps = current_user.steps

        render json: @steps
      end

      def create
        @step = Step.new(step_params)

        if @step.save
          render json: @step, status: :created, location: api_v1_steps_url(@step)
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

      private

      def set_step
        @step = Step.find(params[:id])
      end

      def step_params
        params.require(:step).permit(:type, :description, :date, :is_done).merge(job_application: JobApplication.find(params[:job_application]))
      end

      def check_user
        render json: { error: 'Unauthorized' } if current_user != @step.job_application.user
      end
    end
  end
end
