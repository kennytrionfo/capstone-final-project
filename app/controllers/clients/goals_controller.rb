class Clients::GoalsController < Clients::BaseController

  def index
    user = User.find(current_user.id)
    @goals = user.goals.all
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
