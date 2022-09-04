class Contact < ApplicationRecord
    validates :full_name, :email, :identifier, :birthday, presence: true
    validates :email, uniqueness: true
    validates :identifier, uniqueness: true

    attribute :addresses
    def addresses
        Address.where(contact_id: self.id)
    end
end
