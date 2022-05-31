class V1::MessagesController < ApplicationController
  def index
    @message = Message.random_message
    render json: { greetings: @message }.to_json
  end
end
