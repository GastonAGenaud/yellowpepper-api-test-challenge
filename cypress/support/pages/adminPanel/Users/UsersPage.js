class UsersPage {

    enterName() {
        return cy.get("#search")
    }
    addUserSection() {
        return cy.get("#add-user-tab")
    }
    selectActionField() {
        return cy.get(".p-2.truncate-one-line.form-control.form-control-lg.replace-chevron").first()
    }
    selectAction() {
        return cy.get("#select5d80faeb-45db-4888-bab7-9ba38ec2afe7")
    }
    logoPage() {
        return cy.get(".m-0.object-center.object-cover")
    }
    deleteButton() {
        return cy.get(".btn.btn-lg.btn-primary").contains('Delete')
    }
    enterPassword() {
        return cy.get("#NewPassword")
    }
    enterNewPassword() {
        return cy.get("#ConfirmNewPassword")
    }
    saveButton() {
        return cy.get(".btn.btn-primary.btn-block.mb-3")
    }
    successMessage() {
        return cy.get(".iziToast-title.slideIn")
    }
    filterText() {
        return cy.get('.col-9.mb-2')
    }
}

export default UsersPage;