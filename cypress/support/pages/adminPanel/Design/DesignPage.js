class DesignPage {

    getStylishSearchPlusIcon() {
        return cy.get('.card-landing-template:nth-child(1) .search-plus-icon');
    }

    getStylishRadioButton() {
        return cy.get('#0');
    }

    getStylishLearnMoreLink() {
        return cy.get('a[href="#learn-more-stylish"]');
    }

    getStylishSuggestedAddonLearnMoreLink() {
        return cy.get('.card-landing-template:nth-child(1) a[target="_blank"]');
    }

    getBrowseFirstSearchPlusIcon() {
        return cy.get('.card-landing-template:nth-child(2) .search-plus-icon');
    }

    getBrowseFirstRadioButton() {
        return cy.get('#1');
    }

    getBrowseFirstLearnMoreLink() {
        return cy.get('a[href="#learn-more-browse-first"]');
    }

    getBrowseFirstSuggestedAddonLearnMoreLink() {
        return cy.get('.card-landing-template:nth-child(2) a[target="_blank"]');
    }

    getStandardSearchPlusIcon() {
        return cy.get('.card-landing-template:nth-child(3) .search-plus-icon');
    }

    getStandardRadioButton() {
        return cy.get('#3');
    }

    getStandardLearnMoreLink() {
        return cy.get('a[href="#learn-more-standard"]');
    }

    getStandardSuggestedAddonLearnMoreLink() {
        return cy.get('.card-landing-template:nth-child(3) a[target="_blank"]');
    }

    getSaveButton() {
        return cy.get('#btn-save');
    }

    getNextButton() {
        return cy.get('#go-next-step');
    }
    previewButton() {
        return cy.get('#content > div > div > div > a')
    }

}

export default DesignPage;