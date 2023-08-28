class SettingsPage {

    sectionByText(text) {
        return cy.get(".nav-link").contains(text)
    }
    subscriptionInfo() {
        return cy.get("#subscription-tab")
    }
    browsePage() {
        return cy.get("#browse-tab")
    }
    browseRequests() {
        return cy.get("#wants-tab")
    }
    storefront() {
        return cy.get("#storefront-tab")
    }
    listingDetails() {
        return cy.get("#listingdetails-tab")
    }
    templatesTab() {
        return cy.get(".nav-link").contains("TEMPLATES")
    }
}
export default SettingsPage;