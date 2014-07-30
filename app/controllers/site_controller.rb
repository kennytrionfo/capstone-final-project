class SiteController < ApplicationController

  layout :resolve_layout

  def resolve_layout
    if action_name == 'index'
      'homepage'
    else
      'application'
    end
  end
end
