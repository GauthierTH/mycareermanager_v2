# frozen_string_literal: true

class AddPriorityToJobApplication < ActiveRecord::Migration[6.0]
  def change
    add_column :job_applications, :priority, :integer, null: false, default: 0
  end
end
