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
require 'rails_helper'

RSpec.describe JobApplication, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
