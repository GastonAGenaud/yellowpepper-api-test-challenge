class DashboardPage {

    sellersSections() {
        return cy.get("#seller-tab")
    }
    buyersSections() {
        return cy.get("#buyer-tab")
    }


}
export default DashboardPage;