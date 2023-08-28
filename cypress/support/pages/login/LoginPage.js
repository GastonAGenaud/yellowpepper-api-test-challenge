class LoginPage {

  // Método para obtener el botón "Sign up"
  getSignUpLink() {
    return cy.get('a[data-wording="login-subtitle-link"]');
  }

  // Método para obtener el botón "Login with Facebook"
  getFacebookLoginButton() {
    return cy.get('#facebook');
  }

  // Método para obtener el botón "Login with Google"
  getGoogleLoginButton() {
    return cy.get('#googleLoginBtn');
  }

  // Método para obtener el campo de correo electrónico
  getEmailInput() {
    return cy.get('#e-mail');
  }

  // Método para obtener el campo de contraseña
  getPasswordInput() {
    return cy.get('#password');
  }

  // Método para obtener los íconos de mostrar/ocultar contraseña
  getShowPasswordIcon() {
    return cy.get('i.far.fa-eye');
  }

  getHidePasswordIcon() {
    return cy.get('i.fas.fa-eye-slash');
  }

  // Método para obtener el enlace "Forgot your password?"
  getForgotPasswordLink() {
    return cy.get('#forgot-tab');
  }

  // Método para obtener el botón "Log in"
  getLogInButton() {
    return cy.get('button[data-wording="login-button"]');
  }
  
  loginBtnHeader() {
    return cy.get("#login-header-text-customize")
  }
}

export default LoginPage;