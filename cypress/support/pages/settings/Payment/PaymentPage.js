class PaymentPage {

    paymentTab() {
        return cy.get(".flex-column.d-inline-flex")
    }
    nameOnCardField() {
        return cy.get("#NameOnCard")
    }
    cardNumberField() {
        return cy.get("#CardNumber")
    }
    expirationField() {
        return cy.get("#ExpirationDate")
    }
    securityCodeField() {
        return cy.get("#CVV")
    }
    addCreditCard() {
        return cy.get(".cl-primary.mt-2")
    }
    deleteBtn() {
        return cy.get("#creditCards > div:nth-child(2) > div > div.d-flex.justify-content-between.align-content-center.w-100 > div > a:nth-child(2)")
    }
    successMessage() {
        return cy.get(".iziToast-title.slideIn")
    }

    zipCode(){
        return cy.get("#zipcode-taxjar")
    }
}
export default PaymentPage;