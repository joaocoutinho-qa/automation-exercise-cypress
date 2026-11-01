const { faker } = require('@faker-js/faker');

function createAddress(overrides = {}) {
  return {
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: 'United States',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.string.numeric(10),
    ...overrides,
  };
}

module.exports = { createAddress };