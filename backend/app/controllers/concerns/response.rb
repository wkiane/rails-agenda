module Response
    def paginated_response(object)
        render :json => {
            :current_page => object.current_page,
            :per_page => object.per_page,
            :total => object.total_entries,
            :records => object
        }
    end
  end