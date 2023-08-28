class ProfilePage {

    nameField() {
        return cy.get("#FirstName")
    }
    lastField() {
        return cy.get("#LastName")
    }
    phoneNumberField() {
        return cy.get("#PhoneNumber")
    }
    successMessage() {
        return cy.get(".iziToast-title.slideIn")
    }
    uploadImage() {
        return cy.get('[data-wording="profilesettings-profile-personalinfo-button-replace"]')
    }
    cropButton() {
        return cy.get("#btn-crop", { timeout: 10000 })
    }


}
export default ProfilePage;