class HomePage {
    providers() {
        return cy.get('.navbar-nav > .nav-item[data-id-nav="1"] > .nav-link');
    }

    searchStores() {
        return cy.get('.navbar-nav > .nav-item[data-id-nav="3"] > .nav-link');
    }

    browse() {
        return cy.get('.navbar-nav > .nav-item[data-id-nav="4"] > .nav-link');
    }

    browseRequests() {
        return cy.get('.navbar-nav > .nav-item[data-id-nav="6"] > .nav-link');
    }

    blog() {
        return cy.get('.navbar-nav > .nav-item[data-id-nav="7"] > .nav-link');
    }

    electronicsTab() {
        return cy.get('#dropdown-nav a[data-category="771"]');
    }
    jewerlyTab() {
        return cy.get('#dropdown-nav a[data-category="656"]');
    }
    clothingTab() {
        return cy.get('#dropdown-nav a[data-category="654"]');
    }
    vintageTab() {
        return cy.get('#dropdown-nav a[data-category="725"]');
    }
    petsTab() {
        return cy.get('#dropdown-nav a[data-category="722"]');
    }

    buyTab() {
        return cy.get("#nav-buy-tab");
    }

    sellTab() {
        return cy.get("#nav-sell-tab");
    }

    searchInput() {
        return cy.get('#searchCarousel').filter(':visible')
    }

    searchButton() {
        return cy.get(".btn-primary");
    }

    buyTheBestMakeUp() {
        return cy.get("#nav-buy-carousel > div:nth-child(3) > a");
    }

    electronicsCategory() {
        return cy.get("a[href='/Listing/Browse/?CategoryId=771'] > .card-body > .preview-primary");
    }

    jewelryCategory() {
        return cy.get("a[href='/Listing/Browse/?CategoryId=656'] > .card-body > .preview-primary");
    }

    clothingCategory() {
        return cy.get("a[href='/Listing/Browse/?CategoryId=654'] > .card-body > .preview-primary");
    }

    petsCategory() {
        return cy.get("a[href='/Listing/Browse/?CategoryId=722'] > .card-body > .preview-primary");
    }

    homeLivingCategory() {
        return cy.get("a[href='/Listing/Browse/?CategoryId=670'] > .card-body > .preview-primary");
    }

    seAllCategories() {
        return cy.get("#whole-container > main > div.bg-white > div.more-categories > div > div.py-5 > a");
    }

    buyer() {
        return cy.get('#nav-buyer');
    }

    seller() {
        return cy.get('#nav-seller');
    }

    startNowBtn() {
        return cy.get("#whole-container > main > div.bg-white > div:nth-child(7) > div.container-fluid.px-sm-5 > div > div > button");
    }
    faq() {
        return cy.get('#faq-footer-text-customize');
    }

    privacyPolicy() {
        return cy.get('#privacy-footer-text-customize');
    }

    termsAndService() {
        return cy.get('#terms-footer-text-customize');
    }

    contactUs() {
        return cy.get('#contact-footer-text-customize');
    }

    aboutUs() {
        return cy.get('#about-footer-text-customize');
    }

    facebook() {
        return cy.get('a[href="https://www.facebook.com/FacebookUser"]');
    }

    instagram() {
        return cy.get('a[href="https://www.instagram.com/InstagramUser"]');
    }

    linkedIn() {
        return cy.get('a[href="https://www.linkedin.com/LinkedinUser"]');
    }

    twitter() {
        return cy.get('a[href="https://twitter.com/TwitterUser"]');
    }

    youTube() {
        return cy.get('a[href="https://youtube.com/YoutubeUser"]');
    }

    searchInputInHome() {
        return cy.get('[data-content="search-input"]').last();
    }

    selectSearchInHome() {
        return cy.get('[class="btn btn-primary btn-landing secondary-font ml-3 font-weight-bold"]');
    }

}

export default HomePage;