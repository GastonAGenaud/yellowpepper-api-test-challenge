class BuyingBookingPage {

    searchField() {
        return cy.get('.form-control.form-control-lg.input-shadow.secondary-font.search-bar-browse')
    }
    kenpachiServices() {
        return cy.get('.card-body.position-relative').first()
    }
    hireButton() {
        return cy.get('#hire-btn')
    }
    dateField() {
        return cy.get('#hourly-deadline')
    }
    messageProviderText() {
        return cy.get('.form-control.form-control-lg.n-resize.mt-2.fz-16')
    }
    hireModalBtn() {
        return cy.get('#modal-hire-btn')
    }
    submitPayment() {
        return cy.get('#prepare-checkout')
    }
    congratulationsText() {
        return cy.get('.cl-soft-dark.my-4')
    }
    scheduleFourPM() {
        return cy.get('.fz-14.cont-hour:not(.disabled)').first()
    }
    scheduleSixPM() {
        return cy.get('.fz-14.cont-hour').contains('6 PM')
    }
    hireWithPriceButton() {
        return cy.get('#hire-avt-btn')
    }
    startTime() {
        return cy.get('#hourly-start')
    }
    endTime() {
        return cy.get('#hourly-end')
    }
    messageUnread() {
        return cy.get('.user-data.overflow-hidden').first()
    }
    requestToHireModal() {
        return cy.get('.negotiation-card.my-3.p-3').last()
    }
    asClientTab() {
        return cy.get('#purchased-tab')
    }
    tabOptions() {
        return cy.get('.btn.dropdown-mass-uploader.dropdown-toggle.select-item.dropdown-icon').first()
    }
    cancelOption() {
        return cy.get('.dropdown-item').contains('Cancel')
    }
    sendButton() {
        return cy.get('#btn-cancel-booking')
    }
    successModal() {
        return cy.get('.text-center').contains('The Admin has been notified and will proccess the refund.')
    }
    servicesExample() {
        return cy.get('.card.card-order.card-horizontal.card-grouped').first()
    }
    flatRateServiceOption() {
        return cy.get('.btn.btn-primary.fz-16.font-weight-bold.px-4.btn-hireFlat').first()
    }
    nameProvider() {
        return cy.get('#hire-name')
    }
    rejectButton() {
        return cy.get('.btn-small-danger.d-inline.fz-14.ml-2').last()
    }
    rejectBtn() {
        return cy.get('.btn.mt-2.btn-action.iziToast-buttons-child.revealIn')
    }
    rejectedStatus() {
        return cy.get('.badge.badge-danger').last()
    }
} export default BuyingBookingPage;