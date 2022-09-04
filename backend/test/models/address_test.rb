require "test_helper"

describe Address do
  setup do
    @contact = create(:contact, full_name: 'João Fernando', identifier: '17734503040', email: 'teste@gmail.com', birthday: '1990/02/02')
  end

  test "should save valid address" do
    address = Address.new(contact_id: @contact.id, zip_code: '23013010', street: 'Rua Tramontina', number: 25, neighborhood: 'Tijuquinha', city: 'Rio de Janeiro', state: 'RJ')
    address.save
    addresses = Address.all
    assert_equal(addresses.length, 1) 
  end

  test "should not save address without contact_id" do
    address = Address.new(zip_code: '23013010', street: 'Rua Tramontina', number: 25, neighborhood: 'Tijuquinha', city: 'Rio de Janeiro', state: 'RJ')
    address.valid?
    assert_includes(address.errors[:contact], "must exist")
  end


  test "should not save invalid address" do
    address = Address.new
    address.valid?

    assert_includes(address.errors[:zip_code], "can't be blank")
    assert_includes(address.errors[:street], "can't be blank")
    assert_includes(address.errors[:number], "can't be blank")
    assert_includes(address.errors[:neighborhood], "can't be blank")
    assert_includes(address.errors[:city], "can't be blank")
    assert_includes(address.errors[:state], "can't be blank")
  end
end
