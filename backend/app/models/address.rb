class Address < ApplicationRecord
  validates :zip_code, :street, :number, :neighborhood, :city, :state, presence: true
  before_save :format


  belongs_to :contact
  def as_json(options = {})
    super(options.merge({ except: [:created_at, :updated_at] }))
  end

  private
    def format
        self.zip_code = self.zip_code.tr('^0-9', '')
    end
end
