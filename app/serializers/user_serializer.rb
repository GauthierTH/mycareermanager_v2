class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :created_at

  has_many :job_applications, serializer: JobApplicationSerializer
end
