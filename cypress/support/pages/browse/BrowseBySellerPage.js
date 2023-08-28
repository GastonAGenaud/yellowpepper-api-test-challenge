class BrowseBySellerPage {

    browseBySellerButton() {
    }

    validateBrowseBySeller() {
        return cy.get('#filters-container');
    }

    locationInput() {
        return cy.get('#location')
    }

    listText() {
        return cy.get('#list-tab > span')
    }

    sortBy() {
        return cy.get('.dropdown-item.secondary-font')
    }

    colorsSector() {
        return cy.get('#colors-container')
    }

    minimumValue() {
        return cy.get('#manual-min')
    }

    maximumValue() {
        return cy.get('#manual-max')
    }

    applyPrice() {
        return cy.get('.cl-white.bg-primary.circle-icon.ml-2.text-decoration-none')
    }

    validatePriceSector() {
        return cy.get('#filters-container > div:nth-child(4)')
    }

    priceBar() {
        return cy.get('#rangeBarContainer > div.slider.slider-horizontal > div.slider-handle.max-slider-handle')
    }

    validPriceSectorInServices(){
        return cy.get('#filters-container > div:nth-child(6)')
    }

    selectFirstStorefront() {
        return cy.get('.col-sm-6');
    }

    validateUsernameStorefront() {
        cy.wait(3000);
        cy.location('pathname').then(location => {
            let username = location.split('?')[0].split('/');
            cy.get('#username-storefront').should('contain',username.pop());
        });
    }
}

export default BrowseBySellerPage;