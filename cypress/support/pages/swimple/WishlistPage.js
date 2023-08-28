class WishlistPage {

    searchAddonFilter() {
        return cy.get('#txtFilter')
    }

    editAddonTitle() {
        return cy.get('#addon-title')
    }

    filterBtn() {
        return cy.get('#btnFilter')
    }

    editAddonBtn() {
        return cy.get('#listingAddon > div > div > div.d-flex.justify-content-around.mb-2 > a:nth-child(1)')
    }

    deleteAddonBtn() {
        return cy.get('.btn.mt-2.btn-action.iziToast-buttons-child.revealIn')
    }

    validateWishlistCard(){
        return cy.get('card-title text-uppercase wording').first();
    }

}

export default WishlistPage;