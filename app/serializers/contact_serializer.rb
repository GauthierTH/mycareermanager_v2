# frozen_string_literal: true

# == Schema Information
#
# Table name: contacts
#
#  id                 :bigint           not null, primary key
#  email              :string
#  first_name         :string
#  last_name          :string
#  phone_number       :string
#  position           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  job_application_id :bigint           not null
#
# Indexes
#
#  index_contacts_on_job_application_id  (job_application_id)
#
# Foreign Keys
#
#  fk_rails_...  (job_application_id => job_applications.id)
#
class ContactSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :position

  belongs_to :job_application, serializer: JobApplicationSerializer
end
