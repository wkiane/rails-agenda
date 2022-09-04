class Address < ApplicationRecord
  validates :zip_code, :street, :number, :neighborhood, :city, :state, presence: true

  belongs_to :contact
end
