class Contact < ApplicationRecord
    default_scope { order(created_at: :desc) }
    before_save :format

    validates :full_name, :email, :identifier, :birthday, presence: true
    validates :email, uniqueness: true
    validates :identifier, uniqueness: true


    attribute :addresses
    def addresses
        Address.where(contact_id: self.id)
    end

    def as_json(options = {})
        super(options.merge({ except: [:created_at, :updated_at, :addresses] }))
    end

    private
    def format
        self.identifier = self.identifier.tr('^0-9', '')
    end
end
