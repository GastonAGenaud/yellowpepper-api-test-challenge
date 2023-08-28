class BuyingProcessPage {

    sendMessageBtn() {
        return cy.get('#send-message-link')
    }
    sendMessageText() {
        return cy.get('#modal-send-message-btn')
    }
    closeChat() {
        return cy.get(".modal-content > div > button")
    }
    addToCartBtn() {
        return cy.get('#add-cart-btn')
    }
    successMessage() {
        return cy.get('.iziToast-body')
    }
    listingNameText() {
        return cy.get('.fz-16.cl-soft-dark')
    }
    seeDetailsBtn() {
        return cy.get('.cl-primary.fz-13.mr-2.a_hover').first()
    }
    trackingNumberField() {
        return cy.get('.form-control.form-control-lg.pr-btn-right')
    }
    soldText() {
        return cy.get('.flex-column.d-inline-flex.top-tab').first()
    }
} export default BuyingProcessPage;