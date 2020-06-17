# frozen_string_literal: true

class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :job_description, :job_offer_link, :note, :position, :status

  belongs_to :user, serializer: UserSerializer
  has_many :steps, serializer: StepSerializer
  has_many :contacts, serializer: ContactSerializer
end
