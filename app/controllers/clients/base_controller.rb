class Clients::BaseController < ClientsController

before_action :authenticate_user!

end
