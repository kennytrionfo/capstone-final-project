# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    username { Faker::Name.name }
    #password needs to be in here. how do?
  end
end
