class Clients::GoalsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @goals = Goal.all
  end

  def show
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
