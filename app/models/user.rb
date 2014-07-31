class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  after_create :give_goals_to_user

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]
# took out the :confirmable for devise

  def self.find_or_create_by_omniauth(auth)
      where(auth.slice(:provider, :uid)).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.username = auth.info.name
    end
  end

  has_many :goals
  enum role: [:client, :admin]
  validates :username, :email, :encrypted_password, presence: true

  #
  # def self.new_with_session(params, session)
  #   super.tap do |user|
  #     if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
  #       user.email = data["email"] if user.email.blank?
  #     end
  #   end
  # end

  def give_goals_to_user
      self.goals.create(category: "Use my own bags at the  store", point_value: 20, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Carpool", point_value: 100, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Reduce junk mail", point_value: 10, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Air dry laundry", point_value: 30, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Turn off computer instead of hibernate", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Adjust the thermostat up 1 degree in summer", point_value: 25, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Install compact fluorescent light bulbs(CLFs)", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Plant 1 tree", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Recycle 5 lb of paper, plastic, or metal", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Ride bike instead of car 1 mile", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Add 1 lb to compost pile", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Take a short shower (5 min or less)", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Collect rainwater for garden", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Use my own bag for groceries", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Buy/eat local", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "Buy something used instead of new", point_value: 5, frequency: 0, weekly_points_goal: 0, weekly_results: 0)

  end

end
