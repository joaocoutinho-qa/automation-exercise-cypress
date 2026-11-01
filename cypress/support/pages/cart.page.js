const BasePage = require('./base.page');

class CartPage extends BasePage {
  constructor() {
    super({
      cartItems: null,
      checkoutButton: null,
    });
  }

  assertCartVisible() {
    return this.assertVisible('cartItems');
  }

  proceedToCheckout() {
    return this.click('checkoutButton');
  }
}

module.exports = CartPage;