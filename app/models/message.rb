class Message < ApplicationRecord
  validates :message, presence: true, length: { in: 1..150 }

  def self.random_message
    random_id = rand(1..5)
    Message.find(random_id)
  end
end
