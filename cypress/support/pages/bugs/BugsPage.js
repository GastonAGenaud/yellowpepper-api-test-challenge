class BugsPage {

    purchasedtab() {
        return cy.get('#purchased-tab').should('be.visible')
    }
    firstProduct() {
        return cy.get('.card.card-order.card-horizontal.card-grouped')
    }
    stepsTab() {
        return cy.get('.d-flex.done')
    }
    getStarted() {
        return cy.get('.fx.d-flex.align-items-center').contains('Get started')
    }
    domainStep() {
        return cy.get('.d-flex.align-items-center.done')
    }
    buyNowBtn() {
        return cy.get('#buy-now-btn')
    }
    addAddress() {
        return cy.get('.cl-primary.fz-13.add-address')
    }
    myAddresses() {
        return cy.get('#address-container > div:nth-child(1) > div')
    }
    flatRateCheck() {
        return cy.get('.pr-2.custom-control-label')
    }
    goToSecureCheckout() {
        return cy.get('#go-checkout')
    }
    submitPayment() {
        return cy.get('#prepare-checkout')
    }
    congratulationsPost() {
        return cy.get('.cl-soft-dark.my-4')
    }
    categorySection() {
        return cy.get('.mb-4.pt-3.level-0')
    }
    acceptBtn() {
        return cy.get('.own-btn.btn-outline-success.own-btn-sm.mb-2')
    }
    trackingNumber() {
        return cy.get('.form-control.form-control-lg.pr-btn-right.width-12').first()
    }
    submitBtn() {
        return cy.get('.a_hover.absolute-y-center.cl-primary.fz-15.position-absolute.right-1')
    }
    successMessage() {
        return cy.get(".iziToast-title.slideIn")
    }
    yourListingBtn() {
        return cy.get('.cl-secondary.text-underline').contains('Your Listings')
    }
    approvedTab() {
        return cy.get('#approved-tab')
    }
    itemTab() {
        return cy.get('.btn.dropdown-action-listing.dropdown-toggle')
    }
    featureOption() {
        return cy.get('.dropdown-menu.dropdown-menu-right.show').contains('Feature')
    }
    unfeatureOption() {
        return cy.get('.dropdown-menu.dropdown-menu-right.show').contains('Unfeature')
    }

    startDate() {
        return cy.get('#start-date')
    }
    endDate() {
        return cy.get('#end-date')
    }
    featureListingBtn() {
        return cy.get('.own-btn.own-btn-md.btn-primary.mr-1')
    }
    detailsEditBtn() {
        return cy.get('.edit-template.mr-3')
    }
    saveBtn() {
        return cy.get('#email-save')
    }
    downloadFile() {
        return cy.get('.cl-primary.fz-13.mr-2.a_hover').contains('Download file')
    }
    reviewsTab() {
        return cy.get('.flex-column.d-inline-flex').contains('Reviews')
    }
    leaveAReviewBtn() {
        return cy.get('#open-review')
    }
    reviewseller() {
        return cy.get('#seller-review')
    }
    reviewsListing() {
        return cy.get('#listing-review')
    }
    ratingSeller() {
        return cy.get('.col-lg-6.mb-2.pr-lg-2 > div:nth-child(2) > div > label:nth-child(2)')
    }
    ratingListing() {
        return cy.get('.col-lg-6.mb-2.pl-lg-2 > div:nth-child(2) > div > label:nth-child(2)')
    }
    sendButton() {
        return cy.get('.btn.btn-primary.btn-send.fz-16.p-2')
    }
    validateReview() {
        return cy.get('.card.review-card.mb-3')
    }
    browseServicesButton() {
        return cy.get('#buyerTextDescription')
    }
    sendMessageBtn() {
        return cy.get('#send-message-link')
    }
    haventCreatedAnyListingMessage() {
        return cy.get('.title-listing.mt-4')
    }
    logoAndFavicon() {
        return cy.get('.list-unstyled.list-customize > li:nth-child(8)')
    }
    saveButton() {
        return cy.get('.btn.btn-aqua').contains('Save')
    }
    infoSavedMessage() {
        return cy.get('.iziToast-message.slideIn')
    }
    myListingText() {
        return cy.get('.title-listing.mt-4')
    }
    socialLinksBtn() {
        return cy.get('.list-unstyled.list-customize > li:nth-child(5)')
    }
    facebookField() {
        return cy.get('#facebook-text')
    }
    twitterField() {
        return cy.get('#twitter-text')
    }
    instagramField() {
        return cy.get('#instagram-text')
    }
    youtubeField() {
        return cy.get('#youtube-text')
    }
    saveSocialLink() {
        return cy.get('#collapse-header > div > form > div:nth-child(3) > button')
    }
    verifyUploadImage() {
        return cy.get('#img-0-img')
    }
    priceText() {
        return cy.get('#listingDetailPriceContainer')
    }
    seenTimesText() {
        return cy.get('.badge.badge-warning.badge-absolute-card.position-absolute')
    }
    creditCardPreload() {
        return cy.get('.card.card-cc.mt-4').first()
    }
    minimumCharacterMessage() {
        return cy.get('#minimun-characters-validation')
    }
    imageListing() {
        return cy.get('.object-contain.img-fluid.card-img-top.border-b-gray.max-h-200').first()
    }
    visualEditor() {
        return cy.get('.d-none.btn.btn-aqua.btn-block.fz-15')
    }
    pendingButton() {
        return cy.get('.stripe-connect.text-decoration-none.p-0.mt-3')
    }
    validTextStripe() {
        return cy.get('.db-ConsumerUIWrapper-left--sidebarCopy')
    }
    seeDetailsButton() {
        return cy.get('.align-items-center.ml-auto.mb-2.justify-content-end.see__details').contains('See details', { timeout: 130000 }).eq(754)
    }
    seeDetailsBtn() {
        return cy.get('.align-items-center.ml-auto.mb-2.justify-content-end.see__details').contains('See details').first()
    }
    seeMessagesBtn() {
        return cy.get('.cl-primary.fz-13').first()
    }
    inboxContainer() {
        return cy.get('#inbox-container')
    }
    testingTrackText() {
        return cy.get('.fz-16.cl-soft-dark')
    }
    yourNameField() {
        return cy.get('#owner-name')
    }
    yourEmailField() {
        return cy.get('#owner-email')
    }
    yourPhoneNumber() {
        return cy.get('#owner-phone')
    }
    yourMarketplaceName() {
        return cy.get('#owner-site-name')
    }
    nextButton() {
        return cy.get('#go-to-second-step')
    }
    selectProducts() {
        return cy.get('.card.card__type__site.active.mb-3')
    }
    selectNextBtn() {
        return cy.get('#go-to-checkout')
    }
    cardNumberField() {
        return cy.get('#card-number')
    }
    nameCardField() {
        return cy.get('#card-name')
    }
    expiryDateField() {
        return cy.get('#expiry-date')
    }
    cvvCodeField() {
        return cy.get('#card-cvc')
    }
    savePaymentBtn() {
        return cy.get('.btn.btn-secondary.btn-block.btn__checkout__onboarding')
    }
    congratsPost() {
        return cy.get('.font__congrats--title').contains('Congrats')
    }
    cropButton() {
        return cy.get('#btn-crop')
    }
    cropBtn() {
        return cy.get('#crop')
    }
    priceListingText() {
        return cy.get('.price-listing.cl-primary.ml-0').first()
    }
    digitalProductCheck() {
        return cy.get('#addon-downloadable')
    }
    newlyListing() {
        return cy.get('div.card.card-horizontal.listing-card-border').first().find('a')
    }
    acceptSoldBtn() {
        return cy.get('.own-btn.btn-outline-success.own-btn-sm.mb-2').first()
    }
    facebookButton() {
        return cy.get('#facebook').first()
    }
    itemChat() {
        return cy.get('.chat-item.read')
    }
    priorityCheck() {
        return cy.get('.pr-2.custom-control-label').first()
    }

}
export default BugsPage;