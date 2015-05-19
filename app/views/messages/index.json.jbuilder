json.array!(@messages) do |message|
  json.extract! message, :id, :content, :user_id , :created_at
  json.url message_url(message, format: :json)
end
