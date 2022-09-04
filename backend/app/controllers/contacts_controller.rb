class ContactsController < ApplicationController
    def index
        query = params[:q]
        if query
            @contacts = Contact.where('full_name LIKE ?', "%#{query}%").paginate(page: params[:page], per_page: params[:per_page] || 20)
        else
            @contacts = Contact.paginate(page: params[:page], per_page: params[:per_page] || 20)
        end
        paginated_response(@contacts)
    end

    def show
        id = params[:id]
        contact = Contact.where(id: id).first
        render json: contact
    end

    def create
        contact = Contact.new(contact_params)
        if contact.valid?
            contact.save()
            render json: contact, status: 201
        else
            raise ActiveRecord::RecordInvalid.new(contact)
        end
    end

    protected

    def contact_params
        params.permit(:full_name, :email, :birthday, :identifier)
    end
end
