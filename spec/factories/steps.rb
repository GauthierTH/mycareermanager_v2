# frozen_string_literal: true

# == Schema Information
#
# Table name: steps
#
#  id                 :bigint           not null, primary key
#  date               :datetime
#  description        :text
#  is_done            :boolean          default(FALSE), not null
#  type               :string
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
FactoryBot.define do
  factory :step do
  end
end
