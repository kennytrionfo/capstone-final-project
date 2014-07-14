require 'rails_helper'

RSpec.describe UserGoal, :type => :model do

  describe 'associations' do
    it {should belong_to :user}
    it {should belong_to :goal}
  end
end
