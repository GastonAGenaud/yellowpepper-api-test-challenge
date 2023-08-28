class PasswordPage {

    newPasswordField() {
        return cy.get("#Password")
    }
    saveChangesBtn() {
        return cy.get("#saveChangesBtn")
    }
    successMessage() {
        return cy.get(".iziToast-title.slideIn")
    }
    passwordTab() {
        return cy.get(".flex-column.d-inline-flex")
    }
    currentPasswordField() {
        return cy.get("#CurrentPassword")
    }
}
export default PasswordPage;