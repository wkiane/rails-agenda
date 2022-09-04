require "test_helper"

describe AddressesController do

  test "should create address" do
    @contact = create(:contact)
    params = attributes_for(:address, contact_id: @contact.id)
    post "/addresses", params: params
    assert_response :created
  end

  test "should not create address without contact_id" do
    assert_no_changes('Address.count') do
      params = attributes_for(:address)
      post "/addresses", params: params
      assert_response :unprocessable_entity
    end
  end

  test "should not create invalid address" do
    assert_no_changes('Address.count') do
      post "/addresses", params: {}
      assert_response :unprocessable_entity
    end
  end
end
