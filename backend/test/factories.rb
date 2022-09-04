FactoryBot.define do
    factory :contact do
      full_name { Faker::Name.name }
      email { Faker::Internet.email }
      identifier { Faker::Number.number(digits: 11).to_s }
      birthday { Faker::Date.birthday(min_age: 18, max_age: 65) }
    end

    factory :address do
      zip_code { Faker::Address.zip_code }
      street { Faker::Address.street_name }
      number { Faker::Address.building_number }
      neighborhood { Faker::Address.city }
      city { Faker::Address.city }
      state { Faker::Address.state }
    end
  end