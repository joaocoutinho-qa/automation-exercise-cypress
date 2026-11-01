const BasePage = require('./base.page');

class LoginPage extends BasePage {
  constructor() {
    super({
      loginEmail: null,
      loginPassword: null,
      loginButton: null,
      loginError: null,
      signupName: null,
      signupEmail: null,
      signupButton: null,
      logoutLink: null,
      loggedInIndicator: null,
      existingEmailError: null,
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