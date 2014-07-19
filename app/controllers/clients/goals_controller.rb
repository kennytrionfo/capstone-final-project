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
    goal = Goal.find params[:id]
    #psuedo - update the freq -
    #goals frequency = the new selected
    


  end

  def destroy
  end

end
