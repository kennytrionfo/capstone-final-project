require 'rails_helper'

RSpec.describe Clients::GoalsController, :type => :controller do

  describe '#index' do

    before do
      @goal1 = create(:goal)
      @goal2 = create(:goal)
      @goal3 = create(:goal)
      @goal4 = create(:goal)
      @goal5 = create(:goal)

      sign_in create(User, password: 'password')

    end

    it 'displays a collection of goals' do
      get :index
      expect(response).to be_success
      expect(assigns(:goals).count).to eq 5
      expect(response).to render_template('index')

    end
  end


  # describe '#update' , :focus do
  #   before do
  #     @goal = create(:goal, weekly_results: 0)
  #   end
  #
  #   context 'when the update is successful' do
  #     it 'updates the weekly_results from 0 to 20' do
  #       patch :update, id: @goal.id, goal: {weekly_results: 20}
  #       expect(@goal.reload.weekly_results).to eq 20
  #     end
  #   end
  #   context 'when the update fails' do
  #     it 'fails to update the weekly_results from 0 to 20' do
  #       patch :update, id: @goal.id, goal: {weekly_results: nil}
  #       expect(@goal.reload.weekly_results).to_not be_nil
  #     end
  #   end
  # end


end
