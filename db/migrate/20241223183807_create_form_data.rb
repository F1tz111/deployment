class CreateFormData < ActiveRecord::Migration[8.0]
  def change
    create_table :form_data do |t|
      t.string :name
      t.string :contact
      t.string :email
      t.string :service
      t.string :plan
      t.text :message

      t.timestamps
    end
  end
end
