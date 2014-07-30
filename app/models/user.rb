class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  after_create :give_goals_to_user

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]
# took out the :confirmable for devise

  has_many :goals
  enum role: [:client, :admin]
  validates :username, :email, :encrypted_password, presence: true

  def self.from_omniauth(auth)
  where(auth.slice(:provider, :uid)).first_or_create do |user|
    user.email = auth.info.email
    user.password = Devise.friendly_token[0,20]
    user.name = auth.info.name   # assuming the user model has a name
    user.image = auth.info.image # assuming the user model has an image
  end

  def give_goals_to_user
      self.goals.create(category: "I used my own bags at the  store.", point_value: 20, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "I carpooled.", point_value: 100, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "I recycled something.", point_value: 10, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "I air dryed my laundry.", point_value: 30, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "I turned off my electric appliance.", point_value: 5, frequency: 1, weekly_points_goal: 0, weekly_results: 0)


  end

end
