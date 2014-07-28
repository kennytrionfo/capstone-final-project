class Clients::GoalsController < Clients::BaseController

  def index
    @user = User.find(current_user.id)
    @goals = @user.goals.order(frequency: :asc)
  end

  def show
  end

  def create
  end

  def edit
  end

  # PATCH /clients/goals/:id
  # JSON API
  def update
    goal = Goal.find params[:id]
    if goal.update(goal_params)
      render json: goal, status: 200
    else
      render json: goal.errors.full_messages, status: 422
    end
  end

  def destroy
  end


  private

  def goal_params
    params.require(:goal).permit(:frequency, :weekly_points_goal, :weekly_results,)
  end

end
