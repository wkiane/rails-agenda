require "test_helper"

describe Contact do ActiveSupport::TestCase
  test "should save valid contact" do
    contact = Contact.new(full_name: 'João Fernando', identifier: '17734503040', email: 'teste@gmail.com', birthday: '1990/02/02')
    contact.save

    contacts = Contact.all
    assert_equal(contacts.length, 1) 
  end

  test "should not save invalid contact" do
    contact = Contact.new
    contact.valid?
    assert_includes(contact.errors[:full_name], "can't be blank")
    assert_includes(contact.errors[:email], "can't be blank")
    assert_includes(contact.errors[:identifier], "can't be blank")
    assert_includes(contact.errors[:birthday], "can't be blank")
  end

  test "should not save duplicated email or duplicated identifier" do
    contact = Contact.new(full_name: 'João Fernando', identifier: '17734503040', email: 'teste@gmail.com', birthday: '1990/02/02')
    contact.save

    contact2 = Contact.new(full_name: 'João Fernando', identifier: '17734503040', email: 'teste@gmail.com', birthday: '1990/02/02')
    contact2.valid?
    assert_includes(contact2.errors[:email], "has already been taken")
    assert_includes(contact2.errors[:identifier], "has already been taken")
  end
end
