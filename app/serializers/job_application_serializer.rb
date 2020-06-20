# frozen_string_literal: true

# == Schema Information
#
# Table name: job_applications
#
#  id              :bigint           not null, primary key
#  company_name    :string
#  job_description :text
#  job_offer_link  :string
#  note            :text
#  position        :string
#  priority        :integer          default("low"), not null
#  status          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id         :bigint           not null
#
# Indexes
#
#  index_job_applications_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :job_description, :job_offer_link, :note, :position, :status, :priority

  has_many :steps, serializer: StepSerializer
  has_many :contacts, serializer: ContactSerializer
end
