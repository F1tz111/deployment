class PagesController < ApplicationController
  # Action to show the form (main page)
  def main
    @form_datum = FormDatum.new  # Initialize an empty form object
  end

  # Action to handle form submission
  def save_form_data
    # Initialize the FormDatum object with submitted data
    form_data = FormDatum.new(form_data_params)

    # Try to save the form data
    if form_data.save
      # Redirect to a success page if the data is saved
      redirect_to success_path, notice: 'Your form has been submitted successfully!'
    else
      # Render the main page again with an error message if save fails
      render :main, alert: 'There was an error submitting your form. Please try again.'
    end
  end

  private

  # Define strong parameters for the form data
  def form_data_params
    params.require(:form_datum).permit(:name, :contact, :email, :service, :plan, :message)
  end
end
