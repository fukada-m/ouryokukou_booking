class RemoveUserIdAndAddEmailToUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :user_id, :string
    add_column :users, :email, :string
  end
end
