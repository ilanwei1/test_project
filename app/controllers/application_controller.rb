class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :create_user_id

  def create_user_id

  	if cookies[:user_id].blank?
  		cookies[:user_id] = rand(1...99999)
  		puts "new user id created #{cookies[:user_id]}"
  	end
  end

end
