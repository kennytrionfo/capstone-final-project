class Clients::UsersController < Clients::BaseController



  def update
    user = User.find params[:id]
    if user.update(user_params)
      render json: user, status: 200
    else
      render json: user.errors.full_messages, status: 422
    end
  end



  private

  def user_params
    params.require(:user).permit(:grand_total)
  end


end
