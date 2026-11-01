const BasePage = require('./base.page');

class HomePage extends BasePage {
  constructor() {
    super({
      signupLoginLink: null,
      productsLink: null,
      cartLink: null,
      subscriptionEmail: null,
      subscriptionButton: null,
      subscriptionSuccess: null,
    });
  }

  visit() {
    return cy.visit('/');
  }

  openSignupLogin() {
    return this.click('signupLoginLink');
  }

  openProducts() {
    return this.click('productsLink');
  }

  openCart() {
    return this.click('cartLink');
  }

  subscribe(email) {
    this.type('subscriptionEmail', email);
    return this.click('subscriptionButton');
  }

  assertSubscriptionSuccess() {
    return this.assertVisible('subscriptionSuccess');
  }
}

module.exports = HomePage;