const BasePage = require('./base.page');

class CartPage extends BasePage {
  constructor() {
    super({
      cartItems: '#cart_info_table tbody tr',
      checkoutButton: '.check_out',
      registerLoginLink: '#checkoutModal a[href="/login"]',
    });
  }

  assertCartVisible() {
    return this.assertVisible('cartItems');
  }

  proceedToCheckout() {
    return this.click('checkoutButton');
  }

  continueToRegisterLogin() {
    return this.click('registerLoginLink');
  }
}

module.exports = CartPage;