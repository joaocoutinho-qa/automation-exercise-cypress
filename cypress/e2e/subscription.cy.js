const { createUser } = require('../support/factories/user.factory');
const HomePage = require('../support/pages/home.page');

describe.skip('Subscription', () => {
  it('Test Case 10: Verify Subscription in home page', () => {
    // Arrange
    const user = createUser();
    const homePage = new HomePage();

    // Act
    homePage.visit();
    homePage.subscribe(user.email);

    // Assert
    homePage.assertSubscriptionSuccess();
  });
});