class CashoutPage {

    cashoutSection() {
        return cy.get(".flex-column.d-inline-flex")
    }
    stripeButton() {
        return cy.get(".stripe-connect.text-decoration-none.p-0.mt-3")
    }

}
export default CashoutPage;