const { createPaymentDetails } = require('../support/factories/payment.factory');
const { createUser } = require('../support/factories/user.factory');
const CartPage = require('../support/pages/cart.page');
const CheckoutPage = require('../support/pages/checkout.page');
const HomePage = require('../support/pages/home.page');
const LoginPage = require('../support/pages/login.page');
const ProductsPage = require('../support/pages/products.page');
const SignupPage = require('../support/pages/signup.page');
const { requiredEnv } = require('../support/utils/required-env');

describe.skip('Checkout', () => {
  it('Test Case 15: Place Order: Register before Checkout', () => {
    // Arrange
    const user = createUser();
    const payment = createPaymentDetails();
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const loginPage = new LoginPage();
    const signupPage = new SignupPage();
    const checkoutPage = new CheckoutPage();

    // Act
    homePage.visit();
    homePage.openProducts();
    productsPage.addFirstProductToCart();
    homePage.openCart();
    cartPage.assertCartVisible();
    cartPage.proceedToCheckout();
    loginPage.startSignup(user.name, user.email);
    signupPage.completeAccountDetails(user);
    signupPage.createAccount();
    signupPage.continueAfterRegistration();
    homePage.openCart();
    cartPage.proceedToCheckout();
    checkoutPage.assertDeliveryAddressContains(user);
    checkoutPage.addOrderComment('Order placed by the Cypress test suite.');
    checkoutPage.placeOrder();
    checkoutPage.enterPaymentDetails(payment);

    // Assert
    checkoutPage.assertOrderConfirmation();
  });

  it('Test Case 16: Place Order: Login before Checkout', () => {
    // Arrange
    const payment = createPaymentDetails();
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    // Act
    homePage.visit();
    homePage.openSignupLogin();

    return requiredEnv('testUserEmail').then((email) => {
      return requiredEnv('testUserPassword').then((password) => {
        loginPage.login(email, password);
        homePage.openProducts();
        productsPage.addFirstProductToCart();
        homePage.openCart();
        cartPage.assertCartVisible();
        cartPage.proceedToCheckout();
        checkoutPage.assertDeliveryAddressVisible();
        checkoutPage.addOrderComment('Order placed by the Cypress test suite.');
        checkoutPage.placeOrder();
        checkoutPage.enterPaymentDetails(payment);

        // Assert
        checkoutPage.assertOrderConfirmation();
      });
    });
  });
});