class AddressesController < ApplicationController
    def create
        address = Address.new(address_params)
        if address.valid?
            address.save()
            render json: address, status: 201
        else
            raise ActiveRecord::RecordInvalid.new(address)
        end
    end

    protected

    def address_params
        params.permit(:zip_code, :street, :number, :neighborhood, :city, :state, :contact_id)
    end
end
