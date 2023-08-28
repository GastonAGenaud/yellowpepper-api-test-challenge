class DashboardPage {

    dashboardSection(tab) {
        return cy.get('.nav.nav-tabs.flex-sm-column.border-bottom-0.pl-0').contains(tab)
    }

    calendarValidate() {
        return cy.get('#mainCalendar')
    }

    inboxTab() {
        return cy.get('#inbox-tab')
    }

    providerTab() {
        return cy.get('#details-tab')
    }

    rejectedTab() {
        return cy.get('#rejected-tab')
    }

    approveRejectedItem() {
        return cy.get('.dropdown-item.approve-listing-btn')
    }

    approvePopup() {
        return cy.get('.btn.mt-2.btn-action.iziToast-buttons-child.revealIn')
    }

    seeAllLatestReviews() {
        return cy.get('[data-wording="dashboard-reviews-seeall"]')
    }

    invitePeopleBtn() {
        return cy.get('#reviews-holder > div > a')
    }

    messagesTitleValidate() {
        return cy.get('[data-wording="dashboard-messages"]')
    }

    mostPopular() {
        return cy.get('[data-wording="dashboard-mostpopular"]')
    }

    mySalesSeeAll() {
        return cy.get('[data-wording="dashboard-sales-seeall"]')
    }

    sponsoredAdsSection() {
        return cy.get('[data-wording="layoutdashboard-sponsored"]')
    }

    addNewSponsoredAdsButton() {
        return cy.get('[data-wording="ads-add-button"]').filter(':visible')
    }

    addAdText() {
        return cy.get("#adsText")
    }

    adsLinkText() {
        return cy.get('#adsLink')
    }

    startDate() {
        return cy.get('#start-date')
    }

    endDate() {
        return cy.get('#end-date')
    }

    PublishAdsButton() {
        return cy.get('[data-wording="ads-publish-button"]')
    }

    mySalesCreateNewListing() {
        return cy.get('#href-createlisting')
    }

    sellerTab() {
        return cy.get('#details-tab')
    }

    buyersSections() {
        return cy.get("#buyer-tab")
    }

    ordersTab() {
        return cy.get('#orders-tab')
    }

    asClientTab() {
        return cy.get('#purchased-tab')
    }

    requestsTab() {
        return cy.get('#wants-tab')
    }

    addNewRequestBtn() {
        return cy.get('#add-want')
    }

    addRequestBtnServices(){
        return cy.get('#want-create-link')
    }

    userSearchingForSeeAll() {
        return cy.get(('[data-wording="dashboard-matchs-seeall"]'))
    }

    rightArrowButton() {
        return cy.get('#wants-carousel > a.carousel-control-next.cl-primary > i')
    }

    leftArrowButton() {
        return cy.get('#wants-carousel > a.carousel-control-prev.cl-primary > i')
    }

    myOrdersItemValidate() {
        return cy.get('#listing-holder > div:nth-child(1)')
    }

    createdByMeButton() {
        return cy.get('#created-tab')
    }

    latestReviewsValidate() {
        return cy.get(('[data-wording="dashboard-reviews"]"'))
    }

    sideBarValidate(){
        return cy.get('#container-sidebar')
    }

    createRequestSection() {
        return cy.get('#want-create-holder');
    }

    providerTabButton() {
        return cy.get('#details-tab > .flex-column');
    }

    buyerAddListingButton() {
        return cy.get('#details-tab > .d-inline-flex');
    }

    addListingText(){
        return cy.get('#dashboard > div.row.no-gutter.secondary-font > div > div.row.mb-5 > div.col-lg-8 > h1')
    }
}

export default DashboardPage;