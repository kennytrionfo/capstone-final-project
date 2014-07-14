class ClientsController < ApplicationController
  before_action :authenticate_user!
  before_action :dont_let_them_in_here

  private

  def dont_let_them_in_here
    unless current_user && current_user.client?
      redirect_to(root_path, alert: "Unauthorized")
    end
  end
end
