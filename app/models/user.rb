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
      self.goals.create(category: "I used my own bags at the  store.", point_value: 20, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "I carpooled.", point_value: 100, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "I recycled something.", point_value: 10, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "I air dryed my laundry.", point_value: 30, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
      self.goals.create(category: "I turned off my electric appliance.", point_value: 5, frequency: 1, weekly_points_goal: 0, weekly_results: 0)
  end

end
