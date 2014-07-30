class OmniauthCallbacksController < Devise::OmniauthCallbacksController

  def facebook
    @user = User.find_or_create_by_omniauth(auth)

    if @user.persisted?
      sign_in @user
      redirect_to clients_goals_path, notice: 'User now signed in with facebook'
    else
      redirect_to root_path, alert: 'Could not sign in'
  end
end

  private

  def auth
    request.env['omniauth.auth']

  end
end
