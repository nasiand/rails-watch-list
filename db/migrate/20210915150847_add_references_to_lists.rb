class AddReferencesToLists < ActiveRecord::Migration[6.0]
  def change
    add_reference :lists, :user, null: false, foreign_key: true
  end
end
