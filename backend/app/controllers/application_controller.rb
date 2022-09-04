class ApplicationController < ActionController::API
    include Response
    include ExceptionHandler

    def index
        render json: {'error': 'Cannot get'}, status: 404
    end
end
