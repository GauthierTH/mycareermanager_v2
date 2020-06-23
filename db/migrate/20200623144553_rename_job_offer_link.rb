# frozen_string_literal: true

class RenameJobOfferLink < ActiveRecord::Migration[6.0]
  def change
    rename_column :job_applications, :job_offer_link, :job_offer_url
  end
end
