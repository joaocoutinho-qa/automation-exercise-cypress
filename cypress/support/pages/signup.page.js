const BasePage = require('./base.page');

class SignupPage extends BasePage {
  constructor() {
    super({
      titleMr: null,
      titleMrs: null,
      password: null,
      birthDay: null,
      birthMonth: null,
      birthYear: null,
      firstName: null,
      lastName: null,
      company: null,
      address1: null,
      address2: null,
      country: null,
      state: null,
      city: null,
      zipcode: null,
      mobileNumber: null,
      createAccountButton: null,
      accountCreatedMessage: null,
      continueButton: null,
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