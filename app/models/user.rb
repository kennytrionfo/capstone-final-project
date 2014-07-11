class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :confirmable, :validatable

  has_many :goals
  has_many :user_goals

  validates :username, :email, :password, presence: true

  accepts_nested_attributes_for :user_goals

end
