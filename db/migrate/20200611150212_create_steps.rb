# frozen_string_literal: true

class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :type
      t.text :description
      t.datetime :date
      t.boolean :is_done, null: false, default: false
      t.references :job_application, null: false, foreign_key: true

      t.timestamps
    end
  end
end
