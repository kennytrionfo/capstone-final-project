require 'rails_helper'

RSpec.describe User, :type => :model do

  describe 'associations' do
    it {should have_many :goals}
    it {should have_many :user_goals}
  end
  
  describe 'validations' do
    it {should validate_presence_of :username}
    it {should validate_presence_of :email}
  end

  describe '#username' do
    before do
      @user = create(:user, username: 'marylouwho', email: 'this@rspec.com', password: 'password')
    end
    it 'returns marylouwho' do
      expect(@user.username).to eq 'marylouwho'
    end
  end

  describe '#email' do
    before do
      @user = create(:user, username: 'marylouwho', email: 'this@rspec.com', password: 'password')
    end
    it 'returns this@rspec.com' do
      expect(@user.email).to eq 'this@rspec.com'
    end
  end

  describe '#password' do
    before do
      @user = create(:user, username: 'marylouwho', email: 'this@rspec.com', password: 'password')
    end
    it 'returns this@rspec.com' do
      expect(@user.password).to eq 'password'
    end
  end
end
