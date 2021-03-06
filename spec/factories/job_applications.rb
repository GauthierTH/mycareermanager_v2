# frozen_string_literal: true

# == Schema Information
#
# Table name: job_applications
#
#  id              :bigint           not null, primary key
#  company_name    :string
#  job_description :text
#  job_offer_url  :string
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
FactoryBot.define do
  factory :job_application do
    company_name { Faker::Company.name }
    job_description { Faker::Lorem.sentences(number: 5) }
    job_offer_url { Faker::Internet.url }
    note { Faker::Lorem.sentences(number: 5) }
    position { Faker::Company.profession }
    priority { JobApplication.priorities.keys.sample }
    status { JobApplication.statuses.keys.sample }
    user { create(:user) }
  end
end
