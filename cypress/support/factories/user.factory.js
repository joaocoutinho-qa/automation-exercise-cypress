const { faker } = require('@faker-js/faker');
const { createAddress } = require('./address.factory');

function createUser(overrides = {}) {
  const birthDate = faker.date.birthdate({ mode: 'age', min: 18, max: 65 });

  return {
    title: faker.helpers.arrayElement(['Mr', 'Mrs']),
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password({ length: 16, memorable: false }),
    birthDay: String(birthDate.getDate()),
    birthMonth: String(birthDate.getMonth() + 1),
    birthYear: String(birthDate.getFullYear()),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    ...createAddress(),
    ...overrides,
  };
}

module.exports = { createUser };