class RemoveUserIdAndAddEmailToUsers < ActiveRecord::Migration[7.0]
  def change
      create_table :users do |t|
      t.email :string
      t.password_digest :string
    end
  end
end
