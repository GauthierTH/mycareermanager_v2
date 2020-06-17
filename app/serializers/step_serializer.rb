# frozen_string_literal: true

class StepSerializer < ActiveModel::Serializer
  attributes :id, :category, :date, :description, :is_done

  belongs_to :job_application, serializer: JobApplicationSerializer
end
