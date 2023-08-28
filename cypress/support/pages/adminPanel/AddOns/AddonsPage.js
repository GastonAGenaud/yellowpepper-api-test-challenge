class AddonsPage {

    servicesOption() {
        return cy.get("#addon-feature")
    }
    titleImput() {
        return cy.get("#addon-title")
    }
    descriptionImput() {
        return cy.get("#addon-desc")
    }
    stripeProductIdImput() {
        return cy.get("#addon-stripe-product-id")
    }
    videoUrlImput() {
        return cy.get("#addon-videoUrl")
    }
    saveButton() {
        return cy.get(".btn.btn-primary.btn-lg.px-5")
    }
    imageButton() {
        return cy.get("#img-0")
    }
    successMessage() {
        return cy.get(".iziToast-title.slideIn")
    }
    activateButtonModal() {
        return cy.get("#modal-btns-bundle > a");
    }
}

export default AddonsPage;