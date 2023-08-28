class HourlyRentalsPage {

    searchField() {
        return cy.get('#location-address-rental-carousel')
    }
    searchButton() {
        return cy.get('#search-btn-location-carousel')
    }
    mapSection() {
        return cy.get('#map-tab')
    }
    mapField() {
        return cy.get('#map-content')
    }
    locationField() {
        return cy.get('#location')
    }
    rentalAddressField() {
        return cy.get('#location-address-rental')
    }
    waterSystemOption() {
        return cy.get('.form-control.form-control-lg.no-empty-custom.customfield-input').first()
    }
    bathroomAccessOption() {
        return cy.get('#customfield-container > div:nth-child(4) > div > select')
    }
    poolDimensionsField() {
        return cy.get('#customfield-container > .form-group:nth-child(2) > .form-control')
    }
    poolDepthField() {
        return cy.get('#customfield-container > div:nth-child(3) > input')
    }
    seatingArea() {
        return cy.get('#checkbox-4-0')
    }
    privacyOption() {
        return cy.get('#customfield-container > div:nth-child(6) > div > select')
    }
    parkingAvailableOption() {
        return cy.get('#customfield-container > div:nth-child(7) > div > select')
    }
    totalSwimmers() {
        return cy.get('#customfield-container > div:nth-child(10) > div > input')
    }
    cancellationPolicyOption() {
        return cy.get('#customfield-container > div:nth-child(11) > div > select')
    }
    rentalAd() {
        return cy.get('.card-body.position-relative').contains('gastongenaud').first()
    }
    sendMessageBtn() {
        return cy.get('#btn-msg')
    }
    messageField() {
        return cy.get('#message-text')
    }
    sendBtn() {
        return cy.get('#btn-sendMessage')
    }
    serviceInformationField() {
        return cy.get('#cont-customfield')
    }
    availabilityTab() {
        return cy.get('.fz-20').contains('Availability')
    }
    calendarField() {
        return cy.get('.datepicker.datepicker-inline.active')
    }
    mediaButton() {
        return cy.get('.fz-20').contains('Media')
    }
    mediaField() {
        return cy.get('.border.rounded.w-100.object-cover').first()
    }
    reviewsButton() {
        return cy.get('.fz-20').contains('Reviews')
    }
    reviewsField() {
        return cy.get('#reviews')
    }
    hireServiceBtn() {
        return cy.get('#hire-avt-btn', { timeout: 120000 })
    }
}
export default HourlyRentalsPage;