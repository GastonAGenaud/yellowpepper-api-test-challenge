class BrowsePage {
  categoriesList() {
    return cy.get('[name="categories"]').then((categories) => {
      const labelElements = categories.parent().find('label');
      const labelTexts = labelElements.toArray().map((label) => label.innerText);
      return labelElements;
    });
  }

  customFieldBlackColor() {
    return cy.get('#colors-container > span:nth-child(2) > label > span')
  }


  categoriesName() {
    return cy.get('.fz-14.cl-grey-dark.mt-3')
  }

  listingDisplayed() {
    return cy.get('#container-block')
  }

  categoryJewelry() {
    return cy.get('.px-2')
  }

  numberResult() {
    return cy.get('#filters-selected > span')
  }

  validatePagination() {
    return cy.get('#container-pagination')
  }

  listView() {
    return cy.get('#list-tab')
  }

  searchFieldInput() {
    return cy.get('#search')
  }

  clearFilters() {
    return cy.get('#filters-selected > a')
  }

  nextPageBtn() {
    return cy.get('.page-link.next-button')
  }

  validatePrice() {
    return cy.get('.d-flex.justify-content-between.align-items-center.msg')
  }

  sortBy() {
    return cy.get('#sortby-select')
  }

  minPrice() {
    return cy.get('#minPrice')
  }

  maxPrice() {
    return cy.get('#maxPrice')
  }

  validateMinPrice() {
    return cy.get('#manual-min')
  }

  validateMaxPrice() {
    return cy.get('#manual-max')
  }
  saveBrowseConfig() {
    return cy.get('#btn-save');
  }
  correctSave() {
    return cy.get('div > div > div.iziToast-body')
  }

  getCategory(category) {
    return cy.get('div.mb-4:nth-child(1) > ul:nth-child(2)').contains(category);
  }

  getSubcategory(subcategory) {
    return cy.get('div.pt-3:nth-child(2) > ul:nth-child(2)').contains(subcategory);
  }

  validateCategoryUrl(category) {
    cy.url().should('include', encodeURI(`/${category}`));
  }

  validateCategoryAndSubcategoryURL(category, subcategory) {
    cy.url().should('include', encodeURI(`/${category}/${subcategory}`));
  }

  visitURL(path) {
    cy.visit(Cypress.env('URL_PRODUCTS') + path);
  }

  validatePath(path) {
    cy.url().should('eq', Cypress.env('URL_PRODUCTS') + path);
  }

  selectFirstListing() {
    return cy.get('div.col-sm-6:nth-child(1)');
  }

  visitCurrentURL() {
    console.log(cy.location('href'))
    cy.url().then(url => cy.visit(url));
  }

  validateSameTitleAsURLDetail() {
    cy.wait(5000);
    cy.location('pathname').then(location => cy.get('.request-title').contains(decodeURI(location.split('/').pop())).should('exist'));
  }

  validateListingNameAndUsernamePath() {
    cy.wait(5000);
    cy.location('pathname').then(location => {
      let url = decodeURI(location).split('/');
      cy.get('.request-title').should('contain', url.pop());
      cy.get('a.fz-16:nth-child(2)').should('contain', url.pop());
    });
  }

  validateSameTitleAsURLDetailService() {
    cy.wait(5000);
    cy.location('pathname').then(location => cy.get('#service-title').contains(decodeURI(location.split('/').pop())).should('exist'));
  }

  validateListingNameAndUsernamePathService() {
    cy.wait(5000);
    cy.location('pathname').then(location => {
      let url = decodeURI(location).split('/');
      cy.get('#service-title').should('contain', url.pop());
      cy.get('#profile-name').should('contain', url.pop());
    });
  }
}

export default BrowsePage;