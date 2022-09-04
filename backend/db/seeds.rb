# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


require 'factory_bot'
include FactoryBot::Syntax::Methods

contacts = create_list(:contact, 80)
addresses = create_list(:address, 5, contact_id: contacts[0]['id'])
addresses = create_list(:address, 3, contact_id: contacts[1]['id'])
addresses = create_list(:address, 1, contact_id: contacts[2]['id'])