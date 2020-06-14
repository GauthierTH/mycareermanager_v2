# frozen_string_literal: true

module Api
  module V1
    class ContactsController < ApplicationController
      before_action :set_contact, only: [:update, :destroy]
      before_action :set_job_application, only: [:index, :create]
      before_action :check_user

      def index
        @contacts = @job_application.contacts

        render json: @contacts
      end

      def create
        @contact = Contact.new(contact_params.merge(job_application: @job_application))

        if @contact.save
          render json: @contact, status: :created, location: api_v1_job_application_contacts_path(@contact)
        else
          render json: @contact.errors, status: :unprocessable_entity
        end
      end

      def update
        if @contact.update(contact_params)
          render json: @contact
        else
          render json: @contact.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @contact.destroy
      end

      private

      def set_contact
        @contact = Contact.find(params[:id])
      end

      def set_job_application
        @job_application = JobApplication.find(params[:job_application_id])
      end

      def contact_params
        params.require(:contact).permit(:email, :first_name, :last_name, :phone_number, :position)
      end

      def check_user
        owner = @contact ? @contact.job_application.user : @job_application.user
        render json: { error: 'Unauthorized' }, status: :unauthorized if current_user != owner
      end
    end
  end
end
