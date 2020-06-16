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
FactoryBot.define do
  factory :step do
    category { Step.categories.keys.sample }
    date { DateTime.now }
    description { Faker::Lorem.sentences(number: 2) }
    is_done { false }
    job_application { create(:job_application) }
  end
end
