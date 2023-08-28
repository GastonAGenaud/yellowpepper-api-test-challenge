class BannerPage {
    hireButtonInHome() {
        return cy.get('a.nav-item.nav-link.secondary-font.px-0.mr-3.cl-white.active');
    }

    buyerButtonInHome() {
        return cy.get('a.nav-item.nav-link.active.secondary-font.px-0.mr-3.cl-white');
    }

    providerButtonInHome() {
        return cy.get('#nav-sell-tab');
    }

    searchButtonInHome(text) {
        return cy.get(`:contains("${text}")`).filter(':visible');
    }

    startNowButtonInHome(text) {
        return cy.contains(text);
    }

    startTodayButtonInHome(text) {
        return cy.contains(text);
    }

    validateBannerImageProducts() {
        return cy.get('#carousel-images');
    }

    validateBannerImageServices() {
        return cy.get('#hero-section');
    }

    sellerButtonInHome(text) {
        return cy.get(`:contains("${text}")`).filter(':visible');

    }

    buyerButton() {
        return cy.get('#nav-buy-tab');
    }
    searchButton(text) {
        return cy.contains(text).find('a').filter(':visible');
    }
}

export default BannerPage;
