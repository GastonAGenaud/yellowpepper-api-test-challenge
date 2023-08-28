class ListingProdPage {
    goBackLink() {
        return cy.get('.go-back');
    }
    listingNameInput() {
        return cy.get('#listing-name');
    }

    title() {
        return cy.get('.title__add__listing');
    }

    saveDraftButton() {
        return cy.get('[data-wording="listingcreate-button-savedraft"]');
    }

    publishButton() {
        return cy.get('#createListingBtn');
    }

    howToAddListingTitle() {
        return cy.get('[data-wording="listingcreate-howtoaddlisting"]');
    }

    howToAddListingDescription() {
        return cy.get('[data-wording="listingcreate-howtoaddlisting-description"]');
    }

    categoryLabel() {
        return cy.get('[data-wording="listingcreate-iteminfo-category"]');
    }

    categorySelector() {
        return cy.get('#category-selector', { timeout: 120000 });
    }

    subcategoryLabel() {
        return cy.get('[data-wording="wantcreate-type-subcategory"]');
    }

    subcategorySelector() {
        return cy.get('#sub-category-selector');
    }

    itemLabel() {
        return cy.get('[data-wording="wantcreate-type-item"]');
    }

    itemSelector() {
        return cy.get('#item-selector');
    }

    descriptionLabel() {
        return cy.get('[data-wording="listingcreate-iteminfo-description"]');
    }

    descriptionInput() {
        return cy.get('#listing-description');
    }
    variantsSwitch() {
        return cy.get('#variants');
    }

    priceInput() {
        return cy.get('#price');
    }

    quantityInput() {
        return cy.get('#quantity');
    }

    estEarningLabel() {
        return cy.get('#earning');
    }

    toggleVariants() {
        return cy.get('#variants').check();
    }

    enterVariantName(name) {
        return cy.get('.variant-item:last-child .form-group input').type(name);
    }

    enterVariantPrice(price) {
        return cy.get('.variant-item:last-child .col-lg-2 input').first().type(price);
    }

    enterVariantQuantity(quantity) {
        return cy.get('.variant-item:last-child .col-lg-2 input').last().type(quantity);
    }

    addVariant() {
        return cy.get('#variants-options button').click();
    }
    addYoutubeUrl() {
        return cy.get('#listing-videourl')
    }

    selectShippingOption(section) {
        return cy.get('.nav.nav-tabs.border-bottom-0.shipping-tabs-ul').contains(section).click();
    }
    toggleDownloadable() {
        return cy.get('#addon-downloadable').click();
    }

    uploadDigitalProduct(path) {
        return cy.get('#img-7').attachFile(path);
    }

    uploadImage(path, index) {
        return cy.get('#img-0', { timeout: 120000 }).click({ force: true }).attachFile(path)
    }

    deleteImage(index) {
        return cy.get(`#img-drag-${index} .position__custom--delete`).click();
    }

    dragAndDropImage(sourceIndex, targetIndex) {
        return cy.get(`#img-drag-${sourceIndex}`).trigger('dragstart').get(`#img-drag-${targetIndex}`).trigger('drop').trigger('dragend');
    }

    addressLineField() {
        return cy.get('#location-usps')
    }
    cityField() {
        return cy.get('#locality-location-usps')
    }
    stateField() {
        return cy.get('#StateNameLong-location-usps')
    }
    zipField() {
        return cy.get('#ZipCode-location-usps')
    }
    countryField() {
        return cy.get('#Country-location-usps')
    }
    weightField() {
        return cy.get('#shipping-weight')
    }
    lenghtField() {
        return cy.get('#shipping-length')
    }
    widthField() {
        return cy.get('#shipping-width')
    }
    heightField() {
        return cy.get('#shipping-height')
    }
    greatJobMessage() {
        return cy.get('.cl-soft-dark.my-4')
    }
    pendingTab() {
        return cy.get('.nav-link.pl-2')
    }
    cropButton() {
        return cy.get("#btn-crop", { timeout: 120000 })
    }
    massUploader() {
        return cy.get('#btn-mass')
    }

    uploadCSV() {
        return cy.get('#upload-csv')
    }

    csvUploadCorrect() {
        return cy.get('body > div.iziToast-wrapper.iziToast-wrapper-bottomRight > div > div > div.iziToast-body > div.iziToast-texts > p')
    }
}

export default ListingProdPage;
