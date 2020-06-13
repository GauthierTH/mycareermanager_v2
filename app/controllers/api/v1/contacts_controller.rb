# frozen_string_literal: true

module Api
  module V1
    class ContactsController < ApplicationController
      before_action :set_contact, only: [:update, :destroy]
      before_action :check_user, except: [:index]

      def index
        @contacts = current_user.contacts

        render json: @contacts
      end

      def create
        @contact = Contact.new(contact_params)

        if @contact.save
          render json: @contact, status: :created, location: api_v1_contacts_url(@contact)
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

      def contact_params
        params.require(:contact).permit(:type, :description, :date, :is_done).merge(job_application: JobApplication.find(params[:job_application]))
      end

      def check_user
        render json: { error: 'Unauthorized' } if current_user != @contact.job_application.user
      end
    end
  end
end
