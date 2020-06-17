# frozen_string_literal: true

class ContactSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :position

  belongs_to :job_application, serializer: JobApplicationSerializer
end
