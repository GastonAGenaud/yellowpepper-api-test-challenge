class BookingsPage {

    description() {
        return cy.get('#description')
    }
    listingName() {
        return cy.get('#name')
    }
    rentalAddress() {
        return cy.get('#location-address-rental')
    }

    allowRecurringBookingCheckbox() {
        return cy.get('#toggle-recurring-booking-container > div > div > label.switch.mb-0.mr-1.my-1 > span')
    }

    optionSelector() {
        return cy.get(".form-control.form-control-lg.no-empty-custom.customfield-input")
    }

    poolDimensionInput() {
        return cy.get('#customfield-container > div:nth-child(2) > input')
    }

    poolDepthInput() {
        return cy.get('#customfield-container > div:nth-child(3) > input')
    }

    totalSwimmersInput() {
        return cy.get('#customfield-container > div:nth-child(10) > div > input')
    }

    seatingArea() {
        return cy.get('#checkbox-4-0')
    }
}

export default BookingsPage;