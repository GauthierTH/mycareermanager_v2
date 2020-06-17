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
class JobApplication < ApplicationRecord
  belongs_to :user
  has_many :steps
  has_many :contacts

  enum status: {
    identified: 'identified',
    applied: 'applied',
    in_progress: 'in_progress'
  }.freeze

  enum priority: {
    low: 0,
    medium: 1,
    high: 2
  }.freeze
end
