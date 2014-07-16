class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  after_create :give_goals_to_user

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :confirmable, :validatable

  has_many :goals
  enum role: [:client, :admin]
  validates :username, :email, :encrypted_password, presence: true

  def give_goals_to_user
      self.goals.create(category: "I used my own bags at the grocery store.", point_value: 20, frequency: 1)

  end

end
