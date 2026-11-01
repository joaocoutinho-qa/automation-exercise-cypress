const invalidLoginCases = require('../fixtures/invalid-login-cases.json');
const { createUser } = require('../support/factories/user.factory');
const HomePage = require('../support/pages/home.page');
const LoginPage = require('../support/pages/login.page');
const SignupPage = require('../support/pages/signup.page');
const { requiredEnv } = require('../support/utils/required-env');

describe.skip('Authentication', () => {
  it('Test Case 1: Register User', () => {
    // Arrange
    const user = createUser();
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const signupPage = new SignupPage();

    // Act
    homePage.visit();
    homePage.openSignupLogin();
    loginPage.startSignup(user.name, user.email);
    signupPage.completeAccountDetails(user);
    signupPage.createAccount();

    // Assert
    signupPage.assertAccountCreated();
  });

  it('Test Case 2: Login User with correct email and password', () => {
    // Arrange
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    // Act
    homePage.visit();
    homePage.openSignupLogin();

    return requiredEnv('testUserEmail').then((email) => {
      return requiredEnv('testUserPassword').then((password) => {
        loginPage.login(email, password);

        // Assert
        loginPage.assertLoggedIn();
      });
    });
  });

  invalidLoginCases.forEach((credentials, index) => {
    it(`Test Case 3: Login User with incorrect credentials (data ${index + 1})`, () => {
      // Arrange
      const homePage = new HomePage();
      const loginPage = new LoginPage();

      // Act
      homePage.visit();
      homePage.openSignupLogin();
      loginPage.login(credentials.email, credentials.password);

      // Assert
      loginPage.assertLoginError();
    });
  });

  it('Test Case 4: Logout User', () => {
    // Arrange
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    // Act
    homePage.visit();
    homePage.openSignupLogin();

    return requiredEnv('testUserEmail').then((email) => {
      return requiredEnv('testUserPassword').then((password) => {
        loginPage.login(email, password);
        loginPage.logout();

        // Assert
        loginPage.assertLoggedOut();
      });
    });
  });

  it('Test Case 5: Register User with existing email', () => {
    // Arrange
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    // Act
    homePage.visit();
    homePage.openSignupLogin();

    return requiredEnv('testUserEmail').then((email) => {
      loginPage.startSignup('Existing User', email);

      // Assert
      loginPage.assertExistingEmailError();
    });
  });
});