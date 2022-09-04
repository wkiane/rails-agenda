require "test_helper"

describe ApplicationController do ActionDispatch::IntegrationTest
  test "root should render 404" do
    get "/"
    assert_response :not_found
  end
end
