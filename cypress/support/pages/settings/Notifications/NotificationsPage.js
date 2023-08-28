class NotificationsPage {

    notificationTab() {
        return cy.get(".flex-column.d-inline-flex")
    }
    emailCheckbox() {
        return cy.get("#chk-email-notifications")
    }
    smsCheckbox() {
        return cy.get("#chk-sms-notifications")
    }
    whatsAppCheckbox() {
        return cy.get("#chk-whatsapp-notifications")
    }
    saveChangeButton() {
        return cy.get("#save-info-notifications")
    }
    successMessage() {
        return cy.get(".iziToast-title.slideIn", { timeout: 30000 })
    }
}
export default NotificationsPage;