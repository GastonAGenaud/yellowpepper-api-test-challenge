class CreateRequestPage {
    validateView() {
        return cy.get('[data-wording="wantcreate-title"]');
    }

    categorySelector() {
        return cy.get('#category-selector');
    }

    subcategorySelector() {
        return cy.get('#sub-category-selector');
    }

    itemSelector() {
        return cy.get('#item-selector');
    }

    nextBtn() {
        return cy.get('#next-step-button');
    }

    titleInput() {
        return cy.get('#name');
    }

    descriptionInput() {
        return cy.get('#description');
    }

    budgetFromInput() {
        return cy.get('#from');
    }

    budgetToInput() {
        return cy.get('#to');
    }
    
    createBtn() {
        return cy.get('#btn-create');
    }

    validateSocialBtn() {
        return cy.get('#sharedLinkedinBtn');
    }
}

export default CreateRequestPage;