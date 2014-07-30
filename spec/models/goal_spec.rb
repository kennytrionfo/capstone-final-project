require 'rails_helper'

RSpec.describe Goal, :type => :model do

  describe 'percentage' do
    before do
      @goal = Goal.create(weekly_points_goal: 100, weekly_results: 50)
    end
    it 'calculates the percentage' do
      expect(@goal.percentage).to eq 50
    end
  end

end
