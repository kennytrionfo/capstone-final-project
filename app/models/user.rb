class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  after_create :give_goals_to_user

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
# took out the :confirmable for devise

  has_many :goals
  enum role: [:client, :admin]
  validates :username, :email, :encrypted_password, presence: true

  def give_goals_to_user
      self.goals.create(category: "I used my own bags at the  store.", point_value: 20, frequency: 1)
      self.goals.create(category: "I carpooled.", point_value: 50, frequency: 1)
      self.goals.create(category: "I recycled something.", point_value: 10, frequency: 1)
      self.goals.create(category: "I air dryed my laundry.", point_value: 30, frequency: 1)
      self.goals.create(category: "I turned off my electric appliance.", point_value: 5, frequency: 1)


  end

end
