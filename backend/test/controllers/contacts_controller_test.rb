require "test_helper"

describe ContactsController do
  test "should list contacts paginated" do
    create_list(:contact, 40)
    get "/contacts"
    assert_response :success
    body = JSON.parse(response.body)
    assert_equal(body['records'].length, 20)
  end

  test "should return page 2" do
    create_list(:contact, 40)
    get "/contacts?page=2"

    body = JSON.parse(response.body)

    first_contact_id = body['records'][0]['id']
    assert_equal(first_contact_id, 21)
  end

  test "should return searched contacts" do
    contact = create(:contact, full_name: 'Erik')
    contact = create(:contact, full_name: 'Eriko')
    contact = create(:contact, full_name: 'Allan')
    contact = create(:contact, full_name: 'Ellen')

    get "/contacts?q=Eri"
    body = JSON.parse(response.body)
    assert_equal(body['records'].length, 2)
  end

  test "should return contact details with addresses" do
    contact = create(:contact)
    create(:address, contact_id: contact.id)
    create(:address, contact_id: contact.id)

    get "/contacts/#{contact.id}"
    body = JSON.parse(response.body)
    assert_equal(body['addresses'].length, 2)
  end

  test "should create contact" do
    assert_difference('Contact.count') do
      post "/contacts", params: {full_name: 'João Fernando', identifier: '17734503040', email: 'teste@gmail.com', birthday: '1990/02/02'}
      assert_response :created
    end
  end

  test "should not create invalid contact" do
    assert_no_changes('Contact.count') do
      post "/contacts", params: {full_name: 'João Fernando'}
      assert_response :unprocessable_entity
    end
  end
end
