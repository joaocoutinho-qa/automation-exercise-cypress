const BasePage = require('./base.page');

class LoginPage extends BasePage {
  constructor() {
    super({
      loginEmail: '[data-qa="login-email"]',
      loginPassword: '[data-qa="login-password"]',
      loginButton: '[data-qa="login-button"]',
      loginError: '.login-form form p',
      signupName: '[data-qa="signup-name"]',
      signupEmail: '[data-qa="signup-email"]',
      signupButton: '[data-qa="signup-button"]',
      logoutLink: '.shop-menu a[href="/logout"]',
      loggedInIndicator: '.shop-menu a:contains("Logged in as")',
      existingEmailError: '.signup-form form p',
    });
  }

  login(email, password) {
    this.type('loginEmail', email);
    this.type('loginPassword', password);
    return this.click('loginButton');
  }

  startSignup(name, email) {
    this.type('signupName', name);
    this.type('signupEmail', email);
    return this.click('signupButton');
  }

  logout() {
    return this.click('logoutLink');
  }

  assertLoginError() {
    return this.assertVisible('loginError');
  }

  assertExistingEmailError() {
    return this.assertVisible('existingEmailError');
  }

  assertLoggedIn() {
    return this.assertVisible('loggedInIndicator');
  }

  assertLoggedOut() {
    return this.assertVisible('loginButton');
  }
}

module.exports = LoginPage;