class NavbarPage {
    profileName() {
        return cy.get('#username-loginbar')
    }

    loginButton() {
        return cy.get('#login-header-text-customize')
    }

    signUpButton() {
        return cy.get('#signup-header-text-customize')
    }

    inboxButton() {
        return cy.get('#navbar-nav > ul > li:nth-child(6) > a > svg')
    }
    navbarValidate() {
        return cy.get('#dropdown-nav')
    }

    shoppingCartBtn() {
        return cy.get('#shopping-cart-mobile > a')
    }
    searchInputInBrowseBySeller() {
        return cy.get('#searchCarousel').filter(':visible')
    }

    searchButtonInBrowseBySeller() {
        return cy.get('#nav-buy-carousel').filter(':visible')
    }

    validateSearchResult() {
        return cy.get('.col-12 .col-sm-8 .col-lg-9')
    }

    browseButton(text) {
        return cy.contains(text)
    }

    vintageButton() {
        return cy.get('#dropdown-nav > li:nth-child(4) > a')

    }

    validateVintagePage() {
        return cy.get('#whole-container > main > div.bg-white.py-3.py-lg-5.px-lg-5 > div')
    }

    sellButton() {
        return cy.get('#nav-sell-tab').filter(':visible')
    }

    sellSector() {
        return cy.get('#nav-sell > h2')
    }

    validateUserProfile() {
        return cy.get('#navbar-nav > ul > li.dropdown.hidden-mobile > a')
    }

    categoriesValidate() {
        return cy.get('#dropdown-nav')
    }

    searchStoreInput() {
        return cy.get('#search')
    }

    //socialMediaIcons TODO


}


export default NavbarPage;