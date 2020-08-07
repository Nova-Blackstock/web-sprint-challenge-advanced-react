import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    
    const formHeading = screen.getByRole('heading', { name: /checkout form/i})
    expect(formHeading).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    const checkoutBtn = screen.getByRole('button', { name: /checkout/i})

    fireEvent.change(firstNameInput, { target: {value: 'Nova'} })
    fireEvent.change(lastNameInput, { target: {value: 'Blackstock'} })
    fireEvent.change(addressInput, { target: {value: '123 Wherever St.'} })
    fireEvent.change(cityInput, { target: {value: 'New York City'} })
    fireEvent.change(stateInput, { target: {value: 'NY'} })
    fireEvent.change(zipInput, { target: {value: '12345'} })
    fireEvent.click(checkoutBtn)

    const successMessage = screen.findByTestId(/successMessage/i)
    expect(await successMessage).toBeInTheDocument()

    screen.debug()
    //test has been demonstrated to be correct.  -->

    //Success Message only appears when the button has been clicked. Changing testid or eliminating the click event causes assertion to fail.
    //Inputs & the Success Message are demonstrated in debug to have correct values which change with above code. 
});
