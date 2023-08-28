class ReportedListingPage {

    aplicationTabsByText(text) {
        return cy.get(".nav-link.px-0.hidden-items-button").contains(text);
    }
    removedSection() {
        return cy.get(".nav-link.px-0.removed-items-button");
    }
    dismissedSection() {
        return cy.get(".nav-link.px-0.dismissed-items-button");
    }

    ordersReportsTab(){
        return cy.get("#admin_transactions_table > thead > tr > th:nth-child(3)")
    }

}
export default ReportedListingPage;