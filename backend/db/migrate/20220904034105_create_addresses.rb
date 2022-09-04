class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.belongs_to :contact, null: false, foreign_key: true
      t.string :zip_code
      t.string :street
      t.integer :number
      t.string :neighborhood
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
