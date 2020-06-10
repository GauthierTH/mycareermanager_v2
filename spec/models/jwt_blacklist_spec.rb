# frozen_string_literal: true

# == Schema Information
#
# Table name: jwt_blacklist
#
#  id  :bigint           not null, primary key
#  jti :string           not null
#
# Indexes
#
#  index_jwt_blacklist_on_jti  (jti)
#
require 'rails_helper'

RSpec.describe JwtBlacklist, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
