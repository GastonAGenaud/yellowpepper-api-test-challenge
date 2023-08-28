class CreateListingPage {

    editButton() {
        return cy.get('.cl-primary.a_hover').first()
    }
    listingNameInput() {
        return cy.get('#listing-name');
    }
    editPublishBtn() {
        return cy.get('#btn-edit-top')
    }
    errorMessage() {
        return cy.get('.iziToast-body').first()
    }
    connectWithStripe() {
        return cy.get('.bg-change').first()
    }
    testingAppLogo() {
        return cy.get('.d-flex.flex-column.fz-13.font-weight-bold.pl-2')
    }
    providerTab() {
        return cy.get('#nav-sell-tab').last()
    }
    startNowBtn() {
        return cy.get('#nav-sell > a').first()
    }
    addListingText() {
        return cy.get('.title-card.mb-1')
    }
    addNewButton() {
        return cy.get('#add-new-btn')
    }
    fedExTab() {
        return cy.get('.form-check.form-check-courier').contains('Ship with FedEx')
    }
    stepThree() {
        return cy.get('#availability-tab')
    }
    hourlyRateText() {
        return cy.get('.mx-lg-12.py-sm-4.border.rounded.d-flex').contains('Hourly Rate')
    }
    freeFlatOfferingsCheck() {
        return cy.get('.switch.mb-0.mr-1.my-2').last()
    }
    addNewFlatFreeButton() {
        return cy.get('.ml-2.font-weight-bold.cl-primary')
    }
    serviceName() {
        return cy.get('.form-control.form-control-lg.no-empty.flat-fee-input').first()
    }
    priceService() {
        return cy.get('.border-left-0.form-control.form-control-lg.no-empty.pl-2.flat-fee-input')
    }
    descriptionService() {
        return cy.get('.form-control.form-control-lg.n-resize.flat-fee-input')
    }
    listingBrowseService() {
        return cy.get('.card-body.position-relative').first()
    }
    monthText() {
        return cy.get('#mainCalendar')
    }
    educationalProviderText() {
        return cy.get('#sellerTextDescription')
    }
    dashboardTab() {
        return cy.get('#dashboard-tab')
    }
    becomeASeller() {
        return cy.get('.d-inline-flex.top-tab.align-items-center.cl-grey-dark')
    }
    variantsOption() {
        return cy.get('.switch.mr-2', { timeout: 120000 }).first()
    }
    colorOptions() {
        return cy.get('#variantselect-0')
    }
    redOption() {
        return cy.get('#variantselect-0').select('Red')
    }
    violetOption() {
        return cy.get('#variantselect-0').select('Violet')
    }
    pinkOption() {
        return cy.get('#variantselect-0').select('Pink')
    }
    redPrice() {
        return cy.get('#variant-price-0')
    }
    redQuantity() {
        return cy.get('#variant-quantity-0')
    }
    violetPrice() {
        return cy.get('#variant-price-1')
    }
    violetQuantity() {
        return cy.get('#variant-quantity-1')
    }
    optionColors() {
        return cy.get('.select2.select2-container.select2-container--default.select2-container--below.select2-container--focus')
    }
    saveDraftBtn() {
        return cy.get('.btn.btn-outline-secondary.mr-2')
    }
    awesomeMessage() {
        return cy.get('.iziToast-title.slideIn')
    }
    courierServices() {
        return cy.get('#shipping-option').select('Courier Services')
    }
    categorySection() {
        return cy.get('#category-selector')
    }
    deleteFilePDF() {
        return cy.get('.remove-pdf-button').last()
    }
    priceField() {
        return cy.get('.border-left-0.form-control.form-control-lg.no-empty.pl-2.flat-fee-input').last()
    }
    weekdayText() {
        return cy.get('.col-4').contains('Monday')
    }
    setUpHourlyOfferring() {
        return cy.get('#hourly-offering-container')
    }
    deleteWeekday() {
        return cy.get('.d-block.cursor-pointer.delete-available-time-slot').first()
    }
    customFieldsOption() {
        return cy.get('#arrow-categories')
    }
    graphicsAndDesignOption() {
        return cy.get('bor-1 br-sm px-3 mb-2 drageable > input').first()
    }
    techSpecialtiesOption() {
        return cy.get('.fa.fa-bars.fz-22.flex-shrink-1.mr-3').first()
    }
    validateCategoriesTab() {
        return cy.get('#category-selector > option:nth-child(2)')
    }
    categoryTextValidate(){
        return cy.get('#basic > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2) > div > label')
    }
}
export default CreateListingPage;