const { faker } = require('@faker-js/faker');

function createPaymentDetails(overrides = {}) {
  return {
    name: faker.person.fullName(),
    number: faker.string.numeric(16),
    cvc: faker.string.numeric(3),
    expiryMonth: String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0'),
    expiryYear: String(new Date().getFullYear() + 5),
    ...overrides,
  };
}

module.exports = { createPaymentDetails };