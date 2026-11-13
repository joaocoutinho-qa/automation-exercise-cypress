const BasePage = require('./base.page');

class HomePage extends BasePage {
  constructor() {
    super({
      signupLoginLink: '.shop-menu a[href="/login"]',
      productsLink: '.shop-menu a[href="/products"]',
      cartLink: '.shop-menu a[href="/view_cart"]',
      subscriptionEmail: '#susbscribe_email',
      subscriptionButton: '#subscribe',
      subscriptionSuccess: '#success-subscribe .alert-success',
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