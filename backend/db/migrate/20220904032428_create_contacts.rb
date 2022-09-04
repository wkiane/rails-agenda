class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :full_name
      t.string :identifier, index: { unique: true, name: 'unique_identifier'}
      t.string :email, index: { unique: true, name: 'unique_emails'}
      t.date :birthday
      t.timestamps
    end
  end
end
