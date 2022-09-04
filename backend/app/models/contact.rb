class Contact < ApplicationRecord
    validates :full_name, :email, :identifier, :birthday, presence: true
    validates :email, uniqueness: true
    validates :identifier, uniqueness: true
end
