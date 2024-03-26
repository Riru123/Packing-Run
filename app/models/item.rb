class Item < ApplicationRecord
    attribute :completed, :boolean, default: false
    validates :title, length: { maximum: 15 }
end
