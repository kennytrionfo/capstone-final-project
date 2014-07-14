class UserController < ApplicationController
  def user_params
    params.require(:user).permit(:name, :description, user_goal_attributes: [:id, :description, :done, :_destroy])
  end

end
