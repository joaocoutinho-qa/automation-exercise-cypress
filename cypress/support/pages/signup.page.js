const BasePage = require('./base.page');

class SignupPage extends BasePage {
  constructor() {
    super({
      titleMr: '#id_gender1',
      titleMrs: '#id_gender2',
      password: '[data-qa="password"]',
      birthDay: '[data-qa="days"]',
      birthMonth: '[data-qa="months"]',
      birthYear: '[data-qa="years"]',
      firstName: '[data-qa="first_name"]',
      lastName: '[data-qa="last_name"]',
      company: '[data-qa="company"]',
      address1: '[data-qa="address"]',
      address2: '[data-qa="address2"]',
      country: '[data-qa="country"]',
      state: '[data-qa="state"]',
      city: '[data-qa="city"]',
      zipcode: '[data-qa="zipcode"]',
      mobileNumber: '[data-qa="mobile_number"]',
      createAccountButton: '[data-qa="create-account"]',
      accountCreatedMessage: '[data-qa="account-created"]',
      continueButton: '[data-qa="continue-button"]',
    });
  }

  completeAccountDetails(user) {
    this.check(user.title === 'Mr' ? 'titleMr' : 'titleMrs');

    const textFields = {
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      company: user.company,
      address1: user.address1,
      address2: user.address2,
      state: user.state,
      city: user.city,
      zipcode: user.zipcode,
      mobileNumber: user.mobileNumber,
    };

    Object.entries(textFields).forEach(([name, value]) => this.type(name, value));
    this.select('birthDay', user.birthDay);
    this.select('birthMonth', user.birthMonth);
    this.select('birthYear', user.birthYear);
    this.select('country', user.country);
  }

  createAccount() {
    return this.click('createAccountButton');
  }

  assertAccountCreated() {
    return this.assertVisible('accountCreatedMessage');
  }

  continueAfterRegistration() {
    return this.click('continueButton');
  }
}

module.exports = SignupPage;