class RenameAttributeFromStep < ActiveRecord::Migration[6.0]
  def change
    rename_column :steps, :type, :category
  end
end
