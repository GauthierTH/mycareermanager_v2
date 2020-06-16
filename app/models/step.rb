# frozen_string_literal: true

# == Schema Information
#
# Table name: steps
#
#  id                 :bigint           not null, primary key
#  category           :string
#  date               :datetime
#  description        :text
#  is_done            :boolean          default(FALSE), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  job_application_id :bigint           not null
#
# Indexes
#
#  index_steps_on_job_application_id  (job_application_id)
#
# Foreign Keys
#
#  fk_rails_...  (job_application_id => job_applications.id)
#
class Step < ApplicationRecord
  belongs_to :job_application

  enum category: {
    interview: 'interview',
    phone_call: 'phone_call',
    technical_test: 'technical_test',
    follow_up: 'follow_up',
    application_sent: 'application_sent'
  }.freeze
end
