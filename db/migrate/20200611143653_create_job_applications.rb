# frozen_string_literal: true

class CreateJobApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :job_applications do |t|
      t.string :company_name
      t.string :position
      t.string :status
      t.string :job_offer_link
      t.text :job_description
      t.text :note
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
