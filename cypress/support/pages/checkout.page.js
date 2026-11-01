const BasePage = require('./base.page');

class CheckoutPage extends BasePage {
  constructor() {
    super({
      deliveryAddress: null,
      orderComment: null,
      placeOrderButton: null,
      cardName: null,
      cardNumber: null,
      cardCvc: null,
      cardExpiryMonth: null,
      cardExpiryYear: null,
      payButton: null,
      confirmationMessage: null,
    });
  }

  assertDeliveryAddressVisible() {
    return this.assertVisible('deliveryAddress');
  }

  assertDeliveryAddressContains(user) {
    const addressParts = [
      user.firstName,
      user.lastName,
      user.address1,
      user.city,
      user.state,
      user.zipcode,
    ];

    addressParts.forEach((part) => {
      this.element('deliveryAddress').should('contain.text', part);
    });
  }

  addOrderComment(comment) {
    return this.type('orderComment', comment);
  }

  placeOrder() {
    return this.click('placeOrderButton');
  }

  enterPaymentDetails(payment) {
    this.type('cardName', payment.name);
    this.type('cardNumber', payment.number);
    this.type('cardCvc', payment.cvc);
    this.type('cardExpiryMonth', payment.expiryMonth);
    this.type('cardExpiryYear', payment.expiryYear);
    return this.click('payButton');
  }

  assertOrderConfirmation() {
    return this.assertVisible('confirmationMessage');
  }
}

module.exports = CheckoutPage;