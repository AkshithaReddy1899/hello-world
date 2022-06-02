class Api::V1::GreetingsController < ApplicationController

	def index
		@random = Greeting.all.sample(1).first
		render json: @random.message
	end

	def show
	end
end