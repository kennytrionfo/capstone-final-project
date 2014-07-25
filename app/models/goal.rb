class Goal < ActiveRecord::Base

    belongs_to :user

    def percentage
      if weekly_points_goal != 0
        (weekly_results.to_f / weekly_points_goal.to_f) * 100
      end
    end
end
