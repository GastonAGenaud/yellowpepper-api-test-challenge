class SignUpPage {
  getEmailInput() {
    return cy.get('#e-mail');
  }

  getUsernameInput() {
    return cy.get('#username');
  }

  getPasswordInput() {
    return cy.get('#password');
  }

  getMinimumCharactersValidationIcon() {
    return cy.get('#minimun-characters-validation');
  }
  signUpPage() {
    return cy.get('#signup-header-text-customize')
  }
  getOneNumberValidationIcon() {
    return cy.get('#one-number-validation');
  }

  getOneUppercaseValidationIcon() {
    return cy.get('#one-uppercase-validation');
  }

  getOneSpecialValidationIcon() {
    return cy.get('#one-special-validation');
  }

  getTermsAndConditionsLink() {
    return cy.get('[data-wording="signup-terms-link"]');
  }

  getSignUpButton() {
    return cy.get('#signup-button');
  }
  welcomeMessage() {
    return cy.get('#signup-modal-button-seller')
    //.contains('Welcome! What will be your first step?')
  }
  errorMessage() {
    return cy.get('.iziToast-body')
  }
}

export default SignUpPage;
