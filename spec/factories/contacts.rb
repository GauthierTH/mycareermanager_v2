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
FactoryBot.define do
  factory :contact do
    email { Faker::Internet.email }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    phone_number { Faker::PhoneNumber.phone_number_with_country_code }
    position { Faker::Company.profession }
    job_application { create(:job_application) }
  end
end
