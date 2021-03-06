# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

user = User.create(
  email: 'azerty789@gmail.com',
  password: 'azerty',
  username: 'azerty789'
)

3.times do
  identified_job_application = JobApplication.create(
    company_name: Faker::Company.name,
    job_description: Faker::Lorem.sentence(word_count: 50),
    job_offer_url: Faker::Internet.url,
    note: Faker::Lorem.sentence(word_count: 50),
    position: Faker::Company.profession,
    status: :identified,
    priority: JobApplication.priorities.keys.sample,
    user: user
  )

  applied_job_application = JobApplication.create(
    company_name: Faker::Company.name,
    job_description: Faker::Lorem.sentence(word_count: 50),
    job_offer_url: Faker::Internet.url,
    note: Faker::Lorem.sentence(word_count: 50),
    position: Faker::Company.profession,
    status: :applied,
    priority: JobApplication.priorities.keys.sample,
    user: user
  )

  Step.create(
    category: :send_application,
    date: Faker::Date.between(from: 30.days.ago, to: DateTime.now),
    description: Faker::Lorem.sentences(number: 2),
    is_done: true,
    job_application: applied_job_application
  )

  in_progress_job_application = JobApplication.create(
    company_name: Faker::Company.name,
    job_description: Faker::Lorem.sentence(word_count: 50),
    job_offer_url: Faker::Internet.url,
    note: Faker::Lorem.sentence(word_count: 50),
    position: Faker::Company.profession,
    status: :in_progress,
    priority: JobApplication.priorities.keys.sample,
    user: user
  )

  Step.create(
    category: :send_application,
    date: Faker::Date.between(from: 30.days.ago, to: 15.days.ago),
    description: Faker::Lorem.sentences(number: 2),
    is_done: true,
    job_application: in_progress_job_application
  )

  Step.create(
    category: Step.categories.keys.reject{ |category| category == 'send_application' }.sample,
    date: Faker::Date.between(from: 15.days.ago, to: DateTime.now),
    description: Faker::Lorem.sentences(number: 2),
    is_done: true,
    job_application: in_progress_job_application
  )

  Step.create(
    category: Step.categories.keys.reject{ |category| category == 'send_application' }.sample,
    date: Faker::Date.between(from: DateTime.now, to: DateTime.now + 30.days),
    description: Faker::Lorem.sentences(number: 2),
    is_done: false,
    job_application: in_progress_job_application
  )

  [identified_job_application, applied_job_application, in_progress_job_application].each do |job_application|
    Contact.create(
      email: Faker::Internet.email,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone_number: Faker::PhoneNumber.phone_number_with_country_code,
      position: Faker::Company.profession,
      job_application: job_application
    )
  end
end
